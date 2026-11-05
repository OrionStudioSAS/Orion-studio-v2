import { Link, NavLink, useLocation } from 'react-router-dom'

const navClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'on' : '')

export function Nav() {
  const { pathname } = useLocation()
  return (
    <header className="nav">
      <Link to="/" className="logo">
        <img className="pxsvg logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
        <img className="pxsvg logo-w" src="/px/logo-w-ad3e722d.svg" alt="" width={151} height={21} />
      </Link>
      <nav className="nav-links">
        <a data-mm="exp">
          Expertises
          <svg
            className="chev"
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 0.5L4 4L7.5 0.5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </a>
        <a className={pathname.startsWith('/pour-qui') ? 'on' : ''} data-mm="who">
          Pour qui ?
          <svg
            className="chev"
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 0.5L4 4L7.5 0.5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </a>
        <NavLink to="/realisations" className={navClass}>
          Réalisations
        </NavLink>
        <NavLink to="/le-studio" className={navClass}>
          Le studio
        </NavLink>
        <NavLink to="/ressources" className={navClass}>
          Ressources
        </NavLink>
      </nav>
      <div className="nav-r">
        <span className="lang">
          <b>FR</b> / EN
        </span>
        <a className="btn btn-ghost btn-s">Analyser mon site</a>{' '}
        <a className="btn btn-ink btn-s">
          Démarrer un projet <span className="kbd">P</span>
        </a>
      </div>
      <div className="mm-live" data-panel="exp">
        <div className="mm">
          <div className="mm-in">
            <div className="mm-col">
              <div className="mm-k">Web & développement</div>
              <Link to="/expertises/site-internet" className="mm-it" data-exp="site-internet">
                <img className="pxsvg picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
                <div>
                  <b>Site internet</b>
                  <span>
                    Vitrine, dynamique ou concept : le site qui correspond à ce que vous devez faire en ligne.
                  </span>
                </div>
              </Link>
              <div className="mm-subs">
                <Link to="/expertises/site-vitrine" className="mm-sub" data-exp="site-vitrine">
                  Site vitrine
                </Link>
                <Link to="/expertises/site-dynamique" className="mm-sub" data-exp="site-dynamique">
                  Site dynamique
                </Link>
                <Link to="/expertises/site-concept" className="mm-sub" data-exp="site-concept">
                  Site concept
                </Link>
              </div>
              <Link
                to="/expertises/developpement-applications"
                className="mm-it"
                data-exp="developpement-applications"
              >
                <img className="pxsvg picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
                <div>
                  <b>Développement d’applications</b>
                  <span>Applications web, espaces clients, outils métiers et SaaS.</span>
                </div>
              </Link>
              <Link to="/expertises/automatisations" className="mm-it" data-exp="automatisations">
                <img className="pxsvg picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
                <div>
                  <b>Automatisations</b>
                  <span>Formulaires, CRM, devis, relances : vos tâches répétitives, automatisées.</span>
                </div>
              </Link>
            </div>
            <div className="mm-col">
              <div className="mm-k">Marketing digital</div>
              <Link to="/expertises/seo" className="mm-it" data-exp="seo">
                <img className="pxsvg picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
                <div>
                  <b>SEO</b>
                  <span>Audit, technique et contenus pour remonter sur Google.</span>
                </div>
              </Link>
              <Link to="/expertises/geo" className="mm-it" data-exp="geo">
                <img className="pxsvg picon" src="/px/picon-84c912e7.svg" alt="" width={20} height={20} />
                <div>
                  <b>GEO</b>
                  <span>Être cité par ChatGPT, Perplexity et les réponses IA de Google.</span>
                </div>
              </Link>
              <Link to="/expertises/google-ads" className="mm-it" data-exp="google-ads">
                <img className="pxsvg picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
                <div>
                  <b>Google Ads</b>
                  <span>Campagnes Search et Performance Max, pilotées au nombre de contacts.</span>
                </div>
              </Link>
            </div>
            <Link to="/ressources/etre-cite-par-chatgpt-perplexity" className="mm-feat">
              <img src="/images/637d3d958bb9f3.png" alt="" />
              <div className="mm-fk">Guide · 11 min</div>
              <b>Être cité par ChatGPT et Perplexity : ce qui marche vraiment</b>
              <span className="lnk">Lire le guide</span>
            </Link>
          </div>
          <div className="mm-foot">
            <span>
              Pas sûr de ce qu’il vous faut ? On analyse votre site gratuitement et on vous envoie une
              maquette.
            </span>
            <a className="btn btn-acc btn-s">Analyser mon site</a>
          </div>
        </div>
      </div>
      <div className="mm-live" data-panel="who">
        <div className="mm">
          <div className="mm-in">
            <div className="mm-col mm-col-2">
              <div className="mm-k">Pour qui ?</div>
              <div className="mm-g3">
                <Link to="/pour-qui/tpe-pme" className="mm-it mm-it-w" data-sector="pme">
                  <img className="pxsvg picon" src="/px/picon-4780f153.svg" alt="" width={20} height={20} />
                  <div>
                    <b>TPE & PME</b>
                    <span>Un site qui fait venir des demandes, sans y passer vos soirées.</span>
                    <small>
                      Ex.{' '}
                      <span className="mm-ex" data-proj="housses-taxi">
                        Housses Taxi
                      </span>
                    </small>
                  </div>
                </Link>
                <Link to="/pour-qui/independants" className="mm-it mm-it-w" data-sector="indep">
                  <img className="pxsvg picon" src="/px/picon-00814f13.svg" alt="" width={20} height={20} />
                  <div>
                    <b>Indépendants & micro-entrepreneurs</b>
                    <span>Une présence pro, rapide à lancer, avec un budget maîtrisé.</span>
                    <small>
                      Ex.{' '}
                      <span className="mm-ex" data-proj="dathy">
                        DATHY
                      </span>
                    </small>
                  </div>
                </Link>
                <Link to="/pour-qui/marques-e-commerce" className="mm-it mm-it-w" data-sector="shop">
                  <img className="pxsvg picon" src="/px/picon-808b4de1.svg" alt="" width={20} height={20} />
                  <div>
                    <b>Marques & e-commerçants</b>
                    <span>Des boutiques Shopify qui vendent, et les outils pour grandir.</span>
                    <small>
                      Ex.{' '}
                      <span className="mm-ex" data-proj="les-bocaux-du-vexin">
                        Les Bocaux du Vexin
                      </span>
                    </small>
                  </div>
                </Link>
                <Link to="/pour-qui/start-up" className="mm-it mm-it-w" data-sector="startup">
                  <img className="pxsvg picon" src="/px/picon-f0c33abd.svg" alt="" width={20} height={20} />
                  <div>
                    <b>Start-up</b>
                    <span>Un site qui fait comprendre votre produit et réserver des démos.</span>
                    <small>
                      Ex.{' '}
                      <span className="mm-ex" data-proj="swing-call">
                        Swing Call
                      </span>
                    </small>
                  </div>
                </Link>
              </div>
              <div className="mm-k mm-k2">Par secteur</div>
              <div className="sec-ring">
                <Link to="/pour-qui/golfs" className="sec-st" data-sector="golf" role="link" tabIndex={0}>
                  <span className="sec-av">
                    <span>
                      <img
                        className="pxsvg"
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
                        className="pxsvg"
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
                <Link
                  to="/pour-qui/associations"
                  className="sec-st"
                  data-sector="asso"
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
                  to="/pour-qui/artisans"
                  className="sec-st"
                  data-sector="artisan"
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
                  to="/pour-qui/hotels-gites"
                  className="sec-st"
                  data-sector="hotel"
                  role="link"
                  tabIndex={0}
                >
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
                <Link
                  to="/pour-qui/coiffeurs"
                  className="sec-st"
                  data-sector="coiffure"
                  role="link"
                  tabIndex={0}
                >
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
                <Link
                  to="/pour-qui/immobilier"
                  className="sec-st"
                  data-sector="immo"
                  role="link"
                  tabIndex={0}
                >
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
                <Link
                  to="/pour-qui"
                  className="sec-st sec-all mm-all"
                  role="link"
                  tabIndex={0}
                  aria-label="Voir tous les secteurs (8)"
                >
                  <span className="sec-av">
                    <span className="sec-mos">
                      <i>
                        <img
                          className="pxsvg"
                          src="/px/art-e0dda6d2.svg"
                          alt=""
                          style={{ width: '100%', height: '100%' }}
                        />
                      </i>
                      <i>
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
                      </i>
                      <i>
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
                      </i>
                      <i>
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
                      </i>
                    </span>
                    <em>+4</em>
                  </span>
                  <b>Tous les secteurs</b>
                </Link>
              </div>
            </div>
            <Link to="/realisations/chateau-larc" className="mm-feat">
              <img src="/images/516331ca28cc7a.png" alt="" />
              <div className="mm-fk">Étude de cas · Golf</div>
              <b>Château l’Arc Golf Club : un site et un back-office pour remplir les départs</b>
              <span className="lnk">Voir le projet</span>
            </Link>
          </div>
          <div className="mm-foot">
            <span>Votre secteur n’est pas dans la liste ? On s’adapte : parlons de votre projet.</span>
            <a className="btn btn-acc btn-s">Parlons de votre projet</a>
          </div>
        </div>
      </div>
      <i className="nav-prog" />
    </header>
  )
}
