import { FINE, G, ST, anim, $, $$, esc, split, pixelate, typeIn, local } from './core'
import { sparkle } from './effects'

/* ---------- parcours « Analyser mon site » ---------- */
const IC_OK =
  '<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" stroke-width="1.8"/></svg>'
function chatFlow(chat, pfx) {
  if (!chat) return
  const comp = $('.ch2-comp, .mo-comp', chat),
    base = comp.innerHTML
  const field = (id, label, ac, type = 'text') =>
    `<label class="cf-i" for="${pfx}-${id}"><span>${label}</span><input id="${pfx}-${id}" name="${id}" type="${type}" autocomplete="${ac}"></label>`
  function bind() {
    const send = $('.send', comp)
    send.setAttribute('role', 'button')
    send.tabIndex = 0
    send.onclick = step2
    send.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        step2()
      }
    }
  }
  function step2() {
    const site = ($('.ch2-url', comp)?.textContent || '').trim() || 'Votre site'
    comp.innerHTML = `<form class="cf" novalidate><div class="cf-k">${esc(site)}<span>Étape 2 sur 2 · À qui envoie-t-on l’analyse ?</span></div>
      <div class="cf-g">${field('prenom', 'Prénom', 'given-name')}${field('nom', 'Nom', 'family-name')}${field('email', 'E-mail', 'email', 'email')}${field('tel', 'Téléphone', 'tel', 'tel')}</div>
      <div class="cf-err" hidden>Indiquez une adresse e-mail valide pour recevoir l’analyse.</div>
      <div class="cf-f"><button type="button" class="cf-back">Modifier l’adresse</button><button type="submit" class="send cf-send">Recevoir mon analyse</button></div></form>`
    const f = $('form', comp)
    if (anim)
      G.from($$('.cf-k, .cf-i, .cf-f', f), {
        y: 12,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.out',
      })
    $('.cf-back', f).onclick = reset
    f.onsubmit = (e) => {
      e.preventDefault()
      const em = $(`#${pfx}-email`, f).value.trim()
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) {
        $('.cf-err', f).hidden = false
        $(`#${pfx}-email`, f).focus()
        return
      }
      done($(`#${pfx}-prenom`, f).value.trim())
    }
    setTimeout(() => $('input', f).focus({ preventScroll: true }), 60)
  }
  function done(name) {
    comp.innerHTML = `<div class="cf-done"><span class="cf-ok">${IC_OK}</span><div><b>C’est parti${name ? ', ' + esc(name) : ''}.</b>
      <p>Votre analyse et votre maquette arrivent dans votre boîte mail d’ici quelques jours.</p><span class="cf-proto">Prototype : aucune donnée n’est envoyée.</span></div></div>
      <button type="button" class="cf-back cf-again">Analyser un autre site</button>`
    $('.cf-again', comp).onclick = reset
    if (anim) G.from(comp.children, { y: 12, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' })
  }
  function reset() {
    comp.innerHTML = base
    bind()
  }
  $$('.sg', chat).forEach((s) => {
    s.setAttribute('role', 'button')
    s.tabIndex = 0
    const f = () => {
      if (!$('.ch2-url', comp)) reset()
      typeIn($('.ch2-url', comp), s.textContent.trim())
    }
    s.onclick = f
    s.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        f()
      }
    }
  })
  bind()
}

/* ---------- héro ---------- */
function hero(R, mob, firstLoad) {
  const nav = $(mob ? '.mo-nav' : '.nav', R),
    h1 = $(mob ? '.mo-h1' : '.h1', R)
  const media = $(mob ? '.mo-media' : '.hero-media', R)
  const imgs = [$('.hm-layer', media)]
  const chat = $(mob ? '.mo-chat' : '.chat', R)
  const url = $('.ch2-url', chat),
    urlText = url ? url.firstChild.textContent : ''
  chatFlow(chat, mob ? 'm' : 'd')
  if (!mob) {
    const orig = $('.hero-orig', R),
      tg = $$('.toggle span', R)
    const setV = (v) => {
      tg.forEach((t) => t.classList.toggle('on', t.dataset.v === v))
      anim
        ? G.to(orig, { opacity: v === 'orig' ? 1 : 0, duration: 0.7, ease: 'power2.out' })
        : (orig.style.opacity = v === 'orig' ? 1 : 0)
      if (v === 'px') pixelate($('.hm-layer', media), '#0E0E0C', 16, 0.55)
    }
    tg.forEach((t) => {
      t.onclick = () => setV(t.dataset.v)
      t.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setV(t.dataset.v)
        }
      }
    })
  }
  sparkle(media)
  if (!anim) return
  G.set(imgs, { scale: 1.1, transformOrigin: '50% 40%' })
  const words = split(h1)
  const after = mob
    ? $$('.mo-hero > .mo-lead, .mo-hero .mo-btn, .mo-hero .mo-proof', R)
    : $$('.hero-row .lead, .hero-btns .btn, .proof', R)
  const comp = $('.ch2-comp, .mo-comp', chat),
    greet = $('.ch2-greet, .mo-greet', chat)
  const sugs = $$('.sg', chat),
    note = $('.ch2-note', chat),
    logos = mob ? $$('.mo-cl-k, .mo-cl-g > div', R) : $$('.clients > div', R)
  if (url) url.firstChild.textContent = ''
  rotator(h1)
  const tl = G.timeline({ defaults: { ease: 'expo.out' }, delay: firstLoad ? 0.1 : 0.55 }) // après une transition, on attend que l'écran se découvre
  tl.from(nav, { y: -24, opacity: 0, duration: 0.8, clearProps: 'transform,opacity' })
    .from(words, { yPercent: 110, duration: 1.15, stagger: 0.05 }, '-=.45')
    .from(after, { y: 22, opacity: 0, duration: 0.9, stagger: 0.07, ease: 'power3.out' }, '-=.85')
    .add(() => pixelate(media, '#0E0E0C', mob ? 18 : 28, 1.25), '-=.75')
    .fromTo(imgs, { scale: 1.25 }, { scale: 1.1, duration: 2.4, ease: 'power2.out' }, '<')
    .from(greet, { y: 22, opacity: 0, duration: 0.9 }, '-=1.6')
    .from(comp, { y: 34, opacity: 0, scale: 0.97, duration: 1.1 }, '-=.75')
    .add(() => typeIn(url, urlText), '-=.5')
    .from(sugs, { y: 14, opacity: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out' }, '-=.4')
    .from(note, { opacity: 0, duration: 0.8 }, '-=.4')
    .from(logos, { y: 18, opacity: 0, duration: 0.8, stagger: 0.06, ease: 'power3.out' }, '-=1.2')
  // parallaxe : scroll + souris
  G.to(imgs, {
    yPercent: 9,
    ease: 'none',
    scrollTrigger: { trigger: media, start: 'top top', end: 'bottom top', scrub: true },
  })
  if (FINE) {
    const mx = imgs.map((i) => G.quickTo(i, 'x', { duration: 1.2, ease: 'power3.out' })),
      my = imgs.map((i) => G.quickTo(i, 'y', { duration: 1.2, ease: 'power3.out' }))
    const cx = G.quickTo(chat, 'x', { duration: 1.2, ease: 'power3.out' }),
      cy = G.quickTo(chat, 'y', { duration: 1.2, ease: 'power3.out' })
    media.addEventListener('mousemove', (e) => {
      const q = local(media, e),
        px = q.x / q.w - 0.5,
        py = q.y / q.h - 0.5
      mx.forEach((f) => f(-px * 22))
      my.forEach((f) => f(-py * 14))
      cx(px * 10)
      cy(py * 6)
    })
    media.addEventListener('mouseleave', () => {
      mx.forEach((f) => f(0))
      my.forEach((f) => f(0))
      cx(0)
      cy(0)
    })
  }
}

/* ---------- héro : fin de phrase qui tourne ---------- */
const ROT = [
  'marques qui voient loin.',
  'golfs qui visent juste.',
  'PME qui veulent grandir.',
  'indépendants qui se lancent.',
  'boutiques qui vendent.',
]
function rotator(h1) {
  const rot = h1 && $('.rot', h1)
  if (!rot || !anim) return
  let i = 0,
    running = true,
    timer = null
  const words = (t) =>
    t
      .split(' ')
      .map((w) => `<span class="w"><span class="wi">${w}</span></span>`)
      .join(' ')
  const next = () => {
    timer = null
    if (!running) return
    i = (i + 1) % ROT.length
    G.to($$('.wi', rot), {
      yPercent: -110,
      duration: 0.45,
      ease: 'power3.in',
      stagger: 0.035,
      onComplete: () => {
        rot.innerHTML = words(ROT[i])
        G.fromTo(
          $$('.wi', rot),
          { yPercent: 110 },
          { yPercent: 0, duration: 0.85, ease: 'expo.out', stagger: 0.055 },
        )
        timer = G.delayedCall(3.1, next)
      },
    })
  }
  timer = G.delayedCall(4.4, next)
  ST.create({
    trigger: h1,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (st) => {
      running = st.isActive
      if (running && !timer) timer = G.delayedCall(1.2, next)
    },
  })
}

export { IC_OK, chatFlow, hero }
