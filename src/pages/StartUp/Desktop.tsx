import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { CommentOnTravaille } from '../../components/shared/CommentOnTravaille'
import { IlsNousOntFait } from '../../components/shared/IlsNousOntFait'
import { ParSecteurDesPages } from '../../components/shared/ParSecteurDesPages'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/pour-qui">
          Pour qui ? / <b>Start-up</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Site internet pour start-up</span>
        <span className="serif">qui fait comprendre votre produit.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Start-up et jeunes entreprises innovantes : un site qui explique votre produit en quelques secondes,
          fait réserver des démos, et suit le rythme de vos versions. On développe aussi le produit, si vous
          en avez besoin.
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
        <img src="/images/fa463d74363266.png" alt="Un loft de start-up à Paris, en pixel art" />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="pxsvg omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde le site de votre start-up ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.votre-startup.io
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
                Message
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
                Démo
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
                Conversion
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
            <b>Lancer mon site</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-b6521826.svg" alt="" width={10} height={10} />
            <b>Créer mon produit</b>
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
      <div className="capt">Le loft, la veille du lancement</div>
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
          <h3>Un produit compris en quelques secondes</h3>
          <p>
            Une promesse claire, de vrais écrans du produit et une démo : vos visiteurs comprennent ce que
            vous faites avant de quitter la page.
          </p>
        </div>
        <div className="oc">
          <h3>Des démos réservées, pas des visites perdues</h3>
          <p>
            Réservation de démo, essai ou liste d’attente : chaque page mène à une action que vous pouvez
            mesurer.
          </p>
        </div>
        <div className="oc">
          <h3>Un site qui suit vos versions</h3>
          <p>
            Fonctionnalités, tarifs, cas clients : vous les mettez à jour vous-même, au rythme de votre
            produit.
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
              <div className="win u-win">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">votre-startup.io</span>
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
            <h3>Page de lancement</h3>
            <p>La promesse, le produit en images et l’appel à l’action, sans détour.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ui-sl">
                <div className="ul-h">Démo · 30 min</div>
                <div className="rs-s sl-g">
                  <span className="off">Lun 10:00</span>
                  <span className="">Mar 11:00</span>
                  <span className="on">Mar 15:00</span>
                  <span className="off">Jeu 9:30</span>
                </div>
                <div className="shop-cta">Réserver la démo</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Réservation de démo</h3>
            <p>Un créneau choisi en deux clics, directement dans votre agenda.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="uf">
                <div className="ul-h">Estimer mes gains</div>
                <div className="uf-g">
                  <label className="fld fld-f">
                    <span>Équipe</span>
                    <b>8 personnes</b>
                  </label>
                  <label className="fld">
                    <span>Usage</span>
                    <b>Quotidien</b>
                  </label>
                  <label className="fld">
                    <span>Secteur</span>
                    <b>Services</b>
                  </label>
                  <label className="fld">
                    <span>Résultat</span>
                    <b>À l’écran</b>
                  </label>
                </div>
                <div className="shop-cta">Voir l’estimation</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Simulateur de valeur</h3>
            <p>Le visiteur estime lui-même ce que votre produit lui apporte.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="auto u-bare">
                <div className="au-n">
                  <b>Inscription</b>
                  <span>Nouveau compte</span>
                </div>
                <span className="au-l" />
                <div className="au-n">
                  <b>Prise en main</b>
                  <span>Guidée</span>
                </div>
                <span className="au-l" />
                <div className="au-n au-on">
                  <b>Tableau de bord</b>
                  <span>Prêt</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Le produit lui-même</h3>
            <p>Application web, espace client, tableau de bord et intégrations, développés sur mesure.</p>
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
                  <span>logiciel de planification équipe</span>
                </div>
                <div className="serp-r">
                  <span className="serp-u">votre-startup.io</span>
                  <b>Planifier son équipe en quelques minutes — Votre start-up</b>
                  <span className="serp-d">Essai et démo en ligne. Intégrations avec vos outils.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>SEO & GEO</h3>
            <p>Être trouvé sur votre catégorie de produit, et cité par les IA.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ub">
                <div className="ul-h">Démos réservées</div>
                <div className="bars">
                  <i style={{ height: '24px' }} />
                  <i style={{ height: '30px' }} />
                  <i style={{ height: '28px' }} />
                  <i style={{ height: '38px' }} />
                  <i style={{ height: '44px' }} />
                  <i style={{ height: '52px' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Mesure et itérations</h3>
            <p>Chaque page mesurée, pour savoir quoi améliorer à la version suivante.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function CasClientSwingCall() {
  return (
    <section className="sec" style={{ padding: '0' }} id="cas-sc">
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Cas client
          <br />
          <span className="serif">Swing Call.</span>
        </h2>
        <p className="lead">
          Une start-up qui donne aux golfs un agent IA téléphonique : il répond aux appels 24 h/24, gère les
          réservations de départs et se synchronise avec le logiciel du club.
        </p>
      </div>
      <div className="mb-case">
        <div className="mb-main">
          <div className="win win-shot">
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
              <img className="shot" src="/images/a4c19bfe3dd683.jpg" alt="Capture du site" />
            </div>
          </div>
        </div>
        <div className="mb-side">
          <figure>
            <div className="win win-shot">
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
                <img className="shot" src="/images/4cf5bf86b9cc95.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>
              L’écosystème : voix, interface joueur, synchronisation avec PrimaGolf, pilotage.
            </figcaption>
          </figure>
          <figure>
            <div className="win win-shot">
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
                <img className="shot" src="/images/963bfca0d8ace4.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>
              Deux produits, un choix clair : tout le standard, ou seulement les appels manqués.
            </figcaption>
          </figure>
          <figure>
            <div className="win win-shot">
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
                <img className="shot" src="/images/aed2fb5d579eb8.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>Une suite compatible avec les outils du club, présentée en un coup d’œil.</figcaption>
          </figure>
        </div>
      </div>
      <div className="case-cols">
        <div>
          <h3>Expliquer une technologie invisible, et faire réserver des démos.</h3>
          <span className="p-tag">Start-up · Site produit · Golf</span>
          <div className="mb-btns">
            <Link to="/realisations/swing-call" className="btn btn-ink" data-proj="swing-call">
              Voir le projet
            </Link>
            <a className="btn btn-ghost" href="https://swingcall.fr/" target="_blank" rel="noopener">
              Voir le site
            </a>
          </div>
        </div>
        <div>
          <div className="case-k">Ce que fait le site</div>
          <ul>
            <li>Une page produit qui raconte l’appel, de la sonnerie au départ du trou n° 1</li>
            <li>Les deux produits présentés côte à côte : agent IA autonome et appels récupérés</li>
            <li>Une démo audio pour entendre l’assistant répondre</li>
            <li>Un calculateur des revenus récupérés sur les appels manqués</li>
            <li>La réservation de démo sur chaque page</li>
          </ul>
        </div>
        <div>
          <div className="case-k">Résultats</div>
          <p>Les chiffres seront publiés avec l’accord du client.</p>
        </div>
      </div>
    </section>
  )
}

function LesExpertisesMobilisees() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '96px' }}>
        <h2 className="h2">Les expertises mobilisées</h2>
      </div>
      <div className="rls">
        <Link to="/expertises/site-internet" className="rl">
          <img className="pxsvg picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <div>
            <b>Site internet</b>
            <span>Sites vitrines et refontes sur mesure.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/developpement-applications" className="rl">
          <img className="pxsvg picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
          <div>
            <b>Développement d’applications</b>
            <span>Applications web, espaces clients, SaaS.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/geo" className="rl">
          <img className="pxsvg picon" src="/px/picon-84c912e7.svg" alt="" width={20} height={20} />
          <div>
            <b>GEO</b>
            <span>Être cité par les IA.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
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
              <span>Combien coûte un site pour une start-up ?</span>
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
              prix dépend du nombre de pages et des fonctionnalités.
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
              <span>Pouvez-vous développer notre produit, pas seulement le site ?</span>
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
              Oui. On développe aussi des applications web sur mesure (Next.js, React) : espaces clients,
              outils métiers et SaaS, en plus du site.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Pourrai-je modifier mon site moi-même ?</span>
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
              Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Textes, images,
              pages et actualités se modifient sans connaissances techniques.
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
            Votre produit mérite<span className="serif">un site à sa hauteur.</span>
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
      <CasClientSwingCall />
      <CommentOnTravaille />
      <IlsNousOntFait />
      <LesExpertisesMobilisees />
      <ParSecteurDesPages />
      <QuestionsFrequentes />
      <GCta />
    </section>
  )
}
