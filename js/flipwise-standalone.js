(function () {
  var THEME_KEY = 'flipwise-theme';

  var NEON_THEMES = { neon: 1, 'neon-black': 1, 'neon-blue': 1, 'neon-red': 1, cycle: 1 };
  var THEME_OPTIONS = [
    ['neon', 'Neon Purple'],
    ['neon-black', 'Neon Black'],
    ['neon-blue', 'Neon Blue'],
    ['neon-red', 'Neon Red'],
    ['cycle', 'Cycle'],
    ['copper', 'Copper']
  ];
  var CYCLE_MS = 22000;
  var cycleFrame = 0;
  var CYCLE_PROPS = [
    '--nx-bg', '--nx-bg-rgb', '--nx-surface-rgb', '--nx-side-rgb', '--nx-deep-rgb',
    '--nx-a1', '--nx-a1-rgb', '--nx-a1-soft',
    '--nx-a2', '--nx-a2-rgb',
    '--nx-a3', '--nx-a3-rgb', '--nx-a3-soft',
    '--nx-a4', '--nx-a4-rgb', '--nx-a4-soft'
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
    if (theme === 'cycle') startCycle();
    else stopCycle();
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

  function hslToRgb(h, s, l) {
    h = ((h % 360) + 360) % 360;
    s = s / 100;
    l = l / 100;
    var a = s * Math.min(l, 1 - l);
    function f(n) {
      var k = (n + h / 30) % 12;
      return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    }
    return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  }

  function rgbHex(rgb) {
    function hex(n) {
      var s = n.toString(16);
      return s.length === 1 ? '0' + s : s;
    }
    return '#' + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
  }

  function paintCycle(now) {
    var turn = ((now % CYCLE_MS) / CYCLE_MS) * 360;
    var root = document.documentElement;
    function accent(name, hue, light, softLight) {
      var rgb = hslToRgb(hue, 100, light);
      var soft = hslToRgb(hue, 100, softLight);
      root.style.setProperty('--nx-' + name, rgbHex(rgb));
      root.style.setProperty('--nx-' + name + '-rgb', rgb.join(', '));
      if (softLight != null) root.style.setProperty('--nx-' + name + '-soft', rgbHex(soft));
    }
    accent('a1', turn, 58, 78);
    accent('a2', turn + 62, 58, null);
    accent('a3', turn + 140, 54, 74);
    accent('a4', turn + 210, 58, 78);
    var bg = hslToRgb(turn, 48, 5);
    var surface = hslToRgb(turn, 46, 8);
    var side = hslToRgb(turn, 44, 10);
    var deep = hslToRgb(turn, 40, 3);
    root.style.setProperty('--nx-bg', rgbHex(bg));
    root.style.setProperty('--nx-bg-rgb', bg.join(', '));
    root.style.setProperty('--nx-surface-rgb', surface.join(', '));
    root.style.setProperty('--nx-side-rgb', side.join(', '));
    root.style.setProperty('--nx-deep-rgb', deep.join(', '));
  }

  function stopCycle() {
    if (cycleFrame) {
      cancelAnimationFrame(cycleFrame);
      cycleFrame = 0;
    }
    var root = document.documentElement;
    for (var i = 0; i < CYCLE_PROPS.length; i += 1) root.style.removeProperty(CYCLE_PROPS[i]);
  }

  function startCycle() {
    stopCycle();
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      paintCycle(0);
      return;
    }
    function tick(now) {
      if (currentTheme() !== 'cycle') return;
      paintCycle(now);
      cycleFrame = requestAnimationFrame(tick);
    }
    cycleFrame = requestAnimationFrame(tick);
  }

  function boot() {
    mountThemeSetting();
    if (isNeon(currentTheme())) ensureBackdrop();
    if (currentTheme() === 'cycle') startCycle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
