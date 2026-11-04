import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Association des Entrepreneurs du Vexin</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Association des Entrepreneurs du Vexin
        <span className="serif">Le réseau des chefs d’entreprise du Vexin.</span>
      </h1>
      <p className="mo-lead">
        Le réseau des chefs d’entreprise du Vexin : petits-déjeuners, afterworks, conférences et visites
        d’entreprises, avec un site pour présenter les membres et faire adhérer.
      </p>
      <div className="mc-facts">
        <div>
          <span>Client</span>
          <b>Association · Vexin</b>
        </div>
        <div>
          <span>Projet</span>
          <b>Site + espace membres</b>
        </div>
        <div>
          <span>Fonctions</span>
          <b>Annuaire, agenda, adhésion en ligne</b>
        </div>
        <div>
          <span>En ligne</span>
          <b>association-ev.fr</b>
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
        src="/images/17682ce2f50cef.png"
        alt="Le Vexin, en pixel"
        style={{ left: '0', width: '390px', height: '380px', objectFit: 'cover' }}
      />
      <div className="win win-shot mc-win mc-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">association-ev.fr</span>
          <span className="win-sp" />
        </div>
        <div className="win-body">
          <img className="shot" src="/images/f7f70ac67d2f8d.jpg" alt="" />
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
        <p>Présenter les membres du réseau,</p>
        <p className="mc-b1s">et donner envie d’adhérer.</p>
      </div>
      <div className="mc-list">
        <div className="case-k">Ce qu’on a fait</div>
        <ul>
          <li>Présentation de l’association, de ses valeurs et de sa charte</li>
          <li>Annuaire des membres, avec une fiche par entrepreneur</li>
          <li>Agenda des événements, relié au blog</li>
          <li>Adhésion en ligne et espace membre (connexion, compte)</li>
          <li>FAQ pour les futurs adhérents</li>
        </ul>
      </div>
      <div className="mc-list pp-more">
        <div className="case-k">Pour aller plus loin</div>
        <ul>
          <li>
            <a className="lnk" href="https://association-ev.fr/" target="_blank" rel="noopener">
              Voir le site en ligne
            </a>
          </li>
          <li>
            <Link to="/pour-qui/associations" className="lnk" data-pv="associations">
              Le cas sur la page « Associations »
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
                <span className="win-title">association-ev.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/a3f2097a4f9879.jpg" alt="" />
              </div>
            </div>
            <h3>Nos membres</h3>
            <p>Chaque entrepreneur présenté, avec son entreprise.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">association-ev.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/b6a413e2267a48.jpg" alt="" />
              </div>
            </div>
            <h3>Nos événements</h3>
            <p>Les prochains rendez-vous du réseau.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">association-ev.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/388ec2a8c02406.jpg" alt="" />
              </div>
            </div>
            <h3>La FAQ</h3>
            <p>Les questions des futurs adhérents, avant de dire « J’adhère ».</p>
          </article>
        </div>
      </div>
      <a
        className="btn btn-ink mo-btn mo-btn-full mdb-mvisit"
        href="https://association-ev.fr/"
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
        <img
          src="/images/7c5a27924f6eb5.jpg"
          alt="Le site Association des Entrepreneurs du Vexin sur mobile"
        />
        <img
          src="/images/0532b458e8d391.jpg"
          alt="Le site Association des Entrepreneurs du Vexin sur mobile"
        />
      </div>
    </section>
  )
}

function McNk() {
  return (
    <section className="mo-sec">
      <div className="mc-nk">Projet suivant</div>
      <article className="mo-proj" data-proj="housses-taxi">
        <div className="mo-pm">
          <img className="mo-pm-bg" src="/images/6fd799a3a74785.png" alt="" />
          <div className="win rz-wire mo-wire">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Housses Taxi</span>
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
          <h3>Housses Taxi</h3>
          <span>Site vitrine · TPE</span>
        </div>
        <p>Le site d’un fabricant de housses sur mesure pour taxis et VTC, dans le Val-d’Oise.</p>
        <Link to="/realisations/housses-taxi" className="lnk mo-more" data-proj="housses-taxi">
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
          Une association à faire grandir ?<span className="serif">Parlons-en.</span>
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
