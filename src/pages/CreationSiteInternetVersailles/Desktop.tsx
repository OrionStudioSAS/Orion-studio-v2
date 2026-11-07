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
          Création de site internet / <b>Versailles</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Création de site internet à Versailles</span>
        <span className="serif">pour les entreprises qui soignent leur image.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Commerces du quartier Notre-Dame, restaurants, chambres d’hôtes, professions libérales, artisans du
          bâti ancien : on conçoit et on refond des sites sur mesure pour les entreprises versaillaises,
          pensés pour être trouvés sur Google et pour rassurer une clientèle exigeante.
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
        <img
          src="/images/lc-versailles.png"
          alt="L’avenue de Paris et le château de Versailles, en pixel art"
        />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="pxsvg omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde le site de votre entreprise versaillaise ?</span>
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
      <div className="capt">L’avenue de Paris, à l’heure bleue</div>
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
          <span className="serif">de sites internet à Versailles.</span>
        </h2>
        <p className="lead">
          Que vous lanciez votre activité ou que votre site ait fait son temps, on part de vos clients, à
          Versailles et au-delà.
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Pour qui,
          <br />
          <span className="serif">à Versailles.</span>
        </h2>
        <p className="lead">
          Les entreprises qu’on accompagne ici, et ce que leur site doit faire pour elles.
        </p>
      </div>
      <div className="lc-rows">
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’on livre,
          <br />
          <span className="serif">pour Versailles.</span>
        </h2>
        <p className="lead">
          Les briques qui comptent pour les entreprises versaillaises. Les écrans ci-dessous sont des
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
          Préfecture des Yvelines, Versailles vit au rythme de ses administrations, de ses professions
          libérales et d’un centre-ville commerçant très actif autour du marché Notre-Dame et du quartier
          Saint-Louis. Le château attire des visiteurs du monde entier : restaurants, hôtels, chambres d’hôtes
          et boutiques travaillent autant pour les Versaillais que pour une clientèle de passage, souvent
          étrangère.
        </p>
      </div>
      <figure className="lcv-nd lca">
        <div className="lcv-nd-in">
          <img
            src="/images/lc-versailles-nd.png"
            alt="Une rue commerçante du quartier Notre-Dame à Versailles, en pixel art"
          />
        </div>
        <figcaption>Le quartier Notre-Dame, au petit matin</figcaption>
      </figure>
      <div className="lc-sects">
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
      <div className="sx-oth lc-oth">
        <span className="lc-k">Nos pages métiers</span>
        <div className="sec-ring sx-others">
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
              <span className="lcv-type" data-type="architecte versailles" />
              <i className="lcv-caret" />
            </div>
          </div>
          <p>
            Ressortir sur « création site internet Versailles », « restaurant Versailles » ou « architecte
            Versailles », et dans les réponses des IA.
          </p>
        </div>
        <div className="lca oc">
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
        <div className="lca oc">
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
        <div className="lca oc">
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Quelques réalisations
          <br />
          <span className="serif">du studio.</span>
        </h2>
        <p className="lead">
          DATHY, dont on a conçu le site, accompagne communes et maîtres d’ouvrage dans les Yvelines et le
          Val-d’Oise.
        </p>
        <Link to="/realisations" className="lnk">
          Toutes les réalisations
        </Link>
      </div>
      <div className="rz-grid lc-rz">
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
            Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et
            événements.
          </p>
          <a className="lnk rz-more">Lire l’étude de cas</a>
        </article>
      </div>
    </section>
  )
}

function AutourDeVersaillesOn() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Autour de Versailles,
          <br />
          <span className="serif">on intervient aussi.</span>
        </h2>
      </div>
      <div className="lmw">
        <div className="lm-card">
          <img
            className="lm-base"
            src="/images/lc-map-versailles-d.svg"
            alt="Carte de Versailles et des communes voisines : routes, voies ferrées, parc du château"
          />
          <svg className="lmap-o" viewBox="0 0 860 560" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              className="lm-town"
              data-c="0"
              style={{ '--d': '0.15s' } as CSSProperties}
              d="M449.5 167.3 L449.7 158.0 L457.1 141.3 L466.1 134.6 L471.1 128.2 L479.5 121.9 L485.3 119.3 L476.9 82.9 L476.5 76.9 L471.4 76.9 L436.1 84.1 L419.6 86.0 L410.5 85.8 L391.7 81.0 L392.5 79.5 L386.4 77.2 L389.2 67.0 L370.6 58.5 L362.9 56.6 L358.6 59.0 L358.2 56.1 L356.0 56.3 L354.9 55.1 L340.7 51.9 L339.8 48.8 L332.6 45.4 L327.1 70.0 L311.7 68.4 L310.4 70.0 L305.7 80.4 L310.7 83.6 L286.3 130.1 L297.0 145.7 L308.4 135.3 L330.3 145.2 L336.2 141.0 L340.8 132.9 L344.8 129.2 L365.0 119.2 L371.3 159.0 L369.9 159.8 L373.3 160.6 L418.3 185.8 L420.1 183.9 L421.7 184.5 L421.7 188.3 L443.3 193.5 L446.0 170.9 L449.5 167.3Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="1"
              style={{ '--d': '0.22s' } as CSSProperties}
              d="M228.4 294.1 L222.9 316.8 L204.4 312.2 L201.1 307.4 L198.2 305.6 L166.4 293.8 L163.9 282.0 L165.4 275.2 L155.3 273.4 L160.9 260.1 L149.6 248.5 L182.8 200.4 L177.8 195.7 L181.3 191.3 L177.4 186.3 L179.0 183.9 L190.2 178.3 L201.4 166.6 L203.7 166.7 L218.0 161.5 L217.5 154.0 L222.3 151.6 L224.5 147.6 L228.0 150.0 L237.5 152.1 L239.8 156.5 L255.2 169.1 L265.8 169.4 L262.8 176.8 L255.2 183.9 L253.9 187.2 L236.7 259.5 L235.7 259.3 L236.1 261.7 L228.4 294.1Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="2"
              style={{ '--d': '0.29s' } as CSSProperties}
              d="M579.9 193.7 L577.1 200.4 L577.3 204.3 L579.5 205.6 L579.2 209.3 L582.1 212.7 L582.1 214.0 L584.8 216.8 L586.1 216.0 L592.5 223.7 L597.4 233.4 L601.2 238.1 L592.1 240.5 L597.7 261.8 L609.7 259.5 L614.4 261.3 L585.5 298.6 L567.0 305.2 L568.8 308.3 L564.6 316.8 L559.0 319.2 L557.2 325.2 L555.1 327.9 L551.4 326.0 L551.8 324.1 L549.4 320.3 L548.9 316.5 L551.7 310.0 L546.7 307.5 L539.8 297.1 L536.6 294.5 L536.0 284.4 L530.7 271.3 L521.5 271.7 L520.4 270.1 L536.6 244.9 L520.6 221.4 L519.6 216.8 L517.4 213.4 L526.1 205.2 L528.6 200.0 L533.5 201.7 L545.8 202.3 L548.9 199.5 L555.3 183.8 L573.6 187.9 L579.9 193.7Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="3"
              style={{ '--d': '0.36s' } as CSSProperties}
              d="M530.0 355.3 L535.9 346.7 L538.7 339.2 L538.2 336.5 L540.7 332.6 L545.5 330.5 L546.7 328.5 L551.4 326.0 L555.1 327.9 L557.2 325.2 L559.0 319.2 L564.6 316.8 L568.8 308.3 L567.0 305.2 L585.5 298.6 L600.8 279.1 L646.1 277.5 L652.7 271.8 L653.2 272.6 L666.9 273.0 L672.5 278.7 L673.8 283.0 L672.8 286.0 L675.9 289.1 L678.1 290.6 L682.5 291.3 L691.3 296.2 L696.8 309.6 L679.0 341.8 L679.9 342.6 L681.8 340.1 L687.9 328.2 L696.0 325.4 L722.5 339.5 L729.7 336.7 L736.2 336.6 L747.3 358.7 L741.0 362.5 L737.1 363.6 L739.3 370.8 L738.5 376.9 L741.6 383.5 L747.1 386.5 L746.6 389.0 L749.7 396.8 L750.7 405.9 L753.2 411.6 L756.0 415.1 L739.5 416.6 L738.1 411.2 L727.9 412.9 L716.4 410.2 L699.1 408.7 L691.3 421.8 L678.9 417.8 L675.6 419.3 L668.4 411.2 L660.2 406.9 L661.8 388.4 L640.2 389.6 L631.3 391.3 L612.6 392.0 L601.9 393.6 L575.8 362.7 L536.9 358.8 L530.0 355.3Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="4"
              style={{ '--d': '0.43s' } as CSSProperties}
              d="M418.9 503.6 L418.9 502.6 L431.6 493.6 L441.4 493.4 L449.5 490.9 L459.6 480.5 L467.9 475.2 L491.3 469.4 L498.1 466.3 L501.9 462.7 L503.1 451.5 L508.0 452.3 L520.6 451.5 L520.9 449.4 L513.0 447.1 L506.4 442.3 L489.5 438.0 L495.1 423.1 L483.2 416.4 L481.2 412.3 L478.8 414.4 L475.5 414.0 L480.3 407.9 L482.2 379.3 L480.7 361.3 L486.1 338.6 L484.6 330.1 L496.2 333.6 L524.4 352.1 L536.2 358.7 L575.8 362.7 L601.9 393.6 L626.0 391.0 L621.4 397.0 L611.3 404.3 L622.4 409.1 L625.7 411.9 L630.0 426.0 L629.7 435.5 L634.3 445.0 L630.0 448.4 L634.5 450.4 L629.9 461.7 L628.7 461.1 L627.4 465.7 L633.1 467.1 L635.2 466.6 L632.7 470.6 L630.9 477.8 L626.9 481.4 L624.9 485.2 L627.5 492.2 L622.9 497.8 L618.0 499.2 L611.8 499.2 L593.5 474.5 L572.3 482.2 L568.4 479.4 L565.1 484.9 L550.9 485.4 L548.0 487.9 L528.2 519.0 L511.6 510.4 L513.4 507.4 L502.2 502.9 L501.4 499.9 L498.7 496.6 L496.1 495.5 L491.2 504.1 L484.1 511.4 L479.5 514.7 L478.4 513.6 L473.0 518.5 L462.2 530.3 L460.6 535.8 L461.9 537.4 L462.0 540.2 L460.9 539.3 L453.5 539.6 L450.4 538.0 L449.6 539.1 L447.0 537.8 L445.4 541.8 L452.7 553.7 L423.9 541.7 L431.3 528.4 L420.6 516.5 L426.4 513.0 L418.9 503.6Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="5"
              style={{ '--d': '0.50s' } as CSSProperties}
              d="M436.6 322.5 L435.1 327.2 L433.1 327.2 L418.5 351.1 L404.8 367.0 L382.1 363.5 L374.7 370.6 L364.0 363.5 L360.5 363.5 L344.8 369.3 L341.3 363.1 L332.1 411.7 L340.1 413.8 L326.0 444.3 L331.3 445.5 L327.5 457.9 L330.1 458.3 L329.9 472.8 L327.3 487.2 L358.0 478.6 L370.3 479.2 L375.2 482.8 L383.5 486.7 L399.5 491.6 L400.5 497.7 L402.0 498.0 L403.6 492.0 L415.2 466.7 L425.2 451.8 L431.9 438.2 L437.8 433.7 L447.8 420.6 L449.7 419.6 L454.5 419.8 L457.9 416.8 L460.6 413.4 L460.3 409.0 L475.5 414.0 L480.3 407.9 L482.2 379.3 L480.7 361.3 L486.1 338.6 L482.9 317.6 L477.0 308.8 L459.2 300.5 L453.6 323.4 L442.8 313.8 L442.6 316.1 L436.6 322.5Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="6"
              style={{ '--d': '0.57s' } as CSSProperties}
              d="M250.6 499.2 L247.7 498.6 L239.6 493.5 L209.4 482.3 L199.7 480.9 L202.7 467.8 L200.4 466.9 L199.4 462.6 L194.6 460.7 L191.7 455.8 L198.2 449.2 L167.9 430.0 L170.0 422.4 L174.7 412.5 L140.4 397.9 L142.0 393.6 L141.2 388.4 L143.7 381.5 L132.3 365.9 L143.4 357.5 L144.4 351.1 L149.5 347.6 L142.9 338.8 L155.9 329.0 L149.6 320.6 L161.9 310.6 L161.1 306.7 L165.2 296.9 L163.3 297.2 L161.2 294.6 L161.7 289.4 L165.8 290.9 L166.4 293.8 L198.2 305.6 L201.1 307.4 L204.4 312.2 L222.2 316.4 L221.9 320.2 L236.7 322.5 L244.5 321.7 L248.0 319.4 L265.4 323.1 L270.0 343.0 L294.5 355.5 L327.7 363.8 L333.5 366.3 L341.3 363.1 L332.1 411.7 L340.1 413.8 L326.0 444.3 L331.3 445.5 L327.5 457.9 L330.1 458.3 L329.9 472.8 L327.3 487.2 L324.0 488.3 L314.9 486.9 L305.5 490.8 L296.0 491.2 L294.0 500.6 L288.4 497.5 L283.7 506.2 L270.8 501.1 L250.6 499.2Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="7"
              style={{ '--d': '0.64s' } as CSSProperties}
              d="M24.9 458.3 L25.4 457.8 L11.6 449.9 L16.1 439.1 L11.7 436.7 L13.1 434.7 L10.6 432.4 L3.2 428.1 L2.5 426.6 L12.8 429.3 L16.2 424.8 L21.4 421.8 L35.3 409.5 L29.4 407.0 L33.0 400.0 L24.2 389.2 L67.2 369.8 L61.2 351.6 L67.9 348.2 L67.7 347.2 L51.0 312.8 L45.1 311.7 L33.2 312.8 L28.1 315.0 L21.7 313.9 L9.6 296.2 L-16.5 293.5 L-14.5 277.8 L-18.8 278.4 L-30.6 269.0 L23.7 275.0 L62.1 280.8 L85.7 281.9 L97.1 280.2 L129.1 269.6 L128.0 268.4 L165.4 275.2 L163.9 282.0 L165.8 290.9 L161.7 289.4 L161.1 293.4 L162.2 296.5 L165.2 296.9 L161.1 306.7 L161.9 310.6 L149.6 320.6 L155.9 329.0 L142.9 338.8 L149.5 347.6 L144.4 351.1 L143.4 357.5 L132.3 365.9 L143.7 381.5 L141.2 388.4 L142.0 393.6 L140.4 397.9 L174.7 412.5 L170.0 422.4 L167.9 430.0 L153.8 420.4 L140.8 440.5 L131.0 434.2 L129.4 436.7 L128.1 436.1 L124.4 441.9 L123.0 440.7 L120.9 444.1 L122.7 445.2 L120.7 448.3 L118.7 447.7 L118.2 448.4 L113.6 460.0 L104.7 459.2 L104.4 462.7 L97.2 462.0 L96.8 465.6 L85.8 464.6 L83.0 469.0 L82.5 467.8 L78.5 467.4 L78.2 471.5 L74.4 480.1 L73.2 488.9 L65.3 486.7 L60.4 481.1 L58.3 475.2 L55.5 473.0 L49.8 470.4 L46.5 471.5 L33.4 465.5 L29.9 465.4 L24.9 458.3Z"
              pathLength="1"
            />
            <path
              className="lm-center"
              d="M515.2 190.5 L528.6 200.0 L526.1 205.2 L517.4 213.4 L519.6 216.8 L520.6 221.4 L536.6 244.9 L520.4 270.1 L521.5 271.7 L530.7 271.3 L536.0 284.4 L536.6 294.5 L539.8 297.1 L546.7 307.5 L551.9 310.9 L548.8 317.2 L551.7 325.6 L539.8 333.5 L535.9 346.7 L530.0 355.3 L496.2 333.6 L484.6 330.1 L482.9 317.6 L479.7 311.9 L477.0 308.8 L459.2 300.5 L453.6 323.4 L442.8 313.8 L442.6 316.1 L436.6 322.5 L435.1 327.2 L433.1 327.2 L418.5 351.1 L404.8 367.0 L382.1 363.5 L374.7 370.6 L364.0 363.5 L360.5 363.5 L344.8 369.3 L341.8 362.9 L333.5 366.3 L327.7 363.8 L294.5 355.5 L270.0 343.0 L265.4 323.1 L248.0 319.4 L244.5 321.7 L236.7 322.5 L221.9 320.2 L233.9 271.4 L235.7 259.3 L236.7 259.5 L253.9 187.2 L255.2 183.9 L262.8 176.8 L268.5 164.1 L268.7 159.5 L270.9 159.5 L285.3 132.1 L284.8 131.2 L286.3 130.1 L297.0 145.7 L308.4 135.3 L330.3 145.2 L336.2 141.0 L340.8 132.9 L344.8 129.2 L365.0 119.2 L371.3 159.0 L369.9 159.8 L373.3 160.6 L418.3 185.8 L420.1 183.9 L421.7 184.5 L421.7 188.3 L443.3 193.5 L446.0 170.9 L449.4 167.5 L449.7 158.0 L457.1 141.3 L466.1 134.6 L471.1 128.2 L479.5 121.9 L485.3 119.3 L495.5 156.9 L492.5 168.5 L493.1 173.1 L495.7 178.3 L501.0 182.8 L505.1 183.0 L515.2 190.5Z"
              pathLength="1"
            />
            <g className="lm-ch" transform="translate(391.1 239.9)">
              <rect x="-4.2" y="-4.2" width="8.4" height="8.4" rx="1" />
            </g>
            <text className="lm-lb lm-lb-ch" x="382.7" y="256.2" fontSize="10.8" textAnchor="end">
              Château
            </text>
            <g
              className="lm-pin"
              data-c="0"
              style={{ '--d': '0.60s' } as CSSProperties}
              transform="translate(389.6 116.0)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="0"
              style={{ '--d': '0.70s' } as CSSProperties}
              x="389.6"
              y="134.9"
              fontSize="12.5"
              textAnchor="middle"
            >
              Le Chesnay-Rocquencourt
            </text>
            <g
              className="lm-pin"
              data-c="1"
              style={{ '--d': '0.67s' } as CSSProperties}
              transform="translate(207.2 232.6)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="1"
              style={{ '--d': '0.77s' } as CSSProperties}
              x="207.2"
              y="251.4"
              fontSize="12.5"
              textAnchor="middle"
            >
              Saint-Cyr-l’École
            </text>
            <g
              className="lm-pin"
              data-c="2"
              style={{ '--d': '0.74s' } as CSSProperties}
              transform="translate(561.9 251.3)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="2"
              style={{ '--d': '0.84s' } as CSSProperties}
              x="561.9"
              y="270.1"
              fontSize="12.5"
              textAnchor="middle"
            >
              Viroflay
            </text>
            <g
              className="lm-pin"
              data-c="3"
              style={{ '--d': '0.81s' } as CSSProperties}
              transform="translate(649.1 347.1)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="3"
              style={{ '--d': '0.91s' } as CSSProperties}
              x="649.1"
              y="365.9"
              fontSize="12.5"
              textAnchor="middle"
            >
              Vélizy-Villacoublay
            </text>
            <g
              className="lm-pin"
              data-c="4"
              style={{ '--d': '0.88s' } as CSSProperties}
              transform="translate(535.9 439.0)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="4"
              style={{ '--d': '0.98s' } as CSSProperties}
              x="535.9"
              y="457.9"
              fontSize="12.5"
              textAnchor="middle"
            >
              Jouy-en-Josas
            </text>
            <g
              className="lm-pin"
              data-c="5"
              style={{ '--d': '0.95s' } as CSSProperties}
              transform="translate(406.1 403.8)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="5"
              style={{ '--d': '1.05s' } as CSSProperties}
              x="406.1"
              y="422.7"
              fontSize="12.5"
              textAnchor="middle"
            >
              Buc
            </text>
            <g
              className="lm-pin"
              data-c="6"
              style={{ '--d': '1.02s' } as CSSProperties}
              transform="translate(241.1 401.9)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="6"
              style={{ '--d': '1.12s' } as CSSProperties}
              x="241.1"
              y="420.7"
              fontSize="12.5"
              textAnchor="middle"
            >
              Guyancourt
            </text>
            <g
              className="lm-pin"
              data-c="7"
              style={{ '--d': '1.09s' } as CSSProperties}
              transform="translate(87.1 367.4)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="7"
              style={{ '--d': '1.19s' } as CSSProperties}
              x="87.1"
              y="386.3"
              fontSize="12.5"
              textAnchor="middle"
            >
              Montigny-le-Bretonneux
            </text>
            <text className="lm-lb lm-lb-c" x="463.5" y="287.8" fontSize="20.0" textAnchor="middle">
              Versailles
            </text>
            <g className="lm-paris" transform="translate(846 123)">
              <text x="0" y="0" fontSize="11.2" textAnchor="end">
                Paris 8e · le studio
              </text>
              <path d="M-94 9 H0 m-6 -4 l6 4 l-6 4" fill="none" />
            </g>
            <text className="lm-attr" x="850" y="550" fontSize="9.0" textAnchor="end">
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

function VosQuestionsAVersailles() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="faq">
        <div className="faq-l">
          <h2 className="h2">
            Vos questions,
            <br />
            <span className="serif">à Versailles.</span>
          </h2>
          <p className="lead">Les réponses aux questions qu’on nous pose le plus souvent sur ce sujet.</p>
          <Link to="/faq" className="lnk">
            Toute la FAQ
          </Link>
        </div>
        <div className="acc">
          <div className="q">
            <div className="q-h">
              <span>Faut-il être à Versailles pour travailler avec vous ?</span>
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
              Non. Le studio est à Paris, dans le 8e : on peut se voir à Versailles pour lancer le projet,
              puis tout avance en visio et par message.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Mon site doit-il être en anglais pour les visiteurs du château ?</span>
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
              Si une partie de vos clients sont des visiteurs étrangers, oui : on conçoit le site en français
              et en anglais dès le départ, avec des contenus relus, et on le structure pour que chaque langue
              soit bien référencée.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien coûte une création de site internet à Versailles ?</span>
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
          <div className="q">
            <div className="q-h">
              <span>Pouvez-vous refondre mon site sans perdre mon référencement ?</span>
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
              Oui : on reprend les contenus qui fonctionnent, on redirige les anciennes adresses vers les
              nouvelles et on vérifie l’indexation après la mise en ligne.
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
            Un projet à Versailles ?<span className="serif">Parlons-en.</span>
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
      <PourQuiAVersailles />
      <CeQuOnLivre />
      <LeTissuLocalSecteur />
      <CeQueVotreSite />
      <QuelquesRealisationsDuStudio />
      <CommentOnTravaille />
      <AutourDeVersaillesOn />
      <VosQuestionsAVersailles />
      <GCta />
    </section>
  )
}
