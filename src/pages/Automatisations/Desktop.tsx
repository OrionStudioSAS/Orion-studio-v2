import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'
import { ServiceSections } from '../../components/services/ServiceSections'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/">
          Expertises / <b>Automatisations</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Automatisez vos tâches répétitives,</span>
        <span className="serif">payez sur les heures gagnées.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          On commence par une demi-journée dans vos locaux, offerte, pour observer vos process et repérer ce
          qui peut tourner tout seul. Ensuite, notre rémunération est calculée sur les heures que ces
          automatisations font gagner à vos équipes.
        </p>
        <div className="hero-cta">
          <div className="hero-btns">
            <a className="btn btn-ink" data-au="audit">
              Demander un audit sur place
            </a>
            <a className="btn btn-ghost" data-au="pay">
              Comment on facture
            </a>
          </div>
          <div className="proof">
            <svg
              className="pxstar"
              width="13.5"
              height="12"
              viewBox="0 0 13.5 12"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
              <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
              <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
              <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
              <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
              <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
              <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
              <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
              <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            </svg>
            <span>5/5 sur Google · Paris · FR / EN</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media ax-media">
      <div className="hm-layer">
        <img src="/images/71429f3644f5e0.png" alt="Moulin à eau en pixel art, qui tourne tout seul" />
      </div>
      <div className="ax-notes">
        <div className="ax-nh">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <b>Notes de visite</b>
          <span>Audit sur place</span>
        </div>
        <div className="ax-nb">
          <div className="ax-nr" data-auto="1">
            <span className="ax-np">Accueil</span>
            <span className="ax-nt">Les demandes du site recopiées dans le CRM</span>
            <span className="ax-nv">
              <i />
              Automatisable
            </span>
          </div>
          <div className="ax-nr" data-auto="1">
            <span className="ax-np">Commercial</span>
            <span className="ax-nt">Devis refaits à la main depuis un modèle Word</span>
            <span className="ax-nv">
              <i />
              Automatisable
            </span>
          </div>
          <div className="ax-nr" data-auto="1">
            <span className="ax-np">Administratif</span>
            <span className="ax-nt">Relances des factures impayées, une par une</span>
            <span className="ax-nv">
              <i />
              Automatisable
            </span>
          </div>
          <div className="ax-nr" data-auto="0">
            <span className="ax-np">Atelier</span>
            <span className="ax-nt">Conseiller le client au téléphone</span>
            <span className="ax-nv">
              <i />
              Reste humain
            </span>
          </div>
          <div className="ax-nr" data-auto="1">
            <span className="ax-np">Direction</span>
            <span className="ax-nt">Tableau de suivi mis à jour chaque lundi</span>
            <span className="ax-nv">
              <i />
              Automatisable
            </span>
          </div>
        </div>
        <div className="ax-nf">
          <span className="ax-pen" />
          Exemple de notes prises pendant un audit
        </div>
      </div>
      <div className="capt">
        Le moulin tourne tout seul, 11 h — <b>Orion</b> veille
      </div>
    </div>
  )
}

function GCta() {
  return (
    <div className="g-cta">
      <Footer>
        <div className="cta">
          <h2>
            Combien d’heures perdez-vous
            <span className="serif">chaque semaine ? On vient les compter.</span>
          </h2>
          <div className="cta-r">
            <div className="cta-btns">
              <Link to="/realisations" className="btn btn-line">
                Voir nos réalisations
              </Link>
              <a className="btn btn-acc" data-au="audit">
                Demander un audit <span className="kbd">↵</span>
              </a>
            </div>
            <span className="mail">
              ou écrivez à <b>hello@orion-studio.io</b>
            </span>
          </div>
        </div>
      </Footer>
    </div>
  )
}

export function Desktop() {
  return (
    <section className="artboard g-page s-page ax-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <ServiceSections id="automatisations" anchor="ax-pay" />
      <GCta />
    </section>
  )
}
