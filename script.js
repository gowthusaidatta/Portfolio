const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const revealNodes = document.querySelectorAll('.reveal');
const skillCards = document.querySelectorAll('.skill-card');
const parallaxNodes = document.querySelectorAll('[data-parallax]');
const currentYear = document.getElementById('current-year');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

skillCards.forEach((card) => {
  const delay = card.dataset.delay || '0ms';
  const bar = card.querySelector('[data-fill]');
  card.style.setProperty('--delay', delay);
  if (bar) {
    card.style.setProperty('--fill', `${bar.dataset.fill}%`);
  }
});

const closeMenu = () => {
  if (!navLinks || !navToggle) {
    return;
  }
  navLinks.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
};

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!navLinks.classList.contains('is-open')) {
      return;
    }

    if (navLinks.contains(event.target) || navToggle.contains(event.target)) {
      return;
    }

    closeMenu();
  });
}

if (prefersReducedMotion) {
  revealNodes.forEach((node) => node.classList.add('is-visible'));
  skillCards.forEach((card) => card.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -70px 0px' }
  );

  revealNodes.forEach((node) => observer.observe(node));
  skillCards.forEach((card) => observer.observe(card));
}

if (!prefersReducedMotion && parallaxNodes.length > 0) {
  let ticking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    parallaxNodes.forEach((node) => {
      const speed = Number(node.dataset.speed || 0.1);
      node.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
    });
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  updateParallax();
}
