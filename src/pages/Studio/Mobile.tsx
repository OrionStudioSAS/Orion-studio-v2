import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Accueil / <b>Le studio</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Julien, Théo<span className="serif">et Doggy.</span>
      </h1>
      <p className="mo-lead">
        Un studio de design et de développement web basé à Paris. Une équipe à taille humaine qui dessine et
        code elle-même, pour des clients partout en France et à l’international. Et un chien qui veille sur
        l’accueil.
      </p>
      <div className="sx-ring sx-ring-m" aria-label="Stories du studio">
        <button type="button" className="sx-b" data-g="0" aria-label="Voir la story Shooting">
          <span className="av">
            <span>
              <img src="/images/a608f4afa30e86.png" alt="" />
            </span>
          </span>
          <small>Shooting</small>
        </button>
        <button type="button" className="sx-b" data-g="1" aria-label="Voir la story Doggy">
          <span className="av">
            <span>
              <img src="/images/4f470e228f8d42.png" alt="" />
            </span>
          </span>
          <small>Doggy</small>
        </button>
        <button type="button" className="sx-b logo" data-g="2" aria-label="Voir la story Stand-ING">
          <span className="av">
            <span>
              <img src="/images/f929bc41088d4e.png" alt="" />
            </span>
          </span>
          <small>Stand-ING</small>
        </button>
        <button type="button" className="sx-b" data-g="3" aria-label="Voir la story Le bureau">
          <span className="av">
            <span>
              <img src="/images/2e238aa4803b68.png" alt="" />
            </span>
          </span>
          <small>Le bureau</small>
        </button>
        <button type="button" className="sx-b logo" data-g="4" aria-label="Voir la story Château l’Arc">
          <span className="av">
            <span>
              <img src="/images/a58f0039fd543e.png" alt="" />
            </span>
          </span>
          <small>Château l’Arc</small>
        </button>
      </div>
      <div className="mo-btns">
        <a className="btn btn-ink mo-btn">Démarrer un projet</a>
      </div>
    </section>
  )
}

function St3Mmedia() {
  return (
    <div className="st3-mmedia">
      <img src="/images/70e993e39a19ce.png" alt="Le studio Orion en pixel art" />
      <div className="crew crew-m" data-pos={'{"rest":[27,50,74],"desk":[13,87],"dog":[20,82]}'}>
        <figure className="cm cm-j">
          <span className="dg pp pp-julien " role="button" tabIndex={0} aria-label="Julien" data-cur="Julien">
            <span className="dg-bub">Salut, moi c’est Julien.</span>
            <span className="dg-in">
              <img className="pxsvg dg-f" src="/px/art-54a494fd.svg" alt="" width={90} height={162} />
              <img
                className="pxsvg dg-f pp-blink"
                src="/px/pp-blink-dd44e758.svg"
                alt=""
                width={90}
                height={162}
              />
              <img
                className="pxsvg dg-f pp-walk"
                src="/px/pp-walk-76e3d706.svg"
                alt=""
                width={90}
                height={162}
              />
            </span>
          </span>
          <figcaption>Julien</figcaption>
        </figure>
        <figure className="cm cm-t">
          <span className="dg pp pp-theo " role="button" tabIndex={0} aria-label="Théo" data-cur="Théo">
            <span className="dg-bub">Salut, moi c’est Théo.</span>
            <span className="dg-in">
              <img className="pxsvg dg-f" src="/px/art-0e7b6027.svg" alt="" width={90} height={162} />
              <img
                className="pxsvg dg-f pp-blink"
                src="/px/pp-blink-4e19e3ae.svg"
                alt=""
                width={90}
                height={162}
              />
              <img
                className="pxsvg dg-f pp-walk"
                src="/px/pp-walk-4c89209e.svg"
                alt=""
                width={90}
                height={162}
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
                className="pxsvg dg-f dg-base"
                src="/px/dg-base-b568e77d.svg"
                alt=""
                width={91}
                height={87.5}
              />
              <img
                className="pxsvg dg-f dg-blink"
                src="/px/dg-blink-56a2d1ca.svg"
                alt=""
                width={91}
                height={87.5}
              />
              <img
                className="pxsvg dg-f dg-mouth"
                src="/px/dg-mouth-a7699d51.svg"
                alt=""
                width={91}
                height={87.5}
              />
            </span>
          </span>
          <figcaption>Doggy</figcaption>
        </figure>
      </div>
    </div>
  )
}

function OnPasseNosJournees() {
  return (
    <section className="mo-sec mo-mf" style={{ borderTop: 'none' }}>
      <div className="mo-k">
        <span>Le studio</span>
        <span>Paris · France et international · FR / EN</span>
      </div>
      <h2 className="mo-mh st2-mh">
        <div className="mo-ml">
          <span className="mf-t mo-mt ">On passe nos journées</span>
          <span
            className="dg pp pp-julien pp-inline"
            role="button"
            tabIndex={0}
            aria-label="Julien"
            data-cur="Julien"
          >
            <span className="dg-in">
              <img className="pxsvg dg-f" src="/px/art-40d3ca0b.svg" alt="" width={25} height={45} />
              <img
                className="pxsvg dg-f pp-blink"
                src="/px/pp-blink-d3c565dc.svg"
                alt=""
                width={25}
                height={45}
              />
              <img
                className="pxsvg dg-f pp-walk"
                src="/px/pp-walk-46ae6f5a.svg"
                alt=""
                width={25}
                height={45}
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
              <img className="pxsvg dg-f" src="/px/art-b0e8820d.svg" alt="" width={25} height={45} />
              <img
                className="pxsvg dg-f pp-blink"
                src="/px/pp-blink-8b3f7609.svg"
                alt=""
                width={25}
                height={45}
              />
              <img
                className="pxsvg dg-f pp-walk"
                src="/px/pp-walk-24a231f1.svg"
                alt=""
                width={25}
                height={45}
              />
            </span>
          </span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt mf-m">à dessiner</span>
          <span className="mf-ui mf-figma mo-ui mo-fig" title="Figma">
            <img className="pxsvg" src="/px/art-d5501567.svg" alt="" width={27.2} height={40.8} />
          </span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt mf-m">et à coder</span>
          <span className="mf-ui mf-code mo-ui">
            <i className="k" style={{ width: '46%' }} />
            <i style={{ width: '70%', marginLeft: '8px' }} />
            <i className="s" style={{ width: '38%', marginLeft: '8px' }} />
            <i style={{ width: '24%' }} />
          </span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt mf-m">vos sites,</span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt mf-m mf-s mo-ms">sans relais.</span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt ">Et il y a</span>
          <span
            className="dg dg-inline"
            role="button"
            tabIndex={0}
            aria-label="Doggy, le chien du studio"
            data-cur="Ouaf"
          >
            <span className="dg-in">
              <img
                className="pxsvg dg-f dg-base"
                src="/px/dg-base-2a427feb.svg"
                alt=""
                width={52}
                height={50}
              />
              <img
                className="pxsvg dg-f dg-blink"
                src="/px/dg-blink-378dd5fb.svg"
                alt=""
                width={52}
                height={50}
              />
              <img
                className="pxsvg dg-f dg-mouth"
                src="/px/dg-mouth-9bbfa566.svg"
                alt=""
                width={52}
                height={50}
              />
            </span>
          </span>
          <span className="mf-t mo-mt ">Doggy.</span>
        </div>
      </h2>
    </section>
  )
}

function Mq() {
  return (
    <div className="mq mq-a mq-m">
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
        <span>Développement d’applications</span>
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
        <span>Développement d’applications</span>
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
        <span>Développement d’applications</span>
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

function LesCoulissesEnPolaroids() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Les coulisses<span className="serif">en polaroids.</span>
        </h2>
      </div>
      <div className="mo-rail st2-mrail">
        <div className="mo-track">
          <figure className="pw-m">
            <span className="pw-in" style={{ '--r': '-4deg' } as CSSProperties}>
              <img src="/images/a608f4afa30e86.png" alt="" />
              <figcaption>Julien & Théo</figcaption>
            </span>
          </figure>
          <figure className="pw-m">
            <span className="pw-in" style={{ '--r': '5deg' } as CSSProperties}>
              <span className="pw-ph">
                <img
                  className="px"
                  src="/images/team-doggy-sq-px.png"
                  alt="Doggy, le chien du studio, en pixel"
                />
                <img className="o" src="/images/team-doggy-sq.jpg" alt="" loading="lazy" />
              </span>
              <figcaption>Doggy, à l’accueil</figcaption>
            </span>
          </figure>
          <figure className="pw-m">
            <span className="pw-in" style={{ '--r': '-3deg' } as CSSProperties}>
              <span className="pw-ph">
                <img
                  className="px"
                  src="/images/team-julien-sq-px.png"
                  alt="Julien, cofondateur d’Orion Studio, en pixel"
                />
                <img className="o" src="/images/team-julien-sq.jpg" alt="" loading="lazy" />
              </span>
              <figcaption>Julien</figcaption>
            </span>
          </figure>
          <figure className="pw-m">
            <span className="pw-in" style={{ '--r': '4deg' } as CSSProperties}>
              <span className="pw-ph">
                <img
                  className="px"
                  src="/images/team-theo-sq-px.png"
                  alt="Théo, cofondateur d’Orion Studio, en pixel"
                />
                <img className="o" src="/images/team-theo-sq.jpg" alt="" loading="lazy" />
              </span>
              <figcaption>Théo</figcaption>
            </span>
          </figure>
          <figure className="pw-m">
            <span className="pw-in" style={{ '--r': '3deg' } as CSSProperties}>
              <img src="/images/7e252fc0055d46.png" alt="" />
              <figcaption>Le rouge, presque orange</figcaption>
            </span>
          </figure>
          <figure className="pw-m">
            <span className="pw-in" style={{ '--r': '-5deg' } as CSSProperties}>
              <img src="/images/2e238aa4803b68.png" alt="" />
              <figcaption>Le bureau du jour</figcaption>
            </span>
          </figure>
        </div>
      </div>
    </section>
  )
}

function CinqEtapesDoggyVous() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Cinq étapes,<span className="serif">Doggy vous montre le chemin.</span>
        </h2>
        <p className="mo-lead">Du premier échange à la mise en ligne, vous savez toujours où en est votre projet.</p>
      </div>
      <div className="s2-track s2-m">
        <div className="s2-dog">
          <span
            className="dg dg-walk"
            role="button"
            tabIndex={0}
            aria-label="Doggy, le chien du studio"
            data-cur="Ouaf"
          >
            <span className="dg-in">
              <img
                className="pxsvg dg-f dg-base"
                src="/px/dg-base-2a427feb.svg"
                alt=""
                width={52}
                height={50}
              />
              <img
                className="pxsvg dg-f dg-blink"
                src="/px/dg-blink-378dd5fb.svg"
                alt=""
                width={52}
                height={50}
              />
              <img
                className="pxsvg dg-f dg-mouth"
                src="/px/dg-mouth-9bbfa566.svg"
                alt=""
                width={52}
                height={50}
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
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Basés à Paris,<span className="serif">on travaille partout.</span>
        </h2>
      </div>
      <div className="st2-mmap">
        <div className="fx" style={{ width: '320px', height: '315px' }}>
          <img className="pxsvg" src="/px/art-77080277.svg" alt="" width={320} height={315} />
          <i className="fx-ring" style={{ left: '157px', top: '72px', animationDelay: '0.0s' }} />
          <i className="fx-ring" style={{ left: '157px', top: '72px', animationDelay: '0.9s' }} />
          <i className="fx-ring" style={{ left: '157px', top: '72px', animationDelay: '1.8s' }} />
          <span className="fx-l" style={{ left: '173px', top: '60px' }}>
            Paris 8e
          </span>
        </div>
      </div>
      <div className="st2-cards st2-mcards">
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
      <a className="btn btn-ink mo-btn mo-btn-full">Démarrer un projet</a>
      <div className="st2-local st2-mlocal">
        <span className="lc-k">Création de site internet, près de chez vous</span>
        <ul>
          <li>
            <Link
              to="/creation-site-internet/versailles"
              className="lnk"
              data-pv="creation-site-internet-versailles"
            >
              Création de site internet à Versailles
            </Link>
          </li>
          <li>
            <Link to="/creation-site-internet/cergy" className="lnk" data-pv="creation-site-internet-cergy">
              Création de site internet à Cergy
            </Link>
          </li>
          <li>
            <Link
              to="/creation-site-internet/boulogne-billancourt"
              className="lnk"
              data-pv="creation-site-internet-boulogne-billancourt"
            >
              Création de site internet à Boulogne-Billancourt
            </Link>
          </li>
          <li>
            <Link to="/creation-site-internet/meaux" className="lnk" data-pv="creation-site-internet-meaux">
              Création de site internet à Meaux
            </Link>
          </li>
          <li>
            <Link to="/creation-site-internet/massy" className="lnk" data-pv="creation-site-internet-massy">
              Création de site internet à Massy
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

function MoFt() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Passez nous voir !<span className="serif">Doggy garde la porte.</span>
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
            <Link to="/expertises/site-vitrine">Site vitrine</Link>
            <Link to="/expertises/site-dynamique">Site dynamique</Link>
            <Link to="/expertises/site-concept">Site concept</Link>
            <Link to="/expertises/e-commerce">E-commerce</Link>
            <Link to="/expertises/developpement-applications">Développement d’applications</Link>
            <Link to="/expertises/saas">SaaS</Link>
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
    <section className="artboard mo">
      <MobileNav />
      <MoHero />
      <St3Mmedia />
      <OnPasseNosJournees />
      <Mq />
      <LesCoulissesEnPolaroids />
      <CinqEtapesDoggyVous />
      <BasesAParisOn />
      <MoFt />
    </section>
  )
}
