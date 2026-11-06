import type { ComponentType } from 'react'

export type SiteRoute = {
  view: string
  path: string
  wrap: string
  Desktop: () => Promise<ComponentType>
  Mobile: () => Promise<ComponentType>
}

/** Toutes les pages du site. Chaque version (desktop, mobile) est un fichier chargé à la demande. */
export const ROUTES: SiteRoute[] = [
  { view: "accueil", path: "/", wrap: "view v-home", Desktop: () => import('./pages/Home/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Home/Mobile').then((m) => m.Mobile) },
  { view: "realisations", path: "/realisations", wrap: "view v-pg", Desktop: () => import('./pages/Realisations/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Realisations/Mobile').then((m) => m.Mobile) },
  { view: "chateau-larc", path: "/realisations/chateau-larc", wrap: "view v-pg", Desktop: () => import('./pages/ChateauLarc/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/ChateauLarc/Mobile').then((m) => m.Mobile) },
  { view: "standing", path: "/realisations/stand-ing", wrap: "view v-pg", Desktop: () => import('./pages/StandIng/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/StandIng/Mobile').then((m) => m.Mobile) },
  { view: "golf", path: "/pour-qui/golfs", wrap: "view v-pg", Desktop: () => import('./pages/Golfs/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Golfs/Mobile').then((m) => m.Mobile) },
  { view: "ressources", path: "/ressources", wrap: "view v-pg", Desktop: () => import('./pages/Ressources/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Ressources/Mobile').then((m) => m.Mobile) },
  { view: "etre-cite-par-les-ia", path: "/ressources/etre-cite-par-chatgpt-perplexity", wrap: "view v-pg", Desktop: () => import('./pages/ArticleIA/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/ArticleIA/Mobile').then((m) => m.Mobile) },
  { view: "faq", path: "/faq", wrap: "view v-pg", Desktop: () => import('./pages/Faq/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Faq/Mobile').then((m) => m.Mobile) },
  { view: "secteurs", path: "/pour-qui", wrap: "view v-pg", Desktop: () => import('./pages/PourQui/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/PourQui/Mobile').then((m) => m.Mobile) },
  { view: "boulangeries", path: "/pour-qui/boulangeries", wrap: "view v-pg", Desktop: () => import('./pages/Boulangeries/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Boulangeries/Mobile').then((m) => m.Mobile) },
  { view: "restaurants", path: "/pour-qui/restaurants", wrap: "view v-pg", Desktop: () => import('./pages/Restaurants/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Restaurants/Mobile').then((m) => m.Mobile) },
  { view: "associations", path: "/pour-qui/associations", wrap: "view v-pg", Desktop: () => import('./pages/Associations/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Associations/Mobile').then((m) => m.Mobile) },
  { view: "artisans", path: "/pour-qui/artisans", wrap: "view v-pg", Desktop: () => import('./pages/Artisans/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Artisans/Mobile').then((m) => m.Mobile) },
  { view: "hotels-gites", path: "/pour-qui/hotels-gites", wrap: "view v-pg", Desktop: () => import('./pages/HotelsGites/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/HotelsGites/Mobile').then((m) => m.Mobile) },
  { view: "coiffeurs", path: "/pour-qui/coiffeurs", wrap: "view v-pg", Desktop: () => import('./pages/Coiffeurs/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Coiffeurs/Mobile').then((m) => m.Mobile) },
  { view: "immobilier", path: "/pour-qui/immobilier", wrap: "view v-pg", Desktop: () => import('./pages/Immobilier/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Immobilier/Mobile').then((m) => m.Mobile) },
  { view: "tpe-pme", path: "/pour-qui/tpe-pme", wrap: "view v-pg", Desktop: () => import('./pages/TpePme/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/TpePme/Mobile').then((m) => m.Mobile) },
  { view: "independants", path: "/pour-qui/independants", wrap: "view v-pg", Desktop: () => import('./pages/Independants/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Independants/Mobile').then((m) => m.Mobile) },
  { view: "marques-e-commerce", path: "/pour-qui/marques-e-commerce", wrap: "view v-pg", Desktop: () => import('./pages/MarquesECommerce/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/MarquesECommerce/Mobile').then((m) => m.Mobile) },
  { view: "start-up", path: "/pour-qui/start-up", wrap: "view v-pg", Desktop: () => import('./pages/StartUp/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/StartUp/Mobile').then((m) => m.Mobile) },
  { view: "site-internet", path: "/expertises/site-internet", wrap: "view v-pg", Desktop: () => import('./pages/SiteInternet/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/SiteInternet/Mobile').then((m) => m.Mobile) },
  { view: "site-vitrine", path: "/expertises/site-vitrine", wrap: "view v-pg", Desktop: () => import('./pages/SiteVitrine/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/SiteVitrine/Mobile').then((m) => m.Mobile) },
  { view: "site-dynamique", path: "/expertises/site-dynamique", wrap: "view v-pg", Desktop: () => import('./pages/SiteDynamique/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/SiteDynamique/Mobile').then((m) => m.Mobile) },
  { view: "site-concept", path: "/expertises/site-concept", wrap: "view v-pg", Desktop: () => import('./pages/SiteConcept/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/SiteConcept/Mobile').then((m) => m.Mobile) },
  { view: "e-commerce", path: "/expertises/e-commerce", wrap: "view v-pg", Desktop: () => import('./pages/ECommerce/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/ECommerce/Mobile').then((m) => m.Mobile) },
  { view: "developpement-applications", path: "/expertises/developpement-applications", wrap: "view v-pg", Desktop: () => import('./pages/DeveloppementApplications/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/DeveloppementApplications/Mobile').then((m) => m.Mobile) },
  { view: "seo", path: "/expertises/seo", wrap: "view v-pg", Desktop: () => import('./pages/Seo/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Seo/Mobile').then((m) => m.Mobile) },
  { view: "geo", path: "/expertises/geo", wrap: "view v-pg", Desktop: () => import('./pages/Geo/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Geo/Mobile').then((m) => m.Mobile) },
  { view: "google-ads", path: "/expertises/google-ads", wrap: "view v-pg", Desktop: () => import('./pages/GoogleAds/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/GoogleAds/Mobile').then((m) => m.Mobile) },
  { view: "automatisations", path: "/expertises/automatisations", wrap: "view v-pg", Desktop: () => import('./pages/Automatisations/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Automatisations/Mobile').then((m) => m.Mobile) },
  { view: "moulin-de-balme", path: "/realisations/moulin-de-balme", wrap: "view v-pg", Desktop: () => import('./pages/MoulinDeBalme/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/MoulinDeBalme/Mobile').then((m) => m.Mobile) },
  { view: "creation-site-internet-versailles", path: "/creation-site-internet/versailles", wrap: "view v-pg", Desktop: () => import('./pages/CreationSiteInternetVersailles/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/CreationSiteInternetVersailles/Mobile').then((m) => m.Mobile) },
  { view: "creation-site-internet-cergy", path: "/creation-site-internet/cergy", wrap: "view v-pg", Desktop: () => import('./pages/CreationSiteInternetCergy/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/CreationSiteInternetCergy/Mobile').then((m) => m.Mobile) },
  { view: "creation-site-internet-boulogne-billancourt", path: "/creation-site-internet/boulogne-billancourt", wrap: "view v-pg", Desktop: () => import('./pages/CreationSiteInternetBoulogneBillancourt/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/CreationSiteInternetBoulogneBillancourt/Mobile').then((m) => m.Mobile) },
  { view: "creation-site-internet-meaux", path: "/creation-site-internet/meaux", wrap: "view v-pg", Desktop: () => import('./pages/CreationSiteInternetMeaux/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/CreationSiteInternetMeaux/Mobile').then((m) => m.Mobile) },
  { view: "creation-site-internet-massy", path: "/creation-site-internet/massy", wrap: "view v-pg", Desktop: () => import('./pages/CreationSiteInternetMassy/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/CreationSiteInternetMassy/Mobile').then((m) => m.Mobile) },
  { view: "mentions-legales", path: "/mentions-legales", wrap: "view v-pg", Desktop: () => import('./pages/MentionsLegales/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/MentionsLegales/Mobile').then((m) => m.Mobile) },
  { view: "confidentialite", path: "/confidentialite", wrap: "view v-pg", Desktop: () => import('./pages/Confidentialite/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Confidentialite/Mobile').then((m) => m.Mobile) },
  { view: "404", path: "*", wrap: "view v-pg", Desktop: () => import('./pages/NotFound/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/NotFound/Mobile').then((m) => m.Mobile) },
  { view: "dathy", path: "/realisations/dathy", wrap: "view v-pg", Desktop: () => import('./pages/Dathy/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Dathy/Mobile').then((m) => m.Mobile) },
  { view: "les-bocaux-du-vexin", path: "/realisations/les-bocaux-du-vexin", wrap: "view v-pg", Desktop: () => import('./pages/LesBocauxDuVexin/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/LesBocauxDuVexin/Mobile').then((m) => m.Mobile) },
  { view: "osmose-nutrition", path: "/realisations/osmose-nutrition", wrap: "view v-pg", Desktop: () => import('./pages/OsmoseNutrition/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/OsmoseNutrition/Mobile').then((m) => m.Mobile) },
  { view: "ocha-and-co", path: "/realisations/ocha-and-co", wrap: "view v-pg", Desktop: () => import('./pages/OchaAndCo/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/OchaAndCo/Mobile').then((m) => m.Mobile) },
  { view: "swing-call", path: "/realisations/swing-call", wrap: "view v-pg", Desktop: () => import('./pages/SwingCall/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/SwingCall/Mobile').then((m) => m.Mobile) },
  { view: "entrepreneurs-du-vexin", path: "/realisations/entrepreneurs-du-vexin", wrap: "view v-pg", Desktop: () => import('./pages/EntrepreneursDuVexin/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/EntrepreneursDuVexin/Mobile').then((m) => m.Mobile) },
  { view: "housses-taxi", path: "/realisations/housses-taxi", wrap: "view v-pg", Desktop: () => import('./pages/HoussesTaxi/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/HoussesTaxi/Mobile').then((m) => m.Mobile) },
  { view: "orion-admin", path: "/orion-admin", wrap: "view v-pg", Desktop: () => import('./pages/OrionAdmin/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/OrionAdmin/Mobile').then((m) => m.Mobile) },
  { view: "studio", path: "/le-studio", wrap: "view v-pg", Desktop: () => import('./pages/Studio/Desktop').then((m) => m.Desktop), Mobile: () => import('./pages/Studio/Mobile').then((m) => m.Mobile) },
]
