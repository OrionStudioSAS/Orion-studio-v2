import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { IlsNousOntFait } from '../../components/shared/IlsNousOntFait'
import { LesExpertisesMobilisees } from '../../components/shared/LesExpertisesMobilisees'
import { ParSecteurDesPages } from '../../components/shared/ParSecteurDesPages'
import { FooterNantes } from '../../components/shared/FooterNantes'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/pour-qui">
          Pour qui ? / <b>TPE & PME</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Site internet pour TPE et PME</span>
        <span className="serif">qui fait venir des demandes.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Artisans, cabinets, commerces, entreprises de services : un site professionnel, rapide et bien
          référencé, que vous mettez à jour vous-même, sans y passer vos soirées.
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
          src="/images/39a74e2967868d.png"
          alt="Un atelier de menuiserie ouvert sur une rue de village, en pixel art"
        />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="pxsvg omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde votre site ensemble ?</span>
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
                Demandes
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
                Image
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
      <div className="capt">L’atelier ouvre ses portes, 8 h</div>
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
          <span className="serif">doit vous apporter.</span>
        </h2>
      </div>
      <div className="ocs">
        <div className="oc">
          <h3>Plus de demandes qualifiées</h3>
          <p>Un formulaire de devis qui pose les bonnes questions avant même le premier appel.</p>
        </div>
        <div className="oc">
          <h3>Une image professionnelle</h3>
          <p>Un site qui inspire confiance face à vos concurrents, sur ordinateur comme sur téléphone.</p>
        </div>
        <div className="oc">
          <h3>Du temps gagné</h3>
          <p>Des demandes triées, des relances automatiques et un site que vous modifiez seul.</p>
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
          </div>
          <div className="gc-b">
            <h3>Site vitrine sur mesure</h3>
            <p>Vos services, vos réalisations et vos avis, présentés clairement.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
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
          </div>
          <div className="gc-b">
            <h3>Formulaire de devis</h3>
            <p>Les bonnes questions posées dès la première demande.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
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
          </div>
          <div className="gc-b">
            <h3>Fiche Google & avis</h3>
            <p>Votre fiche optimisée et vos avis mis en avant sur le site.</p>
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
                  <span>plombier nantes</span>
                </div>
                <div className="serp-r">
                  <span className="serp-u">votre-entreprise.fr</span>
                  <b>Plombier à Nantes — Dépannage et installation</b>
                  <span className="serp-d">Intervention rapide, devis gratuit, avis clients vérifiés.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>SEO local</h3>
            <p>Être trouvé sur « votre métier + votre ville ».</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
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
          </div>
          <div className="gc-b">
            <h3>Automatisations simples</h3>
            <p>Chaque demande dans votre boîte mail et votre agenda, sans ressaisie.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="u-bare um">
                <div className="msg msg-r">
                  <b>Vous</b>Pouvez-vous ajouter notre nouveau chantier ?
                </div>
                <div className="msg msg-l">
                  <b>Théo</b>C’est en ligne, avec les photos.
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Suivi après lancement</h3>
            <p>Un interlocuteur qui répond, et des évolutions quand vous en avez besoin.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function CasClientHoussesTaxi() {
  return (
    <section className="sec" style={{ padding: '0' }} id="cas-ht">
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Cas client
          <br />
          <span className="serif">Housses Taxi.</span>
        </h2>
        <p className="lead">
          Un atelier de Pierrelaye, dans le Val-d’Oise, qui fabrique des housses de sièges sur mesure pour les
          taxis, les VTC, les utilitaires et les vans, posées sur place par ses installateurs.
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
              <span className="win-title">houssestaxi.com</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img className="shot" src="/images/17eafb1d2deb75.jpg" alt="Capture du site" />
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
                <span className="win-title">houssestaxi.com</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/1a94289d7d9cd0.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>
              Comment ça marche : rendez-vous, pose dans les locaux, départ avec un véhicule comme neuf.
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
                <span className="win-title">houssestaxi.com</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/0750102270d8d9.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>Les questions des chauffeurs, regroupées dans une FAQ claire.</figcaption>
          </figure>
        </div>
      </div>
      <div className="case-cols">
        <div>
          <h3>Montrer le savoir-faire de l’atelier, et faire venir les rendez-vous.</h3>
          <span className="p-tag">Fabricant · Site vitrine · Val-d’Oise</span>
          <div className="mb-btns">
            <Link to="/realisations/housses-taxi" className="btn btn-ink" data-proj="housses-taxi">
              Voir le projet
            </Link>
            <a className="btn btn-ghost" href="https://www.houssestaxi.com/" target="_blank" rel="noopener">
              Voir le site
            </a>
          </div>
        </div>
        <div>
          <div className="case-k">Ce que fait le site</div>
          <ul>
            <li>Présentation des housses par véhicule : taxi, VTC, utilitaire, van</li>
            <li>Le parcours client en trois étapes, du rendez-vous à la pose</li>
            <li>Prise de rendez-vous et coordonnées de l’atelier sur chaque page</li>
            <li>Pages « Notre histoire », « Nos marchés » et FAQ</li>
            <li>Version mobile soignée, pour les chauffeurs</li>
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

function CommentOnTravaille() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Comment
          <br />
          <span className="serif">on travaille.</span>
        </h2>
        <p className="lead">
          Une seule équipe du premier échange à la mise en ligne. Vous suivez chaque étape dans Orion Admin.
        </p>
      </div>
      <div className="steps s-steps">
        <div className="pixbar">
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-cur" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
        </div>
        <div className="st-row" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          <div className="st ">
            <h3>
              <i />
              Échanger
            </h3>
            <p>Votre activité, vos clients, vos objectifs.</p>
          </div>
          <div className="st cur">
            <h3>
              <i />
              Concevoir
            </h3>
            <p>Maquettes validées avec vous.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Développer
            </h3>
            <p>Site, formulaire et fiche Google.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Lancer
            </h3>
            <p>Mise en ligne et prise en main.</p>
          </div>
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
              <span>Combien coûte un site pour une TPE ou une PME ?</span>
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
              Le prix dépend du nombre de pages et des fonctionnalités (devis en ligne, prise de rendez-vous,
              espace client). On vous remet un devis ferme après un premier échange, sans engagement.
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
          <div className="q">
            <div className="q-h">
              <span>Le SEO est-il inclus dans la création de site ?</span>
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
              Oui. Un SEO poussé pour Google et un travail GEO pour les IA sont inclus dans le devis de chacun de nos clients.
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
              <span>Proposez-vous un suivi après la mise en ligne ?</span>
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
              On reste disponibles pour les corrections et les questions. Vous pouvez ensuite choisir un suivi
              régulier (évolutions, SEO, maintenance) ou nous solliciter ponctuellement.
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
      <FooterNantes>
        <div className="cta">
          <h2>
            Votre site devrait vous apporter des clients.
            <span className="serif">Vérifions s’il le fait.</span>
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
      </FooterNantes>
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
      <CasClientHoussesTaxi />
      <CommentOnTravaille />
      <IlsNousOntFait />
      <LesExpertisesMobilisees />
      <ParSecteurDesPages />
      <QuestionsFrequentes />
      <GCta />
    </section>
  )
}
