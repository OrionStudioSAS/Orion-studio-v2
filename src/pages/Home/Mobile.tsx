import { Link } from 'react-router-dom'
import { MobileFooter } from '../../components/shared/MobileFooter'

function MoNav() {
  return (
    <header className="mo-nav">
      <Link to="/" className="logo">
        <img className="px logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
        <img className="px logo-w" src="/px/logo-w-ad3e722d.svg" alt="" width={151} height={21} />
      </Link>
      <div className="mo-nav-r">
        <span className="lang">
          <b>FR</b> / EN
        </span>{' '}
        <button
          className="mo-burger"
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded="false"
          aria-controls="m-menu"
        >
          <i />
          <i />
        </button>
      </div>
      <i className="nav-prog" />
    </header>
  )
}

function MoHero() {
  return (
    <section className="mo-hero">
      <h1 className="mo-h1" aria-label="Agence de développement web pour les marques qui voient loin.">
        Agence de
        <br />
        développement web
        <span className="serif">
          pour les <span className="rot">marques qui voient loin.</span>
        </span>
      </h1>
      <p className="mo-lead">
        Orion Studio conçoit et développe des sites sur-mesure, des boutiques Shopify et des applications web.
        Une équipe à taille humaine basée à Paris, du premier croquis à la mise en ligne, sans intermédiaire.
      </p>
      <div className="mo-btns">
        <a className="btn btn-ink mo-btn" data-go="cta">
          Démarrer un projet
        </a>
        <a className="btn btn-ghost mo-btn" data-go="work">
          Voir les réalisations
        </a>
      </div>
      <div className="proof mo-proof">
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
        <span>5/5 sur Google · Paris · France et international · FR / EN</span>
      </div>
    </section>
  )
}

function MoMedia() {
  return (
    <div className="mo-media">
      <div className="hm-layer">
        <img
          className="mo-media-bg"
          src="/images/4bcb961555f4a1.png"
          alt="Une baie la nuit sous la constellation d’Orion, en pixel art"
        />
        <i className="betel" style={{ left: '193px', top: '136px' }} />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="px omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde votre site
            <br />
            ensemble ?
          </span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              https://www.maison-arlette.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site, ou décrivez votre projet</span>
          </div>
          <div className="mo-crit">
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Design
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              SEO
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Vitesse
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Conversion
            </span>
          </div>
          <div className="mo-cfoot">
            <span className="ib">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1V13M1 7H13" stroke="#0E0E0C" strokeWidth="1.4" />
              </svg>
            </span>
            <span className="ib">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3H15M1 11H15" stroke="#0E0E0C" strokeWidth="1.4" />
                <rect
                  x="4"
                  y="1"
                  width="3"
                  height="4"
                  rx="1"
                  fill="#fff"
                  stroke="#0E0E0C"
                  strokeWidth="1.4"
                />
                <rect
                  x="9"
                  y="9"
                  width="3"
                  height="4"
                  rx="1"
                  fill="#fff"
                  stroke="#0E0E0C"
                  strokeWidth="1.4"
                />
              </svg>
            </span>{' '}
            <span className="send mo-send">Analyser mon site</span>
          </div>
        </div>
        <div className="mo-sug">
          <span className="sg">
            <img className="px picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Refaire mon site</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Remonter sur Google</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-92b066cf.svg" alt="" width={10} height={10} />
            <b>Être cité par ChatGPT</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-2c356b90.svg" alt="" width={10} height={10} />
            <b>Je n’ai pas encore de site</b>
          </span>
        </div>
        <div className="ch2-note mo-note">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.7" y="5" width="8.6" height="6.3" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path
              d="M2.6 5V3.4C2.6 2 3.7 0.9 5 0.9C6.3 0.9 7.4 2 7.4 3.4V5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          <span>
            Gratuit et sans engagement. Analyse et maquette envoyées par e-mail sous quelques jours.
          </span>
        </div>
      </div>
      <div className="mo-capt">
        22 h 40 — <b>Bételgeuse</b>, l’étoile rouge d’Orion
      </div>
    </div>
  )
}

function MoClients() {
  return (
    <div className="mo-clients">
      <div className="mo-cl-k">Ils nous ont confié leurs projets</div>
      <div className="mo-cl-g">
        <div>
          <img src="/images/a58f0039fd543e.png" alt="Château l’Arc Golf Club" style={{ height: '54px' }} />
        </div>
        <div>
          <img src="/images/f929bc41088d4e.png" alt="Stand-ING" style={{ height: '34px' }} />
        </div>
        <div>
          <img src="/images/407078ca1be0b8.png" alt="Le Moulin de Balme" style={{ height: '56px' }} />
        </div>
        <div>
          <img src="/images/682cb609d42336.png" alt="DATHY" style={{ height: '44px' }} />
        </div>
        <div>
          <img src="/images/c89d8692d26a0a.png" alt="Swing Call" style={{ height: '22px' }} />
        </div>
      </div>
    </div>
  )
}

function OrionStudioCEst() {
  return (
    <section className="mo-sec mo-mf">
      <div className="mo-k">
        <span>Le studio</span>
        <span>Paris · France et international · FR / EN</span>
      </div>
      <h2 className="mo-mh">
        <div className="mo-ml">
          <span className="mf-t mo-mt ">Orion Studio, c’est</span>
        </div>
        <div className="mo-ml">
          <img
            className="mo-pic"
            src="/images/a4d016edd40d8d.png"
            alt="Julien et Théo, fondateurs d’Orion Studio"
          />
          <span className="mf-t mo-mt ">une équipe</span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt ">à taille humaine,</span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt ">basée à Paris</span>
          <img className="mo-pic" src="/images/417a770a7fa506.png" alt="Une baie la nuit, en pixel art" />
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt mf-m">qui dessine</span>
          <span className="mf-ui mf-figma mo-ui mo-fig" title="Figma">
            <img className="px" src="/px/art-d5501567.svg" alt="" width={27.2} height={40.8} />
          </span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt mf-m">et code</span>
          <span className="mf-ui mf-code mo-ui">
            <i className="k" style={{ width: '46%' }} />
            <i style={{ width: '70%', marginLeft: '6px' }} />
            <i className="s" style={{ width: '38%', marginLeft: '6px' }} />
            <i style={{ width: '24%' }} />
          </span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt mf-m">des sites qui font</span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt mf-m">venir</span>
          <span className="mf-ui mf-site mo-ui mo-site">
            <span className="mf-bar">
              <b />
              <b />
              <b />
            </span>
            <img src="/images/7de98511bd76f4.png" alt="" />
          </span>
          <span className="mf-t mo-mt mf-m mf-s mo-ms">des clients.</span>
        </div>
      </h2>
      <div className="tm tm-mo">
        <div className="tm-stage">
          <svg
            className="tm-sky"
            viewBox="0 0 348 270"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <rect x="231" y="143" width="3" height="3" fill="#F4F4F1" opacity="0.8" />
            <rect x="260" y="150" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
            <rect x="262" y="121" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
            <rect x="228" y="77" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
            <rect x="275" y="162" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
            <rect x="231" y="157" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
            <rect x="270" y="16" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
            <rect x="97" y="61" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
            <rect x="167" y="112" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
            <rect x="327" y="75" width="3" height="3" fill="#F4F4F1" opacity="0.25" />
            <rect x="339" y="21" width="3" height="3" fill="#F4F4F1" opacity="0.55" />
            <rect x="208" y="141" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
            <rect x="161" y="58" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
            <rect x="35" y="144" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
            <rect x="55" y="74" width="3" height="3" fill="#F4F4F1" opacity="0.25" />
            <rect x="8" y="0" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
            <rect x="26" y="120" width="3" height="3" fill="#F4F4F1" opacity="0.8" />
            <rect x="214" y="18" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
            <rect x="172" y="22" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
            <rect x="7" y="104" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
            <rect x="126" y="25" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
            <rect x="238" y="124" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
            <rect x="229" y="130" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
            <rect x="214" y="164" width="3" height="3" fill="#F4F4F1" opacity="0.25" />
            <rect x="202" y="107" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
            <rect x="138" y="151" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
            <rect x="107" y="47" width="3" height="3" fill="#F4F4F1" opacity="0.25" />
            <rect x="21" y="37" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
            <rect x="132" y="2" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
            <rect x="197" y="18" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
            <rect x="106" y="149" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
            <rect x="307" y="94" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
            <rect x="65" y="150" width="3" height="3" fill="#F4F4F1" opacity="0.4" />
            <rect x="197" y="46" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
            <line
              x1="247"
              y1="25"
              x2="273"
              y2="60"
              stroke="#F4F4F1"
              strokeOpacity=".16"
              strokeDasharray="2 4"
            />
            <line
              x1="315"
              y1="32"
              x2="295"
              y2="68"
              stroke="#F4F4F1"
              strokeOpacity=".16"
              strokeDasharray="2 4"
            />
            <line
              x1="273"
              y1="60"
              x2="284"
              y2="64"
              stroke="#F4F4F1"
              strokeOpacity=".16"
              strokeDasharray="2 4"
            />
            <line
              x1="284"
              y1="64"
              x2="295"
              y2="68"
              stroke="#F4F4F1"
              strokeOpacity=".16"
              strokeDasharray="2 4"
            />
            <line
              x1="273"
              y1="60"
              x2="258"
              y2="97"
              stroke="#F4F4F1"
              strokeOpacity=".16"
              strokeDasharray="2 4"
            />
            <line
              x1="295"
              y1="68"
              x2="321"
              y2="92"
              stroke="#F4F4F1"
              strokeOpacity=".16"
              strokeDasharray="2 4"
            />
            <rect className="tm-tw" x="245" y="23" width="4" height="4" fill="#FF4D1A" />
            <rect className="tm-tw" x="249" y="23" width="4" height="4" fill="#FF4D1A" />
            <rect className="tm-tw" x="241" y="23" width="4" height="4" fill="#FF4D1A" />
            <rect className="tm-tw" x="245" y="27" width="4" height="4" fill="#FF4D1A" />
            <rect className="tm-tw" x="245" y="19" width="4" height="4" fill="#FF4D1A" />
            <rect className="tm-tw" x="314" y="30" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="317" y="30" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="311" y="30" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="314" y="33" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="314" y="27" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="271" y="58" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="274" y="58" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="268" y="58" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="271" y="61" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="271" y="55" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="282" y="62" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="285" y="62" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="279" y="62" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="282" y="65" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="282" y="59" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="293" y="66" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="296" y="66" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="290" y="66" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="293" y="69" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="293" y="63" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="257" y="96" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="260" y="96" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="254" y="96" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="257" y="99" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="257" y="93" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="319" y="91" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="322" y="91" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="316" y="91" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="319" y="94" width="3" height="3" fill="#F4F4F1" />
            <rect className="tm-tw" x="319" y="88" width="3" height="3" fill="#F4F4F1" />
          </svg>
          <span className="tm-capt">Le studio · Paris 8e</span>
          <svg
            className="tm-eif"
            width="75"
            height="110"
            viewBox="0 0 75 110"
            fill="#2A3050"
            aria-hidden="true"
          >
            <rect x="35" y="0" width="5" height="5" />
            <rect x="35" y="5" width="5" height="5" />
            <rect x="30" y="10" width="5" height="5" />
            <rect x="35" y="10" width="5" height="5" />
            <rect x="40" y="10" width="5" height="5" />
            <rect x="30" y="15" width="5" height="5" />
            <rect x="35" y="15" width="5" height="5" />
            <rect x="40" y="15" width="5" height="5" />
            <rect x="30" y="20" width="5" height="5" />
            <rect x="40" y="20" width="5" height="5" />
            <rect x="30" y="25" width="5" height="5" />
            <rect x="35" y="25" width="5" height="5" />
            <rect x="40" y="25" width="5" height="5" />
            <rect x="25" y="30" width="5" height="5" />
            <rect x="30" y="30" width="5" height="5" />
            <rect x="40" y="30" width="5" height="5" />
            <rect x="45" y="30" width="5" height="5" />
            <rect x="25" y="35" width="5" height="5" />
            <rect x="30" y="35" width="5" height="5" />
            <rect x="35" y="35" width="5" height="5" />
            <rect x="40" y="35" width="5" height="5" />
            <rect x="45" y="35" width="5" height="5" />
            <rect x="25" y="40" width="5" height="5" />
            <rect x="45" y="40" width="5" height="5" />
            <rect x="25" y="45" width="5" height="5" />
            <rect x="45" y="45" width="5" height="5" />
            <rect x="20" y="50" width="5" height="5" />
            <rect x="25" y="50" width="5" height="5" />
            <rect x="45" y="50" width="5" height="5" />
            <rect x="50" y="50" width="5" height="5" />
            <rect x="20" y="55" width="5" height="5" />
            <rect x="25" y="55" width="5" height="5" />
            <rect x="30" y="55" width="5" height="5" />
            <rect x="35" y="55" width="5" height="5" />
            <rect x="40" y="55" width="5" height="5" />
            <rect x="45" y="55" width="5" height="5" />
            <rect x="50" y="55" width="5" height="5" />
            <rect x="20" y="60" width="5" height="5" />
            <rect x="50" y="60" width="5" height="5" />
            <rect x="15" y="65" width="5" height="5" />
            <rect x="20" y="65" width="5" height="5" />
            <rect x="50" y="65" width="5" height="5" />
            <rect x="55" y="65" width="5" height="5" />
            <rect x="15" y="70" width="5" height="5" />
            <rect x="55" y="70" width="5" height="5" />
            <rect x="15" y="75" width="5" height="5" />
            <rect x="20" y="75" width="5" height="5" />
            <rect x="25" y="75" width="5" height="5" />
            <rect x="30" y="75" width="5" height="5" />
            <rect x="35" y="75" width="5" height="5" />
            <rect x="40" y="75" width="5" height="5" />
            <rect x="45" y="75" width="5" height="5" />
            <rect x="50" y="75" width="5" height="5" />
            <rect x="55" y="75" width="5" height="5" />
            <rect x="10" y="80" width="5" height="5" />
            <rect x="15" y="80" width="5" height="5" />
            <rect x="55" y="80" width="5" height="5" />
            <rect x="60" y="80" width="5" height="5" />
            <rect x="10" y="85" width="5" height="5" />
            <rect x="25" y="85" width="5" height="5" />
            <rect x="30" y="85" width="5" height="5" />
            <rect x="35" y="85" width="5" height="5" />
            <rect x="40" y="85" width="5" height="5" />
            <rect x="45" y="85" width="5" height="5" />
            <rect x="60" y="85" width="5" height="5" />
            <rect x="5" y="90" width="5" height="5" />
            <rect x="10" y="90" width="5" height="5" />
            <rect x="20" y="90" width="5" height="5" />
            <rect x="50" y="90" width="5" height="5" />
            <rect x="60" y="90" width="5" height="5" />
            <rect x="65" y="90" width="5" height="5" />
            <rect x="5" y="95" width="5" height="5" />
            <rect x="20" y="95" width="5" height="5" />
            <rect x="50" y="95" width="5" height="5" />
            <rect x="65" y="95" width="5" height="5" />
            <rect x="0" y="100" width="5" height="5" />
            <rect x="5" y="100" width="5" height="5" />
            <rect x="15" y="100" width="5" height="5" />
            <rect x="55" y="100" width="5" height="5" />
            <rect x="65" y="100" width="5" height="5" />
            <rect x="70" y="100" width="5" height="5" />
            <rect x="0" y="105" width="5" height="5" />
            <rect x="15" y="105" width="5" height="5" />
            <rect x="55" y="105" width="5" height="5" />
            <rect x="70" y="105" width="5" height="5" />
            <rect className="tm-led" x="35" y="0" width="5" height="5" fill="#FF4D1A" />
          </svg>
          <div className="tm-floor" />
          <div className="tm-crew">
            <figure className="tm-m cm tm-j">
              <span
                className="dg pp pp-julien "
                role="button"
                tabIndex={0}
                aria-label="Julien"
                data-cur="Julien"
              >
                <span className="dg-bub">Salut, moi c’est Julien.</span>
                <span className="dg-in">
                  <img className="px dg-f" src="/px/art-c0ed2173.svg" alt="" width={80} height={144} />
                  <img
                    className="px dg-f pp-blink"
                    src="/px/pp-blink-e1b1ab88.svg"
                    alt=""
                    width={80}
                    height={144}
                  />
                  <img
                    className="px dg-f pp-walk"
                    src="/px/pp-walk-3ee822dd.svg"
                    alt=""
                    width={80}
                    height={144}
                  />
                </span>
              </span>
              <figcaption>
                <b>Julien</b>
                <span>Cofondateur</span>
              </figcaption>
            </figure>
            <figure className="tm-m cm tm-t">
              <span className="dg pp pp-theo " role="button" tabIndex={0} aria-label="Théo" data-cur="Théo">
                <span className="dg-bub">Salut, moi c’est Théo.</span>
                <span className="dg-in">
                  <img className="px dg-f" src="/px/art-18dc0d66.svg" alt="" width={80} height={144} />
                  <img
                    className="px dg-f pp-blink"
                    src="/px/pp-blink-586bff68.svg"
                    alt=""
                    width={80}
                    height={144}
                  />
                  <img
                    className="px dg-f pp-walk"
                    src="/px/pp-walk-03323202.svg"
                    alt=""
                    width={80}
                    height={144}
                  />
                </span>
              </span>
              <figcaption>
                <b>Théo</b>
                <span>Cofondateur</span>
              </figcaption>
            </figure>
            <figure className="tm-m cm tm-d">
              <span
                className="dg "
                role="button"
                tabIndex={0}
                aria-label="Doggy, le chien du studio"
                data-cur="Ouaf"
              >
                <span className="dg-bub" aria-live="polite">
                  Ouaf ! Bienvenue au studio.
                </span>
                <span className="dg-in">
                  <img
                    className="px dg-f dg-base"
                    src="/px/dg-base-b568e77d.svg"
                    alt=""
                    width={91}
                    height={87.5}
                  />
                  <img
                    className="px dg-f dg-blink"
                    src="/px/dg-blink-56a2d1ca.svg"
                    alt=""
                    width={91}
                    height={87.5}
                  />
                  <img
                    className="px dg-f dg-mouth"
                    src="/px/dg-mouth-a7699d51.svg"
                    alt=""
                    width={91}
                    height={87.5}
                  />
                </span>
              </span>
              <figcaption>
                <b>Doggy</b>
                <span>Chien du studio</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="tm-copy">
          <span className="tm-k">L’équipe</span>
          <h3 className="tm-h">
            Derrière l’écran,<span className="serif">Julien et Théo.</span>
          </h3>
          <p className="tm-txt">
            Vous échangez directement avec eux, du premier appel à la mise en ligne. Doggy, lui, s’occupe de
            l’accueil.
          </p>
          <a className="btn tm-btn mo-btn" data-go="cta">
            Réserver un appel
          </a>{' '}
          <span className="tm-note">Un appel de 30 minutes, en visio, au téléphone ou au studio.</span>{' '}
          <Link to="/le-studio" className="lnk tm-lnk">
            Découvrir le studio
          </Link>
        </div>
      </div>
    </section>
  )
}

function RealisationsRecentes() {
  return (
    <section className="mo-sec" id="m-work">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Réalisations<span className="serif">récentes.</span>
        </h2>
        <p className="mo-lead">
          Sites sur-mesure, boutiques et outils métiers, conçus et développés de bout en bout par le studio.
        </p>
      </div>
      <div className="mo-projs">
        <article className="mo-proj" data-to="/realisations/chateau-larc">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/e70252f225f7d4.png" alt="" />
            <div className="win win-shot mo-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">chateaularcgolfclub.com</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/661531aedb86a4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="mo-pmeta">
            <h3>
              <Link to="/realisations/chateau-larc">Château l’Arc Golf Club</Link>
            </h3>
            <span>Golf · Site + back-office · 2026</span>
          </div>
          <p>
            Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et
            événements.
          </p>
        </article>
        <article className="mo-proj" data-to="/realisations/stand-ing">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/b07c317bbc84a7.png" alt="" />
            <div className="win win-shot mo-win">
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
                <img className="cfg-shot" src="/images/cfe60288d854b0.png" alt="" />
              </div>
            </div>
          </div>
          <div className="mo-pmeta">
            <h3>
              <Link to="/realisations/stand-ing">Stand-ING</Link>
            </h3>
            <span>Configurateur 3D · 2026</span>
          </div>
          <p>Un configurateur de stands en ligne : le client compose, visualise et reçoit son devis.</p>
        </article>
        <article className="mo-proj" data-proj="les-bocaux-du-vexin">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/ba943c5909c9cc.png" alt="" />
            <div className="win win-shot mo-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">lesbocauxduvexin.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img
                  className="shot"
                  src="/images/4decbda594bb3c.jpg"
                  alt="La boutique Les Bocaux du Vexin"
                />
              </div>
            </div>
          </div>
          <div className="mo-pmeta">
            <h3>Les Bocaux du Vexin</h3>
            <span>E-commerce · Shopify · 2026</span>
          </div>
          <p>Une boutique Shopify simple à tenir au quotidien pour une conserverie locale.</p>
        </article>
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
            <span>Espace client · inclus dans chaque projet</span>
          </div>
          <p>Notre outil : suivi du projet, documents, messagerie et gestion du site au même endroit.</p>
        </article>
      </div>
      <div className="mo-index">
        <div className="mo-ix" data-proj="osmose-nutrition">
          <b>Osmose Nutrition</b>
          <span>E-commerce · Abonnements · 2025</span>
        </div>
        <div className="mo-ix" data-proj="ocha-and-co">
          <b>Ocha & Co.</b>
          <span>E-commerce · Shopify ·</span>
        </div>
        <div className="mo-ix" data-proj="moulin-de-balme">
          <b>Le Moulin de Balme</b>
          <span>Boulangerie · Site + back-office ·</span>
        </div>
        <div className="mo-ix" data-proj="dathy">
          <b>DATHY</b>
          <span>AMO bâtiment & TP · Site vitrine ·</span>
        </div>
        <div className="mo-ix" data-proj="housses-taxi">
          <b>Housses Taxi</b>
          <span>Fabricant · Site vitrine ·</span>
        </div>
        <div className="mo-ix" data-proj="swing-call">
          <b>Swing Call</b>
          <span>Start-up · Site produit ·</span>
        </div>
      </div>
      <div className="mo-ixf">
        <span className="mono">11 projets</span>
      </div>
      <Link to="/realisations" className="btn btn-ink mo-btn mo-btn-full">
        Toutes les réalisations
      </Link>
    </section>
  )
}

function DuCroquisAuCode() {
  return (
    <section className="mo-sec mo-exp">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Du croquis au code,<span className="serif">sans relais.</span>
        </h2>
        <p className="mo-lead">
          Six métiers portés par les mêmes personnes : ce qu’on dessine, on le construit, composant par
          composant.
        </p>
      </div>
      <div className="mo-tabs">
        <span className="on">Site internet</span>
        <span className="">Développement d’applications</span>
        <span className="">Automatisations</span>
        <span className="">SEO</span>
        <span className="">GEO</span>
        <span className="">Google Ads</span>
      </div>
      <div className="mo-rail">
        <div className="mo-track">
          <div className="mo-cell">
            <img className="px picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
            <h3>Site internet</h3>
            <p>
              <b>Sites vitrines et refontes sur-mesure</b>, rapides, accessibles et simples à mettre à jour.
            </p>
            <div className="mo-vis">
              <div className="flow">
                <span className="fl-n">Accueil</span>
                <span className="fl-l" />
                <span className="fl-n">Services</span>
                <span className="fl-l" />
                <span className="fl-n fl-on">Contact</span>
                <div className="wire">
                  <i style={{ width: '70%' }} />
                  <i style={{ width: '45%' }} />
                  <i className="blk" />
                  <i style={{ width: '60%' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="mo-cell">
            <img className="px picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
            <h3>Développement d’applications</h3>
            <p>
              <b>Applications web, espaces clients et outils métiers</b> qui tiennent la charge.
            </p>
            <div className="mo-vis">
              <div className="code">
                <div>
                  <span className="c-k">export function</span> <span className="c-f">ProjectCard</span>
                  {'({ project }) {'}
                </div>
                <div className="i1">
                  <span className="c-k">return</span> {'<'}
                  <span className="c-t">article</span> <span className="c-a">className</span>=
                  <span className="c-s">"card"</span>
                  {'>'}
                </div>
                <div className="i2">
                  {'<'}
                  <span className="c-t">h3</span>
                  {'>{project.name}</'}
                  <span className="c-t">h3</span>
                  {'>'}
                </div>
                <div className="i1">
                  {'</'}
                  <span className="c-t">article</span>
                  {'>'}
                </div>
                <div>{'}'}</div>
                <div className="c-ok">
                  <i />
                  Build réussi — déployé en production
                </div>
              </div>
            </div>
          </div>
          <div className="mo-cell">
            <img className="px picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
            <h3>Automatisations</h3>
            <p>
              <b>Moins de copier-coller, plus de temps utile.</b> Formulaires, CRM, devis et relances reliés
              entre eux.
            </p>
            <div className="mo-vis">
              <div className="auto">
                <div className="au-n">
                  <b>Formulaire de contact</b>
                  <span>Nouvelle demande</span>
                </div>
                <span className="au-l" />
                <div className="au-n">
                  <b>CRM</b>
                  <span>Fiche créée, devis préparé</span>
                </div>
                <span className="au-l" />
                <div className="au-n au-on">
                  <b>E-mail + relance J+3</b>
                  <span>Envoyé automatiquement</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mo-cell">
            <img className="px picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
            <h3>SEO</h3>
            <p>
              <b>Remonter sur Google</b> avec un site rapide, bien structuré et des contenus utiles.
            </p>
            <div className="mo-vis">
              <div className="serp">
                <div className="serp-q">
                  <svg
                    className="c-ic"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="9" cy="9" r="7.4" stroke="#77776F" strokeWidth="1.2" />
                    <path
                      d="M1.6 9H16.4M9 1.6C11 3.6 11.9 6.2 11.9 9C11.9 11.8 11 14.4 9 16.4M9 1.6C7 3.6 6.1 6.2 6.1 9C6.1 11.8 7 14.4 9 16.4"
                      stroke="#77776F"
                      strokeWidth="1.2"
                    />
                  </svg>
                  <span>agence web cannes</span>
                </div>
                <div className="serp-r">
                  <span className="serp-u">votre-site.fr › services</span>
                  <b>Votre entreprise — le titre qui donne envie de cliquer</b>{' '}
                  <span className="serp-d">
                    Une description claire, la bonne requête, et des avis visibles dans les résultats.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mo-cell">
            <img className="px picon" src="/px/picon-84c912e7.svg" alt="" width={20} height={20} />
            <h3>GEO</h3>
            <p>
              <b>Être cité par les IA</b> : ChatGPT, Perplexity et les réponses générées de Google.
            </p>
            <div className="mo-vis">
              <div className="ai">
                <div className="ai-q">Quelle agence pour refondre notre boutique ?</div>
                <div className="ai-a">
                  <span className="ai-dot" />
                  <div>
                    Pour une refonte Shopify, plusieurs studios se distinguent par…
                    <span className="ai-cite">votre-marque.fr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mo-cell">
            <img className="px picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
            <h3>Google Ads</h3>
            <p>
              <b>Des campagnes pilotées au nombre de contacts</b>, pas aux clics.
            </p>
            <div className="mo-vis">
              <div className="adp">
                <span className="adp-k">Sponsorisé</span>
                <span className="serp-u">votre-site.fr</span>{' '}
                <b>Devis en 24 h — Artisan menuisier à Cannes</b>
                <span className="serp-d">
                  Fenêtres, portes et agencement sur-mesure. Intervention dans les Alpes-Maritimes.
                </span>
                <div className="adp-s">
                  <span>Demander un devis</span>
                  <span>Nos réalisations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mo-count">
        <span>1 / 6</span>
        <div className="pixbar mo-pb">
          <span className="pb-on" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
        </div>
      </div>
    </section>
  )
}

function PourQui() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">Pour qui ?</h2>
        <p className="mo-lead">
          Des entreprises très différentes, un point commun : leur site compte vraiment dans leur activité.
        </p>
      </div>
      <div className="mo-accs">
        <div className="mo-acc mo-acc-on" data-k="pme">
          <div className="mo-acc-h">
            <img className="px picon" src="/px/picon-4780f153.svg" alt="" width={20} height={20} />
            <b>TPE & PME</b>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="mo-who">
            <img className="mo-who-img" src="/images/239e996b114e64.jpg" alt="" />
            <div className="mo-who-b">
              <h3>Un site qui fait venir des demandes, sans y passer vos soirées.</h3>
              <p>
                Artisans, cabinets, commerces, entreprises de services : un site professionnel, rapide et bien
                référencé, que vous mettez à jour vous-même, sans y passer vos soirées.
              </p>
              <div className="who-k">Ce qu’on livre</div>
              <ul>
                <li>Site vitrine sur mesure</li>
                <li>Formulaire de devis</li>
                <li>Fiche Google & avis</li>
              </ul>
              <div className="who-k">Projet de référence</div>
              <div className="mo-ref">
                Housses Taxi
                <small>Un atelier du Val-d’Oise qui fabrique des housses sur mesure pour taxis et VTC.</small>
              </div>
              <Link to="/pour-qui/tpe-pme" className="lnk who-go" data-who-go="tpe-pme">
                Voir la page
              </Link>
            </div>
          </div>
        </div>
        <div className="mo-acc" data-k="indep">
          <div className="mo-acc-h">
            <img className="px picon" src="/px/picon-91b8b92b.svg" alt="" width={20} height={20} />
            <b>Indépendants & micro-entrepreneurs</b>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="mo-acc" data-k="shop">
          <div className="mo-acc-h">
            <img className="px picon" src="/px/picon-8036a9f1.svg" alt="" width={20} height={20} />
            <b>Marques & e-commerçants</b>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="mo-acc" data-k="startup">
          <div className="mo-acc-h">
            <img className="px picon" src="/px/picon-44243463.svg" alt="" width={20} height={20} />
            <b>Start-up</b>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="mo-acc" data-k="secteurs">
          <div className="mo-acc-h">
            <img className="px picon" src="/px/picon-44172bb4.svg" alt="" width={20} height={20} />
            <b>Par secteur : golfs, boulangeries…</b>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

function CinqEtapesZeroZone() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Cinq étapes.<span className="serif">Zéro zone grise.</span>
        </h2>
        <p className="mo-lead">
          Vous savez toujours où en est votre projet. Un site vitrine prend en moyenne 4 à 8 semaines, selon
          sa complexité et le rythme des échanges.
        </p>
      </div>
      <div className="pixbar mo-pbar">
        <span className="pb-on" />
        <span className="pb-on" />
        <span className="pb-on" />
        <span className="pb-on" />
        <span className="pb-on" />
        <span className="pb-on" />
        <span className="pb-on" />
        <span className="pb-on" />
        <span className="pb-on" />
        <span className="pb-on" />
        <span className="pb-on" />
        <span className="pb-on" />
        <span className="pb-on" />
        <span className="pb-cur" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
        <span className="pb-off" />
      </div>
      <div className="mo-steps">
        <div className="mo-st ">
          <i />
          <div>
            <h3>Cadrer</h3>
            <p>
              Atelier, objectifs, arborescence et devis ferme. On sait ce qu’on construit avant de dessiner.
            </p>
          </div>
        </div>
        <div className="mo-st ">
          <i />
          <div>
            <h3>Designer</h3>
            <p>Direction artistique, maquettes Figma et prototype cliquable, validés écran par écran.</p>
          </div>
        </div>
        <div className="mo-st cur">
          <i />
          <div>
            <h3>
              Développer<em>En cours</em>
            </h3>
            <p>Intégration, CMS ou Shopify, automatisations. Une préprod ouverte pour tester en continu.</p>
          </div>
        </div>
        <div className="mo-st todo">
          <i />
          <div>
            <h3>Lancer</h3>
            <p>Mise en ligne, redirections, SEO technique et prise en main par votre équipe.</p>
          </div>
        </div>
        <div className="mo-st todo">
          <i />
          <div>
            <h3>Faire grandir</h3>
            <p>Mesure, tests et évolutions au fil de l’eau, quand vous en avez besoin.</p>
          </div>
        </div>
      </div>
      <p className="mo-note">
        Ici, un projet en cours de développement. <b>Vous suivez chaque étape en direct dans Orion Admin</b>,
        avec une préprod pour tester avant la mise en ligne.
      </p>
    </section>
  )
}

function MoAv() {
  return (
    <section className="mo-sec mo-av">
      <div className="mo-avc">
        <img className="mo-av-bg" src="/images/729bb5e7cb4d36.png" alt="" />
        <div className="mo-av-veil" />
        <div className="mo-av-in">
          <div className="av-k mo-av-k">
            <span>Avis clients</span>
            <span>Ils en parlent mieux que nous</span>
          </div>
          <img className="px av-q" src="/px/av-q-4a640bcb.svg" alt="" width={44} height={32} />
          <p className="mo-av-txt">
            Leur expertise sur le développement sur-mesure est impressionnante. Une équipe à l’écoute,
            professionnelle, et qui livre dans les temps.
          </p>
          <div className="mo-av-by">
            <span className="av-logo mo-av-logo">
              <img src="/images/4261b99ecbbc3b.png" alt="Association des Entrepreneurs du Vexin" />
            </span>
            <div>
              <b>Thierry Cordier</b>
              <span>Association des Entrepreneurs du Vexin · Site vitrine</span>
            </div>
          </div>
          <div className="mo-av-r">
            <div>
              <div className="av-rk">Note Google</div>
              <div className="av-score mo-score">
                <b>5,0</b>
                <span>/ 5</span>
              </div>
            </div>
            <div className="mo-av-stars">
              <svg
                className="pxstar"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8" y="0" width="2" height="2" fill="#FF4D1A" />
                <rect x="6" y="2" width="6" height="2" fill="#FF4D1A" />
                <rect x="6" y="4" width="6" height="2" fill="#FF4D1A" />
                <rect x="0" y="6" width="18" height="2" fill="#FF4D1A" />
                <rect x="2" y="8" width="14" height="2" fill="#FF4D1A" />
                <rect x="4" y="10" width="10" height="2" fill="#FF4D1A" />
                <rect x="2" y="12" width="6" height="2" fill="#FF4D1A" />
                <rect x="10" y="12" width="6" height="2" fill="#FF4D1A" />
                <rect x="2" y="14" width="4" height="2" fill="#FF4D1A" />
                <rect x="12" y="14" width="4" height="2" fill="#FF4D1A" />
              </svg>
              <svg
                className="pxstar"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8" y="0" width="2" height="2" fill="#FF4D1A" />
                <rect x="6" y="2" width="6" height="2" fill="#FF4D1A" />
                <rect x="6" y="4" width="6" height="2" fill="#FF4D1A" />
                <rect x="0" y="6" width="18" height="2" fill="#FF4D1A" />
                <rect x="2" y="8" width="14" height="2" fill="#FF4D1A" />
                <rect x="4" y="10" width="10" height="2" fill="#FF4D1A" />
                <rect x="2" y="12" width="6" height="2" fill="#FF4D1A" />
                <rect x="10" y="12" width="6" height="2" fill="#FF4D1A" />
                <rect x="2" y="14" width="4" height="2" fill="#FF4D1A" />
                <rect x="12" y="14" width="4" height="2" fill="#FF4D1A" />
              </svg>
              <svg
                className="pxstar"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8" y="0" width="2" height="2" fill="#FF4D1A" />
                <rect x="6" y="2" width="6" height="2" fill="#FF4D1A" />
                <rect x="6" y="4" width="6" height="2" fill="#FF4D1A" />
                <rect x="0" y="6" width="18" height="2" fill="#FF4D1A" />
                <rect x="2" y="8" width="14" height="2" fill="#FF4D1A" />
                <rect x="4" y="10" width="10" height="2" fill="#FF4D1A" />
                <rect x="2" y="12" width="6" height="2" fill="#FF4D1A" />
                <rect x="10" y="12" width="6" height="2" fill="#FF4D1A" />
                <rect x="2" y="14" width="4" height="2" fill="#FF4D1A" />
                <rect x="12" y="14" width="4" height="2" fill="#FF4D1A" />
              </svg>
              <svg
                className="pxstar"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8" y="0" width="2" height="2" fill="#FF4D1A" />
                <rect x="6" y="2" width="6" height="2" fill="#FF4D1A" />
                <rect x="6" y="4" width="6" height="2" fill="#FF4D1A" />
                <rect x="0" y="6" width="18" height="2" fill="#FF4D1A" />
                <rect x="2" y="8" width="14" height="2" fill="#FF4D1A" />
                <rect x="4" y="10" width="10" height="2" fill="#FF4D1A" />
                <rect x="2" y="12" width="6" height="2" fill="#FF4D1A" />
                <rect x="10" y="12" width="6" height="2" fill="#FF4D1A" />
                <rect x="2" y="14" width="4" height="2" fill="#FF4D1A" />
                <rect x="12" y="14" width="4" height="2" fill="#FF4D1A" />
              </svg>
              <svg
                className="pxstar"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8" y="0" width="2" height="2" fill="#FF4D1A" />
                <rect x="6" y="2" width="6" height="2" fill="#FF4D1A" />
                <rect x="6" y="4" width="6" height="2" fill="#FF4D1A" />
                <rect x="0" y="6" width="18" height="2" fill="#FF4D1A" />
                <rect x="2" y="8" width="14" height="2" fill="#FF4D1A" />
                <rect x="4" y="10" width="10" height="2" fill="#FF4D1A" />
                <rect x="2" y="12" width="6" height="2" fill="#FF4D1A" />
                <rect x="10" y="12" width="6" height="2" fill="#FF4D1A" />
                <rect x="2" y="14" width="4" height="2" fill="#FF4D1A" />
                <rect x="12" y="14" width="4" height="2" fill="#FF4D1A" />
              </svg>
            </div>
          </div>
          <p className="mo-av-p">
            Les avis laissés par nos clients sur notre fiche Google, après la mise en ligne de leur projet.
          </p>
          <a className="btn av-btn mo-btn">Lire les avis Google</a>{' '}
          <a className="av-lnk mo-av-lnk">Voir le projet AEV</a>
        </div>
      </div>
    </section>
  )
}

function LesQuestionsQuOn() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Les questions<span className="serif">qu’on nous pose.</span>
        </h2>
        <p className="mo-lead">
          Budget, délais, technologie, suivi : les réponses aux questions qui reviennent avant chaque projet.
        </p>
      </div>
      <div className="mo-faq">
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien coûte un projet ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <p>
            Chaque projet est chiffré sur devis après un premier échange. Dans le formulaire de contact, vous
            indiquez une fourchette de budget : on vous oriente vers la bonne approche dès le premier appel.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien de temps faut-il pour un site ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Webflow, Shopify ou code sur-mesure ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Est-ce que je pourrai modifier mon site seul ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Travaillez-vous en anglais et avec des clients à l’étranger ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Que se passe-t-il après la mise en ligne ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mo-lnk-c">
        <a className="lnk">Une autre question ? Écrivez-nous</a>
      </div>
    </section>
  )
}

function Ressources() {
  return (
    <section className="mo-sec mo-res">
      <div className="mo-shead mo-shead-row">
        <h2 className="mo-h2">Ressources</h2>
        <Link to="/ressources" className="lnk">
          Tous les articles
        </Link>
      </div>
      <div className="mo-rail">
        <div className="mo-track">
          <a className="mo-art">
            <img src="/images/1547cebce5d492.png" alt="" />
            <div className="k">
              <span>Guide</span>
              <span>8 min de lecture</span>
            </div>
            <h3>Shopify, Webflow ou sur-mesure : comment choisir en 2026</h3>
            <span className="more">Lire l’article</span>
          </a>
          <Link to="/ressources/etre-cite-par-chatgpt-perplexity" className="mo-art">
            <img src="/images/b665a1ab308a17.png" alt="" />
            <div className="k">
              <span>SEO & GEO</span>
              <span>11 min de lecture</span>
            </div>
            <h3>Être cité par ChatGPT et Perplexity : ce qui marche vraiment</h3>
            <span className="more">Lire l’article</span>
          </Link>
          <a className="mo-art">
            <img src="/images/204444271e8f06.png" alt="" />
            <div className="k">
              <span>Méthode</span>
              <span>6 min de lecture</span>
            </div>
            <h3>Refonte de site : le cahier des charges en douze questions</h3>
            <span className="more">Lire l’article</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function Mobile() {
  return (
    <section className="artboard mo">
      <MoNav />
      <MoHero />
      <MoMedia />
      <MoClients />
      <OrionStudioCEst />
      <RealisationsRecentes />
      <DuCroquisAuCode />
      <PourQui />
      <CinqEtapesZeroZone />
      <MoAv />
      <LesQuestionsQuOn />
      <Ressources />
      <MobileFooter />
    </section>
  )
}
