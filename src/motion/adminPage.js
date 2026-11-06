import { FINE, G, anim, $, $$, onView, pixelate, typeIn, up } from './core'

/* ---------- bloc Orion Admin : l'onglet survolé ou touché change l'écran ---------- */
function adminBlock(R) {
  const box = $('.adb', R)
  if (!box) return
  const tabs = $$('.adb-t', box),
    imgs = $$('.adb-body img', box),
    body = $('.adb-body', box)
  let cur = 0
  const show = (i) => {
    if (i === cur) return
    cur = i
    tabs.forEach((t, k) => {
      t.classList.toggle('on', k === i)
      t.setAttribute('aria-selected', k === i)
    })
    imgs.forEach((im, k) => {
      im.hidden = k !== i
    })
    pixelate(body, '#0E0E0C', 18, 0.45)
  }
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => show(i))
    if (FINE) t.addEventListener('pointerenter', (e) => e.pointerType === 'mouse' && show(i))
  })
  up([$('.adb-lead', box), ...tabs, $('.adb-go', box)], $('.adb-lead', box), { y: 20, s: 0.07 })
  if (anim)
    G.fromTo(
      $('.adb-win', box),
      { y: 70, rotate: 1.5 },
      {
        y: 0,
        rotate: 0,
        ease: 'none',
        scrollTrigger: { trigger: box, start: 'top 92%', end: 'top 30%', scrub: 0.5 },
      },
    )
}

/* ---------- page Orion Admin : les démonstrations se jouent une fois, puis on peut cliquer ---------- */
function adminPage(R) {
  const page = $('.oa-page', R)
  if (!page) return
  $$('.oa-f', page).forEach((f) => {
    up($$('.oa-f-t > *', f), f, { y: 20, s: 0.07 })
    up($$('.oa-f-m', f), f, { y: 50, d: 1.1 })
  })
  up($$('.oa-tile', page), $('.oa-tiles', page), { y: 36, s: 0.1 })
  up($$('.oa-end', page), null, { y: 20 })

  // modifier un texte au clic
  const edits = $$('.oa-e', page)
  const swap = (el) => {
    const next = el.dataset.alt
    el.dataset.alt = el.textContent
    edits.forEach((x) => x.classList.toggle('on', x === el))
    typeIn(el, next, 0.03)
  }
  edits.forEach((el) => el.addEventListener('click', () => swap(el)))
  if (edits[0]) onView(edits[0], () => swap(edits[0]), 'top 70%')

  // changer de langue
  const pills = $$('.oa-lang button', page),
    rows = $$('.oa-tr', page)
  const lang = (l) => {
    pills.forEach((p) => {
      p.classList.toggle('on', p.dataset.l === l)
      p.setAttribute('aria-pressed', p.dataset.l === l)
    })
    rows.forEach((r) => typeIn(r, r.dataset[l], 0.02))
  }
  pills.forEach((p) => p.addEventListener('click', () => lang(p.dataset.l)))
  if (rows[0]) onView(rows[0], () => lang('en'), 'top 70%')
}

export { adminBlock, adminPage }
