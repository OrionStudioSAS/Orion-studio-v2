import { G, anim, $, $$, onView } from './core'
import { doggyInit } from './studio'

/* ---------- accueil : Julien et Théo entrent en marchant, Doggy court depuis la droite ---------- */
function teamStage(R) {
  const st = $('.tm-stage', R)
  if (!st || st.dataset.ok) return
  st.dataset.ok = 1
  doggyInit(st)
  if (!anim) return
  const ppl = $$('.tm-j, .tm-t', st),
    dg = $('.tm-d', st),
    caps = $$('.tm-m figcaption', st),
    w = st.offsetWidth || 800
  G.set(ppl, { x: -w * 0.75 })
  G.set(dg, { x: w * 0.45 })
  G.set(caps, { opacity: 0, y: 8 })
  const say = (el, t) =>
    G.delayedCall(t, () => {
      const d = $('.dg', el)
      d.classList.add('talk')
      G.delayedCall(1.9, () => d.classList.remove('talk'))
    })
  onView(
    st,
    () => {
      ppl.forEach((p, i) => {
        p.classList.add('walking')
        G.to(p, {
          x: 0,
          duration: 2.2 - i * 0.25,
          ease: 'none',
          delay: i * 0.2,
          onComplete: () => p.classList.remove('walking'),
        })
      })
      dg.classList.add('running')
      G.to(dg, {
        x: 0,
        duration: 1.3,
        ease: 'power1.out',
        delay: 0.9,
        onComplete: () => dg.classList.remove('running'),
      })
      G.to(caps, { opacity: 1, y: 0, duration: 0.5, ease: 'steps(5)', stagger: 0.12, delay: 2.3 })
      say(ppl[0], 2.7)
      say(ppl[1], 4.4)
      say(dg, 6.1)
    },
    'top 72%',
  )
}

export { teamStage }
