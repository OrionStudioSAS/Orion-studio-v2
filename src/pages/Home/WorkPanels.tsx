import { Link } from 'react-router-dom'

const WORK = [
  {
    name: 'Château l’Arc Golf Club',
    tag: 'Golf · Site + back-office · 2026',
    desc: 'Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et événements.',
    to: '/realisations/chateau-larc',
    bg: '/images/55a80d70f3d20a.png',
    shot: '/images/661531aedb86a4.jpg',
    bar: 'chateaularcgolfclub.com',
  },
  {
    name: 'Stand-ING',
    tag: 'Configurateur 3D · 2026',
    desc: 'Un configurateur de stands en ligne : le client compose, visualise et reçoit son devis.',
    to: '/realisations/stand-ing',
    bg: '/images/2c63fe08cd774a.png',
    shot: '/images/cfe60288d854b0.png',
    bar: 'Stand-ING — Configurateur de stand 3D',
  },
  {
    name: 'Les Bocaux du Vexin',
    tag: 'E-commerce · Shopify · 2026',
    desc: 'Une boutique Shopify simple à tenir au quotidien pour une conserverie locale.',
    to: '/realisations/les-bocaux-du-vexin',
    bg: '/images/07246a74f6555c.png',
    shot: '/images/4decbda594bb3c.jpg',
    bar: 'lesbocauxduvexin.fr',
  },
  {
    name: 'Orion Admin',
    tag: 'Espace client · inclus dans chaque projet',
    desc: 'Notre outil : suivi du projet, documents, messagerie et gestion du site au même endroit.',
    to: '/realisations/orion-admin',
    bg: '/images/4b8094654fed91.png',
    shot: '/images/94f1f7140db692.jpg',
    bar: 'Orion Admin — Château l’Arc Golf Club',
  },
]

/** Quatre projets en panneaux : celui qui est ouvert suit le défilement, ou le survol. */
export function WorkPanels({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? 'rx rx-m' : 'rx'}>
      {WORK.map((w, i) => (
        <article key={w.to} className={i === 0 ? 'rx-p on' : 'rx-p'} data-to={w.to} data-cur="Voir le projet">
          <img className="rx-bg" src={w.bg} alt="" loading="lazy" />
          <span className="rx-v" aria-hidden="true">
            <i>0{i + 1}</i>
            <b>{w.name}</b>
          </span>
          <div className="rx-open">
            <div className="win rx-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">{w.bar}</span>
                <span className="win-sp" />
              </div>
              <img className="rx-shot" src={w.shot} alt={`Aperçu : ${w.name}`} loading="lazy" />
            </div>
            <div className="rx-cap">
              <div>
                <h3>
                  <Link to={w.to}>{w.name}</Link>
                </h3>
                <span>{w.tag}</span>
              </div>
              <p>{w.desc}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
