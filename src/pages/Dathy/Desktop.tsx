import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>DATHY</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">DATHY</span>
        <span className="serif">Le trait juste, pour un métier de précision.</span>
      </h1>
      <div className="hero-row cs-row">
        <p className="lead">
          Deux associés, plus de 30 ans de terrain chacun, qui accompagnent communes et maîtres d’ouvrage en
          bâtiment et travaux publics, dans le Val-d’Oise et les Yvelines.
        </p>
        <div className="cs-facts">
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
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media cs-hero">
      <img src="/images/dc0beeb280fba7.png" alt="Une planche « Voirie » du site, en pixel" />
      <div className="win cs-win cs-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">dathy.fr</span>
          <span className="win-sp" />
        </div>
        <img className="shot" src="/images/d6469bcda29f1a.jpg" alt="Le projet DATHY" />
      </div>
      <div className="capt">Une planche « Voirie » du site, en pixel</div>
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
          <p>Montrer un savoir-faire de terrain,</p>
          <p className="serif">avec la précision d’un plan.</p>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce qu’on a fait</div>
          <ul>
            <li>
              Une direction artistique « table à dessin » : planches au graphite et cartouche de plan en pied
              de page
            </li>
            <li>
              La méthode en six étapes, de l’étude à la réception, avec un exemple de livrable à chaque étape
            </li>
            <li>Une page par domaine : voirie, réseaux, bâtiment, espaces extérieurs</li>
            <li>Un blog et une FAQ pour répondre aux questions des communes</li>
            <li>Méga-menus et version mobile soignée</li>
          </ul>
        </div>
        <div className="cs-b2 pp-more">
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
      </div>
    </section>
  )
}

function LeProjetEnImages() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Le projet,
          <br />
          <span className="serif">en images.</span>
        </h2>
        <p className="lead">Les écrans clés, tels qu’on les a conçus.</p>
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
              <span className="win-title">dathy.fr</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/f19dc14763e05b.jpg" alt="Le projet DATHY" />
          </div>
          <h3>De l’étude à la réception</h3>
          <p>À chaque étape, ce que le client a entre les mains.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">dathy.fr</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/61aa1aca5392f4.jpg" alt="Le projet DATHY" />
          </div>
          <h3>Voirie, réseaux, bâtiment, espaces extérieurs</h3>
          <p>Une planche par domaine.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">dathy.fr</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/c350b0c0a4dbb1.jpg" alt="Le projet DATHY" />
          </div>
          <h3>Conseils et retours de terrain</h3>
          <p>Les articles qui répondent aux communes.</p>
        </article>
      </div>
    </section>
  )
}

function SurMobilePensePour() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Sur mobile,
          <br />
          <span className="serif">pensé pour le pouce.</span>
        </h2>
        <p className="lead">
          La version mobile n’est pas une réduction du site : menus, boutons et contenus sont repensés pour
          une main.
        </p>
      </div>
      <div className="pp-mob">
        <div className="mdb-phones">
          <img src="/images/5267a9059c97a6.jpg" alt="Le site DATHY sur mobile" />
          <img src="/images/a29ba2169ad980.jpg" alt="Le site DATHY sur mobile" />
        </div>
      </div>
    </section>
  )
}

function LesBocauxDuVexin() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="cs-next" data-proj="les-bocaux-du-vexin">
        <div className="cs-nx-l">
          <span className="p-tag">Projet suivant</span>
          <h2 className="h2">Les Bocaux du Vexin</h2>
          <p className="lead">
            La boutique Shopify d’une conserverie du Vexin : bocaux consignés, box à composer et abonnement.
          </p>
          <div className="cs-nx-b">
            <Link
              to="/realisations/les-bocaux-du-vexin"
              className="btn btn-ink"
              data-proj="les-bocaux-du-vexin"
            >
              Voir le projet
            </Link>
            <Link to="/realisations" className="lnk" data-pv="realisations">
              Toutes les réalisations
            </Link>
          </div>
        </div>
        <div className="p-media cs-nx-m">
          <img src="/images/07246a74f6555c.png" alt="" />
          <div className="win win-shot win-golf win-bv">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">lesbocauxduvexin.fr</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img className="shot" src="/images/4decbda594bb3c.jpg" alt="La boutique Les Bocaux du Vexin" />
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
            Un cabinet à faire connaître ?<span className="serif">Traçons votre site.</span>
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
    <section className="artboard g-page cs-page pp-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <LeBriefEnDeux />
      <LeProjetEnImages />
      <SurMobilePensePour />
      <LesBocauxDuVexin />
      <GCta />
    </section>
  )
}
