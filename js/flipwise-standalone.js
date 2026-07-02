(function () {
  function ensureBackdrop() {
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureBackdrop);
  } else {
    ensureBackdrop();
  }
})();
