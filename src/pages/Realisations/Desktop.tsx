import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Clients } from '../../components/shared/Clients'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/">
          Accueil / <b>Réalisations</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Réalisations</span>
        <span className="serif">conçues et codées par le studio.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Sites sur-mesure, boutiques et outils métiers, conçus et développés de bout en bout par le studio.
        </p>
        <div className="hero-cta">
          <div className="hero-btns">
            <a className="btn btn-ink">
              Démarrer un projet <span className="kbd">P</span>
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

function RzBar() {
  return (
    <div className="rz-bar">
      <nav className="rz-tabs">
        <a className="on" data-k="all">
          Tous<i>8</i>
        </a>
        <a className="" data-k="site">
          Sites internet<i>2</i>
        </a>
        <a className="" data-k="shop">
          E-commerce<i>2</i>
        </a>
        <a className="" data-k="app">
          Applications & outils<i>4</i>
        </a>
        <a className="" data-k="da">
          Direction artistique & UX<i>2</i>
        </a>
      </nav>
      <span className="rz-n">8 projets · 2024–2026</span>
    </div>
  )
}

function RzGrid() {
  return (
    <div className="rz-grid">
      <article className="rz-card rz-larc" data-cats="site app da" data-to="/realisations/chateau-larc">
        <div className="p-media">
          <img src="/images/img-3b6de440.png" alt="" />
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
                src="/images/page-d-accueil-du-site-du-chateau-l-arc-golf-clu.jpg"
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
          Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et événements.
        </p>
        <a className="lnk rz-more">Lire l’étude de cas</a>
      </article>
      <article className="rz-card rz-standing" data-cats="app" data-to="/realisations/stand-ing">
        <div className="p-media">
          <img src="/images/img-12109804.png" alt="" />
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
                src="/images/configurateur-de-stand-3d-stand-ing.png"
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
      <article className="rz-card rz-bocaux" data-cats="shop">
        <div className="p-media">
          <img src="/images/img-9d5bedd1.png" alt="" />
          <div className="shop">
            <div className="shop-img">
              <span className="jar" />
            </div>
            <div className="shop-b">
              <div className="shop-k">Épicerie · Bocaux</div>
              <div className="shop-t">Soupe de potimarron</div>
              <div className="shop-row">
                <span className="shop-p">6,90 €</span>
                <span className="shop-q">— 1 +</span>
              </div>
              <div className="shop-cta">Ajouter au panier</div>
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
      <article className="rz-card rz-admin" data-cats="app" data-to="/realisations/chateau-larc">
        <div className="p-media">
          <img src="/images/img-17705de3.png" alt="" />
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
                src="/images/accueil-d-orion-admin-pour-le-chateau-l-arc-golf.jpg"
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
      <article className="rz-card rz-osmose" data-cats="shop">
        <div className="p-media">
          <img src="/images/img-016e5f0f.png" alt="" />
          <div className="win rz-wire">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Osmose Nutrition</span>
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
        <div className="p-meta">
          <h3 className="p-name">Osmose Nutrition</h3>
          <span className="p-tag">E-commerce · Abonnements · 2025</span>
        </div>
        <p className="p-desc">Une boutique en ligne avec abonnements.</p>
      </article>
      <article className="rz-card rz-parker" data-cats="da">
        <div className="p-media">
          <img src="/images/img-6c874cfa.png" alt="" />
          <div className="win rz-wire">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Parker & Smith</span>
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
        <div className="p-meta">
          <h3 className="p-name">Parker & Smith</h3>
          <span className="p-tag">Horlogerie · DA & UX · 2025</span>
        </div>
        <p className="p-desc">Direction artistique et UX pour une marque d’horlogerie.</p>
      </article>
      <article className="rz-card rz-tersen" data-cats="app">
        <div className="p-media">
          <img src="/images/img-2d4d06b2.png" alt="" />
          <div className="win rz-wire">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Tersen — Groupe Colas</span>
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
        <div className="p-meta">
          <h3 className="p-name">Tersen — Groupe Colas</h3>
          <span className="p-tag">Plateforme SaaS · 2025</span>
        </div>
        <p className="p-desc">Une plateforme SaaS, de la conception au développement.</p>
      </article>
      <article className="rz-card rz-boat" data-cats="site">
        <div className="p-media">
          <img src="/images/img-a8360f3c.png" alt="" />
          <div className="win rz-wire">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Absolute Boat</span>
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
        <div className="p-meta">
          <h3 className="p-name">Absolute Boat</h3>
          <span className="p-tag">Yachting · Site · 2024</span>
        </div>
        <p className="p-desc">Le site d’une entreprise du yachting.</p>
      </article>
    </div>
  )
}

function RzAvs() {
  return (
    <section className="rz-avs">
      <div className="av-card rz-av">
        <img className="av-bg" src="/images/img-5789321f.png" alt="" />
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
              <img
                src="/images/association-des-entrepreneurs-du-vexin.png"
                alt="Association des Entrepreneurs du Vexin"
              />
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
    </div>
  )
}

export function Desktop() {
  return (
    <section className="artboard g-page rz-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <RzBar />
      <RzGrid />
      <Clients />
      <RzAvs />
      <GCta />
    </section>
  )
}
