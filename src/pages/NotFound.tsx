import { Link } from 'react-router-dom'
import { Footer } from '../components/shared/Footer'
import { MobileFooter } from '../components/shared/MobileFooter'
import { MobileNav } from '../components/shared/MobileNav'
import { Nav } from '../components/shared/Nav'
import { MmVeilLive } from '../components/shared/MmVeilLive'

export function NotFoundDesktop() {
  return (
    <section className="artboard">
      <Nav />
      <MmVeilLive />
      <section className="hero">
        <h1 className="h1">
          Cette page n’existe pas<span className="serif">ou a changé d’orbite.</span>
        </h1>
        <div className="hero-row">
          <p className="lead">L’adresse est peut-être erronée, ou la page a été déplacée.</p>
          <div className="hero-cta">
            <div className="hero-btns">
              <Link to="/" className="btn btn-ink">
                Retour à l’accueil
              </Link>
              <Link to="/realisations" className="btn btn-ghost">
                Voir les réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer>
        <div className="cta">
          <h2>
            Un projet en tête ?<span className="serif">Construisons-le.</span>
          </h2>
          <div className="cta-r">
            <div className="cta-btns">
              <a className="btn btn-line">Analyser mon site</a>
              <a className="btn btn-acc">
                Démarrer un projet <span className="kbd">P</span>
              </a>
            </div>
            <span className="mail">
              ou écrivez à <b>hello@orion-studio.io</b>
            </span>
          </div>
        </div>
      </Footer>
    </section>
  )
}

export function NotFoundMobile() {
  return (
    <section className="artboard mo">
      <MobileNav />
      <section className="mo-hero">
        <h1 className="mo-h1">
          Cette page n’existe pas<span className="serif">ou a changé d’orbite.</span>
        </h1>
        <p className="mo-lead">L’adresse est peut-être erronée, ou la page a été déplacée.</p>
        <div className="mo-btns">
          <Link to="/" className="btn btn-ink mo-btn">
            Retour à l’accueil
          </Link>
          <Link to="/realisations" className="btn btn-line mo-btn">
            Voir les réalisations
          </Link>
        </div>
      </section>
      <MobileFooter />
    </section>
  )
}
