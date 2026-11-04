import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { CommentOnTravaille } from '../../components/shared/CommentOnTravaille'
import { IlsNousOntFait } from '../../components/shared/IlsNousOntFait'
import { LesExpertisesMobilisees2 } from '../../components/shared/LesExpertisesMobilisees2'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/pour-qui">
          Pour qui ? / <b>Restaurants</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Site internet pour restaurants</span>
        <span className="serif">qui remplit les tables.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Restaurants, bistrots, bars à vin : votre carte à jour, la réservation en ligne et les demandes de
          groupes, sur un site rapide sur téléphone, là où vos clients choisissent où dîner.
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
        <img src="/images/842065464d1d1d.png" alt="Une salle de bistrot avant le service, en pixel art" />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="px omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde le site de votre restaurant ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.votre-restaurant.fr
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
                <img className="px omark" src="/px/omark-214dbacb.svg" alt="" width={14} height={14} />
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
                Réservation
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
                Carte
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
            <img className="px picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Refaire le site du restaurant</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-909d41ec.svg" alt="" width={10} height={10} />
            <b>Prendre les réservations en ligne</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Remonter sur Google</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-92b066cf.svg" alt="" width={10} height={10} />
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
      <div className="capt">La salle, avant le service du soir</div>
    </div>
  )
}

function CeQueVotreSite() {
  return (
    <section className="sec" style={{ padding: '0', borderTop: 'none' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce que votre site
          <br />
          <span className="serif">doit faire pour vous.</span>
        </h2>
      </div>
      <div className="ocs">
        <div className="oc">
          <h3>Des réservations à toute heure</h3>
          <p>Vos clients réservent en ligne, même pendant le service, quand personne ne peut décrocher.</p>
        </div>
        <div className="oc">
          <h3>Une carte toujours à jour</h3>
          <p>
            Plat du jour, menu de saison, allergènes : vous modifiez la carte vous-même, en quelques secondes.
          </p>
        </div>
        <div className="oc">
          <h3>Les groupes et privatisations</h3>
          <p>Un formulaire qui pose les bonnes questions : date, nombre de couverts, occasion.</p>
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
          Ce qu’on livre
          <br />
          <span className="serif">concrètement.</span>
        </h2>
        <p className="lead">
          Chaque projet assemble les briques dont vous avez besoin, pas une de plus. Les écrans ci-dessous
          sont des exemples.
        </p>
      </div>
      <div className="gcells">
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ui-sl">
                <div className="ul-h">Mardi soir · 2 couverts</div>
                <div className="rs-s sl-g">
                  <span className="">19:00</span>
                  <span className="">19:30</span>
                  <span className="off">20:00</span>
                  <span className="on">20:30</span>
                  <span className="off">21:00</span>
                  <span className="">21:30</span>
                </div>
                <div className="shop-cta">Réserver la table</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Réservation de table</h3>
            <p>Date, heure, nombre de couverts : en trois touches.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Menu du jour</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Velouté de potimarron</span>
                  <b>Entrée</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Filet de bar, fenouil</span>
                  <b>Plat</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Tarte fine aux pommes</span>
                  <b>Dessert</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Carte & menus</h3>
            <p>Plats et allergènes, modifiés depuis le back-office.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="uf">
                <div className="ul-h">Demande de groupe</div>
                <div className="uf-g">
                  <label className="fld fld-f">
                    <span>Date</span>
                    <b>12 décembre</b>
                  </label>
                  <label className="fld">
                    <span>Couverts</span>
                    <b>24</b>
                  </label>
                  <label className="fld">
                    <span>Occasion</span>
                    <b>Repas d’équipe</b>
                  </label>
                  <label className="fld">
                    <span>Formule</span>
                    <b>À définir</b>
                  </label>
                </div>
                <div className="shop-cta">Envoyer la demande</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Privatisation & groupes</h3>
            <p>Les demandes arrivent complètes, prêtes à chiffrer.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="gbp">
                <div className="gbp-n">Votre restaurant</div>
                <div className="gbp-m">Restaurant · Ouvert · service jusqu’à 22 h 30</div>
                <div className="gbp-b">
                  <span>Itinéraire</span>
                  <span>Appeler</span>
                  <span>Site web</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Fiche Google</h3>
            <p>Horaires, menu et réservation accessibles depuis Google.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="serp u-bare">
                <div className="serp-q">
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
                  <span>bistrot lyon 2</span>
                </div>
                <div className="serp-r">
                  <span className="serp-u">votre-restaurant.fr</span>
                  <b>Bistrot à Lyon 2e — Cuisine de saison</b>
                  <span className="serp-d">Menu du jour, carte des vins et réservation en ligne.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>SEO local</h3>
            <p>Être trouvé sur « restaurant + votre quartier ».</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="uf">
                <div className="ul-h">Carte cadeau</div>
                <div className="uf-g">
                  <label className="fld fld-f">
                    <span>Montant</span>
                    <b>Au choix</b>
                  </label>
                  <label className="fld">
                    <span>Pour</span>
                    <b>Claire</b>
                  </label>
                  <label className="fld">
                    <span>De la part de</span>
                    <b>Thomas</b>
                  </label>
                  <label className="fld">
                    <span>Envoi</span>
                    <b>Par e-mail</b>
                  </label>
                </div>
                <div className="shop-cta">Offrir</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Cartes cadeaux</h3>
            <p>Offrir un dîner, directement depuis le site.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function LesAutresSecteurs() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '96px' }}>
        <h2 className="h2">
          Les autres
          <br />
          <span className="serif">secteurs.</span>
        </h2>
        <p className="lead">Chaque métier a ses outils. Choisissez le vôtre.</p>
        <Link to="/pour-qui" className="lnk sx-alllnk">
          Voir tous les secteurs
        </Link>
      </div>
      <div className="sx-oth">
        <div className="sec-ring sx-others">
          <Link to="/pour-qui/golfs" className="sec-st" data-sector="golf" role="link" tabIndex={0}>
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
            <b>Golfs</b>
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
                  className="px"
                  src="/px/art-e0dda6d2.svg"
                  alt=""
                  style={{ width: '100%', height: '100%' }}
                />
              </span>
            </span>
            <b>Boulangeries</b>
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
          <Link to="/pour-qui/hotels-gites" className="sec-st" data-sector="hotel" role="link" tabIndex={0}>
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
            <b>Hôtels & gîtes</b>
          </Link>
          <Link to="/pour-qui/coiffeurs" className="sec-st" data-sector="coiffure" role="link" tabIndex={0}>
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
            <b>Coiffeurs</b>
          </Link>
          <Link to="/pour-qui/immobilier" className="sec-st" data-sector="immo" role="link" tabIndex={0}>
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
            <b>Immobilier</b>
          </Link>
        </div>
      </div>
    </section>
  )
}

function QuestionsFrequentes() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="faq">
        <div className="faq-l">
          <h2 className="h2">
            Questions
            <br />
            <span className="serif">fréquentes.</span>
          </h2>
          <p className="lead">Les réponses aux questions qu’on nous pose le plus souvent sur ce sujet.</p>
          <Link to="/faq" className="lnk">
            Toute la FAQ
          </Link>
        </div>
        <div className="acc">
          <div className="q">
            <div className="q-h">
              <span>Combien coûte un site pour un restaurant ?</span>
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
              prix dépend du nombre de pages et des fonctionnalités (réservation en ligne, carte, cartes
              cadeaux).
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien de temps pour être en ligne ?</span>
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
              Des fonctionnalités sur mesure demandent davantage : le planning est fixé dans le devis.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Pourrai-je modifier ma carte et mes menus moi-même ?</span>
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
              Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Carte, menus,
              horaires et actualités se modifient sans connaissances techniques.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Pouvez-vous connecter notre outil de réservation ?</span>
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
              Oui, si l’outil le permet : la connexion (API, widget ou export) est vérifiée au cadrage, avant
              le devis.
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
            Et si votre site<span className="serif">remplissait vos tables ?</span>
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
      <CeQueVotreSite />
      <CeQuOnLivre />
      <CommentOnTravaille />
      <IlsNousOntFait />
      <LesExpertisesMobilisees2 />
      <LesAutresSecteurs />
      <QuestionsFrequentes />
      <GCta />
    </section>
  )
}
