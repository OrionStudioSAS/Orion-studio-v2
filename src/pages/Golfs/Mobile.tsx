import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/pour-qui">
          Pour qui ? / <b>Golfs</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Votre golf mérite une expérience digitale<span className="serif">à la hauteur de son parcours.</span>
      </h1>
      <p className="mo-lead">
        Nous concevons des sites internet sur mesure pour les golfs : une image premium, des réservations
        facilitées et des outils pensés pour les équipes comme pour les joueurs.
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
          src="/images/c24449a7dc9b00.png"
          alt="Parcours de golf au crépuscule, en pixel art"
        />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="pxsvg omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde le site
            <br />
            de votre golf ?
          </span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              https://www.golf-des-pins.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse du site de votre club</span>
          </div>
          <div className="mo-crit">
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Réservation
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
              SEO
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Boutique
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
            <img className="pxsvg picon" src="/px/picon-268f2d78.svg" alt="" width={10} height={10} />
            <b>Refaire le site du club</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-ca3eed21.svg" alt="" width={10} height={10} />
            <b>Vendre au pro-shop en ligne</b>
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
            Gratuit. Analyse de votre site et maquette de page d’accueil pensée pour votre club, par e-mail
            sous quelques jours.
          </span>
        </div>
      </div>
      <div className="mo-capt">
        Green du 18, 19 h 10 — <b>Orion</b> se lève
      </div>
    </div>
  )
}

function MgProof() {
  return (
    <div className="mg-proof">
      <img src="/images/433e53ddc3b7c2.png" alt="Château l’Arc Golf Club" />
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
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce qu’on construit<span className="serif">pour les golfs.</span>
        </h2>
        <p className="mo-lead">
          Le site qui donne envie de venir jouer, et la boutique qui vend aussi quand l’accueil est fermé.
        </p>
      </div>
      <div className="mg-ofs">
        <article className="mg-of">
          <div className="mg-vis">
            <div className="win win-shot mc-win ">
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
                <img className="shot" src="/images/661531aedb86a4.jpg" alt="" />
              </div>
            </div>
          </div>
          <h3>Sites internet</h3>
          <p>Création, refonte UX/UI, expérience mobile, référencement naturel.</p>
          <div className="mg-tags">
            <span>Création</span>
            <span>Refonte UX/UI</span>
            <span>Expérience mobile</span>
            <span>Référencement naturel</span>
          </div>
        </article>
        <article className="mg-of">
          <div className="mg-vis mg-vis-shop">
            <img src="/images/5e085b075a94d1.png" alt="Pro-shop de golf, en pixel art" />
          </div>
          <h3>E-commerce</h3>
          <p>Proshops en ligne, vente de produits, cartes cadeaux et expériences.</p>
          <div className="mg-tags">
            <span>Proshop en ligne</span>
            <span>Vente de produits</span>
            <span>Cartes cadeaux</span>
            <span>Expériences</span>
          </div>
        </article>
      </div>
    </section>
  )
}

function FonctionnalitesSpecifiquesAuGolf() {
  return (
    <section className="mo-sec mc-car">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Fonctionnalités<span className="serif">spécifiques au golf.</span>
        </h2>
        <p className="mo-lead">Captures du site et du back-office du Château l’Arc Golf Club.</p>
      </div>
      <div className="mo-rail mc-rail">
        <div className="mo-track">
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Réservation de départs</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/8c9e1b90dcf458.jpg" alt="" />
              </div>
            </div>
            <h3>Réservation de départs</h3>
            <p>Réserver en ligne ou par téléphone, depuis n’importe quelle page du site.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Le parcours</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/7a925e15ecb2e0.jpg" alt="" />
              </div>
            </div>
            <h3>Le parcours</h3>
            <p>Le parcours présenté comme il le mérite : chiffres clés, architecte, visite en images.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Tarifs & green fees</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/64525d51033540.jpg" alt="" />
              </div>
            </div>
            <h3>Tarifs & green fees</h3>
            <p>Green fees, carnets et abonnements, toujours à jour : c’est l’accueil qui les gère.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Compétitions & résultats</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/5b81411ff7e76f.jpg" alt="" />
              </div>
            </div>
            <h3>Compétitions & résultats</h3>
            <p>Résultats importés, classement vérifié, publication en un clic.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">État du parcours & bandeau</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/640db08a1fe9fc.jpg" alt="" />
              </div>
            </div>
            <h3>État du parcours & bandeau</h3>
            <p>Ouverture, voiturettes, practice, restaurant : l’accueil met à jour, le site suit.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Pop-up marketing</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/dd157dcd71774f.jpg" alt="" />
              </div>
            </div>
            <h3>Pop-up marketing</h3>
            <p>Stages, événements, offres du moment : une pop-up pilotée depuis le back-office.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">L’Académie</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/5e9c86f1e60ec9.jpg" alt="" />
              </div>
            </div>
            <h3>L’Académie</h3>
            <p>Cours et stages présentés par niveau, avec demande d’inscription.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Adhésion en ligne</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/8deab05355e477.jpg" alt="" />
              </div>
            </div>
            <h3>Adhésion en ligne</h3>
            <p>Un parcours « Devenir membre » qui présente les formules et qualifie la demande.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Séminaires & privatisation</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/6656fa29418d13.jpg" alt="" />
              </div>
            </div>
            <h3>Séminaires & privatisation</h3>
            <p>Les demandes d’entreprises guidées, puis envoyées au bon interlocuteur.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function VosOutilsUnSeul() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Vos outils,<span className="serif">un seul écosystème.</span>
        </h2>
        <p className="mo-lead">Connectez votre site aux outils que vous utilisez déjà.</p>
      </div>
      <div className="mg-int">
        <div data-row="0">
          <span className="it-lg">
            <img src="/images/e92ef03659.png" alt="" width="20" height="20" />
          </span>
          <div>
            <b>Prima Golf</b>
            <span>Réservation & gestion</span>
          </div>
        </div>
        <div data-row="0">
          <span className="it-lg">
            <img className="pxsvg" src="/px/art-61cb0575.svg" alt="" width={20} height={20} />
          </span>
          <div>
            <b>Chronogolf</b>
            <span>Réservation & gestion</span>
          </div>
        </div>
        <div data-row="0">
          <span className="it-lg">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 52.1">
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
        <div data-row="1">
          <span className="it-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <div data-row="1">
          <span className="it-lg">
            <img className="pxsvg" src="/px/art-7ae4795f.svg" alt="" width={20} height={20} />
          </span>
          <div>
            <b>Shopify</b>
            <span>Boutique</span>
          </div>
        </div>
        <div data-row="-1">
          <span className="it-lg it-fill">
            <img src="/images/7954283424ddad.png" alt="" width="20" height="20" />
          </span>
          <div>
            <b>Zenchef</b>
            <span>Restaurant</span>
          </div>
        </div>
        <div data-row="2">
          <span className="it-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <div data-row="2">
          <span className="it-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <div data-row="4">
          <span className="it-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <div data-row="3">
          <span className="it-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <div data-row="-1">
          <span className="it-lg">
            <img className="pxsvg" src="/px/art-6e9a9d8a.svg" alt="" width={20} height={20} />
          </span>
          <div>
            <b>Calendly</b>
            <span>Rendez-vous</span>
          </div>
        </div>
        <div data-row="-1">
          <span className="it-lg">
            <img className="pxsvg" src="/px/art-e8b3551a.svg" alt="" width={20} height={20} />
          </span>
          <div>
            <b>Axeptio</b>
            <span>Consentement</span>
          </div>
        </div>
      </div>
      <p className="mg-note">
        Exemples d’outils courants dans les golfs. La connexion (API, widget ou export) est vérifiée au
        cadrage, avant le devis.
      </p>
    </section>
  )
}

function CasClientChateauL() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Cas client<span className="serif">Château l’Arc Golf Club.</span>
        </h2>
        <p className="mo-lead">
          Un club de Provence qui voulait un site à la hauteur de son domaine, et une équipe autonome au
          quotidien.
        </p>
      </div>
      <div className="win win-shot mc-win ">
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
          <img className="shot" src="/images/661531aedb86a4.jpg" alt="" />
        </div>
      </div>
      <div className="mc-list mg-case">
        <div className="case-k">Ce qu’on a fait</div>
        <ul>
          <li>Refonte UX/UI et direction artistique</li>
          <li>Site sur-mesure, mobile d’abord</li>
          <li>Back-office départs, offres et événements</li>
          <li>Vidéo de lancement</li>
        </ul>
      </div>
      <Link to="/realisations/chateau-larc" className="btn btn-ink mo-btn mo-btn-full">
        Lire le cas client
      </Link>
    </section>
  )
}

function VosQuestionsDeGolf() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Vos questions<span className="serif">de golf.</span>
        </h2>
      </div>
      <div className="mo-faq">
        <div className="mo-q">
          <div className="mo-q-h">
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
        <div className="mo-q">
          <div className="mo-q-h">
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
        <div className="mo-q">
          <div className="mo-q-h">
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
        <div className="mo-q">
          <div className="mo-q-h">
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
            Oui : pro-shop, cartes cadeaux et expériences peuvent être vendus en ligne. Les green fees passent
            par votre logiciel de réservation, intégré au site.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
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
            Votre équipe, depuis le back-office : tarifs, état du parcours, offres et événements. C’est ce que
            fait l’accueil du Château l’Arc Golf Club.
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
          Et si votre site devenait<span className="serif">un vrai atout pour votre golf ?</span>
        </h2>
        <a className="btn btn-acc mo-btn">Démarrer un projet</a>{' '}
        <a className="btn btn-line mo-btn">Analyser mon site</a>{' '}
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
          Studio de design et de développement web basé à Paris. Sites sur-mesure, e-commerce, applications et
          visibilité.
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
    <section className="artboard mo">
      <MobileNav />
      <MoHero />
      <MoMedia />
      <MgProof />
      <CeQuOnConstruit />
      <FonctionnalitesSpecifiquesAuGolf />
      <VosOutilsUnSeul />
      <CasClientChateauL />
      <VosQuestionsDeGolf />
      <MoFt />
    </section>
  )
}
