import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/">
          Expertises / <b>Google Ads</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Campagnes Google Ads</span>
        <span className="serif">pilotées au nombre de contacts.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Search, Performance Max, campagnes locales : on construit et on pilote vos campagnes pour qu’elles
          génèrent des demandes, avec des pages d’atterrissage qui convertissent.
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
    <div className="hero-media sx-media xp-media">
      <div className="hm-layer">
        <img src="/images/17166791ed4c03.png" alt="" />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="px omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>Que rapportent vos annonces ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.votre-site.fr
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
                Search
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
                Local
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
                Landing
              </span>
            </div>
            <span className="send ch2-send">
              Analyser mon site <span className="kbd">↵</span>
            </span>
          </div>
        </div>
        <div className="ch2-sug">
          <span className="sg">
            <img className="px picon" src="/px/picon-34cc7426.svg" alt="" width={10} height={10} />
            <b>Lancer Google Ads</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-34cc7426.svg" alt="" width={10} height={10} />
            <b>Auditer mon compte</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Créer une page d’atterrissage</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Remonter sur Google</b>
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
      <div className="capt">Jour de marché sur le port, 9 h</div>
    </div>
  )
}

function CeQuUneCampagne() {
  return (
    <section className="sec" style={{ padding: '0', borderTop: 'none' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’une campagne bien pilotée
          <br />
          <span className="serif">vous apporte.</span>
        </h2>
      </div>
      <div className="ocs">
        <div className="oc">
          <h3>Chaque euro suivi</h3>
          <p>Conversions mesurées de l’annonce jusqu’à la demande de devis ou la vente.</p>
        </div>
        <div className="oc">
          <h3>Des pages qui convertissent</h3>
          <p>Des pages d’atterrissage dédiées, rapides et pensées pour chaque campagne.</p>
        </div>
        <div className="oc">
          <h3>Des rapports lisibles</h3>
          <p>Ce que vous avez dépensé, ce que ça a rapporté, ce qu’on change le mois suivant.</p>
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
              <div className="ul">
                <div className="ul-h">Audit · compte Google Ads</div>
                <div className="ul-r">
                  <i className="sq sq-wa" />
                  <span>Suivi des conversions</span>
                  <b>Incomplet</b>
                </div>
                <div className="ul-r">
                  <i className="sq" />
                  <span>Mots-clés négatifs</span>
                  <b>Absents</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Annonces responsives</span>
                  <b>OK</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-wa" />
                  <span>Ciblage géographique</span>
                  <b>Trop large</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Audit de compte</h3>
            <p>Ce qui coûte sans rapporter, et ce qu’il faut couper tout de suite.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="adp u-bare">
                <span className="adp-k">Sponsorisé</span>
                <span className="serp-u">votre-site.fr</span>
                <b>Devis en 24 h — Menuisier à Nantes</b>
                <span className="serp-d">
                  Fenêtres, portes et agencement sur mesure. Intervention dans l’agglomération nantaise.
                </span>
                <div className="adp-s">
                  <span>Demander un devis</span>
                  <span>Nos réalisations</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Campagnes Search</h3>
            <p>Des annonces précises sur les recherches de vos futurs clients.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Éléments de la campagne</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Titres</span>
                  <b>15 rédigés</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Visuels</span>
                  <b>12 formats</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-wa" />
                  <span>Vidéo</span>
                  <b>À produire</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Signaux d’audience</span>
                  <b>Clients actuels</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Performance Max</h3>
            <p>Une campagne sur tous les réseaux Google, nourrie par vos meilleurs visuels.</p>
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
                  <span className="win-title">votre-site.fr/devis-menuiserie</span>
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
            <h3>Pages d’atterrissage</h3>
            <p>Une page par intention, avec le bon message et un formulaire court.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Événements suivis</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Formulaire envoyé</span>
                  <b>Actif</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Clic sur le téléphone</span>
                  <b>Actif</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Achat</span>
                  <b>Actif</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-wa" />
                  <span>Prise de rendez-vous</span>
                  <b>À installer</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Suivi des conversions</h3>
            <p>Appels, formulaires, achats : chaque contact remonte dans GA4 et Google Ads.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ub">
                <div className="ul-h">Contacts générés par mois</div>
                <div className="bars">
                  <i style={{ height: '20px' }} />
                  <i style={{ height: '26px' }} />
                  <i style={{ height: '24px' }} />
                  <i style={{ height: '38px' }} />
                  <i style={{ height: '44px' }} />
                  <i style={{ height: '40px' }} />
                  <i style={{ height: '56px' }} />
                  <i style={{ height: '60px' }} />
                  <i style={{ height: '72px' }} />
                  <i style={{ height: '80px' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Rapport mensuel</h3>
            <p>Un rapport court, en euros et en contacts, pas en jargon.</p>
          </div>
        </article>
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
              Auditer
            </h3>
            <p>Compte, suivi, concurrence et budget.</p>
          </div>
          <div className="st cur">
            <h3>
              <i />
              Construire
            </h3>
            <p>Campagnes, annonces et pages d’atterrissage.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Lancer
            </h3>
            <p>Mise en ligne et premiers ajustements serrés.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Optimiser
            </h3>
            <p>Chaque mois, on coupe ce qui ne rapporte pas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function VousSuivezTout() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">Vous suivez tout</h2>
        <Link to="/realisations" className="lnk">
          Toutes les réalisations
        </Link>
      </div>
      <div className="pf">
        <article className="pf-p">
          <div className="p-media">
            <img src="/images/c44f7ec507e0ad.png" alt="" />
            <div className="win win-shot win-adm">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Orion Admin — Château l’Arc Golf Club</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img
                  className="shot"
                  src="/images/94f1f7140db692.jpg"
                  alt="Accueil d’Orion Admin pour le Château l’Arc Golf Club"
                />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">Orion Admin</h3>
            <span className="p-tag">Espace client · inclus dans chaque projet</span>
          </div>
          <p className="p-desc">
            Rapports, échanges et prochaines actions sont partagés dans Orion Admin, votre espace client.
          </p>
        </article>
        <div className="rv pf-q">
          <p className="rv-q">
            « Leur expertise sur le développement sur-mesure est impressionnante. Une équipe à l’écoute,
            professionnelle, et qui livre dans les temps. »
          </p>
          <div className="rv-by">
            <div className="q-stars">
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
            </div>
            <b>Thierry Cordier</b>Association des Entrepreneurs du Vexin · Avis Google
          </div>
        </div>
      </div>
    </section>
  )
}

function ExpertisesAssociees() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '96px' }}>
        <h2 className="h2">Expertises associées</h2>
      </div>
      <div className="rls">
        <Link to="/expertises/seo" className="rl" data-exp="seo">
          <img className="px picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
          <div>
            <b>SEO</b>
            <span>Remonter sur Google.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/site-internet" className="rl" data-exp="site-internet">
          <img className="px picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <div>
            <b>Site internet</b>
            <span>Vitrine, dynamique ou concept.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/automatisations" className="rl" data-exp="automatisations">
          <img className="px picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <div>
            <b>Automatisations</b>
            <span>Vos tâches répétitives, automatisées.</span>
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
              <span>Quel budget prévoir pour Google Ads ?</span>
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
              Cela dépend de votre secteur, de votre zone et de la concurrence sur vos mots-clés. On l’estime
              ensemble à partir du coût par clic constaté et du nombre de contacts visés, avant de lancer quoi
              que ce soit.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Gérez-vous les campagnes Google Ads ?</span>
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
              Oui : audit, création des campagnes, pages d’atterrissage et pilotage mensuel, avec un suivi des
              conversions de l’annonce jusqu’à la demande.
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
            Vos annonces dépensent déjà.<span className="serif">Faisons-les rapporter.</span>
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
    <section className="artboard g-page s-page xp-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <CeQuUneCampagne />
      <CeQuOnLivre />
      <CommentOnTravaille />
      <VousSuivezTout />
      <ExpertisesAssociees />
      <QuestionsFrequentes />
      <GCta />
    </section>
  )
}
