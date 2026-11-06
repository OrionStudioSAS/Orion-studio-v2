import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>DATHY</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        DATHY<span className="serif">Le trait juste, pour un métier de précision.</span>
      </h1>
      <p className="mo-lead">
        Deux associés, plus de 30 ans de terrain chacun, qui accompagnent communes et maîtres d’ouvrage en
        bâtiment et travaux publics, dans le Val-d’Oise et les Yvelines.
      </p>
      <div className="mc-facts">
        <div>
          <span>Client</span>
          <b>Assistance à maîtrise d’ouvrage · Vexin</b>
        </div>
        <div>
          <span>Projet</span>
          <b>Site vitrine + direction artistique</b>
        </div>
        <div>
          <span>Pages</span>
          <b>Méthode, domaines, associés, blog, FAQ</b>
        </div>
        <div>
          <span>Format</span>
          <b>Desktop et mobile</b>
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
        src="/images/dc0beeb280fba7.png"
        alt="Une planche « Voirie » du site, en pixel"
        style={{ left: '0', width: '390px', height: '380px', objectFit: 'cover' }}
      />
      <div className="win win-shot mc-win mc-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">dathy.fr</span>
          <span className="win-sp" />
        </div>
        <div className="win-body">
          <img className="shot" src="/images/d6469bcda29f1a.jpg" alt="" />
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
        <p>Montrer un savoir-faire de terrain,</p>
        <p className="mc-b1s">avec la précision d’un plan.</p>
      </div>
      <div className="mc-list">
        <div className="case-k">Ce qu’on a fait</div>
        <ul>
          <li>
            Une direction artistique « table à dessin » : planches au graphite et cartouche de plan en pied de
            page
          </li>
          <li>
            La méthode en six étapes, de l’étude à la réception, avec un exemple de livrable à chaque étape
          </li>
          <li>Une page par domaine : voirie, réseaux, bâtiment, espaces extérieurs</li>
          <li>Un blog et une FAQ pour répondre aux questions des communes</li>
          <li>Méga-menus et version mobile soignée</li>
        </ul>
      </div>
      <div className="mc-list pp-more">
        <div className="case-k">Pour aller plus loin</div>
        <ul>
          <li>
            <Link to="/pour-qui/independants" className="lnk" data-pv="independants">
              Le cas sur la page « Indépendants »
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
                <span className="win-title">dathy.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/f19dc14763e05b.jpg" alt="" />
              </div>
            </div>
            <h3>De l’étude à la réception</h3>
            <p>À chaque étape, ce que le client a entre les mains.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">dathy.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/61aa1aca5392f4.jpg" alt="" />
              </div>
            </div>
            <h3>Voirie, réseaux, bâtiment, espaces extérieurs</h3>
            <p>Une planche par domaine.</p>
          </article>
          <article className="mc-tile">
            <div className="win win-shot mc-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">dathy.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/c350b0c0a4dbb1.jpg" alt="" />
              </div>
            </div>
            <h3>Conseils et retours de terrain</h3>
            <p>Les articles qui répondent aux communes.</p>
          </article>
        </div>
      </div>
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
        <img src="/images/5267a9059c97a6.jpg" alt="Le site DATHY sur mobile" />
        <img src="/images/a29ba2169ad980.jpg" alt="Le site DATHY sur mobile" />
      </div>
    </section>
  )
}

function McNk() {
  return (
    <section className="mo-sec">
      <div className="mc-nk">Projet suivant</div>
      <article className="mo-proj" data-proj="les-bocaux-du-vexin">
        <div className="mo-pm">
          <img className="mo-pm-bg" src="/images/ba943c5909c9cc.png" alt="" />
          <div className="shop mo-shop">
            <div className="shop-img">
              <span className="jar" />
            </div>
            <div className="shop-b">
              <div className="shop-k">Épicerie · Bocaux</div>
              <div className="shop-t">Soupe de potimarron</div>
              <div className="shop-row">
                <span className="shop-p">6,90 €</span>
                <span className="shop-q">— 1 +</span>
              </div>
              <div className="shop-cta">Ajouter au panier</div>
            </div>
          </div>
        </div>
        <div className="mo-pmeta">
          <h3>Les Bocaux du Vexin</h3>
          <span>E-commerce · Shopify · 2026</span>
        </div>
        <p>
          La boutique Shopify d’une conserverie du Vexin : bocaux consignés, box à composer et abonnement.
        </p>
        <Link to="/realisations/les-bocaux-du-vexin" className="lnk mo-more" data-proj="les-bocaux-du-vexin">
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
          Un cabinet à faire connaître ?<span className="serif">Traçons votre site.</span>
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
