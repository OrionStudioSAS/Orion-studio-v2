import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoMcNk } from '../../components/shared/MoMcNk'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Le Moulin de Balme</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Le Moulin de Balme<span className="serif">Le pain de Brive, réinventé par un voyageur.</span>
      </h1>
      <p className="mo-lead">
        La boulangerie de Stéphane et Tomoko Reinat, à Brive-la-Gaillarde. On a réalisé son site avec click &
        collect, et conçu le back-office qui permet à la boutique de tout gérer : produits, carte de la
        semaine, recettes et commandes.
      </p>
      <div className="mc-facts">
        <div>
          <span>Client</span>
          <b>Boulangerie artisanale · Brive-la-Gaillarde</b>
        </div>
        <div>
          <span>Projet</span>
          <b>Site + click & collect + back-office</b>
        </div>
        <div>
          <span>Back-office</span>
          <b>Français et japonais, desktop et mobile</b>
        </div>
        <div>
          <span>En ligne</span>
          <b>moulin-de-balme.fr</b>
        </div>
      </div>
    </section>
  )
}

function McHero() {
  return (
    <div className="mc-hero">
      <img
        className="mc-hero-bg"
        src="/images/4a723a9387332c.png"
        alt="Le four du Moulin de Balme, en pixel art"
        style={{ left: '0', width: '390px', height: '380px', objectFit: 'cover' }}
      />
      <div className="win win-shot mc-win mc-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">moulin-de-balme.fr</span>
          <span className="win-sp" />
        </div>
        <div className="win-body">
          <img className="shot" src="/images/ce971a6eeb6bd1.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

function LeBriefEnDeux() {
  return (
    <section className="mo-sec" style={{ borderTop: 'none' }}>
      <div className="mo-shead">
        <h2 className="mo-h2">
          Le brief<span className="serif">en deux phrases.</span>
        </h2>
      </div>
      <div className="mc-b1">
        <p>Que le pain se commande la veille,</p>
        <p className="mc-b1s">et que la boutique gère tout, seule.</p>
      </div>
      <div className="mc-list">
        <div className="case-k">Ce qu’on a fait</div>
        <ul>
          <li>Site vitrine et boutique click & collect</li>
          <li>Back-office sur mesure : produits, catégories, semaine, recettes, commandes, clients</li>
          <li>Version mobile du back-office, pour préparer la journée</li>
          <li>Interface du back-office en français et en japonais</li>
        </ul>
      </div>
      <div className="mc-list">
        <div className="case-k">Ce que la boulangerie fait seule</div>
        <ul>
          <li>Mettre un produit en ligne, ou le retirer, d’un geste</li>
          <li>Composer la carte de la semaine, jour par jour</li>
          <li>Préparer les commandes du lendemain</li>
          <li>Publier une recette sur le site</li>
        </ul>
      </div>
    </section>
  )
}

function LeSiteCoteClients() {
  return (
    <section className="mo-sec mc-car">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Le site,<span className="serif">côté clients.</span>
        </h2>
        <p className="mo-lead">Commander avant 14 h, retirer dès 7 h le lendemain.</p>
      </div>
      <div className="mo-rail mc-rail">
        <div className="mo-track">
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">moulin-de-balme.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/87791a3fdc31ca.jpg" alt="" />
              </div>
            </div>
            <h3>Sortie du four</h3>
            <p>
              Les produits phares, ajoutés au panier en un geste, avec la commande avant 14 h pour le
              lendemain.
            </p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">moulin-de-balme.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/501c118b126979.jpg" alt="" />
              </div>
            </div>
            <h3>Le Moulin®</h3>
            <p>L’histoire de Stéphane et Tomoko, de Tokyo à Brive, racontée sur la page d’accueil.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">moulin-de-balme.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/26e35bfa563679.jpg" alt="" />
              </div>
            </div>
            <h3>Cette semaine</h3>
            <p>Les pains qui sortent du four jour par jour, avec les horaires de la boutique.</p>
          </article>
        </div>
      </div>
      <a
        className="btn btn-ink mo-btn mo-btn-full mdb-mvisit"
        href="https://www.moulin-de-balme.fr/"
        target="_blank"
        rel="noopener"
      >
        Voir le site en ligne
      </a>
    </section>
  )
}

function LeBackOfficeCote() {
  return (
    <section className="mo-sec mc-car mc-dark">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Le back-office,<span className="serif">côté fournil.</span>
        </h2>
        <p className="mo-lead">Ce qu’il faut préparer demain d’abord, le reste à deux clics.</p>
      </div>
      <div className="mo-rail mc-rail">
        <div className="mo-track">
          <article className="mc-tile mc-d">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Administration</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/d89e25eb5f99ba.jpg" alt="" />
              </div>
            </div>
            <h3>Le tableau de bord</h3>
            <p>La journée tient sur un écran.</p>
          </article>
          <article className="mc-tile mc-d">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Administration</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/d9139b697b0568.jpg" alt="" />
              </div>
            </div>
            <h3>Produits</h3>
            <p>
              Disponible, mis en avant : un interrupteur par produit, et une recherche immédiate dans le
              catalogue.
            </p>
          </article>
          <article className="mc-tile mc-d">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Administration</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/64e10a453deeb5.jpg" alt="" />
              </div>
            </div>
            <h3>La semaine</h3>
            <p>Chaque jour, les produits proposés : une case à cocher, enregistrée aussitôt.</p>
          </article>
          <article className="mc-tile mc-d">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Administration</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/99cad20b25e72f.jpg" alt="" />
              </div>
            </div>
            <h3>Une commande</h3>
            <p>
              Le détail, l’heure de retrait et une seule action selon le statut : confirmer, marquer prête,
              retirée.
            </p>
          </article>
          <article className="mc-tile mc-d">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Administration</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/eccd84255782dd.jpg" alt="" />
              </div>
            </div>
            <h3>Les recettes</h3>
            <p>Ingrédients, étapes et photos : les recettes du site s’écrivent comme une fiche produit.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function SurMobileEtEn() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Sur mobile,<span className="serif">et en japonais.</span>
        </h2>
        <p className="mo-lead">Le back-office suit Stéphane au fournil et parle la langue de Tomoko.</p>
      </div>
      <div className="mb-phones">
        <img src="/images/916cfee082e014.jpg" alt="Back-office du Moulin de Balme sur mobile" />
        <img src="/images/dd48dfda618299.jpg" alt="Back-office du Moulin de Balme sur mobile" />
      </div>
      <div className="mdb-mj">
        <div className="win win-shot mc-win ">
          <div className="win-bar">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
            <span className="win-title">Administration · 日本語</span>
            <span className="win-sp" />
          </div>
          <div className="win-body">
            <img className="shot" src="/images/b18dc2409ae4a5.jpg" alt="" />
          </div>
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
          Une boutique à mettre en ligne ?<span className="serif">Faisons lever le projet.</span>
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
    <section className="artboard mo mdb-page">
      <MobileNav />
      <MoHero />
      <McHero />
      <LeBriefEnDeux />
      <LeSiteCoteClients />
      <LeBackOfficeCote />
      <SurMobileEtEn />
      <MoMcNk />
      <MoFt />
    </section>
  )
}
