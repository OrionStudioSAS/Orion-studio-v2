import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { ChateauLArcGolf } from '../../components/shared/ChateauLArcGolf'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Le Moulin de Balme</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Le Moulin de Balme</span>
        <span className="serif">Le pain de Brive, réinventé par un voyageur.</span>
      </h1>
      <div className="hero-row cs-row">
        <p className="lead">
          La boulangerie de Stéphane et Tomoko Reinat, à Brive-la-Gaillarde. On a réalisé son site avec click
          & collect, et conçu le back-office qui permet à la boutique de tout gérer : produits, carte de la
          semaine, recettes et commandes.
        </p>
        <div className="cs-facts">
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
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media cs-hero">
      <img src="/images/4a723a9387332c.png" alt="Le four du Moulin de Balme, en pixel art" />
      <div className="win cs-win cs-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">moulin-de-balme.fr</span>
          <span className="win-sp" />
        </div>
        <img className="shot" src="/images/ce971a6eeb6bd1.jpg" alt="Capture du site du Moulin de Balme" />
      </div>
      <div className="capt">Le four du Moulin de Balme, en pixel</div>
    </div>
  )
}

function LeBriefEnDeux() {
  return (
    <section className="sec" style={{ padding: '0', borderTop: 'none' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '112px' }}>
        <h2 className="h2">
          Le brief
          <br />
          <span className="serif">en deux phrases.</span>
        </h2>
      </div>
      <div className="cs-brief">
        <div className="cs-b1">
          <p>Que le pain se commande la veille,</p>
          <p className="serif">et que la boutique gère tout, seule.</p>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce qu’on a fait</div>
          <ul>
            <li>Site vitrine et boutique click & collect</li>
            <li>Back-office sur mesure : produits, catégories, semaine, recettes, commandes, clients</li>
            <li>Version mobile du back-office, pour préparer la journée</li>
            <li>Interface du back-office en français et en japonais</li>
          </ul>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce que la boulangerie fait seule</div>
          <ul>
            <li>Mettre un produit en ligne, ou le retirer, d’un geste</li>
            <li>Composer la carte de la semaine, jour par jour</li>
            <li>Préparer les commandes du lendemain</li>
            <li>Publier une recette sur le site</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function LeSiteCoteClients() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Le site,
          <br />
          <span className="serif">côté clients.</span>
        </h2>
        <p className="lead">
          Commander avant 14 h, retirer dès 7 h le lendemain : le click & collect est au cœur du site, avec un
          compte à rebours jusqu’à la clôture des commandes.
        </p>
      </div>
      <div className="cs-grid cs-g3">
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">moulin-de-balme.fr</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/87791a3fdc31ca.jpg" alt="Capture du site du Moulin de Balme" />
          </div>
          <h3>Sortie du four</h3>
          <p>
            Les produits phares, ajoutés au panier en un geste, avec la commande avant 14 h pour le lendemain.
          </p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">moulin-de-balme.fr</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/501c118b126979.jpg" alt="Capture du site du Moulin de Balme" />
          </div>
          <h3>Le Moulin®</h3>
          <p>L’histoire de Stéphane et Tomoko, de Tokyo à Brive, racontée sur la page d’accueil.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">moulin-de-balme.fr</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/26e35bfa563679.jpg" alt="Capture du site du Moulin de Balme" />
          </div>
          <h3>Cette semaine</h3>
          <p>Les pains qui sortent du four jour par jour, avec les horaires de la boutique.</p>
        </article>
      </div>
      <div className="mdb-visit">
        <a className="btn btn-ink" href="https://www.moulin-de-balme.fr/" target="_blank" rel="noopener">
          Voir le site en ligne
        </a>
      </div>
    </section>
  )
}

function LeBackOfficeCote() {
  return (
    <section className="cs-dark">
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Le back-office,
          <br />
          <span className="serif">côté fournil.</span>
        </h2>
        <p className="lead">
          Un outil pensé pour la boulangerie : ce qu’il faut préparer demain d’abord, le reste à deux clics.
        </p>
      </div>
      <div className="cs-bo">
        <div className="win cs-win cs-bowin">
          <div className="win-bar">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
            <span className="win-title">Le Moulin de Balme — Administration</span>
            <span className="win-sp" />
          </div>
          <img
            className="shot"
            src="/images/d89e25eb5f99ba.jpg"
            alt="Écran du back-office du Moulin de Balme"
          />
        </div>
        <div className="cs-bo-r">
          <h3>Le tableau de bord</h3>
          <p>
            Commandes à confirmer, retraits du lendemain, commandes récentes et carte de la semaine : la
            journée tient sur un écran.
          </p>
          <a className="btn btn-acc">Démarrer un projet</a>
        </div>
      </div>
      <div className="cs-grid cs-g4 mdb-g4">
        <article className="cs-tile cs-d">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Le Moulin de Balme — Administration</span>
              <span className="win-sp" />
            </div>
            <img
              className="shot"
              src="/images/d9139b697b0568.jpg"
              alt="Écran du back-office du Moulin de Balme"
            />
          </div>
          <h3>Produits</h3>
          <p>
            Disponible, mis en avant : un interrupteur par produit, et une recherche immédiate dans le
            catalogue.
          </p>
        </article>
        <article className="cs-tile cs-d">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Le Moulin de Balme — Administration</span>
              <span className="win-sp" />
            </div>
            <img
              className="shot"
              src="/images/64e10a453deeb5.jpg"
              alt="Écran du back-office du Moulin de Balme"
            />
          </div>
          <h3>La semaine</h3>
          <p>Chaque jour, les produits proposés : une case à cocher, enregistrée aussitôt.</p>
        </article>
        <article className="cs-tile cs-d">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Le Moulin de Balme — Administration</span>
              <span className="win-sp" />
            </div>
            <img
              className="shot"
              src="/images/99cad20b25e72f.jpg"
              alt="Écran du back-office du Moulin de Balme"
            />
          </div>
          <h3>Une commande</h3>
          <p>
            Le détail, l’heure de retrait et une seule action selon le statut : confirmer, marquer prête,
            retirée.
          </p>
        </article>
        <article className="cs-tile cs-d">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Le Moulin de Balme — Administration</span>
              <span className="win-sp" />
            </div>
            <img
              className="shot"
              src="/images/eccd84255782dd.jpg"
              alt="Écran du back-office du Moulin de Balme"
            />
          </div>
          <h3>Les recettes</h3>
          <p>Ingrédients, étapes et photos : les recettes du site s’écrivent comme une fiche produit.</p>
        </article>
      </div>
    </section>
  )
}

function SurMobileEtEn() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Sur mobile,
          <br />
          <span className="serif">et en japonais.</span>
        </h2>
        <p className="lead">Le back-office suit Stéphane au fournil et parle la langue de Tomoko.</p>
      </div>
      <div className="mdb-two">
        <div className="mdb-m">
          <div className="mdb-phones">
            <img src="/images/916cfee082e014.jpg" alt="Back-office du Moulin de Balme sur mobile" />
            <img src="/images/dd48dfda618299.jpg" alt="Back-office du Moulin de Balme sur mobile" />
          </div>
          <h3>Préparer la journée depuis le téléphone</h3>
          <p>
            Accueil, commandes, semaine et produits dans une barre d’onglets ; les actions restent sous le
            pouce.
          </p>
        </div>
        <div className="mdb-j">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Le Moulin de Balme — Administration</span>
              <span className="win-sp" />
            </div>
            <img
              className="shot"
              src="/images/b18dc2409ae4a5.jpg"
              alt="Écran du back-office du Moulin de Balme"
            />
          </div>
          <h3>Une interface en japonais</h3>
          <p>
            Libellés, boutons et formats de date passent en japonais ; les noms des produits et des recettes
            restent tels qu’ils ont été saisis.
          </p>
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
            Une boutique à mettre en ligne ?<span className="serif">Faisons lever le projet.</span>
          </h2>
          <div className="cta-r">
            <div className="cta-btns">
              <a className="btn btn-line">Analyser mon site</a>
              <a className="btn btn-acc">
                Démarrer un projet <span className="kbd">P</span>
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
    <section className="artboard g-page cs-page mdb-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <LeBriefEnDeux />
      <LeSiteCoteClients />
      <LeBackOfficeCote />
      <SurMobileEtEn />
      <ChateauLArcGolf />
      <GCta />
    </section>
  )
}
