import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Château l’Arc Golf Club</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Château l’Arc Golf Club</span>
        <span className="serif">Donner envie de venir jouer.</span>
      </h1>
      <div className="hero-row cs-row">
        <p className="lead">
          Un club de Provence qui voulait un site à la hauteur de son domaine, et une équipe autonome au
          quotidien. On a dessiné et développé le site, puis le back-office qui permet à l’accueil de tout
          mettre à jour.
        </p>
        <div className="cs-facts">
          <div>
            <span>Club</span>
            <b>Golf 18 trous · Fuveau, aux portes d’Aix-en-Provence</b>
          </div>
          <div>
            <span>Projet</span>
            <b>Site + back-office</b>
          </div>
          <div>
            <span>Année</span>
            <b>2026</b>
          </div>
          <div>
            <span>En ligne</span>
            <b>chateaularcgolfclub.com</b>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media cs-hero">
      <img src="/images/0c7a0e0257cfb3.png" alt="Le parcours du Château l’Arc en pixel art" />
      <div className="case-logo">
        <img src="/images/433e53ddc3b7c2.png" alt="Château l’Arc Golf Club" />
      </div>
      <div className="win cs-hwin">
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
          src="/images/661531aedb86a4.jpg"
          alt="Page d’accueil du site du Château l’Arc Golf Club"
        />
      </div>
      <div className="capt">Le parcours du Château l’Arc, en pixel</div>
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
          <p>Un site à la hauteur du domaine,</p>
          <p className="serif">et une équipe autonome au quotidien.</p>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce qu’on a fait</div>
          <ul>
            <li>Refonte UX/UI et direction artistique</li>
            <li>Site sur-mesure, mobile d’abord</li>
            <li>Back-office départs, offres et événements</li>
            <li>Vidéo de lancement</li>
          </ul>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce que l’accueil gère seul</div>
          <ul>
            <li>Tarifs, carnets et abonnements</li>
            <li>État du parcours et bandeau</li>
            <li>Pop-up marketing</li>
            <li>Résultats des compétitions</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function LeSiteReserverDepuis() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Le site,
          <br />
          <span className="serif">réserver depuis chaque page.</span>
        </h2>
        <p className="lead">
          Captures du site en ligne. La réservation de départs est accessible depuis chaque page, en ligne ou
          par téléphone.
        </p>
      </div>
      <div className="cs-site">
        <div className="win cs-win cs-big">
          <div className="win-bar">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
            <span className="win-title">chateaularcgolfclub.com</span>
            <span className="win-sp" />
          </div>
          <img className="shot" src="/images/661531aedb86a4.jpg" alt="" />
        </div>
        <div className="cs-side">
          <article className="cs-tile">
            <div className="win cs-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Réservation de départs</span>
                <span className="win-sp" />
              </div>
              <img className="shot" src="/images/8c9e1b90dcf458.jpg" alt="" />
            </div>
            <h3>Réservation de départs</h3>
            <p>Réserver en ligne ou par téléphone, depuis n’importe quelle page du site.</p>
          </article>
          <article className="cs-tile">
            <div className="win cs-win ">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Le parcours</span>
                <span className="win-sp" />
              </div>
              <img className="shot" src="/images/7a925e15ecb2e0.jpg" alt="" />
            </div>
            <h3>Le parcours</h3>
            <p>Le parcours présenté comme il le mérite : chiffres clés, architecte, visite en images.</p>
          </article>
        </div>
      </div>
      <div className="cs-grid cs-g4">
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Tarifs & green fees</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/64525d51033540.jpg" alt="" />
          </div>
          <h3>Tarifs & green fees</h3>
          <p>Green fees, carnets et abonnements, toujours à jour : c’est l’accueil qui les gère.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">L’Académie</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/5e9c86f1e60ec9.jpg" alt="" />
          </div>
          <h3>L’Académie</h3>
          <p>Cours et stages présentés par niveau, avec demande d’inscription.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Adhésion en ligne</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/8deab05355e477.jpg" alt="" />
          </div>
          <h3>Adhésion en ligne</h3>
          <p>Un parcours « Devenir membre » qui présente les formules et qualifie la demande.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Séminaires & privatisation</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/6656fa29418d13.jpg" alt="" />
          </div>
          <h3>Séminaires & privatisation</h3>
          <p>Les demandes d’entreprises guidées, puis envoyées au bon interlocuteur.</p>
        </article>
      </div>
    </section>
  )
}

function LeBackOfficeDans() {
  return (
    <section className="cs-dark">
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Le back-office,
          <br />
          <span className="serif">dans Orion Admin.</span>
        </h2>
        <p className="lead">
          L’accueil met à jour le site sans nous appeler : statut du parcours, tarifs, pop-up, résultats. Les
          changements sont visibles dès la publication.
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
            <span className="win-title">Orion Admin — Château l’Arc Golf Club</span>
            <span className="win-sp" />
          </div>
          <img
            className="shot"
            src="/images/94f1f7140db692.jpg"
            alt="Accueil d’Orion Admin pour le Château l’Arc Golf Club"
          />
        </div>
        <div className="cs-bo-r">
          <h3>Le tableau de bord du club</h3>
          <p>
            Pour le Château l’Arc, Orion Admin est le back-office du quotidien : chiffres du site, installations, tarifs, pop-up et compétitions.
          </p>
          <Link to="/orion-admin" className="btn btn-acc">
            Découvrir Orion Admin
          </Link>
        </div>
      </div>
      <div className="cs-grid cs-g3">
        <article className="cs-tile cs-d">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Compétitions & résultats</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/5b81411ff7e76f.jpg" alt="" />
          </div>
          <h3>Compétitions & résultats</h3>
          <p>Résultats importés, classement vérifié, publication en un clic.</p>
        </article>
        <article className="cs-tile cs-d">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">État du parcours & bandeau</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/640db08a1fe9fc.jpg" alt="" />
          </div>
          <h3>État du parcours & bandeau</h3>
          <p>Ouverture, voiturettes, practice, restaurant : l’accueil met à jour, le site suit.</p>
        </article>
        <article className="cs-tile cs-d">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Pop-up marketing</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/dd157dcd71774f.jpg" alt="" />
          </div>
          <h3>Pop-up marketing</h3>
          <p>Stages, événements, offres du moment : une pop-up pilotée depuis le back-office.</p>
        </article>
      </div>
    </section>
  )
}

function ResultatsEtTemoignage() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '112px' }}>
        <h2 className="h2">
          Résultats
          <br />
          <span className="serif">et témoignage.</span>
        </h2>
      </div>
      <div className="av-card cs-av">
        <img className="av-bg" src="/images/b1ad4d0b43d462.png" alt="" />
        <div className="av-veil" />
        <div className="av-l">
          <div className="av-k">
            <span>Témoignage</span>
            <span>Château l’Arc Golf Club</span>
          </div>
          <img className="pxsvg av-q" src="/px/av-q-179751fb.svg" alt="" width={55} height={40} />
          <p className="av-txt cs-todo">
            « Témoignage à recueillir auprès de la direction du Château l’Arc Golf Club. »
          </p>
          <div className="av-by">
            <span className="av-logo">
              <img src="/images/433e53ddc3b7c2.png" alt="Château l’Arc Golf Club" />
            </span>
            <div>
              <b>Direction du club</b>
              <span>Château l’Arc Golf Club · Site + back-office</span>
            </div>
          </div>
        </div>
        <div className="av-r">
          <div className="av-rk">Résultats</div>
          <p className="cs-res">
            Les chiffres (réservations en ligne, trafic, demandes de séminaires) seront publiés avec l’accord
            du club.
          </p>
          <div className="av-btns">
            <a className="btn av-btn">Voir le site du club</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function StandIng() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="cs-next" data-to="/realisations/stand-ing">
        <div className="cs-nx-l">
          <span className="p-tag">Projet suivant</span>
          <h2 className="h2">Stand-ING</h2>
          <p className="lead">
            Un configurateur de stands en ligne : le client compose, visualise et reçoit son devis.
          </p>
          <div className="cs-nx-b">
            <a className="btn btn-ink">Voir le projet</a>
            <Link to="/realisations" className="lnk">
              Toutes les réalisations
            </Link>
          </div>
        </div>
        <div className="p-media cs-nx-m">
          <img src="/images/2c63fe08cd774a.png" alt="" />
          <div className="win win-stand">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Stand-ING — Configurateur de stand 3D</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img
                className="cfg-shot"
                src="/images/cfe60288d854b0.png"
                alt="Configurateur de stand 3D Stand-ING"
              />
            </div>
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
            Un club, un domaine ?<span className="serif">Construisons votre site.</span>
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
    <section className="artboard g-page cs-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <LeBriefEnDeux />
      <LeSiteReserverDepuis />
      <LeBackOfficeDans />
      <ResultatsEtTemoignage />
      <StandIng />
      <GCta />
    </section>
  )
}
