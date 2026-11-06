import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoCommentOnTravaille2 } from '../../components/shared/MoCommentOnTravaille2'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Création de site internet / <b>Massy</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Création de site internet à Massy
        <span className="serif">pour les entreprises de Massy Atlantis et alentour.</span>
      </h1>
      <p className="mo-lead">
        Desservie par sa gare TGV et toute proche du plateau de Saclay, Massy attire sièges d’entreprises,
        sociétés de services, start-up et commerces. On conçoit et on refond des sites sur mesure pour les
        entreprises massicoises, avec un objectif simple : générer des contacts.
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
    <div className="mo-media mg-media">
      <div className="hm-layer">
        <img
          className="mo-media-bg"
          src="/images/lc-mo-massy.png"
          alt="Le quartier Massy Atlantis et la gare TGV, en pixel art"
        />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="pxsvg omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde le site
            <br />
            de votre entreprise massicoise ?
          </span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              https://www.votre-entreprise.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site</span>
          </div>
          <div className="mo-crit">
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Horaires
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Commandes
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Google
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
            <img className="pxsvg picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Refaire le site de la boutique</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-ca3eed21.svg" alt="" width={10} height={10} />
            <b>Prendre les commandes en ligne</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Remonter sur Google</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-92b066cf.svg" alt="" width={10} height={10} />
            <b>Être cité par ChatGPT</b>
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
      <div className="mo-capt">Le fournil, avant l’ouverture</div>
    </div>
  )
}

function CreationEtRefonteA() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Création et refonte<span className="serif">à Massy.</span>
        </h2>
        <p className="mo-lead">
          Pour des entreprises qui vendent une expertise ou une technologie : un site qui explique, puis qui
          convertit.
        </p>
      </div>
      <div className="lcm-cards">
        <article className="lc-card lca">
          <div className="lcv-vis lcv-build lca">
            <div className="win lcv-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">votre-societe-massy.fr</span>
                <span className="win-sp" />
              </div>
              <div className="lcv-build-in">
                <div className="wire lcv-wire" style={{ border: 'none' }}>
                  <i style={{ width: '62%' }} />
                  <i style={{ width: '38%' }} />
                  <i className="blk" />
                  <i style={{ width: '70%' }} />
                  <i style={{ width: '46%' }} />
                </div>
                <img className="lcv-built" src="/images/lc-massy.png" alt="" />
                <span className="lcv-stamp">En ligne</span>
              </div>
            </div>
            <div className="lcv-steps">
              <span>Maquette</span>
              <span>Développement</span>
              <span>Mise en ligne</span>
            </div>
          </div>
          <span className="lc-k">Création</span>
          <h3>Créer votre site</h3>
          <p>
            Vous lancez une société de services ou une start-up à Massy : un site prêt pour vos premiers
            rendez-vous, qui évolue avec votre offre.
          </p>
          <ul>
            <li>Site vitrine ou site produit sur mesure</li>
            <li>Démo, simulateur ou prise de rendez-vous</li>
            <li>Version anglaise si vos clients sont à l’étranger</li>
          </ul>
          <Link to="/expertises/site-internet" className="lnk" data-pv="site-internet">
            Nos sites internet
          </Link>
        </article>
        <article className="lc-card lca">
          <div className="lcv-vis lcv-ba lca" style={{ '--x': '55%' } as CSSProperties}>
            <div className="lcv-ba-old">
              <div className="lcv-old-h">Bienvenue sur notre site</div>
              <div className="lcv-old-l">
                <u>Accueil</u>
                <u>Nos services</u>
                <u>Contact</u>
              </div>
              <div className="lcv-old-img" />
              <div className="lcv-old-t">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="lcv-ba-new">
              <img src="/images/lc-massy.png" alt="" />
              <div className="lcv-new-bar">
                <b>votre-societe-massy.fr</b>
                <span>Démo</span>
              </div>
            </div>
            <span className="lcv-ba-h" aria-hidden="true">
              <i />
            </span>
            <span className="lcv-ba-k lcv-k-a">Avant</span>
            <span className="lcv-ba-k lcv-k-b">Après</span>
            <input
              className="lcv-ba-r"
              type="range"
              min="5"
              max="95"
              defaultValue="55"
              aria-label="Comparer avant et après la refonte"
            />
          </div>
          <span className="lc-k">Refonte</span>
          <h3>Refondre votre site</h3>
          <p>
            Votre site ne génère pas de contacts : on revoit l’arborescence, les messages et les parcours, en
            gardant le référencement acquis.
          </p>
          <ul>
            <li>Analyse des pages qui attirent et de celles qui convertissent</li>
            <li>Nouvelle arborescence, reprise des contenus</li>
            <li>Formulaires reliés à votre CRM</li>
          </ul>
          <a className="lnk" data-pv="__hero__">
            Analyser mon site actuel
          </a>
        </article>
      </div>
    </section>
  )
}

function PourQuiAMassy() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Pour qui,<span className="serif">à Massy.</span>
        </h2>
      </div>
      <div className="lc-rows lcm-rows">
        <div className="lc-row lca">
          <b>PME de services ou ESN</b>
          <p>Transformer un site plaquette en source de rendez-vous.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Pages expertises, cas clients, prise de rendez-vous.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Start-up technologique</b>
          <p>Expliquer un produit complexe et obtenir des démos.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Page produit, démo, simulateur, comme pour Swing Call.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Hôtel ou restaurant</b>
          <p>Capter les voyageurs d’affaires de la gare TGV.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Réservation directe, site en français et en anglais.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Commerce ou indépendant</b>
          <p>Être trouvé dans le quartier et prendre des rendez-vous.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Fiche Google, prestations, réservation en ligne.
          </p>
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
          Ce qu’on livre,<span className="serif">pour Massy.</span>
        </h2>
        <p className="mo-lead">Les écrans ci-dessous sont des exemples.</p>
      </div>
      <div className="lcv-mrail">
        <div className="lcv-mtrack">
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="serp u-bare">
                  <div className="serp-q">
                    <svg
                      className="lcv-mag"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                    <span className="lcv-type" data-type="esn massy" />
                    <i className="lcv-caret" />
                  </div>
                  <div className="serp-r lcv-res">
                    <span className="serp-u">votre-societe-massy.fr</span>
                    <b>ESN à Massy — Ingénierie et conseil IT</b>
                    <span className="serp-d">
                      Nos expertises, nos références et un rendez-vous en ligne avec un consultant.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>SEO local</h3>
              <p>Être trouvé sur « ESN Massy », « hôtel Massy TGV », et dans les réponses des IA.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="uf lcv-fill">
                  <div className="ul-h">Réserver une démo</div>
                  <div className="uf-g">
                    <label className="fld fld-f">
                      <span>Entreprise</span>
                      <b data-v="Votre société" />
                    </label>
                    <label className="fld">
                      <span>Poste</span>
                      <b data-v="Directeur technique" />
                    </label>
                    <label className="fld">
                      <span>Besoin</span>
                      <b data-v="Démo du produit" />
                    </label>
                    <label className="fld">
                      <span>Créneau</span>
                      <b data-v="Mardi 14 h" />
                    </label>
                  </div>
                  <div className="shop-cta">Réserver la démo</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Démo en ligne</h3>
              <p>Start-up et deeptech : des démos réservées depuis la page produit.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="uf lcv-fill">
                  <div className="ul-h">Hôtel · réserver</div>
                  <div className="uf-g">
                    <label className="fld fld-f">
                      <span>Arrivée</span>
                      <b data-v="9 mars" />
                    </label>
                    <label className="fld">
                      <span>Départ</span>
                      <b data-v="11 mars" />
                    </label>
                    <label className="fld">
                      <span>Voyageurs</span>
                      <b data-v="1 adulte" />
                    </label>
                    <label className="fld">
                      <span>Motif</span>
                      <b data-v="Déplacement pro" />
                    </label>
                  </div>
                  <div className="shop-cta">Voir les disponibilités</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Réservation directe</h3>
              <p>Hôtels près de la gare : réserver en direct, sans commission de plateforme.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="ul lcv-langs">
                  <div className="ul-h">Langue du site</div>
                  <div className="ul-r">
                    <i className="sq" />
                    <span>Français</span>
                    <b>FR</b>
                  </div>
                  <div className="ul-r">
                    <i className="sq" />
                    <span>English</span>
                    <b>EN</b>
                  </div>
                  <div className="ul-r">
                    <i className="sq" />
                    <span>Deutsch</span>
                    <b>DE</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Site bilingue</h3>
              <p>Le français et l’anglais pour les voyageurs d’affaires et les clients à l’étranger.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="ul lcv-langs">
                  <div className="ul-h">Demande reçue</div>
                  <div className="ul-r">
                    <i className="sq" />
                    <span>Formulaire</span>
                    <b>OK</b>
                  </div>
                  <div className="ul-r">
                    <i className="sq" />
                    <span>CRM</span>
                    <b>OK</b>
                  </div>
                  <div className="ul-r">
                    <i className="sq" />
                    <span>Équipe commerciale</span>
                    <b>OK</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Relié à votre CRM</h3>
              <p>Chaque demande arrive dans votre CRM, avec sa page d’origine.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="ui-sl lcv-slots">
                  <div className="ul-h">Cabinet · mercredi</div>
                  <div className="rs-s sl-g" style={{ gridTemplateColumns: 'repeat(3,1fr)!important' }}>
                    <span className="">9:00</span>
                    <span className="off">9:30</span>
                    <span className="">10:30</span>
                    <span className="off">14:00</span>
                    <span className="">15:30</span>
                    <span className="">17:00</span>
                  </div>
                  <div className="shop-cta">Prendre rendez-vous</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Prise de rendez-vous</h3>
              <p>Cabinets et indépendants : un créneau en deux clics.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function LeTissuLocalSecteur() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Le tissu local,<span className="serif">secteur par secteur.</span>
        </h2>
        <p className="mo-lead">
          Massy s’est imposée comme un pôle d’affaires du sud francilien : la gare TGV et les RER B et C la
          relient à Paris et à toute la France, le quartier Atlantis réunit bureaux, logements et commerces,
          et le plateau de Saclay, avec ses écoles et ses centres de recherche, est à deux pas. Le tissu local
          mêle grands comptes, PME de services, start-up technologiques, commerces et indépendants.
        </p>
      </div>
      <figure className="lcv-nd lcv-nd-m lca">
        <div className="lcv-nd-in">
          <img
            src="/images/lc-mo-massy-nd.png"
            alt="Le parvis de la gare de Massy, des voyageurs et un TGV en arrière-plan, en pixel art"
          />
        </div>
        <figcaption>Le quartier de la gare, un matin de semaine</figcaption>
      </figure>
      <div className="lc-sects lcm-sects">
        <div className="lc-s lca">
          <h3>Services aux entreprises</h3>
          <p>ESN, ingénierie, conseil : des sites qui vendent une expertise.</p>
        </div>
        <div className="lc-s lca">
          <h3>Start-up et deeptech</h3>
          <p>Proches du plateau de Saclay, elles doivent rendre une technologie compréhensible.</p>
        </div>
        <div className="lc-s lca">
          <h3>Hôtellerie et restauration</h3>
          <p>Autour de la gare et d’Atlantis, pour une clientèle d’affaires.</p>
        </div>
        <div className="lc-s lca">
          <h3>Santé, commerces, indépendants</h3>
          <p>Cabinets, boutiques et prestataires de proximité.</p>
        </div>
      </div>
      <div className="sec-ring sx-others mo-sec-ring lcm-ring">
        <Link to="/pour-qui/restaurants" className="sec-st" data-sector="restaurant" role="link" tabIndex={0}>
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
          <b>Restaurants</b>
        </Link>
        <Link to="/pour-qui/hotels-gites" className="sec-st" data-sector="hotel" role="link" tabIndex={0}>
          <span className="sec-av">
            <span>
              <img
                className="pxsvg"
                src="/px/art-e6cc4a17.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
          <b>Hôtels & gîtes</b>
        </Link>
        <Link to="/pour-qui/coiffeurs" className="sec-st" data-sector="coiffure" role="link" tabIndex={0}>
          <span className="sec-av">
            <span>
              <img
                className="pxsvg"
                src="/px/art-b8783d94.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
          <b>Coiffeurs</b>
        </Link>
        <Link to="/pour-qui/immobilier" className="sec-st" data-sector="immo" role="link" tabIndex={0}>
          <span className="sec-av">
            <span>
              <img
                className="pxsvg"
                src="/px/art-b70ac2f6.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
          <b>Immobilier</b>
        </Link>
      </div>
    </section>
  )
}

function CeQueVotreSite() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce que votre site<span className="serif">doit vous apporter.</span>
        </h2>
      </div>
      <div className="sxm-ocs">
        <div className="lca sxm-oc">
          <span className="lc-k">Visibilité</span>
          <div className="lcv-mini">
            <div className="serp-q lcv-q">
              <svg
                className="lcv-mag"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              <span className="lcv-type" data-type="agence web massy" />
              <i className="lcv-caret" />
            </div>
          </div>
          <p>
            « agence web Massy », « création site internet Essonne » : des pages qui répondent aux recherches
            de vos clients, et aux IA.
          </p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Image</span>
          <div className="lcv-mini lcv-spec">
            <span className="lcv-aa">Aa</span>
            <span className="lcv-sw" style={{ '--c': '#16213A' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#DDE3EA' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#4A7BA7' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#FF4D1A' } as CSSProperties} />
          </div>
          <p>Un site au niveau des grands comptes avec qui vous travaillez.</p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Demandes</span>
          <div className="lcv-mini">
            <div className="lcv-notif">
              <i className="sq sq-ok" />
              <div>
                <b>Nouvelle demande de démo</b>
                <span>Directeur technique · via la page produit</span>
              </div>
              <em>maintenant</em>
            </div>
          </div>
          <p>Des formulaires et des prises de rendez-vous reliés à votre CRM.</p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Conversion</span>
          <div className="lcv-mini lcv-langbtn">
            <span className="lcv-tg">
              <i>A</i>
              <i>B</i>
            </span>
            <span className="lcv-cta">
              <b>Demander une démo</b>
              <b>Voir la démo</b>
            </span>
          </div>
          <p>Des pages d’offre courtes, mesurées, améliorées dans le temps.</p>
        </div>
      </div>
    </section>
  )
}

function QuelquesRealisationsDuStudio() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Quelques réalisations<span className="serif">du studio.</span>
        </h2>
        <p className="mo-lead">
          Start-up et outils B2B : un site produit pour Swing Call, un configurateur 3D pour Stand-ING.
        </p>
      </div>
      <div className="mo-projs">
        <article className="mo-proj" data-cats="site app">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/6cb0d8d4f25c2a.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Swing Call</span>
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
          <div className="mo-pmeta">
            <h3>Swing Call</h3>
            <span>Start-up · Site produit</span>
          </div>
          <p>Le site d’une start-up qui équipe les golfs d’un agent IA téléphonique.</p>
          <Link to="/realisations/swing-call" className="lnk mo-more" data-proj="swing-call">
            Voir le projet
          </Link>
        </article>
        <article className="mo-proj" data-cats="app" data-to="/realisations/stand-ing">
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
      </div>
      <Link to="/realisations" className="btn btn-ink mo-btn mo-btn-full lcm-all" data-pv="realisations">
        Toutes les réalisations
      </Link>
    </section>
  )
}

function AutourDeMassyOn() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Autour de Massy,<span className="serif">on intervient aussi.</span>
        </h2>
      </div>
      <div className="lmw lmw-m">
        <div className="lm-card">
          <img
            className="lm-base"
            src="/images/lc-map-massy-m.svg"
            alt="Carte de Massy et des communes voisines : routes, voies ferrées, forêts et cours d’eau"
          />
          <svg className="lmap-o" viewBox="0 0 670 620" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              className="lm-town"
              data-c="0"
              style={{ '--d': '0.15s' } as CSSProperties}
              d="M249.1 315.7 L243.7 320.3 L240.1 321.6 L235.8 328.6 L230.5 333.6 L224.3 351.0 L209.0 357.1 L201.8 358.1 L197.3 357.2 L193.0 382.6 L200.3 386.0 L195.7 394.9 L205.3 398.1 L210.5 395.0 L214.8 395.0 L223.7 399.8 L225.9 402.6 L224.9 404.6 L224.9 409.9 L226.4 409.5 L226.8 413.8 L225.1 423.4 L241.2 425.8 L250.0 424.4 L251.1 425.3 L252.6 423.2 L255.7 426.1 L258.4 423.8 L266.7 424.4 L268.3 423.0 L269.2 424.3 L272.3 425.1 L274.8 424.0 L276.1 426.0 L277.9 424.9 L281.1 427.8 L282.7 427.4 L284.5 425.1 L287.7 427.1 L289.5 425.6 L293.7 427.3 L295.8 426.2 L300.7 428.7 L304.8 427.9 L310.7 429.2 L311.8 427.7 L315.5 426.4 L319.4 426.6 L322.0 423.2 L324.0 423.1 L325.7 417.8 L328.1 417.2 L331.7 405.6 L337.3 400.2 L340.2 399.0 L344.8 399.3 L348.1 397.6 L353.1 398.4 L355.2 397.3 L362.1 405.2 L374.0 406.1 L372.8 400.3 L373.6 390.9 L383.1 382.8 L390.6 370.4 L394.4 357.9 L385.2 354.1 L375.6 341.2 L369.6 339.3 L349.4 325.3 L341.4 323.8 L337.5 326.3 L327.4 322.6 L309.4 320.7 L303.0 317.3 L297.9 320.8 L299.1 310.3 L296.0 311.7 L291.9 311.1 L295.0 317.2 L292.8 318.6 L288.4 319.2 L277.8 330.8 L265.0 327.7 L256.4 328.4 L249.8 325.6 L249.2 323.5 L251.2 318.2 L249.1 315.7Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="1"
              style={{ '--d': '0.22s' } as CSSProperties}
              d="M419.3 202.4 L416.2 208.3 L422.6 213.1 L422.3 213.8 L428.7 216.8 L435.1 226.2 L436.8 230.6 L444.0 239.5 L440.6 245.0 L442.4 247.4 L436.0 251.2 L432.5 255.1 L428.0 257.6 L426.3 260.2 L421.3 263.2 L419.4 267.0 L415.0 267.1 L417.1 271.9 L417.3 276.7 L422.4 288.2 L429.3 299.6 L435.1 295.1 L454.0 288.6 L466.4 282.8 L481.9 273.5 L489.9 266.7 L487.4 286.0 L494.0 312.9 L505.0 313.5 L522.0 308.9 L524.5 296.8 L523.3 296.0 L527.1 295.1 L529.7 286.8 L532.9 281.0 L532.0 278.7 L522.2 282.7 L518.3 277.4 L521.6 275.0 L528.9 266.3 L521.7 256.6 L526.6 252.5 L527.1 253.3 L529.4 250.8 L530.3 251.8 L532.8 249.5 L538.2 242.4 L535.1 241.0 L538.8 234.4 L535.1 231.2 L528.4 228.8 L521.3 223.9 L516.2 223.9 L510.4 220.4 L514.4 217.1 L512.4 214.1 L514.0 211.8 L506.5 207.3 L519.1 188.1 L518.4 182.3 L519.8 179.4 L521.7 180.4 L524.8 166.7 L523.8 165.5 L525.4 161.1 L536.7 145.0 L516.5 139.3 L514.9 145.2 L508.0 144.3 L503.2 144.9 L502.6 149.4 L501.0 151.1 L457.1 161.8 L461.6 170.3 L458.7 184.9 L451.5 184.3 L451.3 186.7 L442.5 186.1 L427.7 188.5 L424.5 191.0 L419.3 202.4Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="2"
              style={{ '--d': '0.29s' } as CSSProperties}
              d="M318.5 287.3 L315.3 284.8 L317.4 280.8 L315.1 279.7 L315.5 278.6 L313.4 276.2 L311.3 268.3 L313.1 265.7 L307.6 263.0 L300.1 263.4 L297.8 261.3 L296.9 252.8 L294.4 248.0 L292.6 247.4 L296.3 243.9 L296.3 240.8 L289.2 235.6 L292.3 232.2 L291.4 231.1 L286.6 229.8 L283.4 224.9 L281.0 224.5 L282.7 220.6 L280.3 210.6 L278.5 207.6 L279.6 203.4 L278.6 199.3 L280.1 191.7 L281.7 188.9 L289.7 179.5 L294.7 175.7 L296.4 172.0 L302.2 166.8 L303.6 163.5 L318.6 162.4 L324.4 173.5 L336.5 178.0 L341.1 185.3 L347.2 181.4 L353.1 185.7 L363.8 182.8 L374.9 184.7 L381.5 189.5 L389.2 182.8 L395.3 179.1 L399.8 180.4 L399.4 185.8 L405.5 185.9 L401.2 198.3 L406.6 197.9 L419.3 202.4 L416.2 208.3 L422.6 213.1 L422.3 213.8 L428.7 216.8 L435.1 226.2 L436.8 230.6 L444.0 239.5 L440.6 245.0 L442.4 247.4 L436.0 251.2 L432.5 255.1 L428.0 257.6 L426.3 260.2 L421.3 263.2 L419.4 267.0 L415.0 267.1 L413.1 270.3 L408.7 272.4 L400.1 279.7 L397.1 280.0 L395.5 275.9 L390.5 277.3 L382.0 276.8 L375.9 280.0 L371.1 280.1 L367.6 278.6 L364.6 278.8 L362.4 276.3 L356.8 275.5 L344.2 283.1 L341.7 282.5 L338.5 278.9 L334.5 278.0 L332.9 281.5 L328.2 282.1 L324.1 285.5 L318.5 287.3Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="3"
              style={{ '--d': '0.36s' } as CSSProperties}
              d="M487.3 352.4 L483.5 367.9 L475.6 366.0 L474.2 370.8 L472.6 370.2 L468.1 384.0 L467.1 383.9 L466.4 386.8 L473.0 388.6 L469.0 399.7 L468.4 402.5 L469.7 403.0 L467.3 412.9 L473.9 415.6 L482.7 415.4 L484.1 414.1 L485.7 404.5 L489.6 404.8 L489.1 410.1 L493.0 410.4 L494.8 418.4 L493.8 426.0 L491.1 425.8 L486.8 438.0 L501.3 447.1 L501.8 449.0 L497.7 455.4 L498.3 461.4 L504.9 467.9 L510.3 470.7 L511.4 470.3 L513.0 473.0 L523.6 477.6 L526.8 480.7 L525.6 468.6 L526.7 464.0 L530.0 460.7 L538.4 455.6 L546.2 439.6 L537.8 434.3 L555.4 406.5 L549.0 384.5 L547.1 369.6 L547.4 347.8 L506.8 343.0 L505.1 355.0 L487.3 352.4Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="4"
              style={{ '--d': '0.43s' } as CSSProperties}
              d="M565.1 236.3 L572.9 242.2 L580.8 252.5 L580.6 253.8 L584.3 257.0 L581.7 260.7 L584.3 263.0 L587.0 264.2 L587.6 263.3 L596.3 268.7 L602.5 267.2 L605.2 263.2 L611.0 265.0 L611.6 263.8 L627.6 275.1 L628.9 277.7 L624.8 278.4 L617.1 294.2 L608.2 291.3 L600.3 291.0 L606.1 301.7 L608.4 323.0 L609.6 322.9 L610.9 330.4 L618.1 332.5 L617.8 335.6 L610.9 350.4 L592.7 376.6 L582.4 394.8 L570.6 389.5 L549.9 387.9 L547.1 369.6 L547.4 347.8 L506.8 343.0 L505.1 355.0 L487.3 352.4 L493.3 326.5 L494.4 320.1 L494.0 312.9 L505.0 313.5 L522.0 308.9 L524.5 296.8 L523.3 296.0 L527.1 295.1 L529.7 286.8 L532.9 281.0 L532.0 278.7 L522.2 282.7 L518.3 277.4 L521.6 275.0 L528.9 266.3 L521.7 256.6 L526.6 252.5 L527.1 253.3 L529.4 250.8 L530.3 251.8 L532.8 249.5 L538.2 242.4 L535.1 241.0 L538.8 234.4 L544.0 237.1 L549.8 227.2 L546.6 219.7 L555.9 225.1 L565.1 236.3Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="5"
              style={{ '--d': '0.50s' } as CSSProperties}
              d="M394.4 357.9 L390.6 370.4 L383.1 382.8 L373.6 390.9 L372.8 400.3 L374.0 406.1 L378.3 406.2 L383.2 410.0 L388.9 412.5 L390.3 410.9 L395.9 413.5 L406.3 422.1 L404.4 423.7 L406.9 423.4 L407.3 425.8 L411.9 428.2 L412.5 429.8 L415.7 429.2 L425.2 433.7 L426.5 433.2 L427.1 434.7 L430.2 433.4 L436.0 433.0 L437.8 434.4 L445.2 435.9 L454.3 439.3 L456.0 435.9 L461.1 437.9 L464.4 428.2 L464.2 426.6 L462.7 425.9 L465.1 416.3 L467.3 412.9 L469.7 403.0 L468.4 402.5 L469.0 399.7 L473.0 388.6 L466.4 386.8 L467.1 383.9 L456.1 381.1 L441.9 374.5 L420.7 367.3 L407.2 365.4 L394.4 357.9Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="6"
              style={{ '--d': '0.57s' } as CSSProperties}
              d="M285.9 228.8 L275.2 234.6 L264.3 247.1 L243.6 256.7 L246.5 260.8 L243.1 267.2 L232.3 277.7 L226.1 280.0 L226.1 282.5 L235.3 282.6 L242.1 281.1 L254.7 275.2 L255.4 276.9 L260.5 278.1 L259.8 279.7 L262.2 285.0 L262.0 287.7 L259.5 288.4 L258.7 291.0 L256.0 292.1 L255.9 302.7 L251.4 307.6 L251.1 313.6 L249.1 315.7 L251.2 318.2 L249.3 325.1 L256.4 328.4 L265.0 327.7 L277.8 330.8 L288.4 319.2 L292.8 318.6 L295.0 317.2 L291.9 311.1 L296.0 311.7 L299.1 310.3 L297.9 320.8 L303.0 317.3 L309.0 320.6 L327.1 301.2 L316.4 287.9 L318.5 287.3 L315.3 284.8 L317.4 280.8 L315.1 279.7 L315.5 278.6 L313.4 276.2 L311.3 268.3 L313.1 265.7 L307.6 263.0 L300.1 263.4 L297.8 261.3 L296.9 252.8 L294.4 248.0 L292.6 247.4 L296.3 243.9 L296.3 240.8 L289.2 235.6 L292.3 232.2 L291.4 231.1 L285.9 228.8Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="7"
              style={{ '--d': '0.64s' } as CSSProperties}
              d="M187.1 212.2 L178.2 213.3 L163.6 193.5 L146.6 199.7 L143.5 197.4 L140.9 201.9 L129.5 202.2 L127.2 204.3 L111.4 229.1 L98.1 222.2 L99.5 219.8 L90.6 216.2 L87.8 211.2 L85.7 210.3 L81.8 217.2 L76.2 223.0 L72.4 225.6 L71.6 224.8 L67.3 228.7 L58.6 238.2 L57.3 242.5 L58.4 246.1 L51.6 245.6 L49.2 244.3 L48.6 245.2 L46.4 244.1 L45.2 247.3 L54.3 261.4 L52.0 262.7 L50.1 266.6 L48.8 266.7 L41.1 281.0 L57.4 297.2 L66.2 303.5 L65.4 305.5 L68.9 305.7 L70.0 303.4 L72.6 304.4 L71.6 311.9 L70.1 312.3 L63.5 338.5 L71.7 340.5 L90.2 350.4 L98.9 364.4 L124.4 369.7 L125.7 369.5 L125.0 367.9 L130.6 365.6 L139.4 367.3 L138.4 372.5 L140.4 372.9 L142.1 370.5 L169.5 359.0 L192.0 355.9 L203.8 357.9 L216.4 354.8 L224.3 351.0 L225.0 347.3 L223.5 346.5 L205.9 345.2 L199.6 342.3 L190.6 335.7 L181.6 327.1 L174.2 324.0 L166.3 318.6 L168.9 313.4 L169.5 308.2 L177.0 295.8 L177.5 282.8 L182.6 276.7 L189.2 272.8 L176.5 269.2 L168.4 264.8 L174.0 252.7 L176.3 242.5 L185.2 223.6 L187.1 212.2Z"
              pathLength="1"
            />
            <path
              className="lm-center"
              d="M415.0 267.1 L417.1 271.9 L417.3 276.7 L422.4 288.2 L429.3 299.6 L435.1 295.1 L454.0 288.6 L466.4 282.8 L481.9 273.5 L489.9 266.7 L487.4 286.0 L494.0 312.9 L494.4 320.1 L493.3 326.5 L483.5 367.9 L475.6 366.0 L474.2 370.8 L472.6 370.2 L468.1 384.0 L456.1 381.1 L445.7 376.0 L420.7 367.3 L414.1 366.9 L404.7 364.2 L393.4 357.2 L385.6 354.4 L380.1 348.2 L376.6 342.0 L369.6 339.3 L350.6 325.7 L341.4 323.8 L337.5 326.3 L327.4 322.6 L309.0 320.6 L327.1 301.2 L316.4 287.9 L324.1 285.5 L328.2 282.1 L332.9 281.5 L334.5 278.0 L338.5 278.9 L341.7 282.5 L344.0 283.1 L356.8 275.5 L362.4 276.3 L364.6 278.8 L367.6 278.6 L371.1 280.1 L375.9 280.0 L382.0 276.8 L390.5 277.3 L395.5 275.9 L397.1 280.0 L400.1 279.7 L408.7 272.4 L413.1 270.3 L415.0 267.1Z"
              pathLength="1"
            />
            <g className="lm-ch" transform="translate(379.6 327.6)">
              <rect x="-6.0" y="-6.0" width="12.0" height="12.0" rx="1" />
            </g>
            <text className="lm-lb lm-lb-ch" x="367.6" y="334.2" fontSize="16.3" textAnchor="end">
              Gare TGV
            </text>
            <g
              className="lm-pin"
              data-c="0"
              style={{ '--d': '0.60s' } as CSSProperties}
              transform="translate(292.0 372.4)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="0"
              style={{ '--d': '0.70s' } as CSSProperties}
              x="292.0"
              y="400.5"
              fontSize="19"
              textAnchor="middle"
            >
              Palaiseau
            </text>
            <g
              className="lm-pin"
              data-c="1"
              style={{ '--d': '0.67s' } as CSSProperties}
              transform="translate(480.6 229.4)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="1"
              style={{ '--d': '0.77s' } as CSSProperties}
              x="480.6"
              y="257.4"
              fontSize="19"
              textAnchor="middle"
            >
              Antony
            </text>
            <g
              className="lm-pin"
              data-c="2"
              style={{ '--d': '0.74s' } as CSSProperties}
              transform="translate(354.8 227.5)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="2"
              style={{ '--d': '0.84s' } as CSSProperties}
              x="354.8"
              y="255.5"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="354.8">Verrières-</tspan>
              <tspan x="354.8" dy="20.9">
                le-Buisson
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="3"
              style={{ '--d': '0.81s' } as CSSProperties}
              transform="translate(514.3 402.3)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="3"
              style={{ '--d': '0.91s' } as CSSProperties}
              x="514.3"
              y="430.3"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="514.3">Chilly-</tspan>
              <tspan x="514.3" dy="20.9">
                Mazarin
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="4"
              style={{ '--d': '0.88s' } as CSSProperties}
              transform="translate(562.2 311.9)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="4"
              style={{ '--d': '0.98s' } as CSSProperties}
              x="562.2"
              y="340.0"
              fontSize="19"
              textAnchor="middle"
            >
              Wissous
            </text>
            <g
              className="lm-pin"
              data-c="5"
              style={{ '--d': '0.95s' } as CSSProperties}
              transform="translate(424.7 399.9)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="5"
              style={{ '--d': '1.05s' } as CSSProperties}
              x="424.7"
              y="427.9"
              fontSize="19"
              textAnchor="middle"
            >
              Champlan
            </text>
            <g
              className="lm-pin"
              data-c="6"
              style={{ '--d': '1.02s' } as CSSProperties}
              transform="translate(280.7 284.1)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="6"
              style={{ '--d': '1.12s' } as CSSProperties}
              x="280.7"
              y="312.1"
              fontSize="19"
              textAnchor="middle"
            >
              Igny
            </text>
            <g
              className="lm-pin"
              data-c="7"
              style={{ '--d': '1.09s' } as CSSProperties}
              transform="translate(124.1 286.4)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="7"
              style={{ '--d': '1.19s' } as CSSProperties}
              x="124.1"
              y="314.5"
              fontSize="19"
              textAnchor="middle"
            >
              Saclay
            </text>
            <text className="lm-lb lm-lb-c" x="456.5" y="296.4" fontSize="30.4" textAnchor="middle">
              Massy
            </text>
            <g className="lm-paris">
              <g transform="translate(483.5 16.0) rotate(-84.5)">
                <path d="M-61 0 H0 m-6 -4 l6 4 l-6 4" fill="none" />
              </g>
              <text x="477.1" y="103.4" fontSize="17.1" textAnchor="middle">
                Paris 8e · le studio
              </text>
            </g>
            <text className="lm-attr" x="660" y="610" fontSize="13.7" textAnchor="end">
              © contributeurs OpenStreetMap
            </text>
          </svg>
        </div>
        <aside className="lm-side">
          <span className="lc-k">Communes voisines · Essonne</span>
          <ul className="lm-list">
            <li data-c="0" tabIndex={0}>
              <b>Palaiseau</b>
              <span>au sud-ouest</span>
            </li>
            <li data-c="1" tabIndex={0}>
              <b>Antony</b>
              <span>au nord-est</span>
            </li>
            <li data-c="2" tabIndex={0}>
              <b>Verrières-le-Buisson</b>
              <span>au nord-ouest</span>
            </li>
            <li data-c="3" tabIndex={0}>
              <b>Chilly-Mazarin</b>
              <span>au sud-est</span>
            </li>
            <li data-c="4" tabIndex={0}>
              <b>Wissous</b>
              <span>à l’est</span>
            </li>
            <li data-c="5" tabIndex={0}>
              <b>Champlan</b>
              <span>au sud</span>
            </li>
            <li data-c="6" tabIndex={0}>
              <b>Igny</b>
              <span>à l’ouest</span>
            </li>
            <li data-c="7" tabIndex={0}>
              <b>Saclay</b>
              <span>à l’ouest</span>
            </li>
          </ul>
          <p className="lc-note">
            Et partout en Essonne et sur le plateau de Saclay. Le studio est à Paris : on se déplace pour
            lancer le projet, puis on avance en visio.
          </p>
          <span className="lc-k lm-k2">Nos autres pages locales</span>
          <ul className="lc-links">
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
          </ul>
        </aside>
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
            <span>Intervenez-vous à Massy ?</span>
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
            Oui. Le studio est à Paris : on peut se voir à Massy pour lancer le projet, puis tout avance en
            visio et dans Orion Admin, votre espace de suivi.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Notre start-up a besoin d’un site et d’une application : pouvez-vous faire les deux ?</span>
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
            Oui. On développe aussi des applications web sur mesure (Next.js, React) : espaces clients, outils
            métiers et SaaS, en plus du site.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pouvez-vous connecter le site à notre CRM ?</span>
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
            Oui, si l’outil le permet : la connexion (API, widget ou export) est vérifiée au cadrage, avant le
            devis.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien coûte une création de site internet à Massy ?</span>
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
            dépend du nombre de pages et des fonctionnalités, pas de la ville.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien de temps faut-il pour être en ligne ?</span>
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
            Un site vitrine prend en moyenne 4 à 8 semaines, selon sa complexité et le rythme des échanges.
            Une refonte avec reprise des contenus et du référencement, ou des fonctionnalités sur mesure,
            demandent davantage : le planning est fixé dans le devis.
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
          Un projet à Massy ?<span className="serif">Parlons-en.</span>
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
    <section className="artboard mo sx-page">
      <MobileNav />
      <MoHero />
      <MoMedia />
      <CreationEtRefonteA />
      <PourQuiAMassy />
      <CeQuOnLivre />
      <LeTissuLocalSecteur />
      <CeQueVotreSite />
      <QuelquesRealisationsDuStudio />
      <MoCommentOnTravaille2 />
      <AutourDeMassyOn />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
