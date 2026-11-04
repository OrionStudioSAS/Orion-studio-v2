import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/">
          Pour qui ? / <b>Golfs</b>
        </Link>
      </div>
      <h1 className="g-h1">
        Votre golf mérite une expérience digitale<span className="serif">à la hauteur de son parcours.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Nous concevons des sites internet sur mesure pour les golfs : une image premium, des réservations
          facilitées et des outils pensés pour les équipes comme pour les joueurs.
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
    <div className="hero-media">
      <div className="hm-layer">
        <img
          src="/images/parcours-de-golf-en-provence-au-crepuscule-en-pi.png"
          alt="Parcours de golf en Provence au crépuscule, en pixel art"
        />
        <img
          className="hero-orig"
          src="/images/la-meme-scene-peinture-d-origine-2.jpg"
          alt="La même scène, peinture d’origine"
        />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="px omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>Quel golf analyse-t-on ce soir ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.golf-des-pins.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse du site de votre club, ou décrivez votre projet</span>
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
                <b>Analyse golf</b>
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
                SEO
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
                Boutique
              </span>
            </div>
            <span className="send ch2-send">
              Analyser mon site <span className="kbd">↵</span>
            </span>
          </div>
        </div>
        <div className="ch2-sug">
          <span className="sg">
            <img className="px picon" src="/px/picon-268f2d78.svg" alt="" width={10} height={10} />
            <b>Refaire le site du club</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-ca3eed21.svg" alt="" width={10} height={10} />
            <b>Vendre au pro-shop en ligne</b>
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
            Gratuit. Analyse de votre site et maquette de page d’accueil pensée pour votre club, par e-mail
            sous quelques jours.
          </span>
        </div>
      </div>
      <div className="toggle" role="group" aria-label="Rendu de l’image">
        <span className="on" data-v="px" role="button" tabIndex={0}>
          <i />
          PIXEL
        </span>
        <span data-v="orig" role="button" tabIndex={0}>
          <i />
          ORIGINAL
        </span>
      </div>
      <div className="capt">
        Green du 18, 19 h 10 — <b>Orion</b> se lève
      </div>
    </div>
  )
}

function GProof() {
  return (
    <div className="g-proof">
      <img src="/images/chateau-l-arc-golf-club-2.png" alt="Château l’Arc Golf Club" />
      <p>
        <b>Le site et le back-office du Château l’Arc Golf Club</b> sont conçus et développés par Orion
        Studio.
      </p>
      <Link to="/realisations/chateau-larc" className="lnk">
        Voir le cas client
      </Link>
    </div>
  )
}

function CeQuOnConstruit() {
  return (
    <section className="sec" style={{ padding: '0', borderTop: 'none' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’on construit
          <br />
          <span className="serif">pour les golfs.</span>
        </h2>
        <p className="lead">
          Deux métiers, une seule équipe : le site qui donne envie de venir jouer, et la boutique qui vend
          aussi quand l’accueil est fermé.
        </p>
      </div>
      <div className="offers">
        <article className="offer">
          <div className="of-vis of-vis-real">
            <div className="win of-win of-win-r">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">chateaularcgolfclub.com</span>
                <span className="win-sp" />
              </div>
              <img
                className="shot"
                src="/images/page-d-accueil-du-site-du-chateau-l-arc-golf-clu.jpg"
                alt="Site du Château l’Arc Golf Club"
              />
            </div>
            <div className="win of-drop">
              <img className="shot" src="/images/img-11f11561.jpg" alt="Menu Réserver un départ" />
            </div>
          </div>
          <div className="of-body">
            <h3>Sites internet</h3>
            <p>Création, refonte UX/UI, expérience mobile, référencement naturel.</p>
            <div className="of-tags">
              <span>Création</span>
              <span>Refonte UX/UI</span>
              <span>Expérience mobile</span>
              <span>Référencement naturel</span>
            </div>
          </div>
        </article>
        <article className="offer">
          <div className="of-vis of-vis-shop">
            <img className="of-bg" src="/images/img-03b5e6ae.png" alt="" />
            <div className="gift">
              <div className="gift-top">
                <svg
                  className="o-star"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C8 3.52 12.48 8 16 8C12.48 8 8 12.48 8 16C8 12.48 3.52 8 0 8C3.52 8 8 3.52 8 0Z"
                    fill="#FF4D1A"
                  />
                </svg>
                <span>Carte cadeau</span>
              </div>
              <div className="gift-t">18 trous pour deux + déjeuner au club-house</div>
              <div className="gift-p">Valable 12 mois</div>
            </div>
            <div className="shop of-prod">
              <div className="shop-b">
                <div className="shop-k">Proshop · Textile</div>
                <div className="shop-t">Polo du club, coton piqué</div>
                <div className="shop-row">
                  <span className="shop-p">Taille M</span>
                  <span className="shop-q">— 1 +</span>
                </div>
                <div className="shop-cta">Ajouter au panier</div>
              </div>
            </div>
          </div>
          <div className="of-body">
            <h3>E-commerce</h3>
            <p>Proshops en ligne, vente de produits, cartes cadeaux et expériences.</p>
            <div className="of-tags">
              <span>Proshop en ligne</span>
              <span>Vente de produits</span>
              <span>Cartes cadeaux</span>
              <span>Expériences</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

function FonctionnalitesSpecifiquesAuGolf() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Fonctionnalités
          <br />
          <span className="serif">spécifiques au golf.</span>
        </h2>
        <p className="lead">
          Des modules qu’on assemble selon votre club, votre logiciel de gestion et vos équipes. Captures du
          site et du back-office du Château l’Arc Golf Club.
        </p>
      </div>
      <div className="gcells">
        <article className="gc">
          <div className="gc-ui">
            <div className="gshot-wrap">
              <div className="win g-shot">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">Menu « Réserver un départ »</span>
                  <span className="win-sp" />
                </div>
                <img src="/images/img-11f11561.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Réservation de départs</h3>
            <p>Réserver en ligne ou par téléphone, depuis n’importe quelle page du site.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gshot-wrap">
              <div className="win g-shot">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">Site · Le parcours</span>
                  <span className="win-sp" />
                </div>
                <img src="/images/img-7c8e229e.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Le parcours</h3>
            <p>Le parcours présenté comme il le mérite : chiffres clés, architecte, visite en images.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gshot-wrap">
              <div className="win g-shot">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">Site · Tarifs & abonnements</span>
                  <span className="win-sp" />
                </div>
                <img src="/images/img-dee652fe.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Tarifs & green fees</h3>
            <p>Green fees, carnets et abonnements, toujours à jour : c’est l’accueil qui les gère.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gshot-wrap">
              <div className="win g-shot">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">Back-office · Résultats</span>
                  <span className="win-sp" />
                </div>
                <img src="/images/img-208244aa.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Compétitions & résultats</h3>
            <p>Résultats importés, classement vérifié, publication en un clic.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gshot-wrap">
              <div className="win g-shot">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">Back-office · Statut & bandeau</span>
                  <span className="win-sp" />
                </div>
                <img src="/images/img-b97da1bb.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>État du parcours & bandeau</h3>
            <p>Ouverture, voiturettes, practice, restaurant : l’accueil met à jour, le site suit.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gshot-wrap">
              <div className="win g-shot">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">Back-office · Pop-up marketing</span>
                  <span className="win-sp" />
                </div>
                <img src="/images/img-e3324a1e.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Pop-up marketing</h3>
            <p>Stages, événements, offres du moment : une pop-up pilotée depuis le back-office.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gshot-wrap">
              <div className="win g-shot">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">Site · L’Académie</span>
                  <span className="win-sp" />
                </div>
                <img src="/images/img-7f6ea75a.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>L’Académie</h3>
            <p>Cours et stages présentés par niveau, avec demande d’inscription.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gshot-wrap">
              <div className="win g-shot">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">Site · Devenir membre</span>
                  <span className="win-sp" />
                </div>
                <img src="/images/img-d3b5805c.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Adhésion en ligne</h3>
            <p>Un parcours « Devenir membre » qui présente les formules et qualifie la demande.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gshot-wrap">
              <div className="win g-shot">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">Site · Séminaire & privatisation</span>
                  <span className="win-sp" />
                </div>
                <img src="/images/img-21b9003f.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Séminaires & privatisation</h3>
            <p>Les demandes d’entreprises guidées, puis envoyées au bon interlocuteur.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function VosOutilsUnSeul() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Vos outils,
          <br />
          <span className="serif">un seul écosystème.</span>
        </h2>
        <p className="lead">
          Connectez votre site aux outils que vous utilisez déjà. Pas de double saisie pour l’accueil, pas de
          parcours cassé pour les joueurs.
        </p>
      </div>
      <div className="int-wrap">
        <div className="int int2" style={{ width: '1296px', height: '520px' }}>
          <svg
            className="int-svg"
            width="1296"
            height="520"
            viewBox="0 0 1296 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="ip-0"
              className="ip"
              data-i="0"
              d="M300 52C374 52 374 200 448 200"
              stroke="#CFCFC8"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
            <path
              id="ip-1"
              className="ip"
              data-i="1"
              d="M300 134C374 134 374 224 448 224"
              stroke="#CFCFC8"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
            <path
              id="ip-2"
              className="ip"
              data-i="2"
              d="M300 216C374 216 374 248 448 248"
              stroke="#CFCFC8"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
            <path
              id="ip-3"
              className="ip"
              data-i="3"
              d="M300 298C374 298 374 272 448 272"
              stroke="#CFCFC8"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
            <path
              id="ip-4"
              className="ip"
              data-i="4"
              d="M300 380C374 380 374 296 448 296"
              stroke="#CFCFC8"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
            <path
              id="ip-5"
              className="ip"
              data-i="5"
              d="M300 462C374 462 374 320 448 320"
              stroke="#CFCFC8"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
            <path
              id="ip-6"
              className="ip"
              data-i="6"
              d="M996 52C922 52 922 200 848 200"
              stroke="#CFCFC8"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
            <path
              id="ip-7"
              className="ip"
              data-i="7"
              d="M996 134C922 134 922 224 848 224"
              stroke="#CFCFC8"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
            <path
              id="ip-8"
              className="ip"
              data-i="8"
              d="M996 216C922 216 922 248 848 248"
              stroke="#CFCFC8"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
            <path
              id="ip-9"
              className="ip"
              data-i="9"
              d="M996 298C922 298 922 272 848 272"
              stroke="#CFCFC8"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
            <path
              id="ip-10"
              className="ip"
              data-i="10"
              d="M996 380C922 380 922 296 848 296"
              stroke="#CFCFC8"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
            <path
              id="ip-11"
              className="ip"
              data-i="11"
              d="M996 462C922 462 922 320 848 320"
              stroke="#CFCFC8"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
            <rect className="ipd" x="-3" y="-3" width="6" height="6" fill="#FF4D1A">
              <animateMotion dur="2.2s" begin="0.00s" repeatCount="indefinite">
                <mpath href="#ip-0" />
              </animateMotion>
            </rect>
            <rect className="ipd" x="-3" y="-3" width="6" height="6" fill="#FF4D1A">
              <animateMotion dur="2.55s" begin="0.37s" repeatCount="indefinite">
                <mpath href="#ip-1" />
              </animateMotion>
            </rect>
            <rect className="ipd" x="-3" y="-3" width="6" height="6" fill="#FF4D1A">
              <animateMotion dur="2.9s" begin="0.74s" repeatCount="indefinite">
                <mpath href="#ip-2" />
              </animateMotion>
            </rect>
            <rect className="ipd" x="-3" y="-3" width="6" height="6" fill="#FF4D1A">
              <animateMotion dur="2.2s" begin="1.11s" repeatCount="indefinite">
                <mpath href="#ip-3" />
              </animateMotion>
            </rect>
            <rect className="ipd" x="-3" y="-3" width="6" height="6" fill="#FF4D1A">
              <animateMotion dur="2.55s" begin="1.48s" repeatCount="indefinite">
                <mpath href="#ip-4" />
              </animateMotion>
            </rect>
            <rect className="ipd" x="-3" y="-3" width="6" height="6" fill="#FF4D1A">
              <animateMotion dur="2.9s" begin="1.85s" repeatCount="indefinite">
                <mpath href="#ip-5" />
              </animateMotion>
            </rect>
            <rect className="ipd" x="-3" y="-3" width="6" height="6" fill="#FF4D1A">
              <animateMotion dur="2.2s" begin="2.22s" repeatCount="indefinite">
                <mpath href="#ip-6" />
              </animateMotion>
            </rect>
            <rect className="ipd" x="-3" y="-3" width="6" height="6" fill="#FF4D1A">
              <animateMotion dur="2.55s" begin="0.19s" repeatCount="indefinite">
                <mpath href="#ip-7" />
              </animateMotion>
            </rect>
            <rect className="ipd" x="-3" y="-3" width="6" height="6" fill="#FF4D1A">
              <animateMotion dur="2.9s" begin="0.56s" repeatCount="indefinite">
                <mpath href="#ip-8" />
              </animateMotion>
            </rect>
            <rect className="ipd" x="-3" y="-3" width="6" height="6" fill="#FF4D1A">
              <animateMotion dur="2.2s" begin="0.93s" repeatCount="indefinite">
                <mpath href="#ip-9" />
              </animateMotion>
            </rect>
            <rect className="ipd" x="-3" y="-3" width="6" height="6" fill="#FF4D1A">
              <animateMotion dur="2.55s" begin="1.30s" repeatCount="indefinite">
                <mpath href="#ip-10" />
              </animateMotion>
            </rect>
            <rect className="ipd" x="-3" y="-3" width="6" height="6" fill="#FF4D1A">
              <animateMotion dur="2.9s" begin="1.67s" repeatCount="indefinite">
                <mpath href="#ip-11" />
              </animateMotion>
            </rect>
          </svg>
          <div className="it it-l" data-i="0" data-row="0" style={{ left: '0px', top: '24px' }}>
            <span className="it-lg">
              <img src="/images/img-e92ef036.png" alt="" width="22" height="22" />
            </span>
            <div>
              <b>Prima Golf</b>
              <span>Réservation & gestion</span>
            </div>
          </div>
          <div className="it it-l" data-i="1" data-row="0" style={{ left: '0px', top: '106px' }}>
            <span className="it-lg">
              <img className="px" src="/px/art-a2b3b32b.svg" alt="" width={22} height={22} />
            </span>
            <div>
              <b>Chronogolf</b>
              <span>Réservation & gestion</span>
            </div>
          </div>
          <div className="it it-l" data-i="2" data-row="0" style={{ left: '0px', top: '188px' }}>
            <span className="it-lg">
              <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 52.1">
                <path
                  fill="#1D2545"
                  d="m30.08,46.5c-3.39,1.11-4.08,5.57-4.08,5.57v-9.33c0-5.12,4.42-6.65,4.42-6.65l.08-.04c4.47-2.29,7.31-7.04,7.31-12.36,0-7.79-6.32-14.11-14.11-14.11s-14.11,6.32-14.11,14.11c0,5.34,2.95,10.01,7.32,12.4h0s4.42,1.53,4.42,6.65v9.33s-.93-4.52-3.98-5.56C7.34,43.74,0,34.57,0,23.69,0,10.6,10.6,0,23.69,0s23.69,10.6,23.69,23.69c0,10.87-7.32,20.03-17.3,22.81Z"
                />
                <path fill="#1D2545" d="m17.72,33.53s3.05,2.59,5.96,2.59,6.12-2.59,6.12-2.59" />
              </svg>
            </span>
            <div>
              <b>Golfmanager</b>
              <span>Réservation & gestion</span>
            </div>
          </div>
          <div className="it it-l" data-i="3" data-row="1" style={{ left: '0px', top: '270px' }}>
            <span className="it-lg">
              <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#635BFF"
                  d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
                />
              </svg>
            </span>
            <div>
              <b>Stripe</b>
              <span>Paiement</span>
            </div>
          </div>
          <div className="it it-l" data-i="4" data-row="1" style={{ left: '0px', top: '352px' }}>
            <span className="it-lg">
              <img className="px" src="/px/art-c2d37bf4.svg" alt="" width={22} height={22} />
            </span>
            <div>
              <b>Shopify</b>
              <span>Boutique</span>
            </div>
          </div>
          <div className="it it-l" data-i="5" data-row="-1" style={{ left: '0px', top: '434px' }}>
            <span className="it-lg it-fill">
              <img src="/images/img-998b826a.png" alt="" width="22" height="22" />
            </span>
            <div>
              <b>Zenchef</b>
              <span>Restaurant</span>
            </div>
          </div>
          <div className="it it-r" data-i="6" data-row="2" style={{ left: '996px', top: '24px' }}>
            <span className="it-lg">
              <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#0B996E"
                  d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM7.2 4.8h5.747c2.34 0 3.895 1.406 3.895 3.516 0 1.022-.348 1.862-1.09 2.588C17.189 11.812 18 13.22 18 14.785c0 2.86-2.64 5.016-6.164 5.016H7.199v-15zm2.085 1.952v5.537h.07c.233-.432.858-.796 2.249-1.226 2.039-.659 3.037-1.52 3.037-2.655 0-.998-.766-1.656-1.924-1.656H9.285zm4.87 5.266c-.766.385-1.67.748-2.76 1.11-1.229.387-2.11 1.386-2.11 2.407v2.315h2.365c2.387 0 4.149-1.34 4.149-3.155 0-1.067-.625-2.087-1.645-2.677z"
                />
              </svg>
            </span>
            <div>
              <b>Brevo</b>
              <span>E-mailing</span>
            </div>
          </div>
          <div className="it it-r" data-i="7" data-row="2" style={{ left: '996px', top: '106px' }}>
            <span className="it-lg">
              <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#FF7A59"
                  d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"
                />
              </svg>
            </span>
            <div>
              <b>HubSpot</b>
              <span>CRM</span>
            </div>
          </div>
          <div className="it it-r" data-i="8" data-row="4" style={{ left: '996px', top: '188px' }}>
            <span className="it-lg">
              <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#E37400"
                  d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"
                />
              </svg>
            </span>
            <div>
              <b>Google Analytics 4</b>
              <span>Mesure</span>
            </div>
          </div>
          <div className="it it-r" data-i="9" data-row="3" style={{ left: '996px', top: '270px' }}>
            <span className="it-lg">
              <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#4285F4"
                  d="M3.273 1.636c-.736 0-1.363.492-1.568 1.16L0 9.272c0 1.664 1.336 3 3 3a3 3 0 003-3c0 1.664 1.336 3 3 3a3 3 0 003-3c0 1.65 1.35 3 3 3 1.664 0 3-1.336 3-3 0 1.664 1.336 3 3 3s3-1.336 3-3l-1.705-6.476a1.646 1.646 0 00-1.568-1.16zm8.729 9.326c-.604 1.063-1.703 1.81-3.002 1.81-1.304 0-2.398-.747-3-1.806-.604 1.06-1.702 1.806-3 1.806-.484 0-.944-.1-1.363-.277v8.232c0 .9.736 1.637 1.636 1.637h17.454c.9 0 1.636-.737 1.636-1.637v-8.232a3.48 3.48 0 01-1.363.277c-1.304 0-2.398-.746-3-1.804-.602 1.058-1.696 1.804-3 1.804-1.299 0-2.394-.75-2.998-1.81zm5.725 3.765c.808 0 1.488.298 2.007.782l-.859.859a1.623 1.623 0 00-1.148-.447c-.98 0-1.772.827-1.772 1.806 0 .98.792 1.807 1.772 1.807.882 0 1.485-.501 1.615-1.191h-1.615v-1.16h2.826c.035.196.054.4.054.613 0 1.714-1.147 2.931-2.88 2.931a3 3 0 010-6z"
                />
              </svg>
            </span>
            <div>
              <b>Google Business Profile</b>
              <span>Avis & visibilité</span>
            </div>
          </div>
          <div className="it it-r" data-i="10" data-row="-1" style={{ left: '996px', top: '352px' }}>
            <span className="it-lg">
              <img className="px" src="/px/art-fadc98b3.svg" alt="" width={22} height={22} />
            </span>
            <div>
              <b>Calendly</b>
              <span>Rendez-vous</span>
            </div>
          </div>
          <div className="it it-r" data-i="11" data-row="-1" style={{ left: '996px', top: '434px' }}>
            <span className="it-lg">
              <img className="px" src="/px/art-de7cbfb0.svg" alt="" width={22} height={22} />
            </span>
            <div>
              <b>Axeptio</b>
              <span>Consentement</span>
            </div>
          </div>
          <div className="ic" style={{ left: '448px', top: '100px', width: '400px', height: '320px' }}>
            <div className="ic-top">
              <svg
                className="o-star"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C9 3.96 14.04 9 18 9C14.04 9 9 14.04 9 18C9 14.04 3.96 9 0 9C3.96 9 9 3.96 9 0Z"
                  fill="#FF4D1A"
                />
              </svg>
              <b>Votre site</b>
              <span>golf-des-pins.fr</span>
              <em className="ic-live">
                <i />
                Synchronisé
              </em>
            </div>
            <div className="ic-r" data-row="0">
              <i />
              <span>Départs réservés</span>
              <b>Synchronisés</b>
            </div>
            <div className="ic-r" data-row="1">
              <i />
              <span>Paiements</span>
              <b>Encaissés</b>
            </div>
            <div className="ic-r" data-row="2">
              <i />
              <span>Contacts</span>
              <b>Envoyés au CRM</b>
            </div>
            <div className="ic-r" data-row="3">
              <i />
              <span>Avis Google</span>
              <b>Affichés</b>
            </div>
            <div className="ic-r" data-row="4">
              <i />
              <span>Statistiques</span>
              <b>Suivies</b>
            </div>
          </div>
        </div>
      </div>
      <p className="int-note">
        Exemples d’outils courants dans les golfs. La connexion (API, widget ou export) est vérifiée au
        cadrage, avant le devis.
      </p>
    </section>
  )
}

function CasClientChateauL() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Cas client
          <br />
          <span className="serif">Château l’Arc Golf Club.</span>
        </h2>
        <p className="lead">
          Un club de Provence qui voulait un site à la hauteur de son domaine, et une équipe autonome au
          quotidien.
        </p>
      </div>
      <div className="case">
        <img
          src="/images/le-parcours-du-chateau-l-arc-en-pixel-art.png"
          alt="Le parcours du Château l’Arc en pixel art"
        />
        <div className="case-logo">
          <img src="/images/chateau-l-arc-golf-club-2.png" alt="Château l’Arc Golf Club" />
        </div>
        <div className="win win-shot win-golf">
          <div className="win-bar">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
            <span className="win-title">chateaularcgolfclub.com</span>
            <span className="win-sp" />
          </div>
          <div className="win-body">
            <img
              className="shot"
              src="/images/page-d-accueil-du-site-du-chateau-l-arc-golf-clu.jpg"
              alt="Page d’accueil du site du Château l’Arc Golf Club"
            />
          </div>
        </div>
      </div>
      <div className="case-cols">
        <div>
          <h3>Donner envie de venir jouer, et simplifier la vie de l’accueil.</h3>
          <span className="p-tag">Golf · Site + back-office · 2026</span>{' '}
          <Link to="/realisations/chateau-larc" className="btn btn-ink">
            Lire le cas client
          </Link>
        </div>
        <div>
          <div className="case-k">Ce qu’on a fait</div>
          <ul>
            <li>Refonte UX/UI et direction artistique</li>
            <li>Site sur-mesure, mobile d’abord</li>
            <li>Back-office départs, offres et événements</li>
            <li>Vidéo de lancement</li>
          </ul>
        </div>
        <div>
          <div className="case-k">Résultats</div>
          <p>
            Les chiffres (réservations en ligne, trafic, demandes de séminaires) seront publiés avec l’accord
            du club.
          </p>
        </div>
      </div>
    </section>
  )
}

function AvisEtTemoignages() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Avis
          <br />
          <span className="serif">et témoignages.</span>
        </h2>
        <a className="lnk">Tous les avis Google</a>
      </div>
      <div className="revs">
        <div className="rv rv-g">
          <div className="rv-score">5/5</div>
          <div className="rv-stars">
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
          <p>Note moyenne d’Orion Studio sur Google.</p>
          <a className="lnk">Lire les avis</a>
        </div>
        <div className="rv">
          <p className="rv-q">
            « Leur expertise sur le développement sur-mesure est impressionnante. Une équipe à l’écoute,
            professionnelle, et qui livre dans les temps. »
          </p>
          <div className="rv-by">
            <b>Thierry Cordier</b>Association des Entrepreneurs du Vexin
          </div>
        </div>
        <div className="rv rv-todo">
          <p className="rv-q">
            « Témoignage à recueillir auprès de la direction du Château l’Arc Golf Club. »
          </p>
          <div className="rv-by">
            <b>Direction du club</b>Château l’Arc Golf Club
          </div>
        </div>
      </div>
    </section>
  )
}

function VosQuestionsDeGolf() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="faq">
        <div className="faq-l">
          <h2 className="h2">
            Vos questions
            <br />
            <span className="serif">de golf.</span>
          </h2>
          <p className="lead">
            Logiciel de réservation, délais, langues, boutique : ce que les directeurs de golf nous demandent
            en premier.
          </p>
        </div>
        <div className="acc">
          <div className="q">
            <div className="q-h">
              <span>Pouvez-vous connecter notre logiciel de réservation actuel ?</span>
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
              Dans la plupart des cas, oui : on intègre votre moteur de réservation existant (widget ou API)
              plutôt que de vous faire changer d’outil. On vérifie la faisabilité dès le cadrage, avant le
              devis.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien de temps faut-il pour le site d’un golf ?</span>
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
              Une boutique ou des modules sur-mesure demandent davantage : le planning est fixé dans le devis.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Le site peut-il être bilingue pour les joueurs étrangers ?</span>
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
              Oui. Les langues se décident au cadrage, avec les pages et les menus à traduire, avant le devis.
              Le studio travaille lui-même en français et en anglais.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Peut-on vendre des cartes cadeaux et des green fees en ligne ?</span>
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
              Oui : pro-shop, cartes cadeaux et expériences peuvent être vendus en ligne. Les green fees
              passent par votre logiciel de réservation, intégré au site.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Qui met à jour le site au quotidien ?</span>
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
              Votre équipe, depuis le back-office : tarifs, état du parcours, offres et événements. C’est ce
              que fait l’accueil du Château l’Arc Golf Club.
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
            Et si votre site devenait<span className="serif">un véritable atout pour votre golf ?</span>
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
    <section className="artboard g-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <GProof />
      <CeQuOnConstruit />
      <FonctionnalitesSpecifiquesAuGolf />
      <VosOutilsUnSeul />
      <CasClientChateauL />
      <AvisEtTemoignages />
      <VosQuestionsDeGolf />
      <GCta />
    </section>
  )
}
