import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { ChateauLArcGolf } from '../../components/shared/ChateauLArcGolf'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Stand-ING</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Stand-ING</span>
        <span className="serif">Imaginez. Personnalisez. Exposez.</span>
      </h1>
      <div className="hero-row cs-row">
        <p className="lead">
          Un configurateur en ligne pour les exposants des salons : chacun compose son stand, le voit en 3D à
          l’échelle réelle et valide sa commande en quelques clics. On l’a conçu et développé, puis on a
          réalisé la vidéo qui le présente.
        </p>
        <div className="cs-facts">
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
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media cs-hero">
      <img src="/images/cabd38389825fd.png" alt="Un stand réalisé par Stand-ING, en pixel art" />
      <div className="case-logo">
        <img src="/images/f929bc41088d4e.png" alt="Stand-ING" />
      </div>
      <div className="win cs-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">Stand-ING — Configurateur de stand 3D</span>
          <span className="win-sp" />
        </div>
        <img className="shot" src="/images/cfe60288d854b0.png" alt="Le configurateur de stand Stand-ING" />
      </div>
      <div className="capt">Un stand Stand-ING, en pixel</div>
    </div>
  )
}

function LeBriefEnDeux() {
  return (
    <section className="sec" style={{ padding: '0', borderTop: 'none' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '112px' }}>
        <h2 className="h2">
          Le brief
          <br />
          <span className="serif">en deux phrases.</span>
        </h2>
      </div>
      <div className="cs-brief">
        <div className="cs-b1">
          <p>Que l’exposant compose son stand seul,</p>
          <p className="serif">et le commande en quelques clics.</p>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce qu’on a fait</div>
          <ul>
            <li>Conception UX/UI du configurateur</li>
            <li>Développement de l’application et de la vue 3D</li>
            <li>Vidéo de présentation du parcours</li>
            <li>Maquettes du site vitrine</li>
          </ul>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce que l’exposant fait seul</div>
          <ul>
            <li>Se connecter avec son code personnel</li>
            <li>Personnaliser sol, cloisons, réserve et arche</li>
            <li>Ajouter mobilier, multimédia et signalétique</li>
            <li>Valider et recevoir son bon de commande</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function LeParcoursExposantEn() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Le parcours exposant,
          <br />
          <span className="serif">en quatre étapes.</span>
        </h2>
        <p className="lead">
          Les mêmes quatre étapes que dans l’application : Accueil, Configuration, Boutique, Validation.
          Images extraites de la vidéo de présentation, reproduite à partir du vrai configurateur.
        </p>
      </div>
      <div className="cs-grid cs-g4">
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Accueil</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/72fba341afabc8.jpg" alt="" />
          </div>
          <h3>Accueil</h3>
          <p>
            L’exposant reçoit son invitation et se connecte avec son code personnel. Son stand l’attend, en
            3D, à l’échelle réelle.
          </p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Configuration</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/0728f74559c19f.jpg" alt="" />
          </div>
          <h3>Configuration</h3>
          <p>
            Moquette, cloisons, réserve, têtes de cloison, arche : tout se met à jour en temps réel dans la
            vue 3D.
          </p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Boutique</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/9bdf57c828f6bb.jpg" alt="" />
          </div>
          <h3>Boutique</h3>
          <p>Mobilier, multimédia, signalétique : chaque accessoire prend place directement sur le stand.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Validation</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/b1046185927fed.jpg" alt="" />
          </div>
          <h3>Validation</h3>
          <p>Un récapitulatif, un clic, et le bon de commande est généré instantanément.</p>
        </article>
      </div>
    </section>
  )
}

function LaVideoFormatStory() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          La vidéo,
          <br />
          <span className="serif">format story.</span>
        </h2>
      </div>
      <div className="sv-vid">
        <div className="sv-phone " data-cur="Lecture">
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
        <div className="sv-txt">
          <h3>Une vidéo pour lancer le configurateur</h3>
          <p>
            Le parcours complet d’un exposant en moins de deux minutes : invitation, connexion,
            personnalisation du stand en 3D, boutique, validation et accompagnement.
          </p>
          <div className="case-k">Comment on l’a faite</div>
          <ul>
            <li>L’interface reproduite écran par écran à partir du vrai configurateur</li>
            <li>Le stand assemblé à partir des modèles 3D fournis par Stand-ING</li>
            <li>Une voix off et une musique composées pour la vidéo</li>
            <li>Un format 16:9 pour le site et les salons ; la version verticale est en préparation</li>
          </ul>
          <div className="sv-btns">
            <a className="btn btn-ink sv-open">Regarder en 16:9</a>
            <span className="sv-hint">Touchez la story pour activer le son</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function DansLeConfigurateurLe() {
  return (
    <section className="cs-dark">
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Dans le configurateur,
          <br />
          <span className="serif">le stand se construit en direct.</span>
        </h2>
        <p className="lead">
          Chaque choix se voit aussitôt sur le stand en 3D : la moquette, les cloisons, l’arche, l’enseigne
          haute, le mobilier.
        </p>
      </div>
      <div className="cs-bo">
        <div className="win cs-win cs-bowin">
          <div className="win-bar">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
            <span className="win-title">Stand-ING — Boutique</span>
            <span className="win-sp" />
          </div>
          <img
            className="shot"
            src="/images/a71dfaa0af1087.jpg"
            alt="La boutique du configurateur, rubrique signalétique"
          />
        </div>
        <div className="cs-bo-r">
          <h3>La boutique, rubrique par rubrique</h3>
          <p>
            Mobilier, multimédia, signalétique : l’exposant ajoute un accessoire, choisit sa variante, et le
            voit apparaître sur son stand avant de valider.
          </p>
          <a className="btn btn-acc">Démarrer un projet</a>
        </div>
      </div>
      <div className="cs-grid cs-g3">
        <article className="cs-tile cs-d">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Tourner autour du stand</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/b3624ef1019ca0.jpg" alt="" />
          </div>
          <h3>Tourner autour du stand</h3>
          <p>Une orbite libre pour explorer chaque détail avant de choisir.</p>
        </article>
        <article className="cs-tile cs-d">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Questions et remarques</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/cd45015e1fa265.jpg" alt="" />
          </div>
          <h3>Questions et remarques</h3>
          <p>Un besoin spécifique ? L’exposant écrit, l’équipe Stand-ING prend le relais.</p>
        </article>
        <article className="cs-tile cs-d">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">L’invitation par e-mail</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/a0ea3932c74f0c.jpg" alt="" />
          </div>
          <h3>L’invitation par e-mail</h3>
          <p>Le parcours commence dans la boîte mail, avec le code d’accès au configurateur.</p>
        </article>
      </div>
    </section>
  )
}

function GCta() {
  return (
    <div className="g-cta">
      <Footer>
        <div className="cta">
          <h2>
            Un produit à configurer ?<span className="serif">Construisons votre outil.</span>
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
    </div>
  )
}

export function Desktop() {
  return (
    <section className="artboard g-page cs-page sv-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <LeBriefEnDeux />
      <LeParcoursExposantEn />
      <LaVideoFormatStory />
      <DansLeConfigurateurLe />
      <ChateauLArcGolf />
      <GCta />
    </section>
  )
}
