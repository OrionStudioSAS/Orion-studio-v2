import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoFt2 } from '../../components/shared/MoFt2'
import { AdminContent } from './content'

function MoHero() {
  return (
    <section className="mo-hero">
      <h1 className="mo-h1">
        Orion Admin<span className="serif">L’interface pour piloter votre site.</span>
      </h1>
      <p className="mo-lead">
        Vos chiffres, vos textes, vos images, vos traductions : tout au même endroit, sur une interface faite
        sur mesure pour votre site.
      </p>
      <div className="mo-btns">
        <a className="btn btn-ink mo-btn">Démarrer un projet</a>
        <Link to="/realisations/chateau-larc" className="btn btn-ghost mo-btn">
          Voir le projet Château l’Arc
        </Link>
      </div>
    </section>
  )
}

function McHero() {
  return (
    <div className="mc-hero">
      <img
        className="mc-hero-bg"
        src="/images/4b8094654fed91.png"
        alt=""
        style={{ left: '0', width: '390px', height: '380px', objectFit: 'cover' }}
      />
      <div className="win win-shot mc-win mc-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">Orion Admin — Château l’Arc Golf Club</span>
          <span className="win-sp" />
        </div>
        <div className="win-body">
          <img className="shot" src="/images/94f1f7140db692.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export function Mobile() {
  return (
    <section className="artboard mo pp-page">
      <MobileNav />
      <MoHero />
      <McHero />
      <AdminContent mobile />
      <MoFt2 />
    </section>
  )
}
