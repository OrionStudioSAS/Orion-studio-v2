import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Swing Call</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Swing Call</span>
        <span className="serif">Un agent IA qui décroche pour les golfs.</span>
      </h1>
      <div className="hero-row cs-row">
        <p className="lead">
          Une start-up qui donne aux golfs un agent IA téléphonique : il répond aux appels 24 h/24, gère les
          réservations de départs et se synchronise avec le logiciel du club.
        </p>
        <div className="cs-facts">
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
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media cs-hero">
      <img src="/images/6cb0d8d4f25c2a.png" alt="Swing Call, en pixel" />
      <div className="win cs-win cs-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">swingcall.fr</span>
          <span className="win-sp" />
        </div>
        <img className="shot" src="/images/a4c19bfe3dd683.jpg" alt="Le projet Swing Call" />
      </div>
      <div className="capt">Swing Call, en pixel</div>
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
          <p>Expliquer une technologie invisible,</p>
          <p className="serif">et faire réserver des démos.</p>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce qu’on a fait</div>
          <ul>
            <li>Une page produit qui raconte l’appel, de la sonnerie au départ du trou n° 1</li>
            <li>Les deux produits présentés côte à côte : agent IA autonome et appels récupérés</li>
            <li>Une démo audio pour entendre l’assistant répondre</li>
            <li>Un calculateur des revenus récupérés sur les appels manqués</li>
            <li>La réservation de démo sur chaque page</li>
          </ul>
        </div>
        <div className="cs-b2 pp-more">
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
      </div>
    </section>
  )
}

function LeProjetEnImages() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Le projet,
          <br />
          <span className="serif">en images.</span>
        </h2>
        <p className="lead">Les écrans clés, tels qu’on les a conçus.</p>
      </div>
      <div className="cs-grid cs-g3">
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">swingcall.fr</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/4cf5bf86b9cc95.jpg" alt="Le projet Swing Call" />
          </div>
          <h3>L’écosystème</h3>
          <p>Voix, interface joueur, synchronisation avec PrimaGolf, pilotage.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">swingcall.fr</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/963bfca0d8ace4.jpg" alt="Le projet Swing Call" />
          </div>
          <h3>Deux produits, un choix clair</h3>
          <p>Tout le standard, ou seulement les appels manqués.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">swingcall.fr</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/aed2fb5d579eb8.jpg" alt="Le projet Swing Call" />
          </div>
          <h3>La suite</h3>
          <p>Une suite compatible avec les outils du club, présentée en un coup d’œil.</p>
        </article>
      </div>
      <div className="mdb-visit">
        <a className="btn btn-ink" href="https://swingcall.fr/" target="_blank" rel="noopener">
          Voir le site en ligne
        </a>
      </div>
    </section>
  )
}

function SurMobilePensePour() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Sur mobile,
          <br />
          <span className="serif">pensé pour le pouce.</span>
        </h2>
        <p className="lead">
          La version mobile n’est pas une réduction du site : menus, boutons et contenus sont repensés pour
          une main.
        </p>
      </div>
      <div className="pp-mob">
        <div className="mdb-phones">
          <img src="/images/1fa831215552e3.jpg" alt="Le site Swing Call sur mobile" />
          <img src="/images/18a976544de7b4.jpg" alt="Le site Swing Call sur mobile" />
        </div>
      </div>
    </section>
  )
}

function AssociationDesEntrepreneursDu() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="cs-next" data-proj="entrepreneurs-du-vexin">
        <div className="cs-nx-l">
          <span className="p-tag">Projet suivant</span>
          <h2 className="h2">Association des Entrepreneurs du Vexin</h2>
          <p className="lead">
            Le site du réseau des chefs d’entreprise du Vexin : membres, événements et adhésion en ligne.
          </p>
          <div className="cs-nx-b">
            <Link
              to="/realisations/entrepreneurs-du-vexin"
              className="btn btn-ink"
              data-proj="entrepreneurs-du-vexin"
            >
              Voir le projet
            </Link>
            <Link to="/realisations" className="lnk" data-pv="realisations">
              Toutes les réalisations
            </Link>
          </div>
        </div>
        <div className="p-media cs-nx-m">
          <img src="/images/17682ce2f50cef.png" alt="" />
          <div className="win win-shot mdb-cwin">
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
              <img
                className="shot"
                src="/images/f7f70ac67d2f8d.jpg"
                alt="Le site Association des Entrepreneurs du Vexin"
              />
            </div>
          </div>
        </div>
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
            Un produit à faire comprendre ?<span className="serif">Racontons-le.</span>
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
    <section className="artboard g-page cs-page pp-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <LeBriefEnDeux />
      <LeProjetEnImages />
      <SurMobilePensePour />
      <AssociationDesEntrepreneursDu />
      <GCta />
    </section>
  )
}
