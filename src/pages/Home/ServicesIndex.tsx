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

const Row = ({ item, sub = false, mobile }: { item: Item; sub?: boolean; mobile: boolean }) => (
  <Link
    to={`/expertises/${item.id}`}
    className={sub ? 'si-r si-sub' : 'si-r'}
    data-exp={item.id}
    data-img={IMAGES[item.id]}
  >
    {item.icon && <img className="pxsvg picon" src={item.icon} alt="" width={24} height={24} />}
    <div>
      <b>{item.name}</b>
      <span>{item.d}</span>
    </div>
    {mobile ? (
      <span className="si-th">
        <img src={IMAGES[item.id]} alt="" loading="lazy" />
      </span>
    ) : (
      <i aria-hidden="true">→</i>
    )}
  </Link>
)

/** Tous les services d'un coup d'œil : tout est visible, rien à ouvrir. */
export function ServicesIndex({ mobile = false }: { mobile?: boolean }) {
  const lead = 'Tous nos métiers, portés par les mêmes personnes : ce qu’on dessine, on le construit.'
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
        {GROUPS.map((g) => (
          <div className="si-col" key={g.title}>
            <div className="si-rail" aria-hidden="true">
              {Array.from({ length: 34 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
            <h3 className="si-k">{g.title}</h3>
            {g.items.map((it) => (
              <div className="si-it" key={it.id}>
                <Row item={it} mobile={mobile} />
                {it.subs && (
                  <div className="si-subs">
                    {it.subs.map((s) => (
                      <Row item={s} sub mobile={mobile} key={s.id} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
        {!mobile && (
          <div className="si-pv" aria-hidden="true">
            <img alt="" />
          </div>
        )}
      </div>
    </section>
  )
}
