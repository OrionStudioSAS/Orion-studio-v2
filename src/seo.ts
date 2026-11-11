/**
 * Référencement : adresse du site, titres des pages et description de l'agence.
 * Utilisé par le site (titre de l'onglet) et par le pré-rendu (HTML lu par Google et les IA).
 */
export const SITE = 'https://orion-studio.io'

/** Basés à Paris, on travaille avec des clients partout en France, à distance en visio. */
export const ORG_DESCRIPTION =
  'Agence web basée à Paris : sites, boutiques Shopify, applications web, SEO et GEO. On accompagne des entreprises partout en France, en visio.'

export const HOME_DESCRIPTION =
  'Agence web basée à Paris : sites sur-mesure, boutiques Shopify et applications web. On travaille avec des entreprises partout en France, en visio.'

const S = ' — Orion Studio'

export const TITLES: Record<string, string> = {
  accueil: 'Orion Studio — Agence web à Paris, partout en France',
  studio: 'Le studio, agence web à Paris' + S,
  realisations: 'Réalisations : sites et applications web' + S,
  ressources: 'Ressources : guides web, SEO et IA' + S,
  'etre-cite-par-les-ia': 'Être cité par ChatGPT et Perplexity' + S,
  faq: 'Questions fréquentes' + S,
  'orion-admin': 'Orion Admin, l’outil pour gérer votre site' + S,

  // expertises
  'site-internet': 'Création de site internet sur-mesure' + S,
  'site-vitrine': 'Création de site vitrine' + S,
  'site-dynamique': 'Création de site dynamique' + S,
  'site-concept': 'Site concept et page de lancement' + S,
  'e-commerce': 'Création de site e-commerce Shopify' + S,
  'developpement-applications': 'Développement d’applications web' + S,
  saas: 'Développement de SaaS' + S,
  seo: 'SEO : référencement naturel' + S,
  geo: 'GEO : être cité par ChatGPT et les IA' + S,
  sea: 'SEA : publicité sur Google' + S,
  automatisations: 'Automatisation des tâches répétitives' + S,

  // pour qui
  secteurs: 'Sites internet par secteur d’activité' + S,
  golf: 'Site internet pour golfs' + S,
  boulangeries: 'Site internet pour boulangeries' + S,
  restaurants: 'Site internet pour restaurants' + S,
  associations: 'Site internet pour associations' + S,
  artisans: 'Site internet pour artisans' + S,
  'hotels-gites': 'Site internet pour hôtels et gîtes' + S,
  coiffeurs: 'Site internet pour coiffeurs' + S,
  immobilier: 'Site internet pour agences immobilières' + S,
  'tpe-pme': 'Site internet pour TPE et PME' + S,
  independants: 'Site internet pour indépendants' + S,
  'marques-e-commerce': 'Boutique en ligne pour marques et e-commerçants' + S,
  'start-up': 'Site internet pour start-up' + S,

  // villes
  'creation-site-internet-versailles': 'Création de site internet à Versailles' + S,
  'creation-site-internet-cergy': 'Création de site internet à Cergy' + S,
  'creation-site-internet-boulogne-billancourt': 'Création de site internet à Boulogne-Billancourt' + S,
  'creation-site-internet-meaux': 'Création de site internet à Meaux' + S,
  'creation-site-internet-massy': 'Création de site internet à Massy' + S,

  // réalisations
  'chateau-larc': 'Château l’Arc Golf Club, étude de cas' + S,
  standing: 'Stand-ING, étude de cas' + S,
  'moulin-de-balme': 'Le Moulin de Balme, étude de cas' + S,
  dathy: 'DATHY, étude de cas' + S,
  'les-bocaux-du-vexin': 'Les Bocaux du Vexin, étude de cas' + S,
  'osmose-nutrition': 'Osmose Nutrition, étude de cas' + S,
  'ocha-and-co': 'Ocha & Co., étude de cas' + S,
  'swing-call': 'Swing Call, étude de cas' + S,
  'entrepreneurs-du-vexin': 'Association des Entrepreneurs du Vexin, étude de cas' + S,
  'housses-taxi': 'Housses Taxi, étude de cas' + S,

  'mentions-legales': 'Mentions légales' + S,
  confidentialite: 'Confidentialité' + S,
  404: 'Page introuvable' + S,
}
