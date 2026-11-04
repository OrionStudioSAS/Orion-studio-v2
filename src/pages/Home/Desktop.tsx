import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Clients } from '../../components/shared/Clients'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <h1 className="h1" aria-label="Agence de développement web pour les marques qui voient loin.">
        Agence de développement web
        <span className="serif">
          pour les <span className="rot">marques qui voient loin.</span>
        </span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Orion Studio conçoit et développe des sites sur-mesure, des boutiques Shopify et des applications
          web. Une équipe à taille humaine basée à Paris, du premier croquis à la mise en ligne, sans
          intermédiaire.
        </p>
        <div className="hero-cta">
          <div className="hero-btns">
            <a className="btn btn-ink" data-go="cta">
              Démarrer un projet <span className="kbd">P</span>
            </a>
            <a className="btn btn-ghost" data-go="work">
              Voir les réalisations
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
            <span>5/5 sur Google · Paris · France et international · FR / EN</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media">
      <div className="hm-layer">
        <img
          src="/images/e6d0322ad0257f.png"
          alt="Une baie la nuit sous la constellation d’Orion, en pixel art"
        />
        <img className="hero-orig" src="/images/c209a53cbba40f.jpg" alt="La même scène, peinture d’origine" />
        <i className="betel" style={{ left: '698px', top: '106px' }} />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="px omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde votre site ensemble ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.maison-arlette.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site, ou décrivez votre projet</span>
          </div>
          <div className="ch2-foot">
            <div className="ch2-l">
              <span className="ib">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 1V13M1 7H13" stroke="#0E0E0C" strokeWidth="1.4" />
                </svg>
              </span>
              <span className="ib">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
              <span className="tg">
                <img className="px omark" src="/px/omark-214dbacb.svg" alt="" width={14} height={14} />
                <b>Analyse complète</b>
              </span>
              <span className="cr">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
                </svg>
                Design
              </span>
              <span className="cr">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
                </svg>
                SEO
              </span>
              <span className="cr">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
                </svg>
                Vitesse
              </span>
              <span className="cr">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
                </svg>
                Conversion
              </span>
            </div>
            <span className="send ch2-send">
              Analyser mon site <span className="kbd">↵</span>
            </span>
          </div>
        </div>
        <div className="ch2-sug">
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
        <div className="ch2-note">
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
      <div className="toggle" role="group" aria-label="Rendu de l’image">
        <span className="on" data-v="px" role="button" tabIndex={0}>
          <i />
          PIXEL
        </span>
        <span data-v="orig" role="button" tabIndex={0}>
          <i />
          ORIGINAL
        </span>
      </div>
      <div className="capt">
        22 h 40 — <b>Bételgeuse</b>, l’étoile rouge d’Orion
      </div>
    </div>
  )
}

function OrionStudioCEst() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="mf">
        <div className="mf-k">
          <span>Le studio</span>
          <span>Paris · France et international · FR / EN</span>
        </div>
        <h2 className="mf-h">
          <div className="mf-l">
            <span className="mf-t ">Orion Studio, c’est</span>
            <img
              className="mf-pic"
              src="/images/a4d016edd40d8d.png"
              alt="Julien et Théo, fondateurs d’Orion Studio"
            />
          </div>
          <div className="mf-l">
            <span className="mf-t ">une équipe à taille humaine,</span>
          </div>
          <div className="mf-l">
            <span className="mf-t ">basée à Paris</span>
            <img className="mf-pic" src="/images/417a770a7fa506.png" alt="Une baie la nuit, en pixel art" />
          </div>
          <div className="mf-l">
            <span className="mf-t mf-m">qui dessine</span>
            <span className="mf-ui mf-figma" title="Figma">
              <img className="px" src="/px/art-13e55d0a.svg" alt="" width={40} height={60} />
            </span>
            <span className="mf-t mf-m">et code</span>
            <span className="mf-ui mf-code">
              <i className="k" style={{ width: '46%' }} />
              <i style={{ width: '70%', marginLeft: '10px' }} />
              <i className="s" style={{ width: '38%', marginLeft: '10px' }} />
              <i style={{ width: '24%' }} />
            </span>
          </div>
          <div className="mf-l">
            <span className="mf-t mf-m">des sites qui font venir</span>
            <span className="mf-ui mf-site">
              <span className="mf-bar">
                <b />
                <b />
                <b />
              </span>
              <img src="/images/7de98511bd76f4.png" alt="" />
            </span>
            <span className="mf-t mf-m mf-s">des clients.</span>
          </div>
        </h2>
        <div className="tm">
          <div className="tm-copy">
            <span className="tm-k">L’équipe</span>
            <h3 className="tm-h">
              Derrière l’écran,<span className="serif">Julien et Théo.</span>
            </h3>
            <p className="tm-txt">
              Vous échangez directement avec eux, du premier appel à la mise en ligne. Doggy, lui, s’occupe de
              l’accueil.
            </p>
            <div className="tm-btns">
              <a className="btn tm-btn" data-go="cta">
                Réserver un appel
              </a>
              <Link to="/le-studio" className="lnk tm-lnk">
                Découvrir le studio
              </Link>
            </div>
            <span className="tm-note">Un appel de 30 minutes, en visio, au téléphone ou au studio.</span>
          </div>
          <div className="tm-stage">
            <svg
              className="tm-sky"
              viewBox="0 0 836 440"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <rect x="331" y="77" width="3" height="3" fill="#F4F4F1" opacity="0.25" />
              <rect x="74" y="48" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
              <rect x="519" y="109" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
              <rect x="444" y="214" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="92" y="217" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
              <rect x="228" y="31" width="3" height="3" fill="#F4F4F1" opacity="0.25" />
              <rect x="226" y="23" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
              <rect x="429" y="73" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
              <rect x="573" y="92" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="381" y="49" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
              <rect x="633" y="105" width="3" height="3" fill="#F4F4F1" opacity="0.8" />
              <rect x="795" y="160" width="3" height="3" fill="#F4F4F1" opacity="0.8" />
              <rect x="370" y="153" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="715" y="124" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
              <rect x="537" y="253" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="294" y="37" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="168" y="175" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="431" y="20" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
              <rect x="348" y="179" width="3" height="3" fill="#F4F4F1" opacity="0.8" />
              <rect x="70" y="47" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="713" y="33" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
              <rect x="662" y="228" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="684" y="177" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="363" y="86" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="60" y="111" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="756" y="126" width="3" height="3" fill="#F4F4F1" opacity="0.8" />
              <rect x="508" y="41" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="411" y="142" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="563" y="142" width="3" height="3" fill="#F4F4F1" opacity="0.55" />
              <rect x="699" y="194" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="84" y="90" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="674" y="119" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="603" y="93" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
              <rect x="4" y="74" width="3" height="3" fill="#F4F4F1" opacity="0.55" />
              <rect x="624" y="163" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
              <rect x="467" y="200" width="3" height="3" fill="#F4F4F1" opacity="0.8" />
              <rect x="403" y="53" width="3" height="3" fill="#F4F4F1" opacity="0.8" />
              <rect x="63" y="97" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="451" y="83" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
              <rect x="615" y="26" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
              <rect x="580" y="77" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
              <rect x="628" y="13" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="628" y="192" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
              <rect x="355" y="186" width="3" height="3" fill="#F4F4F1" opacity="0.25" />
              <rect x="118" y="249" width="3" height="3" fill="#F4F4F1" opacity="0.8" />
              <rect x="495" y="159" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="104" y="175" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="708" y="82" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="540" y="185" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
              <rect x="776" y="270" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
              <rect x="712" y="133" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="364" y="114" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="627" y="99" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="757" y="116" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="364" y="14" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
              <rect x="483" y="132" width="2" height="2" fill="#F4F4F1" opacity="0.55" />
              <rect x="457" y="178" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
              <rect x="225" y="52" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="201" y="172" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="639" y="0" width="3" height="3" fill="#F4F4F1" opacity="0.55" />
              <rect x="818" y="43" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="801" y="102" width="3" height="3" fill="#F4F4F1" opacity="0.4" />
              <rect x="444" y="170" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="474" y="205" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="174" y="65" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="604" y="238" width="2" height="2" fill="#F4F4F1" opacity="0.8" />
              <rect x="673" y="179" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="21" y="7" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <rect x="444" y="99" width="2" height="2" fill="#F4F4F1" opacity="0.25" />
              <rect x="257" y="108" width="2" height="2" fill="#F4F4F1" opacity="0.4" />
              <line
                x1="658"
                y1="39"
                x2="700"
                y2="94"
                stroke="#F4F4F1"
                strokeOpacity=".16"
                strokeDasharray="2 4"
              />
              <line
                x1="769"
                y1="49"
                x2="736"
                y2="107"
                stroke="#F4F4F1"
                strokeOpacity=".16"
                strokeDasharray="2 4"
              />
              <line
                x1="700"
                y1="94"
                x2="718"
                y2="101"
                stroke="#F4F4F1"
                strokeOpacity=".16"
                strokeDasharray="2 4"
              />
              <line
                x1="718"
                y1="101"
                x2="736"
                y2="107"
                stroke="#F4F4F1"
                strokeOpacity=".16"
                strokeDasharray="2 4"
              />
              <line
                x1="700"
                y1="94"
                x2="676"
                y2="154"
                stroke="#F4F4F1"
                strokeOpacity=".16"
                strokeDasharray="2 4"
              />
              <line
                x1="736"
                y1="107"
                x2="778"
                y2="147"
                stroke="#F4F4F1"
                strokeOpacity=".16"
                strokeDasharray="2 4"
              />
              <rect className="tm-tw" x="656" y="37" width="4" height="4" fill="#FF4D1A" />
              <rect className="tm-tw" x="660" y="37" width="4" height="4" fill="#FF4D1A" />
              <rect className="tm-tw" x="652" y="37" width="4" height="4" fill="#FF4D1A" />
              <rect className="tm-tw" x="656" y="41" width="4" height="4" fill="#FF4D1A" />
              <rect className="tm-tw" x="656" y="33" width="4" height="4" fill="#FF4D1A" />
              <rect className="tm-tw" x="768" y="48" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="770" y="48" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="764" y="48" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="768" y="51" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="768" y="45" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="698" y="93" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="702" y="93" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="696" y="93" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="698" y="96" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="698" y="90" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="716" y="99" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="720" y="99" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="714" y="99" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="716" y="102" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="716" y="96" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="734" y="105" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="738" y="105" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="732" y="105" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="734" y="108" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="734" y="102" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="674" y="153" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="678" y="153" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="672" y="153" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="674" y="156" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="674" y="150" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="776" y="145" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="780" y="145" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="774" y="145" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="776" y="148" width="3" height="3" fill="#F4F4F1" />
              <rect className="tm-tw" x="776" y="142" width="3" height="3" fill="#F4F4F1" />
            </svg>
            <span className="tm-capt">Le studio · Paris 8e</span>
            <svg
              className="tm-eif"
              width="135"
              height="198"
              viewBox="0 0 135 198"
              fill="#2A3050"
              aria-hidden="true"
            >
              <rect x="63" y="0" width="9" height="9" />
              <rect x="63" y="9" width="9" height="9" />
              <rect x="54" y="18" width="9" height="9" />
              <rect x="63" y="18" width="9" height="9" />
              <rect x="72" y="18" width="9" height="9" />
              <rect x="54" y="27" width="9" height="9" />
              <rect x="63" y="27" width="9" height="9" />
              <rect x="72" y="27" width="9" height="9" />
              <rect x="54" y="36" width="9" height="9" />
              <rect x="72" y="36" width="9" height="9" />
              <rect x="54" y="45" width="9" height="9" />
              <rect x="63" y="45" width="9" height="9" />
              <rect x="72" y="45" width="9" height="9" />
              <rect x="45" y="54" width="9" height="9" />
              <rect x="54" y="54" width="9" height="9" />
              <rect x="72" y="54" width="9" height="9" />
              <rect x="81" y="54" width="9" height="9" />
              <rect x="45" y="63" width="9" height="9" />
              <rect x="54" y="63" width="9" height="9" />
              <rect x="63" y="63" width="9" height="9" />
              <rect x="72" y="63" width="9" height="9" />
              <rect x="81" y="63" width="9" height="9" />
              <rect x="45" y="72" width="9" height="9" />
              <rect x="81" y="72" width="9" height="9" />
              <rect x="45" y="81" width="9" height="9" />
              <rect x="81" y="81" width="9" height="9" />
              <rect x="36" y="90" width="9" height="9" />
              <rect x="45" y="90" width="9" height="9" />
              <rect x="81" y="90" width="9" height="9" />
              <rect x="90" y="90" width="9" height="9" />
              <rect x="36" y="99" width="9" height="9" />
              <rect x="45" y="99" width="9" height="9" />
              <rect x="54" y="99" width="9" height="9" />
              <rect x="63" y="99" width="9" height="9" />
              <rect x="72" y="99" width="9" height="9" />
              <rect x="81" y="99" width="9" height="9" />
              <rect x="90" y="99" width="9" height="9" />
              <rect x="36" y="108" width="9" height="9" />
              <rect x="90" y="108" width="9" height="9" />
              <rect x="27" y="117" width="9" height="9" />
              <rect x="36" y="117" width="9" height="9" />
              <rect x="90" y="117" width="9" height="9" />
              <rect x="99" y="117" width="9" height="9" />
              <rect x="27" y="126" width="9" height="9" />
              <rect x="99" y="126" width="9" height="9" />
              <rect x="27" y="135" width="9" height="9" />
              <rect x="36" y="135" width="9" height="9" />
              <rect x="45" y="135" width="9" height="9" />
              <rect x="54" y="135" width="9" height="9" />
              <rect x="63" y="135" width="9" height="9" />
              <rect x="72" y="135" width="9" height="9" />
              <rect x="81" y="135" width="9" height="9" />
              <rect x="90" y="135" width="9" height="9" />
              <rect x="99" y="135" width="9" height="9" />
              <rect x="18" y="144" width="9" height="9" />
              <rect x="27" y="144" width="9" height="9" />
              <rect x="99" y="144" width="9" height="9" />
              <rect x="108" y="144" width="9" height="9" />
              <rect x="18" y="153" width="9" height="9" />
              <rect x="45" y="153" width="9" height="9" />
              <rect x="54" y="153" width="9" height="9" />
              <rect x="63" y="153" width="9" height="9" />
              <rect x="72" y="153" width="9" height="9" />
              <rect x="81" y="153" width="9" height="9" />
              <rect x="108" y="153" width="9" height="9" />
              <rect x="9" y="162" width="9" height="9" />
              <rect x="18" y="162" width="9" height="9" />
              <rect x="36" y="162" width="9" height="9" />
              <rect x="90" y="162" width="9" height="9" />
              <rect x="108" y="162" width="9" height="9" />
              <rect x="117" y="162" width="9" height="9" />
              <rect x="9" y="171" width="9" height="9" />
              <rect x="36" y="171" width="9" height="9" />
              <rect x="90" y="171" width="9" height="9" />
              <rect x="117" y="171" width="9" height="9" />
              <rect x="0" y="180" width="9" height="9" />
              <rect x="9" y="180" width="9" height="9" />
              <rect x="27" y="180" width="9" height="9" />
              <rect x="99" y="180" width="9" height="9" />
              <rect x="117" y="180" width="9" height="9" />
              <rect x="126" y="180" width="9" height="9" />
              <rect x="0" y="189" width="9" height="9" />
              <rect x="27" y="189" width="9" height="9" />
              <rect x="99" y="189" width="9" height="9" />
              <rect x="126" y="189" width="9" height="9" />
              <rect className="tm-led" x="63" y="0" width="9" height="9" fill="#FF4D1A" />
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
                    <img className="px dg-f" src="/px/art-44f04d8d.svg" alt="" width={140} height={252} />
                    <img
                      className="px dg-f pp-blink"
                      src="/px/pp-blink-9e4e5c3f.svg"
                      alt=""
                      width={140}
                      height={252}
                    />
                    <img
                      className="px dg-f pp-walk"
                      src="/px/pp-walk-93d15303.svg"
                      alt=""
                      width={140}
                      height={252}
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
                    <img className="px dg-f" src="/px/art-d2be32b3.svg" alt="" width={140} height={252} />
                    <img
                      className="px dg-f pp-blink"
                      src="/px/pp-blink-e686656a.svg"
                      alt=""
                      width={140}
                      height={252}
                    />
                    <img
                      className="px dg-f pp-walk"
                      src="/px/pp-walk-926b93ba.svg"
                      alt=""
                      width={140}
                      height={252}
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
                      src="/px/dg-base-05b76fc7.svg"
                      alt=""
                      width={156}
                      height={150}
                    />
                    <img
                      className="px dg-f dg-blink"
                      src="/px/dg-blink-a4a1e48c.svg"
                      alt=""
                      width={156}
                      height={150}
                    />
                    <img
                      className="px dg-f dg-mouth"
                      src="/px/dg-mouth-9dece0b7.svg"
                      alt=""
                      width={156}
                      height={150}
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
        </div>
      </div>
    </section>
  )
}

function RealisationsRecentes() {
  return (
    <section className="sec" style={{ padding: '0' }} id="d-work">
      <div className="shead in" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Réalisations
          <br />
          <span className="serif">récentes.</span>
        </h2>
        <p className="lead">
          Sites sur-mesure, boutiques et outils métiers, conçus et développés de bout en bout par le studio.
        </p>
      </div>
      <div className="proj-grid">
        <article className="p-a" data-to="/realisations/chateau-larc">
          <div className="p-media">
            <img src="/images/55a80d70f3d20a.png" alt="" />
            <div className="win win-shot win-golf">
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
                <img
                  className="shot"
                  src="/images/661531aedb86a4.jpg"
                  alt="Page d’accueil du site du Château l’Arc Golf Club"
                />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">
              <Link to="/realisations/chateau-larc">Château l’Arc Golf Club</Link>
            </h3>
            <span className="p-tag">Golf · Site + back-office · 2026</span>
          </div>
          <p className="p-desc">
            Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et
            événements.
          </p>
        </article>
        <article className="p-b" data-to="/realisations/stand-ing">
          <div className="p-media">
            <img src="/images/2c63fe08cd774a.png" alt="" />
            <div className="win win-stand">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Stand-ING — Configurateur de stand 3D</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img
                  className="cfg-shot"
                  src="/images/cfe60288d854b0.png"
                  alt="Configurateur de stand 3D Stand-ING"
                />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">
              <Link to="/realisations/stand-ing">Stand-ING</Link>
            </h3>
            <span className="p-tag">Configurateur 3D · 2026</span>
          </div>
          <p className="p-desc">
            Un configurateur de stands en ligne : le client compose, visualise et reçoit son devis.
          </p>
        </article>
        <article className="p-c" data-proj="les-bocaux-du-vexin" style={{ cursor: 'pointer' }}>
          <div className="p-media">
            <img src="/images/07246a74f6555c.png" alt="" />
            <div className="win win-shot win-golf win-bv">
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
          <div className="p-meta">
            <h3 className="p-name">Les Bocaux du Vexin</h3>
            <span className="p-tag">E-commerce · Shopify · 2026</span>
          </div>
          <p className="p-desc">
            Une boutique Shopify simple à tenir au quotidien pour une conserverie locale.
          </p>
        </article>
        <article
          className="p-d"
          data-proj="orion-admin"
          style={{ cursor: 'pointer' }}
          data-to="/realisations/chateau-larc"
        >
          <div className="p-media">
            <img src="/images/4b8094654fed91.png" alt="" />
            <div className="win win-shot win-adm">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Orion Admin — Château l’Arc Golf Club</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img
                  className="shot"
                  src="/images/94f1f7140db692.jpg"
                  alt="Accueil d’Orion Admin pour le Château l’Arc Golf Club"
                />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">
              <Link to="/realisations/chateau-larc">Orion Admin</Link>
            </h3>
            <span className="p-tag">Espace client · inclus dans chaque projet</span>
          </div>
          <p className="p-desc">
            Notre outil : suivi du projet, documents, messagerie et gestion du site au même endroit.
          </p>
        </article>
      </div>
      <div className="index">
        <div className="ix-row" data-proj="osmose-nutrition">
          <span className="n">Osmose Nutrition</span>
          <span className="t">E-commerce · Abonnements</span>
          <span className="y">2025</span>
        </div>
        <div className="ix-row" data-proj="ocha-and-co">
          <span className="n">Ocha & Co.</span>
          <span className="t">E-commerce · Shopify</span>
          <span className="y" />
        </div>
        <div className="ix-row" data-proj="moulin-de-balme">
          <span className="n">Le Moulin de Balme</span>
          <span className="t">Boulangerie · Site + back-office</span>
          <span className="y" />
        </div>
        <div className="ix-row" data-proj="dathy">
          <span className="n">DATHY</span>
          <span className="t">AMO bâtiment & TP · Site vitrine</span>
          <span className="y" />
        </div>
        <div className="ix-row" data-proj="housses-taxi">
          <span className="n">Housses Taxi</span>
          <span className="t">Fabricant · Site vitrine</span>
          <span className="y" />
        </div>
        <div className="ix-row" data-proj="swing-call">
          <span className="n">Swing Call</span>
          <span className="t">Start-up · Site produit</span>
          <span className="y" />
        </div>
      </div>
      <div className="ix-foot">
        <span className="mono">11 projets</span>
        <Link to="/realisations" className="btn btn-ink">
          Toutes les réalisations
        </Link>
      </div>
    </section>
  )
}

function DuCroquisAuCode() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Du croquis au code,
          <br />
          <span className="serif">sans relais.</span>
        </h2>
        <p className="lead">
          Six métiers portés par les mêmes personnes : ce qu’on dessine, on le construit, composant par
          composant.
        </p>
      </div>
      <div className="bento">
        <div className="cell e-site">
          <img className="px picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <h3>Site internet</h3>
          <p>
            <b>Sites vitrines et refontes sur-mesure</b>, rapides, accessibles et simples à mettre à jour.
          </p>
          <div className="vis">
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
        <div className="cell e-dev">
          <img className="px picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
          <h3>Développement d’applications</h3>
          <p>
            <b>Applications web, espaces clients et outils métiers</b> qui tiennent la charge.
          </p>
          <div className="vis">
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
        <div className="cell e-auto">
          <img className="px picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <h3>Automatisations</h3>
          <p>
            <b>Moins de copier-coller, plus de temps utile.</b> Formulaires, CRM, devis et relances reliés
            entre eux.
          </p>
          <div className="vis">
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
        <div className="cell e-seo">
          <img className="px picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
          <h3>SEO</h3>
          <p>
            <b>Remonter sur Google</b> avec un site rapide, bien structuré et des contenus utiles.
          </p>
          <div className="vis">
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
        <div className="cell e-geo">
          <img className="px picon" src="/px/picon-84c912e7.svg" alt="" width={20} height={20} />
          <h3>GEO</h3>
          <p>
            <b>Être cité par les IA</b> : ChatGPT, Perplexity et les réponses générées de Google.
          </p>
          <div className="vis">
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
        <div className="cell e-ads">
          <img className="px picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
          <h3>Google Ads</h3>
          <p>
            <b>Des campagnes pilotées au nombre de contacts</b>, pas aux clics.
          </p>
          <div className="vis">
            <div className="adp">
              <span className="adp-k">Sponsorisé</span>
              <span className="serp-u">votre-site.fr</span> <b>Devis en 24 h — Artisan menuisier à Cannes</b>
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
    </section>
  )
}

function PourQui() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">Pour qui ?</h2>
        <p className="lead">
          Des entreprises très différentes, un point commun : leur site compte vraiment dans leur activité.
        </p>
      </div>
      <div className="who">
        <div className="who-list">
          <div className="on" data-k="pme">
            <img className="px picon" src="/px/picon-4780f153.svg" alt="" width={20} height={20} />
            TPE & PME
            <span className="mk" />
          </div>
          <div className="" data-k="indep">
            <img className="px picon" src="/px/picon-00814f13.svg" alt="" width={20} height={20} />
            Indépendants & micro-entrepreneurs
            <span className="mk" />
          </div>
          <div className="" data-k="shop">
            <img className="px picon" src="/px/picon-808b4de1.svg" alt="" width={20} height={20} />
            Marques & e-commerçants
            <span className="mk" />
          </div>
          <div className="" data-k="startup">
            <img className="px picon" src="/px/picon-f0c33abd.svg" alt="" width={20} height={20} />
            Start-up
            <span className="mk" />
          </div>
          <div className="" data-k="secteurs">
            <img className="px picon" src="/px/picon-480b3e48.svg" alt="" width={20} height={20} />
            Par secteur : golfs, boulangeries…
            <span className="mk" />
          </div>
        </div>
        <div className="who-p">
          <img
            className="who-img"
            src="/images/231a9906889e87.png"
            alt="Parcours de golf en Provence, en pixel art"
          />
          <div className="who-pin">
            <h3>Remplir les départs, fidéliser les membres.</h3>
            <p className="lead">
              Site de golf, réservation de départs en ligne, espace membres, boutique du pro-shop et
              back-office pour les événements : tout ce qu’un club gère au quotidien, au même endroit.
            </p>
            <div className="who-cols">
              <div>
                <div className="who-k">Ce qu’on livre</div>
                <ul>
                  <li>Site et réservation de départs</li>
                  <li>Espace membres et abonnements</li>
                  <li>Back-office événements et offres</li>
                </ul>
              </div>
              <div>
                <div className="who-k">Projet de référence</div>
                <div className="who-ref">
                  Château l’Arc Golf Club
                  <small>Un site qui donne envie de venir jouer, géré par l’équipe du club.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CinqEtapesZeroZone() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Cinq étapes.
          <br />
          <span className="serif">Zéro zone grise.</span>
        </h2>
        <p className="lead">
          Vous savez toujours où en est votre projet. Un site vitrine prend en moyenne 4 à 8 semaines, selon
          sa complexité et le rythme des échanges.
        </p>
      </div>
      <div className="steps">
        <div className="pixbar">
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
          <span className="pb-off" />
        </div>
        <div className="st-row">
          <div className="st ">
            <h3>
              <i />
              Cadrer
            </h3>
            <p>
              Atelier, objectifs, arborescence et devis ferme. On sait ce qu’on construit avant de dessiner.
            </p>
          </div>
          <div className="st ">
            <h3>
              <i />
              Designer
            </h3>
            <p>Direction artistique, maquettes Figma et prototype cliquable, validés écran par écran.</p>
          </div>
          <div className="st cur">
            <h3>
              <i />
              Développer
            </h3>
            <p>Intégration, CMS ou Shopify, automatisations. Une préprod ouverte pour tester en continu.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Lancer
            </h3>
            <p>Mise en ligne, redirections, SEO technique et prise en main par votre équipe.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Faire grandir
            </h3>
            <p>Mesure, tests et évolutions au fil de l’eau, quand vous en avez besoin.</p>
          </div>
        </div>
      </div>
      <div className="steps-note">
        Ici, un projet en cours de développement. <b>Vous suivez chaque étape en direct dans Orion Admin</b>,
        avec une préprod pour tester avant la mise en ligne.
      </div>
    </section>
  )
}

function AvSec() {
  return (
    <section className="sec av-sec">
      <div className="av-card">
        <img className="av-bg" src="/images/b1ad4d0b43d462.png" alt="" />
        <div className="av-veil" />
        <div className="av-l">
          <div className="av-k">
            <span>Avis clients</span>
            <span>Ils en parlent mieux que nous</span>
          </div>
          <img className="px av-q" src="/px/av-q-179751fb.svg" alt="" width={55} height={40} />
          <p className="av-txt">
            Leur expertise sur le développement sur-mesure est impressionnante. Une équipe à l’écoute,
            professionnelle, et qui livre dans les temps.
          </p>
          <div className="av-by">
            <span className="av-logo">
              <img src="/images/4261b99ecbbc3b.png" alt="Association des Entrepreneurs du Vexin" />
            </span>
            <div>
              <b>Thierry Cordier</b>
              <span>Association des Entrepreneurs du Vexin · Site vitrine</span>
            </div>
            <span className="av-g">
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
              <em>Avis Google</em>
            </span>
          </div>
        </div>
        <div className="av-r">
          <div className="av-rk">Note Google</div>
          <div className="av-score">
            <b>5,0</b>
            <span>/ 5</span>
          </div>
          <div className="av-stars">
            <svg
              className="pxstar"
              width="22.5"
              height="20"
              viewBox="0 0 22.5 20"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="0" width="2.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="2.5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="0" y="7.5" width="22.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="10" width="17.5" height="2.5" fill="#FF4D1A" />
              <rect x="5" y="12.5" width="12.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="12.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
              <rect x="15" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
            </svg>
            <svg
              className="pxstar"
              width="22.5"
              height="20"
              viewBox="0 0 22.5 20"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="0" width="2.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="2.5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="0" y="7.5" width="22.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="10" width="17.5" height="2.5" fill="#FF4D1A" />
              <rect x="5" y="12.5" width="12.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="12.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
              <rect x="15" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
            </svg>
            <svg
              className="pxstar"
              width="22.5"
              height="20"
              viewBox="0 0 22.5 20"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="0" width="2.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="2.5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="0" y="7.5" width="22.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="10" width="17.5" height="2.5" fill="#FF4D1A" />
              <rect x="5" y="12.5" width="12.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="12.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
              <rect x="15" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
            </svg>
            <svg
              className="pxstar"
              width="22.5"
              height="20"
              viewBox="0 0 22.5 20"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="0" width="2.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="2.5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="0" y="7.5" width="22.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="10" width="17.5" height="2.5" fill="#FF4D1A" />
              <rect x="5" y="12.5" width="12.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="12.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
              <rect x="15" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
            </svg>
            <svg
              className="pxstar"
              width="22.5"
              height="20"
              viewBox="0 0 22.5 20"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="0" width="2.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="2.5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="0" y="7.5" width="22.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="10" width="17.5" height="2.5" fill="#FF4D1A" />
              <rect x="5" y="12.5" width="12.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="12.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
              <rect x="15" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
            </svg>
          </div>
          <p>
            Les avis laissés par nos clients sur notre fiche Google, après la mise en ligne de leur projet.
          </p>
          <div className="av-btns">
            <a className="btn av-btn">Lire les avis Google</a>
            <a className="av-lnk">Voir le projet AEV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function LesQuestionsQuOn() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="faq">
        <div className="faq-l">
          <h2 className="h2">
            Les questions
            <br />
            <span className="serif">qu’on nous pose.</span>
          </h2>
          <p className="lead">
            Budget, délais, technologie, suivi : les réponses aux questions qui reviennent avant chaque
            projet.
          </p>
          <a className="lnk">Une autre question ? Écrivez-nous</a>
        </div>
        <div className="acc">
          <div className="q">
            <div className="q-h">
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
              Chaque projet est chiffré sur devis après un premier échange. Dans le formulaire de contact,
              vous indiquez une fourchette de budget : on vous oriente vers la bonne approche dès le premier
              appel.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
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
          <div className="q">
            <div className="q-h">
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
          <div className="q">
            <div className="q-h">
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
          <div className="q">
            <div className="q-h">
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
          <div className="q">
            <div className="q-h">
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
      </div>
    </section>
  )
}

function Ressources() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '96px' }}>
        <h2 className="h2">Ressources</h2>
        <Link to="/ressources" className="lnk">
          Tous les articles
        </Link>
      </div>
      <div className="res">
        <a className="art" data-cur="Lire">
          <span className="art-im">
            <img src="/images/1547cebce5d492.png" alt="" />
          </span>
          <div className="k">
            <span>Guide</span>
            <span>8 min de lecture</span>
          </div>
          <h3>Shopify, Webflow ou sur-mesure : comment choisir en 2026</h3>
          <span className="more">Lire l’article</span>
        </a>
        <Link to="/ressources/etre-cite-par-chatgpt-perplexity" className="art" data-cur="Lire">
          <span className="art-im">
            <img src="/images/b665a1ab308a17.png" alt="" />
          </span>
          <div className="k">
            <span>SEO & GEO</span>
            <span>11 min de lecture</span>
          </div>
          <h3>Être cité par ChatGPT et Perplexity : ce qui marche vraiment</h3>
          <span className="more">Lire l’article</span>
        </Link>
        <a className="art" data-cur="Lire">
          <span className="art-im">
            <img src="/images/204444271e8f06.png" alt="" />
          </span>
          <div className="k">
            <span>Méthode</span>
            <span>6 min de lecture</span>
          </div>
          <h3>Refonte de site : le cahier des charges en douze questions</h3>
          <span className="more">Lire l’article</span>
        </a>
      </div>
    </section>
  )
}

function Dark() {
  return (
    <Footer>
      <div className="cta">
        <h2>
          Un projet en tête ?<span className="serif">Construisons-le.</span>
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
  )
}

export function Desktop() {
  return (
    <section className="artboard">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <Clients />
      <OrionStudioCEst />
      <RealisationsRecentes />
      <DuCroquisAuCode />
      <PourQui />
      <CinqEtapesZeroZone />
      <AvSec />
      <LesQuestionsQuOn />
      <Ressources />
      <Dark />
    </section>
  )
}
