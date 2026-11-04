import { bentoLoop } from './bento'
import { FINE, G, anim, $, $$, onWin, split, onView, rise, up, pixelate, swapIcon, local } from './core'
import { sparkle } from './effects'

/* ---------- sections ---------- */
function manifesto(R, mob) {
  const h = $(mob ? '.mo-mh' : '.mf-h', R)
  if (!h) return
  $$(mob ? '.mo-mt' : '.mf-t', h).forEach(split)
  if (!anim) return
  up($$(mob ? '.mo-mf .mo-k' : '.mf-k', R), null, { y: 16 })
  const items = $$('.w, .mf-pic, .mo-pic, .mf-ui', h)
  const tl = G.timeline({ scrollTrigger: { trigger: h, start: 'top 82%', end: 'bottom 48%', scrub: 0.7 } })
  items.forEach((it, i) => {
    if (it.classList.contains('w'))
      tl.fromTo(it, { opacity: 0.13 }, { opacity: 1, duration: 0.3, ease: 'none' }, i * 0.1)
    else {
      const r = parseFloat(it.style.getPropertyValue('--r')) || 0
      tl.fromTo(
        it,
        { scale: 0, rotate: r - 14, opacity: 0 },
        { scale: 1, rotate: r, opacity: 1, duration: 0.45, ease: 'back.out(2.2)' },
        i * 0.1,
      )
    }
  })
  up($$(mob ? '.mo-mf .mo-btns, .mo-mf .mo-lnk-c' : '.mf-foot', R), null, { y: 20 })
}

function headings(R, mob) {
  $$(mob ? '.mo-h2, .mo-cta h2' : 'h2.h2, .cta h2', R).forEach((h) => rise(h))
  $$(
    mob ? '.mo-shead .mo-lead, .mo-shead .lnk' : '.shead .lead, .shead .lnk, .faq-l .lead, .faq-l .lnk',
    R,
  ).forEach((l) => up([l], l, { y: 24 }))
}

function projects(R, mob) {
  const cards = $$(mob ? '.mo-proj' : '.proj-grid article, .rz-grid article', R)
  cards.forEach((c, i) => {
    up([c], c, { y: 70, d: 1.1, delay: mob ? 0 : (i % 2) * 0.12 })
    const m = $(mob ? '.mo-pm' : '.p-media', c)
    onView(c, () => pixelate(m, '#F4F4F1', mob ? 16 : 26, 1.1, mob ? 0.05 : 0.1 + (i % 2) * 0.12))
    m.dataset.cur = 'Voir le projet'
    if (!anim || !FINE || mob) return
    const inner = $('.win, .shop', m),
      bg = $(':scope > img', m)
    m.addEventListener('mousemove', (e) => {
      const q = local(m, e),
        px = q.x / q.w - 0.5,
        py = q.y / q.h - 0.5
      G.to(m, {
        rotateY: px * 7,
        rotateX: -py * 7,
        transformPerspective: 1000,
        duration: 0.6,
        ease: 'power3.out',
      })
      if (inner) G.to(inner, { x: px * 18, y: py * 14, duration: 0.6, ease: 'power3.out' })
      if (bg) G.to(bg, { scale: 1.07, x: -px * 12, y: -py * 10, duration: 0.9, ease: 'power3.out' })
    })
    m.addEventListener('mouseleave', () => {
      G.to(m, { rotateX: 0, rotateY: 0, duration: 0.9, ease: 'power3.out' })
      if (inner) G.to(inner, { x: 0, y: 0, duration: 0.9, ease: 'power3.out' })
      if (bg) G.to(bg, { scale: 1, x: 0, y: 0, duration: 0.9, ease: 'power3.out' })
    })
  })
  const rows = $$(mob ? '.mo-ix' : '.ix-row', R)
  up(rows, rows[0], { y: 0, x: -40, s: 0.07 })
  up($$(mob ? '.mo-ixf, #m-work > .mo-btn-full' : '.ix-foot', R), null, { y: 20 })
}

function expertises(R, mob) {
  const cells = $$(mob ? '.mo-cell' : '.bento .cell', R)
  if (!mob) up(cells, $('.bento', R), { y: 60, s: 0.09 })
  else up([$('.mo-tabs', R), $('.mo-rail', R), $('.mo-count', R)], $('.mo-exp .mo-tabs', R), { y: 30 })
  cells.forEach((cell) => {
    bentoLoop(cell)
    if (!FINE) return
    cell.addEventListener('mousemove', (e) => {
      const q = local(cell, e)
      cell.style.setProperty('--mx', q.x + 'px')
      cell.style.setProperty('--my', q.y + 'px')
    })
  })
}

const WHO = {
  golf: {
    img: '/images/f604674bcf.jpg',
    mimg: '/images/b4c2890700.png',
    h3: 'Remplir les départs, fidéliser les membres.',
    lead: 'Site de golf, réservation de départs en ligne, espace membres, boutique du pro-shop et back-office pour les événements : tout ce qu’un club gère au quotidien, au même endroit.',
    items: [
      'Site et réservation de départs',
      'Espace membres et abonnements',
      'Back-office événements et offres',
    ],
    ref: 'Château l’Arc Golf Club',
    small: 'Un site qui donne envie de venir jouer, géré par l’équipe du club.',
  },
  pme: {
    img: '/images/bfc42a5774.jpg',
    h3: 'Un site qui fait venir des demandes, sans y passer vos soirées.',
    lead: 'Artisans, cabinets, commerces, entreprises de services : un site professionnel, rapide et bien référencé, que vous mettez à jour vous-même, sans y passer vos soirées.',
    items: ['Site vitrine sur mesure', 'Formulaire de devis', 'Fiche Google & avis'],
    ref: 'Housses Taxi',
    small: 'Un atelier du Val-d’Oise qui fabrique des housses sur mesure pour taxis et VTC.',
    view: 'tpe-pme',
    mimg: '/images/bfc42a5774.jpg',
  },
  indep: {
    img: '/images/71d9f5f30a.jpg',
    h3: 'Une présence pro, rapide à lancer, avec un budget maîtrisé.',
    lead: 'Consultants, coachs, créatifs, artisans, professions libérales : une présence professionnelle, claire et bien référencée, lancée rapidement avec un budget maîtrisé.',
    items: ['Accueil & services', 'Prise de rendez-vous', 'Portfolio & réalisations'],
    ref: 'DATHY',
    small: '',
    view: 'independants',
    mimg: '/images/71d9f5f30a.jpg',
  },
  shop: {
    img: '/images/6fb5fcdfb6.jpg',
    h3: 'Des boutiques Shopify qui vendent, et les outils pour grandir.',
    lead: 'Création et refonte de boutiques Shopify, fiches produits qui convertissent, intégrations logistiques et marketing : on construit la boutique, et les outils pour la faire grandir.',
    items: ['Boutique Shopify sur mesure', 'Fiches produits', 'Panier & paiement'],
    ref: 'Osmose Nutrition · Ocha & Co.',
    small: 'Une boutique de compléments repensée, et une maison de thé japonaise.',
    view: 'marques-e-commerce',
    mimg: '/images/6fb5fcdfb6.jpg',
  },
  startup: {
    img: '/images/16d4b28751.jpg',
    mimg: '/images/92f9399126.png',
    h3: 'Un site qui fait comprendre votre produit et réserver des démos.',
    lead: 'Start-up et jeunes entreprises innovantes : un site qui explique votre produit en quelques secondes, fait réserver des démos, et suit le rythme de vos versions.',
    items: ['Page de lancement', 'Réservation de démo', 'Le produit lui-même'],
    ref: 'Swing Call',
    small: 'Un agent IA téléphonique pour les golfs.',
    view: 'start-up',
  },
  secteurs: {
    img: '/images/30a4881580.jpg',
    mimg: '/images/0bcbd917e3.png',
    h3: 'Un site pensé pour votre métier.',
    lead: 'Golfs, boulangeries, restaurants, associations, artisans, hôtels et gîtes, coiffeurs, agences immobilières : chaque métier a ses outils, et sa page.',
    items: [
      'Golfs · Boulangeries · Restaurants',
      'Associations · Artisans · Hôtels & gîtes',
      'Coiffeurs · Immobilier',
    ],
    ref: 'Château l’Arc Golf Club · Le Moulin de Balme',
    small: 'Un golf en Provence, une boulangerie à Brive.',
    view: 'secteurs',
  },
}
function whoDesk(R) {
  const list = $$('.who-list > div', R),
    p = $('.who-p', R)
  if (!p) return
  const im = $('.who-img', p),
    h3 = $('.who-pin h3', p),
    lead = $('.who-pin .lead', p),
    ul = $('.who-cols ul', p),
    ref = $('.who-ref', p),
    cols = $('.who-cols', p)
  let cur = list[0].dataset.k
  const apply = (d) => {
    im.src = d.img
    h3.innerHTML = d.h3
    lead.innerHTML = d.lead
    ul.innerHTML = d.items.map((x) => `<li>${x}</li>`).join('')
    ref.innerHTML =
      d.ref +
      (d.small ? `<small>${d.small}</small>` : '') +
      (d.view ? `<a class="lnk who-go" data-who-go="${d.view}">Voir la page</a>` : '')
  }
  apply(WHO[cur])
  const show = (k) => {
    if (k === cur) return
    cur = k
    list.forEach((d) => {
      d.classList.toggle('on', d.dataset.k === k)
      d.setAttribute('aria-pressed', d.dataset.k === k)
    })
    if (!anim) {
      apply(WHO[k])
      return
    }
    G.timeline()
      .to([h3, lead, cols], {
        opacity: 0,
        y: 8,
        duration: 0.16,
        stagger: 0.03,
        ease: 'power2.in',
        overwrite: true,
      })
      .add(() => {
        apply(WHO[k])
        pixelate(p, '#F4F4F1', 20, 0.7, 0, { h: im.offsetHeight })
      })
      .to([h3, lead, cols], { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: 'power3.out' })
  }
  list.forEach((d) => {
    d.tabIndex = 0
    d.setAttribute('role', 'button')
    d.setAttribute('aria-pressed', d.dataset.k === cur)
    if (FINE) d.addEventListener('mouseenter', () => show(d.dataset.k))
    d.addEventListener('click', () => show(d.dataset.k))
    d.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        show(d.dataset.k)
      }
    })
  })
  up(list, list[0], { y: 0, x: -36, s: 0.08 })
  up([p], p, { y: 50 })
  onView(p, () => pixelate(p, '#F4F4F1', 22, 1, 0.15, { h: im.offsetHeight }))
}
function whoMob(R) {
  const accs = $$('.mo-acc', R),
    keys = accs.map((a) => a.dataset.k),
    panel = $('.mo-who', R)
  if (!panel) return
  let open = accs[0]
  const fill = (k) => {
    const d = WHO[k]
    $('.mo-who-img', panel).src = d.mimg
    $('.mo-who-b h3', panel).innerHTML = d.h3
    $('.mo-who-b p', panel).innerHTML = d.lead
    $('.mo-who-b ul', panel).innerHTML = d.items.map((x) => `<li>${x}</li>`).join('')
    $('.mo-ref', panel).innerHTML = d.ref + (d.small ? `<small>${d.small}</small>` : '')
    const g = $('.who-go', panel)
    if (g) g.dataset.whoGo = d.view || ''
  }
  const toggle = (a) => {
    if (open) open.classList.remove('mo-acc-on', 'open')
    if (a === open) {
      panel.hidden = true
      open = null
      return
    }
    fill(a.dataset.k)
    a.append(panel)
    panel.hidden = false
    a.classList.add('mo-acc-on', 'open')
    open = a
    if (anim)
      G.from(panel, {
        height: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        clearProps: 'height,opacity',
      })
  }
  accs.forEach((a, i) => {
    a.dataset.k = keys[i]
    const h = $('.mo-acc-h', a)
    swapIcon(h)
    h.tabIndex = 0
    h.setAttribute('role', 'button')
    h.addEventListener('click', () => toggle(a))
    h.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        toggle(a)
      }
    })
  })
  open.classList.add('open')
  up(accs, accs[0], { y: 24, s: 0.07 })
}

function steps(R, mob) {
  const bar = $(mob ? '.mo-pbar' : '.steps .pixbar', R)
  if (bar && anim) {
    const on = $$('.pb-on', bar)
    G.set(on, { backgroundColor: '#E6E6E1' })
    onView(
      bar,
      () => G.to(on, { backgroundColor: '#0E0E0C', duration: 0.05, stagger: 0.035, ease: 'none' }),
      'top 80%',
    )
  }
  const st = $$(mob ? '.mo-st' : '.st', R)
  up(st, st[0], { y: 30, s: 0.1 })
  up($$(mob ? '.mo-steps + .mo-note' : '.steps-note', R), null, { y: 16 })
}

function reviews(R, mob) {
  const card = $(mob ? '.mo-avc' : '.av-card', R)
  sparkle(card)
  if (!card || !anim) return
  const txt = $(mob ? '.mo-av-txt' : '.av-txt', R),
    score = $('.av-score b', card),
    stars = $$(mob ? '.mo-av-stars svg' : '.av-stars svg', card)
  const words = split(txt)
  G.set(card, { clipPath: 'inset(10% 6% 10% 6% round 18px)' })
  G.set(words, { opacity: 0.12 })
  G.set(stars, { scale: 0 })
  onView(
    card,
    () => {
      G.to(card, { clipPath: 'inset(0% 0% 0% 0% round 10px)', duration: 1.5, ease: 'expo.out' })
      G.to(words, { opacity: 1, duration: 0.4, stagger: 0.035, ease: 'none', delay: 0.35 })
      const o = { v: 0 }
      G.to(o, {
        v: 5,
        duration: 1.8,
        delay: 0.5,
        ease: 'power2.out',
        onUpdate: () => {
          score.textContent = o.v.toFixed(1).replace('.', ',')
        },
      })
      G.to(stars, { scale: 1, duration: 0.5, stagger: 0.1, delay: 1, ease: 'back.out(3)' })
    },
    'top 78%',
  )
  const bg = $(mob ? '.mo-av-bg' : '.av-bg', card)
  G.fromTo(
    bg,
    { yPercent: -6, scale: 1.12 },
    {
      yPercent: 6,
      scale: 1.12,
      ease: 'none',
      scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true },
    },
  )
}

const FAQ_A = [
  'Chaque projet est chiffré sur devis après un premier échange. Dans le formulaire de contact, vous indiquez une fourchette de budget : on vous oriente vers la bonne approche dès le premier appel.',
  'Un site vitrine prend en moyenne 4 à 8 semaines, selon sa complexité et le rythme des échanges. Une boutique ou une application demande davantage : le planning est fixé dans le devis.',
  'On choisit selon votre projet et votre équipe : Webflow pour un site vitrine que vous gérez facilement, Shopify pour l’e-commerce, du code sur mesure (Next.js, React) pour les applications et les besoins spécifiques.',
  'Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Textes, images, pages et actualités se modifient sans connaissances techniques.',
  'Oui. Le studio est basé à Paris et travaille partout en France et à l’international, en français ou en anglais, sur place ou à distance.',
  'On reste disponibles pour les corrections et les questions. Vous pouvez ensuite choisir un suivi régulier (évolutions, SEO, maintenance) ou nous solliciter ponctuellement.',
]
function faq(R, mob) {
  const qs = $$(mob ? '.mo-q' : '.q', R)
  qs.forEach((q, i) => {
    let p = $(':scope > p', q)
    if (!p) {
      p = document.createElement('p')
      p.innerHTML = FAQ_A[i] || ''
    }
    const a = document.createElement('div'),
      inner = document.createElement('div')
    a.className = 'q-a'
    inner.append(p)
    a.append(inner)
    q.append(a)
    const h = $(mob ? '.mo-q-h' : '.q-h', q)
    swapIcon(h)
    h.setAttribute('role', 'button')
    h.tabIndex = 0
    const set = (o) => {
      q.classList.toggle('open', o)
      h.setAttribute('aria-expanded', o)
    }
    set(i === 0)
    h.addEventListener('click', () => set(!q.classList.contains('open')))
    h.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        set(!q.classList.contains('open'))
      }
    })
  })
  up(qs, qs[0], { y: 24, s: 0.06 })
}

function resources(R, mob) {
  const arts = $$(mob ? '.mo-art' : '.res .art', R)
  up(arts, arts[0], { y: 60, s: 0.1 })
  if (!anim) return
  arts.forEach((a) => {
    const i = $('img', a)
    onView(a, () =>
      G.fromTo(i, { scale: 1.22 }, { scale: 1, duration: 1.6, ease: 'expo.out', clearProps: 'transform' }),
    )
  })
}

function footer(R, mob) {
  up($$(mob ? '.mo-cta .btn, .mo-cta .mail' : '.cta-r', R), $(mob ? '.mo-cta' : '.cta', R), {
    y: 26,
    s: 0.08,
    start: 'top 75%',
  })
  up($$(mob ? '.mo-ft-main > *' : '.ft-l, .ft-cols .fc', R), $(mob ? '.mo-ft-main' : '.ft-main', R), {
    y: 30,
    s: 0.07,
  })
  up($$(mob ? '.mo-fcard' : '.ft-cards > div', R), $(mob ? '.mo-fcards' : '.ft-cards', R), { y: 24, s: 0.07 })
  if (!anim) return
  const sky = $(mob ? '.mo-sky' : '.ft-sky', R)
  if (!sky) return
  const im = $('.hm-layer', sky)
  G.fromTo(
    im,
    { yPercent: -8 },
    {
      yPercent: 0,
      ease: 'none',
      scrollTrigger: { trigger: sky, start: 'top bottom', end: 'bottom bottom', scrub: true },
    },
  )
  sparkle(sky)
  const o = $('.orio', sky)
  if (o) {
    G.set(o, { scale: 0 })
    onView(sky, () => G.to(o, { scale: 1, duration: 0.9, ease: 'back.out(2.2)', delay: 0.35 }), 'top 85%')
  }
}

function rails(R) {
  const ex = $('.mo-exp', R)
  if (ex) {
    const rail = $('.mo-rail', ex),
      tabsBox = $('.mo-tabs', ex),
      tabs = $$('.mo-tabs span', ex),
      cnt = $('.mo-count > span', ex),
      cells = $$('.mo-pb span', ex),
      n = tabs.length,
      step = 312
    let last = 0
    const upd = () => {
      const i = Math.max(0, Math.min(n - 1, Math.round(rail.scrollLeft / step)))
      if (i === last) return
      last = i
      tabs.forEach((t, k) => t.classList.toggle('on', k === i))
      cells.forEach((c, k) => {
        c.className = k <= i ? 'pb-on' : 'pb-off'
      })
      cnt.textContent = `${i + 1} / ${n}`
      tabsBox.scrollTo({ left: Math.max(0, tabs[i].offsetLeft - 20), behavior: 'smooth' })
    }
    rail.addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true })
    tabs.forEach((t, k) => {
      t.setAttribute('role', 'button')
      t.tabIndex = 0
      t.addEventListener('click', () => rail.scrollTo({ left: k * step, behavior: 'smooth' }))
    })
  }
  // glisser à la souris sur les carrousels (fenêtre étroite sur ordinateur)
  $$('.mo-rail, .mo-sug', R).forEach((r) => {
    let down = false,
      sx = 0,
      sl = 0,
      moved = false
    r.addEventListener('mousedown', (e) => {
      down = true
      moved = false
      sx = e.clientX
      sl = r.scrollLeft
      r.style.scrollSnapType = 'none'
    })
    onWin('mousemove', (e) => {
      if (!down) return
      const dx = e.clientX - sx
      if (Math.abs(dx) > 4) moved = true
      r.scrollLeft = sl - dx / (parseFloat(R.style.zoom) || 1)
    })
    onWin('mouseup', () => {
      if (!down) return
      down = false
      r.style.scrollSnapType = ''
    })
    r.addEventListener(
      'click',
      (e) => {
        if (moved) {
          e.preventDefault()
          e.stopPropagation()
        }
      },
      true,
    )
  })
}

export {
  manifesto,
  headings,
  projects,
  expertises,
  WHO,
  whoDesk,
  whoMob,
  steps,
  reviews,
  FAQ_A,
  faq,
  resources,
  footer,
  rails,
}
