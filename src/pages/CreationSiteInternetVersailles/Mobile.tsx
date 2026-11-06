import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoCommentOnTravaille2 } from '../../components/shared/MoCommentOnTravaille2'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Création de site internet / <b>Versailles</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Création de site internet à Versailles
        <span className="serif">pour les entreprises qui soignent leur image.</span>
      </h1>
      <p className="mo-lead">
        Commerces du quartier Notre-Dame, restaurants, chambres d’hôtes, professions libérales, artisans du
        bâti ancien : on conçoit et on refond des sites sur mesure pour les entreprises versaillaises, pensés
        pour être trouvés sur Google et pour rassurer une clientèle exigeante.
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
          src="/images/lc-mo-versailles.png"
          alt="L’avenue de Paris et le château de Versailles, en pixel art"
        />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="pxsvg omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde le site
            <br />
            de votre entreprise versaillaise ?
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
          Création et refonte<span className="serif">à Versailles.</span>
        </h2>
        <p className="mo-lead">
          Que vous lanciez votre activité ou que votre site ait fait son temps, on part de vos clients, à
          Versailles et au-delà.
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
                <span className="win-title">votre-entreprise-versailles.fr</span>
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
                <img className="lcv-built" src="/images/lc-versailles.png" alt="" />
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
            Vous ouvrez une boutique près du marché Notre-Dame, un cabinet ou des chambres d’hôtes : on
            construit un site qui vous présente clairement, trouvable dès l’ouverture et prêt à accueillir
            aussi les visiteurs étrangers.
          </p>
          <ul>
            <li>Site vitrine sur mesure, en français et en anglais si besoin</li>
            <li>Fiche Google reliée au site</li>
            <li>Réservation ou prise de rendez-vous en ligne</li>
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
              <img src="/images/lc-versailles.png" alt="" />
              <div className="lcv-new-bar">
                <b>votre-entreprise-versailles.fr</b>
                <span>Réserver</span>
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
            Votre site a quelques années, s’affiche mal sur mobile et ne remonte plus sur Google : on le
            refond sans perdre ce qui fonctionne, contenus et référencement compris.
          </p>
          <ul>
            <li>Reprise des contenus et des anciennes adresses</li>
            <li>Nouvelle direction artistique, à la hauteur de votre clientèle</li>
            <li>Back-office simple pour tout mettre à jour vous-même</li>
          </ul>
          <a className="lnk" data-pv="__hero__">
            Analyser mon site actuel
          </a>
        </article>
      </div>
    </section>
  )
}

function PourQuiAVersailles() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Pour qui,<span className="serif">à Versailles.</span>
        </h2>
      </div>
      <div className="lc-rows lcm-rows">
        <div className="lc-row lca">
          <b>Commerçant du centre-ville</b>
          <p>Être trouvé quand on cherche « près de moi » et donner envie de pousser la porte.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Une page par univers de produits, les horaires du marché, la fiche Google
            reliée au site.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Restaurant, hôtel, chambre d’hôtes</b>
          <p>Remplir les tables et les chambres sans dépendre uniquement des plateformes.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Réservation directe, menus à jour, site en français et en anglais pour les
            visiteurs du château.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Profession libérale ou cabinet</b>
          <p>Inspirer confiance avant le premier rendez-vous.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Présentation de l’équipe et des domaines d’intervention, prise de
            rendez-vous en ligne.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Artisan du bâtiment et du patrimoine</b>
          <p>Montrer ses chantiers en bâti ancien et recevoir des demandes de devis qualifiées.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Galerie de réalisations, formulaire de devis qui pose les bonnes
            questions.
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
          Ce qu’on livre,<span className="serif">pour Versailles.</span>
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
                    <span className="lcv-type" data-type="restaurant versailles" />
                    <i className="lcv-caret" />
                  </div>
                  <div className="serp-r lcv-res">
                    <span className="serp-u">votre-restaurant-versailles.fr</span>
                    <b>Restaurant à Versailles — Quartier Notre-Dame</b>
                    <span className="serp-d">
                      Carte de saison, réservation en ligne et menu en anglais pour les visiteurs du château.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>SEO local</h3>
              <p>
                Être trouvé sur « restaurant Versailles », « architecte Versailles », quartier par quartier.
              </p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="gbp">
                  <div className="gbp-n">Votre boutique</div>
                  <div className="gbp-m">Épicerie fine · Quartier Saint-Louis · Ouvert jusqu’à 19 h</div>
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
                    <span>Español</span>
                    <b>ES</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Site bilingue</h3>
              <p>Le français et l’anglais pour les visiteurs du château, plus si besoin.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="uf lcv-fill">
                  <div className="ul-h">Chambre d’hôtes · réserver</div>
                  <div className="uf-g">
                    <label className="fld fld-f">
                      <span>Arrivée</span>
                      <b data-v="14 juin" />
                    </label>
                    <label className="fld">
                      <span>Départ</span>
                      <b data-v="16 juin" />
                    </label>
                    <label className="fld">
                      <span>Voyageurs</span>
                      <b data-v="2 adultes" />
                    </label>
                    <label className="fld">
                      <span>Visite du château</span>
                      <b data-v="Oui" />
                    </label>
                  </div>
                  <div className="shop-cta">Voir les disponibilités</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Réservation en direct</h3>
              <p>Chambres d’hôtes et hôtels : sans commission de plateforme.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="ui-sl lcv-slots">
                  <div className="ul-h">Cabinet · mardi</div>
                  <div className="rs-s sl-g" style={{ gridTemplateColumns: 'repeat(3,1fr)!important' }}>
                    <span className="">9:00</span>
                    <span className="off">10:30</span>
                    <span className="">11:00</span>
                    <span className="">14:30</span>
                    <span className="off">16:00</span>
                    <span className="">17:30</span>
                  </div>
                  <div className="shop-cta">Prendre rendez-vous</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Prise de rendez-vous</h3>
              <p>Cabinets et professions libérales : un créneau en deux clics.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="uf lcv-fill">
                  <div className="ul-h">Demande de devis</div>
                  <div className="uf-g">
                    <label className="fld fld-f">
                      <span>Travaux</span>
                      <b data-v="Menuiseries anciennes" />
                    </label>
                    <label className="fld">
                      <span>Ville</span>
                      <b data-v="Versailles" />
                    </label>
                    <label className="fld">
                      <span>Bâtiment</span>
                      <b data-v="Avant 1900" />
                    </label>
                    <label className="fld">
                      <span>Photos</span>
                      <b data-v="4 ajoutées" />
                    </label>
                  </div>
                  <div className="shop-cta">Envoyer ma demande</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Demande de devis</h3>
              <p>Artisans du bâti ancien : des demandes complètes, photos comprises.</p>
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
          Préfecture des Yvelines, Versailles vit au rythme de ses administrations, de ses professions
          libérales et d’un centre-ville commerçant très actif autour du marché Notre-Dame et du quartier
          Saint-Louis. Le château attire des visiteurs du monde entier : restaurants, hôtels, chambres d’hôtes
          et boutiques travaillent autant pour les Versaillais que pour une clientèle de passage, souvent
          étrangère.
        </p>
      </div>
      <figure className="lcv-nd lcv-nd-m lca">
        <div className="lcv-nd-in">
          <img
            src="/images/lc-mo-versailles-nd.png"
            alt="Une rue commerçante du quartier Notre-Dame à Versailles, en pixel art"
          />
        </div>
        <figcaption>Le quartier Notre-Dame, au petit matin</figcaption>
      </figure>
      <div className="lc-sects lcm-sects">
        <div className="lc-s lca">
          <h3>Commerces de centre-ville</h3>
          <p>
            Épiceries fines, antiquaires, boutiques de décoration, autour du marché Notre-Dame et du quartier
            Saint-Louis.
          </p>
        </div>
        <div className="lc-s lca">
          <h3>Tourisme et hébergement</h3>
          <p>Restaurants, hôtels et chambres d’hôtes qui reçoivent les visiteurs du château.</p>
        </div>
        <div className="lc-s lca">
          <h3>Professions libérales</h3>
          <p>Avocats, notaires, architectes, cabinets médicaux et paramédicaux.</p>
        </div>
        <div className="lc-s lca">
          <h3>Artisans du patrimoine</h3>
          <p>Rénovation, menuiserie, restauration de bâtiments anciens.</p>
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
              <span className="lcv-type" data-type="architecte versailles" />
              <i className="lcv-caret" />
            </div>
          </div>
          <p>
            Ressortir sur « création site internet Versailles », « restaurant Versailles » ou « architecte
            Versailles », et dans les réponses des IA.
          </p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Image</span>
          <div className="lcv-mini lcv-spec">
            <span className="lcv-aa">Aa</span>
            <span className="lcv-sw" style={{ '--c': '#14223B' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#D9CBB0' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#B68A3A' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#FF4D1A' } as CSSProperties} />
          </div>
          <p>
            Un site à la hauteur d’une clientèle exigeante : typographie soignée, vraies photos, rien de
            générique.
          </p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Demandes</span>
          <div className="lcv-mini">
            <div className="lcv-notif">
              <i className="sq sq-ok" />
              <div>
                <b>Nouvelle demande de devis</b>
                <span>Restauration de volets · Versailles</span>
              </div>
              <em>maintenant</em>
            </div>
          </div>
          <p>Des demandes de devis et de rendez-vous qui arrivent qualifiées, pas des formulaires vides.</p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Conversion</span>
          <div className="lcv-mini lcv-langbtn">
            <span className="lcv-tg">
              <i>FR</i>
              <i>EN</i>
            </span>
            <span className="lcv-cta">
              <b>Réserver une table</b>
              <b>Book a table</b>
            </span>
          </div>
          <p>
            Une version anglaise pour les visiteurs du château, et un parcours court jusqu’à la réservation.
          </p>
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
          DATHY, dont on a conçu le site, accompagne communes et maîtres d’ouvrage dans les Yvelines et le
          Val-d’Oise.
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
        <article className="mo-proj" data-cats="site app da" data-to="/realisations/chateau-larc">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/e70252f225f7d4.png" alt="" />
            <div className="win win-shot mo-win">
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
                <img className="shot" src="/images/661531aedb86a4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="mo-pmeta">
            <h3>
              <Link to="/realisations/chateau-larc">Château l’Arc Golf Club</Link>
            </h3>
            <span>Golf · Site + back-office · 2026</span>
          </div>
          <p>
            Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et
            événements.
          </p>
          <a className="lnk mo-more">Lire l’étude de cas</a>
        </article>
      </div>
      <Link to="/realisations" className="btn btn-ink mo-btn mo-btn-full lcm-all" data-pv="realisations">
        Toutes les réalisations
      </Link>
    </section>
  )
}

function AutourDeVersaillesOn() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Autour de Versailles,<span className="serif">on intervient aussi.</span>
        </h2>
      </div>
      <div className="lmw lmw-m">
        <div className="lm-card">
          <img
            className="lm-base"
            src="/images/lc-map-versailles-m.svg"
            alt="Carte de Versailles et des communes voisines : routes, voies ferrées, parc du château"
          />
          <svg className="lmap-o" viewBox="0 0 670 620" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              className="lm-town"
              data-c="0"
              style={{ '--d': '0.15s' } as CSSProperties}
              d="M344.4 207.5 L344.6 198.3 L352.0 181.6 L361.0 174.9 L366.0 168.5 L374.4 162.2 L380.2 159.6 L371.8 123.2 L371.4 117.3 L366.3 117.3 L331.1 124.4 L314.6 126.4 L305.5 126.2 L286.7 121.3 L287.5 119.9 L281.4 117.5 L284.2 107.3 L265.6 98.9 L257.9 97.0 L253.7 99.4 L253.2 96.5 L251.0 96.7 L250.0 95.5 L235.7 92.3 L234.8 89.2 L227.6 85.8 L222.2 110.3 L206.8 108.8 L205.5 110.4 L200.7 120.8 L205.8 123.9 L181.4 170.4 L192.1 186.0 L203.5 175.6 L225.4 185.5 L231.2 181.3 L235.9 173.2 L239.8 169.5 L260.0 159.5 L266.3 199.3 L264.9 200.0 L268.3 200.9 L313.3 226.0 L315.1 224.1 L316.7 224.8 L316.7 228.5 L338.3 233.7 L341.0 211.2 L344.4 207.5Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="1"
              style={{ '--d': '0.22s' } as CSSProperties}
              d="M123.5 334.3 L118.1 356.9 L99.6 352.3 L96.3 347.6 L93.4 345.7 L61.6 333.9 L59.2 322.1 L60.6 315.4 L50.6 313.6 L56.1 300.3 L44.9 288.6 L78.0 240.7 L73.0 235.9 L76.5 231.6 L72.6 226.5 L74.2 224.2 L85.4 218.5 L96.6 206.9 L98.9 207.0 L113.2 201.8 L112.7 194.3 L117.4 191.9 L119.7 187.9 L123.2 190.2 L132.7 192.4 L135.0 196.8 L150.3 209.4 L160.9 209.7 L157.9 217.1 L150.3 224.1 L149.0 227.4 L131.9 299.7 L130.9 299.5 L131.2 301.8 L123.5 334.3Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="2"
              style={{ '--d': '0.29s' } as CSSProperties}
              d="M474.7 233.9 L471.9 240.7 L472.1 244.5 L474.3 245.8 L474.0 249.5 L476.9 252.9 L476.9 254.3 L479.6 257.0 L480.9 256.2 L487.3 263.9 L492.2 273.6 L496.0 278.3 L486.9 280.7 L492.4 302.0 L504.4 299.7 L509.1 301.5 L480.3 338.8 L461.8 345.3 L463.6 348.4 L459.4 357.0 L453.9 359.3 L452.0 365.3 L449.9 368.0 L446.2 366.1 L446.6 364.2 L444.2 360.4 L443.8 356.6 L446.5 350.2 L441.5 347.7 L434.7 337.3 L431.5 334.6 L430.9 324.5 L425.5 311.5 L416.4 311.8 L415.3 310.2 L431.4 285.0 L415.4 261.6 L414.5 257.1 L412.2 253.6 L421.0 245.5 L423.5 240.3 L428.3 241.9 L440.7 242.5 L443.7 239.7 L450.1 224.1 L468.4 228.1 L474.7 233.9Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="3"
              style={{ '--d': '0.36s' } as CSSProperties}
              d="M424.8 395.3 L430.7 386.7 L433.6 379.3 L433.1 376.6 L435.5 372.7 L440.3 370.6 L441.6 368.6 L446.2 366.1 L449.9 368.0 L452.0 365.3 L453.9 359.3 L459.4 357.0 L463.6 348.4 L461.8 345.3 L480.3 338.8 L495.6 319.2 L540.8 317.6 L547.4 311.9 L547.9 312.8 L561.6 313.2 L567.2 318.8 L568.5 323.1 L567.5 326.1 L570.6 329.3 L572.8 330.7 L577.2 331.4 L585.9 336.3 L591.5 349.7 L573.7 381.9 L574.6 382.7 L576.5 380.2 L582.6 368.3 L590.6 365.5 L617.1 379.5 L624.4 376.7 L630.8 376.7 L641.9 398.7 L635.6 402.6 L631.7 403.6 L634.0 410.8 L633.2 417.0 L636.2 423.6 L641.7 426.6 L641.3 429.0 L644.3 436.9 L645.3 445.9 L647.8 451.6 L650.6 455.1 L634.2 456.6 L632.7 451.2 L622.5 453.0 L611.1 450.2 L593.8 448.7 L586.0 461.8 L573.6 457.8 L570.3 459.3 L563.1 451.2 L554.9 446.9 L556.5 428.5 L534.9 429.6 L526.1 431.3 L507.4 432.0 L496.7 433.7 L470.5 402.8 L431.7 398.9 L424.8 395.3Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="4"
              style={{ '--d': '0.43s' } as CSSProperties}
              d="M313.8 543.5 L313.8 542.6 L326.6 533.5 L336.3 533.3 L344.4 530.8 L354.5 520.5 L362.8 515.2 L386.1 509.4 L392.9 506.3 L396.8 502.7 L398.0 491.5 L402.9 492.2 L415.5 491.5 L415.8 489.4 L407.9 487.1 L401.2 482.3 L384.4 478.0 L390.0 463.1 L378.1 456.4 L376.1 452.3 L373.7 454.4 L370.4 454.0 L375.2 447.9 L377.0 419.4 L375.6 401.4 L381.0 378.7 L379.5 370.2 L391.1 373.7 L419.3 392.2 L431.1 398.8 L470.5 402.8 L496.7 433.7 L520.7 431.1 L516.1 437.0 L506.1 444.3 L517.2 449.1 L520.4 451.9 L524.7 466.0 L524.4 475.5 L529.0 485.0 L524.7 488.4 L529.2 490.4 L524.6 501.6 L523.4 501.0 L522.1 505.6 L527.8 507.0 L529.9 506.5 L527.5 510.6 L525.6 517.8 L521.7 521.3 L519.6 525.2 L522.3 532.1 L517.6 537.7 L512.7 539.1 L506.6 539.1 L488.3 514.5 L467.1 522.2 L463.2 519.3 L459.9 524.9 L445.7 525.3 L442.8 527.9 L423.0 558.9 L406.5 550.3 L408.2 547.3 L397.0 542.8 L396.3 539.8 L393.6 536.5 L390.9 535.4 L386.1 544.0 L379.0 551.3 L374.4 554.6 L373.3 553.5 L367.9 558.4 L357.1 570.2 L355.5 575.7 L356.9 577.3 L356.9 580.1 L355.8 579.2 L348.4 579.5 L345.3 577.9 L344.6 579.0 L341.9 577.6 L340.3 581.7 L347.6 593.6 L318.9 581.6 L326.3 568.3 L315.5 556.4 L321.3 552.9 L313.8 543.5Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="5"
              style={{ '--d': '0.50s' } as CSSProperties}
              d="M331.5 362.6 L330.0 367.3 L328.0 367.3 L313.4 391.2 L299.7 407.1 L277.1 403.6 L269.7 410.6 L259.0 403.5 L255.5 403.5 L239.8 409.3 L236.4 403.2 L227.2 451.8 L235.1 453.8 L221.1 484.3 L226.4 485.5 L222.6 497.8 L225.1 498.2 L225.0 512.7 L222.3 527.1 L253.0 518.6 L265.4 519.1 L270.2 522.8 L278.5 526.6 L294.5 531.5 L295.5 537.6 L296.9 537.9 L298.6 531.9 L310.2 506.7 L320.2 491.8 L326.9 478.2 L332.8 473.7 L342.7 460.6 L344.6 459.6 L349.4 459.8 L352.8 456.8 L355.5 453.4 L355.2 449.0 L370.4 454.0 L375.2 447.9 L377.0 419.4 L375.6 401.4 L381.0 378.7 L377.8 357.7 L371.9 348.9 L354.1 340.7 L348.5 363.5 L337.7 353.9 L337.5 356.2 L331.5 362.6Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="6"
              style={{ '--d': '0.57s' } as CSSProperties}
              d="M145.7 539.1 L142.8 538.5 L134.8 533.5 L104.6 522.2 L94.9 520.8 L97.9 507.7 L95.6 506.8 L94.6 502.6 L89.8 500.6 L86.9 495.8 L93.4 489.1 L63.1 470.0 L65.2 462.4 L69.9 452.6 L35.6 438.0 L37.3 433.6 L36.5 428.5 L38.9 421.5 L27.5 406.0 L38.7 397.6 L39.6 391.2 L44.7 387.6 L38.2 378.9 L51.1 369.1 L44.8 360.7 L57.2 350.7 L56.4 346.8 L60.5 337.1 L58.5 337.3 L56.5 334.8 L57.0 329.5 L61.1 331.1 L61.6 333.9 L93.4 345.7 L96.3 347.6 L99.6 352.3 L117.3 356.5 L117.0 360.3 L131.9 362.6 L139.7 361.8 L143.2 359.5 L160.5 363.2 L165.1 383.0 L189.6 395.5 L222.7 403.8 L228.5 406.3 L236.4 403.2 L227.2 451.8 L235.1 453.8 L221.1 484.3 L226.4 485.5 L222.6 497.8 L225.1 498.2 L225.0 512.7 L222.3 527.1 L219.1 528.3 L209.9 526.8 L200.6 530.7 L191.1 531.2 L189.1 540.5 L183.5 537.4 L178.9 546.1 L166.0 541.0 L145.7 539.1Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="7"
              style={{ '--d': '0.64s' } as CSSProperties}
              d="M-79.7 498.3 L-79.3 497.7 L-93.0 489.8 L-88.5 479.1 L-92.9 476.7 L-91.6 474.7 L-94.0 472.4 L-101.4 468.1 L-102.1 466.6 L-91.8 469.3 L-88.4 464.7 L-83.2 461.8 L-69.3 449.5 L-75.3 447.0 L-71.6 440.0 L-80.4 429.2 L-37.5 409.9 L-43.4 391.6 L-36.8 388.3 L-36.9 387.3 L-53.7 353.0 L-59.5 351.8 L-71.5 352.9 L-76.5 355.1 L-83.0 354.0 L-95.0 336.3 L-121.1 333.6 L-119.1 317.9 L-123.4 318.6 L-135.2 309.2 L-80.9 315.2 L-42.6 321.0 L-19.0 322.0 L-7.6 320.4 L24.4 309.8 L23.3 308.6 L60.6 315.4 L59.2 322.1 L61.1 331.1 L57.0 329.5 L56.3 333.6 L57.4 336.7 L60.5 337.1 L56.4 346.8 L57.2 350.7 L44.8 360.7 L51.1 369.1 L38.2 378.9 L44.7 387.6 L39.6 391.2 L38.7 397.6 L27.5 406.0 L38.9 421.5 L36.5 428.5 L37.3 433.6 L35.6 438.0 L69.9 452.6 L65.2 462.4 L63.1 470.0 L49.1 460.4 L36.1 480.4 L26.3 474.2 L24.7 476.7 L23.3 476.1 L19.7 481.9 L18.3 480.7 L16.2 484.1 L17.9 485.2 L16.0 488.3 L14.0 487.6 L13.5 488.4 L8.9 500.0 L-0.1 499.2 L-0.3 502.6 L-7.5 502.0 L-7.9 505.6 L-18.9 504.6 L-21.7 508.9 L-22.2 507.7 L-26.2 507.4 L-26.5 511.4 L-30.3 520.1 L-31.5 528.8 L-39.4 526.7 L-44.3 521.1 L-46.4 515.2 L-49.1 513.0 L-54.9 510.3 L-58.1 511.5 L-71.3 505.4 L-74.7 505.4 L-79.7 498.3Z"
              pathLength="1"
            />
            <path
              className="lm-center"
              d="M410.1 230.8 L423.5 240.3 L421.0 245.5 L412.2 253.6 L414.5 257.1 L415.4 261.6 L431.4 285.0 L415.3 310.2 L416.4 311.8 L425.5 311.5 L430.9 324.5 L431.5 334.6 L434.7 337.3 L441.5 347.7 L446.7 351.1 L443.7 357.3 L446.5 365.7 L434.7 373.6 L430.7 386.7 L424.8 395.3 L391.1 373.7 L379.5 370.2 L377.8 357.7 L374.6 352.0 L371.9 348.9 L354.1 340.7 L348.5 363.5 L337.7 353.9 L337.5 356.2 L331.5 362.6 L330.0 367.3 L328.0 367.3 L313.4 391.2 L299.7 407.1 L277.1 403.6 L269.7 410.6 L259.0 403.5 L255.5 403.5 L239.8 409.3 L236.9 403.0 L228.5 406.3 L222.7 403.8 L189.6 395.5 L165.1 383.0 L160.5 363.2 L143.2 359.5 L139.7 361.8 L131.9 362.6 L117.0 360.3 L129.1 311.6 L130.9 299.5 L131.9 299.7 L149.0 227.4 L150.3 224.1 L157.9 217.1 L163.6 204.4 L163.8 199.8 L166.0 199.8 L180.4 172.4 L179.9 171.5 L181.4 170.4 L192.1 186.0 L203.5 175.6 L225.4 185.5 L231.2 181.3 L235.9 173.2 L239.8 169.5 L260.0 159.5 L266.3 199.3 L264.9 200.0 L268.3 200.9 L313.3 226.0 L315.1 224.1 L316.7 224.8 L316.7 228.5 L338.3 233.7 L341.0 211.2 L344.4 207.7 L344.6 198.3 L352.0 181.6 L361.0 174.9 L366.0 168.5 L374.4 162.2 L380.2 159.6 L390.4 197.2 L387.4 208.7 L388.0 213.3 L390.6 218.6 L395.9 223.1 L400.0 223.3 L410.1 230.8Z"
              pathLength="1"
            />
            <g className="lm-ch" transform="translate(286.1 280.1)">
              <rect x="-6.0" y="-6.0" width="12.0" height="12.0" rx="1" />
            </g>
            <text className="lm-lb lm-lb-ch" x="274.1" y="304.8" fontSize="16.3" textAnchor="end">
              Château
            </text>
            <g
              className="lm-pin"
              data-c="0"
              style={{ '--d': '0.60s' } as CSSProperties}
              transform="translate(284.6 156.3)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="0"
              style={{ '--d': '0.70s' } as CSSProperties}
              x="284.6"
              y="184.4"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="284.6">Le Chesnay-</tspan>
              <tspan x="284.6" dy="20.9">
                Rocquencourt
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="1"
              style={{ '--d': '0.67s' } as CSSProperties}
              transform="translate(102.4 272.8)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="1"
              style={{ '--d': '0.77s' } as CSSProperties}
              x="102.4"
              y="300.8"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="102.4">Saint-</tspan>
              <tspan x="102.4" dy="20.9">
                Cyr-l’École
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="2"
              style={{ '--d': '0.74s' } as CSSProperties}
              transform="translate(456.7 291.4)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="2"
              style={{ '--d': '0.84s' } as CSSProperties}
              x="456.7"
              y="319.5"
              fontSize="19"
              textAnchor="middle"
            >
              Viroflay
            </text>
            <g
              className="lm-pin"
              data-c="3"
              style={{ '--d': '0.81s' } as CSSProperties}
              transform="translate(543.9 387.1)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="3"
              style={{ '--d': '0.91s' } as CSSProperties}
              x="543.9"
              y="415.2"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="543.9">Vélizy-</tspan>
              <tspan x="543.9" dy="20.9">
                Villacoublay
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="4"
              style={{ '--d': '0.88s' } as CSSProperties}
              transform="translate(430.7 479.0)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="4"
              style={{ '--d': '0.98s' } as CSSProperties}
              x="430.7"
              y="507.0"
              fontSize="19"
              textAnchor="middle"
            >
              Jouy-en-Josas
            </text>
            <g
              className="lm-pin"
              data-c="5"
              style={{ '--d': '0.95s' } as CSSProperties}
              transform="translate(301.1 443.9)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="5"
              style={{ '--d': '1.05s' } as CSSProperties}
              x="301.1"
              y="471.9"
              fontSize="19"
              textAnchor="middle"
            >
              Buc
            </text>
            <g
              className="lm-pin"
              data-c="6"
              style={{ '--d': '1.02s' } as CSSProperties}
              transform="translate(136.3 441.9)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="6"
              style={{ '--d': '1.12s' } as CSSProperties}
              x="136.3"
              y="469.9"
              fontSize="19"
              textAnchor="middle"
            >
              Guyancourt
            </text>
            <text className="lm-lb lm-lb-c" x="358.5" y="327.9" fontSize="30.4" textAnchor="middle">
              Versailles
            </text>
            <g className="lm-paris" transform="translate(656 74)">
              <text x="0" y="0" fontSize="17.1" textAnchor="end">
                Paris 8e · le studio
              </text>
              <path d="M-142 14 H0 m-6 -4 l6 4 l-6 4" fill="none" />
            </g>
            <text className="lm-attr" x="660" y="610" fontSize="13.7" textAnchor="end">
              © contributeurs OpenStreetMap
            </text>
          </svg>
        </div>
        <aside className="lm-side">
          <span className="lc-k">Communes voisines · Yvelines</span>
          <ul className="lm-list">
            <li data-c="0" tabIndex={0}>
              <b>Le Chesnay-Rocquencourt</b>
              <span>au nord</span>
            </li>
            <li data-c="1" tabIndex={0}>
              <b>Saint-Cyr-l’École</b>
              <span>à l’ouest</span>
            </li>
            <li data-c="2" tabIndex={0}>
              <b>Viroflay</b>
              <span>à l’est</span>
            </li>
            <li data-c="3" tabIndex={0}>
              <b>Vélizy-Villacoublay</b>
              <span>au sud-est</span>
            </li>
            <li data-c="4" tabIndex={0}>
              <b>Jouy-en-Josas</b>
              <span>au sud-est</span>
            </li>
            <li data-c="5" tabIndex={0}>
              <b>Buc</b>
              <span>au sud</span>
            </li>
            <li data-c="6" tabIndex={0}>
              <b>Guyancourt</b>
              <span>au sud-ouest</span>
            </li>
            <li data-c="7" tabIndex={0}>
              <b>Montigny-le-Bretonneux</b>
              <span>au sud-ouest</span>
            </li>
          </ul>
          <p className="lc-note">
            Et partout dans les Yvelines. Le studio est à Paris : on se déplace pour lancer le projet, puis on
            avance en visio.
          </p>
          <span className="lc-k lm-k2">Nos autres pages locales</span>
          <ul className="lc-links">
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
            <span>Faut-il être à Versailles pour travailler avec vous ?</span>
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
            Non. Le studio est à Paris, dans le 8e : on peut se voir à Versailles pour lancer le projet, puis
            tout avance en visio et dans Orion Admin, votre espace de suivi.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Mon site doit-il être en anglais pour les visiteurs du château ?</span>
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
            Si une partie de vos clients sont des visiteurs étrangers, oui : on conçoit le site en français et
            en anglais dès le départ, avec des contenus relus, et on le structure pour que chaque langue soit
            bien référencée.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien coûte une création de site internet à Versailles ?</span>
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
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pouvez-vous refondre mon site sans perdre mon référencement ?</span>
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
            Oui : on reprend les contenus qui fonctionnent, on redirige les anciennes adresses vers les
            nouvelles et on vérifie l’indexation après la mise en ligne.
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
          Un projet à Versailles ?<span className="serif">Parlons-en.</span>
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
      <PourQuiAVersailles />
      <CeQuOnLivre />
      <LeTissuLocalSecteur />
      <CeQueVotreSite />
      <QuelquesRealisationsDuStudio />
      <MoCommentOnTravaille2 />
      <AutourDeVersaillesOn />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
