(function () {
  var THEME_KEY = 'flipwise-theme';

  var NEON_THEMES = { neon: 1, 'neon-black': 1, 'neon-blue': 1, 'neon-red': 1 };
  var THEME_OPTIONS = [
    ['neon', 'Neon Purple'],
    ['neon-black', 'Neon Black'],
    ['neon-blue', 'Neon Blue'],
    ['neon-red', 'Neon Red'],
    ['copper', 'Copper']
  ];

  function themeLabel(theme) {
    for (var i = 0; i < THEME_OPTIONS.length; i += 1) {
      if (THEME_OPTIONS[i][0] === theme) return THEME_OPTIONS[i][1];
    }
    return 'Neon Purple';
  }

  function syncThemeControl(theme) {
    var button = document.getElementById('themeSelect');
    if (!button) return;
    button.value = theme;
    button.textContent = themeLabel(theme);
    button.setAttribute('aria-label', 'Theme, ' + themeLabel(theme));
    var options = document.querySelectorAll('.sidebar-theme-option');
    for (var i = 0; i < options.length; i += 1) {
      var on = options[i].getAttribute('data-value') === theme;
      options[i].classList.toggle('is-current', on);
      options[i].setAttribute('aria-selected', on ? 'true' : 'false');
    }
  }

  function isNeon(theme) {
    return !!NEON_THEMES[theme];
  }

  function currentTheme() {
    var theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'copper' || NEON_THEMES[theme]) return theme;
    return 'neon';
  }

  function applyTheme(theme) {
    if (theme !== 'copper' && !NEON_THEMES[theme]) theme = 'neon';
    document.documentElement.setAttribute('data-theme', theme);
    var link = document.getElementById('flipwise-neon-theme');
    if (link) link.disabled = !isNeon(theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    var backdrop = document.querySelector('.flipwise-backdrop');
    if (isNeon(theme)) ensureBackdrop();
    backdrop = document.querySelector('.flipwise-backdrop');
    if (backdrop) backdrop.hidden = !isNeon(theme);
    syncThemeControl(theme);
    var wrap = document.querySelector('.sidebar-theme');
    if (wrap) wrap.classList.remove('is-open');
    var button = document.getElementById('themeSelect');
    if (button) button.setAttribute('aria-expanded', 'false');
  }

  function mountThemeSetting() {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar || document.getElementById('themeSelect')) return;
    var wrap = document.createElement('div');
    wrap.className = 'sidebar-theme';
    var options = '';
    for (var i = 0; i < THEME_OPTIONS.length; i += 1) {
      options += '<li role="none"><button type="button" class="sidebar-theme-option" role="option" data-value="' +
        THEME_OPTIONS[i][0] + '">' + THEME_OPTIONS[i][1] + '</button></li>';
    }
    wrap.innerHTML =
      '<span class="sidebar-theme-label" id="themeLabel">Theme</span>' +
      '<button type="button" id="themeSelect" class="sidebar-theme-select" aria-haspopup="listbox" aria-expanded="false"></button>' +
      '<ul class="sidebar-theme-menu" id="themeMenu" role="listbox" aria-labelledby="themeLabel" hidden>' + options + '</ul>';
    var nav = sidebar.querySelector('.nav-section');
    if (nav) sidebar.insertBefore(wrap, nav);
    else sidebar.appendChild(wrap);
    syncThemeControl(currentTheme());
    var button = wrap.querySelector('#themeSelect');
    var menu = wrap.querySelector('#themeMenu');
    function setOpen(open) {
      wrap.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) menu.removeAttribute('hidden');
      else menu.setAttribute('hidden', '');
    }
    button.addEventListener('click', function () {
      setOpen(!wrap.classList.contains('is-open'));
    });
    menu.addEventListener('click', function (event) {
      var option = event.target.closest('.sidebar-theme-option');
      if (!option) return;
      applyTheme(option.getAttribute('data-value'));
    });
    document.addEventListener('click', function (event) {
      if (!wrap.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setOpen(false);
    });
  }

  function ensureBackdrop() {
    if (!isNeon(currentTheme())) return;
    if (document.querySelector('.flipwise-backdrop')) {
      return;
    }

    var backdrop = document.createElement('div');
    backdrop.className = 'flipwise-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    backdrop.innerHTML = [
      '<div class="flipwise-gradient-field"></div>',
      '<div class="flipwise-data-streams" id="flipwiseDataStreams"></div>',
      '<div class="flipwise-particles" id="flipwiseParticles"></div>'
    ].join('');
    document.body.insertBefore(backdrop, document.body.firstChild);
    buildStreams();
    buildParticles();
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

  function boot() {
    mountThemeSetting();
    if (isNeon(currentTheme())) ensureBackdrop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
