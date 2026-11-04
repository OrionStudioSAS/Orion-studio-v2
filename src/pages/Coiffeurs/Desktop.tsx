import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { CommentOnTravaille } from '../../components/shared/CommentOnTravaille'
import { IlsNousOntFait } from '../../components/shared/IlsNousOntFait'
import { LesExpertisesMobilisees3 } from '../../components/shared/LesExpertisesMobilisees3'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/pour-qui">
          Pour qui ? / <b>Coiffeurs</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Site internet pour coiffeurs</span>
        <span className="serif">qui remplit l’agenda.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Salons de coiffure, barbiers, instituts de beauté : la prise de rendez-vous en ligne, vos
          prestations à jour, et un site qui ressemble à votre salon.
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
        <img src="/images/2a83e4b33322ce.png" alt="Un salon de coiffure parisien, en pixel art" />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="px omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde le site de votre salon ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.votre-salon.fr
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
                Rendez-vous
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
                Prestations
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
            <b>Refaire le site du salon</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-909d41ec.svg" alt="" width={10} height={10} />
            <b>Prendre les rendez-vous en ligne</b>
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
      <div className="capt">Le salon, avant le premier rendez-vous</div>
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
          <h3>Un agenda qui se remplit</h3>
          <p>Vos clients réservent en ligne, à toute heure, sans appeler pendant que vous coupez.</p>
        </div>
        <div className="oc">
          <h3>Des prestations claires</h3>
          <p>Coupes, couleurs, soins : les durées affichées et mises à jour par vous.</p>
        </div>
        <div className="oc">
          <h3>Moins de rendez-vous oubliés</h3>
          <p>Un rappel envoyé automatiquement la veille.</p>
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
                <div className="ul-h">Coupe + brushing · 45 min</div>
                <div className="rs-s sl-g">
                  <span className="off">9:30</span>
                  <span className="">10:15</span>
                  <span className="on">11:00</span>
                  <span className="off">14:00</span>
                  <span className="">15:30</span>
                  <span className="">16:15</span>
                </div>
                <div className="shop-cta">Confirmer le rendez-vous</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Prise de rendez-vous</h3>
            <p>Prestation, coiffeur, créneau : en trois touches.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Prestations</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Coupe femme</span>
                  <b>45 min</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Couleur</span>
                  <b>1 h 30</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Barbe</span>
                  <b>20 min</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Prestations</h3>
            <p>Vos services et leurs durées, mis à jour par vous.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="u-bare um">
                <div className="msg msg-l">
                  <b>Votre salon</b>Rappel : rendez-vous demain à 11 h.
                </div>
                <div className="msg msg-r">
                  <b>Cliente</b>Merci, à demain !
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Rappels automatiques</h3>
            <p>Un SMS ou un e-mail la veille du rendez-vous.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="win u-win">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">votre-salon.fr</span>
                  <span className="win-sp" />
                </div>
                <div className="win-body">
                  <div className="wire" style={{ border: 'none', padding: '0' }}>
                    <i style={{ width: '70%' }} />
                    <i style={{ width: '45%' }} />
                    <i className="blk" />
                    <i style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Galerie</h3>
            <p>Vos réalisations et l’ambiance du salon en photos.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="gbp">
                <div className="gbp-n">Votre salon</div>
                <div className="gbp-m">Coiffeur · Ouvert · ferme à 19 h</div>
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
            <p>Horaires et lien de réservation sur Google.</p>
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
                  <span>coiffeur bordeaux chartrons</span>
                </div>
                <div className="serp-r">
                  <span className="serp-u">votre-salon.fr</span>
                  <b>Salon de coiffure aux Chartrons — Bordeaux</b>
                  <span className="serp-d">Coupes, couleurs et soins. Rendez-vous en ligne.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>SEO local</h3>
            <p>Être trouvé sur « coiffeur + votre quartier ».</p>
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
              <span>Combien coûte un site pour un salon ?</span>
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
              prix dépend du nombre de pages et des fonctionnalités (prise de rendez-vous, prestations,
              rappels).
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
              <span>Pourrai-je modifier mes prestations et mes horaires moi-même ?</span>
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
              Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Prestations,
              horaires, photos et actualités se modifient sans connaissances techniques.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Pouvez-vous connecter notre logiciel de rendez-vous ?</span>
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
            Et si votre site<span className="serif">remplissait votre agenda ?</span>
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
      <LesExpertisesMobilisees3 />
      <LesAutresSecteurs />
      <QuestionsFrequentes />
      <GCta />
    </section>
  )
}
