// Ported script to be imported in React entry and used inside useEffect where needed.
// This file keeps non-React helper functions (IntersectionObserver init, parallax, nav toggle)

export function initUI() {
  // instrumentation for debugging mount/render issues
  try { window.__initUI_ran = true } catch (e) {}
  console.log('initUI: running')
  // nav toggle
  const toggle = document.querySelector('.nav-toggle')
  const nav = document.querySelector('.nav-links')
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true'
      toggle.setAttribute('aria-expanded', String(!expanded))
      nav.classList.toggle('is-open')
    })
  }

  // reveal on scroll
  const reveals = document.querySelectorAll('.reveal')
  // Quick-pass: if an element is already in the viewport, make it visible immediately
  reveals.forEach((r) => {
    const rect = r.getBoundingClientRect()
    if (rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0) {
      r.classList.add('is-visible')
    }
  })

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          if (entry.target.classList.contains('skill-card')) {
            const bar = entry.target.querySelector('.skill-bar span')
            const fill = bar && bar.getAttribute('data-fill')
            if (bar && fill) bar.style.width = fill + '%'
          }
        }
      })
    }, {threshold: 0.12})
    reveals.forEach((r) => io.observe(r))
  } else {
    reveals.forEach((r) => r.classList.add('is-visible'))
  }

  // Temporary fallback: ensure reveals are visible after init (guards against IO not firing)
  setTimeout(() => {
    reveals.forEach((r) => r.classList.add('is-visible'))
  }, 60)

  // parallax for elements with data-parallax
  const parallaxEls = document.querySelectorAll('[data-parallax]')
  function onScroll() {
    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-speed') || '0.08')
      const rect = el.getBoundingClientRect()
      const y = window.scrollY || window.pageYOffset
      const offset = (rect.top + y) * speed
      el.style.transform = `translate3d(0, ${offset * 0.06}px, 0)`
    })
  }
  onScroll()
  window.addEventListener('scroll', onScroll, {passive: true})

  // current year
  const year = document.getElementById('current-year')
  if (year) year.textContent = new Date().getFullYear()
}

// Expose a cleanup helper for React effect
export function teardownUI() {
  const toggle = document.querySelector('.nav-toggle')
  const nav = document.querySelector('.nav-links')
  if (toggle && nav) {
    toggle.removeEventListener('click', () => {})
  }
  window.removeEventListener('scroll', () => {})
}
