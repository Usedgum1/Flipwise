/**
 * Flipwise — Navigate to item detail page from any item row/card.
 */
(function() {
  'use strict';

  function url(itemName) {
    if (!itemName) return 'item.html';
    return 'item.html?name=' + encodeURIComponent(itemName);
  }

  function go(itemName) {
    if (!itemName) return;
    window.location.href = url(itemName);
  }

  function initClickNavigation() {
    document.addEventListener('click', function(e) {
      if (e.button !== 0) return;
      if (e.target.closest('button, a[href], input, label, .flipwise-context-menu, .flipwise-context-menu-item')) return;
      var el = e.target.closest('[data-item-name]');
      if (!el) return;
      var name = el.getAttribute('data-item-name');
      if (name) go(name);
    });
  }

  window.FlipwiseItemNav = { url: url, go: go };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClickNavigation);
  } else {
    initClickNavigation();
  }
})();
