/**
 * Flipwise — Shared refresh + auto-refresh for pages.
 * Usage: FlipwiseRefresh.bind({ onData: function(data) { ... }, onError: optional })
 */
(function() {
  'use strict';

  var LAST_REFRESH_KEY = 'flipwise-last-refresh-ts';
  var AUTO_REFRESH_KEY = 'flipwise-auto-refresh';
  var REFRESH_RATE_MS = 15000;
  var timer = null;

  function stampRefresh() {
    var t = Date.now();
    try {
      localStorage.setItem(LAST_REFRESH_KEY, String(t));
      sessionStorage.setItem(LAST_REFRESH_KEY, String(t));
    } catch (e) {}
    return t;
  }

  function getAutoEnabled(checkbox) {
    if (checkbox) return !!checkbox.checked;
    try {
      var saved = localStorage.getItem(AUTO_REFRESH_KEY);
      if (saved !== null) return saved === 'true';
    } catch (e) {}
    return true;
  }

  function persistAuto(enabled) {
    try { localStorage.setItem(AUTO_REFRESH_KEY, enabled ? 'true' : 'false'); } catch (e) {}
  }

  /**
   * @param {object} opts
   * @param {function} opts.onData - called with refresh payload
   * @param {function} [opts.onError]
   * @param {boolean} [opts.autoStart=true] - run one refresh immediately
   */
  function bind(opts) {
    opts = opts || {};
    var onData = opts.onData;
    var onError = opts.onError;
    var refreshBtn = document.getElementById('refresh-btn');
    var autoCheckbox = document.getElementById('auto-refresh-checkbox');

    if (autoCheckbox) {
      try {
        var saved = localStorage.getItem(AUTO_REFRESH_KEY);
        if (saved !== null) autoCheckbox.checked = saved === 'true';
      } catch (e) {}
    }

    function stopAuto() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function startAuto() {
      stopAuto();
      if (!getAutoEnabled(autoCheckbox)) return;
      timer = setInterval(function() { doRefresh(false); }, REFRESH_RATE_MS);
    }

    function doRefresh(disableBtn) {
      if (typeof window.FlipwiseAPI === 'undefined' || !window.FlipwiseAPI.refresh) {
        if (onError) onError(new Error('API unavailable'));
        return Promise.resolve();
      }
      if (disableBtn && refreshBtn) refreshBtn.disabled = true;
      return window.FlipwiseAPI.refresh().then(function(data) {
        stampRefresh();
        if (typeof onData === 'function') onData(data);
        return data;
      }).catch(function(err) {
        if (typeof onError === 'function') onError(err);
      }).finally(function() {
        if (refreshBtn) refreshBtn.disabled = false;
      });
    }

    if (refreshBtn && !refreshBtn._flipwiseRefreshBound) {
      refreshBtn._flipwiseRefreshBound = true;
      refreshBtn.addEventListener('click', function() { doRefresh(true); });
    }

    if (autoCheckbox && !autoCheckbox._flipwiseRefreshBound) {
      autoCheckbox._flipwiseRefreshBound = true;
      autoCheckbox.addEventListener('change', function() {
        persistAuto(autoCheckbox.checked);
        if (autoCheckbox.checked) {
          doRefresh(false);
          startAuto();
        } else {
          stopAuto();
        }
      });
    }

    if (opts.autoStart !== false) {
      doRefresh(false).then(function() {
        startAuto();
      });
    } else {
      startAuto();
    }

    return { refresh: doRefresh, startAuto: startAuto, stopAuto: stopAuto };
  }

  window.FlipwiseRefresh = { bind: bind, stamp: stampRefresh };
})();
