import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { ServiceSections } from '../../components/services/ServiceSections'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Expertises / <b>Automatisations</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Automatisez vos tâches répétitives,
        <span className="serif">payez sur les heures gagnées.</span>
      </h1>
      <p className="mo-lead">
        On commence par une demi-journée dans vos locaux, offerte, pour observer vos process et repérer ce qui
        peut tourner tout seul. Ensuite, notre rémunération est calculée sur les heures que ces
        automatisations font gagner à vos équipes.
      </p>
      <div className="mo-btns">
        <a className="btn btn-ink mo-btn" data-au="audit">
          Demander un audit sur place
        </a>
        <a className="btn btn-ghost mo-btn" data-au="pay">
          Comment on facture
        </a>
      </div>
    </section>
  )
}

function MoMedia() {
  return (
    <div className="mo-media ax-mmedia">
      <div className="hm-layer">
        <img
          className="mo-media-bg"
          src="/images/71429f3644f5e0.png"
          alt="Moulin à eau en pixel art, qui tourne tout seul"
        />
      </div>
      <div className="ax-notes ax-notes-m">
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
    </div>
  )
}

function MoFt() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Combien d’heures perdez-vous
          <span className="serif">chaque semaine ? On vient les compter.</span>
        </h2>
        <a className="btn btn-acc mo-btn" data-au="audit">
          Demander un audit
        </a>{' '}
        <Link to="/realisations" className="btn btn-line mo-btn">
          Voir nos réalisations
        </Link>{' '}
        <span className="mail">
          ou écrivez à <b>hello@orion-studio.io</b>
        </span>
      </div>
      <div className="mo-ft-main">
        <span className="logo">
          <img className="pxsvg logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
          <img className="pxsvg logo-w" src="/px/logo-w-438c9e6d.svg" alt="" width={151} height={21} />
        </span>
        <p>
          Studio de design et de développement web basé à Paris. Sites sur-mesure, e-commerce, applications et
          visibilité.
        </p>
        <div className="mo-fcols">
          <div className="mo-fc">
            <div className="fc-k">Expertises</div>
            <Link to="/expertises/site-internet">Site internet</Link>
            <Link to="/expertises/developpement-applications">Développement d’applications</Link>
            <Link to="/expertises/automatisations">Automatisations</Link>
            <Link to="/expertises/seo">SEO</Link>
            <Link to="/expertises/geo">GEO</Link>
            <Link to="/expertises/google-ads">Google Ads</Link>
          </div>
          <div className="mo-fc">
            <div className="fc-k">Pour qui ?</div>
            <Link to="/pour-qui/tpe-pme">TPE & PME</Link>
            <Link to="/pour-qui/golfs">Golfs</Link>
            <Link to="/pour-qui/independants">Indépendants</Link>
            <Link to="/pour-qui/marques-e-commerce">Marques & e-commerçants</Link>
            <Link to="/pour-qui/start-up">Start-up</Link>
          </div>
          <div className="mo-fc">
            <div className="fc-k">Studio</div>
            <Link to="/realisations">Réalisations</Link>
            <Link to="/orion-admin">Orion Admin</Link>
            <Link to="/le-studio">Le studio</Link>
            <a>Contact</a>
          </div>
          <div className="mo-fc">
            <div className="fc-k">Ressources</div>
            <Link to="/ressources">Articles</Link>
            <Link to="/ressources?cat=guides">Guides</Link>
            <Link to="/faq">Questions fréquentes</Link>
          </div>
        </div>
        <div className="mo-fcards">
          <div className="mo-fcard">
            <div>
              <b>Paris</b>
              <span>60 rue François Ier, 75008</span>
            </div>
            <a>Itinéraire</a>
          </div>
          <div className="mo-fcard">
            <div>
              <b>Partout ailleurs</b>
              <span>France et international, en visio</span>
            </div>
            <a>Réserver</a>
          </div>
          <div className="mo-fcard">
            <div>
              <b>Un appel ?</b>
              <span>30 minutes avec Julien ou Théo</span>
            </div>
            <a>Réserver</a>
          </div>
          <div className="mo-fcard">
            <div>
              <b>Suivre</b>
              <span>LinkedIn · Instagram</span>
            </div>
            <a>Coulisses</a>
          </div>
        </div>
      </div>
      <div className="mo-sky">
        <div className="hm-layer">
          <img src="/images/bf5a322d7f4ded.png" alt="Le ciel et la constellation d’Orion, en pixels" />
          <img
            className="pxsvg bigword"
            src="/px/bigword-a5329b0d.svg"
            alt=""
            width={416}
            height={40}
            style={{ left: '-13px', top: '132px', opacity: '0.16' }}
          />
          <i className="betel" style={{ left: '193px', top: '88px' }} />
          <span className="orio" style={{ left: '91px', top: '34px' }} title="Orio et Bételgeuse">
            <span className="orio-in">
              <img className="pxsvg" src="/px/art-c8610941.svg" alt="" width={88} height={92} />
            </span>
          </span>
        </div>
        <div className="mo-legal">
          <div className="mo-legal-l">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/confidentialite">Confidentialité</Link>
          </div>
          <span>© 2026 Orion Studio SAS — RCS 938 775 368</span>
        </div>
      </div>
    </footer>
  )
}

export function Mobile() {
  return (
    <section className="artboard mo ax-page">
      <MobileNav />
      <MoHero />
      <MoMedia />
      <ServiceSections id="automatisations" mobile anchor="ax-mpay" />
      <MoFt />
    </section>
  )
}
