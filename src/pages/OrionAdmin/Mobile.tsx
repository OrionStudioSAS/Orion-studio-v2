import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Orion Admin</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Orion Admin<span className="serif">L’espace client inclus dans chaque projet.</span>
      </h1>
      <p className="mo-lead">
        Notre outil : chaque client a son espace pour suivre le projet (étapes, documents, messages,
        validations) et, une fois le site en ligne, le gérer au quotidien.
      </p>
      <div className="mc-facts">
        <div>
          <span>Type</span>
          <b>Outil maison d’Orion Studio</b>
        </div>
        <div>
          <span>Pour</span>
          <b>Chaque client, inclus</b>
        </div>
        <div>
          <span>Contenu</span>
          <b>Étapes, documents, messages, validations</b>
        </div>
        <div>
          <span>Exemple</span>
          <b>Château l’Arc Golf Club</b>
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
        src="/images/4b8094654fed91.png"
        alt="Orion Admin, la nuit"
        style={{ left: '0', width: '390px', height: '380px', objectFit: 'cover' }}
      />
      <div className="win win-shot mc-win mc-hwin">
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
          <img className="shot" src="/images/94f1f7140db692.jpg" alt="" />
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
        <p>Suivre son projet sans relancer personne,</p>
        <p className="mc-b1s">puis gérer son site au quotidien.</p>
      </div>
      <div className="mc-list">
        <div className="case-k">Ce qu’on a fait</div>
        <ul>
          <li>Le suivi du projet, étape par étape, avec une préprod pour tester avant la mise en ligne</li>
          <li>Documents, messages et validations au même endroit</li>
          <li>Après la mise en ligne : le back-office du site, sur mesure</li>
          <li>Pour le Château l’Arc : état du parcours, tarifs, pop-up et résultats des compétitions</li>
        </ul>
      </div>
      <div className="mc-list pp-more">
        <div className="case-k">Pour aller plus loin</div>
        <ul>
          <li>
            <Link to="/realisations/chateau-larc" className="lnk" data-pv="chateau-larc">
              L’étude de cas Château l’Arc
            </Link>
          </li>
          <li>
            <Link to="/realisations" className="lnk" data-pv="realisations">
              Toutes les réalisations
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

function LeProjetEnImages() {
  return (
    <section className="mo-sec mc-car">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Le projet,<span className="serif">en images.</span>
        </h2>
        <p className="mo-lead">Les écrans clés, tels qu’on les a conçus.</p>
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
                <span className="win-title">Orion Admin — Château l’Arc Golf Club</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/640db08a1fe9fc.jpg" alt="" />
              </div>
            </div>
            <h3>État du parcours & bandeau</h3>
            <p>Ouverture, voiturettes, practice, restaurant ; l’accueil met à jour, le site suit.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
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
                <img className="shot" src="/images/dd157dcd71774f.jpg" alt="" />
              </div>
            </div>
            <h3>Pop-up marketing</h3>
            <p>Stages, événements, offres du moment, pilotés depuis le back-office.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
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
                <img className="shot" src="/images/5b81411ff7e76f.jpg" alt="" />
              </div>
            </div>
            <h3>Compétitions & résultats</h3>
            <p>Résultats importés, classement vérifié, publication en un clic.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function McNk() {
  return (
    <section className="mo-sec">
      <div className="mc-nk">Projet suivant</div>
      <article className="mo-proj" data-proj="dathy">
        <div className="mo-pm">
          <img className="mo-pm-bg" src="/images/dc0beeb280fba7.png" alt="" />
          <div className="win rz-wire mo-wire">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">DATHY</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <div className="wire" style={{ border: 'none', padding: '0' }}>
                <i style={{ width: '58%' }} />
                <i style={{ width: '36%' }} />
                <i className="blk" />
                <i style={{ width: '72%' }} />
                <i style={{ width: '44%' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="mo-pmeta">
          <h3>DATHY</h3>
          <span>Site vitrine · DA</span>
        </div>
        <p>
          Le site d’un cabinet d’assistance à maîtrise d’ouvrage en bâtiment et travaux publics, dans le
          Vexin.
        </p>
        <Link to="/realisations/dathy" className="lnk mo-more" data-proj="dathy">
          Voir le projet
        </Link>
      </article>
      <Link to="/realisations" className="btn btn-ink mo-btn mo-btn-full mc-all" data-pv="realisations">
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
          Un projet à suivre de près ?<span className="serif">Démarrons-le.</span>
        </h2>
        <a className="btn btn-acc mo-btn">Démarrer un projet</a>{' '}
        <a className="btn btn-line mo-btn">Analyser mon site</a>{' '}
        <span className="mail">
          ou écrivez à <b>hello@orion-studio.io</b>
        </span>
      </div>
      <div className="mo-ft-main">
        <span className="logo">
          <img className="px logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
          <img className="px logo-w" src="/px/logo-w-438c9e6d.svg" alt="" width={151} height={21} />
        </span>
        <p>
          Studio de design et de développement web basé à Paris. Sites sur-mesure, e-commerce, applications et
          visibilité.
        </p>
        <div className="mo-fcols">
          <div className="mo-fc">
            <div className="fc-k">Expertises</div>
            <Link to="/expertises/site-internet">Site internet</Link>
            <Link to="/expertises/developpement-applications">Développement d’applications</Link>
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
            <Link to="/le-studio">Le studio</Link>
            <a>Méthode</a>
            <Link to="/realisations/orion-admin">Orion Admin</Link>
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
              <b>Partout ailleurs</b>
              <span>France et international, en visio</span>
            </div>
            <a>Réserver</a>
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
            className="px bigword"
            src="/px/bigword-a5329b0d.svg"
            alt=""
            width={416}
            height={40}
            style={{ left: '-13px', top: '132px', opacity: '0.16' }}
          />
          <i className="betel" style={{ left: '193px', top: '88px' }} />
          <span className="orio" style={{ left: '91px', top: '34px' }} title="Orio et Bételgeuse">
            <span className="orio-in">
              <img className="px" src="/px/art-c8610941.svg" alt="" width={88} height={92} />
            </span>
          </span>
        </div>
        <div className="mo-legal">
          <div className="ft-lang">
            <span className="on">Français</span>
            <span>English</span>
          </div>
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
    <section className="artboard mo pp-page">
      <MobileNav />
      <MoHero />
      <McHero />
      <LeBriefEnDeux />
      <LeProjetEnImages />
      <McNk />
      <MoFt />
    </section>
  )
}
