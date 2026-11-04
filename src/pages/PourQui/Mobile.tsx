import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Pour qui ? / <b>Tous les secteurs</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Tous les secteurs<span className="serif">un site pensé pour votre métier.</span>
      </h1>
      <p className="mo-lead">Chaque métier a ses outils. Choisissez le vôtre.</p>
      <label className="mr-search">
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
        <input
          className="r-q sx-q"
          type="search"
          placeholder="Votre métier : pâtissier, plombier…"
          aria-label="Chercher votre secteur"
          autoComplete="off"
        />
      </label>
    </section>
  )
}

function SxList() {
  return (
    <div className="sx-list">
      <Link
        to="/pour-qui/golfs"
        className="sx-row"
        data-sector="golf"
        data-q="golf club parcours green départs practice pro-shop sport"
      >
        <span className="sx-th">
          <img src="/images/43c1e04cd1ba76.png" alt="" />
          <span className="sec-av">
            <span>
              <img
                className="px"
                src="/px/art-adc97f27.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
        </span>
        <div>
          <h3>Golfs</h3>
          <p>à la hauteur de son parcours.</p>
          <span className="sx-feats">Réservation de départs · Espace membres · Boutique du pro-shop</span>
        </div>
      </Link>
      <Link
        to="/pour-qui/boulangeries"
        className="sx-row"
        data-sector="boulangerie"
        data-q="boulangerie boulanger pâtisserie pâtissier viennoiserie traiteur fournil pain chocolatier commerce de bouche"
      >
        <span className="sx-th">
          <img src="/images/a9c34e2fba5aac.png" alt="" />
          <span className="sec-av">
            <span>
              <img
                className="px"
                src="/px/art-e0dda6d2.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
        </span>
        <div>
          <h3>Boulangeries</h3>
          <p>qui donne faim avant l’ouverture.</p>
          <span className="sx-feats">Vitrine de la boutique · Commande de gâteaux · Retrait en boutique</span>
        </div>
      </Link>
      <Link
        to="/pour-qui/restaurants"
        className="sx-row"
        data-sector="restaurant"
        data-q="restaurant bistrot brasserie café bar bar à vin traiteur cuisine table réservation pizzeria"
      >
        <span className="sx-th">
          <img src="/images/2a67fb87b6ce36.png" alt="" />
          <span className="sec-av">
            <span>
              <svg
                viewBox="-1 -1 16 16"
                width="100%"
                height="100%"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="-1" y="-1" width="16" height="16" fill="#E4E9EE" />
                <rect x="6" y="2" width="2" height="1" fill="#6E7781" />
                <rect x="6" y="3" width="2" height="1" fill="#6E7781" />
                <rect x="4" y="4" width="6" height="1" fill="#B9C2CB" />
                <rect x="3" y="5" width="1" height="1" fill="#B9C2CB" />
                <rect x="4" y="5" width="1" height="1" fill="#F4F6F8" />
                <rect x="5" y="5" width="7" height="1" fill="#B9C2CB" />
                <rect x="2" y="6" width="1" height="1" fill="#B9C2CB" />
                <rect x="3" y="6" width="1" height="1" fill="#F4F6F8" />
                <rect x="4" y="6" width="9" height="1" fill="#B9C2CB" />
                <rect x="2" y="7" width="1" height="1" fill="#B9C2CB" />
                <rect x="3" y="7" width="1" height="1" fill="#F4F6F8" />
                <rect x="4" y="7" width="9" height="1" fill="#B9C2CB" />
                <rect x="2" y="8" width="11" height="1" fill="#B9C2CB" />
                <rect x="1" y="9" width="13" height="1" fill="#6E7781" />
              </svg>
            </span>
          </span>
        </span>
        <div>
          <h3>Restaurants</h3>
          <p>qui remplit les tables.</p>
          <span className="sx-feats">Réservation de table · Carte & menus · Privatisation & groupes</span>
        </div>
      </Link>
      <Link
        to="/pour-qui/associations"
        className="sx-row"
        data-sector="asso"
        data-q="association club sportif culture solidaire fédération bénévoles adhérents fondation"
      >
        <span className="sx-th">
          <img src="/images/36d086c9b8c20f.png" alt="" />
          <span className="sec-av">
            <span>
              <svg
                viewBox="-1 -1 16 16"
                width="100%"
                height="100%"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="-1" y="-1" width="16" height="16" fill="#FFE3D9" />
                <rect x="3" y="2" width="3" height="1" fill="#FF4D1A" />
                <rect x="8" y="2" width="3" height="1" fill="#FF4D1A" />
                <rect x="2" y="3" width="10" height="1" fill="#FF4D1A" />
                <rect x="2" y="4" width="1" height="1" fill="#FF4D1A" />
                <rect x="3" y="4" width="2" height="1" fill="#FFB59C" />
                <rect x="5" y="4" width="7" height="1" fill="#FF4D1A" />
                <rect x="2" y="5" width="1" height="1" fill="#FF4D1A" />
                <rect x="3" y="5" width="1" height="1" fill="#FFB59C" />
                <rect x="4" y="5" width="8" height="1" fill="#FF4D1A" />
                <rect x="2" y="6" width="10" height="1" fill="#FF4D1A" />
                <rect x="3" y="7" width="8" height="1" fill="#FF4D1A" />
                <rect x="11" y="7" width="1" height="1" fill="#C93A12" />
                <rect x="4" y="8" width="6" height="1" fill="#FF4D1A" />
                <rect x="10" y="8" width="1" height="1" fill="#C93A12" />
                <rect x="5" y="9" width="4" height="1" fill="#FF4D1A" />
                <rect x="9" y="9" width="1" height="1" fill="#C93A12" />
                <rect x="6" y="10" width="2" height="1" fill="#FF4D1A" />
                <rect x="8" y="10" width="1" height="1" fill="#C93A12" />
              </svg>
            </span>
          </span>
        </span>
        <div>
          <h3>Associations</h3>
          <p>qui fait venir des membres.</p>
          <span className="sx-feats">Adhésion en ligne · Agenda & inscriptions · Dons en ligne</span>
        </div>
      </Link>
      <Link
        to="/pour-qui/artisans"
        className="sx-row"
        data-sector="artisan"
        data-q="artisan plombier électricien menuisier peintre paysagiste maçon couvreur chauffagiste carreleur bâtiment travaux btp"
      >
        <span className="sx-th">
          <img src="/images/92a72e131c852c.png" alt="" />
          <span className="sec-av">
            <span>
              <svg
                viewBox="-1 -1 16 16"
                width="100%"
                height="100%"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="-1" y="-1" width="16" height="16" fill="#DCE6F0" />
                <rect x="2" y="2" width="1" height="1" fill="#8994A3" />
                <rect x="3" y="2" width="8" height="1" fill="#4A5563" />
                <rect x="1" y="3" width="1" height="1" fill="#8994A3" />
                <rect x="2" y="3" width="10" height="1" fill="#4A5563" />
                <rect x="2" y="4" width="9" height="1" fill="#4A5563" />
                <rect x="6" y="5" width="2" height="1" fill="#C98B4E" />
                <rect x="6" y="6" width="2" height="1" fill="#C98B4E" />
                <rect x="6" y="7" width="2" height="1" fill="#C98B4E" />
                <rect x="6" y="8" width="2" height="1" fill="#C98B4E" />
                <rect x="6" y="9" width="2" height="1" fill="#C98B4E" />
                <rect x="6" y="10" width="2" height="1" fill="#C98B4E" />
                <rect x="6" y="11" width="2" height="1" fill="#8A5523" />
                <rect x="6" y="12" width="2" height="1" fill="#8A5523" />
              </svg>
            </span>
          </span>
        </span>
        <div>
          <h3>Artisans</h3>
          <p>qui remplit votre carnet de commandes.</p>
          <span className="sx-feats">Demande de devis · Réalisations · Zone d’intervention</span>
        </div>
      </Link>
      <Link
        to="/pour-qui/hotels-gites"
        className="sx-row"
        data-sector="hotel"
        data-q="hôtel hotel gîte gite chambre d’hôtes chambres d’hôtes camping location saisonnière auberge résidence tourisme"
      >
        <span className="sx-th">
          <img src="/images/716d05a1bf2b80.png" alt="" />
          <span className="sec-av">
            <span>
              <img
                className="px"
                src="/px/art-e6cc4a17.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
        </span>
        <div>
          <h3>Hôtels & gîtes</h3>
          <p>qui donne envie de réserver en direct.</p>
          <span className="sx-feats">Réservation en direct · Chambres · Site multilingue</span>
        </div>
      </Link>
      <Link
        to="/pour-qui/coiffeurs"
        className="sx-row"
        data-sector="coiffure"
        data-q="coiffeur coiffure barbier salon institut beauté esthétique esthéticienne onglerie spa"
      >
        <span className="sx-th">
          <img src="/images/94ab8df52abd7b.png" alt="" />
          <span className="sec-av">
            <span>
              <img
                className="px"
                src="/px/art-b8783d94.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
        </span>
        <div>
          <h3>Coiffeurs</h3>
          <p>qui remplit l’agenda.</p>
          <span className="sx-feats">Prise de rendez-vous · Prestations · Rappels automatiques</span>
        </div>
      </Link>
      <Link
        to="/pour-qui/immobilier"
        className="sx-row"
        data-sector="immo"
        data-q="immobilier agence immobilière agent mandataire syndic promoteur location gestion locative"
      >
        <span className="sx-th">
          <img src="/images/e8741b40da9842.png" alt="" />
          <span className="sec-av">
            <span>
              <img
                className="px"
                src="/px/art-b70ac2f6.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
        </span>
        <div>
          <h3>Immobilier</h3>
          <p>qui fait rentrer des mandats.</p>
          <span className="sx-feats">Annonces synchronisées · Demande d’estimation · Alertes acquéreurs</span>
        </div>
      </Link>
    </div>
  )
}

function SxEmpty() {
  return (
    <div className="sx-empty sx-mempty" hidden>
      <b>Pas encore de page pour ce métier.</b>
      <p>
        On construit aussi pour les autres : dites-nous ce que vous faites, ou voyez nos pages par taille
        d’entreprise.
      </p>
      <div className="sx-empty-b">
        <a className="btn btn-ink" data-go="cta">
          Parlons de votre projet
        </a>
        <Link to="/pour-qui/tpe-pme" className="lnk" data-sector="pme">
          TPE & PME
        </Link>
        <Link to="/pour-qui/independants" className="lnk" data-sector="indep">
          Indépendants
        </Link>
        <Link to="/pour-qui/marques-e-commerce" className="lnk" data-sector="shop">
          Marques & e-commerçants
        </Link>
      </div>
    </div>
  )
}

function MoFt() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Votre métier n’est pas dans la liste ?<span className="serif">On s’adapte.</span>
        </h2>
        <a className="btn btn-acc mo-btn">Démarrer un projet</a>{' '}
        <a className="btn btn-line mo-btn">Analyser mon site</a>{' '}
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
    <section className="artboard mo sx-page sx-all">
      <MobileNav />
      <MoHero />
      <SxList />
      <SxEmpty />
      <MoFt />
    </section>
  )
}
