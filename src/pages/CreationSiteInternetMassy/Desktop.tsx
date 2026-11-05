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
          Création de site internet / <b>Massy</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Création de site internet à Massy</span>
        <span className="serif">pour les entreprises de Massy Atlantis et alentour.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Desservie par sa gare TGV et toute proche du plateau de Saclay, Massy attire sièges d’entreprises,
          sociétés de services, start-up et commerces. On conçoit et on refond des sites sur mesure pour les
          entreprises massicoises, avec un objectif simple : générer des contacts.
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
        <img src="/images/lc-massy.png" alt="Le quartier Massy Atlantis et la gare TGV, en pixel art" />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="pxsvg omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde le site de votre entreprise massicoise ?</span>
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
      <div className="capt">Massy Atlantis, à l’heure bleue</div>
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
          <span className="serif">de sites internet à Massy.</span>
        </h2>
        <p className="lead">
          Pour des entreprises qui vendent une expertise ou une technologie : un site qui explique, puis qui
          convertit.
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Pour qui,
          <br />
          <span className="serif">à Massy.</span>
        </h2>
        <p className="lead">
          Les entreprises qu’on accompagne ici, et ce que leur site doit faire pour elles.
        </p>
      </div>
      <div className="lc-rows">
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’on livre,
          <br />
          <span className="serif">pour Massy.</span>
        </h2>
        <p className="lead">
          Les briques qui comptent pour les entreprises massicoises. Les écrans ci-dessous sont des exemples.
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
          Massy s’est imposée comme un pôle d’affaires du sud francilien : la gare TGV et les RER B et C la
          relient à Paris et à toute la France, le quartier Atlantis réunit bureaux, logements et commerces,
          et le plateau de Saclay, avec ses écoles et ses centres de recherche, est à deux pas. Le tissu local
          mêle grands comptes, PME de services, start-up technologiques, commerces et indépendants.
        </p>
      </div>
      <figure className="lcv-nd lca">
        <div className="lcv-nd-in">
          <img
            src="/images/lc-massy-nd.png"
            alt="Le parvis de la gare de Massy, des voyageurs et un TGV en arrière-plan, en pixel art"
          />
        </div>
        <figcaption>Le quartier de la gare, un matin de semaine</figcaption>
      </figure>
      <div className="lc-sects">
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
              <span className="lcv-type" data-type="agence web massy" />
              <i className="lcv-caret" />
            </div>
          </div>
          <p>
            « agence web Massy », « création site internet Essonne » : des pages qui répondent aux recherches
            de vos clients, et aux IA.
          </p>
        </div>
        <div className="lca oc">
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
        <div className="lca oc">
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
        <div className="lca oc">
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Quelques réalisations
          <br />
          <span className="serif">du studio.</span>
        </h2>
        <p className="lead">
          Start-up et outils B2B : un site produit pour Swing Call, un configurateur 3D pour Stand-ING.
        </p>
        <Link to="/realisations" className="lnk">
          Toutes les réalisations
        </Link>
      </div>
      <div className="rz-grid lc-rz">
        <article className="rz-card rz-sc" data-cats="site app">
          <div className="p-media">
            <img src="/images/6cb0d8d4f25c2a.png" alt="" />
            <div className="win win-shot mdb-cwin">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">swingcall.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/a4c19bfe3dd683.jpg" alt="Le site Swing Call" />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">Swing Call</h3>
            <span className="p-tag">Start-up · Site produit</span>
          </div>
          <p className="p-desc">Le site d’une start-up qui équipe les golfs d’un agent IA téléphonique.</p>
          <Link to="/realisations/swing-call" className="lnk rz-more" data-proj="swing-call">
            Voir le projet
          </Link>
        </article>
        <article className="rz-card rz-standing" data-cats="app" data-to="/realisations/stand-ing">
          <div className="p-media">
            <img src="/images/2c63fe08cd774a.png" alt="" />
            <div className="win win-stand">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Stand-ING — Configurateur de stand 3D</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img
                  className="cfg-shot"
                  src="/images/cfe60288d854b0.png"
                  alt="Configurateur de stand 3D Stand-ING"
                />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">
              <Link to="/realisations/stand-ing">Stand-ING</Link>
            </h3>
            <span className="p-tag">Configurateur 3D · 2026</span>
          </div>
          <p className="p-desc">
            Un configurateur de stands en ligne : le client compose, visualise et reçoit son devis.
          </p>
        </article>
      </div>
    </section>
  )
}

function AutourDeMassyOn() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Autour de Massy,
          <br />
          <span className="serif">on intervient aussi.</span>
        </h2>
      </div>
      <div className="lmw">
        <div className="lm-card">
          <img
            className="lm-base"
            src="/images/lc-map-massy-d.svg"
            alt="Carte de Massy et des communes voisines : routes, voies ferrées, forêts et cours d’eau"
          />
          <svg className="lmap-o" viewBox="0 0 860 560" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              className="lm-town"
              data-c="0"
              style={{ '--d': '0.15s' } as CSSProperties}
              d="M319.7 287.3 L312.7 293.2 L308.1 294.9 L302.7 303.9 L295.9 310.2 L287.9 332.6 L277.7 337.5 L268.3 340.5 L259.0 341.7 L253.3 340.6 L247.8 373.1 L257.1 377.5 L251.2 389.0 L263.5 393.1 L268.3 391.2 L270.1 389.1 L275.8 389.1 L281.1 391.2 L287.2 395.3 L288.1 397.9 L290.0 398.9 L289.4 401.7 L288.7 401.4 L288.7 408.2 L290.5 407.7 L291.1 413.3 L289.0 425.6 L309.6 428.6 L313.4 427.6 L319.8 427.8 L320.9 426.9 L322.4 428.0 L324.3 425.3 L326.6 426.4 L328.2 429.0 L330.1 428.6 L331.7 426.1 L342.3 426.8 L344.4 425.0 L345.6 426.7 L349.5 427.7 L352.7 426.3 L353.2 428.3 L354.4 428.9 L356.7 427.5 L360.8 431.2 L362.9 430.7 L365.2 427.7 L369.3 430.2 L371.6 428.3 L376.9 430.6 L379.7 429.2 L385.9 432.4 L391.3 431.3 L394.0 432.8 L398.8 433.0 L400.2 431.1 L402.2 431.3 L405.0 429.4 L410.0 429.7 L412.1 428.0 L413.3 425.3 L415.8 425.2 L418.0 418.4 L421.2 417.6 L424.9 408.2 L425.7 402.7 L428.3 399.7 L431.6 398.0 L433.0 395.7 L436.7 394.2 L442.6 394.6 L446.8 392.4 L453.2 393.4 L456.0 392.0 L464.8 402.2 L480.1 403.4 L478.5 395.9 L479.6 383.8 L491.7 373.4 L501.4 357.6 L506.3 341.5 L494.4 336.6 L488.4 329.8 L482.1 320.0 L474.5 317.6 L453.9 302.4 L448.5 299.6 L438.2 297.7 L434.7 300.9 L433.3 301.0 L420.2 296.2 L397.1 293.7 L389.0 289.3 L382.4 293.8 L381.6 293.3 L383.9 280.4 L379.9 282.2 L374.7 281.4 L378.6 289.3 L375.8 291.1 L373.6 290.6 L370.2 291.8 L356.6 306.7 L349.6 304.2 L340.1 302.7 L329.1 303.6 L320.6 300.0 L319.9 297.4 L322.4 290.5 L319.7 287.3Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="1"
              style={{ '--d': '0.22s' } as CSSProperties}
              d="M538.1 141.9 L534.2 149.4 L538.0 153.1 L542.5 155.6 L542.1 156.5 L550.2 160.4 L558.5 172.5 L560.6 178.1 L570.0 189.5 L565.6 196.6 L567.8 199.6 L559.7 204.5 L555.2 209.5 L549.4 212.8 L549.4 214.2 L547.4 214.8 L547.2 216.1 L540.7 219.9 L538.4 224.8 L532.7 225.0 L535.4 231.1 L534.8 233.6 L535.7 237.2 L542.2 252.1 L551.1 266.7 L558.5 260.9 L582.8 252.5 L598.7 245.1 L618.6 233.1 L628.8 224.5 L625.6 249.2 L634.1 283.7 L648.2 284.5 L670.0 278.6 L673.2 263.1 L671.7 262.1 L676.6 260.8 L680.0 250.2 L684.1 242.7 L682.9 239.8 L670.3 245.0 L665.3 238.1 L669.5 235.1 L669.0 234.4 L678.9 223.9 L669.7 211.4 L675.9 206.1 L676.6 207.2 L679.5 204.0 L680.7 205.2 L683.9 202.4 L690.8 193.2 L686.8 191.4 L691.5 183.0 L686.9 178.8 L681.5 176.0 L678.2 175.8 L669.1 169.5 L662.6 169.5 L655.1 165.0 L660.3 160.8 L657.7 156.9 L659.8 153.9 L650.1 148.2 L666.3 123.5 L665.4 116.0 L667.2 112.4 L669.6 113.6 L673.6 96.1 L672.2 95.5 L672.3 94.5 L674.4 88.9 L675.0 89.3 L679.0 83.5 L679.6 80.7 L681.8 79.0 L688.9 68.2 L663.0 60.9 L660.9 68.5 L652.1 67.3 L645.9 68.1 L645.1 73.8 L643.1 76.1 L586.7 89.8 L592.5 100.7 L588.8 119.4 L579.6 118.6 L579.3 121.7 L567.9 121.0 L549.0 124.1 L544.9 127.2 L538.1 141.9Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="2"
              style={{ '--d': '0.29s' } as CSSProperties}
              d="M408.8 250.8 L404.8 247.7 L407.4 242.5 L404.5 241.1 L405.0 239.7 L402.2 236.6 L399.6 226.5 L401.9 223.2 L394.9 219.7 L385.3 220.2 L382.3 217.4 L381.1 206.5 L377.8 200.5 L375.6 199.7 L380.3 195.2 L380.4 191.2 L372.4 186.4 L371.3 184.5 L375.2 180.2 L374.0 178.7 L367.9 177.1 L363.8 170.8 L360.6 170.2 L362.9 165.3 L359.8 152.4 L357.4 148.6 L358.8 143.1 L357.5 138.0 L359.5 128.2 L361.6 124.5 L371.8 112.5 L378.2 107.7 L380.5 102.9 L387.9 96.2 L389.6 92.0 L409.0 90.5 L416.4 104.8 L431.9 110.5 L437.9 119.9 L445.7 114.9 L453.3 120.5 L463.6 118.3 L467.0 116.7 L481.2 119.2 L489.6 125.3 L499.6 116.7 L507.4 112.0 L513.2 113.7 L512.6 120.6 L520.5 120.7 L515.0 136.6 L521.8 136.1 L538.1 141.9 L534.2 149.4 L538.0 153.1 L542.5 155.6 L542.1 156.5 L550.2 160.4 L558.5 172.5 L560.6 178.1 L570.0 189.5 L565.6 196.6 L567.8 199.6 L559.7 204.5 L555.2 209.5 L549.4 212.8 L549.4 214.2 L547.4 214.8 L547.2 216.1 L540.7 219.9 L538.4 224.8 L532.7 225.0 L530.2 229.1 L524.5 231.7 L515.4 238.6 L513.6 241.1 L509.7 241.5 L507.7 236.2 L501.2 238.1 L490.3 237.4 L482.4 241.4 L476.4 241.6 L471.8 239.6 L468.0 240.0 L465.2 236.7 L457.9 235.7 L450.4 239.4 L441.8 245.5 L438.6 244.7 L434.5 240.1 L429.4 238.9 L427.4 243.4 L426.4 242.7 L421.3 244.2 L416.0 248.5 L408.8 250.8Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="3"
              style={{ '--d': '0.36s' } as CSSProperties}
              d="M625.5 334.4 L620.6 354.3 L610.5 351.9 L608.7 358.0 L606.6 357.3 L600.9 375.0 L599.6 374.8 L598.7 378.6 L607.2 380.9 L602.1 395.1 L601.3 398.8 L602.9 399.4 L599.9 412.1 L608.3 415.6 L619.5 415.3 L621.4 413.7 L623.5 401.3 L628.4 401.7 L627.9 408.4 L632.8 408.9 L632.9 413.2 L635.1 419.2 L633.8 428.9 L630.4 428.7 L624.9 444.3 L643.5 456.0 L644.1 458.5 L638.8 466.6 L639.6 474.4 L648.1 482.7 L650.5 483.1 L655.1 486.2 L656.4 485.7 L656.6 487.7 L658.4 489.2 L672.0 495.1 L676.1 499.1 L674.7 483.6 L676.1 477.6 L680.3 473.4 L683.9 472.2 L689.7 466.9 L691.0 466.9 L701.1 446.4 L698.2 445.4 L690.3 439.6 L712.9 403.9 L711.3 401.5 L704.6 375.6 L702.3 356.5 L703.2 341.2 L702.2 342.3 L702.7 328.5 L680.0 326.6 L657.9 322.4 L650.6 322.3 L648.4 337.8 L625.5 334.4Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="4"
              style={{ '--d': '0.43s' } as CSSProperties}
              d="M725.3 185.4 L735.4 192.9 L745.5 206.1 L745.3 207.8 L750.0 212.0 L746.7 216.8 L750.1 219.6 L753.4 221.3 L754.2 220.1 L756.4 222.3 L765.4 227.0 L773.4 225.1 L776.9 219.9 L784.3 222.2 L785.0 220.7 L805.6 235.2 L807.2 238.5 L802.0 239.4 L792.1 259.7 L780.7 256.1 L770.5 255.7 L778.0 269.3 L780.9 296.7 L782.4 296.5 L784.1 306.2 L793.4 308.9 L793.0 312.8 L784.1 331.9 L777.6 340.0 L760.8 365.5 L747.5 388.8 L747.8 388.1 L732.4 382.1 L705.8 380.0 L702.3 356.5 L703.2 341.2 L702.2 342.3 L702.7 328.5 L680.0 326.6 L657.9 322.4 L650.6 322.3 L648.4 337.8 L625.5 334.4 L633.2 301.2 L634.6 292.9 L634.1 283.7 L648.2 284.5 L670.0 278.6 L673.2 263.1 L671.7 262.1 L676.6 260.8 L680.0 250.2 L684.1 242.7 L682.9 239.8 L670.3 245.0 L665.3 238.1 L669.5 235.1 L669.0 234.4 L678.9 223.9 L669.7 211.4 L675.9 206.1 L676.6 207.2 L679.5 204.0 L680.7 205.2 L683.9 202.4 L690.8 193.2 L686.8 191.4 L691.5 183.0 L698.3 186.4 L705.8 173.7 L701.6 164.1 L713.6 171.1 L719.0 176.4 L725.3 185.4Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="5"
              style={{ '--d': '0.50s' } as CSSProperties}
              d="M506.3 341.5 L501.4 357.6 L491.7 373.4 L479.6 383.8 L478.5 395.9 L480.1 403.4 L485.6 403.4 L491.8 408.4 L494.6 408.8 L499.1 411.5 L501.0 409.5 L508.2 412.8 L510.7 415.9 L521.6 423.9 L519.5 424.6 L519.1 425.9 L522.3 425.6 L522.8 428.7 L526.6 431.4 L528.7 431.7 L528.4 432.9 L529.5 433.8 L533.5 433.0 L534.4 434.2 L539.1 435.2 L545.1 437.7 L545.7 438.8 L547.4 438.2 L548.3 440.1 L552.2 438.4 L559.7 437.9 L561.9 439.7 L571.5 441.6 L583.2 446.0 L585.3 441.7 L591.8 444.1 L596.1 431.7 L595.3 431.3 L595.8 429.7 L593.9 428.8 L597.0 416.5 L599.9 412.1 L602.9 399.4 L601.3 398.8 L602.1 395.1 L607.2 380.9 L598.7 378.6 L599.6 374.8 L585.4 371.3 L567.2 362.8 L545.5 356.2 L540.0 353.5 L531.6 353.1 L522.7 351.0 L506.3 341.5Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="6"
              style={{ '--d': '0.57s' } as CSSProperties}
              d="M366.9 175.8 L353.2 183.3 L347.5 191.1 L339.2 199.2 L312.7 211.5 L316.4 216.9 L312.0 225.0 L298.2 238.5 L295.8 240.3 L290.2 241.5 L290.2 244.7 L302.0 244.9 L310.7 243.0 L326.9 235.4 L327.8 237.5 L334.4 239.1 L333.5 241.1 L336.5 248.0 L335.7 248.7 L336.3 251.4 L333.1 252.3 L332.1 255.6 L328.6 257.0 L328.9 258.4 L327.7 259.2 L329.0 266.8 L328.4 270.6 L322.7 276.9 L322.3 284.6 L319.7 287.3 L322.4 290.5 L319.9 297.4 L320.1 299.4 L329.1 303.6 L340.1 302.7 L349.6 304.2 L356.6 306.7 L370.2 291.8 L373.6 290.6 L375.8 291.1 L378.6 289.3 L374.7 281.4 L379.9 282.2 L383.9 280.4 L381.6 293.3 L382.4 293.8 L389.0 289.3 L396.7 293.5 L402.6 288.2 L419.8 268.6 L406.1 251.6 L408.8 250.8 L404.8 247.7 L407.4 242.5 L404.5 241.1 L405.0 239.7 L402.2 236.6 L399.6 226.5 L401.9 223.2 L394.9 219.7 L385.3 220.2 L382.3 217.4 L381.1 206.5 L377.8 200.5 L375.6 199.7 L380.3 195.2 L380.4 191.2 L372.4 186.4 L371.3 184.5 L375.2 180.2 L374.0 178.7 L368.3 177.3 L366.9 175.8Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="7"
              style={{ '--d': '0.64s' } as CSSProperties}
              d="M240.1 154.4 L235.1 155.8 L228.7 155.8 L209.9 130.5 L188.2 138.4 L184.2 135.5 L180.9 141.2 L166.2 141.7 L163.3 144.3 L142.9 176.1 L126.0 167.3 L127.7 164.2 L116.2 159.6 L115.4 156.5 L112.7 153.2 L110.0 152.0 L105.0 160.9 L97.7 168.4 L93.0 171.7 L91.9 170.6 L86.3 175.6 L75.3 187.8 L73.6 193.4 L75.0 195.1 L75.0 197.9 L73.9 197.0 L66.3 197.3 L63.1 195.6 L62.3 196.8 L59.6 195.4 L58.0 199.6 L69.7 217.6 L66.7 219.3 L64.3 224.3 L62.6 224.5 L56.4 234.5 L52.8 242.8 L73.7 263.5 L85.0 271.6 L83.9 274.2 L88.5 274.5 L89.8 271.5 L93.1 272.8 L91.9 282.5 L90.0 283.0 L81.5 316.5 L92.1 319.2 L115.8 331.8 L126.9 349.8 L159.7 356.6 L161.3 356.3 L160.5 354.3 L167.6 351.4 L179.0 353.5 L177.7 360.2 L180.2 360.7 L181.7 360.2 L182.4 357.7 L217.6 342.8 L246.4 338.9 L255.8 341.4 L261.6 341.5 L277.7 337.5 L287.9 332.6 L288.8 327.8 L286.9 326.9 L264.3 325.1 L256.3 321.5 L244.6 313.0 L233.1 302.0 L223.6 297.9 L213.5 291.0 L216.8 284.4 L217.6 277.7 L218.8 277.4 L220.3 272.9 L227.2 261.8 L227.8 245.1 L234.4 237.2 L242.8 232.2 L226.5 227.6 L216.2 222.0 L223.4 206.5 L226.3 193.4 L237.7 169.1 L240.1 154.4Z"
              pathLength="1"
            />
            <path
              className="lm-center"
              d="M532.7 225.0 L535.4 231.1 L534.8 233.6 L535.7 237.2 L542.2 252.1 L551.1 266.7 L558.5 260.9 L582.8 252.5 L598.7 245.1 L618.6 233.1 L628.8 224.5 L625.6 249.2 L634.1 283.7 L634.6 292.9 L633.2 301.2 L620.6 354.3 L610.5 351.9 L608.7 358.0 L606.6 357.3 L600.9 375.0 L585.4 371.3 L572.1 364.7 L545.5 356.2 L540.0 353.5 L531.6 353.1 L519.5 349.6 L504.9 340.6 L495.0 337.0 L487.8 329.0 L483.4 321.0 L474.5 317.6 L450.0 300.2 L438.2 297.7 L434.7 300.9 L433.3 301.0 L420.2 296.2 L396.7 293.5 L402.6 288.2 L419.8 268.6 L406.1 251.6 L416.0 248.5 L421.3 244.2 L426.4 242.7 L427.4 243.4 L429.4 238.9 L434.5 240.1 L438.6 244.7 L441.5 245.5 L457.9 235.7 L465.2 236.7 L468.0 240.0 L471.8 239.6 L476.4 241.6 L482.4 241.4 L490.3 237.4 L501.2 238.1 L507.7 236.2 L509.7 241.5 L513.5 241.1 L515.4 238.6 L524.5 231.7 L530.2 229.1 L532.7 225.0Z"
              pathLength="1"
            />
            <g className="lm-ch" transform="translate(487.3 302.5)">
              <rect x="-4.2" y="-4.2" width="8.4" height="8.4" rx="1" />
            </g>
            <text className="lm-lb lm-lb-ch" x="478.9" y="306.9" fontSize="10.8" textAnchor="end">
              Gare TGV
            </text>
            <g
              className="lm-pin"
              data-c="0"
              style={{ '--d': '0.60s' } as CSSProperties}
              transform="translate(374.8 360.2)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="0"
              style={{ '--d': '0.70s' } as CSSProperties}
              x="374.8"
              y="379.0"
              fontSize="12.5"
              textAnchor="middle"
            >
              Palaiseau
            </text>
            <g
              className="lm-pin"
              data-c="1"
              style={{ '--d': '0.67s' } as CSSProperties}
              transform="translate(616.9 176.5)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="1"
              style={{ '--d': '0.77s' } as CSSProperties}
              x="616.9"
              y="195.4"
              fontSize="12.5"
              textAnchor="middle"
            >
              Antony
            </text>
            <g
              className="lm-pin"
              data-c="2"
              style={{ '--d': '0.74s' } as CSSProperties}
              transform="translate(455.4 174.1)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="2"
              style={{ '--d': '0.84s' } as CSSProperties}
              x="455.4"
              y="193.0"
              fontSize="12.5"
              textAnchor="middle"
            >
              Verrières-le-Buisson
            </text>
            <g
              className="lm-pin"
              data-c="3"
              style={{ '--d': '0.81s' } as CSSProperties}
              transform="translate(660.2 398.5)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="3"
              style={{ '--d': '0.91s' } as CSSProperties}
              x="660.2"
              y="417.3"
              fontSize="12.5"
              textAnchor="middle"
            >
              Chilly-Mazarin
            </text>
            <g
              className="lm-pin"
              data-c="4"
              style={{ '--d': '0.88s' } as CSSProperties}
              transform="translate(721.6 282.5)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="4"
              style={{ '--d': '0.98s' } as CSSProperties}
              x="721.6"
              y="301.3"
              fontSize="12.5"
              textAnchor="middle"
            >
              Wissous
            </text>
            <g
              className="lm-pin"
              data-c="5"
              style={{ '--d': '0.95s' } as CSSProperties}
              transform="translate(545.2 395.4)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="5"
              style={{ '--d': '1.05s' } as CSSProperties}
              x="545.2"
              y="414.2"
              fontSize="12.5"
              textAnchor="middle"
            >
              Champlan
            </text>
            <g
              className="lm-pin"
              data-c="6"
              style={{ '--d': '1.02s' } as CSSProperties}
              transform="translate(360.3 246.7)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="6"
              style={{ '--d': '1.12s' } as CSSProperties}
              x="360.3"
              y="265.6"
              fontSize="12.5"
              textAnchor="middle"
            >
              Igny
            </text>
            <g
              className="lm-pin"
              data-c="7"
              style={{ '--d': '1.09s' } as CSSProperties}
              transform="translate(159.3 249.7)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="7"
              style={{ '--d': '1.19s' } as CSSProperties}
              x="159.3"
              y="268.6"
              fontSize="12.5"
              textAnchor="middle"
            >
              Saclay
            </text>
            <text className="lm-lb lm-lb-c" x="579.0" y="262.6" fontSize="20.0" textAnchor="middle">
              Massy
            </text>
            <g className="lm-paris">
              <g transform="translate(605.1 16.0) rotate(-84.0)">
                <path d="M-40 0 H0 m-6 -4 l6 4 l-6 4" fill="none" />
              </g>
              <text x="600.2" y="75.5" fontSize="11.2" textAnchor="middle">
                Paris 8e · le studio
              </text>
            </g>
            <text className="lm-attr" x="850" y="550" fontSize="9.0" textAnchor="end">
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

function VosQuestionsAMassy() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="faq">
        <div className="faq-l">
          <h2 className="h2">
            Vos questions,
            <br />
            <span className="serif">à Massy.</span>
          </h2>
          <p className="lead">Les réponses aux questions qu’on nous pose le plus souvent sur ce sujet.</p>
          <Link to="/faq" className="lnk">
            Toute la FAQ
          </Link>
        </div>
        <div className="acc">
          <div className="q">
            <div className="q-h">
              <span>Intervenez-vous à Massy ?</span>
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
              Oui. Le studio est à Paris : on peut se voir à Massy pour lancer le projet, puis tout avance en
              visio et dans Orion Admin, votre espace de suivi.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>
                Notre start-up a besoin d’un site et d’une application : pouvez-vous faire les deux ?
              </span>
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
              <span>Pouvez-vous connecter le site à notre CRM ?</span>
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
              Oui, si l’outil le permet : la connexion (API, widget ou export) est vérifiée au cadrage, avant
              le devis.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien coûte une création de site internet à Massy ?</span>
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
            Un projet à Massy ?<span className="serif">Parlons-en.</span>
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
      <PourQuiAMassy />
      <CeQuOnLivre />
      <LeTissuLocalSecteur />
      <CeQueVotreSite />
      <QuelquesRealisationsDuStudio />
      <CommentOnTravaille />
      <AutourDeMassyOn />
      <VosQuestionsAMassy />
      <GCta />
    </section>
  )
}
