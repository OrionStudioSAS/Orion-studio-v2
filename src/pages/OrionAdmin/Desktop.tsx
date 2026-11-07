import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { GCta } from '../../components/shared/GCta'
import { AdminContent } from './content'

function Hero() {
  return (
    <section className="hero">
      <h1 className="s-h1">
        <span className="s-a">Orion Admin</span>
        <span className="serif">L’interface pour piloter votre site.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Vos chiffres, vos textes, vos images, vos traductions : tout au même endroit, sur une interface
          faite sur mesure pour votre site. Une option à ajouter à votre projet.
        </p>
        <div className="hero-cta">
          <div className="hero-btns">
            <a className="btn btn-ink">Démarrer un projet</a>
            <Link to="/realisations/chateau-larc" className="btn btn-ghost">
              Voir le projet Château l’Arc
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media cs-hero">
      <img src="/images/4b8094654fed91.png" alt="" />
      <div className="win cs-win cs-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">Orion Admin — Château l’Arc Golf Club</span>
          <span className="win-sp" />
        </div>
        <img className="shot" src="/images/94f1f7140db692.jpg" alt="Le tableau de bord du Château l’Arc" />
      </div>
      <div className="capt">Orion Admin, la nuit</div>
    </div>
  )
}

export function Desktop() {
  return (
    <section className="artboard g-page cs-page pp-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <AdminContent />
      <GCta />
    </section>
  )
}
