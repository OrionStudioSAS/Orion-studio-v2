import { G, ST, anim, $, $$, onView, split, up } from './core'
import { reviewsBlock, workTrack } from './homeBlocks'
import { videoStories } from './localPages'

/* ---------- c'est quoi : le texte s'éclaire à la lecture, un filet se trace sous chaque point ---------- */
function whatBlock(R) {
  const box = $('.xs-what', R)
  const ico = $('.xs-ico', box)
  if (anim && ico) {
    G.set(ico, { scale: 0, rotate: -14 })
    onView(ico, () => G.to(ico, { scale: 1, rotate: 0, duration: 0.7, ease: 'back.out(2.2)' }))
  }
  const lead = $('.xs-lead', box)
  split(lead)
  if (anim)
    // terminé avant le milieu de l'écran : on lit toujours un texte entier
    G.fromTo(
      $$('.w', lead),
      { opacity: 0.16 },
      {
        opacity: 1,
        ease: 'none',
        stagger: 0.08,
        scrollTrigger: { trigger: lead, start: 'top 80%', end: 'bottom 58%', scrub: 0.5 },
      },
    )
  $$('.xs-pt', box).forEach((pt) => {
    up($$('h3, p', pt), pt, { y: 18, s: 0.07, start: 'top 88%' })
    if (anim)
      G.fromTo(
        pt,
        { '--d': 0 },
        {
          '--d': 1,
          ease: 'none',
          scrollTrigger: { trigger: pt, start: 'top 94%', end: 'top 62%', scrub: 0.4 },
        },
      )
  })
}

/* ---------- et après : le panneau s'ouvre, puis la barre verticale allume les lignes une à une ---------- */
function afterBlock(R) {
  const sec = $('.xs-after', R)
  if (!sec) return
  const card = $('.xs-after-c', sec),
    cells = $$('.xs-rail span', sec),
    rows = $$('.xs-af', sec),
    list = $('.xs-af-box', sec)
  const set = (p) => {
    const n = Math.round(p * cells.length)
    cells.forEach((c, i) => {
      c.className = i < n - 1 ? 'on' : i === n - 1 ? 'cur' : ''
    })
    const k = Math.min(rows.length - 1, Math.floor(p * rows.length * 0.999))
    rows.forEach((r, i) => r.classList.toggle('on', p > 0.02 && i <= k))
  }
  if (!anim) {
    set(1)
    return
  }
  G.fromTo(
    card,
    { clipPath: 'inset(7% 5% 7% 5% round 24px)' },
    {
      clipPath: 'inset(0% 0% 0% 0% round 0px)',
      ease: 'none',
      scrollTrigger: { trigger: sec, start: 'top 96%', end: 'top 38%', scrub: 0.5 },
    },
  )
  set(0)
  ST.create({
    trigger: list,
    start: 'top 74%',
    end: 'bottom 62%',
    onUpdate: (s) => set(s.progress),
    onRefresh: (s) => set(s.progress),
  })
}

/* ---------- pages Expertises ---------- */
function servicePage(R, mob) {
  if (!$('.xs-what', R)) return
  whatBlock(R)
  afterBlock(R)
  up($$(mob ? '.xpm-rl' : '.xs-sv', R), $(mob ? '.xpm-rel' : '.xs-rls', R), { y: 22, s: 0.05 })
  workTrack(R, mob)
  reviewsBlock(R)
  videoStories(R)
}

export { servicePage }
