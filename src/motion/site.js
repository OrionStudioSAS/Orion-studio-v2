import { header, megaFor, mobileMenu, burgers, cursor, menuSet } from './chrome'
import { G, ST, $, $$, esc, resetPageScope, fit, goTo } from './core'
import { sizeSparks, magnetic } from './effects'
import { CL_LOGOS, CL_LOGOS_M, logoCycle, footerUI } from './footerUi'
import { hero } from './hero'
import { teamPrints, initVideoStories, videoStories } from './localPages'
import { TITLES, go } from './nav'
import { initOrio } from './orio'
import { bindGo, initPage } from './pages'
import { initProjectModal } from './projectModal'
import { toast } from './resourcesPage'
import { menuLinks } from './routing'
import {
  manifesto,
  headings,
  projects,
  expertises,
  whoDesk,
  whoMob,
  steps,
  reviews,
  faq,
  resources,
  footer,
  rails,
} from './sections'
import { initLightbox } from './standingVideo'
import { SX, initStories } from './storiesViewer'
import { teamStage } from './teamStage'

/* Point d'entrée : ce qui vit le temps du site (calques, curseur) et ce qui vit le temps d'une page. */
let booted = false
let firstLoad = true

/** À appeler une seule fois, quand les calques globaux sont dans le DOM. */
function initSite() {
  if (booted) return
  booted = true
  mobileMenu()
  cursor()
  initProjectModal()
  initOrio()
  initLightbox()
  initStories()
  initVideoStories()
  menuLinks(document)
  $$('[data-go]', $('#m-menu')).forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault()
      menuSet(false)
      goTo(a.dataset.go)
    }),
  )

  let rz
  addEventListener('resize', () => {
    clearTimeout(rz)
    rz = setTimeout(() => {
      fit()
      sizeSparks()
      ST.refresh()
    }, 120)
  })
  addEventListener('keydown', (e) => {
    if (
      (e.key === 'p' || e.key === 'P') &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.altKey &&
      !/input|textarea/i.test(document.activeElement.tagName) &&
      $('#pj').hidden
    )
      goTo('cta')
  })
  if (document.fonts) document.fonts.ready.then(() => ST.refresh())
  addEventListener('load', () => ST.refresh())

  document.addEventListener('click', (e) => {
    const t = e.target
    if (t.closest('.pj, .ow, .pj-box, .sv-lb, .sv-phone, .sx')) {
      return
    }
    const ring = t.closest('.sx-b')
    if (ring) {
      e.preventDefault()
      SX.open(+ring.dataset.g)
      return
    }
    if (t.closest('a[href]')) return // les vrais liens sont gérés par le routeur
    const s = t.closest('[data-soon]')
    if (s) {
      e.preventDefault()
      toast(`<b>Article en cours de rédaction</b><small>${esc(s.dataset.soon)}</small>`)
      return
    }
    const to = t.closest('[data-to]')
    if (to && !t.closest('.rz-tabs')) {
      e.preventDefault()
      go(to.dataset.to)
      return
    }
    const h = t.closest('.res .art, .mo-art')
    if (h) {
      e.preventDefault()
      toast(`<b>Article en cours de rédaction</b><small>${esc($('h3', h).textContent)}</small>`)
      return
    }
    const b = t.closest('.r-page a.btn, .a-page a.btn, .q-page a.btn')
    if (b && /^(Réserver|Écrire au studio)/.test(b.textContent.trim())) {
      e.preventDefault()
      goTo('cta')
    }
  })
}

function initHome(R, mob) {
  if (mob) {
    rails(R)
    whoMob(R)
  } else whoDesk(R)
  hero(R, mob, firstLoad)
  manifesto(R, mob)
  headings(R, mob)
  projects(R, mob)
  expertises(R, mob)
  steps(R, mob)
  reviews(R, mob)
  faq(R, mob)
  resources(R, mob)
  footer(R, mob)
  magnetic(R)
  bindGo(R)
  logoCycle($$(mob ? '.mo-cl-g > div' : '.clients > div:not(:first-child)', R), mob ? CL_LOGOS_M : CL_LOGOS)
  teamStage(R)
  teamPrints(R)
  videoStories(R)
}

/** Branche les animations d'une page montée. Renvoie la fonction de nettoyage. */
function mountPage(view, R, mob) {
  resetPageScope()
  fit()
  document.title = TITLES[view] || TITLES.accueil
  const nav = $(mob ? '.mo-nav' : '.nav', R)
  header(nav)
  if (mob) burgers(R)
  else megaFor(nav)
  footerUI(R)
  menuLinks(R)
  if (view === 'accueil') initHome(R, mob)
  else initPage(R, mob)
  firstLoad = false

  // les images sont des fichiers : les positions de ScrollTrigger se recalent à mesure qu'elles arrivent
  let t
  const later = () => {
    clearTimeout(t)
    t = setTimeout(() => ST.refresh(), 150)
  }
  $$('img', R).forEach((i) => {
    if (!i.complete) i.addEventListener('load', later, { once: true })
  })
  ST.refresh()

  return () => {
    clearTimeout(t)
    resetPageScope()
    ST.getAll().forEach((s) => s.kill())
    G.globalTimeline.getChildren(true, true, true).forEach((a) => a.kill())
  }
}

export { initSite, mountPage }
