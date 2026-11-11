import { Link } from 'react-router-dom'

// Chaque point montre l'écran correspondant d'Orion Admin au Château l'Arc.
const POINTS = [
  {
    t: 'Vos chiffres : visites, provenance, clics',
    img: '/images/94f1f7140db692.jpg',
    alt: 'le tableau de bord',
  },
  {
    t: 'Vos textes, images et traductions',
    img: '/images/dd157dcd71774f.jpg',
    alt: 'la modification d’un texte en cliquant dessus',
  },
  {
    t: 'Des écrans faits pour votre métier',
    img: '/images/640db08a1fe9fc.jpg',
    alt: 'l’état du parcours et le bandeau d’information',
  },
]

/** Orion Admin en une carte : une phrase, trois points qui changent l'écran réel. Présenté comme une option. */
export function AdminBlock({ mobile = false }: { mobile?: boolean }) {
  return (
    <section className={mobile ? 'adb adb-m' : 'adb'}>
      <div className="adb-c">
        <div className="adb-l">
          <span className="adb-tag">En option</span>
          {mobile ? (
            <h2 className="mo-h2">
              Orion Admin<span className="serif">Votre site, vous le pilotez.</span>
            </h2>
          ) : (
            <h2 className="h2">
              Orion Admin
              <br />
              <span className="serif">Votre site, vous le pilotez.</span>
            </h2>
          )}
          <p className="adb-lead">
            Une interface d’administration faite sur mesure pour votre site. Vous voyez tout, vous changez
            tout, sans nous appeler.
          </p>
          <div className="adb-pts" role="tablist" aria-label="Ce que permet Orion Admin">
            {POINTS.map((p, i) => (
              <button
                type="button"
                role="tab"
                aria-selected={i === 0}
                className={i === 0 ? 'adb-pt on' : 'adb-pt'}
                key={p.t}
              >
                <em>{String(i + 1).padStart(2, '0')}</em>
                <span>{p.t}</span>
                <i aria-hidden="true">→</i>
                <span className="adb-pg" aria-hidden="true" />
              </button>
            ))}
          </div>
          <Link to="/orion-admin" className={mobile ? 'btn btn-ink mo-btn adb-go' : 'btn btn-ink adb-go'}>
            Découvrir Orion Admin
          </Link>
        </div>
        <div className="adb-r">
          {POINTS.map((p, i) => (
            <img
              className={i === 0 ? 'on' : undefined}
              src={p.img}
              alt={`Orion Admin au Château l’Arc : ${p.alt}`}
              loading="lazy"
              key={p.t}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
