import { FINE, G, ST, anim, $, $$, local, onView, onWin, pageEvery, pageClear, pixelate, up } from './core'

/* ---------- logos clients : chacun leur tour, ils laissent voir le site réalisé ---------- */
function clientsBlock(R) {
  const cells = $$('.hc-c', R)
  if (!cells.length) return
  up([$('.hc-h p', R)], $('.hc-h', R), { y: 20 })
  up(cells, $('.hc-g', R), { y: 24, s: 0.05 })
  if (!anim) return
  let i = 0,
    timer = null,
    prev = null
  const off = () => prev && prev.classList.remove('on')
  const start = () => {
    if (timer === null)
      timer = pageEvery(() => {
        off()
        prev = cells[i++ % cells.length]
        prev.classList.add('on')
      }, 2600)
  }
  const stop = () => {
    off()
    pageClear(timer)
    timer = null
  }
  // le tour automatique se tait quand on survole, et hors de l'écran
  const g = $('.hc-g', R)
  g.addEventListener('pointerenter', (e) => e.pointerType === 'mouse' && stop())
  g.addEventListener('pointerleave', (e) => e.pointerType === 'mouse' && start())
  new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? start() : stop()))).observe(g)
}

/* ---------- passage du pixel au vrai site, case par case, piloté de l'extérieur (0 → 1) ---------- */
const loadImg = (src) => {
  const i = new Image()
  i.src = src
  return i.decode().then(() => i)
}
function coverLayer(img, w, h, focusY) {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const x = c.getContext('2d'),
    k = Math.max(w / img.naturalWidth, h / img.naturalHeight),
    dw = img.naturalWidth * k,
    dh = img.naturalHeight * k
  x.imageSmoothingEnabled = false
  x.drawImage(img, (w - dw) / 2, (h - dh) * focusY, dw, dh)
  return c
}
function pixelSwap(media, cell) {
  const a = $('.wk-a', media),
    b = $('.wk-b', media)
  let cv = null,
    ctx = null,
    layers = null,
    cells = [],
    p = 0
  const paint = (force) => {
    for (const c of cells) {
      const on = p > c.t
      if (!force && on === c.on) continue
      c.on = on
      ctx.drawImage(layers[on ? 1 : 0], c.x, c.y, c.s, c.s, c.x, c.y, c.s, c.s)
    }
  }
  const apply = () => {
    media.classList.toggle('real', p >= 1)
    if (!cv) return
    cv.hidden = p <= 0 || p >= 1
    if (!cv.hidden) paint(false)
  }
  return {
    async load() {
      if (cv || !anim) return
      const dpr = Math.min(2, devicePixelRatio || 1),
        w = Math.round(media.offsetWidth * dpr),
        h = Math.round(media.offsetHeight * dpr),
        s = Math.round(cell * dpr)
      if (!w || !h) return
      const [ia, ib] = await Promise.all([loadImg(a.src), loadImg(b.src)]).catch(() => [])
      if (!ia || !media.isConnected) return
      layers = [coverLayer(ia, w, h, 0.5), coverLayer(ib, w, h, 0)]
      cv = document.createElement('canvas')
      cv.className = 'wk-cv'
      cv.width = w
      cv.height = h
      ctx = cv.getContext('2d')
      media.append(cv)
      const cols = Math.ceil(w / s)
      for (let j = 0; j < Math.ceil(h / s); j++)
        for (let i = 0; i < cols; i++)
          cells.push({ x: i * s, y: j * s, s, on: false, t: Math.random() * 0.6 + (i / cols) * 0.38 + 0.01 })
      paint(true)
      apply()
    },
    set(v) {
      p = anim ? v : v > 0.5 ? 1 : 0
      apply()
    },
  }
}

const zoomOf = (el) => parseFloat(el.closest('.site-d, .site-m').style.zoom) || 1
const stageH = (el) => innerHeight / zoomOf(el)
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
// écran trop court pour la maquette : la section redevient une section normale
const MIN_STAGE = 600

/* ---------- réalisations : les projets défilent à l'horizontale pendant que la section reste à l'écran ---------- */
function workTrack(R, mob) {
  const outer = $('.hw', R)
  if (!outer) return
  const stage = $('.hw-stage', outer),
    view = $('.hw-view', outer),
    track = $('.hw-track', outer),
    cards = $$('.hw-c', track),
    swaps = cards.map((c) => pixelSwap($('.wk-m', c), mob ? 12 : 20)),
    cells = $$('.hw-bar span', outer)
  let travel = 0,
    vw = 0,
    pinned = true,
    last = 0
  const update = (p) => {
    last = p
    if (!pinned) return
    const x = -p * travel
    track.style.transform = `translate3d(${x}px,0,0)`
    cards.forEach((c, i) => {
      const d = (c.offsetLeft + c.offsetWidth / 2 + x - vw / 2) / vw,
        ad = Math.abs(d)
      if (anim) c.style.transform = `translateY(${d * d * 70}px) rotate(${d * 4}deg) scale(${1 - ad * 0.07})`
      swaps[i].set(clamp((0.5 - ad) / 0.26))
    })
    const n = Math.round(p * cells.length)
    cells.forEach((s, i) => {
      s.className = i < n - 1 ? 'on' : i === n - 1 ? 'cur' : ''
    })
  }
  const layout = () => {
    const h = stageH(outer)
    pinned = h >= MIN_STAGE
    outer.classList.toggle('no-stick', !pinned)
    if (!pinned) {
      outer.style.height = ''
      track.style.transform = ''
      cards.forEach((c, i) => {
        c.style.transform = ''
        swaps[i].set(1)
      })
      return
    }
    vw = view.offsetWidth
    const end = track.lastElementChild
    travel = Math.max(0, end.offsetLeft + end.offsetWidth + (mob ? 21 : 72) - vw)
    outer.style.height = h + travel * (mob ? 1.15 : 0.95) + 'px'
    update(last)
  }
  onWin('site:fit', layout)
  layout()
  onView(outer, () => swaps.forEach((s) => s.load()), 'top bottom+=800')
  ST.create({
    trigger: outer,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (s) => update(s.progress),
    onRefresh: (s) => update(s.progress),
  })
}

/* ---------- avis clients : un client, sa vidéo et son avis ---------- */
function reviewsBlock(R) {
  const box = $('.crv', R)
  if (!box) return
  const tabs = $$('.crv-t', box),
    stories = $$('.avs-c', box),
    quotes = $$('.crv-q', box),
    sq = $('.crv-qs', box)
  let cur = 0
  const show = (i) => {
    if (i === cur) return
    cur = i
    tabs.forEach((t, k) => {
      t.classList.toggle('on', k === i)
      t.setAttribute('aria-selected', k === i)
    })
    stories.forEach((c, k) => {
      c.hidden = k !== i
    })
    quotes.forEach((q, k) => {
      q.hidden = k !== i
    })
    if (anim) {
      pixelate($('.crv-story', box), '#0E0E0C', 16, 0.55)
      G.fromTo(
        sq,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', overwrite: true },
      )
    }
  }
  tabs.forEach((t, i) => t.addEventListener('click', () => show(i)))
  up([$('.crv-card', box)], box, { y: 60, d: 1.1 })
  const bg = $('.crv-bg', box)
  if (anim)
    G.fromTo(
      bg,
      { yPercent: -5, scale: 1.12 },
      {
        yPercent: 5,
        scale: 1.12,
        ease: 'none',
        scrollTrigger: { trigger: box, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    )
}

/* ---------- nos services : chaque ligne entre quand on l'atteint, la barre suit le défilement ---------- */
function servicesIndex(R, mob) {
  const box = $('.si-g', R)
  if (!box) return
  $$('.si-col', box).forEach((col) => {
    const cells = $$('.si-rail span', col)
    const fill = (p) => {
      const n = Math.round(p * cells.length)
      cells.forEach((c, i) => {
        c.className = i < n - 1 ? 'on' : i === n - 1 ? 'cur' : ''
      })
    }
    if (!anim) {
      fill(1)
      return
    }
    fill(0)
    ST.create({
      trigger: col,
      start: 'top 72%',
      end: 'bottom 62%',
      onUpdate: (s) => fill(s.progress),
      onRefresh: (s) => fill(s.progress),
    })
    const k = $('.si-k', col)
    G.fromTo(
      k,
      { '--d': 0 },
      { '--d': 1, ease: 'none', scrollTrigger: { trigger: k, start: 'top 90%', end: 'top 60%', scrub: 0.4 } },
    )
    $$('.si-it', col).forEach((it) =>
      G.fromTo(
        it,
        { '--d': 0 },
        {
          '--d': 1,
          ease: 'none',
          scrollTrigger: { trigger: it, start: 'bottom 92%', end: 'bottom 58%', scrub: 0.4 },
        },
      ),
    )
    $$('.si-subs', col).forEach((s) =>
      G.fromTo(
        s,
        { '--l': 0 },
        {
          '--l': 1,
          ease: 'none',
          scrollTrigger: { trigger: s, start: 'top 88%', end: 'bottom 70%', scrub: 0.4 },
        },
      ),
    )
    $$('.si-r', col).forEach((r) => {
      const ico = $('.picon', r),
        txt = [$('b', r), $(':scope > div > span', r)],
        th = $('.si-th', r)
      G.set(txt, { y: 16, opacity: 0 })
      if (ico) G.set(ico, { scale: 0, rotate: -14 })
      onView(
        r,
        () => {
          G.to(txt, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.06 })
          if (ico) G.to(ico, { scale: 1, rotate: 0, duration: 0.6, ease: 'back.out(2.4)' })
          if (th) pixelate(th, '#F4F4F1', 8, 0.7)
        },
        'top 90%',
      )
    })
  })
  if (!anim || mob || !FINE) return

  // survol : l'illustration du service suit la souris
  const pv = $('.si-pv', box),
    img = $('img', pv)
  const W = pv.offsetWidth,
    H = pv.offsetHeight
  const toX = G.quickTo(pv, 'x', { duration: 0.45, ease: 'power3.out' }),
    toY = G.quickTo(pv, 'y', { duration: 0.45, ease: 'power3.out' }),
    toR = G.quickTo(pv, 'rotate', { duration: 0.6, ease: 'power3.out' })
  $$('.si-r', box).forEach((r) => {
    new Image().src = r.dataset.img
  })
  let on = false,
    last = 0
  // l'image s'affiche sur l'autre colonne : elle ne cache jamais la ligne qu'on est en train de lire
  const place = (e, r) => {
    const q = local(box, e),
      col = r.closest('.si-col'),
      other = $$('.si-col', box).find((c) => c !== col),
      x =
        other.offsetLeft + (other.offsetWidth - W) / 2 + (q.x - col.offsetLeft - col.offsetWidth / 2) * 0.08,
      y = Math.min(q.h - H, Math.max(0, q.y - H / 2))
    if (!on) {
      G.set(pv, { x, y })
      return
    }
    toX(x)
    toY(y)
    toR(clamp((q.y - last) * 0.25, -4, 4))
    last = q.y
  }
  const hide = () => {
    if (!on) return
    on = false
    G.to(pv, { opacity: 0, scale: 0.9, duration: 0.2, ease: 'power2.in', overwrite: 'auto' })
  }
  box.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return
    const r = e.target.closest('.si-r')
    if (!r) {
      hide()
      return
    }
    place(e, r)
    const src = r.dataset.img
    if (!on) {
      on = true
      last = local(box, e).y
      img.src = src
      G.to(pv, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(1.8)', overwrite: 'auto' })
      pixelate(pv, '#0E0E0C', 16, 0.4)
    } else if (!img.src.endsWith(src)) {
      img.src = src
      pixelate(pv, '#0E0E0C', 16, 0.4)
    }
  })
  box.addEventListener('pointerleave', hide)
  // on défile : l'image s'efface pour laisser lire
  onWin('scroll', hide, { passive: true })
}

export { clientsBlock, servicesIndex, workTrack, reviewsBlock }
