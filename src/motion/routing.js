import { menuSet } from './chrome'
import { RM, ST, anim, $, $$, esc, goTo, smoothTo } from './core'
import { PATHS, go } from './nav'
import { PJ } from './projectModal'
import { norm, toast } from './resourcesPage'
import { footer } from './sections'
import { stories } from './standingVideo'

// Cmd/Ctrl/Maj + clic sur un vrai lien : on laisse le navigateur ouvrir un nouvel onglet
addEventListener(
  'click',
  (e) => {
    if ((e.metaKey || e.ctrlKey || e.shiftKey) && e.target.closest && e.target.closest('a[href]'))
      e.stopImmediatePropagation()
  },
  true,
)

/* ---------- « Pour qui ? » : secteurs en stories ---------- */
const SECTOR_PAGE = { golf: 'golf' }
function sectorGo(st) {
  const k = st.dataset.sector,
    v = SECTOR_PAGE[k]
  dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
  menuSet(false)
  if (v) {
    go(v)
    return
  }
  const n = ($('b, h3', st) || {}).textContent || ''
  toast(`<b>Page « ${esc(n)} » en préparation</b><small>En attendant, parlons de votre projet.</small>`)
}
document.addEventListener(
  'click',
  (e) => {
    if (e.target.closest('.mm-all, .sx-alllnk')) {
      e.preventDefault()
      e.stopPropagation()
      dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
      menuSet(false)
      go('secteurs')
      return
    }
    const st = e.target.closest(
      '.sec-st, .sx-card, .sx-row, .mm-it[data-sector], .mo-mi[data-sector], .sx-empty [data-sector]',
    )
    if (st) {
      e.preventDefault()
      e.stopPropagation()
      sectorGo(st)
    }
  },
  true,
)
document.addEventListener('keydown', (e) => {
  const st = e.target.closest && e.target.closest('.sec-st')
  if (st && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault()
    sectorGo(st)
  }
})

document.addEventListener('click', (e) => {
  const c = e.target.closest('[data-case]')
  if (c) {
    e.preventDefault()
    go(c.dataset.case)
  }
})

/* ---------- pages secteurs ---------- */
Object.assign(SECTOR_PAGE, {
  boulangerie: 'boulangeries',
  restaurant: 'restaurants',
  asso: 'associations',
  artisan: 'artisans',
  hotel: 'hotels-gites',
  coiffure: 'coiffeurs',
  immo: 'immobilier',
  pme: 'tpe-pme',
  indep: 'independants',
  shop2: 'marques-e-commerce',
  startup: 'start-up',
  golf: 'golf',
})
Object.assign(SECTOR_PAGE, { pme: 'tpe-pme', indep: 'independants', shop: 'marques-e-commerce' })

/* ---------- « Tous les secteurs » : recherche par métier (mots voisins compris) ---------- */
function sectorsPage(R) {
  $$('.sx-all', R).forEach((page) => {
    const q = $('.sx-q', page),
      items = $$('.sx-card, .sx-row', page),
      empty = $('.sx-empty', page),
      wrap = $('.sx-grid, .sx-list', page)
    if (!q) return
    const run = () => {
      const s = norm(q.value.trim())
      let n = 0
      items.forEach((it) => {
        const ok = !s || norm(it.textContent + ' ' + (it.dataset.q || '')).includes(s)
        it.hidden = !ok
        if (ok) n++
      })
      empty.hidden = !!n
      if (wrap) wrap.hidden = !n
      if (anim && ST) ST.refresh()
    }
    q.addEventListener('input', run)
    q.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        const f = items.find((x) => !x.hidden)
        if (f) f.click()
      }
    })
    $$('.fq-sug span', page).forEach((sp) => {
      const f = () => {
        q.value = sp.textContent
        run()
        q.focus()
      }
      sp.onclick = f
      sp.onkeydown = (e) => {
        if (e.key === 'Enter') f()
      }
    })
  })
}

/* ---------- cartes Réalisations → cas client sur la page TPE & PME ou Associations ---------- */
document.addEventListener(
  'click',
  (e) => {
    const card = e.target.closest('.rz-card, .mo-proj')
    const a =
      e.target.closest('[data-ref]') ||
      (card && !e.target.closest('.rz-tabs, .mo-rzt') && card.querySelector('[data-ref]'))
    if (!a) return
    e.preventDefault()
    e.stopPropagation()
    const [v, id] = a.dataset.ref.split('|'),
      base = id.replace(/^m-/, '')
    go(v, () => {
      const t = [document.getElementById(base), document.getElementById('m-' + base)].find(
        (x) => x && x.offsetParent,
      )
      if (t) smoothTo(t.getBoundingClientRect().top + scrollY - 80)
    })
  },
  true,
)
Object.assign(SECTOR_PAGE, { startup: 'start-up' })

/* ---------- pages Expertises ---------- */
const EXP_PAGE = {
  'Site internet': 'site-internet',
  'Site vitrine': 'site-vitrine',
  'Site dynamique': 'site-dynamique',
  'Site concept': 'site-concept',
  'E-commerce': 'e-commerce',
  'Développement d’applications': 'developpement-applications',
  SaaS: 'saas',
  Automatisations: 'automatisations',
  SEO: 'seo',
  GEO: 'geo',
  'SEA': 'sea',
}

function expGo(v, label) {
  dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
  menuSet(false)
  if (PATHS[v]) {
    go(v)
    return
  }
  toast(`<b>Page « ${esc(label)} » en préparation</b><small>En attendant, parlons de votre projet.</small>`)
}
document.addEventListener(
  'click',
  (e) => {
    const t = e.target
    if (t.closest('.pj, .pj-box, .sv-lb, .sx')) return
    const x = t.closest('[data-exp]')
    if (x) {
      e.preventDefault()
      e.stopPropagation()
      expGo(x.dataset.exp, ((x.querySelector('b, span') || x).textContent || '').trim())
      return
    }
    const it = t.closest('.rl, .bento .cell, .mo-cell, footer a, .mo-ft a')
    if (!it) return
    const lb =
      ((it.matches('a') && !it.querySelector('b, h3') ? it : it.querySelector('b, h3')) || {}).textContent ||
      ''
    const v = EXP_PAGE[lb.trim()]
    if (v) {
      e.preventDefault()
      e.stopPropagation()
      expGo(v, lb.trim())
    }
  },
  true,
)

/* ---------- pages projets et méga-menu entièrement cliquable ---------- */
const closeMenus = () => {
  dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
  menuSet(false)
}
function menuLinks(R) {
  $$('.mm-k, .mo-mk', R).forEach((k) => {
    const v = {
      'Web & développement': 'site-internet',
      Expertises: 'site-internet',
      'Marketing digital': 'seo',
      'Pour qui ?': 'secteurs',
      'Par secteur': 'secteurs',
    }[k.textContent.replace(/\s+/g, ' ').trim()]
    if (v) {
      k.dataset.pv = v
      k.setAttribute('role', 'link')
      k.tabIndex = 0
    }
  })
  $$('.mm-feat', R).forEach((f) => {
    f.dataset.pv = /Château l’Arc/.test(f.textContent)
      ? 'chateau-larc'
      : /Guide/.test(f.textContent)
        ? 'etre-cite-par-les-ia'
        : 'realisations'
  })
}
addEventListener(
  'click',
  (e) => {
    const t = e.target
    if (!t.closest || t.closest('.pj, .sx')) return
    const card = t.closest('.rz-card, .mo-proj, .proj-grid article, .cs-next')
    const p =
      t.closest('[data-proj]:not([data-proj=""])') ||
      (card && !t.closest('.rz-tabs, .mo-rzt, a[href]') && card.querySelector('[data-proj]'))
    const v = !p && t.closest('[data-pv]')
    const mmBtn = !p && !v && t.closest('.mm-live a.btn, .mm a.btn')
    const adm =
      !p &&
      !v &&
      t.closest('a') &&
      /^(Découvrir Orion Admin|Orion Admin)$/.test(t.closest('a').textContent.trim()) &&
      !t.closest('.nav-links')
    if (!p && !v && !mmBtn && !adm) return
    if (t.closest('a[href]') && !p && !v) return
    e.preventDefault()
    e.stopPropagation()
    closeMenus()
    if (mmBtn) {
      ;/Analyser/.test(mmBtn.textContent) ? goTo('hero') : PJ.open()
      return
    }
    go(p ? p.dataset.proj : v ? v.dataset.pv : 'orion-admin')
  },
  true,
)
addEventListener('keydown', (e) => {
  const k = e.target.closest && e.target.closest('[data-pv][role=link]')
  if (k && e.key === 'Enter') {
    closeMenus()
    go(k.dataset.pv)
  }
})

document.addEventListener('click', (e) => {
  const g = e.target.closest('[data-who-go]')
  if (g && g.dataset.whoGo) {
    e.preventDefault()
    go(g.dataset.whoGo)
  }
})

export { sectorsPage, menuLinks }
