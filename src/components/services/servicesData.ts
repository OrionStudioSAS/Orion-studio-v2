export type Point = { t: string; d: string; links?: { to: string; label: string }[] }
export type Faq = { q: string; a: string }
export type Ref = { p: keyof typeof PROJECTS; note?: string }
export type ServiceId =
  | 'site-internet'
  | 'site-vitrine'
  | 'site-dynamique'
  | 'site-concept'
  | 'e-commerce'
  | 'developpement-applications'
  | 'seo'
  | 'geo'
  | 'google-ads'
  | 'automatisations'
export type Service = {
  what: { title: string; lead: string; points: Point[] }
  steps: [string, string][]
  after: Point[]
  refs: Ref[]
  faq: Faq[]
}

export const PROJECTS = {
  housses: {
    name: 'Housses Taxi',
    tag: 'Site vitrine · TPE',
    desc: 'Le site d’un fabricant de housses sur mesure pour taxis et VTC, dans le Val-d’Oise.',
    to: '/realisations/housses-taxi',
    pixel: '/images/6fd799a3a74785.png',
    real: '/images/17eafb1d2deb75.jpg',
  },
  dathy: {
    name: 'DATHY',
    tag: 'Site vitrine · DA',
    desc: 'Le site d’un cabinet d’assistance à maîtrise d’ouvrage en bâtiment et travaux publics, dans le Vexin.',
    to: '/realisations/dathy',
    pixel: '/images/dc0beeb280fba7.png',
    real: '/images/d6469bcda29f1a.jpg',
  },
  moulin: {
    name: 'Le Moulin de Balme',
    tag: 'Boulangerie · Site + back-office',
    desc: 'Une boulangerie à Brive : un site avec click & collect, et un back-office pour tout gérer depuis le fournil.',
    to: '/realisations/moulin-de-balme',
    pixel: '/images/4a723a9387332c.png',
    real: '/images/ce971a6eeb6bd1.jpg',
  },
  chateau: {
    name: 'Château l’Arc Golf Club',
    tag: 'Golf · Site + back-office · 2026',
    desc: 'Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et événements.',
    to: '/realisations/chateau-larc',
    pixel: '/images/55a80d70f3d20a.png',
    real: '/images/661531aedb86a4.jpg',
  },
  entrepreneurs: {
    name: 'Association des Entrepreneurs du Vexin',
    tag: 'Association · Site + espace membres',
    desc: 'Le site du réseau des chefs d’entreprise du Vexin : membres, événements et adhésion en ligne.',
    to: '/realisations/entrepreneurs-du-vexin',
    pixel: '/images/17682ce2f50cef.png',
    real: '/images/f7f70ac67d2f8d.jpg',
  },
  swing: {
    name: 'Swing Call',
    tag: 'Start-up · Site produit',
    desc: 'Le site d’une start-up qui équipe les golfs d’un agent IA téléphonique.',
    to: '/realisations/swing-call',
    pixel: '/images/6cb0d8d4f25c2a.png',
    real: '/images/a4c19bfe3dd683.jpg',
  },
  standing: {
    name: 'Stand-ING',
    tag: 'Configurateur 3D · 2026',
    desc: 'Un configurateur de stands en ligne : le client compose, visualise et reçoit son devis.',
    to: '/realisations/stand-ing',
    pixel: '/images/2c63fe08cd774a.png',
    real: '/images/cfe60288d854b0.png',
  },
  bocaux: {
    name: 'Les Bocaux du Vexin',
    tag: 'E-commerce · Shopify · 2026',
    desc: 'Une boutique Shopify simple à tenir au quotidien pour une conserverie locale.',
    to: '/realisations/les-bocaux-du-vexin',
    pixel: '/images/07246a74f6555c.png',
    real: '/images/4decbda594bb3c.jpg',
  },
  ocha: {
    name: 'Ocha & Co.',
    tag: 'E-commerce · Shopify',
    desc: 'La boutique en ligne d’une maison de thé japonaise : matchas et thés bio, quiz pour trouver le sien.',
    to: '/realisations/ocha-and-co',
    pixel: '/images/881de3b40197db.png',
    real: '/images/71eb80b3e243f6.jpg',
  },
  osmose: {
    name: 'Osmose Nutrition',
    tag: 'E-commerce · Refonte UX/CRO · 2025',
    desc: 'La refonte de la boutique d’un fabricant de compléments alimentaires : diagnostic, routine sur mesure, abonnements.',
    to: '/realisations/osmose-nutrition',
    pixel: '/images/5e44d143820ccb.png',
    real: '/images/b351708a31fde9.jpg',
  },
  admin: {
    name: 'Orion Admin',
    tag: 'Interface d’administration · en option',
    desc: 'L’interface faite sur mesure pour piloter son site : chiffres, contenus, langues et tout ce que l’activité demande.',
    to: '/orion-admin',
    pixel: '/images/4b8094654fed91.png',
    real: '/images/94f1f7140db692.jpg',
  },
}

/** Les 10 services, dans l'ordre du menu. */
export const SERVICE_LINKS = [
  {
    id: 'site-internet',
    name: 'Site internet',
    d: 'Vitrine, dynamique, concept ou boutique.',
    icon: '/px/picon-89906f55.svg',
  },
  {
    id: 'site-vitrine',
    name: 'Site vitrine',
    d: 'Présenter votre activité et être contacté.',
    icon: '/px/picon-5d9e4e01.svg',
  },
  {
    id: 'site-dynamique',
    name: 'Site dynamique',
    d: 'Blog, réservation, espace compte.',
    icon: '/px/picon-c328b51d.svg',
  },
  {
    id: 'site-concept',
    name: 'Site concept',
    d: 'Une expérience pour marquer les esprits.',
    icon: '/px/picon-ba26fc59.svg',
  },
  {
    id: 'e-commerce',
    name: 'E-commerce',
    d: 'Votre boutique en ligne, sur Shopify.',
    icon: '/px/picon-808b4de1.svg',
  },
  {
    id: 'developpement-applications',
    name: 'Développement d’applications',
    d: 'Des outils sur mesure pour votre métier.',
    icon: '/px/picon-8236c841.svg',
  },
  {
    id: 'seo',
    name: 'SEO',
    d: 'Remonter sur Google.',
    icon: '/px/picon-43178318.svg',
  },
  {
    id: 'geo',
    name: 'GEO',
    d: 'Être cité par les IA.',
    icon: '/px/picon-84c912e7.svg',
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    d: 'Des annonces qui rapportent des contacts.',
    icon: '/px/picon-011bf99b.svg',
  },
  {
    id: 'automatisations',
    name: 'Automatisations',
    d: 'Vos tâches répétitives, automatisées.',
    icon: '/px/picon-163f1643.svg',
  },
]

const ALONE: Faq = {
  q: 'Pourrai-je modifier mon site seul ?',
  a: 'Oui. On vous livre un outil simple et on vous montre comment l’utiliser. Vous changez vos textes, vos images et vos pages sans connaissances techniques.',
}
const ACCESS: Point = {
  t: 'Votre projet reste à vous',
  d: 'Le nom de domaine, les contenus et les accès sont à votre nom, et le projet est facile à reprendre si besoin.',
}
const SEO_GEO: Point = {
  t: 'SEO et GEO complets, inclus dans le devis',
  d: 'Pour chacun de nos clients : technique, contenus et suivi des positions pour Google, réponses claires et données structurées pour les IA comme ChatGPT.',
  links: [
    { to: '/expertises/seo', label: 'Le SEO' },
    { to: '/expertises/geo', label: 'Le GEO' },
  ],
}
const ADS: Point = {
  t: 'On vous accompagne aussi sur la publicité',
  d: 'Besoin de contacts plus vite ? On crée et on pilote vos annonces Google Ads.',
  links: [{ to: '/expertises/google-ads', label: 'Découvrir Google Ads' }],
}

const MAINT: Point = {
  t: 'On reste disponibles',
  d: 'Mises à jour, sauvegardes, surveillance, petites évolutions : la maintenance vous est proposée dans le devis.',
}

export const SERVICES: Record<ServiceId, Service> = {
  'site-internet': {
    what: {
      title: 'un site internet ?',
      lead: 'C’est votre adresse sur internet : un endroit ouvert jour et nuit, où vos clients vous trouvent et découvrent ce que vous faites. Selon ce qu’il doit faire pour vous, il prend l’une de ces formes.',
      points: [
        {
          t: 'Le site vitrine',
          d: 'Pour présenter votre activité et être contacté.',
        },
        {
          t: 'Le site dynamique',
          d: 'Pour publier un blog, prendre des réservations ou ouvrir un espace compte.',
        },
        {
          t: 'Le site concept',
          d: 'Pour marquer les esprits lors d’un lancement ou d’une campagne.',
        },
        {
          t: 'Le site e-commerce',
          d: 'Pour vendre vos produits en ligne, sur Shopify.',
        },
      ],
    },
    steps: [
      [
        'On fait connaissance',
        'On parle de votre activité et de ce que le site doit vous apporter. Vous recevez un devis clair.',
      ],
      [
        'On le dessine',
        'Vous voyez à quoi ressemblera votre site et vous validez chaque écran avant la suite.',
      ],
      [
        'On le construit',
        'On le développe et vous pouvez l’essayer sur une version de test, avant tout le monde.',
      ],
      ['On le met en ligne', 'Votre site est publié et on vous montre comment le mettre à jour.'],
    ],
    after: [
      {
        t: 'Vous êtes autonome',
        d: 'Vous changez vos textes, vos images et vos pages vous-même, sans nous appeler.',
      },
      MAINT,
      {
        t: 'Votre site évolue',
        d: 'Une nouvelle page, une réservation, une boutique : on ajoute ce dont vous avez besoin, quand vous en avez besoin.',
      },
    ],
    refs: [{ p: 'housses' }, { p: 'moulin' }, { p: 'chateau' }],
    faq: [
      {
        q: 'Combien coûte un site internet ?',
        a: 'Chaque projet est chiffré sur devis après un premier échange. Le prix dépend du nombre de pages, des fonctions (réservation, boutique, espace client) et du niveau de sur-mesure.',
      },
      {
        q: 'Combien de temps faut-il ?',
        a: 'Un site vitrine prend en moyenne 4 à 8 semaines. Une boutique ou une application demande davantage : le planning est fixé dans le devis.',
      },
      ALONE,
      {
        q: 'Quel type de site choisir ?',
        a: 'Tout dépend de ce que le site doit faire pour vous. On vous oriente vers la bonne solution dès le premier échange.',
      },
      {
        q: 'Reprenez-vous un site existant ?',
        a: 'Oui. On le regarde d’abord, puis on vous dit franchement s’il vaut mieux le faire évoluer ou repartir de zéro, et pourquoi.',
      },
    ],
  },
  'site-vitrine': {
    what: {
      title: 'un site vitrine ?',
      lead: 'C’est la présentation de votre entreprise sur internet. En quelques pages, vos futurs clients voient qui vous êtes, ce que vous faites et comment vous contacter.',
      points: [
        {
          t: 'À quoi ça sert',
          d: 'À être trouvé, à inspirer confiance et à recevoir des demandes de contact ou de devis.',
        },
        {
          t: 'Pour qui',
          d: 'Les artisans, les cabinets, les commerces et les indépendants.',
        },
        {
          t: 'Un exemple',
          d: 'Un artisan y montre ses services, ses chantiers et ses avis. Un client le découvre et demande un devis.',
        },
      ],
    },
    steps: [
      ['On fait connaissance', 'On parle de votre activité et de vos clients. Vous recevez un devis clair.'],
      [
        'On dessine votre site',
        'Vous voyez vos pages avant qu’elles soient construites, et vous validez chaque écran.',
      ],
      [
        'On le construit',
        'On le développe et vous pouvez l’essayer sur une version de test, avant tout le monde.',
      ],
      [
        'On le met en ligne',
        'Votre site est publié et on vous montre comment modifier vos textes et vos photos.',
      ],
    ],
    after: [
      {
        t: 'Vous êtes autonome',
        d: 'Une nouvelle photo, un changement d’horaires, une actualité : vous le faites vous-même, sans nous appeler.',
      },
      MAINT,
    ],
    refs: [{ p: 'housses' }, { p: 'dathy' }],
    faq: [
      {
        q: 'Combien coûte un site vitrine ?',
        a: 'Chaque projet est chiffré sur devis après un premier échange, gratuit et sans engagement. Le prix dépend du nombre de pages et des fonctions (formulaire de devis, prise de rendez-vous, plusieurs langues).',
      },
      {
        q: 'Combien de temps faut-il ?',
        a: 'En moyenne 4 à 8 semaines, selon la taille du site et le rythme de nos échanges.',
      },
      ALONE,
      {
        q: 'Mon site sera-t-il visible sur Google ?',
        a: 'Oui. Un SEO complet (technique, contenus, suivi des positions) et un GEO complet (réponses claires, données structurées, suivi dans les IA) sont inclus dans le devis de chacun de nos clients.',
      },
      {
        q: 'Reprenez-vous un site existant ?',
        a: 'Oui. On le regarde d’abord, puis on vous dit franchement s’il vaut mieux le faire évoluer ou repartir de zéro, et pourquoi.',
      },
    ],
  },
  'site-dynamique': {
    what: {
      title: 'un site dynamique ?',
      lead: 'C’est un site qui ne se contente pas de présenter : on peut y lire un blog, réserver ou se connecter à son compte. Votre équipe le fait vivre chaque jour depuis un espace de gestion simple.',
      points: [
        {
          t: 'À quoi ça sert',
          d: 'À publier vos actualités, à prendre des réservations à toute heure et à offrir un espace compte à vos clients ou à vos membres.',
        },
        {
          t: 'Pour qui',
          d: 'Les restaurants, les hôtels, les clubs, les associations et les réseaux avec des membres.',
        },
        {
          t: 'Un exemple',
          d: 'Un club publie ses actualités, et ses membres retrouvent leurs informations dans leur espace.',
        },
      ],
    },
    steps: [
      [
        'On fait connaissance',
        'On liste ce que le site doit faire et les outils à relier. Vous recevez un devis clair.',
      ],
      [
        'On dessine votre site',
        'Vous voyez les écrans de vos clients et ceux de votre équipe, et vous les validez.',
      ],
      [
        'On le construit',
        'On le développe et on le relie à vos outils. Vous l’essayez sur une version de test.',
      ],
      ['On le met en ligne', 'Le site est publié et votre équipe apprend à s’en servir.'],
    ],
    after: [
      {
        t: 'Votre équipe prend la main',
        d: 'Horaires, offres, articles, actualités : elle les met à jour depuis un ordinateur ou un téléphone.',
      },
      MAINT,
      {
        t: 'Votre site évolue',
        d: 'Un nouveau service, un nouvel outil à relier : on l’ajoute quand vous en avez besoin.',
      },
    ],
    refs: [
      { p: 'entrepreneurs' },
      { p: 'chateau' },
      {
        p: 'moulin',
        note: 'Une boulangerie à Brive : un site et un back-office pour tout gérer depuis le fournil.',
      },
    ],
    faq: [
      {
        q: 'Combien coûte un site dynamique ?',
        a: 'Chaque projet est chiffré sur devis après un premier échange, gratuit et sans engagement. Le prix dépend des fonctions (blog, réservation, espace compte) et des outils à relier.',
      },
      {
        q: 'Combien de temps faut-il ?',
        a: 'Plus que pour un site vitrine (4 à 8 semaines en moyenne) : le planning est fixé dans le devis.',
      },
      ALONE,
      {
        q: 'Pouvez-vous relier nos outils au site ?',
        a: 'Oui, si l’outil le permet. On le vérifie avec vous avant le devis.',
      },
      {
        q: 'Où mon site est-il hébergé ?',
        a: 'Cela dépend de la technologie choisie. On vous recommande la solution la plus simple et la plus fiable pour votre cas.',
      },
    ],
  },
  'e-commerce': {
    what: {
      title: 'un site e-commerce ?',
      lead: 'C’est une boutique ouverte jour et nuit : vos clients choisissent, paient en ligne, et vous recevez la commande. On la construit sur Shopify, qui gère pour vous l’hébergement, la sécurité et les paiements.',
      points: [
        {
          t: 'À quoi ça sert',
          d: 'À vendre vos produits partout et à toute heure, et à gérer vos stocks et vos commandes au même endroit.',
        },
        {
          t: 'Pour qui',
          d: 'Les marques, les artisans, les producteurs et les commerçants qui veulent vendre en ligne.',
        },
        {
          t: 'Un exemple',
          d: 'Une conserverie locale vend ses bocaux en ligne et tient sa boutique au quotidien, sans nous appeler.',
        },
      ],
    },
    steps: [
      [
        'On fait connaissance',
        'On parle de vos produits, de la livraison et du paiement. Vous recevez un devis clair.',
      ],
      [
        'On dessine votre boutique',
        'Vous voyez l’accueil, les fiches produits et le panier, et vous validez chaque écran.',
      ],
      [
        'On la construit',
        'Un thème sur mesure sur Shopify, vos produits et le paiement. Vous l’essayez avant tout le monde.',
      ],
      [
        'On la met en ligne',
        'La boutique est publiée et on vous montre comment gérer vos produits, vos stocks et vos commandes.',
      ],
    ],
    after: [
      {
        t: 'Vous gérez votre boutique',
        d: 'Produits, stocks et commandes : vous les gérez au quotidien, sans dépendre de nous.',
      },
      {
        t: 'Shopify s’occupe du technique',
        d: 'L’hébergement, la sécurité et les paiements sont gérés par Shopify.',
      },
      {
        t: 'Votre boutique évolue',
        d: 'Une nouvelle gamme, une application, une livraison à l’international : on l’ajoute quand vous en avez besoin.',
      },
    ],
    refs: [{ p: 'bocaux' }, { p: 'ocha' }, { p: 'osmose' }],
    faq: [
      {
        q: 'Combien coûte un site e-commerce ?',
        a: 'Chaque projet est chiffré sur devis après un premier échange, gratuit et sans engagement. Le prix dépend du nombre de produits, de la livraison et des applications à relier.',
      },
      {
        q: 'Pourquoi Shopify ?',
        a: 'Shopify gère pour vous l’hébergement, la sécurité et les paiements, et dispose d’un très large choix d’applications. C’est la base la plus sereine pour la plupart des marques.',
      },
      {
        q: 'Y a-t-il un abonnement Shopify ?',
        a: 'Oui. Shopify facture un abonnement mensuel, à payer directement, en plus de la création de la boutique. On vous aide à choisir la formule adaptée.',
      },
      {
        q: 'Pourrai-je gérer ma boutique seul ?',
        a: 'Oui. Produits, stocks et commandes se gèrent sans connaissances techniques, et on vous montre comment faire à la mise en ligne.',
      },
      {
        q: 'Pouvez-vous reprendre ma boutique existante ?',
        a: 'Oui, après un audit. On vous dit franchement s’il vaut mieux la faire évoluer ou repartir de zéro, et pourquoi.',
      },
      {
        q: 'Ma boutique sera-t-elle visible sur Google ?',
        a: 'Oui. Un SEO complet (technique, contenus, suivi des positions) et un GEO complet (réponses claires, données structurées, suivi dans les IA) sont inclus dans le devis de chacun de nos clients.',
      },
    ],
  },
  'site-concept': {
    what: {
      title: 'un site concept ?',
      lead: 'C’est un site qui se vit comme une expérience : des images fortes, des animations et une histoire qui se déroule quand on fait défiler la page. Une seule page suffit parfois.',
      points: [
        {
          t: 'À quoi ça sert',
          d: 'À faire forte impression et à donner envie d’en savoir plus, ou de s’inscrire.',
        },
        {
          t: 'Pour qui',
          d: 'Une marque qui se lance, un nouveau produit ou une campagne.',
        },
        {
          t: 'Un exemple',
          d: 'Une marque raconte son lancement, scène par scène, jusqu’au formulaire d’inscription.',
        },
      ],
    },
    steps: [
      ['On définit le message', 'Ce que vous voulez dire, à qui, et ce que le visiteur doit faire à la fin.'],
      ['On imagine l’histoire', 'On crée le style visuel et on dessine la page, scène par scène.'],
      [
        'On anime et on construit',
        'Vous voyez les animations sur une version de test, avant la mise en ligne.',
      ],
      ['On lance', 'Le site est publié et on fait les derniers ajustements.'],
    ],
    after: [
      {
        t: 'Votre histoire continue',
        d: 'La page de lancement peut évoluer vers un site plus complet, une boutique ou une liste d’attente.',
      },
      {
        t: 'Vous gardez la main',
        d: 'Vous modifiez vos textes et vos images vous-même, sans connaissances techniques.',
      },
      MAINT,
    ],
    refs: [{ p: 'swing' }, { p: 'dathy' }],
    faq: [
      {
        q: 'Combien coûte un site concept ?',
        a: 'Chaque projet est chiffré sur devis après un premier échange, gratuit et sans engagement. Le prix dépend du nombre de scènes, des animations et des illustrations à créer.',
      },
      {
        q: 'Combien de temps faut-il ?',
        a: 'Cela dépend du nombre de scènes et d’illustrations : le planning est fixé dans le devis.',
      },
      {
        q: 'Le site sera-t-il rapide ?',
        a: 'Oui. Images optimisées et animations légères : on vérifie la vitesse et la lisibilité avant chaque mise en ligne.',
      },
      {
        q: 'Sera-t-il visible sur Google ?',
        a: 'Oui. Un SEO complet (technique, contenus, suivi des positions) et un GEO complet (réponses claires, données structurées, suivi dans les IA) sont inclus dans le devis de chacun de nos clients.',
      },
      ALONE,
    ],
  },
  'developpement-applications': {
    what: {
      title: 'une application web ?',
      lead: 'C’est un outil sur mesure qui s’utilise dans un navigateur, sans rien installer. Il remplace vos tableurs, vos e-mails et vos ressaisies par un seul endroit pensé pour votre métier.',
      points: [
        {
          t: 'À quoi ça sert',
          d: 'À gagner du temps, à éviter les erreurs et à réunir clients, commandes et documents.',
        },
        {
          t: 'Pour qui',
          d: 'Les entreprises dont le travail ne rentre pas dans un logiciel standard, et les start-up qui lancent un produit.',
        },
        {
          t: 'Un exemple',
          d: 'Un client compose son stand en ligne, voit le résultat et reçoit son devis tout seul.',
        },
      ],
    },
    steps: [
      [
        'On comprend votre métier',
        'On regarde comment vous travaillez et on définit la première version. Le devis fixe le périmètre.',
      ],
      ['On dessine l’outil', 'Vos équipes testent une maquette cliquable, avant la moindre ligne de code.'],
      [
        'On le développe',
        'On vous livre l’outil par étapes, sur une version de test que vous pouvez essayer.',
      ],
      ['On le met en service', 'L’application est lancée et vos équipes commencent à s’en servir.'],
    ],
    after: [
      {
        t: 'L’outil grandit avec vous',
        d: 'Une nouvelle fonction se chiffre avant d’être réalisée. Le code est propre et documenté pour la suite.',
      },
      {
        t: 'On veille dessus',
        d: 'Mises à jour, sauvegardes, surveillance et petites évolutions.',
      },
      {
        t: 'Vous n’êtes pas prisonnier',
        d: 'On utilise des technologies répandues, pour que n’importe quelle équipe puisse reprendre votre application.',
      },
    ],
    refs: [{ p: 'standing' }, { p: 'admin' }, { p: 'entrepreneurs' }],
    faq: [
      {
        q: 'Le prix peut-il changer en cours de projet ?',
        a: 'Non, pas sans votre accord. Le devis fixe ce qui est prévu. Si vous voulez ajouter une fonction en route, on vous la chiffre avant de la réaliser.',
      },
      {
        q: 'Quelles technologies utilisez-vous ?',
        a: 'Des technologies répandues et bien documentées (principalement Next.js, React et Node.js), pour que votre application reste facile à faire évoluer.',
      },
      {
        q: 'Proposez-vous une maintenance ?',
        a: 'Oui : mises à jour, sauvegardes, surveillance et petites évolutions. Son contenu vous est proposé dans le devis.',
      },
      {
        q: 'Comment suis-je informé de l’avancement ?',
        a: 'On vous tient au courant à chaque étape : vous voyez où en est le projet et vous validez avant qu’on passe à la suite.',
      },
    ],
  },
  seo: {
    what: {
      title: 'le SEO ?',
      lead: 'C’est tout ce qu’on fait pour que votre site apparaisse sur Google quand quelqu’un cherche ce que vous proposez, sans payer de publicité. On l’appelle aussi le référencement naturel.',
      points: [
        {
          t: 'À quoi ça sert',
          d: 'À être trouvé au bon moment par des personnes qui ont déjà besoin de vous.',
        },
        {
          t: 'Pour qui',
          d: 'Toute entreprise dont les clients cherchent sur Google, y compris près de chez eux.',
        },
        {
          t: 'Un exemple',
          d: 'Quelqu’un tape « menuisier Nantes » et un menuisier nantais apparaît parmi les résultats, avec sa fiche et ses avis.',
        },
      ],
    },
    steps: [
      ['On fait le point', 'On regarde votre site, vos concurrents et ce que vos clients recherchent.'],
      ['On corrige', 'On répare d’abord ce qui bloque Google : vitesse, structure, pages mal comprises.'],
      ['On écrit', 'On crée les pages et les articles qui répondent aux questions de vos clients.'],
      ['On mesure', 'Chaque mois, vous voyez vos positions, vos visites et vos demandes.'],
    ],
    after: [
      {
        t: 'Les résultats arrivent par étapes',
        d: 'Les corrections agissent souvent en quelques semaines. Les contenus et la notoriété prennent généralement plusieurs mois.',
      },
      {
        t: 'Un rapport chaque mois',
        d: 'Un compte rendu lisible : où vous en êtes, et ce qu’on fait ensuite.',
      },
      {
        t: 'Pas de fausse promesse',
        d: 'Personne ne peut garantir la première place. On s’engage sur un travail mesurable.',
      },
    ],
    refs: [
      {
        p: 'chateau',
        note: 'Une structure, des contenus et des données pensés pour Google dès la refonte du site.',
      },
    ],
    faq: [
      {
        q: 'Combien de temps pour voir des résultats ?',
        a: 'Les corrections techniques agissent souvent en quelques semaines. Les contenus et la notoriété prennent généralement plusieurs mois. On vous montre l’évolution chaque mois.',
      },
      {
        q: 'Garantissez-vous la première position sur Google ?',
        a: 'Non, et personne ne peut le garantir honnêtement. On s’engage sur un travail mesurable : corrections, contenus et suivi mensuel.',
      },
      {
        q: 'Le SEO est-il inclus dans la création de site ?',
        a: 'Oui. Un SEO complet (technique, contenus, suivi des positions) et un GEO complet (réponses claires, données structurées, suivi dans les IA) sont inclus dans le devis de chacun de nos clients.',
      },
    ],
  },
  geo: {
    what: {
      title: 'le GEO ?',
      lead: 'Vos clients posent désormais leurs questions à ChatGPT ou à Perplexity. Le GEO, c’est tout ce qu’on fait pour que ces IA comprennent votre activité et citent votre nom dans leurs réponses.',
      points: [
        {
          t: 'À quoi ça sert',
          d: 'À faire partie de la réponse quand quelqu’un demande « quelle entreprise pour… ».',
        },
        {
          t: 'Pour qui',
          d: 'Les entreprises dont les clients comparent et se renseignent avant de choisir.',
        },
        {
          t: 'Un exemple',
          d: 'Un dirigeant demande à ChatGPT quelle agence choisir, et votre entreprise est citée, bien décrite.',
        },
      ],
    },
    steps: [
      [
        'On fait le point',
        'On interroge les IA sur votre activité et on note qui elles citent : vous, ou vos concurrents.',
      ],
      [
        'On organise votre site',
        'On range vos informations pour que les IA les lisent et les comprennent facilement.',
      ],
      ['On écrit', 'Des réponses courtes et factuelles, faciles à reprendre pour une IA.'],
      ['On suit', 'Chaque mois, on mesure si votre marque est citée, et où.'],
    ],
    after: [
      {
        t: 'Un suivi chaque mois',
        d: 'Vous voyez comment votre marque apparaît dans les réponses des IA.',
      },
      {
        t: 'Le même récit partout',
        d: 'Votre site, votre fiche Google, LinkedIn et les annuaires disent la même chose de vous.',
      },
      {
        t: 'Un bon complément au SEO',
        d: 'Les IA comme Google aiment les sites clairs : ce travail profite aux deux.',
      },
    ],
    refs: [
      {
        p: 'admin',
        note: 'Notre propre site applique la méthode : FAQ en clair et informations bien rangées pour les IA.',
      },
    ],
    faq: [
      {
        q: 'Qu’est-ce que le GEO, en une phrase ?',
        a: 'C’est ce qui aide les IA, comme ChatGPT, Perplexity ou les aperçus IA de Google, à comprendre votre activité et à citer votre marque.',
      },
      {
        q: 'Est-ce la même chose que le SEO ?',
        a: 'Non. Le SEO vise les résultats de Google, le GEO vise les réponses des IA. Les deux se complètent.',
      },
      {
        q: 'Le SEO est-il inclus dans la création de site ?',
        a: 'Oui. Un SEO complet (technique, contenus, suivi des positions) et un GEO complet (réponses claires, données structurées, suivi dans les IA) sont inclus dans le devis de chacun de nos clients.',
      },
    ],
  },
  'google-ads': {
    what: {
      title: 'Google Ads ?',
      lead: 'C’est la publicité sur Google. Vos annonces apparaissent quand quelqu’un cherche ce que vous proposez, et vous payez quand on clique dessus.',
      points: [
        {
          t: 'À quoi ça sert',
          d: 'À recevoir des demandes rapidement, sans attendre de remonter naturellement sur Google.',
        },
        {
          t: 'Pour qui',
          d: 'Les entreprises qui veulent plus de contacts ou de ventes, sur une zone ou un service précis.',
        },
        {
          t: 'Un exemple',
          d: 'Quelqu’un cherche un menuisier à Nantes, voit votre annonce, arrive sur votre page et demande un devis.',
        },
      ],
    },
    steps: [
      [
        'On fait le point',
        'On regarde votre compte, vos concurrents et le budget à prévoir, avant de lancer quoi que ce soit.',
      ],
      [
        'On prépare',
        'On rédige les annonces et on crée les pages sur lesquelles arrivent vos futurs clients.',
      ],
      ['On lance', 'Les campagnes démarrent et on les ajuste de près les premiers temps.'],
      ['On améliore', 'Chaque mois, on coupe ce qui ne rapporte pas et on renforce ce qui marche.'],
    ],
    after: [
      {
        t: 'Vous savez où va votre argent',
        d: 'Ce que vous avez dépensé, ce que ça a rapporté, ce qu’on change le mois suivant.',
      },
      {
        t: 'Chaque contact est compté',
        d: 'Appels, formulaires et achats sont suivis, de l’annonce jusqu’à la demande.',
      },
      {
        t: 'Tout est au même endroit',
        d: 'Rapports, échanges et prochaines actions sont partagés au même endroit.',
      },
    ],
    refs: [
      {
        p: 'admin',
        note: 'En option, vos chiffres et vos campagnes peuvent se retrouver dans Orion Admin, votre interface sur mesure.',
      },
    ],
    faq: [
      {
        q: 'Quel budget prévoir ?',
        a: 'Cela dépend de votre secteur, de votre zone et de la concurrence. On l’estime ensemble à partir du prix des clics et du nombre de contacts visés, avant de lancer quoi que ce soit.',
      },
      {
        q: 'Vous occupez-vous de tout ?',
        a: 'Oui : analyse du compte, création des campagnes, pages d’arrivée et pilotage chaque mois, avec un suivi des contacts obtenus.',
      },
    ],
  },
  automatisations: {
    what: {
      title: 'une automatisation ?',
      lead: 'C’est une tâche répétitive qui se fait toute seule, au lieu de prendre du temps à vos équipes : recopier une demande, relancer un devis, envoyer une pièce au comptable.',
      points: [
        {
          t: 'À quoi ça sert',
          d: 'À libérer du temps, à éviter les oublis et à ne plus ressaisir la même information.',
        },
        {
          t: 'Un exemple',
          d: 'Une demande arrive sur le site : elle se range dans votre fichier clients et la bonne personne est prévenue.',
        },
        {
          t: 'Comment ça se paie',
          d: 'Vous payez sur les heures gagnées. Le tarif se décide avec vous, après l’audit offert.',
        },
      ],
    },
    steps: [
      [
        'On vient vous voir',
        'Une demi-journée minimum dans vos locaux, offerte, pour observer comment vous travaillez.',
      ],
      ['On trie', 'Vous recevez la liste des tâches à automatiser, par ordre de priorité.'],
      ['On automatise', 'On relie les outils que vous utilisez déjà, et on mesure le temps gagné avec vous.'],
      ['On surveille', 'En cas d’erreur, une alerte part. On corrige et on ajuste au fil de l’eau.'],
    ],
    after: [
      {
        t: 'Vous gagnez du temps, chaque semaine',
        d: 'Vos équipes se concentrent sur ce qui doit rester entre leurs mains.',
      },
      {
        t: 'On a le même objectif que vous',
        d: 'Notre rémunération suit vos heures gagnées : on a tout intérêt à ce que ça tienne dans la durée.',
      },
      {
        t: 'On continue à chercher',
        d: 'Quand une nouvelle tâche répétitive apparaît, on regarde si elle peut être automatisée à son tour.',
      },
    ],
    refs: [
      {
        p: 'admin',
        note: 'Orion Admin automatise le suivi de nos propres projets : étapes, documents et messages au même endroit.',
      },
    ],
    faq: [
      {
        q: 'L’audit est-il payant ?',
        a: 'Non, il est offert. On passe au moins une demi-journée dans vos locaux pour observer comment vous travaillez.',
      },
      {
        q: 'Combien coûte une automatisation ?',
        a: 'Vous payez sur les heures gagnées : notre rémunération est calculée sur le temps que les automatisations font gagner à vos équipes. Le tarif est fixé avec vous après l’audit.',
      },
      {
        q: 'Faut-il changer nos logiciels ?',
        a: 'Pas forcément. On part de vos outils actuels et on les relie quand ils le permettent. Si l’un d’eux bloque, on vous le dit pendant l’audit.',
      },
      {
        q: 'Et si une automatisation tombe en panne ?',
        a: 'Chaque automatisation envoie une alerte en cas d’erreur. On la corrige et on ajuste au fil de l’eau.',
      },
      {
        q: 'Nos données sont-elles en sécurité ?',
        a: 'Pour les données sensibles, l’outil peut être installé sur vos propres serveurs : vos données restent chez vous.',
      },
    ],
  },
}

/** Les pages qui vendent un site : on y met en avant le référencement. */
const SHOP_PAGES: readonly ServiceId[] = [
  'site-internet',
  'site-vitrine',
  'site-dynamique',
  'site-concept',
  'e-commerce',
]
export const VISIBLE_PAGES = SHOP_PAGES

/** Et après : le contenu de la page, puis ce qu'on propose à tous les clients (sans renvoyer vers la page en cours). */
export const afterOf = (id: ServiceId): Point[] => [
  ...SERVICES[id].after,
  ...(SHOP_PAGES.includes(id) ? [ACCESS] : []),
  ...(id === 'seo' || id === 'geo' ? [ADS] : id === 'google-ads' ? [SEO_GEO] : [SEO_GEO, ADS]),
]

/** Les pages où le bloc Orion Admin a du sens : pas la boutique, qui se gère dans Shopify. */
export const SITE_PAGES: readonly ServiceId[] = [
  'site-internet',
  'site-vitrine',
  'site-dynamique',
  'site-concept',
]
