import { menuSet } from './chrome'
import { expertises } from './sections'

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
  'orion-admin': '/realisations/orion-admin',
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
  'developpement-applications': '/expertises/developpement-applications',
  automatisations: '/expertises/automatisations',
  seo: '/expertises/seo',
  geo: '/expertises/geo',
  'google-ads': '/expertises/google-ads',
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
const TITLES = {
  accueil: 'Orion Studio — Agence de développement web à Paris',
  realisations: 'Réalisations — Orion Studio',
  'chateau-larc': 'Château l’Arc Golf Club — Orion Studio',
  standing: 'Stand-ING — Orion Studio',
  golf: 'Golfs — Orion Studio',
  studio: 'Le studio — Orion Studio',
  ressources: 'Ressources — Orion Studio',
  faq: 'Questions fréquentes — Orion Studio',
  'etre-cite-par-les-ia': 'Être cité par ChatGPT et Perplexity — Orion Studio',
}
Object.assign(TITLES, {
  'creation-site-internet-versailles': 'Création de site internet à Versailles — Orion Studio',
  'creation-site-internet-cergy': 'Création de site internet à Cergy — Orion Studio',
  'creation-site-internet-boulogne-billancourt':
    'Création de site internet à Boulogne-Billancourt — Orion Studio',
  'creation-site-internet-meaux': 'Création de site internet à Meaux — Orion Studio',
  'creation-site-internet-massy': 'Création de site internet à Massy — Orion Studio',
  boulangeries: 'Boulangeries — Orion Studio',
  restaurants: 'Restaurants — Orion Studio',
  associations: 'Associations — Orion Studio',
  artisans: 'Artisans — Orion Studio',
  'hotels-gites': 'Hôtels & gîtes — Orion Studio',
  coiffeurs: 'Coiffeurs — Orion Studio',
  immobilier: 'Immobilier — Orion Studio',
  'tpe-pme': 'TPE & PME — Orion Studio',
  independants: 'Indépendants — Orion Studio',
  'marques-e-commerce': 'Marques & e-commerçants — Orion Studio',
  'start-up': 'Start-up — Orion Studio',
  secteurs: 'Tous les secteurs — Orion Studio',
  'moulin-de-balme': 'Le Moulin de Balme — Orion Studio',
})
Object.assign(TITLES, {
  'mentions-legales': 'Mentions légales — Orion Studio',
  confidentialite: 'Confidentialité — Orion Studio',
  404: 'Page introuvable — Orion Studio',
})
Object.assign(TITLES, {
  'site-internet': 'Site internet — Orion Studio',
  'site-vitrine': 'Site vitrine — Orion Studio',
  'site-dynamique': 'Site dynamique — Orion Studio',
  'site-concept': 'Site concept — Orion Studio',
  'developpement-applications': 'Développement d’applications — Orion Studio',
  seo: 'SEO — Orion Studio',
  geo: 'GEO — Orion Studio',
  'google-ads': 'Google Ads — Orion Studio',
})
TITLES['automatisations'] = 'Automatisations — Orion Studio'
Object.assign(TITLES, {
  dathy: 'DATHY — Orion Studio',
  'les-bocaux-du-vexin': 'Les Bocaux du Vexin — Orion Studio',
  'osmose-nutrition': 'Osmose Nutrition — Orion Studio',
  'ocha-and-co': 'Ocha & Co. — Orion Studio',
  'swing-call': 'Swing Call — Orion Studio',
  'entrepreneurs-du-vexin': 'Association des Entrepreneurs du Vexin — Orion Studio',
  'housses-taxi': 'Housses Taxi — Orion Studio',
  'orion-admin': 'Orion Admin — Orion Studio',
})
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
