import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/">
          Accueil / <b>Le studio</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Julien, Théo</span>
        <span className="serif">et Doggy.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Un studio de design et de développement web basé à Paris. Deux associés qui dessinent et codent
          eux-mêmes, pour des clients partout en France et à l’international. Et un chien qui veille sur
          l’accueil.
        </p>
        <div className="hero-cta">
          <div className="sx-ring " aria-label="Stories du studio">
            <button type="button" className="sx-b" data-g="0" aria-label="Voir la story Shooting">
              <span className="av">
                <span>
                  <img src="/images/img-21643aaf.png" alt="" />
                </span>
              </span>
              <small>Shooting</small>
            </button>
            <button type="button" className="sx-b" data-g="1" aria-label="Voir la story Doggy">
              <span className="av">
                <span>
                  <img src="/images/img-080dfe88.png" alt="" />
                </span>
              </span>
              <small>Doggy</small>
            </button>
            <button type="button" className="sx-b logo" data-g="2" aria-label="Voir la story Stand-ING">
              <span className="av">
                <span>
                  <img src="/images/stand-ing.png" alt="" />
                </span>
              </span>
              <small>Stand-ING</small>
            </button>
            <button type="button" className="sx-b" data-g="3" aria-label="Voir la story Le bureau">
              <span className="av">
                <span>
                  <img src="/images/img-ff3fcf95.png" alt="" />
                </span>
              </span>
              <small>Le bureau</small>
            </button>
            <button type="button" className="sx-b logo" data-g="4" aria-label="Voir la story Château l’Arc">
              <span className="av">
                <span>
                  <img src="/images/chateau-l-arc-golf-club.png" alt="" />
                </span>
              </span>
              <small>Château l’Arc</small>
            </button>
          </div>
          <div className="hero-btns">
            <a className="btn btn-ink">
              Démarrer un projet <span className="kbd">P</span>
            </a>
            <Link to="/realisations" className="btn btn-ghost">
              Voir nos réalisations
            </Link>
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
    <div className="hero-media st3-media">
      <img
        src="/images/le-studio-orion-en-pixel-art-bureaux-ecrans-etag.png"
        alt="Le studio Orion en pixel art : bureaux, écrans, étagères, fenêtre sur Paris"
      />
      <div className="crew " data-pos={'{"rest":[38,52,64],"desk":[16,82],"dog":[21,79]}'}>
        <figure className="cm cm-j">
          <span className="dg pp pp-julien " role="button" tabIndex={0} aria-label="Julien" data-cur="Julien">
            <span className="dg-bub">Salut, moi c’est Julien.</span>
            <span className="dg-in">
              <img className="px dg-f" src="/px/art-2fb1f1ca.svg" alt="" width={180} height={324} />
              <img
                className="px dg-f pp-blink"
                src="/px/pp-blink-839f6700.svg"
                alt=""
                width={180}
                height={324}
              />
              <img
                className="px dg-f pp-walk"
                src="/px/pp-walk-058adaa0.svg"
                alt=""
                width={180}
                height={324}
              />
            </span>
          </span>
          <figcaption>Julien</figcaption>
        </figure>
        <figure className="cm cm-t">
          <span className="dg pp pp-theo " role="button" tabIndex={0} aria-label="Théo" data-cur="Théo">
            <span className="dg-bub">Salut, moi c’est Théo.</span>
            <span className="dg-in">
              <img className="px dg-f" src="/px/art-cd9804be.svg" alt="" width={180} height={324} />
              <img
                className="px dg-f pp-blink"
                src="/px/pp-blink-f3d664dc.svg"
                alt=""
                width={180}
                height={324}
              />
              <img
                className="px dg-f pp-walk"
                src="/px/pp-walk-d0b828f3.svg"
                alt=""
                width={180}
                height={324}
              />
            </span>
          </span>
          <figcaption>Théo</figcaption>
        </figure>
        <figure className="cm cm-dog">
          <span className="cm-th cm-th-d">Ouaf !</span>
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
                src="/px/dg-base-a9f5ac2c.svg"
                alt=""
                width={182}
                height={175}
              />
              <img
                className="px dg-f dg-blink"
                src="/px/dg-blink-e531291a.svg"
                alt=""
                width={182}
                height={175}
              />
              <img
                className="px dg-f dg-mouth"
                src="/px/dg-mouth-247de8d2.svg"
                alt=""
                width={182}
                height={175}
              />
            </span>
          </span>
          <figcaption>Doggy</figcaption>
        </figure>
      </div>
      <div className="capt st4-capt">Le studio, en pixel · Paris 8e</div>
    </div>
  )
}

function OnEstDeuxA() {
  return (
    <section className="sec st2-mf" style={{ padding: '0', borderTop: 'none' }}>
      <div className="mf st2-mfin">
        <div className="mf-k">
          <span>Le studio</span>
          <span>Paris · France et international · FR / EN</span>
        </div>
        <h2 className="mf-h st2-mh">
          <div className="mf-l">
            <span className="mf-t ">On est deux</span>
            <span
              className="dg pp pp-julien pp-inline"
              role="button"
              tabIndex={0}
              aria-label="Julien"
              data-cur="Julien"
            >
              <span className="dg-in">
                <img className="px dg-f" src="/px/art-f77f6186.svg" alt="" width={52} height={93.6} />
                <img
                  className="px dg-f pp-blink"
                  src="/px/pp-blink-507fc4b7.svg"
                  alt=""
                  width={52}
                  height={93.6}
                />
                <img
                  className="px dg-f pp-walk"
                  src="/px/pp-walk-653e1ffb.svg"
                  alt=""
                  width={52}
                  height={93.6}
                />
              </span>
            </span>
            <span
              className="dg pp pp-theo pp-inline"
              role="button"
              tabIndex={0}
              aria-label="Théo"
              data-cur="Théo"
            >
              <span className="dg-in">
                <img className="px dg-f" src="/px/art-775ffe6b.svg" alt="" width={52} height={93.6} />
                <img
                  className="px dg-f pp-blink"
                  src="/px/pp-blink-4212c702.svg"
                  alt=""
                  width={52}
                  height={93.6}
                />
                <img
                  className="px dg-f pp-walk"
                  src="/px/pp-walk-61e2c805.svg"
                  alt=""
                  width={52}
                  height={93.6}
                />
              </span>
            </span>
            <span className="mf-t ">à dessiner</span>
            <span className="mf-ui mf-figma" title="Figma">
              <img className="px" src="/px/art-13e55d0a.svg" alt="" width={40} height={60} />
            </span>
          </div>
          <div className="mf-l">
            <span className="mf-t mf-m">et à coder</span>
            <span className="mf-ui mf-code">
              <i className="k" style={{ width: '46%' }} />
              <i style={{ width: '70%', marginLeft: '8px' }} />
              <i className="s" style={{ width: '38%', marginLeft: '8px' }} />
              <i style={{ width: '24%' }} />
            </span>
            <span className="mf-t mf-m">vos sites, sans relais.</span>
          </div>
          <div className="mf-l">
            <span className="mf-t ">Et il y a</span>
            <span
              className="dg dg-inline"
              role="button"
              tabIndex={0}
              aria-label="Doggy, le chien du studio"
              data-cur="Ouaf"
            >
              <span className="dg-in">
                <img
                  className="px dg-f dg-base"
                  src="/px/dg-base-1b6c94fb.svg"
                  alt=""
                  width={78}
                  height={75}
                />
                <img
                  className="px dg-f dg-blink"
                  src="/px/dg-blink-4f00ac9f.svg"
                  alt=""
                  width={78}
                  height={75}
                />
                <img
                  className="px dg-f dg-mouth"
                  src="/px/dg-mouth-9d536c1b.svg"
                  alt=""
                  width={78}
                  height={75}
                />
              </span>
            </span>
            <span className="mf-t ">Doggy,</span>
            <span className="mf-t mf-m mf-s">qui relit tout.</span>
          </div>
        </h2>
      </div>
    </section>
  )
}

function Mq() {
  return (
    <div className="mq mq-a">
      <div className="mq-t">
        <span>Site internet</span>
        <i>
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
        </i>
        <span>Développement & applications</span>
        <i>
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
        </i>
        <span>Automatisations</span>
        <i>
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
        </i>
        <span>SEO</span>
        <i>
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
        </i>
        <span>GEO</span>
        <i>
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
        </i>
        <span>Google Ads</span>
        <i>
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
        </i>
        <span>Site internet</span>
        <i>
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
        </i>
        <span>Développement & applications</span>
        <i>
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
        </i>
        <span>Automatisations</span>
        <i>
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
        </i>
        <span>SEO</span>
        <i>
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
        </i>
        <span>GEO</span>
        <i>
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
        </i>
        <span>Google Ads</span>
        <i>
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
        </i>
        <span>Site internet</span>
        <i>
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
        </i>
        <span>Développement & applications</span>
        <i>
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
        </i>
        <span>Automatisations</span>
        <i>
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
        </i>
        <span>SEO</span>
        <i>
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
        </i>
        <span>GEO</span>
        <i>
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
        </i>
        <span>Google Ads</span>
        <i>
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
        </i>
      </div>
    </div>
  )
}

function Mq2() {
  return (
    <div className="mq mq-b">
      <div className="mq-t">
        <span>Basés à Paris</span>
        <i>
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
        </i>
        <span>Partout en France</span>
        <i>
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
        </i>
        <span>À l’international</span>
        <i>
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
        </i>
        <span>En français ou en anglais</span>
        <i>
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
        </i>
        <span>Sur place ou à distance</span>
        <i>
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
        </i>
        <span>Du croquis à la mise en ligne</span>
        <i>
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
        </i>
        <span>Basés à Paris</span>
        <i>
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
        </i>
        <span>Partout en France</span>
        <i>
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
        </i>
        <span>À l’international</span>
        <i>
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
        </i>
        <span>En français ou en anglais</span>
        <i>
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
        </i>
        <span>Sur place ou à distance</span>
        <i>
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
        </i>
        <span>Du croquis à la mise en ligne</span>
        <i>
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
        </i>
        <span>Basés à Paris</span>
        <i>
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
        </i>
        <span>Partout en France</span>
        <i>
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
        </i>
        <span>À l’international</span>
        <i>
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
        </i>
        <span>En français ou en anglais</span>
        <i>
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
        </i>
        <span>Sur place ou à distance</span>
        <i>
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
        </i>
        <span>Du croquis à la mise en ligne</span>
        <i>
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
        </i>
      </div>
    </div>
  )
}

function LesCoulissesEnPolaroids() {
  return (
    <section className="sec st2-wall-sec" style={{ padding: '0', borderTop: 'none' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Les coulisses
          <br />
          <span className="serif">en polaroids.</span>
        </h2>
        <p className="lead">
          Un studio photo, un fauteuil en cuir, Julien, Théo et un chien qui ne quitte pas le plateau. Passez
          la souris sur les photos.
        </p>
      </div>
      <div className="st2-wall">
        <figure className="pw" style={{ left: '72px', top: '40px', width: '430px' }}>
          <span className="pw-in" style={{ '--r': '-4deg' } as CSSProperties}>
            <img src="/images/img-21643aaf.png" alt="" style={{ width: '402px', height: '402px' }} />
            <figcaption>Julien & Théo</figcaption>
          </span>
        </figure>
        <figure className="pw" style={{ left: '500px', top: '160px', width: '330px' }}>
          <span className="pw-in" style={{ '--r': '5deg' } as CSSProperties}>
            <img src="/images/img-080dfe88.png" alt="" style={{ width: '302px', height: '302px' }} />
            <figcaption>Doggy, à l’accueil</figcaption>
          </span>
        </figure>
        <figure className="pw" style={{ left: '840px', top: '30px', width: '360px' }}>
          <span className="pw-in" style={{ '--r': '-3deg' } as CSSProperties}>
            <img src="/images/img-8551791d.png" alt="" style={{ width: '332px', height: '332px' }} />
            <figcaption>Julien</figcaption>
          </span>
        </figure>
        <figure className="pw" style={{ left: '1080px', top: '200px', width: '340px' }}>
          <span className="pw-in" style={{ '--r': '4deg' } as CSSProperties}>
            <img src="/images/img-10db7bf1.png" alt="" style={{ width: '312px', height: '312px' }} />
            <figcaption>Théo</figcaption>
          </span>
        </figure>
        <figure className="pw" style={{ left: '330px', top: '540px', width: '300px' }}>
          <span className="pw-in" style={{ '--r': '3deg' } as CSSProperties}>
            <img src="/images/img-5b303193.png" alt="" style={{ width: '272px', height: '272px' }} />
            <figcaption>Le rouge, presque orange</figcaption>
          </span>
        </figure>
        <figure className="pw" style={{ left: '700px', top: '520px', width: '320px' }}>
          <span className="pw-in" style={{ '--r': '-5deg' } as CSSProperties}>
            <img src="/images/img-ff3fcf95.png" alt="" style={{ width: '292px', height: '292px' }} />
            <figcaption>Le bureau du jour</figcaption>
          </span>
        </figure>
      </div>
    </section>
  )
}

function CinqEtapesDoggyVous() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Cinq étapes,
          <br />
          <span className="serif">Doggy vous montre le chemin.</span>
        </h2>
        <p className="lead">
          Du premier échange à la mise en ligne, vous suivez tout dans Orion Admin. Un site vitrine prend en
          moyenne 4 à 8 semaines.
        </p>
      </div>
      <div className="s2-track">
        <div className="s2-dog">
          <span
            className="dg dg-walk"
            role="button"
            tabIndex={0}
            aria-label="Doggy, le chien du studio"
            data-cur="Ouaf"
          >
            <span className="dg-in">
              <img className="px dg-f dg-base" src="/px/dg-base-1b6c94fb.svg" alt="" width={78} height={75} />
              <img
                className="px dg-f dg-blink"
                src="/px/dg-blink-4f00ac9f.svg"
                alt=""
                width={78}
                height={75}
              />
              <img
                className="px dg-f dg-mouth"
                src="/px/dg-mouth-9d536c1b.svg"
                alt=""
                width={78}
                height={75}
              />
            </span>
          </span>
        </div>
        <div className="s2-bar">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="s2-row">
          <div className="s2-st" data-i="0">
            <b>
              <i />
              Cadrer
            </b>
            <p>
              Atelier, objectifs, arborescence et devis ferme. On sait ce qu’on construit avant de dessiner.
            </p>
          </div>
          <div className="s2-st" data-i="1">
            <b>
              <i />
              Designer
            </b>
            <p>Direction artistique, maquettes Figma et prototype cliquable, validés écran par écran.</p>
          </div>
          <div className="s2-st" data-i="2">
            <b>
              <i />
              Développer
            </b>
            <p>Intégration, CMS ou Shopify, automatisations. Une préprod ouverte pour tester en continu.</p>
          </div>
          <div className="s2-st" data-i="3">
            <b>
              <i />
              Lancer
            </b>
            <p>Mise en ligne, redirections, SEO technique et prise en main par votre équipe.</p>
          </div>
          <div className="s2-st" data-i="4">
            <b>
              <i />
              Faire grandir
            </b>
            <p>Mesure, tests et évolutions au fil de l’eau, quand vous en avez besoin.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BasesAParisOn() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="st2-where">
        <div className="st2-map">
          <div className="fx" style={{ width: '512px', height: '504px' }}>
            <img className="px" src="/px/art-0a9f4a5e.svg" alt="" width={512} height={504} />
            <i className="fx-ring" style={{ left: '252px', top: '116px', animationDelay: '0.0s' }} />
            <i className="fx-ring" style={{ left: '252px', top: '116px', animationDelay: '0.9s' }} />
            <i className="fx-ring" style={{ left: '252px', top: '116px', animationDelay: '1.8s' }} />
            <span className="fx-l" style={{ left: '274px', top: '104px' }}>
              Paris 8e
            </span>
          </div>
        </div>
        <div className="st2-places">
          <h2 className="h2">
            Basés à Paris,
            <br />
            <span className="serif">on travaille partout.</span>
          </h2>
          <div className="st2-cards">
            <div>
              <b>Paris 8e</b>
              <span>60 rue François Ier, 75008</span>
              <a className="lnk">Itinéraire</a>
            </div>
            <div>
              <b>Partout ailleurs</b>
              <span>En France et à l’international, en visio ou sur place</span>
              <a className="lnk">Réserver un appel</a>
            </div>
          </div>
          <div className="st2-call">
            <span
              className="dg dg-call"
              role="button"
              tabIndex={0}
              aria-label="Doggy, le chien du studio"
              data-cur="Ouaf"
            >
              <span className="dg-in">
                <img
                  className="px dg-f dg-base"
                  src="/px/dg-base-1b6c94fb.svg"
                  alt=""
                  width={78}
                  height={75}
                />
                <img
                  className="px dg-f dg-blink"
                  src="/px/dg-blink-4f00ac9f.svg"
                  alt=""
                  width={78}
                  height={75}
                />
                <img
                  className="px dg-f dg-mouth"
                  src="/px/dg-mouth-9d536c1b.svg"
                  alt=""
                  width={78}
                  height={75}
                />
              </span>
            </span>
            <div>
              <b>Un appel de 30 minutes ?</b>
              <span>Avec Julien ou Théo, en visio, au téléphone ou au studio.</span>
            </div>
            <a className="btn btn-ink">Démarrer un projet</a>
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
            Passez nous voir !<span className="serif">Doggy garde la porte.</span>
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
    <section className="artboard g-page st2-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <OnEstDeuxA />
      <Mq />
      <Mq2 />
      <LesCoulissesEnPolaroids />
      <CinqEtapesDoggyVous />
      <BasesAParisOn />
      <GCta />
    </section>
  )
}
