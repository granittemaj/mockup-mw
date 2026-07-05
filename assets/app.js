/* Mark Wexler, shared behaviour */
(function () {
  // Sticky header background on scroll
  var hdr = document.getElementById('hdr');
  if (hdr && !hdr.classList.contains('solid')) {
    var onScroll = function () { hdr.classList.toggle('scrolled', window.scrollY > 60); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile hamburger menu
  var navToggle = document.querySelector('.navtoggle');
  if (hdr && navToggle) {
    navToggle.addEventListener('click', function () {
      var open = hdr.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    hdr.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        hdr.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal on scroll
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

    // Count-up stats
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        var el = e.target,
          to = +el.dataset.to,
          pre = el.dataset.prefix || '',
          suf = el.dataset.suffix || '',
          s = null, dur = 1100;
        var step = function (t) {
          if (!s) s = t;
          var p = Math.min((t - s) / dur, 1),
            v = Math.round(p * to);
          el.textContent = pre + v + suf;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('.stat .n[data-to]').forEach(function (el) { cio.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  // Contact form, inline confirmation instead of redirect (mockup)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var ok = form.querySelector('.form-success');
      form.querySelectorAll('input,select,textarea,button').forEach(function (f) {
        if (!f.classList.contains('keep')) f.style.display = 'none';
      });
      form.querySelectorAll('.field,.form-note').forEach(function (f) { f.style.display = 'none'; });
      if (ok) ok.classList.add('show');
    });
  }

  // Email capture (Changemaker Chronicles), mockup confirmation
  document.querySelectorAll('.capture').forEach(function (cap) {
    cap.addEventListener('submit', function (ev) {
      ev.preventDefault();
      cap.innerHTML = '<p style="font-family:var(--serif);font-style:italic;color:rgba(244,241,232,.86);font-size:1.05rem">Thank you, we’ll let you know when it launches.</p>';
    });
  });

  // Back to top
  var totop = document.getElementById('totop');
  if (totop) {
    var onTop = function () { totop.classList.toggle('show', window.scrollY > 500); };
    window.addEventListener('scroll', onTop, { passive: true });
    onTop();
    totop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Click-to-play video posters (Chronicles film poster + video-grid facades)
  document.querySelectorAll('.chron-player, .vfacade').forEach(function (p) {
    var play = function () {
      var src = p.getAttribute('data-embed');
      if (!src) return;
      var f = document.createElement('iframe');
      f.setAttribute('src', src);
      f.setAttribute('title', p.getAttribute('aria-label') || 'Video');
      f.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen');
      f.setAttribute('allowfullscreen', '');
      p.innerHTML = '';
      p.appendChild(f);
      p.style.cursor = 'default';
    };
    p.addEventListener('click', play);
    p.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); }
    });
  });
})();
