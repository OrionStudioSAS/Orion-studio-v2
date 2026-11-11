import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Château l’Arc</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Château l’Arc
        <br />
        Golf Club<span className="serif">Donner envie de venir jouer.</span>
      </h1>
      <p className="mo-lead">
        Un club de Provence qui voulait un site à la hauteur de son domaine, et une équipe autonome au
        quotidien. On a dessiné et développé le site, puis le back-office qui permet à l’accueil de tout
        mettre à jour.
      </p>
      <div className="mc-facts">
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
    </section>
  )
}

function McHero() {
  return (
    <div className="mc-hero">
      <img
        className="mc-hero-bg"
        src="/images/0c7a0e0257cfb3.png"
        alt="Le parcours du Château l’Arc en pixel art"
      />
      <div className="mc-logo">
        <img src="/images/433e53ddc3b7c2.png" alt="Château l’Arc Golf Club" />
      </div>
      <div className="win win-shot mc-win mc-hwin">
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
        <p>Un site à la hauteur du domaine,</p>
        <p className="mc-b1s">et une équipe autonome au quotidien.</p>
      </div>
      <div className="mc-list">
        <div className="case-k">Ce qu’on a fait</div>
        <ul>
          <li>Refonte UX/UI et direction artistique</li>
          <li>Site sur-mesure, mobile d’abord</li>
          <li>Back-office départs, offres et événements</li>
          <li>Vidéo de lancement</li>
        </ul>
      </div>
      <div className="mc-list">
        <div className="case-k">Ce que l’accueil gère seul</div>
        <ul>
          <li>Tarifs, carnets et abonnements</li>
          <li>État du parcours et bandeau</li>
          <li>Pop-up marketing</li>
          <li>Résultats des compétitions</li>
        </ul>
      </div>
    </section>
  )
}

function LeSiteReserverDepuis() {
  return (
    <section className="mo-sec mc-car">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Le site,<span className="serif">réserver depuis chaque page.</span>
        </h2>
        <p className="mo-lead">
          Captures du site en ligne. La réservation de départs est accessible depuis chaque page, en ligne ou
          par téléphone.
        </p>
      </div>
      <div className="mc-pad">
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
      <div className="mc-count">
        <span>1 / 6</span>
        <div className="pixbar mo-pb">
          <span className="pb-on" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
        </div>
      </div>
    </section>
  )
}

function LeBackOfficeDans() {
  return (
    <section className="mo-sec mc-car mc-dark">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Le back-office,<span className="serif">dans Orion Admin.</span>
        </h2>
        <p className="mo-lead">
          L’accueil met à jour le site sans nous appeler : statut du parcours, tarifs, pop-up, résultats. Les
          changements sont visibles dès la publication.
        </p>
      </div>
      <div className="mc-pad">
        <div className="win win-shot mc-win ">
          <div className="win-bar">
            <span className="dots">
              <i />
              <i />
              <i />
            </span>
            <span className="win-title">Orion Admin — Château l’Arc</span>
            <span className="win-sp" />
          </div>
          <div className="win-body">
            <img className="shot" src="/images/94f1f7140db692.jpg" alt="" />
          </div>
        </div>
        <h3 className="mc-boh">Le tableau de bord du club</h3>
        <p className="mc-bop">
          Pour le Château l’Arc, Orion Admin est le back-office du quotidien : chiffres du site, installations, tarifs, pop-up et compétitions.
        </p>
        <Link to="/orion-admin" className="btn btn-acc mo-btn">
          Découvrir Orion Admin
        </Link>
      </div>
      <div className="mo-rail mc-rail">
        <div className="mo-track">
          <article className="mc-tile mc-d">
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
          <article className="mc-tile mc-d">
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
          <article className="mc-tile mc-d">
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
        </div>
      </div>
    </section>
  )
}

function ResultatsEtTemoignage() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Résultats<span className="serif">et témoignage.</span>
        </h2>
      </div>
      <div className="mc-av">
        <img className="mo-av-bg" src="/images/729bb5e7cb4d36.png" alt="" />
        <div className="mo-av-veil" />
        <div className="mo-av-in">
          <div className="av-k mo-av-k">
            <span>Témoignage</span>
            <span>Château l’Arc Golf Club</span>
          </div>
          <img className="pxsvg av-q" src="/px/av-q-4a640bcb.svg" alt="" width={44} height={32} />
          <p className="mo-av-txt mc-todo">
            « Témoignage à recueillir auprès de la direction du Château l’Arc Golf Club. »
          </p>
          <div className="mo-av-by">
            <span className="av-logo mo-av-logo">
              <img src="/images/433e53ddc3b7c2.png" alt="Château l’Arc Golf Club" />
            </span>
            <div>
              <b>Direction du club</b>
              <span>Château l’Arc Golf Club · Site + back-office</span>
            </div>
          </div>
          <div className="mc-res">
            <div className="av-rk">Résultats</div>
            <p>
              Les chiffres (réservations en ligne, trafic, demandes de séminaires) seront publiés avec
              l’accord du club.
            </p>
          </div>
          <a className="btn av-btn mo-btn">Voir le site du club</a>
        </div>
      </div>
    </section>
  )
}

function McNk() {
  return (
    <section className="mo-sec">
      <div className="mc-nk">Projet suivant</div>
      <article className="mo-proj" data-to="/realisations/stand-ing">
        <div className="mo-pm">
          <img className="mo-pm-bg" src="/images/b07c317bbc84a7.png" alt="" />
          <div className="win win-shot mo-win">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Stand-ING — Configurateur</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img className="cfg-shot" src="/images/cfe60288d854b0.png" alt="" />
            </div>
          </div>
        </div>
        <div className="mo-pmeta">
          <h3>
            <Link to="/realisations/stand-ing">Stand-ING</Link>
          </h3>
          <span>Configurateur 3D · 2026</span>
        </div>
        <p>Un configurateur de stands en ligne : le client compose, visualise et reçoit son devis.</p>
      </article>
      <Link to="/realisations" className="btn btn-ink mo-btn mo-btn-full mc-all">
        Toutes les réalisations
      </Link>
    </section>
  )
}

function MoFt() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Un club, un domaine ?<span className="serif">Construisons votre site.</span>
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
      <McHero />
      <LeBriefEnDeux />
      <LeSiteReserverDepuis />
      <LeBackOfficeDans />
      <ResultatsEtTemoignage />
      <McNk />
      <MoFt />
    </section>
  )
}
