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
          Création de site internet / <b>Boulogne-Billancourt</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Création de site internet à Boulogne-Billancourt</span>
        <span className="serif">pour les entreprises qui doivent convaincre vite.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Sièges sociaux, agences, sociétés de l’audiovisuel, cabinets de conseil, praticiens et commerces :
          Boulogne-Billancourt concentre une économie tertiaire exigeante. On conçoit et on refond des sites
          sur mesure qui font sérieux dès la première seconde, et qui génèrent des demandes.
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
        <img src="/images/lc-boulogne.png" alt="La Seine, le pont de Sèvres et l’île Seguin, en pixel art" />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="pxsvg omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde le site de votre entreprise boulonnaise ?</span>
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
      <div className="capt">La Seine et le pont de Sèvres, à l’heure bleue</div>
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
          <span className="serif">de sites internet à Boulogne-Billancourt.</span>
        </h2>
        <p className="lead">
          Pour des interlocuteurs qui comparent vite : un site net, rapide et à votre image.
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Pour qui,
          <br />
          <span className="serif">à Boulogne-Billancourt.</span>
        </h2>
        <p className="lead">
          Les entreprises qu’on accompagne ici, et ce que leur site doit faire pour elles.
        </p>
      </div>
      <div className="lc-rows">
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’on livre,
          <br />
          <span className="serif">pour Boulogne.</span>
        </h2>
        <p className="lead">
          Les briques qui comptent pour les entreprises boulonnaises. Les écrans ci-dessous sont des exemples.
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
          Ancienne terre des usines Renault, Boulogne-Billancourt est devenue l’un des grands pôles tertiaires
          de l’ouest parisien : sièges d’entreprises, groupes de médias et de l’audiovisuel, agences, start-up
          et cabinets se partagent le Trapèze, le Pont de Sèvres et le centre-ville. Les rues commerçantes, de
          la route de la Reine au boulevard Jean-Jaurès, comptent aussi beaucoup de commerces, de restaurants
          et de praticiens.
        </p>
      </div>
      <figure className="lcv-nd lca">
        <div className="lcv-nd-in">
          <img
            src="/images/lc-boulogne-nd.png"
            alt="Un boulevard de Boulogne-Billancourt entre immeubles des années 1930 et bureaux, en pixel art"
          />
        </div>
        <figcaption>Un boulevard du centre-ville, en fin de journée</figcaption>
      </figure>
      <div className="lc-sects">
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
              <span className="lcv-type" data-type="agence web boulogne" />
              <i className="lcv-caret" />
            </div>
          </div>
          <p>
            « agence web Boulogne-Billancourt », « refonte site internet 92 » : un site rapide et bien
            structuré, qui ressort aussi dans les réponses des IA.
          </p>
        </div>
        <div className="lca oc">
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
        <div className="lca oc">
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
        <div className="lca oc">
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Nos réalisations,
          <br />
          <span className="serif">jusqu’à Boulogne.</span>
        </h2>
        <p className="lead">
          Le siège de DATHY, cabinet d’assistance à maîtrise d’ouvrage dont on a conçu le site, est à
          Boulogne-Billancourt.
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
        <article className="rz-card rz-osmose" data-cats="shop da">
          <div className="p-media">
            <img src="/images/5e44d143820ccb.png" alt="" />
            <div className="win win-shot mdb-cwin">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Osmose Nutrition — maquettes</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img
                  className="shot"
                  src="/images/b351708a31fde9.jpg"
                  alt="Maquette de la boutique Osmose Nutrition"
                />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">Osmose Nutrition</h3>
            <span className="p-tag">E-commerce · Refonte UX/CRO · 2025</span>
          </div>
          <p className="p-desc">
            La refonte de la boutique d’un fabricant de compléments alimentaires : diagnostic, routine sur
            mesure, abonnements.
          </p>
          <Link to="/realisations/osmose-nutrition" className="lnk rz-more" data-proj="osmose-nutrition">
            Voir le projet
          </Link>
        </article>
      </div>
    </section>
  )
}

function AutourDeBoulogneBillancourt() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Autour de Boulogne-Billancourt,
          <br />
          <span className="serif">on intervient aussi.</span>
        </h2>
      </div>
      <div className="lmw">
        <div className="lm-card">
          <img
            className="lm-base"
            src="/images/lc-map-boulogne-d.svg"
            alt="Carte de Boulogne-Billancourt et des communes voisines : routes, voies ferrées, forêts et cours d’eau"
          />
          <svg className="lmap-o" viewBox="0 0 860 560" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              className="lm-town"
              data-c="0"
              style={{ '--d': '0.15s' } as CSSProperties}
              d="M446.2 337.4 L446.8 331.9 L437.3 332.2 L423.6 326.3 L429.1 327.0 L435.5 325.7 L443.8 321.0 L453.1 317.9 L472.1 308.8 L480.4 301.5 L492.6 287.8 L503.8 278.3 L512.3 265.2 L529.2 262.0 L536.0 269.8 L527.1 277.0 L528.8 295.4 L544.9 295.0 L554.9 286.2 L565.6 272.6 L599.5 293.1 L594.2 293.5 L590.5 292.2 L594.5 297.1 L583.1 297.1 L570.4 305.1 L571.4 306.5 L568.8 308.7 L571.3 310.9 L572.0 317.0 L573.8 319.2 L572.3 320.4 L575.0 328.1 L573.2 328.9 L574.8 333.3 L559.2 347.2 L554.9 348.6 L546.7 358.1 L544.4 362.4 L527.6 364.3 L519.3 366.4 L516.1 362.0 L507.6 368.0 L504.3 362.4 L502.9 363.1 L501.5 361.4 L501.0 360.5 L502.0 359.8 L499.3 356.7 L497.8 358.3 L495.4 353.6 L493.4 354.6 L491.6 349.3 L488.7 351.0 L488.5 350.3 L473.8 353.0 L471.2 348.4 L467.3 344.8 L446.1 339.4 L446.2 337.4Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="1"
              style={{ '--d': '0.22s' } as CSSProperties}
              d="M385.5 259.1 L378.9 257.9 L380.4 278.3 L384.6 286.0 L377.6 288.7 L374.8 292.4 L377.5 299.5 L368.4 302.8 L365.9 297.6 L342.8 296.5 L329.3 290.4 L308.5 285.3 L304.7 285.7 L300.7 304.6 L309.8 305.4 L309.3 314.5 L304.7 314.4 L304.5 315.9 L301.3 316.0 L302.9 323.5 L284.5 326.3 L261.7 343.9 L257.0 346.4 L251.2 346.8 L246.9 345.2 L236.5 360.1 L244.8 360.9 L251.3 357.0 L273.2 355.6 L273.8 352.4 L272.5 350.9 L278.7 349.3 L279.5 350.0 L289.3 341.5 L299.8 329.9 L307.6 339.1 L300.7 344.2 L303.2 348.1 L305.1 349.1 L296.7 359.8 L324.6 388.6 L342.3 377.2 L358.9 370.4 L374.3 358.5 L372.0 352.5 L362.7 345.8 L368.6 340.8 L373.8 338.2 L373.9 336.4 L375.4 336.5 L376.4 333.2 L377.9 333.4 L389.8 321.1 L387.9 317.8 L392.0 314.7 L394.7 317.6 L396.1 316.3 L404.3 324.3 L404.8 326.9 L407.0 325.8 L407.4 326.5 L413.9 320.5 L405.3 313.1 L400.2 306.5 L396.5 299.3 L396.4 294.1 L394.5 288.5 L392.1 273.0 L385.5 259.1Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="2"
              style={{ '--d': '0.29s' } as CSSProperties}
              d="M347.8 127.2 L352.0 138.4 L359.4 136.5 L375.4 135.6 L390.8 138.2 L387.8 148.7 L385.6 164.3 L389.9 187.8 L389.7 203.8 L381.3 243.7 L382.2 251.1 L385.5 259.1 L378.9 257.9 L380.4 278.3 L384.6 286.0 L377.6 288.7 L374.8 292.4 L377.5 299.5 L368.4 302.8 L365.9 297.6 L342.8 296.5 L329.3 290.4 L308.5 285.3 L296.4 285.7 L287.9 287.6 L286.3 286.6 L280.2 288.3 L274.2 287.9 L265.8 290.8 L261.3 290.5 L257.4 288.6 L256.7 290.4 L243.6 281.6 L258.4 265.3 L261.8 252.5 L265.4 247.2 L264.7 246.2 L267.8 242.9 L265.8 240.3 L287.2 231.9 L302.7 227.5 L303.3 214.7 L300.0 207.2 L299.5 198.3 L323.8 179.3 L324.7 176.1 L311.4 169.7 L299.7 161.5 L303.0 158.6 L309.1 150.1 L312.6 147.8 L318.4 132.5 L326.0 133.9 L338.0 131.1 L347.8 127.2Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="3"
              style={{ '--d': '0.36s' } as CSSProperties}
              d="M315.3 442.0 L320.8 447.5 L322.0 451.7 L321.0 454.6 L324.1 457.7 L330.5 459.8 L339.1 464.6 L344.5 477.7 L327.1 509.1 L328.0 509.9 L329.9 507.5 L336.2 495.4 L344.2 493.1 L369.6 506.9 L376.7 504.1 L382.9 504.0 L393.8 525.6 L403.8 518.1 L420.8 511.1 L424.0 492.3 L426.3 489.2 L420.5 456.6 L424.8 455.8 L433.6 445.1 L436.3 435.8 L437.9 435.8 L439.6 430.4 L442.8 429.5 L443.5 426.0 L441.1 424.6 L442.8 419.5 L445.3 416.9 L446.5 417.9 L448.6 414.7 L454.2 410.4 L456.3 412.6 L458.2 410.1 L465.1 414.1 L467.8 405.8 L468.9 406.3 L465.7 401.8 L464.9 396.8 L471.5 395.1 L480.1 385.7 L486.8 383.6 L485.4 372.3 L482.3 363.8 L484.6 363.0 L476.5 352.5 L473.8 353.0 L471.2 348.4 L467.3 344.8 L446.1 339.4 L446.8 331.9 L439.1 332.4 L431.5 330.4 L419.2 324.6 L413.9 320.5 L407.4 326.5 L407.0 325.8 L404.8 326.9 L404.3 324.3 L396.1 316.3 L394.7 317.6 L392.0 314.7 L387.9 317.8 L389.8 321.1 L377.9 333.4 L376.4 333.2 L375.4 336.5 L373.9 336.4 L373.8 338.2 L368.6 340.8 L362.7 345.8 L372.0 352.5 L374.3 358.5 L358.9 370.4 L342.3 377.2 L324.6 388.6 L325.7 389.9 L321.2 420.7 L319.7 422.5 L321.8 423.3 L326.4 434.3 L315.3 442.0Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="4"
              style={{ '--d': '0.43s' } as CSSProperties}
              d="M230.3 364.5 L227.6 371.0 L227.8 374.8 L229.9 376.1 L229.6 379.7 L232.5 383.0 L232.4 384.3 L235.1 387.0 L236.4 386.2 L242.6 393.8 L247.4 403.2 L251.1 407.8 L242.2 410.2 L247.6 431.0 L259.4 428.8 L263.9 430.5 L250.7 447.9 L294.9 446.3 L301.4 440.7 L301.9 441.6 L315.3 442.0 L326.4 434.3 L321.8 423.3 L319.7 422.5 L321.2 420.7 L325.7 389.9 L319.5 382.3 L296.7 359.8 L305.1 349.1 L303.2 348.1 L300.7 344.2 L307.6 339.1 L299.8 329.9 L289.3 341.5 L279.5 350.0 L278.7 349.3 L272.5 350.9 L273.8 352.4 L273.2 355.6 L251.3 357.0 L244.8 360.9 L236.5 359.9 L230.3 364.5Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="5"
              style={{ '--d': '0.50s' } as CSSProperties}
              d="M144.9 339.8 L145.5 344.3 L148.5 349.9 L153.2 353.8 L157.9 354.5 L176.1 368.2 L182.9 371.8 L197.0 372.8 L200.0 370.1 L206.2 354.8 L224.1 358.8 L230.3 364.5 L236.5 359.9 L246.9 345.2 L251.2 346.8 L257.0 346.4 L261.7 343.9 L284.5 326.3 L302.9 323.5 L301.3 316.0 L304.5 315.9 L304.7 314.4 L309.3 314.5 L309.8 305.4 L300.7 304.6 L304.7 285.7 L296.4 285.7 L287.9 287.6 L286.3 286.6 L280.2 288.3 L274.2 287.9 L265.8 290.8 L261.3 290.5 L257.4 288.6 L256.7 290.4 L243.6 281.6 L240.1 282.9 L236.1 289.4 L228.4 294.1 L229.3 298.5 L220.7 313.3 L191.0 319.0 L181.2 316.4 L173.2 330.1 L166.7 329.8 L162.3 327.2 L154.5 327.2 L151.5 329.4 L144.9 339.8Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="6"
              style={{ '--d': '0.57s' } as CSSProperties}
              d="M568.0 42.5 L560.5 45.9 L499.5 34.4 L498.0 35.3 L488.1 64.4 L486.2 65.3 L456.1 53.9 L448.7 65.0 L439.2 76.2 L411.7 88.1 L399.1 109.8 L388.5 145.5 L386.1 159.1 L385.8 168.1 L435.4 184.7 L438.0 186.4 L445.7 196.5 L472.6 207.0 L478.7 207.2 L474.4 220.7 L475.8 240.4 L487.3 260.8 L512.9 265.3 L554.7 200.3 L564.9 187.5 L595.3 154.7 L598.3 147.5 L607.2 136.5 L615.2 127.8 L622.2 123.0 L630.7 119.4 L639.4 118.1 L639.2 112.9 L633.9 108.9 L630.7 92.9 L626.0 80.9 L618.0 66.8 L568.0 42.5Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="7"
              style={{ '--d': '0.64s' } as CSSProperties}
              d="M512.9 265.3 L529.2 262.0 L536.0 269.8 L527.1 277.0 L528.8 295.4 L544.9 295.0 L554.9 286.2 L565.6 272.6 L608.7 299.0 L638.5 309.0 L699.6 232.4 L704.3 236.0 L705.8 234.1 L704.6 229.9 L715.1 217.0 L697.5 207.9 L688.5 201.0 L679.2 205.4 L668.7 195.2 L658.3 199.4 L600.9 144.2 L598.0 148.0 L595.3 154.7 L564.9 187.5 L554.7 200.3 L512.9 265.3Z"
              pathLength="1"
            />
            <path
              className="lm-center"
              d="M503.8 278.3 L492.6 287.8 L480.4 301.5 L472.1 308.8 L453.1 317.9 L443.8 321.0 L435.5 325.7 L429.1 327.0 L423.6 326.3 L419.2 324.6 L409.3 317.1 L402.1 309.3 L396.5 299.3 L396.4 294.1 L394.5 288.5 L392.1 273.0 L384.1 256.2 L381.6 248.7 L381.9 237.8 L389.7 203.8 L390.3 196.5 L389.9 187.3 L385.8 168.1 L435.4 184.7 L438.0 186.4 L445.7 196.5 L472.6 207.0 L478.7 207.2 L474.4 220.7 L475.8 240.4 L487.3 260.8 L512.3 265.2 L503.8 278.3Z"
              pathLength="1"
            />
            <g className="lm-ch" transform="translate(416.7 316.1)">
              <rect x="-4.2" y="-4.2" width="8.4" height="8.4" rx="1" />
            </g>
            <text className="lm-lb lm-lb-ch" x="408.3" y="320.5" fontSize="10.8" textAnchor="end">
              Île Seguin
            </text>
            <g
              className="lm-pin"
              data-c="0"
              style={{ '--d': '0.60s' } as CSSProperties}
              transform="translate(518.8 318.9)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="0"
              style={{ '--d': '0.70s' } as CSSProperties}
              x="518.8"
              y="337.8"
              fontSize="12.5"
              textAnchor="middle"
            >
              Issy-les-Moulineaux
            </text>
            <g
              className="lm-pin"
              data-c="1"
              style={{ '--d': '0.67s' } as CSSProperties}
              transform="translate(337.0 329.9)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="1"
              style={{ '--d': '0.77s' } as CSSProperties}
              x="337.0"
              y="348.8"
              fontSize="12.5"
              textAnchor="middle"
            >
              Sèvres
            </text>
            <g
              className="lm-pin"
              data-c="2"
              style={{ '--d': '0.74s' } as CSSProperties}
              transform="translate(335.1 222.2)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="2"
              style={{ '--d': '0.84s' } as CSSProperties}
              x="335.1"
              y="241.1"
              fontSize="12.5"
              textAnchor="middle"
            >
              Saint-Cloud
            </text>
            <g
              className="lm-pin"
              data-c="3"
              style={{ '--d': '0.81s' } as CSSProperties}
              transform="translate(396.2 413.7)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="3"
              style={{ '--d': '0.91s' } as CSSProperties}
              x="396.2"
              y="432.6"
              fontSize="12.5"
              textAnchor="middle"
            >
              Meudon
            </text>
            <g
              className="lm-pin"
              data-c="4"
              style={{ '--d': '0.88s' } as CSSProperties}
              transform="translate(280.7 396.8)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="4"
              style={{ '--d': '0.98s' } as CSSProperties}
              x="280.7"
              y="415.7"
              fontSize="12.5"
              textAnchor="middle"
            >
              Chaville
            </text>
            <g
              className="lm-pin"
              data-c="5"
              style={{ '--d': '0.95s' } as CSSProperties}
              transform="translate(229.2 327.3)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="5"
              style={{ '--d': '1.05s' } as CSSProperties}
              x="229.2"
              y="346.2"
              fontSize="12.5"
              textAnchor="middle"
            >
              Ville-d’Avray
            </text>
            <g
              className="lm-pin"
              data-c="6"
              style={{ '--d': '1.02s' } as CSSProperties}
              transform="translate(509.6 133.4)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="6"
              style={{ '--d': '1.12s' } as CSSProperties}
              x="509.6"
              y="152.3"
              fontSize="12.5"
              textAnchor="middle"
            >
              Paris 16e
            </text>
            <g
              className="lm-pin"
              data-c="7"
              style={{ '--d': '1.09s' } as CSSProperties}
              transform="translate(610.8 234.6)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="7"
              style={{ '--d': '1.19s' } as CSSProperties}
              x="610.8"
              y="253.5"
              fontSize="12.5"
              textAnchor="middle"
            >
              Paris 15e
            </text>
            <text className="lm-lb lm-lb-c" x="434.6" y="252.6" fontSize="15.6" textAnchor="middle">
              Boulogne-Billancourt
            </text>
            <g className="lm-paris">
              <rect x="665.5" y="60.2" width="7" height="7" fill="#55554F" />
              <text x="662.0" y="68.1" fontSize="11.2" textAnchor="end">
                Paris 8e · le studio
              </text>
            </g>
            <text className="lm-attr" x="850" y="550" fontSize="9.0" textAnchor="end">
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

function VosQuestionsABoulogne() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="faq">
        <div className="faq-l">
          <h2 className="h2">
            Vos questions,
            <br />
            <span className="serif">à Boulogne-Billancourt.</span>
          </h2>
          <p className="lead">Les réponses aux questions qu’on nous pose le plus souvent sur ce sujet.</p>
          <Link to="/faq" className="lnk">
            Toute la FAQ
          </Link>
        </div>
        <div className="acc">
          <div className="q">
            <div className="q-h">
              <span>Travaillez-vous déjà avec des entreprises de Boulogne-Billancourt ?</span>
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
              Oui : DATHY, dont le siège est à Boulogne-Billancourt. On a conçu son site, de la direction
              artistique au blog.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Pouvez-vous refondre un site B2B sans casser nos outils ?</span>
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
              Oui, si les outils le permettent : la connexion (API, widget ou export) avec votre CRM, votre
              agenda ou votre newsletter est vérifiée au cadrage, avant le devis.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Pourquoi une équipe à taille humaine plutôt qu’une grande agence ?</span>
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
              Vous parlez directement à ceux qui conçoivent et développent votre site, du premier appel à la
              mise en ligne. Moins d’intermédiaires, des décisions plus rapides.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien coûte une refonte de site à Boulogne-Billancourt ?</span>
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
            Un projet à Boulogne-Billancourt ?<span className="serif">Parlons-en.</span>
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
      <PourQuiABoulogne />
      <CeQuOnLivre />
      <LeTissuLocalSecteur />
      <CeQueVotreSite />
      <NosRealisationsJusquA />
      <CommentOnTravaille />
      <AutourDeBoulogneBillancourt />
      <VosQuestionsABoulogne />
      <GCta />
    </section>
  )
}
