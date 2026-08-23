/**
 * Flipwise — Item detail page (breakdown + chart).
 */
(function() {
  'use strict';

  var WIKI_ICON_BASE = 'https://oldschool.runescape.wiki/images/';
  var chartLookback = '7d';
  var chartRequestId = 0;
  var lastData = null;
  var itemName = null;

  function escapeHtml(s) {
    if (s == null) return '';
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function getQueryName() {
    try {
      var params = new URLSearchParams(window.location.search);
      return params.get('name') || '';
    } catch (e) {
      return '';
    }
  }

  function timeAgo(ts) {
    if (ts == null || ts === undefined) return '—';
    var ms = typeof ts === 'number' && ts < 1e12 ? ts * 1000 : ts;
    var sec = Math.floor((Date.now() - ms) / 1000);
    if (sec < 60) return 'Just now';
    if (sec < 3600) return Math.floor(sec / 60) + ' min ago';
    return (sec / 3600).toFixed(1) + ' hr ago';
  }

  function fmtProfit(p) {
    if (p == null || p !== p) return '—';
    var s = p >= 0 ? '+' : '';
    return s + Number(p).toLocaleString() + ' gp';
  }

  function getDataByName(data, name) {
    if (!data || !name) return null;
    return (data.itemData && data.itemData[name]) ||
      (data.thirdAgeData && data.thirdAgeData[name]) ||
      (data.runesData && data.runesData[name]) ||
      (data.herbloreData && data.herbloreData[name]) ||
      (data.scannerData && data.scannerData[name]) ||
      null;
  }

  function buildFromPrices(data, name) {
    var id = data.idByName && data.idByName[name];
    if (id == null) return null;
    var raw = data.prices && data.prices[String(id)] ? data.prices[String(id)] : {};
    var high = raw.high;
    var low = raw.low;
    var icon = data.iconById && data.iconById[String(id)];
    if (!high && !low) {
      return {
        high: high || null,
        low: low || null,
        profit: null,
        roi: null,
        highTime: raw.highTime,
        lowTime: raw.lowTime,
        icon: icon || null
      };
    }
    if (!high || !low) {
      return {
        high: high || null,
        low: low || null,
        profit: null,
        roi: null,
        highTime: raw.highTime,
        lowTime: raw.lowTime,
        icon: icon || null
      };
    }
    var F = window.Flipwise || {};
    var maxTax = F.MAX_TAX != null ? F.MAX_TAX : 5000000;
    var tax = Math.min(Math.floor(high * 0.02), maxTax);
    var profit = (high - tax) - low;
    var roi = low > 0 ? (profit / low * 100) : 0;
    return {
      high: high,
      low: low,
      profit: profit,
      roi: roi,
      highTime: raw.highTime,
      lowTime: raw.lowTime,
      icon: icon || null
    };
  }

  function resolveItemRow(data, name) {
    var row = getDataByName(data, name);
    if (row) return row;
    return buildFromPrices(data, name);
  }

  function getBuyLimit(data, name) {
    var id = data.idByName && data.idByName[name];
    if (id == null || !data.mapping) return null;
    for (var i = 0; i < data.mapping.length; i++) {
      var m = data.mapping[i];
      if (m && m.id === id && m.limit != null) return m.limit;
    }
    return null;
  }

  function itemIconHtml(d, fallbackLetter) {
    var letter = (fallbackLetter || '?').charAt(0) || '?';
    if (d && d.icon) {
      var filename = String(d.icon).replace(/ /g, '_');
      var url = WIKI_ICON_BASE + encodeURIComponent(filename);
      return '<img src="' + escapeHtml(url) + '" alt="" class="item-icon" loading="lazy" referrerpolicy="no-referrer" data-fallback="' + escapeHtml(letter) + '" onerror="var f=this.getAttribute(\'data-fallback\')||\'?\'; var s=document.createElement(\'span\'); s.className=\'item-icon-fallback\'; s.textContent=f; this.parentNode.replaceChild(s,this);">';
    }
    return '<span class="item-icon-fallback">' + escapeHtml(letter) + '</span>';
  }

  function wikiUrl(name, idByName) {
    var id = idByName && idByName[name];
    if (id != null) {
      return 'https://oldschool.runescape.wiki/w/' + encodeURIComponent(String(name).replace(/ /g, '_'));
    }
    return 'https://oldschool.runescape.wiki/w/' + encodeURIComponent(String(name).replace(/ /g, '_'));
  }

  function setChartTab(lookback) {
    chartLookback = lookback || '7d';
    document.querySelectorAll('#itemChartTabs .chart-tab').forEach(function(tab) {
      tab.classList.toggle('active', tab.getAttribute('data-lookback') === chartLookback);
    });
  }

  function loadChart() {
    var chartEl = document.getElementById('itemPageChart');
    if (!chartEl || !itemName || !lastData) return;
    var itemId = lastData.idByName && lastData.idByName[itemName];
    if (itemId == null) {
      chartEl.innerHTML = '<div class="flipwise-chart-placeholder text-muted">Chart not available for this item.</div>';
      return;
    }
    if (typeof FlipwiseAPI === 'undefined' || !FlipwiseAPI.fetchTimeseries) {
      chartEl.innerHTML = '<div class="flipwise-chart-placeholder text-muted">Chart unavailable.</div>';
      return;
    }
    var reqId = ++chartRequestId;
    chartEl.innerHTML = '<div class="flipwise-chart-placeholder text-muted">Loading chart…</div>';
    FlipwiseAPI.fetchTimeseries(itemId, chartLookback).then(function(series) {
      if (reqId !== chartRequestId) return;
      if (window.FlipwiseCharts && window.FlipwiseCharts.renderPriceChart) {
        FlipwiseCharts.renderPriceChart(chartEl, series);
      }
    }).catch(function() {
      if (reqId !== chartRequestId) return;
      chartEl.innerHTML = '<div class="flipwise-chart-placeholder text-muted">Failed to load chart.</div>';
    });
  }

  function renderStats(row, data) {
    var statsEl = document.getElementById('itemPageStats');
    if (!statsEl) return;
    if (!row) {
      statsEl.innerHTML = '<p class="text-muted">No live GE data for this item.</p>';
      return;
    }

    var isVolume = row.profitPer != null && row.profitLimit != null && row.profit == null;
    var rows = [];
    rows.push({ label: 'Buy', value: row.low != null ? Number(row.low).toLocaleString() + ' gp' : '—' });
    rows.push({ label: 'Sell', value: row.high != null ? Number(row.high).toLocaleString() + ' gp' : '—' });

    if (isVolume) {
      rows.push({ label: 'Profit per', value: fmtProfit(row.profitPer), cls: row.profitPer > 0 ? 'positive' : row.profitPer < 0 ? 'negative' : '' });
      rows.push({ label: 'Profit limit', value: fmtProfit(row.profitLimit), cls: row.profitLimit > 0 ? 'positive' : row.profitLimit < 0 ? 'negative' : '' });
      if (row.limit != null) rows.push({ label: 'GE limit', value: Number(row.limit).toLocaleString() });
    } else {
      rows.push({ label: 'Profit', value: fmtProfit(row.profit), cls: row.profit > 0 ? 'positive' : row.profit < 0 ? 'negative' : '' });
      rows.push({ label: 'ROI', value: row.roi != null ? Number(row.roi).toFixed(1) + '%' : '—' });
      var limit = getBuyLimit(data, itemName);
      if (limit != null) rows.push({ label: 'GE limit', value: Number(limit).toLocaleString() });
      rows.push({ label: 'Buy time', value: timeAgo(row.lowTime) });
      rows.push({ label: 'Sell time', value: timeAgo(row.highTime) });
    }

    statsEl.innerHTML = rows.map(function(r) {
      return '<div class="item-page-stat">' +
        '<div class="item-page-stat-label">' + escapeHtml(r.label) + '</div>' +
        '<div class="item-page-stat-value' + (r.cls ? ' ' + r.cls : '') + '">' + escapeHtml(r.value) + '</div>' +
      '</div>';
    }).join('');
  }

  function updateAlertButtons(row) {
    var buyBtn = document.getElementById('itemAlertBuyBtn');
    var sellBtn = document.getElementById('itemAlertSellBtn');
    if (!buyBtn || !sellBtn) return;
    var hasBuy = window.FlipwiseAlerts && window.FlipwiseAlerts.hasAlert(itemName, 'buy');
    var hasSell = window.FlipwiseAlerts && window.FlipwiseAlerts.hasAlert(itemName, 'sell');
    buyBtn.textContent = hasBuy ? 'Clear buy alert' : 'Set buy alert';
    sellBtn.textContent = hasSell ? 'Clear sell alert' : 'Set sell alert';
    buyBtn.disabled = !row || row.lowTime == null;
    sellBtn.disabled = !row || row.highTime == null;
  }

  function renderPage(data) {
    lastData = data;
    var row = resolveItemRow(data, itemName);
    document.title = itemName + ' - Flipwise';

    var iconEl = document.getElementById('itemPageIcon');
    var nameEl = document.getElementById('itemPageName');
    var metaEl = document.getElementById('itemPageMeta');
    if (nameEl) nameEl.textContent = itemName;
    if (iconEl) iconEl.innerHTML = itemIconHtml(row || {}, itemName.charAt(0));
    if (metaEl) {
      var id = data.idByName && data.idByName[itemName];
      metaEl.textContent = id != null ? 'Item ID ' + id : 'Item not found in GE mapping';
    }

    var wikiLink = document.getElementById('itemPageWikiLink');
    if (wikiLink) {
      wikiLink.href = wikiUrl(itemName, data.idByName);
    }

    renderStats(row, data);
    updateAlertButtons(row);
    loadChart();
  }

  function bindAlerts() {
    var buyBtn = document.getElementById('itemAlertBuyBtn');
    var sellBtn = document.getElementById('itemAlertSellBtn');
    if (!buyBtn || !sellBtn) return;

    buyBtn.addEventListener('click', function() {
      if (!lastData || !window.FlipwiseAlerts) return;
      var row = resolveItemRow(lastData, itemName);
      if (!row) return;
      if (FlipwiseAlerts.hasAlert(itemName, 'buy')) {
        FlipwiseAlerts.clearAlert(itemName, 'buy');
        if (window.FlipwiseSounds) FlipwiseSounds.playAlertSet();
        FlipwiseAlerts.appendEvent(itemName + ' buy alert cleared.', 'alert-clear');
      } else {
        FlipwiseAlerts.setAlert(itemName, 'buy', row.lowTime != null ? row.lowTime : 0);
        if (window.FlipwiseSounds) FlipwiseSounds.playAlertSet();
        FlipwiseAlerts.appendEvent(itemName + ' buy alert set.', 'alert-set');
      }
      updateAlertButtons(row);
    });

    sellBtn.addEventListener('click', function() {
      if (!lastData || !window.FlipwiseAlerts) return;
      var row = resolveItemRow(lastData, itemName);
      if (!row) return;
      if (FlipwiseAlerts.hasAlert(itemName, 'sell')) {
        FlipwiseAlerts.clearAlert(itemName, 'sell');
        if (window.FlipwiseSounds) FlipwiseSounds.playAlertSet();
        FlipwiseAlerts.appendEvent(itemName + ' sell alert cleared.', 'alert-clear');
      } else {
        FlipwiseAlerts.setAlert(itemName, 'sell', row.highTime != null ? row.highTime : 0);
        if (window.FlipwiseSounds) FlipwiseSounds.playAlertSet();
        FlipwiseAlerts.appendEvent(itemName + ' sell alert set.', 'alert-set');
      }
      updateAlertButtons(row);
    });
  }

  function bindChartTabs() {
    var tabsWrap = document.getElementById('itemChartTabs');
    if (!tabsWrap) return;
    tabsWrap.addEventListener('click', function(e) {
      var btn = e.target.closest('.chart-tab');
      if (!btn) return;
      var lookback = btn.getAttribute('data-lookback');
      if (!lookback || lookback === chartLookback) return;
      setChartTab(lookback);
      loadChart();
    });
  }

  function showError(msg) {
    var nameEl = document.getElementById('itemPageName');
    var statsEl = document.getElementById('itemPageStats');
    if (nameEl) nameEl.textContent = 'Item';
    if (statsEl) statsEl.innerHTML = '<p class="text-muted">' + escapeHtml(msg) + '</p>';
  }

  function init() {
    itemName = getQueryName().trim();
    if (!itemName) {
      showError('No item specified. Open an item from Markets or Scanner.');
      return;
    }

    bindAlerts();
    bindChartTabs();
    setChartTab(chartLookback);

    var refreshBtn = document.getElementById('refresh-btn');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', function() {
        if (typeof FlipwiseAPI === 'undefined') return;
        refreshBtn.disabled = true;
        FlipwiseAPI.refresh().then(function(data) {
          var t = Date.now();
          try {
            localStorage.setItem('flipwise-last-refresh-ts', String(t));
            sessionStorage.setItem('flipwise-last-refresh-ts', String(t));
          } catch (e) {}
          if (window.FlipwiseAlerts && window.FlipwiseAlerts.checkAlerts) {
            FlipwiseAlerts.checkAlerts(data, data.idByName || {});
          }
          renderPage(data);
        }).catch(function() {
          showError('Failed to load item data.');
        }).finally(function() {
          refreshBtn.disabled = false;
        });
      });
    }

    if (typeof FlipwiseAPI === 'undefined') {
      showError('API unavailable.');
      return;
    }

    FlipwiseAPI.refresh().then(function(data) {
      var t = Date.now();
      try {
        localStorage.setItem('flipwise-last-refresh-ts', String(t));
        sessionStorage.setItem('flipwise-last-refresh-ts', String(t));
      } catch (e) {}
      if (window.FlipwiseAlerts && window.FlipwiseAlerts.checkAlerts) {
        FlipwiseAlerts.checkAlerts(data, data.idByName || {});
      }
      renderPage(data);
    }).catch(function() {
      showError('Failed to load item data.');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
