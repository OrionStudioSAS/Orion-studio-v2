import { RM, FINE, $, $$, onWin } from './core'

/* ---------- header collant ---------- */
function header(nav) {
  if (!nav) return
  const prog = $('.nav-prog', nav)
  let last = scrollY
  const on = () => {
    const y = scrollY,
      max = document.documentElement.scrollHeight - innerHeight
    nav.classList.toggle('is-scrolled', y > 8)
    const busy = nav.classList.contains('mm-open') || nav.classList.contains('menu-open')
    if (y > last + 4 && y > 520 && !busy) nav.classList.add('is-hidden')
    else if (y < last - 4 || y < 520) nav.classList.remove('is-hidden')
    last = y
    if (prog) prog.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`
  }
  onWin('scroll', on, { passive: true })
  on()
}

/* ---------- méga-menus (desktop) ---------- */
function megaFor(nav) {
  const veil = nav.parentNode.querySelector('.mm-veil-live')
  if (!nav || !veil) return
  const links = $$('[data-mm]', nav),
    panels = $$('.mm-live', nav)
  let t
  const open = (k) => {
    clearTimeout(t)
    nav.classList.add('mm-open')
    nav.classList.remove('is-hidden')
    veil.classList.add('on')
    panels.forEach((p) => p.classList.toggle('on', p.dataset.panel === k))
    links.forEach((l) => {
      const o = l.dataset.mm === k
      l.classList.toggle('on', o)
      l.setAttribute('aria-expanded', o)
    })
  }
  const close = (now) => {
    clearTimeout(t)
    const f = () => {
      nav.classList.remove('mm-open')
      veil.classList.remove('on')
      panels.forEach((p) => p.classList.remove('on'))
      links.forEach((l) => {
        l.classList.remove('on')
        l.setAttribute('aria-expanded', false)
      })
    }
    now === true ? f() : (t = setTimeout(f, 200))
  }
  links.forEach((l) => {
    l.setAttribute('role', 'button')
    l.tabIndex = 0
    l.setAttribute('aria-expanded', false)
    if (FINE) l.addEventListener('mouseenter', () => open(l.dataset.mm))
    const tog = (e) => {
      e.preventDefault()
      l.classList.contains('on') ? close(true) : open(l.dataset.mm)
    }
    l.addEventListener('click', tog)
    l.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') tog(e)
    })
  })
  $$('.nav-links a:not([data-mm]), .nav-r', nav).forEach((a) =>
    a.addEventListener('mouseenter', () => close()),
  )
  nav.addEventListener('mouseleave', () => close())
  nav.addEventListener('mouseenter', () => clearTimeout(t))
  veil.addEventListener('click', () => close(true))
  onWin('keydown', (e) => {
    if (e.key === 'Escape') close(true)
  })
}

/* ---------- menu mobile ---------- */
let menuSet = () => {}
function mobileMenu() {
  const menu = $('#m-menu')
  if (!menu) return
  let btn = null
  const set = (o, b) => {
    if (o) btn = b || btn
    if (!btn) return
    const nav = btn.closest('.mo-nav')
    menu.classList.toggle('on', o)
    if (nav) nav.classList.toggle('menu-open', o)
    btn.setAttribute('aria-expanded', o)
    btn.setAttribute('aria-label', o ? 'Fermer le menu' : 'Ouvrir le menu')
    document.documentElement.style.overflow = o ? 'hidden' : ''
  }
  menuSet = set
  $$('a', menu).forEach((a) => a.addEventListener('click', () => set(false)))
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') set(false)
  })
}
function burgers(R) {
  const menu = $('#m-menu')
  $$('.mo-burger', R).forEach((b) =>
    b.addEventListener('click', () => menuSet(!menu.classList.contains('on'), b)),
  )
}

/* ---------- curseur pixel ---------- */
function cursor() {
  if (!FINE || RM) return
  document.body.classList.add('has-cur')
  const dot = $('.cur-dot'),
    ring = $('.cur-ring'),
    lab = $('.cur-ring i')
  let mx = -100,
    my = -100,
    rx = -100,
    ry = -100
  addEventListener(
    'mousemove',
    (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px,${my}px)`
    },
    { passive: true },
  )
  ;(function loop() {
    rx += (mx - rx) * 0.2
    ry += (my - ry) * 0.2
    ring.style.transform = `translate(${rx}px,${ry}px)`
    requestAnimationFrame(loop)
  })()
  document.addEventListener('mouseover', (e) => {
    const t = e.target.closest('[data-cur], a, button, [role=button], .btn, .sg, .send, .cf-i')
    const label = t && t.dataset.cur
    ring.classList.toggle('is-link', !!t && !label)
    ring.classList.toggle('is-label', !!label)
    document.body.classList.toggle('cur-label', !!label)
    lab.textContent = label || ''
  })
  addEventListener('mousedown', () => ring.classList.add('is-down'))
  addEventListener('mouseup', () => ring.classList.remove('is-down'))
  document.addEventListener('mouseleave', () => {
    mx = my = -100
  })
}

export { header, megaFor, mobileMenu, burgers, cursor, menuSet }
