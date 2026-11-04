import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Swing Call</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Swing Call<span className="serif">Un agent IA qui décroche pour les golfs.</span>
      </h1>
      <p className="mo-lead">
        Une start-up qui donne aux golfs un agent IA téléphonique : il répond aux appels 24 h/24, gère les
        réservations de départs et se synchronise avec le logiciel du club.
      </p>
      <div className="mc-facts">
        <div>
          <span>Client</span>
          <b>Start-up · agent IA pour les golfs</b>
        </div>
        <div>
          <span>Projet</span>
          <b>Site produit</b>
        </div>
        <div>
          <span>Au programme</span>
          <b>Démo audio, calculateur, réservation de démo</b>
        </div>
        <div>
          <span>En ligne</span>
          <b>swingcall.fr</b>
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
        src="/images/6cb0d8d4f25c2a.png"
        alt="Swing Call, en pixel"
        style={{ left: '0', width: '390px', height: '380px', objectFit: 'cover' }}
      />
      <div className="win win-shot mc-win mc-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">swingcall.fr</span>
          <span className="win-sp" />
        </div>
        <div className="win-body">
          <img className="shot" src="/images/a4c19bfe3dd683.jpg" alt="" />
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
        <p>Expliquer une technologie invisible,</p>
        <p className="mc-b1s">et faire réserver des démos.</p>
      </div>
      <div className="mc-list">
        <div className="case-k">Ce qu’on a fait</div>
        <ul>
          <li>Une page produit qui raconte l’appel, de la sonnerie au départ du trou n° 1</li>
          <li>Les deux produits présentés côte à côte : agent IA autonome et appels récupérés</li>
          <li>Une démo audio pour entendre l’assistant répondre</li>
          <li>Un calculateur des revenus récupérés sur les appels manqués</li>
          <li>La réservation de démo sur chaque page</li>
        </ul>
      </div>
      <div className="mc-list pp-more">
        <div className="case-k">Pour aller plus loin</div>
        <ul>
          <li>
            <a className="lnk" href="https://swingcall.fr/" target="_blank" rel="noopener">
              Voir le site en ligne
            </a>
          </li>
          <li>
            <Link to="/pour-qui/start-up" className="lnk" data-pv="start-up">
              Le cas sur la page « Start-up »
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
                <span className="win-title">swingcall.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/4cf5bf86b9cc95.jpg" alt="" />
              </div>
            </div>
            <h3>L’écosystème</h3>
            <p>Voix, interface joueur, synchronisation avec PrimaGolf, pilotage.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">swingcall.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/963bfca0d8ace4.jpg" alt="" />
              </div>
            </div>
            <h3>Deux produits, un choix clair</h3>
            <p>Tout le standard, ou seulement les appels manqués.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">swingcall.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/aed2fb5d579eb8.jpg" alt="" />
              </div>
            </div>
            <h3>La suite</h3>
            <p>Une suite compatible avec les outils du club, présentée en un coup d’œil.</p>
          </article>
        </div>
      </div>
      <a
        className="btn btn-ink mo-btn mo-btn-full mdb-mvisit"
        href="https://swingcall.fr/"
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
        <img src="/images/1fa831215552e3.jpg" alt="Le site Swing Call sur mobile" />
        <img src="/images/18a976544de7b4.jpg" alt="Le site Swing Call sur mobile" />
      </div>
    </section>
  )
}

function McNk() {
  return (
    <section className="mo-sec">
      <div className="mc-nk">Projet suivant</div>
      <article className="mo-proj" data-proj="entrepreneurs-du-vexin">
        <div className="mo-pm">
          <img className="mo-pm-bg" src="/images/17682ce2f50cef.png" alt="" />
          <div className="win rz-wire mo-wire">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Association des Entrepreneurs du Vexin</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <div className="wire" style={{ border: 'none', padding: '0' }}>
                <i style={{ width: '58%' }} />
                <i style={{ width: '36%' }} />
                <i className="blk" />
                <i style={{ width: '72%' }} />
                <i style={{ width: '44%' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="mo-pmeta">
          <h3>Association des Entrepreneurs du Vexin</h3>
          <span>Association · Site + espace membres</span>
        </div>
        <p>Le site du réseau des chefs d’entreprise du Vexin : membres, événements et adhésion en ligne.</p>
        <Link
          to="/realisations/entrepreneurs-du-vexin"
          className="lnk mo-more"
          data-proj="entrepreneurs-du-vexin"
        >
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
          Un produit à faire comprendre ?<span className="serif">Racontons-le.</span>
        </h2>
        <a className="btn btn-acc mo-btn">Démarrer un projet</a>{' '}
        <a className="btn btn-line mo-btn">Analyser mon site</a>{' '}
        <span className="mail">
          ou écrivez à <b>hello@orion-studio.io</b>
        </span>
      </div>
      <div className="mo-ft-main">
        <span className="logo">
          <img className="px logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
          <img className="px logo-w" src="/px/logo-w-438c9e6d.svg" alt="" width={151} height={21} />
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
            <Link to="/le-studio">Le studio</Link>
            <a>Méthode</a>
            <Link to="/realisations/orion-admin">Orion Admin</Link>
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
            className="px bigword"
            src="/px/bigword-a5329b0d.svg"
            alt=""
            width={416}
            height={40}
            style={{ left: '-13px', top: '132px', opacity: '0.16' }}
          />
          <i className="betel" style={{ left: '193px', top: '88px' }} />
          <span className="orio" style={{ left: '91px', top: '34px' }} title="Orio et Bételgeuse">
            <span className="orio-in">
              <img className="px" src="/px/art-c8610941.svg" alt="" width={88} height={92} />
            </span>
          </span>
        </div>
        <div className="mo-legal">
          <div className="ft-lang">
            <span className="on">Français</span>
            <span>English</span>
          </div>
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
