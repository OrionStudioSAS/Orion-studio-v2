import { Link } from 'react-router-dom'

const TABS = [
  {
    t: 'Vos chiffres',
    d: 'Les visites du site, d’où viennent vos visiteurs, les clics sur vos boutons.',
    img: '/images/94f1f7140db692.jpg',
  },
  {
    t: 'Votre contenu',
    d: 'Vous changez vos textes et vos images, et vous gérez vos traductions, sans nous appeler.',
    img: '/images/dd157dcd71774f.jpg',
  },
  {
    t: 'Votre métier',
    d: 'Des écrans faits pour votre activité. Au Château l’Arc : état du parcours, tarifs, compétitions.',
    img: '/images/640db08a1fe9fc.jpg',
  },
]

/** Orion Admin en une section : les onglets changent l'écran au survol ou au toucher. */
export function AdminBlock({ mobile = false }: { mobile?: boolean }) {
  const lead =
    'En option : l’interface d’administration de votre site, faite sur mesure. Vous voyez tout, vous changez tout.'
  return (
    <section className={mobile ? 'adb adb-m' : 'adb'}>
      <div className="adb-l">
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
        <p className="adb-lead">{lead}</p>
        <div className="adb-tabs" role="tablist" aria-label="Ce que permet Orion Admin">
          {TABS.map((x, i) => (
            <button
              type="button"
              role="tab"
              aria-selected={i === 0}
              className={i === 0 ? 'adb-t on' : 'adb-t'}
              key={x.t}
            >
              <b>{x.t}</b>
              <span>{x.d}</span>
            </button>
          ))}
        </div>
        <Link to="/orion-admin" className={mobile ? 'btn btn-ink mo-btn adb-go' : 'btn btn-ink adb-go'}>
          Découvrir Orion Admin
        </Link>
      </div>
      <div className="adb-r">
        <div className="win adb-win">
          <div className="win-bar">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
            <span className="win-title">Orion Admin — Château l’Arc</span>
            <span className="win-sp" />
          </div>
          <div className="adb-body">
            {TABS.map((x, i) => (
              <img
                key={x.t}
                src={x.img}
                alt={`Orion Admin au Château l’Arc : ${x.t.toLowerCase()}`}
                hidden={i > 0}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
