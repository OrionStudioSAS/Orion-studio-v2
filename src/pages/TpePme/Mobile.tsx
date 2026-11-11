import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoCommentOnTravaille2 } from '../../components/shared/MoCommentOnTravaille2'
import { MoParSecteurDesPages2 } from '../../components/shared/MoParSecteurDesPages2'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/pour-qui">
          Pour qui ? / <b>TPE & PME</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Site internet pour TPE et PME<span className="serif">qui fait venir des demandes.</span>
      </h1>
      <p className="mo-lead">
        Artisans, cabinets, commerces, entreprises de services : un site professionnel, rapide et bien
        référencé, que vous mettez à jour vous-même, sans y passer vos soirées.
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
          src="/images/aa6530c5648e60.png"
          alt="Un atelier de menuiserie ouvert sur une rue de village, en pixel art"
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
              Demandes
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
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Image
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
            <b>Refaire mon site</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-909d41ec.svg" alt="" width={10} height={10} />
            <b>Recevoir des demandes de devis</b>
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
      <div className="mo-capt">L’atelier ouvre ses portes, 8 h</div>
    </div>
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
        <div className="sxm-oc">
          <h3>Plus de demandes qualifiées</h3>
          <p>Un formulaire de devis qui pose les bonnes questions avant même le premier appel.</p>
        </div>
        <div className="sxm-oc">
          <h3>Une image professionnelle</h3>
          <p>Un site qui inspire confiance face à vos concurrents, sur ordinateur comme sur téléphone.</p>
        </div>
        <div className="sxm-oc">
          <h3>Du temps gagné</h3>
          <p>Des demandes triées, des relances automatiques et un site que vous modifiez seul.</p>
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
                <span className="win-title">votre-entreprise.fr</span>
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
          <h3>Site vitrine sur mesure</h3>
          <p>Vos services, vos réalisations et vos avis, présentés clairement.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="uf">
              <div className="ul-h">Demande de devis</div>
              <div className="uf-g">
                <label className="fld fld-f">
                  <span>Type de travaux</span>
                  <b>Fenêtres</b>
                </label>
                <label className="fld">
                  <span>Ville</span>
                  <b>Nantes</b>
                </label>
                <label className="fld">
                  <span>Délai souhaité</span>
                  <b>Printemps</b>
                </label>
                <label className="fld">
                  <span>Budget</span>
                  <b>À préciser</b>
                </label>
              </div>
              <div className="shop-cta">Envoyer ma demande</div>
            </div>
          </div>
          <h3>Formulaire de devis</h3>
          <p>Les bonnes questions posées dès la première demande.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="gbp">
              <div className="gbp-n">Votre entreprise</div>
              <div className="gbp-m">Artisan · Nantes · Ouvert jusqu’à 18 h</div>
              <div className="gbp-b">
                <span>Itinéraire</span>
                <span>Appeler</span>
                <span>Site web</span>
              </div>
            </div>
          </div>
          <h3>Fiche Google & avis</h3>
          <p>Votre fiche optimisée et vos avis mis en avant sur le site.</p>
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
                <span>plombier nantes</span>
              </div>
              <div className="serp-r">
                <span className="serp-u">votre-entreprise.fr</span>
                <b>Plombier à Nantes — Dépannage et installation</b>
                <span className="serp-d">Intervention rapide, devis gratuit, avis clients vérifiés.</span>
              </div>
            </div>
          </div>
          <h3>SEO local</h3>
          <p>Être trouvé sur « votre métier + votre ville ».</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="auto u-bare">
              <div className="au-n">
                <b>Formulaire de devis</b>
                <span>Nouvelle demande</span>
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
          <h3>Automatisations simples</h3>
          <p>Chaque demande dans votre boîte mail et votre agenda, sans ressaisie.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="u-bare um">
              <div className="msg msg-r">
                <b>Vous</b>Pouvez-vous ajouter notre nouveau chantier ?
              </div>
              <div className="msg msg-l">
                <b>Théo</b>C’est en ligne, avec les photos.
              </div>
            </div>
          </div>
          <h3>Suivi après lancement</h3>
          <p>Un interlocuteur qui répond, et des évolutions quand vous en avez besoin.</p>
        </article>
      </div>
    </section>
  )
}

function CasClientHoussesTaxi() {
  return (
    <section className="mo-sec" id="m-cas-ht">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Cas client<span className="serif">Housses Taxi.</span>
        </h2>
        <p className="mo-lead">
          Un atelier de Pierrelaye, dans le Val-d’Oise, qui fabrique des housses de sièges sur mesure pour les
          taxis, les VTC, les utilitaires et les vans, posées sur place par ses installateurs.
        </p>
      </div>
      <div className="mb-phones">
        <img src="/images/afaca6e7e387d4.jpg" alt="Le site Housses Taxi sur mobile" />
        <img src="/images/309c514cdd4e40.jpg" alt="Le site Housses Taxi sur mobile" />
      </div>
      <div className="mc-list mg-case rf-mlist">
        <div className="case-k">Ce que fait le site</div>
        <ul>
          <li>Présentation des housses par véhicule : taxi, VTC, utilitaire, van</li>
          <li>Le parcours client en trois étapes, du rendez-vous à la pose</li>
          <li>Prise de rendez-vous et coordonnées de l’atelier sur chaque page</li>
          <li>Pages « Notre histoire », « Nos marchés » et FAQ</li>
          <li>Version mobile soignée, pour les chauffeurs</li>
        </ul>
      </div>
      <a
        className="btn btn-ink mo-btn mo-btn-full rf-mbtn"
        href="https://www.houssestaxi.com/"
        target="_blank"
        rel="noopener"
      >
        Voir le site
      </a>{' '}
      <Link
        to="/realisations/housses-taxi"
        className="btn btn-ink mo-btn mo-btn-full rf-mbtn"
        data-proj="housses-taxi"
      >
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
            <span>Combien coûte un site pour une TPE ou une PME ?</span>
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
            Le prix dépend du nombre de pages et des fonctionnalités (devis en ligne, prise de rendez-vous,
            espace client). On vous remet un devis ferme après un premier échange, sans engagement.
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
            <span>Le SEO est-il inclus dans la création de site ?</span>
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
            Oui. Un SEO complet (technique, contenus, suivi des positions) et un GEO complet (réponses claires, données structurées, suivi dans les IA) sont inclus dans le devis de chacun de nos clients.
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
            <span>Proposez-vous un suivi après la mise en ligne ?</span>
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
          Votre site devrait vous apporter des clients.<span className="serif">Vérifions s’il le fait.</span>
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
            <Link to="/expertises/sea">SEA</Link>
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
      <CeQueVotreSite />
      <CeQuOnLivre />
      <CasClientHoussesTaxi />
      <MoCommentOnTravaille2 />
      <MoParSecteurDesPages2 />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
