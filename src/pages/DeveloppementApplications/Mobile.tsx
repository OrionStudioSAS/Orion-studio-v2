import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Expertises / <b>Développement d’applications</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Développement d’applications web<span className="serif">taillées pour votre métier.</span>
      </h1>
      <p className="mo-lead">
        Espaces clients, outils internes, back-offices, plateformes SaaS : on développe des applications web
        robustes, agréables à utiliser et faciles à faire évoluer.
      </p>
      <div className="mo-btns">
        <a className="btn btn-ink mo-btn">Envoyer mon besoin</a>
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
        <img className="mo-media-bg" src="/images/9f7de2a9a191e7.jpg" alt="" />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="px omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>Quel outil vous manque ?</span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              Un espace client pour suivre les commandes et télécharger les factures
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site</span>
          </div>
          <div className="mo-crit">
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Outil métier
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              SaaS
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              API
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
            <span className="send mo-send">Envoyer mon besoin</span>
          </div>
        </div>
        <div className="mo-sug">
          <span className="sg">
            <img className="px picon" src="/px/picon-b6521826.svg" alt="" width={10} height={10} />
            <b>Créer un espace client</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-b6521826.svg" alt="" width={10} height={10} />
            <b>Remplacer un tableur par un outil</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-909d41ec.svg" alt="" width={10} height={10} />
            <b>Relier mes outils</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
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
          <span>Gratuit. On vous répond sous quelques jours avec une première piste et une estimation.</span>
        </div>
      </div>
      <div className="mo-capt">L’atelier de l’horloger, 15 h</div>
    </div>
  )
}

function CeQuUnBon() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce qu’un bon outil<span className="serif">change au quotidien.</span>
        </h2>
      </div>
      <div className="sxm-ocs">
        <div className="sxm-oc">
          <h3>Moins de ressaisie</h3>
          <p>L’information est saisie une fois, au bon endroit, et suit son chemin toute seule.</p>
        </div>
        <div className="sxm-oc">
          <h3>Tout au même endroit</h3>
          <p>Clients, commandes, documents et échanges réunis dans une interface claire.</p>
        </div>
        <div className="sxm-oc">
          <h3>Un outil qui grandit avec vous</h3>
          <p>Une base de code propre, documentée, prête pour les évolutions de demain.</p>
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
            <div className="u-bare um">
              <div className="msg msg-l">
                <b>Julien</b>La facture de novembre est disponible dans votre espace.
              </div>
              <div className="msg msg-r">
                <b>Vous</b>Merci, je la transmets à la compta.
              </div>
            </div>
          </div>
          <h3>Espaces clients</h3>
          <p>Suivi, documents, messagerie : vos clients trouvent tout sans vous appeler.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Commandes du jour</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>#2291 · Atelier Morel</span>
                <b>Expédiée</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>#2292 · SARL Ducret</span>
                <b>En préparation</b>
              </div>
              <div className="ul-r">
                <i className="sq" />
                <span>#2293 · Maison Vidal</span>
                <b>À valider</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>#2294 · Hôtel Belles Rives</span>
                <b>Expédiée</b>
              </div>
            </div>
          </div>
          <h3>Outils internes & back-offices</h3>
          <p>Des écrans pensés pour vos équipes, pas pour un tableur.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ub">
              <div className="ul-h">Utilisateurs actifs</div>
              <div className="bars">
                <i style={{ height: '28px' }} />
                <i style={{ height: '44px' }} />
                <i style={{ height: '36px' }} />
                <i style={{ height: '60px' }} />
                <i style={{ height: '52px' }} />
                <i style={{ height: '76px' }} />
                <i style={{ height: '68px' }} />
                <i style={{ height: '92px' }} />
                <i style={{ height: '84px' }} />
                <i style={{ height: '108px' }} />
              </div>
            </div>
          </div>
          <h3>Plateformes SaaS</h3>
          <p>Comptes, abonnements, rôles et tableaux de bord, de la V1 à la montée en charge.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="code u-bare">
              <div>
                <span className="c-k">POST</span> <span className="c-f">/api/orders</span>
              </div>
              <div>
                <span className="c-k">→</span> ERP <span className="c-s">synchronisé</span>
              </div>
              <div>
                <span className="c-k">→</span> Facture <span className="c-s">générée</span>
              </div>
              <div>
                <span className="c-k">→</span> E-mail client <span className="c-s">envoyé</span>
              </div>
              <div>
                <span className="c-ok">
                  <i />
                  200 OK — 184 ms
                </span>
              </div>
            </div>
          </div>
          <h3>API & intégrations</h3>
          <p>On relie votre application à vos outils : ERP, CRM, paiement, logistique.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Configurateur de stand</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Structure</span>
                <b>Arche</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Comptoir</span>
                <b>Avec réserve</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Écran</span>
                <b>55 pouces</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>Surface</span>
                <b>18 m²</b>
              </div>
              <div className="shop-cta ul-btn">Recevoir mon devis</div>
            </div>
          </div>
          <h3>Configurateurs</h3>
          <p>Le client compose son produit, voit le résultat et reçoit son devis.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Journal des versions</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>v2.4 · Export comptable</span>
                <b>En ligne</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>v2.3 · Rôles utilisateurs</span>
                <b>En ligne</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>v2.5 · Application mobile</span>
                <b>En cours</b>
              </div>
            </div>
          </div>
          <h3>Maintenance & évolutions</h3>
          <p>Mises à jour, sécurité, nouvelles fonctionnalités : on reste à vos côtés.</p>
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
          <span>Ateliers métier, parcours et périmètre de la V1.</span>
        </li>
        <li>
          <b>Designer</b>
          <span>Prototype cliquable testé avec vos équipes.</span>
        </li>
        <li>
          <b>Développer</b>
          <span>Livraisons régulières sur une préprod.</span>
        </li>
        <li>
          <b>Lancer & faire grandir</b>
          <span>Mise en production, suivi et évolutions.</span>
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
        <Link to="/expertises/automatisations" className="rl xpm-rl" data-exp="automatisations">
          <img className="px picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <div>
            <b>Automatisations</b>
            <span>Vos tâches répétitives, automatisées.</span>
          </div>
        </Link>
        <Link to="/expertises/site-internet" className="rl xpm-rl" data-exp="site-internet">
          <img className="px picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <div>
            <b>Site internet</b>
            <span>Vitrine, dynamique ou concept.</span>
          </div>
        </Link>
        <Link to="/expertises/geo" className="rl xpm-rl" data-exp="geo">
          <img className="px picon" src="/px/picon-84c912e7.svg" alt="" width={20} height={20} />
          <div>
            <b>GEO</b>
            <span>Être cité par les IA.</span>
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
            <span>Quelles technologies utilisez-vous ?</span>
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
            Principalement Next.js, React et Node.js, avec une base de données adaptée au projet. On choisit
            des technologies répandues et bien documentées, pour que votre application reste maintenable par
            n’importe quelle équipe.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Proposez-vous une maintenance ?</span>
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
            Oui : mises à jour, sauvegardes, surveillance et petites évolutions. Le contenu de la maintenance
            dépend de la technologie de votre site et vous est proposé au devis.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Le prix peut-il changer en cours de projet ?</span>
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
            Non, pas sans votre accord. Le devis fixe un périmètre ; si vous souhaitez ajouter une
            fonctionnalité en route, on vous chiffre l’ajout avant de le réaliser.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Comment suis-je informé de l’avancement ?</span>
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
            Dans Orion Admin, l’espace client inclus dans chaque projet : étapes, documents, messages et
            validations au même endroit.
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
          Un outil métier en tête ?<span className="serif">Dessinons-le ensemble.</span>
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
          <img className="px logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
          <img className="px logo-w" src="/px/logo-w-438c9e6d.svg" alt="" width={151} height={21} />
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
            <a>Méthode</a>
            <Link to="/realisations/orion-admin">Orion Admin</Link>
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
            className="px bigword"
            src="/px/bigword-a5329b0d.svg"
            alt=""
            width={416}
            height={40}
            style={{ left: '-13px', top: '132px', opacity: '0.16' }}
          />
          <i className="betel" style={{ left: '193px', top: '88px' }} />
          <span className="orio" style={{ left: '91px', top: '34px' }} title="Orio et Bételgeuse">
            <span className="orio-in">
              <img className="px" src="/px/art-c8610941.svg" alt="" width={88} height={92} />
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
      <CeQuUnBon />
      <CeQuOnLivre />
      <CommentOnTravaille />
      <ExpertisesAssociees />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
