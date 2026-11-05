import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Ocha & Co.</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Ocha & Co.<span className="serif">Le thé japonais, à portée de clic.</span>
      </h1>
      <p className="mo-lead">
        Une maison de thé japonaise familiale, installée à Shizuoka, qui vend ses matchas et ses thés bio en
        ligne, en Europe comme aux États-Unis.
      </p>
      <div className="mc-facts">
        <div>
          <span>Client</span>
          <b>Maison de thé japonaise · Shizuoka</b>
        </div>
        <div>
          <span>Projet</span>
          <b>Boutique Shopify internationale</b>
        </div>
        <div>
          <span>Parcours</span>
          <b>Quiz « Tea finder »</b>
        </div>
        <div>
          <span>En ligne</span>
          <b>ochaandco.com</b>
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
        src="/images/881de3b40197db.png"
        alt="Ocha & Co., en pixel"
        style={{ left: '0', width: '390px', height: '380px', objectFit: 'cover' }}
      />
      <div className="win win-shot mc-win mc-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">ochaandco.com</span>
          <span className="win-sp" />
        </div>
        <div className="win-body">
          <img className="shot" src="/images/71eb80b3e243f6.jpg" alt="" />
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
        <p>Faire découvrir le thé japonais,</p>
        <p className="mc-b1s">et guider chacun vers le bon.</p>
      </div>
      <div className="mc-list">
        <div className="case-k">Ce qu’on a fait</div>
        <ul>
          <li>Boutique Shopify multidevise, livrée à l’international</li>
          <li>Un quiz « Tea finder » pour trouver son matcha ou son thé vert</li>
          <li>Catalogue par familles : matcha, thés verts, hojicha, thés de saison</li>
          <li>Le récit de la maison : le producteur, la culture bio, la fraîcheur</li>
          <li>Un espace dédié aux professionnels pour la revente</li>
        </ul>
      </div>
      <div className="mc-list pp-more">
        <div className="case-k">Pour aller plus loin</div>
        <ul>
          <li>
            <a className="lnk" href="https://www.ochaandco.com/" target="_blank" rel="noopener">
              Voir le site en ligne
            </a>
          </li>
          <li>
            <Link to="/pour-qui/marques-e-commerce" className="lnk" data-pv="marques-e-commerce">
              Le cas sur la page « Marques & e-commerçants »
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
                <span className="win-title">ochaandco.com</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/b97d35e8690d69.jpg" alt="" />
              </div>
            </div>
            <h3>Le Tea finder</h3>
            <p>Deux quiz pour trouver son thé en une minute.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">ochaandco.com</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/2685c9ee94e19a.jpg" alt="" />
              </div>
            </div>
            <h3>La boutique</h3>
            <p>Les thés, leurs prix et leurs avis, en un coup d’œil.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">ochaandco.com</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/a3f708de3d060d.jpg" alt="" />
              </div>
            </div>
            <h3>Les familles de thés</h3>
            <p>Les familles de thés, pour parcourir le catalogue autrement.</p>
          </article>
        </div>
      </div>
      <a
        className="btn btn-ink mo-btn mo-btn-full mdb-mvisit"
        href="https://www.ochaandco.com/"
        target="_blank"
        rel="noopener"
      >
        Voir le site en ligne
      </a>
    </section>
  )
}

function SurMobilePensePour() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Sur mobile,<span className="serif">pensé pour le pouce.</span>
        </h2>
      </div>
      <div className="mb-phones">
        <img src="/images/b3e851d1416d6e.jpg" alt="Le site Ocha & Co. sur mobile" />
        <img src="/images/91efd754b4bd4f.jpg" alt="Le site Ocha & Co. sur mobile" />
      </div>
    </section>
  )
}

function McNk() {
  return (
    <section className="mo-sec">
      <div className="mc-nk">Projet suivant</div>
      <article className="mo-proj" data-proj="swing-call">
        <div className="mo-pm">
          <img className="mo-pm-bg" src="/images/6cb0d8d4f25c2a.png" alt="" />
          <div className="win rz-wire mo-wire">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Swing Call</span>
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
          <h3>Swing Call</h3>
          <span>Start-up · Site produit</span>
        </div>
        <p>Le site d’une start-up qui équipe les golfs d’un agent IA téléphonique.</p>
        <Link to="/realisations/swing-call" className="lnk mo-more" data-proj="swing-call">
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
          Vendre à l’international ?<span className="serif">Ouvrons la boutique.</span>
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
      <SurMobilePensePour />
      <McNk />
      <MoFt />
    </section>
  )
}
