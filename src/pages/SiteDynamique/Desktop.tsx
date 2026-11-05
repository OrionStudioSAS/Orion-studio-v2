import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/">Expertises</Link>
        {' / '}
        <Link to="/expertises/site-internet" className="xp-cr" data-exp="site-internet">
          Site internet
        </Link>{' '}
        / <b>Site dynamique</b>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Site dynamique</span>
        <span className="serif">que votre équipe fait vivre chaque jour.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Boutique en ligne, click & collect, réservation, espace client ou espace membres : un site relié à
          un back-office, où vos contenus, vos produits et vos demandes se gèrent sans nous appeler.
        </p>
        <div className="hero-cta">
          <div className="hero-btns">
            <a className="btn btn-ink">Analyser mon site</a>
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
    <div className="hero-media sx-media xp-media">
      <div className="hm-layer">
        <img src="/images/292b03574ca10b.png" alt="" />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="pxsvg omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde votre site ensemble ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.votre-site.fr
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
                <img className="pxsvg omark" src="/px/omark-214dbacb.svg" alt="" width={14} height={14} />
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
                Back-office
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
                Paiement
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
                Mobile
              </span>
            </div>
            <span className="send ch2-send">
              Analyser mon site <span className="kbd">↵</span>
            </span>
          </div>
        </div>
        <div className="ch2-sug">
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-ca3eed21.svg" alt="" width={10} height={10} />
            <b>Vendre en ligne</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-909d41ec.svg" alt="" width={10} height={10} />
            <b>Prendre des réservations</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-b6521826.svg" alt="" width={10} height={10} />
            <b>Créer un espace client</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Refaire mon site</b>
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
            Gratuit. Analyse de votre site et maquette de page d’accueil personnalisée, par e-mail sous
            quelques jours.
          </span>
        </div>
      </div>
      <div className="capt">L’atelier d’expédition, 10 h</div>
    </div>
  )
}

function CeQuUnSite() {
  return (
    <section className="sec" style={{ padding: '0', borderTop: 'none' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’un site dynamique
          <br />
          <span className="serif">change au quotidien.</span>
        </h2>
      </div>
      <div className="ocs">
        <div className="oc">
          <h3>Vendre et réserver en ligne</h3>
          <p>
            Commandes, réservations et rendez-vous pris sur le site à toute heure, avec la confirmation
            envoyée au client.
          </p>
        </div>
        <div className="oc">
          <h3>Un back-office à votre main</h3>
          <p>
            Produits, horaires, offres, actualités : votre équipe met à jour ce qui change, depuis un
            ordinateur ou un téléphone.
          </p>
        </div>
        <div className="oc">
          <h3>Des outils qui se parlent</h3>
          <p>Paiement, e-mails, agenda ou logiciel métier reliés au site, pour ne rien ressaisir.</p>
        </div>
      </div>
    </section>
  )
}

function CeQuOnLivre() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’on livre
          <br />
          <span className="serif">concrètement.</span>
        </h2>
        <p className="lead">
          Chaque projet assemble les briques dont vous avez besoin, pas une de plus. Les écrans ci-dessous
          sont des exemples.
        </p>
      </div>
      <div className="gcells">
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="win win-shot sx-real">
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
                  <img
                    className="shot"
                    src="/images/87791a3fdc31ca.jpg"
                    alt="Capture du site du Moulin de Balme"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Boutique & click & collect</h3>
            <p>Panier, paiement et retrait en boutique. Ici, le site du Moulin de Balme.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ui-sl">
                <div className="ul-h">Réservation · samedi</div>
                <div className="rs-s sl-g">
                  <span className="off">9:00</span>
                  <span className="">9:30</span>
                  <span className="on">10:00</span>
                  <span className="off">10:30</span>
                  <span className="">11:00</span>
                  <span className="">11:30</span>
                </div>
                <div className="shop-cta">Réserver ce créneau</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Réservation en ligne</h3>
            <p>Un créneau choisi en quelques touches, confirmé par e-mail.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="win win-shot sx-real">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">Le Moulin de Balme — Administration</span>
                  <span className="win-sp" />
                </div>
                <div className="win-body">
                  <img
                    className="shot"
                    src="/images/d89e25eb5f99ba.jpg"
                    alt="Écran du back-office du Moulin de Balme"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Back-office</h3>
            <p>Les écrans de votre équipe : produits, commandes, contenus. Ici, celui du Moulin de Balme.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Espace membres</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Mes réservations</span>
                  <b>2 à venir</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Mes factures</span>
                  <b>PDF</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Mon abonnement</span>
                  <b>Actif</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Espace client ou membres</h3>
            <p>Documents, commandes et informations réservés à ceux qui se connectent.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Contenus du site</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Pages</span>
                  <b>12</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Actualités</span>
                  <b>24</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Événements</span>
                  <b>6</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-wa" />
                  <span>Offre du mois</span>
                  <b>Brouillon</b>
                </div>
                <div className="shop-cta ul-btn">Modifier une page</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Actualités & contenus</h3>
            <p>Pages, actualités et événements publiés par votre équipe.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="auto u-bare">
                <div className="au-n">
                  <b>Commande en ligne</b>
                  <span>Payée</span>
                </div>
                <span className="au-l" />
                <div className="au-n">
                  <b>Back-office</b>
                  <span>En préparation</span>
                </div>
                <span className="au-l" />
                <div className="au-n au-on">
                  <b>E-mail client</b>
                  <span>Envoyé</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Connexion à vos outils</h3>
            <p>
              Paiement, e-mails ou logiciel métier reliés au site. La connexion est vérifiée au cadrage, avant
              le devis.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function CommentOnTravaille() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Comment
          <br />
          <span className="serif">on travaille.</span>
        </h2>
        <p className="lead">
          Une seule équipe du premier échange à la mise en ligne. Vous suivez chaque étape dans Orion Admin.
        </p>
      </div>
      <div className="steps s-steps">
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
        <div className="st-row" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          <div className="st ">
            <h3>
              <i />
              Cadrer
            </h3>
            <p>Fonctionnalités, contenus, outils à connecter et devis ferme.</p>
          </div>
          <div className="st cur">
            <h3>
              <i />
              Designer
            </h3>
            <p>Maquettes du site et des écrans du back-office.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Développer
            </h3>
            <p>Intégration, back-office et préprod ouverte pour tester.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Lancer
            </h3>
            <p>Mise en ligne, formation de votre équipe.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function UnProjetRecent() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">Un projet récent</h2>
        <Link to="/realisations" className="lnk">
          Toutes les réalisations
        </Link>
      </div>
      <div className="pf">
        <article className="pf-p">
          <div className="p-media">
            <img src="/images/231a9906889e87.png" alt="" />
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
            <h3 className="p-name">Château l’Arc Golf Club</h3>
            <span className="p-tag">Golf · Site + back-office · 2026</span>
          </div>
          <p className="p-desc">
            Château l’Arc Golf Club : un site qui donne envie de venir jouer, et un back-office pour gérer
            départs, offres et événements.
          </p>
        </article>
        <div className="rv pf-q">
          <p className="rv-q">
            « Leur expertise sur le développement sur-mesure est impressionnante. Une équipe à l’écoute,
            professionnelle, et qui livre dans les temps. »
          </p>
          <div className="rv-by">
            <div className="q-stars">
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
            </div>
            <b>Thierry Cordier</b>Association des Entrepreneurs du Vexin · Avis Google
          </div>
        </div>
      </div>
    </section>
  )
}

function ExpertisesAssociees() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '96px' }}>
        <h2 className="h2">Expertises associées</h2>
      </div>
      <div className="rls">
        <Link to="/expertises/site-vitrine" className="rl" data-exp="site-vitrine">
          <img className="pxsvg picon" src="/px/picon-5d9e4e01.svg" alt="" width={20} height={20} />
          <div>
            <b>Site vitrine</b>
            <span>Présenter votre activité et être contacté.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link
          to="/expertises/developpement-applications"
          className="rl"
          data-exp="developpement-applications"
        >
          <img className="pxsvg picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
          <div>
            <b>Développement d’applications</b>
            <span>Applications web, espaces clients, SaaS.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/automatisations" className="rl" data-exp="automatisations">
          <img className="pxsvg picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <div>
            <b>Automatisations</b>
            <span>Vos tâches répétitives, automatisées.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
      </div>
    </section>
  )
}

function QuestionsFrequentes() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="faq">
        <div className="faq-l">
          <h2 className="h2">
            Questions
            <br />
            <span className="serif">fréquentes.</span>
          </h2>
          <p className="lead">Les réponses aux questions qu’on nous pose le plus souvent sur ce sujet.</p>
          <Link to="/faq" className="lnk">
            Toute la FAQ
          </Link>
        </div>
        <div className="acc">
          <div className="q">
            <div className="q-h">
              <span>Combien coûte un site dynamique ?</span>
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
              Chaque projet est chiffré sur devis après un premier échange, gratuit et sans engagement. Le
              prix dépend des fonctionnalités (boutique, réservation, espace client) et des outils à
              connecter.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien de temps pour être en ligne ?</span>
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
              Un site avec boutique, réservation ou espace client demande davantage qu’un site vitrine (4 à 8
              semaines en moyenne) : le planning est fixé dans le devis.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Pourrai-je modifier mon site seul ?</span>
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
              Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Textes, images,
              pages et actualités se modifient sans connaissances techniques.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Pouvez-vous connecter nos outils ?</span>
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
              Oui, si l’outil le permet : la connexion (API, widget ou export) est vérifiée au cadrage, avant
              le devis.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Où mon site est-il hébergé ?</span>
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
              Selon la technologie : chez Webflow ou Shopify, ou sur un hébergeur adapté pour le code sur
              mesure. On vous recommande la solution la plus simple et la plus fiable pour votre cas.
            </p>
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
            Et si votre site<span className="serif">prenait les commandes à votre place ?</span>
          </h2>
          <div className="cta-r">
            <div className="cta-btns">
              <Link to="/realisations" className="btn btn-line">
                Voir nos réalisations
              </Link>
              <a className="btn btn-acc">
                Analyser mon site <span className="kbd">↵</span>
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
    <section className="artboard g-page s-page xp-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <CeQuUnSite />
      <CeQuOnLivre />
      <CommentOnTravaille />
      <UnProjetRecent />
      <ExpertisesAssociees />
      <QuestionsFrequentes />
      <GCta />
    </section>
  )
}
