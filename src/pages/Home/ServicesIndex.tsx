import { Link } from 'react-router-dom'

type Item = { id: string; name: string; d: string; icon?: string; subs?: Item[] }

const GROUPS: { title: string; items: Item[] }[] = [
  {
    title: 'Web & développement',
    items: [
      {
        id: 'site-internet',
        name: 'Site internet',
        d: 'Le site qui travaille pour votre entreprise, ouvert jour et nuit.',
        icon: '/px/picon-89906f55.svg',
        subs: [
          {
            id: 'site-vitrine',
            name: 'Site vitrine',
            d: 'Présente votre activité et fait venir des demandes.',
          },
          {
            id: 'site-dynamique',
            name: 'Site dynamique',
            d: 'Un blog, des réservations ou un espace compte, que votre équipe fait vivre.',
          },
          {
            id: 'site-concept',
            name: 'Site concept',
            d: 'Une expérience forte, pour une marque qu’on n’oublie pas.',
          },
        ],
      },
      {
        id: 'e-commerce',
        name: 'E-commerce',
        d: 'Votre boutique en ligne sur Shopify, simple à gérer au quotidien.',
        icon: '/px/picon-808b4de1.svg',
      },
      {
        id: 'developpement-applications',
        name: 'Développement d’applications',
        d: 'Des outils sur mesure, taillés pour votre métier.',
        icon: '/px/picon-8236c841.svg',
      },
      {
        id: 'saas',
        name: 'SaaS',
        d: 'Votre logiciel en ligne, de la première version au lancement.',
        icon: '/px/picon-saas.svg',
      },
      {
        id: 'automatisations',
        name: 'Automatisations',
        d: 'Vos tâches répétitives se font toutes seules, et vous payez sur les heures gagnées.',
        icon: '/px/picon-163f1643.svg',
      },
    ],
  },
  {
    title: 'Marketing digital',
    items: [
      {
        id: 'seo',
        name: 'SEO',
        d: 'Être trouvé sur Google, au moment où on vous cherche.',
        icon: '/px/picon-43178318.svg',
      },
      {
        id: 'geo',
        name: 'GEO',
        d: 'Être cité par ChatGPT, Perplexity et les réponses IA de Google.',
        icon: '/px/picon-84c912e7.svg',
      },
      {
        id: 'sea',
        name: 'SEA',
        d: 'Des annonces qui rapportent des contacts, pas seulement des clics.',
        icon: '/px/picon-011bf99b.svg',
      },
    ],
  },
]

// Le paragraphe d'introduction de chaque page service, repris dans l'écran.
const LEADS: Record<string, string> = {
  'site-internet':
    'Vitrine, dynamique, concept ou boutique : on conçoit, on code et on met en ligne le site qui correspond à ce que vous devez faire en ligne, rapide et simple à mettre à jour.',
  'site-vitrine':
    'Vos services, vos réalisations et vos avis présentés clairement, un formulaire qui pose les bonnes questions, et un site que vous mettez à jour vous-même.',
  'site-dynamique':
    'Blog, réservation, espace client ou espace membres : un site relié à un back-office, où vos contenus et vos demandes se gèrent sans nous appeler.',
  'site-concept':
    'Lancement, nouvelle marque, campagne : un site pensé comme une expérience, avec une direction artistique forte et un récit qui se déroule au scroll.',
  'e-commerce':
    'Fiches produits claires, panier fluide, paiement sans friction : une boutique Shopify sur mesure que vous gérez vous-même.',
  'developpement-applications':
    'Espaces clients, outils internes, back-offices : des applications web robustes, agréables à utiliser et faciles à faire évoluer.',
  saas: 'Comptes utilisateurs, abonnements, tableaux de bord : votre logiciel en ligne, prêt à accueillir vos premiers clients et à grandir avec eux.',
  automatisations:
    'Une demi-journée dans vos locaux, offerte, pour repérer ce qui peut tourner tout seul. Ensuite, on est payés sur les heures que vos équipes gagnent.',
  seo: 'Audit, SEO technique, contenus et référencement local : votre site remonte sur les recherches qui amènent de vrais clients, pas seulement du trafic.',
  geo: 'Vos clients posent leurs questions aux IA. On structure votre site et vos contenus pour que votre marque apparaisse, et soit citée, dans leurs réponses.',
  'sea':
    'Search, Performance Max, campagnes locales : des campagnes construites et pilotées pour générer des demandes, avec des pages qui convertissent.',
}

// Les sites et applications : une vraie réalisation du studio, dans une fenêtre de navigateur.
const SHOTS: Record<string, { src: string; name: string }> = {
  'site-internet': { src: '/images/a4c19bfe3dd683.jpg', name: 'Swing Call' },
  'site-vitrine': { src: '/images/17eafb1d2deb75.jpg', name: 'Housses Taxi' },
  'site-dynamique': { src: '/images/f7f70ac67d2f8d.jpg', name: 'Entrepreneurs du Vexin' },
  'site-concept': { src: '/images/661531aedb86a4.jpg', name: 'Château l’Arc Golf Club' },
  'e-commerce': { src: '/images/4decbda594bb3c.jpg', name: 'Les Bocaux du Vexin' },
  'developpement-applications': { src: '/images/94f1f7140db692.jpg', name: 'Orion Admin · Château l’Arc' },
  saas: { src: '/images/cfe60288d854b0.png', name: 'Stand-ING · configurateur 3D' },
}

const Search = ({ q }: { q: string }) => (
  <div className="sv-q">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="5" cy="5" r="3.8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 8l3 3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
    {q}
  </div>
)
const Ph = () => (
  <li className="sv-ph">
    <i />
    <i />
    <i />
  </li>
)

/** Le visuel du service : une réalisation, ou une petite scène qui montre le métier. */
const Visual = ({ id }: { id: string }) => {
  const s = SHOTS[id]
  if (s)
    return (
      <div className="sv sv-web">
        <div className="sv-bar">
          <i />
          <i />
          <i />
          <em>{s.name}</em>
        </div>
        <img src={s.src} alt="" loading="lazy" decoding="async" />
      </div>
    )
  if (id === 'seo')
    return (
      <div className="sv sv-serp">
        <Search q="création site internet paris" />
        <ul>
          <li className="sv-me">
            <small>orion-studio.io</small>
            <b>Orion Studio · Agence de développement web à Paris</b>
            <span>Sites sur mesure, rapides et bien référencés.</span>
          </li>
          <Ph />
          <Ph />
        </ul>
      </div>
    )
  if (id === 'geo')
    return (
      <div className="sv sv-ai">
        <p className="sv-ask">Quelle agence pour créer le site de mon entreprise à Paris ?</p>
        <div className="sv-ans">
          <p>
            Plusieurs studios sont recommandés, dont <b>Orion Studio</b>, qui conçoit et développe des sites
            sur mesure, du croquis à la mise en ligne.
          </p>
          <span className="sv-src">orion-studio.io</span>
        </div>
      </div>
    )
  if (id === 'sea')
    return (
      <div className="sv sv-serp sv-ads">
        <Search q="agence site internet" />
        <ul>
          <li className="sv-me">
            <small>
              <em>Sponsorisé</em> orion-studio.io
            </small>
            <b>Votre site sur mesure · Devis gratuit</b>
            <span>Un site rapide qui fait venir des demandes.</span>
            <span className="sv-links">
              <em>Demander un devis</em>
              <em>Nos réalisations</em>
            </span>
          </li>
          <Ph />
        </ul>
        <div className="sv-toast">Nouvelle demande de devis</div>
      </div>
    )
  // automatisations
  return (
    <div className="sv sv-flow">
      <small>Scénario · nouvelle demande</small>
      <ol>
        {['Demande reçue sur le site', 'Fiche client créée', 'Devis préparé', 'Relance programmée'].map(
          (t) => (
            <li key={t}>
              <i aria-hidden="true">✓</i>
              {t}
            </li>
          ),
        )}
      </ol>
    </div>
  )
}

type Flat = Item & { n: number; group: string; sub: boolean }
// Les dix services dans l'ordre de lecture, numérotés une seule fois.
const FLAT: Flat[] = []
GROUPS.forEach((g) =>
  g.items.forEach((it) => {
    FLAT.push({ ...it, n: FLAT.length + 1, group: g.title, sub: false })
    it.subs?.forEach((s) => FLAT.push({ ...s, n: FLAT.length + 1, group: g.title, sub: true }))
  }),
)
const pad = (n: number) => String(n).padStart(2, '0')

// Dans la liste, un service se choisit sans quitter la page : il s'affiche dans l'écran (ou la carte).
// Le lien reste un vrai lien, pour Google et si le script ne se charge pas.
const Row = ({ item }: { item: Flat }) => (
  <Link
    to={`/expertises/${item.id}`}
    className={item.sub ? 'si-r si-sub' : 'si-r'}
    data-lead={LEADS[item.id]}
  >
    <em className="si-n">{pad(item.n)}</em>
    <div>
      <b>
        {item.icon && <img className="pxsvg picon" src={item.icon} alt="" width={20} height={20} />}
        {item.name}
      </b>
      <span>{item.d}</span>
    </div>
    <i aria-hidden="true">→</i>
  </Link>
)

const List = () => (
  <div className="si-list">
    <span className="si-mk" aria-hidden="true" />
    {GROUPS.map((g) => (
      <div className="si-col" key={g.title}>
        <h3 className="si-k">{g.title}</h3>
        {FLAT.filter((f) => f.group === g.title).map((f) => (
          <Row item={f} key={f.id} />
        ))}
      </div>
    ))}
  </div>
)

const Bar = () => (
  <div className="si-bar" aria-hidden="true">
    {FLAT.map((f, i) => (
      <span className={i === 0 ? 'cur' : ''} key={f.id} />
    ))}
  </div>
)

/**
 * Tous les services d'un coup d'œil. Sur ordinateur, l'écran collant montre le service en cours
 * et mène à sa page. Sur mobile, les services défilent en cartes au-dessus de la liste.
 */
export function ServicesIndex({ mobile = false }: { mobile?: boolean }) {
  const lead = 'Tous nos métiers, portés par les mêmes personnes : ce qu’on dessine, on le construit.'
  const first = FLAT[0]
  if (mobile)
    return (
      <section className="mo-sec si si-m">
        <div className="mo-shead">
          <h2 className="mo-h2">
            Du croquis au code,<span className="serif">sans relais.</span>
          </h2>
          <p className="mo-lead">{lead}</p>
        </div>
        <div className="si-car" aria-label="Nos services">
          {FLAT.map((f, i) => (
            <Link
              to={`/expertises/${f.id}`}
              className={i === 0 ? 'si-card go' : 'si-card'}
              data-exp={f.id}
              key={f.id}
            >
              <span className="si-cv">
                <Visual id={f.id} />
              </span>
              <span className="si-top">
                <small className="si-grp">{f.group}</small>
                <small className="si-ct">
                  {pad(f.n)} / {pad(FLAT.length)}
                </small>
              </span>
              <strong className="si-nm">{f.name}</strong>
              <span className="si-ld">{LEADS[f.id]}</span>
              <span className="si-go">
                Voir le service <i>→</i>
              </span>
            </Link>
          ))}
        </div>
        <Bar />
        <List />
      </section>
    )
  return (
    <section className="sec si" style={{ padding: 0 }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Du croquis au code,
          <br />
          <span className="serif">sans relais.</span>
        </h2>
        <p className="lead">{lead}</p>
      </div>
      <div className="si-g">
        <div className="si-st" data-cur="Voir le service">
          <Bar />
          <div className="si-scr" aria-hidden="true">
            {FLAT.map((f, i) => (
              <div className={i === 0 ? 'si-shot on go' : 'si-shot'} key={f.id}>
                <Visual id={f.id} />
              </div>
            ))}
          </div>
          <div className="si-cap">
            <div className="si-top" aria-hidden="true">
              <small className="si-grp">{first.group}</small>
              <small className="si-ct">
                <span className="si-cn">{pad(1)}</span> / {pad(FLAT.length)}
              </small>
            </div>
            <strong className="si-nm" aria-hidden="true">
              <span>{first.name}</span>
            </strong>
            <p className="si-ld" aria-hidden="true">
              <span>{LEADS[first.id]}</span>
            </p>
            <div className="si-gos">
              {FLAT.map((f, i) => (
                <Link
                  to={`/expertises/${f.id}`}
                  className={i === 0 ? 'si-go on' : 'si-go'}
                  data-exp={f.id}
                  tabIndex={i === 0 ? 0 : -1}
                  aria-label={`Voir le service ${f.name}`}
                  key={f.id}
                >
                  Voir le service <i>→</i>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <List />
      </div>
    </section>
  )
}
