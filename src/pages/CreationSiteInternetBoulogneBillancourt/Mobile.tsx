import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoCommentOnTravaille2 } from '../../components/shared/MoCommentOnTravaille2'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Création de site internet / <b>Boulogne-Billancourt</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Création de site internet à Boulogne-Billancourt
        <span className="serif">pour les entreprises qui doivent convaincre vite.</span>
      </h1>
      <p className="mo-lead">
        Sièges sociaux, agences, sociétés de l’audiovisuel, cabinets de conseil, praticiens et commerces :
        Boulogne-Billancourt concentre une économie tertiaire exigeante. On conçoit et on refond des sites sur
        mesure qui font sérieux dès la première seconde, et qui génèrent des demandes.
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
          src="/images/lc-mo-boulogne.png"
          alt="La Seine, le pont de Sèvres et l’île Seguin, en pixel art"
        />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="pxsvg omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde le site
            <br />
            de votre entreprise boulonnaise ?
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
          Création et refonte<span className="serif">à Boulogne-Billancourt.</span>
        </h2>
        <p className="mo-lead">
          Pour des interlocuteurs qui comparent vite : un site net, rapide et à votre image.
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
                <span className="win-title">votre-cabinet-boulogne.fr</span>
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
                <img className="lcv-built" src="/images/lc-boulogne.png" alt="" />
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
            Vous créez un cabinet, une agence ou une société de services à Boulogne : un site sur mesure, à la
            hauteur de vos interlocuteurs, prêt avant vos premiers rendez-vous.
          </p>
          <ul>
            <li>Direction artistique sur mesure</li>
            <li>Pages par offre et études de cas</li>
            <li>Prise de rendez-vous reliée à votre agenda</li>
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
              <img src="/images/lc-boulogne.png" alt="" />
              <div className="lcv-new-bar">
                <b>votre-cabinet-boulogne.fr</b>
                <span>Rendez-vous</span>
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
            Votre site ne reflète plus ce que vous êtes devenus : on le refond, on reprend le référencement
            acquis et on le relie à vos outils (CRM, agenda, newsletter).
          </p>
          <ul>
            <li>Audit de l’existant avant de toucher à quoi que ce soit</li>
            <li>Reprise des contenus, redirections, suivi de l’indexation</li>
            <li>Connexions à vos outils vérifiées au cadrage</li>
          </ul>
          <a className="lnk" data-pv="__hero__">
            Analyser mon site actuel
          </a>
        </article>
      </div>
    </section>
  )
}

function PourQuiABoulogne() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Pour qui,<span className="serif">à Boulogne-Billancourt.</span>
        </h2>
      </div>
      <div className="lc-rows lcm-rows">
        <div className="lc-row lca">
          <b>Cabinet de conseil, ESN, agence</b>
          <p>Passer d’un site plaquette à un site qui génère des rendez-vous.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Pages expertises, études de cas, prise de rendez-vous.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Société de l’audiovisuel ou de la communication</b>
          <p>Montrer ses réalisations avec un site aussi soigné que ses productions.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Portfolio vidéo, direction artistique sur mesure.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Praticien ou cabinet de santé</b>
          <p>Rassurer et simplifier la prise de rendez-vous.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Présentation, spécialités, lien vers l’agenda en ligne.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Commerce, restaurant, institut</b>
          <p>Faire venir le quartier et les salariés des bureaux voisins.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Fiche Google, carte ou prestations, réservation en ligne.
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
          Ce qu’on livre,<span className="serif">pour Boulogne.</span>
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
                    <span className="lcv-type" data-type="cabinet conseil boulogne" />
                    <i className="lcv-caret" />
                  </div>
                  <div className="serp-r lcv-res">
                    <span className="serp-u">votre-cabinet-boulogne.fr</span>
                    <b>Cabinet de conseil à Boulogne-Billancourt — Stratégie et organisation</b>
                    <span className="serp-d">
                      Nos expertises, nos études de cas et un rendez-vous en ligne en deux clics.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>SEO local</h3>
              <p>
                Être trouvé sur « cabinet conseil Boulogne », « kiné Boulogne-Billancourt », et dans les
                réponses des IA.
              </p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="uf lcv-fill">
                  <div className="ul-h">Parlons de votre projet</div>
                  <div className="uf-g">
                    <label className="fld fld-f">
                      <span>Besoin</span>
                      <b data-v="Refonte de site" />
                    </label>
                    <label className="fld">
                      <span>Entreprise</span>
                      <b data-v="Votre société" />
                    </label>
                    <label className="fld">
                      <span>Effectif</span>
                      <b data-v="20 à 50" />
                    </label>
                    <label className="fld">
                      <span>Échéance</span>
                      <b data-v="Avant l’été" />
                    </label>
                  </div>
                  <div className="shop-cta">Être rappelé</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Formulaire qualifiant</h3>
              <p>Conseil et services B2B : besoin, taille et échéance, avant même le premier appel.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="ui-sl lcv-slots">
                  <div className="ul-h">Cabinet · jeudi</div>
                  <div className="rs-s sl-g" style={{ gridTemplateColumns: 'repeat(3,1fr)!important' }}>
                    <span className="">8:30</span>
                    <span className="off">9:15</span>
                    <span className="">10:00</span>
                    <span className="off">12:30</span>
                    <span className="">14:00</span>
                    <span className="">18:30</span>
                  </div>
                  <div className="shop-cta">Prendre rendez-vous</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Rendez-vous en ligne</h3>
              <p>Praticiens et cabinets : un créneau réservé, synchronisé avec votre agenda.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="uf lcv-fill">
                  <div className="ul-h">Brief de production</div>
                  <div className="uf-g">
                    <label className="fld fld-f">
                      <span>Format</span>
                      <b data-v="Film institutionnel" />
                    </label>
                    <label className="fld">
                      <span>Durée</span>
                      <b data-v="2 minutes" />
                    </label>
                    <label className="fld">
                      <span>Diffusion</span>
                      <b data-v="Web et réseaux" />
                    </label>
                    <label className="fld">
                      <span>Livraison</span>
                      <b data-v="Mars" />
                    </label>
                  </div>
                  <div className="shop-cta">Envoyer le brief</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Brief en ligne</h3>
              <p>Audiovisuel et communication : des demandes cadrées dès le premier message.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="ul lcv-langs">
                  <div className="ul-h">Connecté à vos outils</div>
                  <div className="ul-r">
                    <i className="sq" />
                    <span>CRM</span>
                    <b>OK</b>
                  </div>
                  <div className="ul-r">
                    <i className="sq" />
                    <span>Agenda</span>
                    <b>OK</b>
                  </div>
                  <div className="ul-r">
                    <i className="sq" />
                    <span>Newsletter</span>
                    <b>OK</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Vos outils branchés</h3>
              <p>CRM, agenda, newsletter : connexions vérifiées au cadrage, avant le devis.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="gbp">
                  <div className="gbp-n">Votre restaurant</div>
                  <div className="gbp-m">Restaurant · Centre-ville · Ouvert ce midi</div>
                  <div className="gbp-b">
                    <span>Itinéraire</span>
                    <span>Appeler</span>
                    <span className="lcv-pulse">Site web</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Fiche Google</h3>
              <p>Commerces et restaurants : horaires, itinéraire et site, tenus à jour.</p>
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
          Ancienne terre des usines Renault, Boulogne-Billancourt est devenue l’un des grands pôles tertiaires
          de l’ouest parisien : sièges d’entreprises, groupes de médias et de l’audiovisuel, agences, start-up
          et cabinets se partagent le Trapèze, le Pont de Sèvres et le centre-ville. Les rues commerçantes, de
          la route de la Reine au boulevard Jean-Jaurès, comptent aussi beaucoup de commerces, de restaurants
          et de praticiens.
        </p>
      </div>
      <figure className="lcv-nd lcv-nd-m lca">
        <div className="lcv-nd-in">
          <img
            src="/images/lc-mo-boulogne-nd.png"
            alt="Un boulevard de Boulogne-Billancourt entre immeubles des années 1930 et bureaux, en pixel art"
          />
        </div>
        <figcaption>Un boulevard du centre-ville, en fin de journée</figcaption>
      </figure>
      <div className="lc-sects lcm-sects">
        <div className="lc-s lca">
          <h3>Médias, audiovisuel, communication</h3>
          <p>Des marques qui doivent montrer un savoir-faire créatif.</p>
        </div>
        <div className="lc-s lca">
          <h3>Conseil et services B2B</h3>
          <p>Cabinets, ESN, agences : des sites qui transforment l’expertise en rendez-vous.</p>
        </div>
        <div className="lc-s lca">
          <h3>Santé et praticiens</h3>
          <p>Cabinets médicaux, paramédicaux et bien-être : rendez-vous et confiance.</p>
        </div>
        <div className="lc-s lca">
          <h3>Commerces et restauration</h3>
          <p>Restaurants, boutiques et instituts du centre-ville et du Trapèze.</p>
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
        <Link to="/pour-qui/artisans" className="sec-st" data-sector="artisan" role="link" tabIndex={0}>
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
          <b>Artisans</b>
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
              <span className="lcv-type" data-type="agence web boulogne" />
              <i className="lcv-caret" />
            </div>
          </div>
          <p>
            « agence web Boulogne-Billancourt », « refonte site internet 92 » : un site rapide et bien
            structuré, qui ressort aussi dans les réponses des IA.
          </p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Image</span>
          <div className="lcv-mini lcv-spec">
            <span className="lcv-aa">Aa</span>
            <span className="lcv-sw" style={{ '--c': '#0E0E0C' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#E6E1D8' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#5B6B7A' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#FF4D1A' } as CSSProperties} />
          </div>
          <p>
            Face à des concurrents bien installés, une direction artistique sur mesure fait la différence.
          </p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Demandes</span>
          <div className="lcv-mini">
            <div className="lcv-notif">
              <i className="sq sq-ok" />
              <div>
                <b>Nouveau rendez-vous</b>
                <span>Audit de site · jeudi 10 h</span>
              </div>
              <em>maintenant</em>
            </div>
          </div>
          <p>Une page par offre, chacune menant à une prise de rendez-vous.</p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Conversion</span>
          <div className="lcv-mini lcv-langbtn">
            <span className="lcv-tg">
              <i>A</i>
              <i>B</i>
            </span>
            <span className="lcv-cta">
              <b>Prendre rendez-vous</b>
              <b>Parler à un expert</b>
            </span>
          </div>
          <p>Des pages rapides, des appels à l’action clairs, et la mesure de ce qui fonctionne.</p>
        </div>
      </div>
    </section>
  )
}

function NosRealisationsJusquA() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Nos réalisations,<span className="serif">jusqu’à Boulogne.</span>
        </h2>
        <p className="mo-lead">
          Le siège de DATHY, cabinet d’assistance à maîtrise d’ouvrage dont on a conçu le site, est à
          Boulogne-Billancourt.
        </p>
      </div>
      <div className="mo-projs">
        <article className="mo-proj" data-cats="site da">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/dc0beeb280fba7.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">DATHY</span>
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
            <h3>DATHY</h3>
            <span>Site vitrine · DA</span>
          </div>
          <p>
            Le site d’un cabinet d’assistance à maîtrise d’ouvrage en bâtiment et travaux publics, dans le
            Vexin.
          </p>
          <Link to="/realisations/dathy" className="lnk mo-more" data-proj="dathy">
            Voir le projet
          </Link>
        </article>
        <article className="mo-proj" data-cats="shop da">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/5e44d143820ccb.png" alt="" />
            <div className="win rz-wire mo-wire">
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
          <div className="mo-pmeta">
            <h3>Osmose Nutrition</h3>
            <span>E-commerce · Refonte UX/CRO · 2025</span>
          </div>
          <p>
            La refonte de la boutique d’un fabricant de compléments alimentaires : diagnostic, routine sur
            mesure, abonnements.
          </p>
          <Link to="/realisations/osmose-nutrition" className="lnk mo-more" data-proj="osmose-nutrition">
            Voir le projet
          </Link>
        </article>
      </div>
      <Link to="/realisations" className="btn btn-ink mo-btn mo-btn-full lcm-all" data-pv="realisations">
        Toutes les réalisations
      </Link>
    </section>
  )
}

function AutourDeBoulogneBillancourt() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Autour de Boulogne-Billancourt,<span className="serif">on intervient aussi.</span>
        </h2>
      </div>
      <div className="lmw lmw-m">
        <div className="lm-card">
          <img
            className="lm-base"
            src="/images/lc-map-boulogne-m.svg"
            alt="Carte de Boulogne-Billancourt et des communes voisines : routes, voies ferrées, forêts et cours d’eau"
          />
          <svg className="lmap-o" viewBox="0 0 670 620" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              className="lm-town"
              data-c="0"
              style={{ '--d': '0.15s' } as CSSProperties}
              d="M351.6 369.1 L352.3 363.5 L342.5 363.8 L328.4 357.8 L334.1 358.5 L340.7 357.1 L349.2 352.3 L358.8 349.1 L378.4 339.7 L386.9 332.2 L399.6 318.1 L411.1 308.2 L419.8 294.8 L437.3 291.4 L444.3 299.5 L435.1 306.9 L436.8 325.9 L453.5 325.5 L463.7 316.4 L474.8 302.3 L509.7 323.5 L504.2 323.9 L500.4 322.6 L504.5 327.7 L492.8 327.6 L479.7 335.9 L480.8 337.3 L478.1 339.5 L480.7 341.9 L481.4 348.2 L483.3 350.4 L481.6 351.6 L484.5 359.5 L482.6 360.4 L484.3 364.9 L468.1 379.3 L463.8 380.7 L455.3 390.5 L453.0 394.9 L435.6 396.9 L427.1 399.1 L423.7 394.5 L414.9 400.7 L411.6 394.9 L410.2 395.6 L408.7 393.9 L408.2 393.0 L409.2 392.3 L406.4 389.1 L404.9 390.7 L402.4 385.8 L400.4 386.9 L398.5 381.4 L395.5 383.2 L395.3 382.5 L380.1 385.3 L377.5 380.5 L373.4 376.8 L351.6 371.2 L351.6 369.1Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="1"
              style={{ '--d': '0.22s' } as CSSProperties}
              d="M289.2 288.4 L282.3 287.3 L283.9 308.2 L288.2 316.2 L281.0 318.9 L278.1 322.8 L280.9 330.1 L271.6 333.5 L268.9 328.2 L245.1 327.0 L231.3 320.7 L209.8 315.5 L205.9 315.9 L201.8 335.3 L211.1 336.2 L210.6 345.6 L205.9 345.5 L205.7 347.0 L202.4 347.1 L204.0 354.9 L185.0 357.7 L161.5 375.8 L156.7 378.4 L150.7 378.9 L146.3 377.2 L135.5 392.6 L144.1 393.3 L150.8 389.4 L173.4 387.9 L173.0 386.2 L174.0 384.6 L172.6 383.1 L179.0 381.4 L179.8 382.2 L190.0 373.4 L200.8 361.4 L208.9 370.9 L201.7 376.2 L204.3 380.2 L206.2 381.2 L197.6 392.3 L226.4 421.9 L244.6 410.2 L261.7 403.2 L277.6 390.9 L275.2 384.8 L265.6 377.8 L271.7 372.6 L277.1 370.0 L277.1 368.2 L278.7 368.3 L279.8 364.8 L281.3 365.0 L293.5 352.4 L291.6 349.0 L295.8 345.8 L298.7 348.7 L300.1 347.4 L308.5 355.7 L309.0 358.3 L311.3 357.2 L311.7 358.0 L318.4 351.8 L309.5 344.1 L304.3 337.3 L300.4 329.9 L300.4 324.5 L298.4 318.8 L295.9 302.7 L289.2 288.4Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="2"
              style={{ '--d': '0.29s' } as CSSProperties}
              d="M250.3 152.5 L254.6 164.1 L262.2 162.1 L278.7 161.2 L294.6 163.9 L291.5 174.7 L289.3 190.7 L293.7 214.9 L293.5 231.5 L286.0 263.7 L284.8 272.6 L285.7 280.3 L289.2 288.4 L282.3 287.3 L283.9 308.2 L288.2 316.2 L281.0 318.9 L278.1 322.8 L280.9 330.1 L271.6 333.5 L268.9 328.2 L245.1 327.0 L231.3 320.7 L209.8 315.5 L197.3 315.9 L188.6 317.8 L186.8 316.8 L185.0 318.1 L180.6 318.6 L174.4 318.1 L165.8 321.2 L161.1 320.8 L157.1 318.9 L156.4 320.7 L142.8 311.7 L158.1 294.9 L161.6 281.7 L165.3 276.2 L164.6 275.1 L167.8 271.8 L165.8 269.1 L187.8 260.4 L203.8 255.9 L204.4 242.7 L201.0 235.0 L200.5 225.8 L225.6 206.2 L226.5 202.9 L212.8 196.3 L200.7 187.9 L204.1 184.9 L210.4 176.2 L214.0 173.8 L220.0 157.9 L227.8 159.4 L240.2 156.6 L250.3 152.5Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="3"
              style={{ '--d': '0.36s' } as CSSProperties}
              d="M216.8 476.9 L222.4 482.6 L223.7 486.9 L222.6 490.0 L225.8 493.1 L228.0 494.6 L232.4 495.3 L241.3 500.2 L246.9 513.8 L228.9 546.1 L229.9 547.0 L231.8 544.5 L238.4 532.0 L246.6 529.7 L272.7 543.8 L280.0 541.0 L286.5 540.9 L297.7 563.2 L308.0 555.4 L325.5 548.2 L328.8 528.8 L331.1 525.6 L325.2 492.1 L329.6 491.2 L338.7 480.2 L341.5 470.6 L343.1 470.6 L344.8 465.0 L348.2 464.1 L348.9 460.5 L346.4 459.0 L348.2 453.8 L350.8 451.1 L352.0 452.1 L354.2 448.8 L360.0 444.4 L362.1 446.7 L364.0 444.1 L371.1 448.2 L373.9 439.7 L375.1 440.1 L374.2 437.6 L371.8 435.5 L371.0 430.4 L377.8 428.6 L386.6 419.0 L393.6 416.7 L392.1 405.1 L388.9 396.4 L391.2 395.6 L382.9 384.7 L380.1 385.3 L377.5 380.5 L373.4 376.8 L351.6 371.2 L352.3 363.5 L344.4 364.1 L336.6 362.0 L323.9 355.9 L318.4 351.8 L311.7 358.0 L311.3 357.2 L309.0 358.3 L308.5 355.7 L300.1 347.4 L298.7 348.7 L295.8 345.8 L291.6 349.0 L293.5 352.4 L281.3 365.0 L279.8 364.8 L278.7 368.3 L277.1 368.2 L277.1 370.0 L271.7 372.6 L265.6 377.8 L275.2 384.8 L277.6 390.9 L261.7 403.2 L244.6 410.2 L226.4 421.9 L227.5 423.2 L222.8 455.0 L221.3 456.9 L223.5 457.7 L228.2 469.0 L216.8 476.9Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="4"
              style={{ '--d': '0.43s' } as CSSProperties}
              d="M129.2 397.1 L126.3 403.8 L126.5 407.7 L128.8 409.1 L128.4 412.7 L131.4 416.2 L131.4 417.5 L134.1 420.3 L135.4 419.5 L141.8 427.3 L146.8 437.0 L150.6 441.8 L141.5 444.2 L147.0 465.7 L159.1 463.3 L163.8 465.1 L150.2 483.0 L195.8 481.4 L202.5 475.6 L203.0 476.5 L216.8 476.9 L228.2 469.0 L223.5 457.7 L221.3 456.9 L222.8 455.0 L227.5 423.2 L221.1 415.5 L197.6 392.3 L206.2 381.2 L204.3 380.2 L201.7 376.2 L208.9 370.9 L200.8 361.4 L190.0 373.4 L179.8 382.2 L179.0 381.4 L172.6 383.1 L174.0 384.6 L173.0 386.2 L173.4 387.9 L150.8 389.4 L144.1 393.3 L135.5 392.4 L129.2 397.1Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="5"
              style={{ '--d': '0.50s' } as CSSProperties}
              d="M41.1 371.6 L41.7 376.3 L44.8 382.0 L49.7 386.1 L54.6 386.8 L73.4 400.9 L80.3 404.6 L94.8 405.7 L97.9 402.9 L104.4 387.1 L122.8 391.2 L129.2 397.1 L135.5 392.4 L146.3 377.2 L150.7 378.9 L156.7 378.4 L161.5 375.8 L185.0 357.7 L204.0 354.9 L202.4 347.1 L205.7 347.0 L205.9 345.5 L210.6 345.6 L211.1 336.2 L201.8 335.3 L205.9 315.9 L197.3 315.9 L188.6 317.8 L186.8 316.8 L185.0 318.1 L180.6 318.6 L174.4 318.1 L165.8 321.2 L161.1 320.8 L157.1 318.9 L156.4 320.7 L142.8 311.7 L139.3 313.0 L135.1 319.7 L127.2 324.5 L128.1 329.0 L119.3 344.3 L88.7 350.2 L78.6 347.5 L70.3 361.6 L63.6 361.3 L59.1 358.6 L51.1 358.7 L47.9 360.9 L41.1 371.6Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="6"
              style={{ '--d': '0.57s' } as CSSProperties}
              d="M477.3 65.2 L469.5 68.8 L406.7 56.8 L405.0 57.8 L394.9 87.7 L392.9 88.7 L361.9 77.0 L354.2 88.4 L344.5 99.9 L316.1 112.2 L303.2 134.6 L292.2 171.3 L289.7 185.4 L289.4 194.6 L340.6 211.7 L343.3 213.6 L351.2 223.9 L378.9 234.7 L385.2 235.0 L380.8 248.9 L382.2 269.2 L394.1 290.2 L420.4 294.9 L463.5 227.9 L474.1 214.6 L505.3 180.9 L508.5 173.4 L517.6 162.1 L525.9 153.1 L533.1 148.2 L541.9 144.5 L550.9 143.1 L550.6 137.7 L545.1 133.6 L541.8 117.2 L537.1 104.8 L528.7 90.2 L477.3 65.2Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="7"
              style={{ '--d': '0.64s' } as CSSProperties}
              d="M420.4 294.9 L437.3 291.4 L444.3 299.5 L435.1 306.9 L436.8 325.9 L453.5 325.5 L463.7 316.4 L474.8 302.3 L519.2 329.6 L549.9 339.9 L612.8 260.9 L617.7 264.7 L619.2 262.7 L618.1 258.4 L628.9 245.1 L610.8 235.7 L601.5 228.6 L591.8 233.1 L581.0 222.6 L570.3 226.9 L511.1 170.0 L508.2 174.0 L505.3 180.9 L474.1 214.6 L463.5 227.9 L420.4 294.9Z"
              pathLength="1"
            />
            <path
              className="lm-center"
              d="M411.0 308.3 L399.6 318.1 L386.9 332.2 L378.4 339.7 L358.8 349.1 L349.2 352.3 L340.7 357.1 L334.1 358.5 L328.4 357.8 L323.9 355.9 L313.7 348.2 L306.3 340.2 L300.4 329.9 L300.4 324.5 L298.4 318.8 L295.9 302.7 L287.7 285.5 L285.1 277.7 L285.4 266.5 L293.5 231.5 L294.0 223.9 L293.7 214.5 L289.4 194.6 L340.6 211.7 L343.3 213.6 L351.2 223.9 L378.9 234.7 L385.2 235.0 L380.8 248.9 L382.2 269.2 L394.1 290.2 L419.8 294.8 L411.0 308.3Z"
              pathLength="1"
            />
            <g className="lm-ch" transform="translate(321.3 347.2)">
              <rect x="-6.0" y="-6.0" width="12.0" height="12.0" rx="1" />
            </g>
            <text className="lm-lb lm-lb-ch" x="309.3" y="353.9" fontSize="16.3" textAnchor="end">
              Île Seguin
            </text>
            <g
              className="lm-pin"
              data-c="0"
              style={{ '--d': '0.60s' } as CSSProperties}
              transform="translate(426.5 350.1)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="0"
              style={{ '--d': '0.70s' } as CSSProperties}
              x="426.5"
              y="378.2"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="426.5">Issy-</tspan>
              <tspan x="426.5" dy="20.9">
                les-Moulineaux
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="1"
              style={{ '--d': '0.67s' } as CSSProperties}
              transform="translate(239.2 361.4)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="1"
              style={{ '--d': '0.77s' } as CSSProperties}
              x="239.2"
              y="389.5"
              fontSize="19"
              textAnchor="middle"
            >
              Sèvres
            </text>
            <g
              className="lm-pin"
              data-c="2"
              style={{ '--d': '0.74s' } as CSSProperties}
              transform="translate(237.1 250.5)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="2"
              style={{ '--d': '0.84s' } as CSSProperties}
              x="237.1"
              y="278.5"
              fontSize="19"
              textAnchor="middle"
            >
              Saint-Cloud
            </text>
            <g
              className="lm-pin"
              data-c="3"
              style={{ '--d': '0.81s' } as CSSProperties}
              transform="translate(300.1 447.8)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="3"
              style={{ '--d': '0.91s' } as CSSProperties}
              x="300.1"
              y="475.8"
              fontSize="19"
              textAnchor="middle"
            >
              Meudon
            </text>
            <g
              className="lm-pin"
              data-c="4"
              style={{ '--d': '0.88s' } as CSSProperties}
              transform="translate(181.1 430.4)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="4"
              style={{ '--d': '0.98s' } as CSSProperties}
              x="181.1"
              y="458.5"
              fontSize="19"
              textAnchor="middle"
            >
              Chaville
            </text>
            <g
              className="lm-pin"
              data-c="5"
              style={{ '--d': '0.95s' } as CSSProperties}
              transform="translate(128.0 358.7)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="5"
              style={{ '--d': '1.05s' } as CSSProperties}
              x="128.0"
              y="386.8"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="128.0">Ville-</tspan>
              <tspan x="128.0" dy="20.9">
                d’Avray
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="6"
              style={{ '--d': '1.02s' } as CSSProperties}
              transform="translate(417.1 158.9)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="6"
              style={{ '--d': '1.12s' } as CSSProperties}
              x="417.1"
              y="187.0"
              fontSize="19"
              textAnchor="middle"
            >
              Paris 16e
            </text>
            <g
              className="lm-pin"
              data-c="7"
              style={{ '--d': '1.09s' } as CSSProperties}
              transform="translate(521.3 263.2)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="7"
              style={{ '--d': '1.19s' } as CSSProperties}
              x="521.3"
              y="291.2"
              fontSize="19"
              textAnchor="middle"
            >
              Paris 15e
            </text>
            <text className="lm-lb lm-lb-c" x="358.1" y="296.9" fontSize="23.8" textAnchor="middle">
              <tspan x="358.1">Boulogne-</tspan>
              <tspan x="358.1" dy="23.8">
                Billancourt
              </tspan>
            </text>
            <g className="lm-paris">
              <rect x="576.3" y="82.0" width="10" height="10" fill="#55554F" />
              <text x="571.3" y="93.7" fontSize="17.1" textAnchor="end">
                Paris 8e · le studio
              </text>
            </g>
            <text className="lm-attr" x="660" y="610" fontSize="13.7" textAnchor="end">
              © contributeurs OpenStreetMap
            </text>
          </svg>
        </div>
        <aside className="lm-side">
          <span className="lc-k">Communes voisines · Hauts-de-Seine</span>
          <ul className="lm-list">
            <li data-c="0" tabIndex={0}>
              <b>Issy-les-Moulineaux</b>
              <span>au sud-est</span>
            </li>
            <li data-c="1" tabIndex={0}>
              <b>Sèvres</b>
              <span>au sud-ouest</span>
            </li>
            <li data-c="2" tabIndex={0}>
              <b>Saint-Cloud</b>
              <span>à l’ouest</span>
            </li>
            <li data-c="3" tabIndex={0}>
              <b>Meudon</b>
              <span>au sud</span>
            </li>
            <li data-c="4" tabIndex={0}>
              <b>Chaville</b>
              <span>au sud-ouest</span>
            </li>
            <li data-c="5" tabIndex={0}>
              <b>Ville-d’Avray</b>
              <span>à l’ouest</span>
            </li>
            <li data-c="6" tabIndex={0}>
              <b>Paris 16e</b>
              <span>au nord-est</span>
            </li>
            <li data-c="7" tabIndex={0}>
              <b>Paris 15e</b>
              <span>à l’est</span>
            </li>
          </ul>
          <p className="lc-note">
            Et partout dans les Hauts-de-Seine et l’ouest parisien. Le studio est à Paris : on se déplace pour
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
            <span>Travaillez-vous déjà avec des entreprises de Boulogne-Billancourt ?</span>
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
            Oui : DATHY, dont le siège est à Boulogne-Billancourt. On a conçu son site, de la direction
            artistique au blog.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pouvez-vous refondre un site B2B sans casser nos outils ?</span>
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
            Oui, si les outils le permettent : la connexion (API, widget ou export) avec votre CRM, votre
            agenda ou votre newsletter est vérifiée au cadrage, avant le devis.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pourquoi une équipe à taille humaine plutôt qu’une grande agence ?</span>
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
            Vous parlez directement à ceux qui conçoivent et développent votre site, du premier appel à la
            mise en ligne. Moins d’intermédiaires, des décisions plus rapides.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien coûte une refonte de site à Boulogne-Billancourt ?</span>
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
          Un projet à Boulogne-Billancourt ?<span className="serif">Parlons-en.</span>
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
            <Link to="/expertises/e-commerce">E-commerce</Link>
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
      <PourQuiABoulogne />
      <CeQuOnLivre />
      <LeTissuLocalSecteur />
      <CeQueVotreSite />
      <NosRealisationsJusquA />
      <MoCommentOnTravaille2 />
      <AutourDeBoulogneBillancourt />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
