import { RM, G, anim, $, $$, onWin, smoothTo } from './core'
import { go } from './nav'

/* ---------- pages légales : sommaire ; 404 : ciel pixel, étoiles à rallumer ---------- */
function legalPage(R) {
  $$('.lg-page', R).forEach((page) => {
    const links = $$('.lg-toc a', page),
      secs = $$('.lg-s', page)
    links.forEach((a) => {
      const f = () => {
        const s = secs[+a.dataset.lg]
        if (s)
          smoothTo(s.getBoundingClientRect().top + scrollY - 96)
      }
      a.onclick = f
      a.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          f()
        }
      }
    })
    if (links.length)
      onWin(
        'scroll',
        () => {
          if (!page.offsetParent) return
          let c = 0
          secs.forEach((s, i) => {
            if (s.getBoundingClientRect().top < innerHeight * 0.35) c = i
          })
          links.forEach((a, i) => a.classList.toggle('on', i === c))
        },
        { passive: true },
      )
  })
}
function e4Page(R) {
  $$('.e4', R).forEach((box) => {
    const cv = $('.e4-c', box),
      x = cv.getContext('2d'),
      stars = $$('.e4-star', box),
      lines = $$('.e4-lines line', box),
      cnt = $('.e4-hint b', box),
      done = $('.e4-done', box)
    let W = 0,
      H = 0,
      pts = [],
      shoot = null,
      mx = 0,
      my = 0,
      raf = 0
    const dv = () => (box.offsetWidth < 600 ? 2 : 3)
    const size = () => {
      W = Math.max(1, Math.round(box.offsetWidth / dv()))
      H = Math.max(1, Math.round(box.offsetHeight / dv()))
      cv.width = W
      cv.height = H
      pts = Array.from({ length: Math.round((W * H) / 170) }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        d: Math.random() * 0.8 + 0.2,
        p: Math.random() * 6.28,
        c: Math.random() < 0.07 ? '#FF8A5C' : Math.random() < 0.2 ? '#BFD4FF' : '#F4F4F1',
      }))
    }
    const draw = (t) => {
      raf = 0
      if (!box.offsetParent) return
      if (!W || Math.abs(cv.width - Math.round(box.offsetWidth / dv())) > 2) size()
      x.fillStyle = '#0B0D1A'
      x.fillRect(0, 0, W, H)
      for (const s of pts) {
        const a = 0.35 + 0.65 * Math.abs(Math.sin((t / 900) * s.d + s.p))
        x.globalAlpha = a * s.d * 0.8
        x.fillStyle = s.c
        x.fillRect(
          Math.round(s.x + mx * s.d * 4) % W,
          Math.round(s.y + my * s.d * 4),
          s.d > 0.8 ? 2 : 1,
          s.d > 0.8 ? 2 : 1,
        )
      }
      x.globalAlpha = 1
      if (!shoot && Math.random() < 0.004)
        shoot = { x: Math.random() * W * 0.8, y: Math.random() * H * 0.4, l: 0 }
      if (shoot) {
        shoot.l += 3
        for (let i = 0; i < 12; i++) {
          x.globalAlpha = 1 - i / 12
          x.fillStyle = '#F4F4F1'
          x.fillRect(
            Math.round(shoot.x + shoot.l - i * 2),
            Math.round(shoot.y + (shoot.l - i * 2) * 0.45),
            1,
            1,
          )
        }
        x.globalAlpha = 1
        if (shoot.l > 120) shoot = null
      }
      if (!RM) raf = requestAnimationFrame(draw)
    }
    const start = () => {
      if (!raf) raf = requestAnimationFrame(draw)
    }
    const poll = setInterval(() => {
      if (!box.isConnected) {
        clearInterval(poll)
        return
      }
      if (box.offsetParent && !raf) start()
    }, 700)
    start()
    onWin('resize', () => {
      size()
      start()
    })
    box.addEventListener('mousemove', (e) => {
      const r = box.getBoundingClientRect()
      mx = (e.clientX - r.left) / r.width - 0.5
      my = (e.clientY - r.top) / r.height - 0.5
    })
    // rallumer Orion
    const lit = new Set()
    const upd = () => {
      cnt.textContent = lit.size + ' / ' + stars.length
      lines.forEach((l) => {
        const [a, b] = l.dataset.e.split('-')
        l.classList.toggle('on', lit.has(a) && lit.has(b))
      })
      if (lit.size === stars.length && !box.classList.contains('won')) {
        box.classList.add('won')
        done.hidden = false
        if (anim) {
          G.from(done, { y: 20, opacity: 0, duration: 0.6, ease: 'back.out(2)' })
          G.fromTo(lines, { opacity: 0 }, { opacity: 0.9, duration: 0.4, stagger: 0.08 })
        }
      }
    }
    stars.forEach((s) =>
      s.addEventListener('click', () => {
        const i = s.dataset.i
        lit.has(i) ? lit.delete(i) : lit.add(i)
        s.classList.toggle('on', lit.has(i))
        if (anim && lit.has(i))
          G.fromTo(
            $('i', s),
            { scale: 2.4 },
            { scale: 1.4, duration: 0.5, ease: 'back.out(3)', clearProps: 'transform' },
          )
        upd()
      }),
    )
    $$('.e4-home', box).forEach((a) =>
      a.addEventListener('click', (e) => {
        e.preventDefault()
        go('accueil')
      }),
    )
  })
}

export { legalPage, e4Page }
