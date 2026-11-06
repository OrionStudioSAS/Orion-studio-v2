import { RM, G, ST, anim, $, $$, onWin, up, pixelate, smoothTo } from './core'
import { sparkle } from './effects'
import { norm } from './resourcesPage'

/* ---------- FAQ : recherche en direct, thèmes qui suivent la lecture, question par e-mail ---------- */
function faqPage(R, mob) {
  const page = $('.q-page', R)
  if (!page) return
  const q = $('.r-q', page),
    cats = $$(mob ? '.mq-cat' : '.fq-cat', page),
    links = $$(mob ? '.mr-tabs-in span' : '.fq-nav > a[data-c]', page)
  const items = $$(mob ? '.mo-q' : '.fq-q', page),
    empty = $('.q-empty', page),
    cnt = $('.q-count', page),
    total = items.length
  const parts = items.map((it) =>
    [...it.querySelectorAll(mob ? '.mo-q-h span, p' : 'h3, p')].map((el) => [el, el.innerHTML]),
  )
  const goC = (i) => {
    const c = cats[i]
    if (!c) return
    smoothTo(c.getBoundingClientRect().top + scrollY - (mob ? 76 : 96))
  }
  const mark = (html, s) => {
    if (!s) return html
    const d = document.createElement('div')
    d.innerHTML = html
    const walk = (n) =>
      [...n.childNodes].forEach((c) => {
        if (c.nodeType === 1) {
          walk(c)
          return
        }
        if (c.nodeType !== 3) return
        const t = c.textContent,
          nt = norm(t),
          k = nt.indexOf(s)
        if (k < 0) return
        const f = document.createDocumentFragment()
        let i = 0,
          j = k
        while (j >= 0) {
          f.append(t.slice(i, j))
          const m = document.createElement('mark')
          m.textContent = t.slice(j, j + s.length)
          f.append(m)
          i = j + s.length
          j = nt.indexOf(s, i)
        }
        f.append(t.slice(i))
        c.replaceWith(f)
      })
    walk(d)
    return d.innerHTML
  }
  let first = true
  const run = () => {
    const s = norm(q.value.trim())
    let n = 0
    items.forEach((it, k) => {
      const ok = !s || norm(it.textContent).includes(s)
      it.hidden = !ok
      if (ok) n++
      parts[k].forEach(([el, h]) => {
        el.innerHTML = ok ? mark(h, s) : h
      })
      if (mob && s && ok) {
        it.classList.add('open')
        const h = $('.mo-q-h', it)
        if (h) h.setAttribute('aria-expanded', true)
      }
    })
    cats.forEach((c, i) => {
      const any = $$(mob ? '.mo-q' : '.fq-q', c).some((it) => !it.hidden)
      c.hidden = !any
      if (links[i]) links[i].classList.toggle('off', !any)
    })
    empty.hidden = !!n
    if (cnt) cnt.textContent = n + (n > 1 ? ' réponses' : ' réponse')
    $$('.q-total', page).forEach((t) => {
      t.innerHTML = s ? `${n} sur ${total} réponses` : `${total} réponses, et la vôtre ?`
    })
    if (anim && !first) ST.refresh()
    first = false
    spy()
  }
  q.addEventListener('input', run)
  $$('.fq-sug span', page).forEach((sp) => {
    const f = () => {
      q.value = sp.textContent
        .replace(/\s*\?$/, '')
        .replace(/[  ]/g, ' ')
        .trim()
      run()
    }
    sp.addEventListener('click', f)
    sp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') f()
    })
  })
  links.forEach((a) => {
    const f = () => {
      goC(+a.dataset.c)
      if (mob) a.scrollIntoView({ block: 'nearest', inline: 'center', behavior: RM ? 'auto' : 'smooth' })
    }
    a.addEventListener('click', f)
    a.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        f()
      }
    })
  })
  // une question sans réponse : on l'envoie au studio par e-mail, déjà rédigée
  $$('.q-ask', page).forEach((b) =>
    b.addEventListener('click', (e) => {
      e.preventDefault()
      const v = q.value.trim(),
        body = v ? `&body=${encodeURIComponent(v.endsWith('?') ? v : v + ' ?')}` : ''
      location.href = `mailto:hello@orion-studio.io?subject=${encodeURIComponent('Question depuis la FAQ')}${body}`
    }),
  )
  // thème courant
  let last = -1
  function spy() {
    if (!page.offsetParent) return
    const vis = cats.filter((c) => !c.hidden)
    let cur = vis.length ? +vis[0].dataset.c : 0
    vis.forEach((c) => {
      if (c.getBoundingClientRect().top < innerHeight * 0.35) cur = +c.dataset.c
    })
    if (cur !== last) {
      last = cur
      links.forEach((a) => a.classList.toggle('on', +a.dataset.c === cur))
      if (mob) {
        const t = links[cur]
        const bar = t && t.parentElement.parentElement
        if (bar) bar.scrollTo({ left: t.offsetLeft - 21, behavior: RM ? 'auto' : 'smooth' })
      }
    }
  }
  onWin('scroll', spy, { passive: true })
  run()
  // apparitions
  up(
    $$(mob ? '.mr-search, .mq-sug, .mq-tabs, .mr-cnt' : '.fq-hero .crumb, .fq-search, .fq-sug', page),
    null,
    { y: 22, s: 0.08, delay: 0.8 },
  )
  if (!mob) {
    up(links, links[0], { y: 16, s: 0.05 })
    cats.forEach((c) => {
      up([$('h2', c)], c, { y: 30 })
      up($$('.fq-q', c), c, { y: 24, s: 0.05 })
    })
    const band = $('.fq-band', page)
    if (anim && band) {
      G.fromTo(
        $('.hm-layer', band),
        { yPercent: -12 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: band, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
      sparkle(band)
      pixelate(band, '#0E0E0C', 24, 1.1, 0.9)
    }
  } else cats.forEach((c) => up([$('h2', c)], c, { y: 24 }))
}

export { faqPage }
