/**
 * Sidebar clock — live clock + "Refreshed X ago" from localStorage.
 * Page refresh / auto-refresh is handled by FlipwiseRefresh (or page-local logic).
 */
(function() {
  'use strict';
  var LAST_REFRESH_KEY = 'flipwise-last-refresh-ts';
  var clockEl = document.getElementById('refresh-clock');
  var lastEl = document.getElementById('refresh-last');

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function timeAgo(ts) {
    if (ts == null || ts === undefined || !isFinite(ts)) return '—';
    var ms = ts < 1e12 ? ts * 1000 : ts;
    var sec = Math.floor((Date.now() - ms) / 1000);
    if (sec < 60) return 'Just now';
    if (sec < 3600) return Math.floor(sec / 60) + ' min ago';
    return (sec / 3600).toFixed(1) + ' hr ago';
  }

  function getLastRefreshTs() {
    try {
      var saved = localStorage.getItem(LAST_REFRESH_KEY) || sessionStorage.getItem(LAST_REFRESH_KEY);
      if (saved && saved.trim()) {
        var n = parseInt(saved, 10);
        if (!isNaN(n) && n > 0) return n;
      }
    } catch (e) {}
    return null;
  }

  function updateClock() {
    var d = new Date();
    var h = d.getHours();
    var isPm = h >= 12;
    var h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
    var time12 = h12 + ':' + pad2(d.getMinutes()) + ':' + pad2(d.getSeconds()) + (isPm ? ' PM' : ' AM');
    if (clockEl) clockEl.textContent = time12;
    if (lastEl) {
      var ts = getLastRefreshTs();
      lastEl.textContent = ts ? 'Refreshed ' + timeAgo(ts) : '—';
    }
  }

  if (!clockEl && !lastEl) return;
  updateClock();
  setInterval(updateClock, 1000);
})();
