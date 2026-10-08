export type Project = {
  slug: string
  name: string
  short: string
  category: string
  meta: string
  year?: string
  image?: string
  description: string
  tags: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'chateau-larc',
    name: "Château l'Arc Golf Club",
    short: "Château l'Arc",
    category: 'Golf · Site + back-office',
    meta: 'Golf · Site + back-office · 2026',
    year: '2026',
    image: '/images/chateau.jpg',
    description: "Un site à la hauteur d'un golf historique de Provence, et une équipe autonome sur ses contenus.",
    tags: ['UX/UI', 'Dev', 'Back-office'],
  },
  {
    slug: 'bocaux-du-vexin',
    name: 'Les Bocaux du Vexin',
    short: 'Les Bocaux du Vexin',
    category: 'E-commerce · Shopify',
    meta: 'E-commerce · Shopify · 2026',
    year: '2026',
    image: '/images/bocaux.jpg',
    description: 'Refonte Shopify : direction artistique, design system et parcours d’achat simplifié.',
    tags: ['Shopify', 'DA'],
  },
  {
    slug: 'stand-ing',
    name: 'Stand-ING',
    short: 'Stand-ING',
    category: 'Configurateur 3D',
    meta: 'Outil métier · Configurateur 3D · 2026',
    year: '2026',
    image: '/images/standing.jpg',
    description: 'Un configurateur 3D pour concevoir un stand en quelques clics.',
    tags: ['Outil métier', '3D'],
  },
  {
    slug: 'osmose-nutrition',
    name: 'Osmose Nutrition',
    short: 'Osmose Nutrition',
    category: 'E-commerce · Abonnements',
    meta: 'E-commerce · Abonnements · 2026',
    year: '2026',
    image: '/images/osmose.jpg',
    description: 'Boutique Shopify complète : variantes, stock et abonnements.',
    tags: ['Shopify', 'Abonnements'],
  },
  {
    slug: 'parker-smith',
    name: 'Parker & Smith',
    short: 'Parker & Smith',
    category: 'Horlogerie · DA & UX',
    meta: 'Horlogerie · DA & UX',
    image: '/images/parker.jpg',
    description: 'Direction artistique et expérience pour une maison horlogère.',
    tags: ['DA', 'UX'],
  },
  {
    slug: 'tersen',
    name: 'Tersen — Groupe Colas',
    short: 'Tersen — Groupe Colas',
    category: 'Plateforme SaaS',
    meta: 'Plateforme SaaS',
    description: 'Une plateforme SaaS métier pour les équipes terrain du groupe.',
    tags: ['SaaS', 'Web app'],
  },
  {
    slug: 'absolute-boat',
    name: 'Absolute Boat',
    short: 'Absolute Boat',
    category: 'Yachting · Site',
    meta: 'Yachting · Site',
    image: '/images/absolute.jpg',
    description: 'Un site éditorial pour une marque de yachting.',
    tags: ['Site', 'DA'],
  },
]

export const EXPERTISES_SHORT = ['Sites sur-mesure', 'E-commerce Shopify', 'SaaS & Web apps', 'Orion Admin']

export type Expertise = {
  title: string
  description: string
  file: string
  branch: string
  code: string
  build: string
}

export const EXPERTISES: Expertise[] = [
  {
    title: 'Stratégie & UX',
    description: 'Objectifs, cibles, parcours : on structure le projet avant de dessiner le moindre écran.',
    file: 'parcours.ts',
    branch: 'cadrage',
    code: `export const parcours = [
  { etape: 'Découverte', objectif: 'Comprendre' },
  { etape: 'Comparaison', objectif: 'Rassurer' },
  { etape: 'Contact', objectif: 'Convertir' },
]

export const cible = 'Décideurs, mobile first'`,
    build: 'Arborescence validée — 12 pages',
  },
  {
    title: 'UI & Direction artistique',
    description: 'Une identité visuelle forte, déclinée en design system cohérent sur tous les écrans.',
    file: 'tokens.css',
    branch: 'design-system',
    code: `:root {
  --ink: #0f0f0d;
  --paper: #f3f1eb;
  --accent: #ff4d1a;
  --font-sans: 'Geist', sans-serif;
  --font-serif: 'Instrument Serif', serif;
  --radius: 999px;
}`,
    build: 'Tokens synchronisés avec Figma',
  },
  {
    title: 'Développement web',
    description: 'Des sites rapides, accessibles et maintenables, codés composant par composant.',
    file: 'ProjectCard.tsx',
    branch: 'main',
    code: `export function ProjectCard({ project }) {
  return (
    <article className="card card--featured">
      <Media src={project.cover} ratio="16/10" />
      <h3>{project.name}</h3>
      <Tags items={project.expertises} />
    </article>
  )
}`,
    build: 'Build réussi — déployé en production',
  },
  {
    title: 'Shopify & E-commerce',
    description: 'Des boutiques pensées pour vendre, simples à gérer au quotidien.',
    file: 'product-form.liquid',
    branch: 'shopify',
    code: `{% for variant in product.variants %}
  <option value="{{ variant.id }}">
    {{ variant.title }} — {{ variant.price | money }}
  </option>
{% endfor %}

{% render 'subscription-widget', product: product %}`,
    build: 'Thème publié sur la boutique',
  },
  {
    title: 'SaaS & Web apps',
    description: 'Applications métier, espaces clients et outils internes, de la base de données à l’interface.',
    file: 'api/projects.ts',
    branch: 'feat/dashboard',
    code: `export async function GET(req: Request) {
  const user = await auth(req)
  const projects = await db.project.findMany({
    where: { ownerId: user.id },
    orderBy: { updatedAt: 'desc' },
  })
  return Response.json(projects)
}`,
    build: 'Tests passés — préprod à jour',
  },
  {
    title: 'CRO & Évolution',
    description: 'Mesurer, tester, améliorer : votre site continue de progresser après la mise en ligne.',
    file: 'experiment.ts',
    branch: 'ab/hero-cta',
    code: `const variant = ab('hero-cta', ['A', 'B'])

track('cta_click', { variant, page: 'home' })

// Variante retenue après test → déployée`,
    build: 'Expérience lancée — 50 / 50',
  },
]

export type Step = { title: string; description: string; tags: string[] }

export const STEPS: Step[] = [
  {
    title: 'Cadrer',
    description:
      'Atelier de cadrage, objectifs, arborescence et parcours clés. Vous repartez avec un périmètre clair, un planning et un devis ferme.',
    tags: ['Atelier', 'Arborescence', 'Planning'],
  },
  {
    title: 'Designer',
    description:
      'Direction artistique, maquettes desktop et mobile, prototype cliquable. On itère ensemble jusqu’à validation, écran par écran.',
    tags: ['DA', 'Maquettes', 'Prototype'],
  },
  {
    title: 'Développer',
    description:
      "Intégration, CMS ou Shopify, intégrations et automatisations. Vous suivez l'avancement en direct dans Orion Admin, et vous testez sur une préprod avant la mise en ligne.",
    tags: ['Préprod', 'Recette', 'Formation'],
  },
  {
    title: 'Lancer',
    description:
      'Mise en ligne, redirections, SEO technique et suivi des performances. On reste mobilisés les premiers jours pour tout ajuster.',
    tags: ['Mise en ligne', 'SEO', 'Monitoring'],
  },
  {
    title: 'Faire grandir',
    description:
      'Maintenance, évolutions et optimisation continue, avec les mêmes interlocuteurs qui connaissent votre projet depuis le premier jour.',
    tags: ['Maintenance', 'Évolutions', 'CRO'],
  },
]

export type Testimonial = {
  quote: string
  emphasis?: string
  name: string
  initials: string
  role: string
}

// Seul le premier avis provient de la maquette. Les deux suivants sont des emplacements
// à remplacer par de vrais avis Google avant la mise en ligne.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Leur expertise sur le développement sur-mesure est impressionnante. Une équipe à l'écoute, professionnelle, et qui",
    emphasis: 'livre dans les temps.',
    name: 'Thierry Cordier',
    initials: 'TC',
    role: 'Association des Entrepreneurs du Vexin — Site vitrine',
  },
  {
    quote: '[Avis client à intégrer — citation tirée des avis Google]',
    name: '[Nom du client]',
    initials: '··',
    role: '[Entreprise — Type de projet]',
  },
  {
    quote: '[Avis client à intégrer — citation tirée des avis Google]',
    name: '[Nom du client]',
    initials: '··',
    role: '[Entreprise — Type de projet]',
  },
]

export type Faq = { q: string; a: string }

export const FAQS: Faq[] = [
  {
    q: 'Combien coûte un projet ?',
    a: 'Chaque projet est chiffré sur devis après un premier échange. Dans le formulaire de contact, vous indiquez une fourchette de budget : on vous oriente vers la bonne approche dès le premier appel.',
  },
  {
    q: 'Combien de temps faut-il pour un site ?',
    a: 'Un site vitrine prend en moyenne 4 à 8 semaines, selon sa complexité et le rythme des échanges. Le planning est fixé dès le cadrage, et vous suivez chaque étape dans Orion Admin.',
  },
  {
    q: 'Comment se passe le paiement ?',
    a: '30 % à la signature, 30 % à la validation des maquettes, 30 % à la livraison, et les 10 % restants deux semaines après la mise en ligne.',
  },
  {
    q: 'Webflow, Shopify ou code sur-mesure ?',
    a: 'Ça dépend de vos enjeux. Shopify pour vendre, Webflow pour un site éditorial que vous faites vivre vous-même, du code sur-mesure pour les applications et les besoins spécifiques. On vous recommande la solution adaptée, pas celle qu’on préfère.',
  },
  {
    q: 'Est-ce que je pourrai modifier mon site seul ?',
    a: 'Oui. Chaque site est livré avec un back-office pensé pour votre équipe, et une formation pour être autonome sur vos contenus dès le lancement.',
  },
  {
    q: 'Que se passe-t-il après la mise en ligne ?',
    a: 'On reste disponibles : maintenance, évolutions, optimisation des conversions. Vous gardez les mêmes interlocuteurs, qui connaissent votre projet depuis le premier jour.',
  },
]

export const NAV_LINKS = [
  { label: 'Réalisations', href: '#projets' },
  { label: 'Expertises', href: '#expertises', mega: true },
  { label: 'Orion Admin', href: '#methode' },
  { label: 'Studio', href: '#studio' },
  { label: 'Journal', href: '#faq' },
]

export const EMAIL = 'hello@orion-studio.io'
