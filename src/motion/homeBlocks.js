import {
  G,
  ST,
  anim,
  $,
  $$,
  local,
  onView,
  onWin,
  pageEvery,
  pageClear,
  pixelate,
  smoothTo,
  up,
} from './core'

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
  const stories = $$('.avs-c', box),
    quotes = $$('.crv-q', box),
    sq = $('.crv-qs', box),
    num = $('.crv-n b', box),
    dots = $$('.crv-dots i', box)
  let cur = 0
  const show = (i, dir = 1) => {
    if (i === cur) return
    cur = i
    num.textContent = String(i + 1).padStart(2, '0')
    dots.forEach((d, k) => d.classList.toggle('on', k === i))
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
        { opacity: 0, x: 24 * dir },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', overwrite: true },
      )
    }
  }
  // flèches : l'avis précédent ou suivant, en boucle
  $$('.crv-ar', box).forEach((b) =>
    b.addEventListener('click', () => {
      const d = Number(b.dataset.d)
      show((cur + d + stories.length) % stories.length, d)
    }),
  )
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

/* ---------- nos services : la liste choisit, l'écran (ou la carte sur mobile) montre le service ---------- */

// le fond clair glisse jusqu'à la ligne active
const band = (mk, rows) => (i, now) =>
  G.to(mk, {
    y: rows[i].offsetTop,
    height: rows[i].offsetHeight,
    opacity: 1,
    duration: now || !anim ? 0 : 0.55,
    ease: 'power3.out',
    overwrite: 'auto',
  })

// les titres de groupe se tracent, les lignes entrent une à une
function listIn(sec, rows) {
  if (!anim) return
  $$('.si-k', sec).forEach((k) =>
    G.fromTo(
      k,
      { '--d': 0 },
      { '--d': 1, ease: 'none', scrollTrigger: { trigger: k, start: 'top 90%', end: 'top 62%', scrub: 0.4 } },
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
}

// un clic garde le Cmd/Ctrl-clic pour ouvrir la page dans un nouvel onglet
const plainClick = (e) => !(e.metaKey || e.ctrlKey || e.shiftKey || e.button)

function servicesIndex(R, mob) {
  const sec = $('.si', R)
  if (!sec) return
  if (mob) {
    servicesCards(sec)
    return
  }
  const box = $('.si-g', sec)
  const st = $('.si-st', box),
    list = $('.si-list', box),
    rows = $$('.si-r', box),
    shots = $$('.si-shot', box),
    bars = $$('.si-bar span', box),
    gos = $$('.si-go', box),
    grp = $('.si-grp', box),
    nm = $('.si-nm', box),
    ld = $('.si-ld', box),
    cn = $('.si-cn', box),
    mark = band($('.si-mk', box), rows)
  const names = rows.map((r) => $('b', r).textContent.trim()),
    groups = rows.map((r) => $('.si-k', r.closest('.si-col')).textContent.trim()),
    leads = rows.map((r) => r.dataset.lead || '')
  const t = (s) => (anim ? s : 0)
  let cur = 0,
    z = 1

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
    gos.forEach((g, k) => {
      g.classList.toggle('on', k === i)
      g.tabIndex = k === i ? 0 : -1
    })
    const s = shots[i]
    s.style.zIndex = ++z
    G.fromTo(
      s,
      { clipPath: dir > 0 ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)', scale: 1.18 },
      { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: t(0.9), ease: 'expo.inOut', overwrite: true },
    )
    shots.forEach((x, k) => x.classList.toggle('go', k === i))
    swap(nm, names[i], dir)
    swap(ld, leads[i], dir)
    swap(cn, String(i + 1).padStart(2, '0'), dir)
    if (grp.textContent !== groups[i]) {
      grp.textContent = groups[i]
      if (anim) G.fromTo(grp, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' })
    }
    mark(i)
  }
  // les textes de départ passent dans un span pour pouvoir glisser
  ;[nm, ld, cn].forEach((el) => {
    if (!el.firstElementChild) el.innerHTML = `<span>${el.textContent}</span>`
  })
  rows[0].classList.add('on')

  // le défilement ne change de service que pendant que l'écran est collé :
  // les services se partagent ce trajet, le dernier arrive à 85 % pour rester à l'écran
  const k = () => st.getBoundingClientRect().height / st.offsetHeight || 1,
    top = () => parseFloat(getComputedStyle(st).top) || 0,
    last = rows.length - 1
  let lock = false,
    lockT = 0
  const pick = (p) => !lock && set(Math.max(0, Math.min(last, Math.floor((p / 0.85) * last))))
  const tr = ST.create({
    trigger: list,
    start: () => `top ${top() * k()}px`,
    end: () => `bottom ${(top() + st.offsetHeight) * k()}px`,
    onUpdate: (s) => pick(s.progress),
    onRefresh: (s) => {
      pick(s.progress)
      mark(cur, true)
    },
  })
  mark(0, true)

  // un service de la liste fonctionne comme une ancre : la page glisse jusqu'à lui et l'écran l'affiche
  rows.forEach((r, i) =>
    r.addEventListener('click', (e) => {
      if (!plainClick(e)) return
      e.preventDefault()
      e.stopPropagation()
      lock = true
      set(i)
      const p = i === last ? 0.93 : ((i + 0.5) / last) * 0.85
      smoothTo(tr.start + p * (tr.end - tr.start))
      clearTimeout(lockT)
      lockT = setTimeout(() => {
        lock = false
        pick(tr.progress)
      }, 1300)
    }),
  )
  // c'est l'écran qui mène à la page du service affiché
  st.addEventListener('click', (e) => {
    if (e.target.closest('.si-go')) return
    gos[cur].click()
  })

  // les captures se chargent un peu avant que la section arrive
  ST.create({
    trigger: box,
    start: 'top bottom+=1200',
    once: true,
    onEnter: () => $$('img', st).forEach((im) => (im.loading = 'eager')),
  })

  listIn(sec, rows)
  if (!anim) return
  // l'écran s'ouvre en arrivant
  G.fromTo(
    st,
    { clipPath: 'inset(10% 12% 10% 12% round 14px)' },
    {
      clipPath: 'inset(0% 0% 0% 0% round 14px)',
      ease: 'none',
      scrollTrigger: { trigger: box, start: 'top 95%', end: 'top 45%', scrub: 0.5 },
    },
  )
  // la scène du premier service se joue quand l'écran arrive, pas pendant le chargement
  onView(
    st,
    () => {
      const s = shots[cur]
      s.classList.remove('go')
      void s.offsetWidth
      s.classList.add('go')
    },
    'top 70%',
  )
}

/* mobile : les services défilent en cartes au-dessus de la liste, la liste choisit la carte */
function servicesCards(sec) {
  const car = $('.si-car', sec),
    cards = $$('.si-card', sec),
    rows = $$('.si-r', sec),
    bars = $$('.si-bar span', sec),
    mark = band($('.si-mk', sec), rows)
  let cur = 0
  const set = (i) => {
    if (i === cur) return
    cur = i
    rows.forEach((r, k) => r.classList.toggle('on', k === i))
    bars.forEach((b, k) => (b.className = k < i ? 'on' : k === i ? 'cur' : ''))
    cards.forEach((c, k) => c.classList.toggle('go', k === i))
    mark(i)
  }
  rows[0].classList.add('on')
  mark(0, true)
  ST.create({ trigger: sec, start: 'top bottom', onRefresh: () => mark(cur, true) })

  // la carte la plus centrée devient la carte active
  let raf = 0
  car.addEventListener(
    'scroll',
    () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const c = car.scrollLeft + car.clientWidth / 2
        let best = 0,
          d = Infinity
        cards.forEach((el, i) => {
          const dd = Math.abs(el.offsetLeft + el.offsetWidth / 2 - c)
          if (dd < d) {
            d = dd
            best = i
          }
        })
        set(best)
      })
    },
    { passive: true },
  )
  // toucher un service de la liste remonte à sa carte
  rows.forEach((r, i) =>
    r.addEventListener('click', (e) => {
      if (!plainClick(e)) return
      e.preventDefault()
      e.stopPropagation()
      const c = cards[i]
      car.scrollTo({
        left: c.offsetLeft - (car.clientWidth - c.offsetWidth) / 2,
        behavior: anim ? 'smooth' : 'auto',
      })
      set(i)
      smoothTo(scrollY + car.getBoundingClientRect().top - 90)
    }),
  )

  listIn(sec, rows)
  if (anim) up(cards.slice(0, 2), car, { y: 30, s: 0.1 })
}

export { clientsBlock, servicesIndex, workTrack, reviewsBlock }
