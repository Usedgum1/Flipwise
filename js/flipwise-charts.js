/**
 * Flipwise — SVG price charts with volume, RSI, and hover tooltip.
 */
(function() {
  'use strict';

  var W = 480;
  var PRICE_H = 200;
  var VOL_H = 56;
  var RSI_H = 110;
  var PAD = { top: 12, right: 12, bottom: 28, left: 52 };
  var VOL_PAD = { top: 6, right: 12, bottom: 6, left: 52 };
  var RSI_PAD = { top: 18, right: 12, bottom: 10, left: 52 };
  var RSI_PERIOD = 14;

  function fmtGp(n) {
    if (n == null || n !== n || !isFinite(n)) return '—';
    var abs = Math.abs(n);
    if (abs >= 1e9) return (n / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
    if (abs >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    if (abs >= 1e4) return Math.round(n / 1000) + 'k';
    return String(Math.round(n));
  }

  function fmtGpFull(n) {
    if (n == null || n !== n || !isFinite(n)) return '—';
    return Math.round(n).toLocaleString() + ' gp';
  }

  function fmtMargin(n) {
    if (n == null || n !== n || !isFinite(n)) return '—';
    var sign = n >= 0 ? '+' : '';
    return sign + Math.round(n).toLocaleString() + ' gp';
  }

  function fmtTime(ts) {
    if (ts == null) return '';
    var ms = ts < 1e12 ? ts * 1000 : ts;
    var d = new Date(ms);
    return d.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' +
      d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }

  function escapeAttr(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;');
  }

  function escapeHtml(s) {
    if (s == null) return '';
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function geTax(sell) {
    if (sell == null || !sell) return 0;
    var maxTax = (window.Flipwise && window.Flipwise.MAX_TAX != null) ? window.Flipwise.MAX_TAX : 5000000;
    return Math.min(Math.floor(sell * 0.02), maxTax);
  }

  function buildSeries(data, valueKey) {
    var points = [];
    var last = null;
    for (var i = 0; i < (data || []).length; i++) {
      var row = data[i];
      if (!row || row.timestamp == null) continue;
      var v = row[valueKey];
      if (v != null && v === v) {
        last = Number(v);
        points.push({ t: row.timestamp, v: last, observed: true });
      } else if (last != null) {
        points.push({ t: row.timestamp, v: last, observed: false });
      }
    }
    return points;
  }

  function buildMidSeries(data) {
    var points = [];
    var last = null;
    for (var i = 0; i < (data || []).length; i++) {
      var row = data[i];
      if (!row || row.timestamp == null) continue;
      var high = row.avgHighPrice;
      var low = row.avgLowPrice;
      var mid = null;
      if (high != null && high === high && low != null && low === low) {
        mid = (Number(high) + Number(low)) / 2;
      } else if (high != null && high === high) {
        mid = Number(high);
      } else if (low != null && low === low) {
        mid = Number(low);
      }
      if (mid != null) {
        last = mid;
        points.push({ t: row.timestamp, v: last });
      } else if (last != null) {
        points.push({ t: row.timestamp, v: last });
      }
    }
    return points;
  }

  function buildVolumeSeries(data) {
    var points = [];
    for (var i = 0; i < (data || []).length; i++) {
      var row = data[i];
      if (!row || row.timestamp == null) continue;
      var buyVol = row.lowPriceVolume != null ? Number(row.lowPriceVolume) : 0;
      var sellVol = row.highPriceVolume != null ? Number(row.highPriceVolume) : 0;
      points.push({
        t: row.timestamp,
        buyVol: buyVol,
        sellVol: sellVol,
        total: buyVol + sellVol
      });
    }
    return points;
  }

  function calcRsi(midPts, period) {
    period = period || RSI_PERIOD;
    var out = [];
    if (!midPts || midPts.length < period + 1) return out;

    var i;
    var gainSum = 0;
    var lossSum = 0;
    for (i = 1; i <= period; i++) {
      var ch = midPts[i].v - midPts[i - 1].v;
      if (ch >= 0) gainSum += ch;
      else lossSum -= ch;
    }
    var avgGain = gainSum / period;
    var avgLoss = lossSum / period;

    function rsiFromAvgs(g, l) {
      if (l === 0) return 100;
      if (g === 0) return 0;
      return 100 - (100 / (1 + (g / l)));
    }

    out.push({ t: midPts[period].t, v: rsiFromAvgs(avgGain, avgLoss) });
    for (i = period + 1; i < midPts.length; i++) {
      var change = midPts[i].v - midPts[i - 1].v;
      var gain = change > 0 ? change : 0;
      var loss = change < 0 ? -change : 0;
      avgGain = ((avgGain * (period - 1)) + gain) / period;
      avgLoss = ((avgLoss * (period - 1)) + loss) / period;
      out.push({ t: midPts[i].t, v: rsiFromAvgs(avgGain, avgLoss) });
    }
    return out;
  }

  function pathForPoints(points, xScale, yScale) {
    if (!points.length) return '';
    var d = '';
    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      if (p.v == null || p.v !== p.v) continue;
      d += (d ? ' L' : 'M') + xScale(p.t) + ' ' + yScale(p.v);
    }
    return d;
  }

  function dotsForObserved(points, xScale, yScale, cls) {
    var html = '';
    for (var i = 0; i < points.length; i++) {
      if (!points[i].observed) continue;
      html +=
        '<circle cx="' + xScale(points[i].t) + '" cy="' + yScale(points[i].v) +
        '" r="2.5" class="' + cls + '"/>';
    }
    return html;
  }

  function rsiLevelLine(level, xScale, yScale, start, end, cls) {
    var y = yScale(level);
    return '<line x1="' + xScale(start) + '" y1="' + y + '" x2="' + xScale(end) +
      '" y2="' + y + '" class="' + cls + '"/>';
  }

  /** Nearest hover index by SVG x (viewBox coords). */
  function nearestIndex(hoverPts, svgX) {
    if (!hoverPts.length) return -1;
    var best = 0;
    var bestDist = Infinity;
    for (var i = 0; i < hoverPts.length; i++) {
      var d = Math.abs(hoverPts[i].x - svgX);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    }
    return best;
  }

  function clientToSvgX(svg, clientX) {
    var rect = svg.getBoundingClientRect();
    if (!rect.width) return null;
    return ((clientX - rect.left) / rect.width) * W;
  }

  function bindHover(wrap, hoverPts, plotLeft, plotRight) {
    var tooltip = wrap.querySelector('.flipwise-chart-tooltip');
    var crosshair = wrap.querySelector('.flipwise-chart-crosshair');
    var priceSvg = wrap.querySelector('.flipwise-price-chart');
    if (!tooltip || !crosshair || !priceSvg || !hoverPts.length) return;

    function hide() {
      tooltip.classList.remove('is-visible');
      crosshair.classList.remove('is-visible');
    }

    function showAt(clientX) {
      var svgX = clientToSvgX(priceSvg, clientX);
      if (svgX == null || svgX < plotLeft || svgX > plotRight) {
        hide();
        return;
      }
      var idx = nearestIndex(hoverPts, svgX);
      if (idx < 0) {
        hide();
        return;
      }
      var p = hoverPts[idx];
      var marginCls = p.margin != null && p.margin >= 0 ? 'positive' : (p.margin != null ? 'negative' : '');
      var roiStr = p.roi != null ? (p.roi >= 0 ? '+' : '') + p.roi.toFixed(1) + '%' : '—';
      tooltip.innerHTML =
        '<div class="flipwise-chart-tooltip-time">' + escapeHtml(fmtTime(p.t)) + '</div>' +
        '<div class="flipwise-chart-tooltip-row"><span>Buy</span><span class="positive">' + escapeHtml(fmtGpFull(p.buy)) + '</span></div>' +
        '<div class="flipwise-chart-tooltip-row"><span>Sell</span><span class="negative">' + escapeHtml(fmtGpFull(p.sell)) + '</span></div>' +
        '<div class="flipwise-chart-tooltip-row"><span>Margin</span><span class="' + marginCls + '">' +
          escapeHtml(fmtMargin(p.margin)) + (p.roi != null ? ' (' + escapeHtml(roiStr) + ')' : '') +
        '</span></div>' +
        '<div class="flipwise-chart-tooltip-row"><span>Volume</span><span>' +
          escapeHtml((p.buyVol || 0) + ' buy · ' + (p.sellVol || 0) + ' sell') +
        '</span></div>' +
        '<div class="flipwise-chart-tooltip-row"><span>RSI</span><span>' +
          escapeHtml(p.rsi != null ? p.rsi.toFixed(1) : '—') +
        '</span></div>';

      var wrapRect = wrap.getBoundingClientRect();
      var xPct = (p.x / W) * 100;
      crosshair.style.left = xPct + '%';
      crosshair.classList.add('is-visible');

      tooltip.classList.add('is-visible');
      var tipW = tooltip.offsetWidth || 180;
      var leftPx = (p.x / W) * wrapRect.width + 12;
      if (leftPx + tipW > wrapRect.width - 8) leftPx = (p.x / W) * wrapRect.width - tipW - 12;
      if (leftPx < 8) leftPx = 8;
      tooltip.style.left = leftPx + 'px';
      tooltip.style.top = '12px';
    }

    wrap.addEventListener('mousemove', function(e) { showAt(e.clientX); });
    wrap.addEventListener('mouseleave', hide);
    wrap.addEventListener('touchstart', function(e) {
      if (e.touches && e.touches[0]) showAt(e.touches[0].clientX);
    }, { passive: true });
    wrap.addEventListener('touchmove', function(e) {
      if (e.touches && e.touches[0]) showAt(e.touches[0].clientX);
    }, { passive: true });
  }

  /**
   * Render buy/sell price chart + volume + RSI(14) with hover tooltip.
   * series: { data, startTimestamp, endTimestamp, timestep }
   */
  function renderPriceChart(container, series) {
    if (!container) return;
    container.innerHTML = '';

    var data = series && series.data ? series.data : [];
    if (!data.length) {
      container.innerHTML = '<div class="flipwise-chart-placeholder text-muted">No chart data for this period.</div>';
      return;
    }

    var buyPts = buildSeries(data, 'avgLowPrice');
    var sellPts = buildSeries(data, 'avgHighPrice');
    if (!buyPts.length && !sellPts.length) {
      container.innerHTML = '<div class="flipwise-chart-placeholder text-muted">No chart data for this period.</div>';
      return;
    }

    var start = series.startTimestamp != null ? series.startTimestamp : data[0].timestamp;
    var end = series.endTimestamp != null ? series.endTimestamp : data[data.length - 1].timestamp;
    if (end <= start) end = start + 1;

    var minV = Infinity;
    var maxV = -Infinity;
    function scan(pts) {
      for (var i = 0; i < pts.length; i++) {
        if (pts[i].v < minV) minV = pts[i].v;
        if (pts[i].v > maxV) maxV = pts[i].v;
      }
    }
    scan(buyPts);
    scan(sellPts);
    if (!isFinite(minV) || !isFinite(maxV)) {
      container.innerHTML = '<div class="flipwise-chart-placeholder text-muted">No chart data for this period.</div>';
      return;
    }
    if (minV === maxV) {
      minV = minV * 0.98;
      maxV = maxV * 1.02;
    } else {
      var yPad = (maxV - minV) * 0.06;
      minV -= yPad;
      maxV += yPad;
    }

    var plotW = W - PAD.left - PAD.right;
    var plotH = PRICE_H - PAD.top - PAD.bottom;
    function xScale(t) {
      return PAD.left + ((t - start) / (end - start)) * plotW;
    }
    function yScale(v) {
      return PAD.top + plotH - ((v - minV) / (maxV - minV)) * plotH;
    }

    var buyPath = pathForPoints(buyPts, xScale, yScale);
    var sellPath = pathForPoints(sellPts, xScale, yScale);
    var buyDots = dotsForObserved(buyPts, xScale, yScale, 'flipwise-chart-dot flipwise-chart-dot--buy');
    var sellDots = dotsForObserved(sellPts, xScale, yScale, 'flipwise-chart-dot flipwise-chart-dot--sell');

    var gridLines = '';
    for (var g = 0; g <= 4; g++) {
      var gy = PAD.top + (plotH * g) / 4;
      var gv = maxV - ((maxV - minV) * g) / 4;
      gridLines +=
        '<line x1="' + PAD.left + '" y1="' + gy + '" x2="' + (W - PAD.right) + '" y2="' + gy +
        '" class="flipwise-chart-grid"/>' +
        '<text x="' + (PAD.left - 8) + '" y="' + (gy + 4) + '" class="flipwise-chart-axis" text-anchor="end">' +
        escapeAttr(fmtGp(gv)) + '</text>';
    }

    /* Volume */
    var volPts = buildVolumeSeries(data);
    var maxVol = 0;
    for (var vi = 0; vi < volPts.length; vi++) {
      if (volPts[vi].total > maxVol) maxVol = volPts[vi].total;
    }
    if (maxVol <= 0) maxVol = 1;
    var volPlotH = VOL_H - VOL_PAD.top - VOL_PAD.bottom;
    var barW = Math.max(1.5, Math.min(6, plotW / Math.max(volPts.length, 1) * 0.55));
    var volBars = '';
    for (var vb = 0; vb < volPts.length; vb++) {
      var vp = volPts[vb];
      if (!vp.total) continue;
      var cx = xScale(vp.t);
      var totalH = (vp.total / maxVol) * volPlotH;
      var sellH = (vp.sellVol / maxVol) * volPlotH;
      var buyH = totalH - sellH;
      var baseY = VOL_PAD.top + volPlotH;
      if (sellH > 0) {
        volBars +=
          '<rect x="' + (cx - barW / 2) + '" y="' + (baseY - sellH) + '" width="' + barW +
          '" height="' + sellH + '" class="flipwise-vol-bar flipwise-vol-bar--sell"/>';
      }
      if (buyH > 0) {
        volBars +=
          '<rect x="' + (cx - barW / 2) + '" y="' + (baseY - totalH) + '" width="' + barW +
          '" height="' + buyH + '" class="flipwise-vol-bar flipwise-vol-bar--buy"/>';
      }
    }

    /* RSI */
    var midPts = buildMidSeries(data);
    var rsiPts = calcRsi(midPts, RSI_PERIOD);
    var rsiByT = {};
    for (var ri = 0; ri < rsiPts.length; ri++) rsiByT[rsiPts[ri].t] = rsiPts[ri].v;
    var rsiPlotH = RSI_H - RSI_PAD.top - RSI_PAD.bottom;
    function rsiY(v) {
      return RSI_PAD.top + rsiPlotH - ((v - 0) / 100) * rsiPlotH;
    }
    var rsiPath = pathForPoints(rsiPts, xScale, rsiY);
    var lastRsi = rsiPts.length ? rsiPts[rsiPts.length - 1].v : null;
    var lastRsiLabel = lastRsi != null ? lastRsi.toFixed(1) : '—';
    var rsiState = '';
    if (lastRsi != null) {
      if (lastRsi >= 70) rsiState = 'overbought';
      else if (lastRsi <= 30) rsiState = 'oversold';
      else rsiState = 'neutral';
    }

    var rsiBands =
      '<rect x="' + PAD.left + '" y="' + rsiY(70) + '" width="' + plotW + '" height="' +
      (rsiY(30) - rsiY(70)) + '" class="flipwise-rsi-band"/>' +
      rsiLevelLine(70, xScale, rsiY, start, end, 'flipwise-rsi-level') +
      rsiLevelLine(50, xScale, rsiY, start, end, 'flipwise-rsi-mid') +
      rsiLevelLine(30, xScale, rsiY, start, end, 'flipwise-rsi-level');
    var rsiAxis =
      '<text x="' + (PAD.left - 8) + '" y="' + (rsiY(70) + 3) + '" class="flipwise-chart-axis" text-anchor="end">70</text>' +
      '<text x="' + (PAD.left - 8) + '" y="' + (rsiY(30) + 3) + '" class="flipwise-chart-axis" text-anchor="end">30</text>';

    /* Hover index from forward-filled buy/sell */
    var buyByT = {};
    var sellByT = {};
    for (var bi = 0; bi < buyPts.length; bi++) buyByT[buyPts[bi].t] = buyPts[bi].v;
    for (var si = 0; si < sellPts.length; si++) sellByT[sellPts[si].t] = sellPts[si].v;
    var volByT = {};
    for (var vj = 0; vj < volPts.length; vj++) volByT[volPts[vj].t] = volPts[vj];

    var timeSet = {};
    var times = [];
    function addT(t) {
      if (timeSet[t]) return;
      timeSet[t] = true;
      times.push(t);
    }
    Object.keys(buyByT).forEach(function(k) { addT(Number(k)); });
    Object.keys(sellByT).forEach(function(k) { addT(Number(k)); });
    times.sort(function(a, b) { return a - b; });

    var hoverPts = [];
    for (var hi = 0; hi < times.length; hi++) {
      var t = times[hi];
      var buy = buyByT[t];
      var sell = sellByT[t];
      var tax = sell != null ? geTax(sell) : 0;
      var margin = (buy != null && sell != null) ? (sell - tax) - buy : null;
      var roi = (margin != null && buy > 0) ? (margin / buy * 100) : null;
      var vol = volByT[t] || { buyVol: 0, sellVol: 0, total: 0 };
      hoverPts.push({
        t: t,
        x: xScale(t),
        buy: buy != null ? buy : null,
        sell: sell != null ? sell : null,
        margin: margin,
        roi: roi,
        buyVol: vol.buyVol || 0,
        sellVol: vol.sellVol || 0,
        rsi: rsiByT[t] != null ? rsiByT[t] : null
      });
    }

    var priceSvg =
      '<svg class="flipwise-price-chart" viewBox="0 0 ' + W + ' ' + PRICE_H + '" role="img" aria-label="Buy and sell price chart">' +
        gridLines +
        (buyPath ? '<path d="' + escapeAttr(buyPath) + '" class="flipwise-chart-line flipwise-chart-line--buy" fill="none"/>' : '') +
        (sellPath ? '<path d="' + escapeAttr(sellPath) + '" class="flipwise-chart-line flipwise-chart-line--sell" fill="none"/>' : '') +
        buyDots +
        sellDots +
        '<text x="' + PAD.left + '" y="' + (PRICE_H - 8) + '" class="flipwise-chart-axis">' + escapeAttr(fmtTime(start)) + '</text>' +
        '<text x="' + (W - PAD.right) + '" y="' + (PRICE_H - 8) + '" class="flipwise-chart-axis" text-anchor="end">' + escapeAttr(fmtTime(end)) + '</text>' +
      '</svg>';

    var volSvg =
      '<svg class="flipwise-vol-chart" viewBox="0 0 ' + W + ' ' + VOL_H + '" role="img" aria-label="Trade volume">' +
        '<text x="' + PAD.left + '" y="10" class="flipwise-rsi-title">Volume</text>' +
        volBars +
        '<text x="' + (PAD.left - 8) + '" y="' + (VOL_PAD.top + 8) + '" class="flipwise-chart-axis" text-anchor="end">' +
          escapeAttr(fmtGp(maxVol)) +
        '</text>' +
      '</svg>';

    var rsiSvg =
      '<svg class="flipwise-rsi-chart" viewBox="0 0 ' + W + ' ' + RSI_H + '" role="img" aria-label="RSI 14">' +
        rsiBands +
        rsiAxis +
        (rsiPath ? '<path d="' + escapeAttr(rsiPath) + '" class="flipwise-chart-line flipwise-chart-line--rsi" fill="none"/>' : '') +
        '<text x="' + PAD.left + '" y="12" class="flipwise-rsi-title">RSI (14)</text>' +
      '</svg>';

    var legend =
      '<div class="flipwise-chart-legend">' +
        '<span class="flipwise-chart-legend-item"><span class="flipwise-chart-swatch flipwise-chart-swatch--buy"></span>Buy (low)</span>' +
        '<span class="flipwise-chart-legend-item"><span class="flipwise-chart-swatch flipwise-chart-swatch--sell"></span>Sell (high)</span>' +
        '<span class="flipwise-chart-legend-item"><span class="flipwise-chart-swatch flipwise-chart-swatch--vol"></span>Volume</span>' +
        '<span class="flipwise-chart-legend-item"><span class="flipwise-chart-swatch flipwise-chart-swatch--rsi"></span>Current RSI: ' +
          escapeAttr(lastRsiLabel) +
          (rsiState ? ' · ' + escapeAttr(rsiState) : '') +
        '</span>' +
      '</div>';

    var wrapHtml =
      '<div class="flipwise-chart-wrap">' +
        '<div class="flipwise-chart-crosshair" aria-hidden="true"></div>' +
        '<div class="flipwise-chart-tooltip" role="status"></div>' +
        priceSvg +
        volSvg +
        (rsiPts.length ? rsiSvg : '<div class="flipwise-chart-placeholder text-muted">Not enough bars for RSI (need ' + (RSI_PERIOD + 1) + '+).</div>') +
        legend +
      '</div>';

    container.innerHTML = wrapHtml;
    bindHover(container.querySelector('.flipwise-chart-wrap'), hoverPts, PAD.left, W - PAD.right);
  }

  window.FlipwiseCharts = { renderPriceChart: renderPriceChart };
})();
