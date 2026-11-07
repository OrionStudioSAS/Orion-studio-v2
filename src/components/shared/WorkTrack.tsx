import { Link } from 'react-router-dom'

export type WorkItem = {
  name: string
  tag: string
  desc: string
  to: string
  pixel: string
  real: string
}

const WORK: readonly WorkItem[] = [
  {
    name: 'Château l’Arc Golf Club',
    tag: 'Golf · Site + back-office · 2026',
    desc: 'Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et événements.',
    to: '/realisations/chateau-larc',
    pixel: '/images/55a80d70f3d20a.png',
    real: '/images/661531aedb86a4.jpg',
  },
  {
    name: 'Stand-ING',
    tag: 'Configurateur 3D · 2026',
    desc: 'Un configurateur de stands en ligne : le client compose, visualise et reçoit son devis.',
    to: '/realisations/stand-ing',
    pixel: '/images/2c63fe08cd774a.png',
    real: '/images/cfe60288d854b0.png',
  },
  {
    name: 'Les Bocaux du Vexin',
    tag: 'E-commerce · Shopify · 2026',
    desc: 'Une boutique Shopify simple à tenir au quotidien pour une conserverie locale.',
    to: '/realisations/les-bocaux-du-vexin',
    pixel: '/images/07246a74f6555c.png',
    real: '/images/4decbda594bb3c.jpg',
  },
  {
    name: 'Orion Admin',
    tag: 'Interface d’administration · en option',
    desc: 'L’interface faite sur mesure pour piloter son site : chiffres, contenus, langues et tout ce que l’activité demande.',
    to: '/orion-admin',
    pixel: '/images/4b8094654fed91.png',
    real: '/images/94f1f7140db692.jpg',
  },
]

/** La section reste à l'écran : le défilement fait glisser les projets, qui passent du pixel au vrai site au centre. */
export function WorkTrack({
  mobile = false,
  items = WORK,
  title = 'Réalisations',
  serif = 'récentes.',
  lead = 'Sites sur-mesure, boutiques et outils métiers, conçus et développés de bout en bout par le studio.',
}: {
  mobile?: boolean
  items?: readonly WorkItem[]
  title?: string
  serif?: string
  lead?: string
}) {
  const cells = Array.from({ length: mobile ? 28 : 64 })
  return (
    <section className={mobile ? 'hw hw-m' : 'hw'} id={mobile ? 'm-work' : 'd-work'}>
      <div className="hw-stage">
        <div className="hw-head">
          {mobile ? (
            <h2 className="mo-h2">
              {title}
              <span className="serif">{serif}</span>
            </h2>
          ) : (
            <h2 className="h2">
              {title} <span className="serif">{serif}</span>
            </h2>
          )}
          {!mobile && <p className="lead">{lead}</p>}
        </div>
        <div className="hw-view">
          <div className="hw-track">
            {items.map((w) => (
              <article key={w.to} className="hw-c" data-to={w.to} data-cur="Voir le projet">
                <div className="wk-m">
                  <img className="wk-a" src={w.pixel} alt="" />
                  <img className="wk-b" src={w.real} alt={`Aperçu : ${w.name}`} />
                </div>
                <div className="hw-cap">
                  <div>
                    <h3>
                      <Link to={w.to}>{w.name}</Link>
                    </h3>
                    <span>{w.tag}</span>
                  </div>
                  <p>{w.desc}</p>
                </div>
              </article>
            ))}
            <Link to="/realisations" className="hw-cta">
              <span>11 projets</span>
              <b>
                Toutes les
                <br />
                <em>réalisations</em>
              </b>
              <i aria-hidden="true">→</i>
            </Link>
          </div>
        </div>
        <div className="hw-bar" aria-hidden="true">
          {cells.map((_, i) => (
            <span key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
