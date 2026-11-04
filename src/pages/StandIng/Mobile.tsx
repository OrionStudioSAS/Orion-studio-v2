import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoMcNk } from '../../components/shared/MoMcNk'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Stand-ING</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Stand-ING<span className="serif">Imaginez. Personnalisez. Exposez.</span>
      </h1>
      <p className="mo-lead">
        Un configurateur en ligne pour les exposants des salons : chacun compose son stand, le voit en 3D à
        l’échelle réelle et valide sa commande en quelques clics. On l’a conçu et développé, puis on a réalisé
        la vidéo qui le présente.
      </p>
      <div className="mc-facts">
        <div>
          <span>Client</span>
          <b>Stand-ING · stands de salon</b>
        </div>
        <div>
          <span>Projet</span>
          <b>Configurateur 3D + vidéo</b>
        </div>
        <div>
          <span>Année</span>
          <b>2026</b>
        </div>
        <div>
          <span>Format</span>
          <b>Application web</b>
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
        src="/images/07c611b251fd66.png"
        alt="Un stand réalisé par Stand-ING, en pixel art"
        style={{ left: '0', width: '390px', height: '380px', objectFit: 'cover' }}
      />
      <div className="mc-logo">
        <img src="/images/f929bc41088d4e.png" alt="Stand-ING" />
      </div>
      <div className="win win-shot mc-win mc-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">Stand-ING — Configurateur</span>
          <span className="win-sp" />
        </div>
        <div className="win-body">
          <img className="shot" src="/images/0728f74559c19f.jpg" alt="" />
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
        <p>Que l’exposant compose son stand seul,</p>
        <p className="mc-b1s">et le commande en quelques clics.</p>
      </div>
      <div className="mc-list">
        <div className="case-k">Ce qu’on a fait</div>
        <ul>
          <li>Conception UX/UI du configurateur</li>
          <li>Développement de l’application et de la vue 3D</li>
          <li>Vidéo de présentation du parcours</li>
          <li>Maquettes du site vitrine</li>
        </ul>
      </div>
      <div className="mc-list">
        <div className="case-k">Ce que l’exposant fait seul</div>
        <ul>
          <li>Se connecter avec son code personnel</li>
          <li>Personnaliser sol, cloisons, réserve et arche</li>
          <li>Ajouter mobilier, multimédia et signalétique</li>
          <li>Valider et recevoir son bon de commande</li>
        </ul>
      </div>
    </section>
  )
}

function LeParcoursExposantEn() {
  return (
    <section className="mo-sec mc-car">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Le parcours exposant,<span className="serif">en quatre étapes.</span>
        </h2>
        <p className="mo-lead">
          Accueil, Configuration, Boutique, Validation : les étapes de l’application, en images extraites de
          la vidéo.
        </p>
      </div>
      <div className="mo-rail mc-rail">
        <div className="mo-track">
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Accueil</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/72fba341afabc8.jpg" alt="" />
              </div>
            </div>
            <h3>Accueil</h3>
            <p>
              L’exposant reçoit son invitation et se connecte avec son code personnel. Son stand l’attend, en
              3D, à l’échelle réelle.
            </p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Configuration</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/0728f74559c19f.jpg" alt="" />
              </div>
            </div>
            <h3>Configuration</h3>
            <p>
              Moquette, cloisons, réserve, têtes de cloison, arche : tout se met à jour en temps réel dans la
              vue 3D.
            </p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Boutique</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/9bdf57c828f6bb.jpg" alt="" />
              </div>
            </div>
            <h3>Boutique</h3>
            <p>
              Mobilier, multimédia, signalétique : chaque accessoire prend place directement sur le stand.
            </p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Validation</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/b1046185927fed.jpg" alt="" />
              </div>
            </div>
            <h3>Validation</h3>
            <p>Un récapitulatif, un clic, et le bon de commande est généré instantanément.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function LaVideoFormatStory() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          La vidéo,<span className="serif">format story.</span>
        </h2>
      </div>
      <div className="sv-mwrap">
        <div className="sv-phone sv-m" data-cur="Lecture">
          <video
            className="sv-bg"
            src="/media/standing-ad.mp4"
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          />
          <video
            className="sv-fg"
            src="/media/standing-ad.mp4"
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/f54b9517fb.jpg"
            aria-label="Vidéo de présentation du configurateur Stand-ING"
          />
          <div className="sv-top">
            <div className="sv-bar">
              <i />
            </div>
            <div className="sv-head">
              <span className="sv-av">
                <img src="/images/f929bc41088d4e.png" alt="" />
              </span>
              <div>
                <b>standing</b>
                <span>Réalisation · Orion Studio</span>
              </div>
              <span className="sv-x">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
            </div>
          </div>
          <button type="button" className="sv-snd" aria-label="Activer le son">
            <svg
              className="snd-off"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6.5H5L9 3V15L5 11.5H2V6.5Z" fill="currentColor" />
              <path d="M12 6.5L16 10.5M16 6.5L12 10.5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            <svg
              className="snd-on"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6.5H5L9 3V15L5 11.5H2V6.5Z" fill="currentColor" />
              <path
                d="M12 6C13.2 7.2 13.2 10.8 12 12M14.5 4C16.6 6.4 16.6 11.6 14.5 14"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>{' '}
          <span className="sv-play" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3V19L19 11L6 3Z" fill="currentColor" />
            </svg>
          </span>
          <div className="sv-bot">
            <p>Imaginez. Personnalisez. Exposez.</p>
            <div className="sv-reply">Répondre à standing…</div>
          </div>
        </div>
      </div>
      <p className="sv-mp">
        Le parcours complet d’un exposant en moins de deux minutes. L’interface est reproduite à partir du
        vrai configurateur, le stand assemblé à partir des modèles 3D fournis.
      </p>
      <a className="btn btn-ink mo-btn sv-open">Regarder en 16:9</a>
    </section>
  )
}

function DansLeConfigurateurLe() {
  return (
    <section className="mo-sec mc-car mc-dark">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Dans le configurateur,<span className="serif">le stand se construit en direct.</span>
        </h2>
        <p className="mo-lead">Chaque choix se voit aussitôt sur le stand en 3D.</p>
      </div>
      <div className="mo-rail mc-rail">
        <div className="mo-track">
          <article className="mc-tile mc-d">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Tourner autour du stand</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/b3624ef1019ca0.jpg" alt="" />
              </div>
            </div>
            <h3>Tourner autour du stand</h3>
            <p>Une orbite libre pour explorer chaque détail avant de choisir.</p>
          </article>
          <article className="mc-tile mc-d">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Questions et remarques</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/cd45015e1fa265.jpg" alt="" />
              </div>
            </div>
            <h3>Questions et remarques</h3>
            <p>Un besoin spécifique ? L’exposant écrit, l’équipe Stand-ING prend le relais.</p>
          </article>
          <article className="mc-tile mc-d">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">L’invitation par e-mail</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/a0ea3932c74f0c.jpg" alt="" />
              </div>
            </div>
            <h3>L’invitation par e-mail</h3>
            <p>Le parcours commence dans la boîte mail, avec le code d’accès au configurateur.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function MoFt() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Un produit à configurer ?<span className="serif">Construisons votre outil.</span>
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
    <section className="artboard mo">
      <MobileNav />
      <MoHero />
      <McHero />
      <LeBriefEnDeux />
      <LeParcoursExposantEn />
      <LaVideoFormatStory />
      <DansLeConfigurateurLe />
      <MoMcNk />
      <MoFt />
    </section>
  )
}
