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
          Pour qui ? / <b>Associations</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Site internet pour associations</span>
        <span className="serif">qui fait venir des membres.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Associations sportives, culturelles, solidaires ou professionnelles : adhésions et dons en ligne,
          agenda des événements et espace membres, sur un site que vos bénévoles peuvent faire vivre.
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
          src="/images/edfaec668cf002.png"
          alt="Une salle des fêtes prête pour une assemblée, en pixel art"
        />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="px omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde le site de votre association ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.votre-association.fr
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
                Adhésions
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
                Événements
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
                Dons
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
            <b>Refaire le site de l’association</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-909d41ec.svg" alt="" width={10} height={10} />
            <b>Gérer les adhésions en ligne</b>
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
      <div className="capt">La salle des fêtes, avant l’assemblée</div>
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
          <h3>Des adhésions sans paperasse</h3>
          <p>
            Bulletin, cotisation et confirmation : tout se fait en ligne, et arrive dans votre liste de
            membres.
          </p>
        </div>
        <div className="oc">
          <h3>Des événements qui se remplissent</h3>
          <p>Un agenda clair et des inscriptions en ligne, avec le nombre de places restantes.</p>
        </div>
        <div className="oc">
          <h3>Un site que les bénévoles font vivre</h3>
          <p>Actualités, photos, comptes rendus : chacun publie depuis un back-office simple.</p>
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
              <div className="uf">
                <div className="ul-h">Adhérer</div>
                <div className="uf-g">
                  <label className="fld fld-f">
                    <span>Formule</span>
                    <b>Adhésion annuelle</b>
                  </label>
                  <label className="fld">
                    <span>Nom</span>
                    <b>Claire Martin</b>
                  </label>
                  <label className="fld">
                    <span>E-mail</span>
                    <b>claire@…</b>
                  </label>
                  <label className="fld">
                    <span>Paiement</span>
                    <b>Carte bancaire</b>
                  </label>
                </div>
                <div className="shop-cta">Valider mon adhésion</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Adhésion en ligne</h3>
            <p>Le bulletin et la cotisation en une seule étape.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ui-sl">
                <div className="ul-h">Atelier du samedi</div>
                <div className="rs-s sl-g">
                  <span className="off">9:00</span>
                  <span className="">10:30</span>
                  <span className="on">14:00</span>
                  <span className="off">15:30</span>
                </div>
                <div className="shop-cta">S’inscrire</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Agenda & inscriptions</h3>
            <p>Chaque événement avec sa page et ses places.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="uf">
                <div className="ul-h">Faire un don</div>
                <div className="uf-g">
                  <label className="fld fld-f">
                    <span>Montant</span>
                    <b>Au choix</b>
                  </label>
                  <label className="fld">
                    <span>Fréquence</span>
                    <b>Ponctuel</b>
                  </label>
                  <label className="fld">
                    <span>Nom</span>
                    <b>Thomas</b>
                  </label>
                  <label className="fld">
                    <span>Confirmation</span>
                    <b>Par e-mail</b>
                  </label>
                </div>
                <div className="shop-cta">Donner</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Dons en ligne</h3>
            <p>Un formulaire de don clair, en quelques clics.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Espace membres</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Compte rendu de l’AG</span>
                  <b>PDF</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-wa" />
                  <span>Planning des bénévoles</span>
                  <b>Mis à jour</b>
                </div>
                <div className="ul-r">
                  <i className="sq" />
                  <span>Annuaire</span>
                  <b>Réservé</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Espace membres</h3>
            <p>Documents, comptes rendus et annuaire, réservés aux adhérents.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="auto u-bare">
                <div className="au-n">
                  <b>Nouvel article</b>
                  <span>Publié</span>
                </div>
                <span className="au-l" />
                <div className="au-n">
                  <b>Lettre</b>
                  <span>Préparée</span>
                </div>
                <span className="au-l" />
                <div className="au-n au-on">
                  <b>Membres</b>
                  <span>Envoyée</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Lettre d’information</h3>
            <p>Les nouvelles de l’association, envoyées aux membres.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="u-bare um">
                <div className="msg msg-r">
                  <b>Vous</b>Pouvez-vous ajouter la date du gala ?
                </div>
                <div className="msg msg-l">
                  <b>Théo</b>C’est en ligne, avec les inscriptions.
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Suivi après lancement</h3>
            <p>Un interlocuteur qui répond, aussi aux questions des bénévoles.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function CasClientAssociationDes() {
  return (
    <section className="sec" style={{ padding: '0' }} id="cas-aev">
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Cas client
          <br />
          <span className="serif">Association des Entrepreneurs du Vexin.</span>
        </h2>
        <p className="lead">
          Le réseau des chefs d’entreprise du Vexin : petits-déjeuners, afterworks, conférences et visites
          d’entreprises, avec un site pour présenter les membres et faire adhérer.
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
              <span className="win-title">association-ev.fr</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img className="shot" src="/images/f7f70ac67d2f8d.jpg" alt="Capture du site" />
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
                <span className="win-title">association-ev.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/a3f2097a4f9879.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>Nos membres : chaque entrepreneur présenté, avec son entreprise.</figcaption>
          </figure>
          <figure>
            <div className="win win-shot">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">association-ev.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/b6a413e2267a48.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>Nos événements : les prochains rendez-vous du réseau.</figcaption>
          </figure>
          <figure>
            <div className="win win-shot">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">association-ev.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/388ec2a8c02406.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>Les questions des futurs adhérents, avant de dire « J’adhère ».</figcaption>
          </figure>
        </div>
      </div>
      <div className="case-cols">
        <div>
          <h3>« Tout seul on va vite, ensemble on va loin » : un site à l’image du réseau.</h3>
          <span className="p-tag">Association · Site + espace membres · Vexin</span>
          <div className="mb-btns">
            <Link
              to="/realisations/entrepreneurs-du-vexin"
              className="btn btn-ink"
              data-proj="entrepreneurs-du-vexin"
            >
              Voir le projet
            </Link>
            <a className="btn btn-ghost" href="https://association-ev.fr/" target="_blank" rel="noopener">
              Voir le site
            </a>
          </div>
        </div>
        <div>
          <div className="case-k">Ce que fait le site</div>
          <ul>
            <li>Présentation de l’association, de ses valeurs et de sa charte</li>
            <li>Annuaire des membres, avec une fiche par entrepreneur</li>
            <li>Agenda des événements, relié au blog</li>
            <li>Adhésion en ligne et espace membre (connexion, compte)</li>
            <li>FAQ pour les futurs adhérents</li>
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
              <span>Combien coûte un site pour une association ?</span>
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
              prix dépend du nombre de pages et des fonctionnalités (adhésions, dons, inscriptions aux
              événements).
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
              <span>Pourrai-je modifier l’agenda et les actualités moi-même ?</span>
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
              Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Agenda, actualités,
              photos et documents se modifient sans connaissances techniques.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Pouvez-vous connecter notre outil de gestion des adhérents ?</span>
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
            Et si votre site<span className="serif">faisait venir de nouveaux membres ?</span>
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
      <CasClientAssociationDes />
      <CommentOnTravaille />
      <IlsNousOntFait />
      <LesExpertisesMobilisees3 />
      <LesAutresSecteurs />
      <QuestionsFrequentes />
      <GCta />
    </section>
  )
}
