import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">Expertises</Link>
        {' / '}
        <Link to="/expertises/site-internet" className="xp-cr" data-exp="site-internet">
          Site internet
        </Link>{' '}
        / <b>Site dynamique</b>
      </div>
      <h1 className="mo-h1">
        Site dynamique<span className="serif">que votre équipe fait vivre chaque jour.</span>
      </h1>
      <p className="mo-lead">
        Boutique en ligne, click & collect, réservation, espace client ou espace membres : un site relié à un
        back-office, où vos contenus, vos produits et vos demandes se gèrent sans nous appeler.
      </p>
      <div className="mo-btns">
        <a className="btn btn-ink mo-btn">Analyser mon site</a>
        <Link to="/realisations" className="btn btn-ghost mo-btn">
          Voir nos réalisations
        </Link>
      </div>
    </section>
  )
}

function MoMedia() {
  return (
    <div className="mo-media mg-media xp-mmedia">
      <div className="hm-layer">
        <img className="mo-media-bg" src="/images/70b0b21ba9091e.jpg" alt="" />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="pxsvg omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde votre site
            <br />
            ensemble ?
          </span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              https://www.votre-site.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site</span>
          </div>
          <div className="mo-crit">
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Back-office
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Paiement
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
              Mobile
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
            </span>
            <span className="send mo-send">Analyser mon site</span>
          </div>
        </div>
        <div className="mo-sug">
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
            Gratuit. Analyse de votre site et maquette de page d’accueil personnalisée, par e-mail sous
            quelques jours.
          </span>
        </div>
      </div>
      <div className="mo-capt">L’atelier d’expédition, 10 h</div>
    </div>
  )
}

function CeQuUnSite() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce qu’un site dynamique<span className="serif">change au quotidien.</span>
        </h2>
      </div>
      <div className="sxm-ocs">
        <div className="sxm-oc">
          <h3>Vendre et réserver en ligne</h3>
          <p>
            Commandes, réservations et rendez-vous pris sur le site à toute heure, avec la confirmation
            envoyée au client.
          </p>
        </div>
        <div className="sxm-oc">
          <h3>Un back-office à votre main</h3>
          <p>
            Produits, horaires, offres, actualités : votre équipe met à jour ce qui change, depuis un
            ordinateur ou un téléphone.
          </p>
        </div>
        <div className="sxm-oc">
          <h3>Des outils qui se parlent</h3>
          <p>Paiement, e-mails, agenda ou logiciel métier reliés au site, pour ne rien ressaisir.</p>
        </div>
      </div>
    </section>
  )
}

function CeQuOnLivre() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce qu’on livre<span className="serif">concrètement.</span>
        </h2>
        <p className="mo-lead">
          Chaque projet assemble les briques dont vous avez besoin, pas une de plus. Les écrans ci-dessous
          sont des exemples.
        </p>
      </div>
      <div className="sxm-cards">
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Boutique & click & collect</h3>
          <p>Panier, paiement et retrait en boutique. Ici, le site du Moulin de Balme.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Réservation en ligne</h3>
          <p>Un créneau choisi en quelques touches, confirmé par e-mail.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Back-office</h3>
          <p>Les écrans de votre équipe : produits, commandes, contenus. Ici, celui du Moulin de Balme.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Espace client ou membres</h3>
          <p>Documents, commandes et informations réservés à ceux qui se connectent.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Actualités & contenus</h3>
          <p>Pages, actualités et événements publiés par votre équipe.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Connexion à vos outils</h3>
          <p>
            Paiement, e-mails ou logiciel métier reliés au site. La connexion est vérifiée au cadrage, avant
            le devis.
          </p>
        </article>
      </div>
    </section>
  )
}

function CommentOnTravaille() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Comment<span className="serif">on travaille.</span>
        </h2>
        <p className="mo-lead">Une seule équipe du premier échange à la mise en ligne.</p>
      </div>
      <ol className="sxm-steps">
        <li>
          <b>Cadrer</b>
          <span>Fonctionnalités, contenus, outils à connecter et devis ferme.</span>
        </li>
        <li>
          <b>Designer</b>
          <span>Maquettes du site et des écrans du back-office.</span>
        </li>
        <li>
          <b>Développer</b>
          <span>Intégration, back-office et préprod ouverte pour tester.</span>
        </li>
        <li>
          <b>Lancer</b>
          <span>Mise en ligne, formation de votre équipe.</span>
        </li>
      </ol>
    </section>
  )
}

function ExpertisesAssociees() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Expertises<span className="serif">associées.</span>
        </h2>
      </div>
      <div className="xpm-rel">
        <Link to="/expertises/site-vitrine" className="rl xpm-rl" data-exp="site-vitrine">
          <img className="pxsvg picon" src="/px/picon-5d9e4e01.svg" alt="" width={20} height={20} />
          <div>
            <b>Site vitrine</b>
            <span>Présenter votre activité et être contacté.</span>
          </div>
        </Link>
        <Link
          to="/expertises/developpement-applications"
          className="rl xpm-rl"
          data-exp="developpement-applications"
        >
          <img className="pxsvg picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
          <div>
            <b>Développement d’applications</b>
            <span>Applications web, espaces clients, SaaS.</span>
          </div>
        </Link>
        <Link to="/expertises/automatisations" className="rl xpm-rl" data-exp="automatisations">
          <img className="pxsvg picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <div>
            <b>Automatisations</b>
            <span>Vos tâches répétitives, automatisées.</span>
          </div>
        </Link>
      </div>
    </section>
  )
}

function VosQuestionsNosReponses() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Vos questions,<span className="serif">nos réponses.</span>
        </h2>
      </div>
      <div className="mo-faq">
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien coûte un site dynamique ?</span>
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
          <p>
            Chaque projet est chiffré sur devis après un premier échange, gratuit et sans engagement. Le prix
            dépend des fonctionnalités (boutique, réservation, espace client) et des outils à connecter.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien de temps pour être en ligne ?</span>
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
          <p>
            Un site avec boutique, réservation ou espace client demande davantage qu’un site vitrine (4 à 8
            semaines en moyenne) : le planning est fixé dans le devis.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pourrai-je modifier mon site seul ?</span>
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
          <p>
            Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Textes, images, pages
            et actualités se modifient sans connaissances techniques.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pouvez-vous connecter nos outils ?</span>
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
          <p>
            Oui, si l’outil le permet : la connexion (API, widget ou export) est vérifiée au cadrage, avant le
            devis.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Où mon site est-il hébergé ?</span>
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
          <p>
            Selon la technologie : chez Webflow ou Shopify, ou sur un hébergeur adapté pour le code sur
            mesure. On vous recommande la solution la plus simple et la plus fiable pour votre cas.
          </p>
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
          Et si votre site<span className="serif">prenait les commandes à votre place ?</span>
        </h2>
        <a className="btn btn-acc mo-btn">Analyser mon site</a>{' '}
        <Link to="/realisations" className="btn btn-line mo-btn">
          Voir nos réalisations
        </Link>{' '}
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
    <section className="artboard mo xp-page">
      <MobileNav />
      <MoHero />
      <MoMedia />
      <CeQuUnSite />
      <CeQuOnLivre />
      <CommentOnTravaille />
      <ExpertisesAssociees />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
