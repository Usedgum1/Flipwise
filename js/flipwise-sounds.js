/**
 * Flipwise — Sound playback (startup, alert set/triggered, trend up/down).
 * Uses original MP3s from the Python project (sounds/ folder).
 */
(function() {
  'use strict';

  var SOUNDS_BASE = 'sounds';
  var bootMute = true;
  var startupPlayed = false;

  function play(soundName) {
    var audio = new Audio(SOUNDS_BASE + '/' + soundName + '.mp3');
    audio.volume = 1;
    var p = audio.play();
    if (p && typeof p.catch === 'function') p.catch(function() {});
    return p;
  }

  function isSoundEnabled() {
    try {
      var v = localStorage.getItem('flipwise-sound-enabled');
      return v === null || v === 'true';
    } catch (e) { return true; }
  }

  function setSoundEnabled(on) {
    try { localStorage.setItem('flipwise-sound-enabled', on ? 'true' : 'false'); } catch (e) {}
  }

  function mountSoundToggle() {
    var actions = document.querySelector('.sidebar-time-actions');
    if (!actions || document.getElementById('sound-toggle')) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'sound-toggle';
    btn.className = 'sidebar-time-btn sidebar-sound-btn';
    function paint() {
      var on = isSoundEnabled();
      btn.textContent = on ? 'Sound on' : 'Muted';
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.title = on ? 'Mute alert sounds' : 'Unmute alert sounds';
    }
    btn.addEventListener('click', function() {
      setSoundEnabled(!isSoundEnabled());
      paint();
    });
    paint();
    actions.appendChild(btn);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountSoundToggle);
  else mountSoundToggle();

  /** Play startup sound once when app loads (called from Dashboard or first page). */
  function playStartup() {
    if (!isSoundEnabled()) return;
    var p = play('startup');
    if (p && typeof p.then === 'function') {
      p.then(function() { startupPlayed = true; }).catch(function() {});
    } else {
      startupPlayed = true;
    }
  }

  /** If startup was blocked by autoplay policy, play it on first user interaction. Call once from dashboard after adding a one-time click/key listener. */
  function playStartupOnceOnInteraction() {
    if (!isSoundEnabled() || startupPlayed) return;
    play('startup');
    startupPlayed = true;
  }

  /** Play when user sets or clears an alert. */
  function playAlertSet() {
    if (bootMute || !isSoundEnabled()) return;
    play('alertset');
  }

  /** Play when a buy/sell alert triggers. */
  function playAlertTriggered() {
    if (bootMute || !isSoundEnabled()) return;
    play('customalert');
  }

  /** Play for trend-up (surge) alert. */
  function playTrendUp() {
    if (bootMute || !isSoundEnabled()) return;
    play('trendup');
  }

  /** Play for trend-down (crash) alert. */
  function playTrendDown() {
    if (bootMute || !isSoundEnabled()) return;
    play('trenddown');
  }

  /** Clear boot mute so alert sounds can play (call after ~3s from load). */
  function clearBootMute() {
    bootMute = false;
  }

  setTimeout(clearBootMute, 3000);

  window.FlipwiseSounds = {
    playStartup: playStartup,
    playStartupOnceOnInteraction: playStartupOnceOnInteraction,
    playAlertSet: playAlertSet,
    playAlertTriggered: playAlertTriggered,
    playTrendUp: playTrendUp,
    playTrendDown: playTrendDown,
    clearBootMute: clearBootMute,
    isSoundEnabled: isSoundEnabled
  };
})();
