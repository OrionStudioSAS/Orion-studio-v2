import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Housses Taxi</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Housses Taxi<span className="serif">Des housses sur mesure, posées à l’atelier.</span>
      </h1>
      <p className="mo-lead">
        Un atelier de Pierrelaye, dans le Val-d’Oise, qui fabrique des housses de sièges sur mesure pour les
        taxis, les VTC, les utilitaires et les vans, posées sur place par ses installateurs.
      </p>
      <div className="mc-facts">
        <div>
          <span>Client</span>
          <b>Fabricant de housses · Val-d’Oise</b>
        </div>
        <div>
          <span>Projet</span>
          <b>Site vitrine</b>
        </div>
        <div>
          <span>Pour</span>
          <b>Taxis, VTC, utilitaires, vans</b>
        </div>
        <div>
          <span>En ligne</span>
          <b>houssestaxi.com</b>
        </div>
      </div>
    </section>
  )
}

function McHero() {
  return (
    <div className="mc-hero">
      <img
        className="mc-hero-bg"
        src="/images/6fd799a3a74785.png"
        alt="L’atelier, en pixel"
        style={{ left: '0', width: '390px', height: '380px', objectFit: 'cover' }}
      />
      <div className="win win-shot mc-win mc-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">houssestaxi.com</span>
          <span className="win-sp" />
        </div>
        <div className="win-body">
          <img className="shot" src="/images/17eafb1d2deb75.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

function LeBriefEnDeux() {
  return (
    <section className="mo-sec" style={{ borderTop: 'none' }}>
      <div className="mo-shead">
        <h2 className="mo-h2">
          Le brief<span className="serif">en deux phrases.</span>
        </h2>
      </div>
      <div className="mc-b1">
        <p>Montrer le savoir-faire de l’atelier,</p>
        <p className="mc-b1s">et faire venir les rendez-vous.</p>
      </div>
      <div className="mc-list">
        <div className="case-k">Ce qu’on a fait</div>
        <ul>
          <li>Présentation des housses par véhicule : taxi, VTC, utilitaire, van</li>
          <li>Le parcours client en trois étapes, du rendez-vous à la pose</li>
          <li>Prise de rendez-vous et coordonnées de l’atelier sur chaque page</li>
          <li>Pages « Notre histoire », « Nos marchés » et FAQ</li>
          <li>Version mobile soignée, pour les chauffeurs</li>
        </ul>
      </div>
      <div className="mc-list pp-more">
        <div className="case-k">Pour aller plus loin</div>
        <ul>
          <li>
            <a className="lnk" href="https://www.houssestaxi.com/" target="_blank" rel="noopener">
              Voir le site en ligne
            </a>
          </li>
          <li>
            <Link to="/pour-qui/tpe-pme" className="lnk" data-pv="tpe-pme">
              Le cas sur la page « TPE & PME »
            </Link>
          </li>
          <li>
            <Link to="/realisations" className="lnk" data-pv="realisations">
              Toutes les réalisations
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

function LeProjetEnImages() {
  return (
    <section className="mo-sec mc-car">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Le projet,<span className="serif">en images.</span>
        </h2>
        <p className="mo-lead">Les écrans clés, tels qu’on les a conçus.</p>
      </div>
      <div className="mo-rail mc-rail">
        <div className="mo-track">
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">houssestaxi.com</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/1a94289d7d9cd0.jpg" alt="" />
              </div>
            </div>
            <h3>Comment ça marche</h3>
            <p>Rendez-vous, pose dans les locaux, départ avec un véhicule comme neuf.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">houssestaxi.com</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/0750102270d8d9.jpg" alt="" />
              </div>
            </div>
            <h3>La FAQ</h3>
            <p>Les questions des chauffeurs, regroupées dans une FAQ claire.</p>
          </article>
        </div>
      </div>
      <a
        className="btn btn-ink mo-btn mo-btn-full mdb-mvisit"
        href="https://www.houssestaxi.com/"
        target="_blank"
        rel="noopener"
      >
        Voir le site en ligne
      </a>
    </section>
  )
}

function SurMobilePensePour() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Sur mobile,<span className="serif">pensé pour le pouce.</span>
        </h2>
      </div>
      <div className="mb-phones">
        <img src="/images/afaca6e7e387d4.jpg" alt="Le site Housses Taxi sur mobile" />
        <img src="/images/309c514cdd4e40.jpg" alt="Le site Housses Taxi sur mobile" />
      </div>
    </section>
  )
}

function McNk() {
  return (
    <section className="mo-sec">
      <div className="mc-nk">Projet suivant</div>
      <article className="mo-proj" data-proj="orion-admin">
        <div className="mo-pm">
          <img className="mo-pm-bg" src="/images/0c6fffca9924a1.png" alt="" />
          <div className="win win-shot mo-win">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Orion Admin</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img className="shot" src="/images/94f1f7140db692.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="mo-pmeta">
          <h3>Orion Admin</h3>
          <span>Interface d’administration · sur mesure</span>
        </div>
        <p>L’interface faite sur mesure pour piloter son site : chiffres, contenus, langues et tout ce que l’activité demande.</p>
        <Link to="/orion-admin" className="lnk mo-more" data-proj="orion-admin">
          Voir le projet
        </Link>
      </article>
      <Link to="/realisations" className="btn btn-ink mo-btn mo-btn-full mc-all" data-pv="realisations">
        Toutes les réalisations
      </Link>
    </section>
  )
}

function MoFt() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Un atelier à faire connaître ?<span className="serif">Montrons-le.</span>
        </h2>
        <a className="btn btn-acc mo-btn">Démarrer un projet</a>{' '}
        <a className="btn btn-line mo-btn">Analyser mon site</a>{' '}
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
            <Link to="/expertises/e-commerce">E-commerce</Link>
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
    <section className="artboard mo pp-page">
      <MobileNav />
      <MoHero />
      <McHero />
      <LeBriefEnDeux />
      <LeProjetEnImages />
      <SurMobilePensePour />
      <McNk />
      <MoFt />
    </section>
  )
}
