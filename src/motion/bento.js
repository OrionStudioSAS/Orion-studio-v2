import { G, ST, anim, $, $$ } from './core'
import { IC_OK } from './hero'
import { toast } from './resourcesPage'
import { steps } from './sections'

/* ---------- bento « Du croquis au code » : mini-interfaces animées en boucle ---------- */
const CUR_PX = [
  '#.........',
  '##........',
  '#o#.......',
  '#oo#......',
  '#ooo#.....',
  '#oooo#....',
  '#ooooo#...',
  '#oooooo#..',
  '#ooooooo#.',
  '#oooo#####',
  '#oo#o#....',
  '#o#.#o#...',
  '##..#o#...',
  '.....##...',
]
function mkCursor(v) {
  const px = 2,
    rects = CUR_PX.flatMap((r, y) =>
      [...r].map((c, x) =>
        c === '.'
          ? ''
          : `<rect x="${x * px}" y="${y * px}" width="${px}" height="${px}" fill="${c === '#' ? '#0E0E0C' : '#FFFFFF'}"/>`,
      ),
    ).join('')
  const el = document.createElement('span')
  el.className = 'bc-cur'
  el.innerHTML = `<svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">${rects}</svg>`
  v.append(el)
  return el
}
function off(el, anc) {
  let x = 0,
    y = 0,
    n = el
  while (n && n !== anc) {
    x += n.offsetLeft
    y += n.offsetTop
    n = n.offsetParent
  }
  return { x, y, w: el.offsetWidth, h: el.offsetHeight }
}
const mid = (el, anc, fx = 0.5, fy = 0.55) => {
  const o = off(el, anc)
  return { x: o.x + o.w * fx, y: o.y + o.h * fy }
}
const hold = (tl, d) => tl.to({}, { duration: d })

function loopSite(v) {
  const nodes = $$('.fl-n', v),
    links = $$('.fl-l', v),
    bars = $$('.wire i', v),
    blk = $('.wire .blk', v)
  const fills = links.map((l) => {
    const b = document.createElement('b')
    b.className = 'fl-p'
    l.append(b)
    return b
  })
  const cur = mkCursor(v)
  const pages = [
    [70, 45, 44, 60],
    [55, 82, 28, 38],
    [40, 64, 60, 30],
  ]
  const lines = bars.filter((b) => !b.classList.contains('blk'))
  const on = (i) => () => nodes.forEach((n, k) => n.classList.toggle('fl-on', k === i))
  const layout = (tl, i) =>
    tl
      .to(lines, { width: (k) => pages[i][[0, 1, 3][k]] + '%', duration: 0.5, ease: 'power3.inOut' }, '<')
      .to(blk, { height: pages[i][2], duration: 0.5, ease: 'power3.inOut' }, '<')
      .fromTo(
        bars,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.45, stagger: 0.07, ease: 'power2.out', transformOrigin: '0 50%' },
        '<',
      )
  const tl = G.timeline({ repeat: -1, repeatDelay: 0.4, paused: true })
  tl.call(on(0))
    .set(fills, { scaleX: 0 })
    .set(cur, { x: () => mid(blk, v).x, y: () => mid(blk, v).y + 30, opacity: 0 })
  layout(tl, 0)
  tl.to(cur, { opacity: 1, duration: 0.2 })
  ;[1, 2].forEach((i) => {
    tl.to(
      cur,
      { x: () => mid(nodes[i], v).x, y: () => mid(nodes[i], v).y, duration: 0.8, ease: 'power2.inOut' },
      '+=.5',
    )
      .to(cur, { scale: 0.8, duration: 0.09, yoyo: true, repeat: 1 })
      .to(fills[i - 1], { scaleX: 1, duration: 0.45, ease: 'power1.inOut' }, '<')
      .call(on(i))
    layout(tl, i)
  })
  hold(tl, 1.4)
  tl.to(cur, { opacity: 0, duration: 0.25 })
  return tl
}

function loopCode(v) {
  const lines = $$('.code > div:not(.c-ok)', v),
    ok = $('.c-ok', v)
  ok.innerHTML = '<i></i><span class="ok-t">Build réussi — déployé en production</span>'
  const dot = $('i', ok),
    txt = $('.ok-t', ok)
  const tl = G.timeline({ repeat: -1, repeatDelay: 0.3, paused: true })
  tl.set(lines, { clipPath: 'inset(0 100% 0 0)', opacity: 1 }).call(() => {
    txt.textContent = 'Build en cours…'
    dot.className = 'ok-run'
    ok.classList.remove('ok-done')
  })
  lines.forEach((l) => {
    const n = Math.max(4, l.textContent.length)
    tl.to(l, { clipPath: 'inset(0 0% 0 0)', duration: n * 0.028, ease: `steps(${n})` })
  })
  hold(tl, 1.1)
  tl.call(() => {
    txt.textContent = 'Build réussi — déployé en production'
    dot.className = ''
    ok.classList.add('ok-done')
  }).fromTo(
    ok,
    { backgroundColor: 'rgba(76,195,138,.18)' },
    { backgroundColor: 'rgba(76,195,138,0)', duration: 1.2 },
  )
  hold(tl, 1.6)
  tl.to(lines, { opacity: 0, duration: 0.3 })
  return tl
}

function loopAuto(v) {
  const box = $('.auto', v),
    nodes = $$('.au-n', v),
    links = $$('.au-l', v)
  const pk = document.createElement('i')
  pk.className = 'au-pk'
  box.append(pk)
  const checks = nodes.map((n) => {
    const c = document.createElement('em')
    c.className = 'au-ck'
    c.innerHTML = IC_OK
    n.append(c)
    return c
  })
  const tl = G.timeline({ repeat: -1, repeatDelay: 0.3, paused: true })
  tl.call(() => nodes.forEach((n) => n.classList.remove('au-on')))
    .set(checks, { scale: 0 })
    .set(pk, { opacity: 0 })
  nodes.forEach((n, i) => {
    tl.call(() => n.classList.add('au-on'))
      .fromTo(n, { scale: 0.96 }, { scale: 1, duration: 0.35, ease: 'back.out(3)' })
      .to(checks[i], { scale: 1, duration: 0.3, ease: 'back.out(3)' }, '-=.1')
    const l = links[i]
    if (l)
      tl.set(pk, { opacity: 1, x: () => off(l, box).x - 2, y: () => off(l, box).y - 3 })
        .to(pk, { y: () => off(l, box).y + off(l, box).h - 3, duration: 0.45, ease: 'none' }, '+=.15')
        .set(pk, { opacity: 0 })
  })
  hold(tl, 1.8)
  return tl
}

function loopSeo(v) {
  const q = $('.serp-q span', v),
    r = $('.serp-r', v),
    box = $('.serp-q', v),
    text = q.textContent
  const caret = document.createElement('i')
  caret.className = 'q-caret'
  q.after(caret)
  const bar = document.createElement('i')
  bar.className = 'q-load'
  box.append(bar)
  const o = { n: 0 }
  const tl = G.timeline({ repeat: -1, repeatDelay: 0.2, paused: true })
  tl.set(r, { opacity: 0, y: 14 })
    .call(() => {
      r.classList.remove('hl')
      q.textContent = ''
      o.n = 0
    })
    .set(bar, { scaleX: 0, opacity: 1 })
    .to(
      o,
      {
        n: text.length,
        duration: text.length * 0.06,
        ease: 'none',
        onUpdate: () => {
          q.textContent = text.slice(0, Math.round(o.n))
        },
      },
      '+=.3',
    )
    .to(bar, { scaleX: 1, duration: 0.6, ease: 'power2.inOut' }, '+=.2')
    .to(bar, { opacity: 0, duration: 0.2 })
    .to(r, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
    .call(() => r.classList.add('hl'), null, '+=.4')
  hold(tl, 2.2)
  tl.to(r, { opacity: 0, y: -6, duration: 0.35 })
  return tl
}

function loopGeo(v) {
  const q = $('.ai-q', v),
    a = $('.ai-a', v),
    body = $(':scope > div', a),
    cite = $('.ai-cite', a)
  const words = []
  ;[...body.childNodes].forEach((c) => {
    if (c.nodeType !== 3) return
    const f = document.createDocumentFragment()
    c.textContent.split(/( +)/).forEach((p) => {
      if (!p) return
      if (/^ +$/.test(p)) {
        f.append(p)
        return
      }
      const w = document.createElement('span')
      w.textContent = p
      words.push(w)
      f.append(w)
    })
    c.replaceWith(f)
  })
  const typing = document.createElement('span')
  typing.className = 'ai-typing'
  typing.innerHTML = '<i></i><i></i><i></i>'
  a.insertBefore(typing, body)
  const tl = G.timeline({ repeat: -1, repeatDelay: 0.3, paused: true })
  tl.set([q, a], { opacity: 0, y: 10 })
    .set(words, { opacity: 0 })
    .set(cite, { opacity: 0, scale: 0.6 })
    .set(body, { display: 'none' })
    .set(typing, { display: 'inline-flex' })
    .to(q, { opacity: 1, y: 0, duration: 0.45, ease: 'back.out(2)' }, '+=.2')
    .to(a, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '+=.5')
  hold(tl, 1)
  tl.set(typing, { display: 'none' })
    .set(body, { display: 'block' })
    .to(words, { opacity: 1, duration: 0.08, stagger: 0.07 })
    .to(cite, { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(3)' })
    .fromTo(
      cite,
      { boxShadow: '0 0 0 0 rgba(255,77,26,.55)' },
      { boxShadow: '0 0 0 9px rgba(255,77,26,0)', duration: 0.9 },
    )
  hold(tl, 2)
  tl.to([q, a], { opacity: 0, duration: 0.35 })
  return tl
}

function loopAds(v) {
  const link = $$('.adp-s span', v)[0],
    ad = $('.adp', v)
  const cur = mkCursor(v)
  const toast = document.createElement('div')
  toast.className = 'ad-toast'
  toast.innerHTML = `<span class="cf-ok">${IC_OK}</span><span><b>Nouvelle demande de devis</b><small>Formulaire · à l’instant</small></span>`
  v.append(toast)
  const tl = G.timeline({ repeat: -1, repeatDelay: 0.4, paused: true })
  tl.set(toast, { opacity: 0, y: 10 })
    .call(() => link.classList.remove('clk'))
    .set(cur, { x: () => off(ad, v).w * 0.78, y: () => off(ad, v).h + 10, opacity: 0 })
    .to(cur, { opacity: 1, duration: 0.2 }, '+=.3')
    .to(cur, { x: () => mid(link, v).x, y: () => mid(link, v).y, duration: 0.9, ease: 'power2.inOut' })
    .to(cur, { scale: 0.8, duration: 0.09, yoyo: true, repeat: 1 })
    .call(() => link.classList.add('clk'))
    .to(toast, { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(2)' }, '+=.15')
  hold(tl, 2)
  tl.to([toast, cur], { opacity: 0, duration: 0.3 })
  return tl
}

const LOOPS = { flow: loopSite, code: loopCode, auto: loopAuto, serp: loopSeo, ai: loopGeo, adp: loopAds }
function bentoLoop(cell) {
  if (!anim) return
  const v = $('.vis, .mo-vis', cell)
  const k = v && Object.keys(LOOPS).find((c) => $('.' + c, v))
  if (!k) return
  let tl = null
  const play = () => {
    if (!cell.offsetWidth) return
    if (!tl) tl = LOOPS[k](v)
    tl.play()
  }
  ST.create({
    trigger: cell,
    start: 'top 92%',
    end: 'bottom top',
    onToggle: (s) => (s.isActive ? play() : tl && tl.pause()),
  })
}

export { bentoLoop }
