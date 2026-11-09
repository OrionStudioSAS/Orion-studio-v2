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

/* ---------- nos services : la liste se lit, l'écran collant montre le service en cours ---------- */
function servicesIndex(R, mob) {
  const box = $('.si-g', R)
  if (!box) return
  const st = $('.si-st', box),
    list = $('.si-list', box),
    rows = $$('.si-r', box),
    shots = $$('.si-shot', box),
    bars = $$('.si-bar span', box),
    grp = $('.si-grp', box),
    nm = $('.si-nm', box),
    cn = $('.si-cn', box),
    mk = $('.si-mk', box)
  const names = rows.map((r) => $('b', r).textContent.trim()),
    groups = rows.map((r) => $('.si-k', r.closest('.si-col')).textContent.trim())
  const t = (s) => (anim ? s : 0)
  let cur = 0,
    z = 1,
    seen = 0,
    hov = false

  // le fond clair glisse jusqu'à la ligne active
  const mark = (now) =>
    G.to(mk, {
      y: rows[cur].offsetTop,
      height: rows[cur].offsetHeight,
      opacity: 1,
      duration: now ? 0 : t(0.55),
      ease: 'power3.out',
      overwrite: 'auto',
    })
  // l'ancien texte sort par le haut, le nouveau entre par le bas (ou l'inverse en remontant)
  const swap = (el, text, dir) => {
    const old = el.lastElementChild
    if (old && old.textContent === text) return
    const nu = document.createElement('span')
    nu.textContent = text
    el.append(nu)
    const drop = () => old && old.parentNode && old.parentNode.removeChild(old)
    if (!anim) {
      drop()
      return
    }
    if (old)
      G.to(old, { yPercent: -100 * dir, opacity: 0, duration: 0.35, ease: 'power2.in', onComplete: drop })
    G.fromTo(
      nu,
      { yPercent: 100 * dir, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.6, ease: 'expo.out', delay: 0.08 },
    )
  }
  const set = (i) => {
    if (i === cur) return
    const dir = i > cur ? 1 : -1
    cur = i
    rows.forEach((r, k) => r.classList.toggle('on', k === i))
    bars.forEach((b, k) => (b.className = k < i ? 'on' : k === i ? 'cur' : ''))
    const s = shots[i]
    s.style.zIndex = ++z
    G.fromTo(
      s,
      { clipPath: dir > 0 ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)', scale: 1.18 },
      { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: t(0.9), ease: 'expo.inOut', overwrite: true },
    )
    swap(nm, names[i], dir)
    swap(cn, String(i + 1).padStart(2, '0'), dir)
    if (grp.textContent !== groups[i]) {
      grp.textContent = groups[i]
      if (anim) G.fromTo(grp, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' })
    }
    mark()
  }
  // les textes de départ passent dans un span pour pouvoir glisser
  ;[nm, cn].forEach((el) => {
    if (!el.firstElementChild) el.innerHTML = `<span>${el.textContent}</span>`
  })
  rows[0].classList.add('on')
  bars[0].className = 'cur'

  // la ligne qui passe au niveau de lecture devient la ligne active
  // (la dernière ligne passée : un défilement rapide ne saute jamais l'écran)
  const pick = () => {
    const y = innerHeight * (mob ? 0.64 : 0.52)
    let i = 0
    rows.forEach((r, k) => {
      if (r.getBoundingClientRect().top <= y) i = k
    })
    seen = i
    if (!hov) set(i)
  }
  ST.create({
    trigger: list,
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: pick,
    onRefresh: () => {
      mark(true)
      pick()
    },
  })
  mark(true)

  if (mob)
    ST.create({
      trigger: st,
      start: 'top 76px',
      endTrigger: list,
      end: 'bottom top',
      toggleClass: 'pin',
    })

  // un clic sur l'écran ouvre le service affiché
  st.addEventListener('click', () => rows[cur].click())

  if (anim) {
    $$('.si-k', box).forEach((k) =>
      G.fromTo(
        k,
        { '--d': 0 },
        {
          '--d': 1,
          ease: 'none',
          scrollTrigger: { trigger: k, start: 'top 90%', end: 'top 62%', scrub: 0.4 },
        },
      ),
    )
    rows.forEach((r) => {
      const parts = [$('.si-n', r), $('b', r), $(':scope > div > span', r)]
      G.set(parts, { y: 18, opacity: 0 })
      onView(
        r,
        () => G.to(parts, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.06 }),
        'top 92%',
      )
    })
    // l'écran s'ouvre en arrivant, puis l'image glisse doucement pendant la lecture
    // (sur mobile on découpe l'image seule : l'écran garde sa bande blanche)
    G.fromTo(
      mob ? $('.si-scr', st) : st,
      { clipPath: 'inset(10% 12% 10% 12% round 14px)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 14px)',
        ease: 'none',
        scrollTrigger: { trigger: box, start: 'top 95%', end: 'top 45%', scrub: 0.5 },
      },
    )
    G.fromTo(
      $('.si-scr', st),
      { yPercent: -4, scale: 1.1 },
      {
        yPercent: 4,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: { trigger: box, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    )
  }
  if (mob || !FINE) return

  // survol : l'écran montre tout de suite la ligne pointée, puis reprend le fil du défilement
  rows.forEach((r, i) =>
    r.addEventListener('pointerenter', (e) => {
      if (e.pointerType !== 'mouse') return
      hov = true
      set(i)
    }),
  )
  list.addEventListener('pointerleave', () => {
    hov = false
    set(seen)
  })
}

export { clientsBlock, servicesIndex, workTrack, reviewsBlock }
