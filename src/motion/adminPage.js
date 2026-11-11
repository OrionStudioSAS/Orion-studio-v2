import { FINE, G, anim, $, $$, onView, typeIn, up } from './core'

/* ---------- bloc Orion Admin : chaque point montre son écran, qui monte au défilement ---------- */
function adminBlock(R) {
  const box = $('.adb', R)
  if (!box) return
  const pts = $$('.adb-pt', box),
    imgs = $$('.adb-r img', box)
  let cur = 0,
    run = null,
    auto = anim
  const show = (i) => {
    if (i !== cur) {
      cur = i
      pts.forEach((p, k) => {
        p.classList.toggle('on', k === i)
        p.setAttribute('aria-selected', String(k === i))
      })
      imgs.forEach((im, k) => im.classList.toggle('on', k === i))
    }
    if (run) run.kill()
    const bar = $('.adb-pg', pts[i])
    if (auto) G.set(bar, { '--p': 0 })
    // tant que personne n'a choisi, les écrans défilent seuls : la barre montre qu'ils se changent
    // une fois choisi, l'onglet garde sa barre pleine : elle ne disparaît plus au survol
    if (!auto) G.set(bar, { '--p': 1 })
    else
      run = G.to(bar, {
        '--p': 1,
        duration: 5,
        ease: 'none',
        onComplete: () => box.isConnected && show((i + 1) % pts.length),
      })
  }
  // dès qu'on choisit un onglet (survol sur ordinateur, toucher sur mobile), le défilement s'arrête
  const pickTab = (i) => {
    auto = false
    show(i)
  }
  pts.forEach((p, i) => {
    p.addEventListener('click', () => pickTab(i))
    if (FINE) p.addEventListener('pointerenter', (e) => e.pointerType === 'mouse' && pickTab(i))
  })
  onView(box, () => auto && show(cur), 'top 60%')
  // le texte entre une fois, l'écran monte doucement dans la carte au défilement
  up([$('.adb-tag', box), $('.adb-lead', box), ...pts, $('.adb-go', box)], box, {
    y: 20,
    s: 0.07,
    start: 'top 75%',
  })
  if (anim)
    G.fromTo(
      imgs,
      { y: 90 },
      {
        y: 0,
        ease: 'none',
        scrollTrigger: { trigger: box, start: 'top 95%', end: 'top 25%', scrub: 0.5 },
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
