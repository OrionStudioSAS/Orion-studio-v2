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
          Tous<i>11</i>
        </a>
        <a className="" data-k="site">
          Sites internet<i>6</i>
        </a>
        <a className="" data-k="shop">
          E-commerce<i>4</i>
        </a>
        <a className="" data-k="app">
          Applications & outils<i>6</i>
        </a>
        <a className="" data-k="da">
          Direction artistique & UX<i>3</i>
        </a>
      </nav>
      <span className="rz-n">11 projets</span>
    </div>
  )
}

function RzGrid() {
  return (
    <div className="rz-grid">
      <article className="rz-card rz-larc" data-cats="site app da" data-to="/realisations/chateau-larc">
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
          Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et événements.
        </p>
        <a className="lnk rz-more">Lire l’étude de cas</a>
      </article>
      <article className="rz-card rz-standing" data-cats="app" data-to="/realisations/stand-ing">
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
      <article className="rz-card rz-balme" data-cats="site shop app" data-to="/realisations/moulin-de-balme">
        <div className="p-media">
          <img src="/images/4a723a9387332c.png" alt="" />
          <div className="win win-shot mdb-cwin">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">moulin-de-balme.fr</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img className="shot" src="/images/ce971a6eeb6bd1.jpg" alt="Le site du Moulin de Balme" />
            </div>
          </div>
        </div>
        <div className="p-meta">
          <h3 className="p-name">
            <Link to="/realisations/moulin-de-balme">Le Moulin de Balme</Link>
          </h3>
          <span className="p-tag">Boulangerie · Site + back-office</span>
        </div>
        <p className="p-desc">
          La boulangerie de Stéphane et Tomoko Reinat, à Brive : un site avec click & collect, et un
          back-office pour tout gérer depuis le fournil.
        </p>
        <a className="lnk rz-more">Lire l’étude de cas</a>
      </article>
      <article className="rz-card rz-dathy" data-cats="site da">
        <div className="p-media">
          <img src="/images/dc0beeb280fba7.png" alt="" />
          <div className="win win-shot mdb-cwin">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">dathy.fr</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img className="shot" src="/images/d6469bcda29f1a.jpg" alt="Le site DATHY" />
            </div>
          </div>
        </div>
        <div className="p-meta">
          <h3 className="p-name">DATHY</h3>
          <span className="p-tag">Site vitrine · DA</span>
        </div>
        <p className="p-desc">
          Le site d’un cabinet d’assistance à maîtrise d’ouvrage en bâtiment et travaux publics, dans le
          Vexin.
        </p>
        <Link to="/realisations/dathy" className="lnk rz-more" data-proj="dathy">
          Voir le projet
        </Link>
      </article>
      <article className="rz-card rz-ocha" data-cats="shop">
        <div className="p-media">
          <img src="/images/881de3b40197db.png" alt="" />
          <div className="win win-shot mdb-cwin">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">ochaandco.com</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img className="shot" src="/images/71eb80b3e243f6.jpg" alt="Le site Ocha & Co." />
            </div>
          </div>
        </div>
        <div className="p-meta">
          <h3 className="p-name">Ocha & Co.</h3>
          <span className="p-tag">E-commerce · Shopify</span>
        </div>
        <p className="p-desc">
          La boutique en ligne d’une maison de thé japonaise : matchas et thés bio, quiz pour trouver le sien.
        </p>
        <Link to="/realisations/ocha-and-co" className="lnk rz-more" data-proj="ocha-and-co">
          Voir le projet
        </Link>
      </article>
      <article className="rz-card rz-sc" data-cats="site app">
        <div className="p-media">
          <img src="/images/6cb0d8d4f25c2a.png" alt="" />
          <div className="win win-shot mdb-cwin">
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
              <img className="shot" src="/images/a4c19bfe3dd683.jpg" alt="Le site Swing Call" />
            </div>
          </div>
        </div>
        <div className="p-meta">
          <h3 className="p-name">Swing Call</h3>
          <span className="p-tag">Start-up · Site produit</span>
        </div>
        <p className="p-desc">Le site d’une start-up qui équipe les golfs d’un agent IA téléphonique.</p>
        <Link to="/realisations/swing-call" className="lnk rz-more" data-proj="swing-call">
          Voir le projet
        </Link>
      </article>
      <article className="rz-card rz-aev" data-cats="site app">
        <div className="p-media">
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
        <div className="p-meta">
          <h3 className="p-name">Association des Entrepreneurs du Vexin</h3>
          <span className="p-tag">Association · Site + espace membres</span>
        </div>
        <p className="p-desc">
          Le site du réseau des chefs d’entreprise du Vexin : membres, événements et adhésion en ligne.
        </p>
        <Link
          to="/realisations/entrepreneurs-du-vexin"
          className="lnk rz-more"
          data-proj="entrepreneurs-du-vexin"
        >
          Voir le projet
        </Link>
      </article>
      <article className="rz-card rz-ht" data-cats="site">
        <div className="p-media">
          <img src="/images/6fd799a3a74785.png" alt="" />
          <div className="win win-shot mdb-cwin">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">houssestaxi.com</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img className="shot" src="/images/17eafb1d2deb75.jpg" alt="Le site Housses Taxi" />
            </div>
          </div>
        </div>
        <div className="p-meta">
          <h3 className="p-name">Housses Taxi</h3>
          <span className="p-tag">Site vitrine · TPE</span>
        </div>
        <p className="p-desc">
          Le site d’un fabricant de housses sur mesure pour taxis et VTC, dans le Val-d’Oise.
        </p>
        <Link to="/realisations/housses-taxi" className="lnk rz-more" data-proj="housses-taxi">
          Voir le projet
        </Link>
      </article>
      <article className="rz-card rz-bocaux" data-cats="shop">
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
              <img className="shot" src="/images/4decbda594bb3c.jpg" alt="La boutique Les Bocaux du Vexin" />
            </div>
          </div>
        </div>
        <div className="p-meta">
          <h3 className="p-name">Les Bocaux du Vexin</h3>
          <span className="p-tag">E-commerce · Shopify · 2026</span>
        </div>
        <p className="p-desc">
          La boutique Shopify d’une conserverie du Vexin : bocaux consignés, box à composer et abonnement.
        </p>
        <Link to="/realisations/les-bocaux-du-vexin" className="lnk rz-more" data-proj="les-bocaux-du-vexin">
          Voir le projet
        </Link>
      </article>
      <article className="rz-card rz-admin" data-cats="app" data-to="/realisations/chateau-larc">
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
            <Link to="/orion-admin">Orion Admin</Link>
          </h3>
          <span className="p-tag">Interface d’administration · en option</span>
        </div>
        <p className="p-desc">
          L’interface faite sur mesure pour piloter son site : chiffres, contenus, langues et tout ce que l’activité demande.
        </p>
        <Link to="/orion-admin" className="lnk rz-more" data-proj="orion-admin">
          Voir le projet
        </Link>
      </article>
      <article className="rz-card rz-osmose" data-cats="shop da">
        <div className="p-media">
          <img src="/images/5e44d143820ccb.png" alt="" />
          <div className="win win-shot mdb-cwin">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Osmose Nutrition — maquettes</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img
                className="shot"
                src="/images/b351708a31fde9.jpg"
                alt="Maquette de la boutique Osmose Nutrition"
              />
            </div>
          </div>
        </div>
        <div className="p-meta">
          <h3 className="p-name">Osmose Nutrition</h3>
          <span className="p-tag">E-commerce · Refonte UX/CRO · 2025</span>
        </div>
        <p className="p-desc">
          La refonte de la boutique d’un fabricant de compléments alimentaires : diagnostic, routine sur
          mesure, abonnements.
        </p>
        <Link to="/realisations/osmose-nutrition" className="lnk rz-more" data-proj="osmose-nutrition">
          Voir le projet
        </Link>
      </article>
    </div>
  )
}

function RzAvs() {
  return (
    <section className="rz-avs">
      <div className="av-card rz-av">
        <img className="av-bg" src="/images/b1ad4d0b43d462.png" alt="" />
        <div className="av-veil" />
        <div className="av-l">
          <div className="av-k">
            <span>Avis clients</span>
            <span>Ils en parlent mieux que nous</span>
          </div>
          <img className="pxsvg av-q" src="/px/av-q-179751fb.svg" alt="" width={55} height={40} />
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
