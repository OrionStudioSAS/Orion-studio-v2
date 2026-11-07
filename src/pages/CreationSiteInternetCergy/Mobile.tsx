import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoCommentOnTravaille2 } from '../../components/shared/MoCommentOnTravaille2'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Création de site internet / <b>Cergy</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Création de site internet à Cergy
        <span className="serif">pour les entreprises de l’agglomération.</span>
      </h1>
      <p className="mo-lead">
        Préfecture, université, grandes écoles, parcs d’activités : Cergy-Pontoise est le cœur économique du
        Val-d’Oise. On conçoit et on refond des sites sur mesure pour les PME, start-up, artisans et commerces
        de Cergy, et on travaille déjà avec plusieurs entreprises du Val-d’Oise et du Vexin.
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
          src="/images/lc-mo-cergy.png"
          alt="L’Axe Majeur de Cergy et sa tour belvédère, en pixel art"
        />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="pxsvg omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde le site
            <br />
            de votre entreprise cergyssoise ?
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
          Création et refonte<span className="serif">à Cergy.</span>
        </h2>
        <p className="mo-lead">
          De la jeune entreprise qui se lance à la PME dont le site ne suit plus : un site pensé pour vos
          clients du Val-d’Oise.
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
                <span className="win-title">votre-entreprise-cergy.fr</span>
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
                <img className="lcv-built" src="/images/lc-cergy.png" alt="" />
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
            Vous lancez votre activité à Cergy ou dans le Vexin : on construit un site qui explique clairement
            ce que vous faites, trouvable sur Google dès le lancement.
          </p>
          <ul>
            <li>Site vitrine ou site produit sur mesure</li>
            <li>Pages métiers et pages locales utiles, pas copiées-collées</li>
            <li>Formulaire de contact qui qualifie la demande</li>
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
              <img src="/images/lc-cergy.png" alt="" />
              <div className="lcv-new-bar">
                <b>votre-entreprise-cergy.fr</b>
                <span>Devis</span>
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
            Votre site a été fait il y a quelques années par un prestataire qui ne répond plus : on reprend
            tout, contenus, référencement et hébergement, et on vous rend la main.
          </p>
          <ul>
            <li>Reprise des contenus et redirections</li>
            <li>Hébergement et accès récupérés et documentés</li>
            <li>Back-office pour mettre à jour vous-même</li>
          </ul>
          <a className="lnk" data-pv="__hero__">
            Analyser mon site actuel
          </a>
        </article>
      </div>
    </section>
  )
}

function PourQuiACergy() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Pour qui,<span className="serif">à Cergy.</span>
        </h2>
      </div>
      <div className="lc-rows lcm-rows">
        <div className="lc-row lca">
          <b>PME industrielle ou de services</b>
          <p>
            Être trouvée par les acheteurs et les candidats, pas seulement par ceux qui la connaissent déjà.
          </p>
          <p className="lc-ex">
            <span>Par exemple</span>Pages métiers, références clients, page recrutement.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Start-up de l’écosystème étudiant</b>
          <p>Expliquer un produit en quelques secondes et obtenir des démos.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Page produit, réservation de démo, comme pour Swing Call.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Commerce ou restaurant</b>
          <p>Être trouvé sur « près de moi » et réserver sans passer par le téléphone.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Fiche Google soignée, carte à jour, réservation en ligne.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Artisan, producteur, association</b>
          <p>Recevoir des demandes et, parfois, vendre ou adhérer en ligne.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Devis en ligne, boutique simple, espace membres, comme pour l’Association
            des Entrepreneurs du Vexin.
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
          Ce qu’on livre,<span className="serif">pour Cergy.</span>
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
                    <span className="lcv-type" data-type="plombier cergy" />
                    <i className="lcv-caret" />
                  </div>
                  <div className="serp-r lcv-res">
                    <span className="serp-u">votre-entreprise-cergy.fr</span>
                    <b>Plombier à Cergy et dans le Val-d’Oise — Devis sous 48 h</b>
                    <span className="serp-d">
                      Dépannage, rénovation de salle de bains, Cergy, Pontoise, Osny et alentours.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>SEO local</h3>
              <p>
                Être trouvé sur « plombier Cergy », « restaurant Cergy-le-Haut », dans tout le Val-d’Oise.
              </p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="gbp">
                  <div className="gbp-n">Votre restaurant</div>
                  <div className="gbp-m">Restaurant · Port de Cergy · Ouvert jusqu’à 22 h</div>
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
              <p>Horaires, itinéraire et lien vers le site, tenus à jour.</p>
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
                      <b data-v="Votre start-up" />
                    </label>
                    <label className="fld">
                      <span>Rôle</span>
                      <b data-v="Fondatrice" />
                    </label>
                    <label className="fld">
                      <span>Créneau</span>
                      <b data-v="Jeudi 10 h" />
                    </label>
                    <label className="fld">
                      <span>Objet</span>
                      <b data-v="Démo produit" />
                    </label>
                  </div>
                  <div className="shop-cta">Réserver la démo</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Démo en ligne</h3>
              <p>Start-up de l’écosystème étudiant : des démos réservées depuis le site.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="uf lcv-fill">
                  <div className="ul-h">Demande de devis</div>
                  <div className="uf-g">
                    <label className="fld fld-f">
                      <span>Prestation</span>
                      <b data-v="Rénovation de toiture" />
                    </label>
                    <label className="fld">
                      <span>Commune</span>
                      <b data-v="Osny" />
                    </label>
                    <label className="fld">
                      <span>Délai</span>
                      <b data-v="Sous 3 mois" />
                    </label>
                    <label className="fld">
                      <span>Photos</span>
                      <b data-v="3 ajoutées" />
                    </label>
                  </div>
                  <div className="shop-cta">Envoyer ma demande</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Demande de devis</h3>
              <p>Artisans du Vexin : des demandes complètes, commune et photos comprises.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="uf lcv-fill">
                  <div className="ul-h">Adhésion</div>
                  <div className="uf-g">
                    <label className="fld fld-f">
                      <span>Structure</span>
                      <b data-v="Votre entreprise" />
                    </label>
                    <label className="fld">
                      <span>Activité</span>
                      <b data-v="Menuiserie" />
                    </label>
                    <label className="fld">
                      <span>Commune</span>
                      <b data-v="Marines" />
                    </label>
                    <label className="fld">
                      <span>Formule</span>
                      <b data-v="Annuelle" />
                    </label>
                  </div>
                  <div className="shop-cta">Adhérer en ligne</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Adhésion en ligne</h3>
              <p>Associations et réseaux d’entrepreneurs : adhésions et inscriptions sans papier.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="ui-sl lcv-slots">
                  <div className="ul-h">Restaurant · samedi</div>
                  <div className="rs-s sl-g" style={{ gridTemplateColumns: 'repeat(3,1fr)!important' }}>
                    <span className="">12:00</span>
                    <span className="off">12:30</span>
                    <span className="">13:00</span>
                    <span className="">19:30</span>
                    <span className="off">20:00</span>
                    <span className="">21:00</span>
                  </div>
                  <div className="shop-cta">Réserver</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Réservation en ligne</h3>
              <p>Restaurants du Grand Centre et du port : des tables réservées sans téléphone.</p>
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
          Ville nouvelle devenue préfecture et pôle économique du Val-d’Oise, Cergy mêle PME, parcs
          d’activités, commerces du Grand Centre et de Cergy-le-Haut, et un écosystème étudiant, autour de CY
          Cergy Paris Université et de l’ESSEC, d’où naissent régulièrement de jeunes entreprises. Juste à
          côté, le Vexin français garde une économie d’artisans, de producteurs et de réseaux d’entrepreneurs.
        </p>
      </div>
      <figure className="lcv-nd lcv-nd-m lca">
        <div className="lcv-nd-in">
          <img
            src="/images/lc-mo-cergy-nd.png"
            alt="Le port de Cergy, ses bateaux et ses maisons colorées le long des quais, en pixel art"
          />
        </div>
        <figcaption>Le port de Cergy, en fin de journée</figcaption>
      </figure>
      <div className="lc-sects lcm-sects">
        <div className="lc-s lca">
          <h3>PME et parcs d’activités</h3>
          <p>
            Industrie, logistique, services aux entreprises : des sites B2B qui expliquent un métier
            technique.
          </p>
        </div>
        <div className="lc-s lca">
          <h3>Start-up et jeunes entreprises</h3>
          <p>
            Issues des écoles et de l’université, elles ont besoin d’un site qui fait comprendre leur produit.
          </p>
        </div>
        <div className="lc-s lca">
          <h3>Commerces et restauration</h3>
          <p>Grand Centre, Cergy-le-Haut, port de Cergy : des adresses à faire trouver sur Google Maps.</p>
        </div>
        <div className="lc-s lca">
          <h3>Artisans et producteurs du Vexin</h3>
          <p>Bâtiment, alimentation, circuits courts : recevoir des devis et vendre en direct.</p>
        </div>
      </div>
      <div className="sec-ring sx-others mo-sec-ring lcm-ring">
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
        <Link to="/pour-qui/associations" className="sec-st" data-sector="asso" role="link" tabIndex={0}>
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
          <b>Associations</b>
        </Link>
        <Link
          to="/pour-qui/boulangeries"
          className="sec-st"
          data-sector="boulangerie"
          role="link"
          tabIndex={0}
        >
          <span className="sec-av">
            <span>
              <img
                className="pxsvg"
                src="/px/art-e0dda6d2.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
          <b>Boulangeries</b>
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
              <span className="lcv-type" data-type="agence web cergy" />
              <i className="lcv-caret" />
            </div>
          </div>
          <p>
            « agence web Cergy », « création site internet Val-d’Oise » : être présent là où vos clients
            cherchent un prestataire local.
          </p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Image</span>
          <div className="lcv-mini lcv-spec">
            <span className="lcv-aa">Aa</span>
            <span className="lcv-sw" style={{ '--c': '#1F3A5F' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#CFDCE3' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#3E8E7E' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#FF4D1A' } as CSSProperties} />
          </div>
          <p>Une marque qui fait sérieux face à des concurrents parisiens, avec un budget maîtrisé.</p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Demandes</span>
          <div className="lcv-mini">
            <div className="lcv-notif">
              <i className="sq sq-ok" />
              <div>
                <b>Nouvelle demande de devis</b>
                <span>Rénovation de toiture · Osny</span>
              </div>
              <em>maintenant</em>
            </div>
          </div>
          <p>Des formulaires qui qualifient : type de projet, délai, budget.</p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Conversion</span>
          <div className="lcv-mini lcv-langbtn">
            <span className="lcv-cta">
              <b>Appeler</b>
              <b>Itinéraire</b>
            </span>
          </div>
          <p>Des parcours courts sur mobile, l’appel et l’itinéraire à un geste.</p>
        </div>
      </div>
    </section>
  )
}

function NosRealisationsDansLe() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Nos réalisations<span className="serif">dans le Val-d’Oise.</span>
        </h2>
        <p className="mo-lead">
          Dans le Val-d’Oise et le Vexin, on a conçu les sites de l’Association des Entrepreneurs du Vexin, de
          Housses Taxi à Pierrelaye et de DATHY à Saint-Gervais, et la boutique des Bocaux du Vexin.
        </p>
      </div>
      <div className="mo-projs">
        <article className="mo-proj" data-cats="site app">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/17682ce2f50cef.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Association des Entrepreneurs du Vexin</span>
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
            <h3>Association des Entrepreneurs du Vexin</h3>
            <span>Association · Site + espace membres</span>
          </div>
          <p>Le site du réseau des chefs d’entreprise du Vexin : membres, événements et adhésion en ligne.</p>
          <Link
            to="/realisations/entrepreneurs-du-vexin"
            className="lnk mo-more"
            data-proj="entrepreneurs-du-vexin"
          >
            Voir le projet
          </Link>
        </article>
        <article className="mo-proj" data-cats="site">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/6fd799a3a74785.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Housses Taxi</span>
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
            <h3>Housses Taxi</h3>
            <span>Site vitrine · TPE</span>
          </div>
          <p>Le site d’un fabricant de housses sur mesure pour taxis et VTC, dans le Val-d’Oise.</p>
          <Link to="/realisations/housses-taxi" className="lnk mo-more" data-proj="housses-taxi">
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

function AutourDeCergyOn() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Autour de Cergy,<span className="serif">on intervient aussi.</span>
        </h2>
      </div>
      <div className="lmw lmw-m">
        <div className="lm-card">
          <img
            className="lm-base"
            src="/images/lc-map-cergy-m.svg"
            alt="Carte de Cergy et des communes voisines : routes, voies ferrées, forêts et cours d’eau"
          />
          <svg className="lmap-o" viewBox="0 0 670 620" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              className="lm-town"
              data-c="0"
              style={{ '--d': '0.15s' } as CSSProperties}
              d="M497.0 225.9 L501.0 221.1 L505.6 217.6 L508.4 213.5 L511.7 216.6 L520.9 209.7 L527.3 216.5 L505.1 234.8 L494.1 251.3 L478.6 269.1 L474.1 273.5 L460.9 281.9 L456.6 288.8 L454.0 291.0 L448.1 303.6 L446.3 313.7 L446.7 319.2 L441.0 330.4 L434.2 348.9 L429.8 366.7 L427.6 380.9 L424.7 387.7 L423.1 386.8 L426.0 373.9 L424.5 364.4 L421.1 368.4 L415.5 366.8 L412.1 369.0 L408.2 367.7 L405.1 358.0 L406.8 352.4 L409.0 349.7 L402.2 342.4 L415.9 326.1 L405.2 319.6 L392.0 309.2 L372.6 288.8 L375.8 284.9 L379.8 287.3 L383.8 280.8 L385.3 275.3 L390.4 267.7 L384.7 261.9 L385.5 255.0 L389.1 255.6 L391.6 253.2 L398.9 249.4 L400.7 242.8 L402.0 243.3 L407.5 233.4 L413.9 226.4 L426.1 207.4 L439.4 190.7 L437.3 188.4 L426.4 181.6 L426.2 177.7 L427.5 177.1 L434.0 178.9 L434.4 180.1 L437.7 181.2 L443.6 185.5 L452.8 197.2 L458.7 201.2 L463.4 202.8 L460.6 206.1 L461.7 210.5 L465.7 215.5 L466.1 210.7 L469.0 215.4 L468.5 218.8 L464.2 222.4 L465.2 232.0 L470.1 234.1 L474.7 234.3 L476.6 233.8 L475.5 227.3 L487.4 231.2 L490.4 225.6 L493.1 223.5 L495.1 222.4 L497.0 225.9Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="1"
              style={{ '--d': '0.22s' } as CSSProperties}
              d="M406.2 129.4 L410.7 138.2 L412.2 137.5 L413.6 140.4 L412.1 154.9 L415.4 159.9 L414.8 170.3 L416.3 175.0 L419.1 174.8 L429.5 184.2 L437.3 188.4 L439.4 190.7 L426.1 207.4 L413.9 226.4 L407.5 233.4 L402.0 243.3 L400.7 242.8 L398.9 249.4 L391.6 253.2 L389.1 255.6 L385.5 255.0 L384.7 261.9 L390.4 267.7 L385.3 275.3 L383.8 280.8 L379.8 287.3 L375.8 284.9 L372.6 288.8 L354.9 270.9 L342.5 263.2 L329.9 258.3 L301.2 250.7 L300.7 259.4 L293.1 259.0 L277.8 253.7 L251.7 251.8 L248.2 249.6 L247.7 248.8 L253.5 244.4 L256.2 240.9 L264.8 241.0 L266.5 221.7 L272.1 201.7 L274.1 199.4 L273.4 196.7 L285.4 172.7 L284.4 168.9 L289.4 161.3 L294.8 143.9 L296.2 136.2 L294.8 135.6 L305.2 129.7 L322.2 126.7 L347.8 119.4 L357.2 129.6 L374.6 153.4 L390.7 125.5 L406.2 129.4Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="2"
              style={{ '--d': '0.29s' } as CSSProperties}
              d="M197.6 376.4 L199.3 402.7 L229.6 400.9 L250.4 410.3 L251.5 407.0 L260.2 404.5 L258.2 398.7 L267.2 396.8 L268.1 395.0 L267.2 392.1 L268.4 390.2 L274.2 389.3 L273.5 386.7 L284.1 381.0 L273.0 364.2 L271.4 359.1 L272.2 353.3 L281.2 338.7 L267.5 325.5 L262.7 331.6 L255.8 333.5 L245.6 330.9 L242.5 324.2 L241.2 324.6 L241.4 326.5 L230.6 327.7 L230.1 325.0 L224.5 325.7 L214.4 321.4 L211.8 322.3 L199.6 331.1 L205.1 374.7 L197.6 376.4Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="3"
              style={{ '--d': '0.36s' } as CSSProperties}
              d="M328.0 469.1 L336.7 464.6 L350.1 455.8 L327.8 430.8 L312.5 417.7 L296.4 399.3 L290.7 394.2 L284.1 381.0 L273.5 386.7 L274.2 389.3 L268.4 390.2 L267.2 392.1 L268.1 395.0 L267.2 396.8 L258.2 398.7 L260.2 404.5 L251.5 407.0 L250.4 410.3 L229.6 400.9 L199.6 402.8 L201.7 416.1 L207.6 416.4 L208.0 425.3 L211.5 430.5 L193.5 442.2 L198.0 450.4 L193.2 454.2 L189.0 454.9 L202.8 472.0 L202.6 476.5 L205.4 484.5 L207.6 486.4 L229.6 496.2 L235.8 500.6 L242.2 492.7 L242.4 489.4 L250.0 484.4 L270.3 484.3 L286.0 485.7 L289.7 489.0 L307.3 480.8 L313.5 475.1 L322.5 469.9 L328.0 469.1Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="4"
              style={{ '--d': '0.43s' } as CSSProperties}
              d="M424.9 387.7 L427.6 380.9 L429.8 366.7 L434.2 348.9 L438.4 336.8 L462.1 348.4 L463.4 355.4 L470.9 360.4 L471.8 367.7 L476.8 370.7 L489.9 382.2 L500.0 399.6 L504.8 399.5 L509.1 406.7 L510.4 411.4 L507.7 417.2 L481.0 447.2 L480.0 454.2 L467.5 450.9 L444.2 443.0 L400.4 426.0 L393.0 422.1 L397.1 416.3 L396.6 410.0 L411.9 406.1 L417.1 403.1 L419.2 400.7 L424.9 387.7Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="5"
              style={{ '--d': '0.50s' } as CSSProperties}
              d="M496.3 392.1 L496.4 385.9 L514.2 365.5 L531.8 393.5 L550.6 376.5 L589.6 351.9 L597.1 346.0 L628.9 316.8 L618.8 311.2 L618.3 311.9 L618.7 311.1 L600.4 300.5 L598.0 294.0 L596.8 294.6 L591.6 282.3 L590.6 282.3 L590.3 276.7 L596.4 276.0 L596.4 269.6 L601.5 268.5 L600.8 251.1 L597.3 234.2 L596.4 230.5 L593.3 226.6 L588.1 228.6 L587.4 226.5 L586.0 226.9 L585.2 224.8 L581.0 225.2 L577.6 224.1 L579.5 221.1 L589.3 213.1 L590.2 209.2 L587.8 208.2 L569.4 207.4 L565.8 205.4 L562.0 205.8 L552.0 202.5 L547.3 202.6 L539.7 205.4 L531.8 213.4 L523.5 219.0 L505.1 234.8 L494.1 251.3 L478.6 269.1 L474.1 273.5 L460.9 281.9 L456.6 288.8 L454.0 291.0 L448.1 303.6 L446.3 313.7 L446.7 319.2 L438.4 336.8 L462.1 348.4 L463.4 355.4 L470.9 360.4 L471.8 367.7 L476.8 370.7 L489.9 382.2 L496.3 392.1Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="6"
              style={{ '--d': '0.57s' } as CSSProperties}
              d="M197.6 376.4 L197.4 374.2 L182.1 372.3 L171.0 374.8 L166.8 374.6 L167.2 387.9 L164.8 388.7 L164.8 389.7 L145.1 389.2 L146.3 375.0 L150.9 369.5 L147.7 362.3 L144.6 359.7 L141.9 356.0 L143.3 356.1 L134.7 345.2 L127.9 344.5 L123.1 341.9 L125.2 338.7 L125.6 329.6 L122.8 329.2 L127.2 322.6 L124.6 320.2 L130.2 298.8 L134.2 275.3 L148.6 248.7 L153.6 232.5 L152.1 231.8 L152.8 230.5 L199.2 249.9 L196.9 252.8 L186.1 256.3 L178.1 260.4 L169.0 269.0 L182.6 275.4 L181.5 278.0 L188.4 280.0 L188.0 282.6 L192.5 283.9 L191.1 288.8 L194.5 290.7 L188.9 299.9 L198.4 303.0 L214.5 318.9 L214.4 321.4 L208.8 324.2 L199.6 331.1 L205.1 374.7 L197.6 376.4Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="7"
              style={{ '--d': '0.64s' } as CSSProperties}
              d="M145.1 389.2 L146.3 375.0 L150.9 369.5 L147.7 362.3 L144.6 359.7 L141.9 356.0 L143.3 356.1 L134.7 345.2 L127.9 344.5 L119.7 340.0 L109.9 337.8 L103.4 338.3 L101.8 342.3 L58.7 342.1 L56.7 350.0 L56.8 364.7 L52.0 372.3 L51.4 376.7 L41.1 379.9 L43.7 390.6 L47.3 396.8 L53.7 394.6 L56.7 391.8 L59.8 391.6 L68.1 382.1 L75.6 394.3 L91.2 403.2 L95.1 407.5 L110.6 410.5 L129.4 407.0 L146.9 401.0 L145.1 389.2Z"
              pathLength="1"
            />
            <path
              className="lm-center"
              d="M242.5 324.2 L245.6 330.9 L255.8 333.5 L262.7 331.6 L267.5 325.5 L281.2 338.7 L276.7 346.2 L310.2 369.0 L307.6 372.5 L311.4 375.5 L312.7 378.6 L328.0 391.1 L327.9 392.2 L332.1 393.8 L336.2 384.5 L340.9 380.5 L360.5 403.1 L367.4 408.8 L378.5 413.2 L381.8 414.3 L385.5 409.2 L393.2 410.8 L415.2 404.6 L419.2 400.7 L424.9 387.7 L423.1 386.8 L426.0 373.9 L424.5 364.4 L421.1 368.4 L415.5 366.8 L412.1 369.0 L408.2 367.7 L405.1 358.0 L406.8 352.4 L409.0 349.7 L402.2 342.4 L415.9 326.1 L405.2 319.6 L392.0 309.2 L357.8 273.1 L349.1 266.9 L334.3 259.7 L301.2 250.7 L300.7 259.4 L290.5 258.6 L276.8 253.5 L251.7 251.8 L247.7 248.8 L241.1 253.6 L238.3 258.7 L224.5 256.5 L224.1 259.0 L218.4 256.9 L218.5 255.7 L208.6 253.9 L199.2 249.9 L196.9 252.8 L186.1 256.3 L178.1 260.4 L169.0 269.0 L182.6 275.4 L181.5 278.0 L188.4 280.0 L188.0 282.6 L192.5 283.9 L191.1 288.8 L194.5 290.7 L188.9 299.9 L198.6 303.2 L214.5 318.9 L214.4 321.4 L224.5 325.7 L230.1 325.0 L230.6 327.7 L241.4 326.5 L241.2 324.6 L242.5 324.2Z"
              pathLength="1"
            />
            <g className="lm-ch" transform="translate(272.1 302.0)">
              <rect x="-6.0" y="-6.0" width="12.0" height="12.0" rx="1" />
            </g>
            <text className="lm-lb lm-lb-ch" x="260.1" y="308.7" fontSize="16.3" textAnchor="end">
              Axe Majeur
            </text>
            <g
              className="lm-pin"
              data-c="0"
              style={{ '--d': '0.60s' } as CSSProperties}
              transform="translate(435.8 269.8)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="0"
              style={{ '--d': '0.70s' } as CSSProperties}
              x="435.8"
              y="297.9"
              fontSize="19"
              textAnchor="middle"
            >
              Pontoise
            </text>
            <g
              className="lm-pin"
              data-c="1"
              style={{ '--d': '0.67s' } as CSSProperties}
              transform="translate(347.0 199.4)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="1"
              style={{ '--d': '0.77s' } as CSSProperties}
              x="347.0"
              y="227.4"
              fontSize="19"
              textAnchor="middle"
            >
              Osny
            </text>
            <g
              className="lm-pin"
              data-c="2"
              style={{ '--d': '0.74s' } as CSSProperties}
              transform="translate(237.5 365.0)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="2"
              style={{ '--d': '0.84s' } as CSSProperties}
              x="237.5"
              y="393.0"
              fontSize="19"
              textAnchor="middle"
            >
              Vauréal
            </text>
            <g
              className="lm-pin"
              data-c="3"
              style={{ '--d': '0.81s' } as CSSProperties}
              transform="translate(263.4 444.4)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="3"
              style={{ '--d': '0.91s' } as CSSProperties}
              x="263.4"
              y="472.5"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="263.4">Jouy-</tspan>
              <tspan x="263.4" dy="20.9">
                le-Moutier
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="4"
              style={{ '--d': '0.88s' } as CSSProperties}
              transform="translate(455.5 402.7)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="4"
              style={{ '--d': '0.98s' } as CSSProperties}
              x="455.5"
              y="430.8"
              fontSize="19"
              textAnchor="middle"
            >
              Éragny
            </text>
            <g
              className="lm-pin"
              data-c="5"
              style={{ '--d': '0.95s' } as CSSProperties}
              transform="translate(533.3 300.3)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="5"
              style={{ '--d': '1.05s' } as CSSProperties}
              x="533.3"
              y="328.3"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="533.3">Saint-</tspan>
              <tspan x="533.3" dy="20.9">
                Ouen-l’Aumône
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="6"
              style={{ '--d': '1.02s' } as CSSProperties}
              transform="translate(165.5 314.7)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="6"
              style={{ '--d': '1.12s' } as CSSProperties}
              x="165.5"
              y="342.8"
              fontSize="19"
              textAnchor="middle"
            >
              Courdimanche
            </text>
            <g
              className="lm-pin"
              data-c="7"
              style={{ '--d': '1.09s' } as CSSProperties}
              transform="translate(100.6 373.3)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="7"
              style={{ '--d': '1.19s' } as CSSProperties}
              x="100.6"
              y="401.3"
              fontSize="19"
              textAnchor="middle"
            >
              Menucourt
            </text>
            <text className="lm-lb lm-lb-c" x="386.2" y="373.4" fontSize="30.4" textAnchor="middle">
              Cergy
            </text>
            <g className="lm-paris">
              <g transform="translate(575.4 562.2) rotate(44.9)">
                <path d="M-61 0 H0 m-6 -4 l6 4 l-6 4" fill="none" />
              </g>
              <text x="528.1" y="521.7" fontSize="17.1" textAnchor="end">
                Paris 8e · le studio
              </text>
            </g>
            <text className="lm-attr" x="660" y="610" fontSize="13.7" textAnchor="end">
              © contributeurs OpenStreetMap
            </text>
          </svg>
        </div>
        <aside className="lm-side">
          <span className="lc-k">Communes voisines · Val-d’Oise</span>
          <ul className="lm-list">
            <li data-c="0" tabIndex={0}>
              <b>Pontoise</b>
              <span>à l’est</span>
            </li>
            <li data-c="1" tabIndex={0}>
              <b>Osny</b>
              <span>au nord</span>
            </li>
            <li data-c="2" tabIndex={0}>
              <b>Vauréal</b>
              <span>au sud-ouest</span>
            </li>
            <li data-c="3" tabIndex={0}>
              <b>Jouy-le-Moutier</b>
              <span>au sud</span>
            </li>
            <li data-c="4" tabIndex={0}>
              <b>Éragny</b>
              <span>au sud-est</span>
            </li>
            <li data-c="5" tabIndex={0}>
              <b>Saint-Ouen-l’Aumône</b>
              <span>à l’est</span>
            </li>
            <li data-c="6" tabIndex={0}>
              <b>Courdimanche</b>
              <span>à l’ouest</span>
            </li>
            <li data-c="7" tabIndex={0}>
              <b>Menucourt</b>
              <span>à l’ouest</span>
            </li>
          </ul>
          <p className="lc-note">
            Et partout dans le Val-d’Oise et le Vexin. Le studio est à Paris : on se déplace pour lancer le
            projet, puis on avance en visio.
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
            <span>Travaillez-vous déjà avec des entreprises du Val-d’Oise ?</span>
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
            Oui : l’Association des Entrepreneurs du Vexin, Housses Taxi à Pierrelaye, DATHY à Saint-Gervais
            et Les Bocaux du Vexin. Leurs projets sont présentés dans nos réalisations.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Faut-il venir à Paris pour travailler avec vous ?</span>
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
            Non. On peut se voir à Cergy pour lancer le projet, puis tout avance en visio et par message.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Notre start-up a besoin d’un site et d’un produit : pouvez-vous faire les deux ?</span>
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
            <span>Combien coûte une création de site internet à Cergy ?</span>
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
          Un projet à Cergy ?<span className="serif">Parlons-en.</span>
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
      <PourQuiACergy />
      <CeQuOnLivre />
      <LeTissuLocalSecteur />
      <CeQueVotreSite />
      <NosRealisationsDansLe />
      <MoCommentOnTravaille2 />
      <AutourDeCergyOn />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
