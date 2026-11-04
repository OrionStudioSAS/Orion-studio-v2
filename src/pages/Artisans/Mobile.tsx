import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoCommentOnTravaille2 } from '../../components/shared/MoCommentOnTravaille2'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/pour-qui">
          Pour qui ? / <b>Artisans</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Site internet pour artisans<span className="serif">qui remplit votre carnet de commandes.</span>
      </h1>
      <p className="mo-lead">
        Plombiers, électriciens, menuisiers, peintres, paysagistes : vos chantiers en photos, une demande de
        devis claire et un site trouvé sur « votre métier + votre ville ».
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
          src="/images/b1520d181763a1.png"
          alt="Le camion d’un artisan devant un chantier, en pixel art"
        />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="px omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde le site
            <br />
            de votre entreprise ?
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
              Devis
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
              Réalisations
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
            <img className="px picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Refaire mon site</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-909d41ec.svg" alt="" width={10} height={10} />
            <b>Recevoir des demandes de devis</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Remonter sur Google</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-34cc7426.svg" alt="" width={10} height={10} />
            <b>Lancer Google Ads</b>
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
      <div className="mo-capt">Le camion, avant le chantier</div>
    </div>
  )
}

function CeQueVotreSite() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce que votre site<span className="serif">doit faire pour vous.</span>
        </h2>
      </div>
      <div className="sxm-ocs">
        <div className="sxm-oc">
          <h3>Des demandes de devis complètes</h3>
          <p>Type de travaux, photos, adresse, délai : vous rappelez en sachant déjà de quoi il s’agit.</p>
        </div>
        <div className="sxm-oc">
          <h3>Vos chantiers comme preuve</h3>
          <p>Des réalisations avant / après, ajoutées depuis votre téléphone en sortant du chantier.</p>
        </div>
        <div className="sxm-oc">
          <h3>Trouvé dans votre zone</h3>
          <p>Une page par service et par secteur d’intervention, pensée pour Google.</p>
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
          Ce qu’on livre<span className="serif">concrètement.</span>
        </h2>
        <p className="mo-lead">
          Chaque projet assemble les briques dont vous avez besoin, pas une de plus. Les écrans ci-dessous
          sont des exemples.
        </p>
      </div>
      <div className="sxm-cards">
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="uf">
              <div className="ul-h">Demande de devis</div>
              <div className="uf-g">
                <label className="fld fld-f">
                  <span>Travaux</span>
                  <b>Salle de bains</b>
                </label>
                <label className="fld">
                  <span>Ville</span>
                  <b>Nantes</b>
                </label>
                <label className="fld">
                  <span>Délai</span>
                  <b>Printemps</b>
                </label>
                <label className="fld">
                  <span>Photos</span>
                  <b>3 ajoutées</b>
                </label>
              </div>
              <div className="shop-cta">Envoyer ma demande</div>
            </div>
          </div>
          <h3>Demande de devis</h3>
          <p>Les bonnes questions dès la première demande.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Réalisations</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Salle de bains, Nantes</span>
                <b>Avant / après</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Terrasse bois, Rezé</span>
                <b>Avant / après</b>
              </div>
              <div className="ul-r">
                <i className="sq" />
                <span>Cuisine, Saint-Herblain</span>
                <b>Photos</b>
              </div>
            </div>
          </div>
          <h3>Réalisations</h3>
          <p>Vos chantiers en photos, classés par type de travaux.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
                <span>plombier saint-herblain</span>
              </div>
              <div className="serp-r">
                <span className="serp-u">votre-entreprise.fr</span>
                <b>Plombier à Saint-Herblain — Installation et dépannage</b>
                <span className="serp-d">
                  Salles de bains, chauffage et dépannage dans l’agglomération nantaise.
                </span>
              </div>
            </div>
          </div>
          <h3>Zone d’intervention</h3>
          <p>Les villes que vous couvrez, chacune avec sa page.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="gbp">
              <div className="gbp-n">Votre entreprise</div>
              <div className="gbp-m">Plombier · Ouvert · ferme à 18 h</div>
              <div className="gbp-b">
                <span>Itinéraire</span>
                <span>Appeler</span>
                <span>Site web</span>
              </div>
            </div>
          </div>
          <h3>Fiche Google</h3>
          <p>Votre fiche à jour, vos photos de chantier en avant.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="auto u-bare">
              <div className="au-n">
                <b>Demande de devis</b>
                <span>Reçue</span>
              </div>
              <span className="au-l" />
              <div className="au-n">
                <b>E-mail + agenda</b>
                <span>Rappel créé</span>
              </div>
              <span className="au-l" />
              <div className="au-n au-on">
                <b>Relance J+3</b>
                <span>Automatique</span>
              </div>
            </div>
          </div>
          <h3>Automatisations</h3>
          <p>Chaque demande dans votre boîte mail et votre agenda, sans ressaisie.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="adp u-bare">
              <span className="adp-k">Sponsorisé</span>
              <span className="serp-u">votre-entreprise.fr</span>
              <b>Plombier à Nantes — Salle de bains et chauffage</b>
              <span className="serp-d">Installation, rénovation et dépannage.</span>
              <div className="adp-s">
                <span>Demander un devis</span>
                <span>Nos réalisations</span>
                <span>Contact</span>
              </div>
            </div>
          </div>
          <h3>Google Ads</h3>
          <p>Des annonces locales quand vous voulez du travail rapidement.</p>
        </article>
      </div>
    </section>
  )
}

function LesAutresSecteurs() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Les autres<span className="serif">secteurs.</span>
        </h2>
      </div>
      <div className="sec-ring sx-others mo-sec-ring">
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
      <Link to="/pour-qui" className="lnk sx-alllnk sxm-alllnk">
        Voir tous les secteurs
      </Link>
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
            <span>Combien coûte un site pour un artisan ?</span>
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
            dépend du nombre de pages et des fonctionnalités (demande de devis, réalisations, pages par
            ville).
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien de temps pour être en ligne ?</span>
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
            Des fonctionnalités sur mesure demandent davantage : le planning est fixé dans le devis.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pourrai-je modifier mes réalisations moi-même ?</span>
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
            Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Réalisations, photos,
            services et actualités se modifient sans connaissances techniques.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pouvez-vous connecter notre logiciel de devis ou notre agenda ?</span>
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
            Oui, si l’outil le permet : la connexion (API, widget ou export) est vérifiée au cadrage, avant le
            devis.
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
          Et si votre site<span className="serif">remplissait votre carnet de commandes ?</span>
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
          <img className="px logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
          <img className="px logo-w" src="/px/logo-w-438c9e6d.svg" alt="" width={151} height={21} />
        </span>
        <p>
          Studio de design et de développement web basé à Paris. Sites sur-mesure, e-commerce, applications et
          visibilité.
        </p>
        <div className="mo-fcols">
          <div className="mo-fc">
            <div className="fc-k">Expertises</div>
            <Link to="/expertises/site-internet">Site internet</Link>
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
            <Link to="/le-studio">Le studio</Link>
            <a>Méthode</a>
            <Link to="/realisations/orion-admin">Orion Admin</Link>
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
            className="px bigword"
            src="/px/bigword-a5329b0d.svg"
            alt=""
            width={416}
            height={40}
            style={{ left: '-13px', top: '132px', opacity: '0.16' }}
          />
          <i className="betel" style={{ left: '193px', top: '88px' }} />
          <span className="orio" style={{ left: '91px', top: '34px' }} title="Orio et Bételgeuse">
            <span className="orio-in">
              <img className="px" src="/px/art-c8610941.svg" alt="" width={88} height={92} />
            </span>
          </span>
        </div>
        <div className="mo-legal">
          <div className="ft-lang">
            <span className="on">Français</span>
            <span>English</span>
          </div>
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
      <CeQueVotreSite />
      <CeQuOnLivre />
      <MoCommentOnTravaille2 />
      <LesAutresSecteurs />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
