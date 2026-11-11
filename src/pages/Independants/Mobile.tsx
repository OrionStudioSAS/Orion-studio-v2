import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoCommentOnTravaille2 } from '../../components/shared/MoCommentOnTravaille2'
import { MoParSecteurDesPages2 } from '../../components/shared/MoParSecteurDesPages2'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/pour-qui">
          Pour qui ? / <b>Indépendants</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Site internet pour indépendants<span className="serif">lancé vite, sans rogner sur la qualité.</span>
      </h1>
      <p className="mo-lead">
        Consultants, coachs, créatifs, artisans, professions libérales : une présence professionnelle, claire
        et bien référencée, lancée rapidement avec un budget maîtrisé.
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
          src="/images/7c474a641d75cb.png"
          alt="Un bureau lumineux ouvert sur la mer, en pixel art"
        />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="pxsvg omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde votre site
            <br />
            ensemble ?
          </span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              https://www.votre-nom.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site</span>
          </div>
          <div className="mo-crit">
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Image
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
              Rendez-vous
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
            <b>Créer mon site</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Être trouvé sur Google</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-909d41ec.svg" alt="" width={10} height={10} />
            <b>Prendre des rendez-vous en ligne</b>
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
      <div className="mo-capt">Le bureau face à la mer, 16 h</div>
    </div>
  )
}

function CeQuIlVous() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce qu’il vous faut,<span className="serif">et rien de plus.</span>
        </h2>
      </div>
      <div className="sxm-ocs">
        <div className="sxm-oc">
          <h3>En ligne rapidement</h3>
          <p>
            Une méthode resserrée, des choix guidés : votre site est prêt sans des semaines d’allers-retours.
          </p>
        </div>
        <div className="sxm-oc">
          <h3>Crédible dès le premier clic</h3>
          <p>Une vraie identité, de vrais textes, une présentation qui vous ressemble.</p>
        </div>
        <div className="sxm-oc">
          <h3>Facile à faire vivre</h3>
          <p>Vous ajoutez une réalisation ou un article en quelques minutes.</p>
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
            <div className="win u-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">votre-nom.fr</span>
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
          <h3>Accueil & services</h3>
          <p>Qui vous êtes, ce que vous proposez, comment vous contacter.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ui-sl">
              <div className="ul-h">Premier échange · 30 min</div>
              <div className="rs-s sl-g">
                <span className="off">Lun 9:00</span>
                <span className="">Mar 10:30</span>
                <span className="on">Mar 14:00</span>
                <span className="">Jeu 11:00</span>
              </div>
              <div className="shop-cta">Confirmer le rendez-vous</div>
            </div>
          </div>
          <h3>Prise de rendez-vous</h3>
          <p>Vos clients réservent un créneau directement depuis le site.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="uth">
              <img src="/images/1547cebce5d492.png" alt="" />
              <img src="/images/204444271e8f06.png" alt="" />
              <img src="/images/b665a1ab308a17.png" alt="" />
            </div>
          </div>
          <h3>Portfolio & réalisations</h3>
          <p>Vos projets mis en valeur, page par page.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="gbp">
              <div className="gbp-n">Votre nom</div>
              <div className="gbp-m">Consultant · Nantes · Sur rendez-vous</div>
              <div className="gbp-b">
                <span>Itinéraire</span>
                <span>Appeler</span>
                <span>Site web</span>
              </div>
            </div>
          </div>
          <h3>Fiche Google</h3>
          <p>Visible sur Google Maps, avec vos avis clients.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="uf">
              <div className="ul-h">Parlons de votre projet</div>
              <div className="uf-g">
                <label className="fld fld-f">
                  <span>Nom</span>
                  <b>Claire Arlette</b>
                </label>
                <label className="fld">
                  <span>E-mail</span>
                  <b>claire@exemple.fr</b>
                </label>
                <label className="fld">
                  <span>Besoin</span>
                  <b>Accompagnement</b>
                </label>
                <label className="fld">
                  <span>Délai</span>
                  <b>Ce trimestre</b>
                </label>
              </div>
              <div className="shop-cta">Envoyer</div>
            </div>
          </div>
          <h3>Formulaire de contact</h3>
          <p>Court, clair, avec les bonnes questions.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Mise en route</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>votre-nom.fr</span>
                <b>Réservé</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>contact@votre-nom.fr</span>
                <b>Actif</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Certificat HTTPS</span>
                <b>Actif</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Mentions légales</span>
                <b>En ligne</b>
              </div>
            </div>
          </div>
          <h3>Domaine & e-mail pro</h3>
          <p>Votre nom de domaine et une adresse e-mail à votre nom.</p>
        </article>
      </div>
    </section>
  )
}

function CasClientDathy() {
  return (
    <section className="mo-sec" id="m-cas-dathy">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Cas client<span className="serif">DATHY.</span>
        </h2>
        <p className="mo-lead">
          Deux associés, plus de 30 ans de terrain chacun, qui accompagnent communes et maîtres d’ouvrage en
          bâtiment et travaux publics, dans le Val-d’Oise et les Yvelines.
        </p>
      </div>
      <div className="mb-phones">
        <img src="/images/5267a9059c97a6.jpg" alt="Le site DATHY sur mobile" />
        <img src="/images/a29ba2169ad980.jpg" alt="Le site DATHY sur mobile" />
      </div>
      <div className="mc-list mg-case rf-mlist">
        <div className="case-k">Ce que fait le site</div>
        <ul>
          <li>
            Une direction artistique « table à dessin » : planches au graphite et cartouche de plan en pied de
            page
          </li>
          <li>
            La méthode en six étapes, de l’étude à la réception, avec un exemple de livrable à chaque étape
          </li>
          <li>Une page par domaine : voirie, réseaux, bâtiment, espaces extérieurs</li>
          <li>Un blog et une FAQ pour répondre aux questions des communes</li>
          <li>Méga-menus et version mobile soignée</li>
        </ul>
      </div>
      <Link to="/realisations/dathy" className="btn btn-ink mo-btn mo-btn-full rf-mbtn" data-proj="dathy">
        Voir le projet
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
            <span>Quel budget prévoir pour un site d’indépendant ?</span>
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
            On propose une approche resserrée pour les indépendants : moins de pages, des choix guidés, un
            périmètre clair. Le prix est fixé au devis après un premier échange de 30 minutes.
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
            <span>Serai-je propriétaire de mon site et de mon nom de domaine ?</span>
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
            Oui. Le nom de domaine, les contenus et les accès sont à votre nom ; les conditions précises sur
            le code figurent dans le devis.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pourrai-je modifier mon site moi-même ?</span>
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
            Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Textes, images, pages
            et actualités se modifient sans connaissances techniques.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pourrai-je faire évoluer mon site plus tard ?</span>
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
            On reste disponibles pour les corrections et les questions. Vous pouvez ensuite choisir un suivi
            régulier (évolutions, SEO, maintenance) ou nous solliciter ponctuellement.
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
          Votre activité mérite mieux qu’un profil sur une plateforme.
          <span className="serif">Lançons votre site.</span>
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
          Studio de design et de développement web entre Paris et Nantes. Sites sur-mesure, e-commerce,
          applications et visibilité.
        </p>
        <div className="mo-fcols">
          <div className="mo-fc">
            <div className="fc-k">Expertises</div>
            <Link to="/expertises/site-internet">Site internet</Link>
            <Link to="/expertises/site-vitrine">Site vitrine</Link>
            <Link to="/expertises/site-dynamique">Site dynamique</Link>
            <Link to="/expertises/site-concept">Site concept</Link>
            <Link to="/expertises/e-commerce">E-commerce</Link>
            <Link to="/expertises/developpement-applications">Développement d’applications</Link>
            <Link to="/expertises/saas">SaaS</Link>
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
              <b>Nantes</b>
              <span>6 rue Merle, 06400</span>
            </div>
            <a>Itinéraire</a>
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
          <img
            src="/images/bf5a322d7f4ded.png"
            alt="Le ciel de Nantes et la constellation d’Orion, en pixels"
          />
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
      <CeQuIlVous />
      <CeQuOnLivre />
      <CasClientDathy />
      <MoCommentOnTravaille2 />
      <MoParSecteurDesPages2 />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
