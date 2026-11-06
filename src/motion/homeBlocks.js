import { FINE, G, ST, anim, $, $$, pageEvery, pageClear, pixelate, up } from './core'

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

/* ---------- réalisations : le panneau ouvert suit le défilement, puis le survol ---------- */
function workPanels(R, mob) {
  const box = $('.rx', R)
  if (!box) return
  const ps = $$('.rx-p', box)
  let cur = 0
  const reveal = (p, cell = 20, dur = 0.7) => {
    const win = $('.rx-win', p)
    $$('.pxv', win).forEach((c) => c.remove())
    pixelate(win, '#0E0E0C', cell, dur)
  }
  const set = (i) => {
    if (i === cur) return
    cur = i
    ps.forEach((p, k) => p.classList.toggle('on', k === i))
    reveal(ps[i])
  }

  if (mob) {
    // rail horizontal : la carte centrée est ouverte
    if (anim) up(ps, box, { y: 40, s: 0.08 })
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && set(ps.indexOf(e.target))),
      { root: box, threshold: 0.6 },
    )
    ps.forEach((p) => io.observe(p))
    return
  }

  let hovering = false
  ps.forEach((p, i) => {
    p.addEventListener('pointerenter', (e) => {
      if (e.pointerType !== 'mouse') return
      hovering = true
      set(i)
    })
    p.addEventListener('focusin', () => set(i))
    // au doigt, un panneau fermé s'ouvre d'abord ; le second appui mène au projet
    p.addEventListener(
      'click',
      (e) => {
        if (!FINE && i !== cur) {
          e.preventDefault()
          e.stopPropagation()
          set(i)
        }
      },
      true,
    )
  })
  box.addEventListener('pointerleave', () => {
    hovering = false
  })
  if (!anim) return
  G.from(ps, {
    clipPath: 'inset(100% 0 0 0 round 10px)',
    duration: 1.1,
    ease: 'expo.out',
    stagger: 0.09,
    clearProps: 'clipPath',
    scrollTrigger: { trigger: box, start: 'top 85%' },
    onStart: () => reveal(ps[0], 26, 1.1),
  })
  ST.create({
    trigger: box,
    start: 'top 80%',
    end: 'bottom 50%',
    onUpdate: (self) => {
      if (!hovering) set(Math.min(ps.length - 1, Math.floor(self.progress * ps.length)))
    },
  })
}

export { clientsBlock, workPanels }
