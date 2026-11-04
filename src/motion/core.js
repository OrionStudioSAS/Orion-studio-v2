import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { go } from './nav'
import { PJ } from './projectModal'

gsap.registerPlugin(ScrollTrigger)

const RM = matchMedia('(prefers-reduced-motion: reduce)').matches
const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches
const G = gsap,
  ST = ScrollTrigger
const anim = !RM
const $ = (s, r = document) => r.querySelector(s),
  $$ = (s, r = document) => [...r.querySelectorAll(s)]
const isMob = () => matchMedia('(max-width: 819px)').matches
// Une seule page, et une seule version (desktop ou mobile), est montée à la fois.
const root = () => $('.view .site-m, .view .site-d')
const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

/* ---------- écouteurs globaux liés à la page en cours (retirés quand elle se démonte) ---------- */
let pageAC = new AbortController()
const onWin = (type, fn, opts = {}) => addEventListener(type, fn, { ...opts, signal: pageAC.signal })
const resetPageScope = () => {
  pageAC.abort()
  pageAC = new AbortController()
}

/* ---------- mise à l'échelle ---------- */
function fit() {
  const w = document.body.clientWidth
  $$('.site-d').forEach((d) => {
    d.style.zoom = w / 1440
  })
  $$('.site-m').forEach((m) => {
    m.style.zoom = w / 390
  })
}

/* ---------- aides ---------- */
function split(el) {
  if (!el) return []
  if (!el.dataset.split) {
    el.dataset.split = 1
    const walk = (n) =>
      [...n.childNodes].forEach((c) => {
        if (c.nodeType === 3) {
          const parts = c.textContent.split(/( +)/),
            f = document.createDocumentFragment()
          parts.forEach((p) => {
            if (!p) return
            if (/^ +$/.test(p)) {
              f.append(document.createTextNode(p))
              return
            }
            const w = document.createElement('span'),
              i = document.createElement('span')
            w.className = 'w'
            i.className = 'wi'
            i.textContent = p
            w.append(i)
            f.append(w)
          })
          c.replaceWith(f)
        } else if (
          c.nodeType === 1 &&
          !/^(img|svg|br|i)$/i.test(c.tagName) &&
          !c.classList.contains('mf-ui') &&
          !c.classList.contains('caret') &&
          !c.classList.contains('kbd')
        )
          walk(c)
      })
    walk(el)
  }
  return $$('.wi', el)
}
const onView = (trigger, fn, start = 'top 86%') =>
  anim && trigger && ST.create({ trigger, start, once: true, onEnter: fn })
function rise(el, start) {
  if (!anim || !el) return
  const words = split(el)
  G.set(words, { yPercent: 110 })
  onView(el, () => G.to(words, { yPercent: 0, duration: 1.05, ease: 'expo.out', stagger: 0.045 }), start)
}
function up(targets, trigger, o = {}) {
  targets = (Array.isArray(targets) ? targets : [...(targets || [])]).filter(Boolean)
  if (!anim || !targets.length) return
  G.set(targets, { y: o.y ?? 40, x: o.x ?? 0, opacity: 0 })
  onView(
    trigger || targets[0],
    () =>
      G.to(targets, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: o.d ?? 0.95,
        ease: 'power3.out',
        stagger: o.s ?? 0.08,
        delay: o.delay ?? 0,
      }),
    o.start,
  )
}
function pixelate(el, color, cell = 24, dur = 1.1, delay = 0, box = {}) {
  if (!anim || !el) return
  const c = document.createElement('canvas')
  c.className = 'pxv'
  const w = box.w || el.offsetWidth,
    h = box.h || el.offsetHeight
  if (box.h) c.style.height = h + 'px'
  const dpr = Math.min(2, devicePixelRatio || 1)
  c.width = w * dpr
  c.height = h * dpr
  el.append(c)
  const x = c.getContext('2d')
  x.scale(dpr, dpr)
  const cols = Math.ceil(w / cell),
    rows = Math.ceil(h / cell),
    cells = []
  for (let j = 0; j < rows; j++)
    for (let i = 0; i < cols; i++) cells.push([i, j, Math.random() * 0.7 + (j / rows) * 0.3])
  const draw = (p) => {
    x.clearRect(0, 0, w, h)
    x.fillStyle = color
    for (const [i, j, t] of cells) if (t > p) x.fillRect(i * cell, j * cell, cell + 0.5, cell + 0.5)
  }
  draw(0)
  const s = { p: 0 }
  G.to(s, {
    p: 1,
    duration: dur,
    delay,
    ease: 'power1.inOut',
    onUpdate: () => draw(s.p),
    onComplete: () => c.remove(),
  })
}
function typeIn(el, text, speed = 0.032) {
  if (!el) return
  let tn = [...el.childNodes].find((n) => n.nodeType === 3)
  if (!tn) {
    tn = document.createTextNode('')
    el.prepend(tn)
  }
  if (!anim) {
    tn.textContent = text
    return
  }
  if (el._tw) el._tw.kill()
  const o = { n: 0 }
  el._tw = G.to(o, {
    n: text.length,
    duration: text.length * speed,
    ease: 'none',
    onUpdate: () => {
      tn.textContent = text.slice(0, Math.round(o.n))
    },
  })
}
function swapIcon(h) {
  const s = h && h.querySelector('svg.plus')
  if (!s) return
  const pm = document.createElement('span')
  pm.className = 'pm'
  pm.innerHTML = '<i></i><i></i>'
  s.replaceWith(pm)
}
const local = (el, e) => {
  const r = el.getBoundingClientRect(),
    k = el.offsetWidth / r.width
  return { x: (e.clientX - r.left) * k, y: (e.clientY - r.top) * k, w: el.offsetWidth, h: el.offsetHeight }
}
function goTo(where) {
  if (where === 'cta') {
    PJ.open()
    return
  }
  if (where === 'work') {
    go('realisations')
    return
  }
  if (where === 'hero' && !$('.ch2-comp, .mo-comp', root())) {
    go('accueil', () => goTo('hero'))
    return
  }
  const R = root()
  const el =
    where === 'cta'
      ? $('.cta, .mo-cta', R)
      : where === 'work'
        ? $('#d-work, #m-work', R)
        : $('.hero-media, .mo-media', R)
  if (!el) return
  const top = el.getBoundingClientRect().top + scrollY - (where === 'hero' ? 40 : 70)
  scrollTo({ top, behavior: RM ? 'auto' : 'smooth' })
  if (where === 'hero') {
    const c = $('.ch2-comp, .mo-comp', R)
    if (c && anim)
      G.fromTo(
        c,
        { boxShadow: '0 0 0 0 rgba(255,77,26,.9)' },
        { boxShadow: '0 0 0 14px rgba(255,77,26,0)', duration: 1.2, delay: 0.6, clearProps: 'boxShadow' },
      )
  }
}

export {
  RM,
  FINE,
  G,
  ST,
  anim,
  $,
  $$,
  isMob,
  root,
  esc,
  onWin,
  resetPageScope,
  fit,
  split,
  onView,
  rise,
  up,
  pixelate,
  typeIn,
  swapIcon,
  local,
  goTo,
}
