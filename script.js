// Portfolio interactions — no dependencies.

(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.querySelector('.nav-links');

  /* Nav: border appears once the page scrolls off the top -------------- */
  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu -------------------------------------------------------- */
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Reveal on scroll --------------------------------------------------- */
  var revealables = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('visible'); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    revealables.forEach(function (el) { revealObserver.observe(el); });
  }

  /* Active section highlight in the nav -------------------------------- */
  var sections = document.querySelectorAll('section[id]');
  var linkFor = {};
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    linkFor[a.getAttribute('href').slice(1)] = a;
  });

  if ('IntersectionObserver' in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = linkFor[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            Object.keys(linkFor).forEach(function (k) {
              linkFor[k].classList.remove('active');
            });
            link.classList.add('active');
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* Education cards: click or keyboard to flip ------------------------- */
  document.querySelectorAll('.edu-card').forEach(function (card) {
    function flip() { card.classList.toggle('flipped'); }
    card.addEventListener('click', flip);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        flip();
      }
    });
  });
})();
