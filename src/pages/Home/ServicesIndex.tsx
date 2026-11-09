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
        id: 'google-ads',
        name: 'Google Ads',
        d: 'Des annonces qui rapportent des contacts, pas seulement des clics.',
        icon: '/px/picon-011bf99b.svg',
      },
    ],
  },
]

// L'illustration de chaque page service, montrée au survol (ordinateur) ou en vignette (mobile).
const IMAGES: Record<string, string> = {
  'site-internet': '/images/823b3a1053ce98.png',
  'site-vitrine': '/images/0c766d5f03172d.png',
  'site-dynamique': '/images/292b03574ca10b.png',
  'site-concept': '/images/125257b1101030.png',
  'e-commerce': '/images/20caaf15c9d1a8.png',
  'developpement-applications': '/images/0b3671704f979c.png',
  automatisations: '/images/71429f3644f5e0.png',
  seo: '/images/c4883e4acec6de.png',
  geo: '/images/f218e6edb91810.png',
  'google-ads': '/images/17166791ed4c03.png',
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

const Row = ({ item }: { item: Flat }) => (
  <Link
    to={`/expertises/${item.id}`}
    className={item.sub ? 'si-r si-sub' : 'si-r'}
    data-exp={item.id}
    data-i={item.n - 1}
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

/**
 * Tous les services d'un coup d'œil : la liste reste lisible en entier,
 * et l'écran collant montre l'univers du service qu'on est en train de lire.
 */
export function ServicesIndex({ mobile = false }: { mobile?: boolean }) {
  const lead = 'Tous nos métiers, portés par les mêmes personnes : ce qu’on dessine, on le construit.'
  const first = FLAT[0]
  return (
    <section className={mobile ? 'mo-sec si si-m' : 'sec si'} style={mobile ? undefined : { padding: 0 }}>
      {mobile ? (
        <div className="mo-shead">
          <h2 className="mo-h2">
            Du croquis au code,<span className="serif">sans relais.</span>
          </h2>
          <p className="mo-lead">{lead}</p>
        </div>
      ) : (
        <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
          <h2 className="h2">
            Du croquis au code,
            <br />
            <span className="serif">sans relais.</span>
          </h2>
          <p className="lead">{lead}</p>
        </div>
      )}
      <div className="si-g">
        <div className="si-st" aria-hidden="true">
          <div className="si-scr">
            {FLAT.map((f, i) => (
              <img
                className={i === 0 ? 'si-shot on' : 'si-shot'}
                src={IMAGES[f.id]}
                alt=""
                loading={i < 2 ? 'eager' : 'lazy'}
                key={f.id}
              />
            ))}
          </div>
          <div className="si-bar">
            {FLAT.map((f, i) => (
              <span className={i === 0 ? 'on' : ''} key={f.id} />
            ))}
          </div>
          <div className="si-cap">
            <small className="si-grp">{first.group}</small>
            <strong className="si-nm">
              <span>{first.name}</span>
            </strong>
            <small className="si-ct">
              <span className="si-cn">{pad(1)}</span> / {pad(FLAT.length)}
            </small>
          </div>
          <span className="si-go">
            Voir le service <i>→</i>
          </span>
        </div>
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
      </div>
    </section>
  )
}
