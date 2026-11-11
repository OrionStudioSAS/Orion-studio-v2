import { menuSet } from './chrome'
import { expertises } from './sections'
import { TITLES } from '../seo'

/* Pont entre les modules d'animation et le routeur React. */
const PATHS = {
  accueil: '/',
  realisations: '/realisations',
  'chateau-larc': '/realisations/chateau-larc',
  standing: '/realisations/stand-ing',
  'moulin-de-balme': '/realisations/moulin-de-balme',
  dathy: '/realisations/dathy',
  'les-bocaux-du-vexin': '/realisations/les-bocaux-du-vexin',
  'osmose-nutrition': '/realisations/osmose-nutrition',
  'ocha-and-co': '/realisations/ocha-and-co',
  'swing-call': '/realisations/swing-call',
  'entrepreneurs-du-vexin': '/realisations/entrepreneurs-du-vexin',
  'housses-taxi': '/realisations/housses-taxi',
  'orion-admin': '/orion-admin',
  secteurs: '/pour-qui',
  golf: '/pour-qui/golfs',
  boulangeries: '/pour-qui/boulangeries',
  restaurants: '/pour-qui/restaurants',
  associations: '/pour-qui/associations',
  artisans: '/pour-qui/artisans',
  'hotels-gites': '/pour-qui/hotels-gites',
  coiffeurs: '/pour-qui/coiffeurs',
  immobilier: '/pour-qui/immobilier',
  'tpe-pme': '/pour-qui/tpe-pme',
  independants: '/pour-qui/independants',
  'marques-e-commerce': '/pour-qui/marques-e-commerce',
  'start-up': '/pour-qui/start-up',
  'site-internet': '/expertises/site-internet',
  'site-vitrine': '/expertises/site-vitrine',
  'site-dynamique': '/expertises/site-dynamique',
  'site-concept': '/expertises/site-concept',
  'e-commerce': '/expertises/e-commerce',
  'developpement-applications': '/expertises/developpement-applications',
  saas: '/expertises/saas',
  automatisations: '/expertises/automatisations',
  seo: '/expertises/seo',
  geo: '/expertises/geo',
  'sea': '/expertises/sea',
  studio: '/le-studio',
  ressources: '/ressources',
  'etre-cite-par-les-ia': '/ressources/etre-cite-par-chatgpt-perplexity',
  faq: '/faq',
  'mentions-legales': '/mentions-legales',
  confidentialite: '/confidentialite',
  404: '*',
  'creation-site-internet-versailles': '/creation-site-internet/versailles',
  'creation-site-internet-cergy': '/creation-site-internet/cergy',
  'creation-site-internet-boulogne-billancourt': '/creation-site-internet/boulogne-billancourt',
  'creation-site-internet-meaux': '/creation-site-internet/meaux',
  'creation-site-internet-massy': '/creation-site-internet/massy',
}
// les titres des pages viennent de seo.ts, partagés avec le pré-rendu
let navigate = null
let pendingAfter = null
const setNavigate = (fn) => {
  navigate = fn
}
/** Va vers une page ; `after` s'exécute une fois la nouvelle page affichée. */
function go(name, after) {
  menuSet(false)
  pendingAfter = after || null
  navigate(PATHS[name] || name)
}
function runPendingAfter() {
  const a = pendingAfter
  pendingAfter = null
  if (a) a()
}

export { PATHS, TITLES, setNavigate, go, runPendingAfter }
