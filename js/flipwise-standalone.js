(function () {
  var MATRIX_CHARS = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ$+-=%#';
  var FALLBACK_ITEMS = [
    'Dragon armour set',
    'Torva armour set',
    'Inquisitor hauberk',
    'Ancestral robe top',
    'Elysian sigil',
    '3rd age druidic cloak',
    'Dragon full helm',
    'Masori body',
    'Virtus robe top',
    'Berserker necklace',
    'Dragonfruit sapling',
    'Battlemage potion'
  ];

  function ensureBackdrop() {
    if (document.querySelector('.flipwise-backdrop')) {
      refreshMatrix();
      return;
    }

    var backdrop = document.createElement('div');
    backdrop.className = 'flipwise-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    backdrop.innerHTML = [
      '<div class="flipwise-gradient-field"></div>',
      '<div class="flipwise-matrix" id="flipwiseMatrix"></div>',
      '<div class="flipwise-data-streams" id="flipwiseDataStreams"></div>',
      '<div class="flipwise-particles" id="flipwiseParticles"></div>'
    ].join('');
    document.body.insertBefore(backdrop, document.body.firstChild);
    buildMatrix();
    buildStreams();
    buildParticles();
    observeMarketItems();
  }

  function cleanItemName(name) {
    return String(name || '')
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s()+'.-]/g, '')
      .trim();
  }

  function getMarketItemNames() {
    var seen = {};
    var names = Array.from(document.querySelectorAll('.market-table .coin-name, #bestOpportunityList .transaction-title'))
      .map(function (node) { return cleanItemName(node.textContent); })
      .filter(function (name) {
        if (!name || seen[name]) return false;
        seen[name] = true;
        return true;
      });

    return names.length ? names : FALLBACK_ITEMS;
  }

  function makeMatrixColumnText(itemNames, index) {
    var name = itemNames[index % itemNames.length] || MATRIX_CHARS;
    var extra = itemNames[Math.floor(Math.random() * itemNames.length)] || name;
    var text = name + '  ' + extra;

    if (Math.random() > 0.45) {
      text += '  ' + MATRIX_CHARS.charAt(Math.floor(Math.random() * MATRIX_CHARS.length));
    }

    return text.toUpperCase().split('').join(' ');
  }

  function buildMatrix() {
    var matrix = document.getElementById('flipwiseMatrix');
    if (!matrix) return;

    matrix.textContent = '';
    var itemNames = getMarketItemNames();
    var columns = Math.max(10, Math.min(28, Math.floor(window.innerWidth / 52)));
    for (var i = 0; i < columns; i += 1) {
      var column = document.createElement('div');

      column.className = 'flipwise-matrix-column';
      column.textContent = makeMatrixColumnText(itemNames, i);
      column.style.left = ((i / columns) * 100).toFixed(2) + '%';
      column.style.animationDuration = (42 + Math.random() * 26).toFixed(2) + 's';
      column.style.animationDelay = (-Math.random() * 24).toFixed(2) + 's';
      matrix.appendChild(column);
    }
  }

  function refreshMatrix() {
    window.clearTimeout(window.flipwiseMatrixResizeTimer);
    window.flipwiseMatrixResizeTimer = window.setTimeout(buildMatrix, 180);
  }

  function observeMarketItems() {
    if (window.flipwiseMarketMatrixObserverBound || !window.MutationObserver) return;
    window.flipwiseMarketMatrixObserverBound = true;

    var bind = function () {
      var tableBody = document.querySelector('.market-table tbody');
      var bestList = document.getElementById('bestOpportunityList');
      var target = tableBody || bestList;
      if (!target) {
        window.setTimeout(bind, 500);
        return;
      }

      var observer = new MutationObserver(function () {
        refreshMatrix();
      });
      observer.observe(target, { childList: true });
      window.setTimeout(refreshMatrix, 600);
      window.setTimeout(refreshMatrix, 1800);
    };

    bind();
  }

  function buildStreams() {
    var streams = document.getElementById('flipwiseDataStreams');
    if (!streams || streams.children.length) return;

    for (var i = 0; i < 6; i += 1) {
      var stream = document.createElement('div');
      stream.className = 'flipwise-data-stream';
      stream.style.top = (6 + Math.random() * 88).toFixed(2) + '%';
      stream.style.animationDuration = (7 + Math.random() * 8).toFixed(2) + 's';
      stream.style.animationDelay = (-Math.random() * 10).toFixed(2) + 's';
      stream.style.transform = 'rotate(' + (-10 + Math.random() * 20).toFixed(2) + 'deg)';
      streams.appendChild(stream);
    }
  }

  function buildParticles() {
    var particles = document.getElementById('flipwiseParticles');
    if (!particles || particles.children.length) return;

    var count = window.innerWidth < 768 ? 8 : 18;
    for (var i = 0; i < count; i += 1) {
      var particle = document.createElement('div');
      particle.className = 'flipwise-particle';
      particle.style.left = (Math.random() * 100).toFixed(2) + '%';
      particle.style.top = (Math.random() * 100).toFixed(2) + '%';
      particle.style.animationDuration = (18 + Math.random() * 18).toFixed(2) + 's';
      particle.style.animationDelay = (-Math.random() * 26).toFixed(2) + 's';
      particles.appendChild(particle);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureBackdrop);
  } else {
    ensureBackdrop();
  }

  window.addEventListener('resize', refreshMatrix, { passive: true });
})();
