import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { IlsNousOntFait } from '../../components/shared/IlsNousOntFait'
import { CommentOnTravaille } from '../../components/shared/CommentOnTravaille'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/">
          Création de site internet / <b>Cergy</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Création de site internet à Cergy</span>
        <span className="serif">pour les entreprises de l’agglomération.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Préfecture, université, grandes écoles, parcs d’activités : Cergy-Pontoise est le cœur économique du
          Val-d’Oise. On conçoit et on refond des sites sur mesure pour les PME, start-up, artisans et
          commerces de Cergy, et on travaille déjà avec plusieurs entreprises du Val-d’Oise et du Vexin.
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
    <div className="hero-media sx-media">
      <div className="hm-layer">
        <img src="/images/lc-cergy.png" alt="L’Axe Majeur de Cergy et sa tour belvédère, en pixel art" />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="pxsvg omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde le site de votre entreprise cergyssoise ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.votre-entreprise.fr
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
                Horaires
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
                Commandes
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
                Google
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
      <div className="capt">L’Axe Majeur, à l’heure bleue</div>
    </div>
  )
}

function CreationEtRefonteDe() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Création et refonte
          <br />
          <span className="serif">de sites internet à Cergy.</span>
        </h2>
        <p className="lead">
          De la jeune entreprise qui se lance à la PME dont le site ne suit plus : un site pensé pour vos
          clients du Val-d’Oise.
        </p>
      </div>
      <div className="lc-two">
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Pour qui,
          <br />
          <span className="serif">à Cergy.</span>
        </h2>
        <p className="lead">
          Les entreprises qu’on accompagne ici, et ce que leur site doit faire pour elles.
        </p>
      </div>
      <div className="lc-rows">
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’on livre,
          <br />
          <span className="serif">pour Cergy.</span>
        </h2>
        <p className="lead">
          Les briques qui comptent pour les entreprises de Cergy et du Vexin. Les écrans ci-dessous sont des
          exemples.
        </p>
      </div>
      <div className="gcells">
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
            <p>Être trouvé sur « plombier Cergy », « restaurant Cergy-le-Haut », dans tout le Val-d’Oise.</p>
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
    </section>
  )
}

function LeTissuLocalSecteur() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Le tissu local,
          <br />
          <span className="serif">secteur par secteur.</span>
        </h2>
        <p className="lead">
          Ville nouvelle devenue préfecture et pôle économique du Val-d’Oise, Cergy mêle PME, parcs
          d’activités, commerces du Grand Centre et de Cergy-le-Haut, et un écosystème étudiant, autour de CY
          Cergy Paris Université et de l’ESSEC, d’où naissent régulièrement de jeunes entreprises. Juste à
          côté, le Vexin français garde une économie d’artisans, de producteurs et de réseaux d’entrepreneurs.
        </p>
      </div>
      <figure className="lcv-nd lca">
        <div className="lcv-nd-in">
          <img
            src="/images/lc-cergy-nd.png"
            alt="Le port de Cergy, ses bateaux et ses maisons colorées le long des quais, en pixel art"
          />
        </div>
        <figcaption>Le port de Cergy, en fin de journée</figcaption>
      </figure>
      <div className="lc-sects">
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
      <div className="sx-oth lc-oth">
        <span className="lc-k">Nos pages métiers</span>
        <div className="sec-ring sx-others">
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
          <Link
            to="/pour-qui/restaurants"
            className="sec-st"
            data-sector="restaurant"
            role="link"
            tabIndex={0}
          >
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
      </div>
    </section>
  )
}

function CeQueVotreSite() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce que votre site
          <br />
          <span className="serif">doit vous apporter.</span>
        </h2>
      </div>
      <div className="ocs lc-ocs">
        <div className="lca oc">
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
        <div className="lca oc">
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
        <div className="lca oc">
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
        <div className="lca oc">
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Nos réalisations
          <br />
          <span className="serif">dans le Val-d’Oise.</span>
        </h2>
        <p className="lead">
          Dans le Val-d’Oise et le Vexin, on a conçu les sites de l’Association des Entrepreneurs du Vexin, de
          Housses Taxi à Pierrelaye et de DATHY à Saint-Gervais, et la boutique des Bocaux du Vexin.
        </p>
        <Link to="/realisations" className="lnk">
          Toutes les réalisations
        </Link>
      </div>
      <div className="rz-grid lc-rz">
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
      </div>
    </section>
  )
}

function AutourDeCergyOn() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Autour de Cergy,
          <br />
          <span className="serif">on intervient aussi.</span>
        </h2>
      </div>
      <div className="lmw">
        <div className="lm-card">
          <img
            className="lm-base"
            src="/images/lc-map-cergy-d.svg"
            alt="Carte de Cergy et des communes voisines : routes, voies ferrées, forêts et cours d’eau"
          />
          <svg className="lmap-o" viewBox="0 0 860 560" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              className="lm-town"
              data-c="0"
              style={{ '--d': '0.15s' } as CSSProperties}
              d="M638.0 172.0 L643.0 165.8 L648.9 161.5 L652.5 156.1 L656.8 160.1 L668.6 151.2 L676.9 159.9 L648.3 183.5 L634.2 204.7 L618.0 222.1 L614.4 227.5 L608.6 233.2 L591.6 243.9 L586.1 252.8 L582.8 255.7 L575.1 271.8 L572.9 284.7 L573.3 291.8 L569.7 300.7 L566.0 306.1 L557.3 330.0 L551.6 352.8 L548.9 371.0 L545.1 379.7 L543.1 378.6 L546.8 362.0 L544.9 349.9 L540.6 355.0 L533.3 353.0 L529.0 355.7 L523.9 354.1 L520.0 341.6 L522.1 334.4 L525.0 331.0 L516.3 321.6 L533.8 300.7 L520.1 292.3 L503.2 278.9 L478.3 252.8 L482.4 247.8 L487.5 250.8 L492.6 242.5 L492.1 240.9 L494.6 235.5 L501.1 225.7 L500.2 223.7 L495.5 220.9 L493.8 218.2 L494.8 209.4 L499.5 210.2 L502.6 207.1 L512.1 202.2 L514.4 193.7 L516.0 194.4 L523.1 181.7 L526.5 179.0 L531.3 172.7 L547.0 148.3 L564.0 126.8 L561.4 123.9 L552.7 119.5 L547.4 115.2 L546.5 114.2 L547.1 110.2 L548.8 109.5 L557.0 111.7 L557.6 113.3 L561.9 114.7 L569.4 120.2 L581.2 135.2 L588.8 140.4 L594.8 142.4 L591.2 146.7 L592.6 152.2 L597.8 158.7 L598.3 152.5 L602.0 158.6 L601.3 163.0 L595.9 167.5 L596.1 177.6 L597.1 179.9 L601.6 180.9 L603.4 182.6 L609.3 182.9 L611.8 182.2 L611.9 178.3 L610.4 173.9 L625.6 178.9 L629.5 171.6 L632.9 169.0 L635.5 167.6 L638.0 172.0Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="1"
              style={{ '--d': '0.22s' } as CSSProperties}
              d="M521.4 48.1 L522.4 48.2 L522.6 51.8 L527.1 59.4 L529.0 58.6 L530.9 62.3 L528.7 76.6 L529.0 81.0 L533.2 87.4 L532.4 100.7 L534.3 106.7 L538.0 106.5 L551.2 118.5 L561.4 123.9 L564.0 126.8 L547.0 148.3 L531.3 172.7 L526.5 179.0 L523.1 181.7 L516.0 194.4 L514.4 193.7 L512.1 202.2 L502.6 207.1 L499.5 210.2 L494.8 209.4 L493.8 218.2 L495.5 220.9 L500.2 223.7 L501.1 225.7 L494.6 235.5 L492.1 240.9 L492.6 242.5 L487.5 250.8 L482.4 247.8 L478.3 252.8 L464.6 237.6 L455.5 229.7 L439.7 219.9 L423.5 213.6 L386.6 203.9 L385.9 215.0 L376.2 214.6 L356.6 207.8 L323.1 205.3 L318.6 202.4 L318.0 201.5 L325.4 195.7 L328.8 191.3 L339.9 191.5 L339.9 181.8 L342.1 166.7 L349.2 140.9 L351.8 138.1 L351.0 134.5 L354.9 124.9 L366.3 103.7 L365.1 98.8 L371.5 89.1 L378.5 66.8 L380.2 56.9 L378.4 56.1 L384.1 53.9 L391.8 48.6 L413.5 44.8 L424.8 40.6 L446.5 35.4 L458.5 48.4 L480.8 79.0 L501.5 43.1 L509.0 45.8 L521.4 48.1Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="2"
              style={{ '--d': '0.29s' } as CSSProperties}
              d="M253.6 365.2 L255.8 398.9 L294.8 396.7 L321.4 408.7 L322.9 404.5 L334.0 401.3 L331.4 393.9 L337.7 393.3 L343.0 391.4 L344.2 389.1 L343.0 385.3 L344.5 383.0 L352.0 381.8 L351.1 378.5 L364.6 371.2 L350.5 349.6 L348.3 343.0 L349.4 335.6 L360.2 319.4 L360.9 316.9 L343.4 299.8 L339.9 305.6 L337.2 307.7 L328.3 310.1 L315.3 306.9 L311.2 298.2 L309.5 298.7 L309.8 301.2 L296.0 302.7 L295.3 299.3 L288.1 300.2 L275.2 294.6 L271.8 295.8 L256.2 307.1 L263.2 363.0 L253.6 365.2Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="3"
              style={{ '--d': '0.36s' } as CSSProperties}
              d="M421.0 484.2 L432.2 478.5 L449.4 467.1 L420.7 435.0 L412.1 428.6 L401.1 418.3 L392.3 409.4 L380.4 394.6 L373.2 388.1 L364.6 371.2 L351.1 378.5 L352.0 381.8 L344.5 383.0 L343.0 385.3 L344.2 389.1 L343.0 391.4 L337.7 393.3 L331.4 393.9 L334.0 401.3 L322.9 404.5 L321.4 408.7 L294.8 396.7 L256.2 399.1 L258.9 416.2 L266.5 416.6 L266.9 428.0 L271.5 434.7 L252.4 447.9 L248.4 449.6 L251.2 453.2 L254.1 460.2 L247.9 465.1 L242.6 466.0 L260.3 487.9 L260.1 493.7 L263.6 504.0 L266.5 506.4 L294.6 519.0 L302.7 524.6 L310.9 514.6 L310.2 511.4 L311.1 510.3 L320.8 503.9 L347.0 503.8 L367.2 505.5 L371.8 509.7 L394.4 499.3 L402.3 491.9 L413.9 485.3 L421.0 484.2Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="4"
              style={{ '--d': '0.43s' } as CSSProperties}
              d="M545.4 379.7 L548.9 371.0 L551.6 352.8 L557.3 330.0 L562.7 314.4 L569.7 316.8 L593.1 329.3 L594.8 338.3 L604.4 344.7 L605.6 354.0 L612.0 357.9 L628.9 372.7 L637.1 385.4 L641.8 395.0 L647.9 394.9 L653.4 404.1 L655.2 410.2 L651.7 417.6 L617.4 456.1 L616.1 465.1 L600.1 460.9 L585.9 455.3 L570.1 450.7 L513.9 428.9 L504.5 423.9 L508.4 419.7 L509.7 416.4 L509.1 408.3 L528.7 403.3 L535.4 399.5 L538.1 396.5 L545.4 379.7Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="5"
              style={{ '--d': '0.50s' } as CSSProperties}
              d="M637.1 385.4 L637.1 377.4 L660.0 351.2 L671.7 371.5 L682.6 387.2 L698.1 372.1 L706.8 365.3 L756.8 333.8 L766.4 326.3 L807.2 288.8 L794.3 281.6 L793.6 282.4 L794.1 281.4 L770.6 267.8 L767.5 259.4 L766.1 260.3 L763.8 254.2 L762.8 254.5 L759.3 244.4 L758.1 244.4 L757.7 237.2 L765.5 236.4 L765.5 228.2 L772.1 226.7 L771.2 204.4 L766.6 182.7 L765.5 177.9 L761.6 173.0 L754.8 175.5 L754.0 172.8 L752.2 173.3 L751.1 170.7 L745.8 171.2 L741.3 169.7 L743.9 165.9 L756.4 155.6 L757.5 150.7 L754.5 149.4 L730.8 148.3 L726.2 145.8 L721.4 146.2 L708.5 142.0 L702.5 142.1 L692.8 145.8 L682.7 155.9 L672.0 163.2 L648.3 183.5 L634.2 204.7 L618.0 222.1 L614.4 227.5 L608.6 233.2 L591.6 243.9 L586.1 252.8 L582.8 255.7 L575.1 271.8 L572.9 284.7 L573.3 291.8 L562.7 314.4 L569.7 316.8 L593.1 329.3 L594.8 338.3 L604.4 344.7 L605.6 354.0 L612.0 357.9 L628.9 372.7 L637.1 385.4Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="6"
              style={{ '--d': '0.57s' } as CSSProperties}
              d="M253.6 365.2 L253.4 362.4 L233.7 360.0 L219.5 363.2 L214.1 362.9 L214.6 380.0 L211.5 381.0 L211.5 382.3 L204.1 382.5 L191.5 380.9 L186.3 381.6 L186.6 368.4 L187.7 363.4 L193.7 356.4 L189.6 347.2 L185.6 343.8 L182.2 339.1 L184.0 339.2 L177.8 332.7 L172.9 325.2 L168.3 323.8 L164.2 324.2 L158.0 320.9 L160.7 316.9 L161.3 305.1 L157.6 304.6 L163.2 296.2 L159.9 293.1 L167.1 265.6 L172.3 235.4 L190.7 201.3 L197.2 180.5 L195.3 179.6 L196.2 177.9 L255.7 202.9 L252.8 206.5 L238.9 211.0 L228.6 216.3 L216.9 227.4 L234.3 235.6 L233.0 238.9 L241.8 241.5 L241.3 244.8 L247.1 246.5 L245.3 252.8 L249.7 255.2 L245.1 261.1 L242.4 267.1 L254.6 271.0 L265.3 282.6 L275.3 291.5 L275.2 294.6 L268.0 298.2 L256.2 307.1 L263.2 363.0 L253.6 365.2Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="7"
              style={{ '--d': '0.64s' } as CSSProperties}
              d="M186.3 381.6 L186.6 368.4 L187.7 363.4 L193.7 356.4 L189.6 347.2 L185.6 343.8 L182.2 339.1 L184.0 339.2 L177.8 332.7 L172.9 325.2 L168.3 323.8 L164.2 324.2 L153.7 318.5 L141.0 315.7 L132.8 316.3 L130.7 321.4 L114.3 321.8 L86.7 320.5 L75.3 321.3 L72.8 331.3 L72.9 350.3 L66.8 360.0 L65.9 365.6 L52.8 369.8 L56.1 383.5 L60.7 391.4 L68.9 388.6 L72.7 385.0 L76.7 384.7 L87.3 372.5 L97.0 388.2 L117.1 399.7 L122.0 405.2 L142.0 409.0 L166.1 404.6 L188.6 396.8 L185.6 382.3 L186.3 381.6Z"
              pathLength="1"
            />
            <path
              className="lm-center"
              d="M311.2 298.2 L315.3 306.9 L328.3 310.1 L337.2 307.7 L339.9 305.6 L343.4 299.8 L360.9 316.9 L360.2 319.4 L355.1 326.4 L398.1 355.7 L394.8 360.2 L399.7 364.1 L401.3 368.1 L407.7 374.2 L421.0 384.1 L420.9 385.5 L426.3 387.6 L431.5 375.6 L437.5 370.5 L462.7 399.5 L471.6 406.9 L485.8 412.4 L490.1 413.8 L494.9 407.4 L504.7 409.4 L527.2 403.8 L532.9 401.4 L538.1 396.5 L545.4 379.7 L543.1 378.6 L546.8 362.0 L544.9 349.9 L540.6 355.0 L533.3 353.0 L529.0 355.7 L523.9 354.1 L520.0 341.6 L522.1 334.4 L525.0 331.0 L516.3 321.6 L533.8 300.7 L520.1 292.3 L503.2 278.9 L459.2 232.6 L448.1 224.6 L429.1 215.5 L386.6 203.9 L385.9 215.0 L372.9 214.0 L355.3 207.5 L323.1 205.3 L320.0 203.9 L318.0 201.5 L309.5 207.6 L305.9 214.1 L288.1 211.4 L287.7 214.6 L280.3 211.8 L280.4 210.2 L267.8 208.0 L255.7 202.9 L252.8 206.5 L238.9 211.0 L228.6 216.3 L216.9 227.4 L234.3 235.6 L233.0 238.9 L241.8 241.5 L241.3 244.8 L247.1 246.5 L245.3 252.8 L249.7 255.2 L245.1 261.1 L242.4 267.1 L255.0 271.3 L265.3 282.6 L275.3 291.5 L275.2 294.6 L288.1 300.2 L295.3 299.3 L296.0 302.7 L309.8 301.2 L309.5 298.7 L311.2 298.2Z"
              pathLength="1"
            />
            <g className="lm-ch" transform="translate(349.3 269.8)">
              <rect x="-4.2" y="-4.2" width="8.4" height="8.4" rx="1" />
            </g>
            <text className="lm-lb lm-lb-ch" x="340.9" y="274.2" fontSize="10.8" textAnchor="end">
              Axe Majeur
            </text>
            <g
              className="lm-pin"
              data-c="0"
              style={{ '--d': '0.60s' } as CSSProperties}
              transform="translate(559.4 228.4)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="0"
              style={{ '--d': '0.70s' } as CSSProperties}
              x="559.4"
              y="247.3"
              fontSize="12.5"
              textAnchor="middle"
            >
              Pontoise
            </text>
            <g
              className="lm-pin"
              data-c="1"
              style={{ '--d': '0.67s' } as CSSProperties}
              transform="translate(445.5 138.0)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="1"
              style={{ '--d': '0.77s' } as CSSProperties}
              x="445.5"
              y="156.9"
              fontSize="12.5"
              textAnchor="middle"
            >
              Osny
            </text>
            <g
              className="lm-pin"
              data-c="2"
              style={{ '--d': '0.74s' } as CSSProperties}
              transform="translate(304.8 350.6)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="2"
              style={{ '--d': '0.84s' } as CSSProperties}
              x="304.8"
              y="369.4"
              fontSize="12.5"
              textAnchor="middle"
            >
              Vauréal
            </text>
            <g
              className="lm-pin"
              data-c="3"
              style={{ '--d': '0.81s' } as CSSProperties}
              transform="translate(338.0 452.5)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="3"
              style={{ '--d': '0.91s' } as CSSProperties}
              x="338.0"
              y="471.4"
              fontSize="12.5"
              textAnchor="middle"
            >
              Jouy-le-Moutier
            </text>
            <g
              className="lm-pin"
              data-c="4"
              style={{ '--d': '0.88s' } as CSSProperties}
              transform="translate(584.7 399.0)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="4"
              style={{ '--d': '0.98s' } as CSSProperties}
              x="584.7"
              y="417.9"
              fontSize="12.5"
              textAnchor="middle"
            >
              Éragny
            </text>
            <g
              className="lm-pin"
              data-c="5"
              style={{ '--d': '0.95s' } as CSSProperties}
              transform="translate(684.6 267.5)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="5"
              style={{ '--d': '1.05s' } as CSSProperties}
              x="684.6"
              y="286.4"
              fontSize="12.5"
              textAnchor="middle"
            >
              Saint-Ouen-l’Aumône
            </text>
            <g
              className="lm-pin"
              data-c="6"
              style={{ '--d': '1.02s' } as CSSProperties}
              transform="translate(212.5 286.1)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="6"
              style={{ '--d': '1.12s' } as CSSProperties}
              x="212.5"
              y="305.0"
              fontSize="12.5"
              textAnchor="middle"
            >
              Courdimanche
            </text>
            <g
              className="lm-pin"
              data-c="7"
              style={{ '--d': '1.09s' } as CSSProperties}
              transform="translate(129.2 361.2)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="7"
              style={{ '--d': '1.19s' } as CSSProperties}
              x="129.2"
              y="380.1"
              fontSize="12.5"
              textAnchor="middle"
            >
              Menucourt
            </text>
            <text className="lm-lb lm-lb-c" x="484.9" y="350.3" fontSize="20.0" textAnchor="middle">
              Cergy
            </text>
            <g className="lm-paris">
              <g transform="translate(651.3 516.5) rotate(44.9)">
                <path d="M-40 0 H0 m-6 -4 l6 4 l-6 4" fill="none" />
              </g>
              <text x="618.8" y="488.4" fontSize="11.2" textAnchor="end">
                Paris 8e · le studio
              </text>
            </g>
            <text className="lm-attr" x="850" y="550" fontSize="9.0" textAnchor="end">
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

function VosQuestionsACergy() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="faq">
        <div className="faq-l">
          <h2 className="h2">
            Vos questions,
            <br />
            <span className="serif">à Cergy.</span>
          </h2>
          <p className="lead">Les réponses aux questions qu’on nous pose le plus souvent sur ce sujet.</p>
          <Link to="/faq" className="lnk">
            Toute la FAQ
          </Link>
        </div>
        <div className="acc">
          <div className="q">
            <div className="q-h">
              <span>Travaillez-vous déjà avec des entreprises du Val-d’Oise ?</span>
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
              Oui : l’Association des Entrepreneurs du Vexin, Housses Taxi à Pierrelaye, DATHY à Saint-Gervais
              et Les Bocaux du Vexin. Leurs projets sont présentés dans nos réalisations.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Faut-il venir à Paris pour travailler avec vous ?</span>
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
              Non. On peut se voir à Cergy pour lancer le projet, puis tout avance en visio et dans Orion
              Admin, votre espace de suivi.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Notre start-up a besoin d’un site et d’un produit : pouvez-vous faire les deux ?</span>
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
              Oui. On développe aussi des applications web sur mesure (Next.js, React) : espaces clients,
              outils métiers et SaaS, en plus du site.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien coûte une création de site internet à Cergy ?</span>
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
              prix dépend du nombre de pages et des fonctionnalités, pas de la ville.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien de temps faut-il pour être en ligne ?</span>
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
              Un site vitrine prend en moyenne 4 à 8 semaines, selon sa complexité et le rythme des échanges.
              Une refonte avec reprise des contenus et du référencement, ou des fonctionnalités sur mesure,
              demandent davantage : le planning est fixé dans le devis.
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
            Un projet à Cergy ?<span className="serif">Parlons-en.</span>
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
    <section className="artboard g-page s-page sx-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <IlsNousOntFait />
      <CreationEtRefonteDe />
      <PourQuiACergy />
      <CeQuOnLivre />
      <LeTissuLocalSecteur />
      <CeQueVotreSite />
      <NosRealisationsDansLe />
      <CommentOnTravaille />
      <AutourDeCergyOn />
      <VosQuestionsACergy />
      <GCta />
    </section>
  )
}
