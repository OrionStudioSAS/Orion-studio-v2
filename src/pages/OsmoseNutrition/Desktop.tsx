import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Osmose Nutrition</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Osmose Nutrition</span>
        <span className="serif">Du diagnostic à l’abonnement.</span>
      </h1>
      <div className="hero-row cs-row">
        <p className="lead">
          Osmose Nutrition (O.N) fabrique en France des compléments alimentaires. On a repensé toute la
          boutique pour la conversion : du diagnostic à l’abonnement, jusqu’aux e-mails de relance.
        </p>
        <div className="cs-facts">
          <div>
            <span>Client</span>
            <b>Compléments alimentaires · fabriqués en France</b>
          </div>
          <div>
            <span>Projet</span>
            <b>Refonte UX/CRO de la boutique</b>
          </div>
          <div>
            <span>Parcours</span>
            <b>Diagnostic, routine, abonnement</b>
          </div>
          <div>
            <span>E-mails</span>
            <b>Séquences Klaviyo</b>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media cs-hero">
      <img src="/images/5e44d143820ccb.png" alt="Osmose Nutrition, en pixel" />
      <div className="win cs-win cs-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">Osmose Nutrition — maquettes</span>
          <span className="win-sp" />
        </div>
        <img className="shot" src="/images/b351708a31fde9.jpg" alt="Le projet Osmose Nutrition" />
      </div>
      <div className="capt">Osmose Nutrition, en pixel</div>
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
          <p>Aider chacun à trouver sa cure,</p>
          <p className="serif">puis lui donner envie de revenir.</p>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce qu’on a fait</div>
          <ul>
            <li>Page d’accueil et méga-menu par objectif : énergie, immunité, sommeil…</li>
            <li>Un diagnostic en quelques questions, qui recommande une cure</li>
            <li>« Composez votre routine » : un pack sur mesure, construit produit par produit</li>
            <li>Fiche produit avec abonnement et barre d’achat fixe sur mobile</li>
            <li>Panier latéral, compte client et gestion des abonnements</li>
            <li>Séquences d’e-mails Klaviyo : bienvenue, panier abandonné, réachat</li>
          </ul>
        </div>
        <div className="cs-b2 pp-more">
          <div className="case-k">Pour aller plus loin</div>
          <ul>
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
              <span className="win-title">Osmose Nutrition — maquettes</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/f18125d7351f9c.jpg" alt="Le projet Osmose Nutrition" />
          </div>
          <h3>Le diagnostic</h3>
          <p>Quelques questions, puis une cure recommandée.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Osmose Nutrition — maquettes</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/a32872dd39f5d4.jpg" alt="Le projet Osmose Nutrition" />
          </div>
          <h3>Composez votre routine</h3>
          <p>La cure se construit produit par produit.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Osmose Nutrition — maquettes</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/8a597c2e12ae53.jpg" alt="Le projet Osmose Nutrition" />
          </div>
          <h3>Le compte client</h3>
          <p>Abonnements, prochaines livraisons, modifications.</p>
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
          <img src="/images/ecac3c9eeb863c.jpg" alt="Le site Osmose Nutrition sur mobile" />
          <img src="/images/895a729eedcaa4.jpg" alt="Le site Osmose Nutrition sur mobile" />
        </div>
      </div>
    </section>
  )
}

function OchaCo() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="cs-next" data-proj="ocha-and-co">
        <div className="cs-nx-l">
          <span className="p-tag">Projet suivant</span>
          <h2 className="h2">Ocha & Co.</h2>
          <p className="lead">
            La boutique en ligne d’une maison de thé japonaise : matchas et thés bio, quiz pour trouver le
            sien.
          </p>
          <div className="cs-nx-b">
            <Link to="/realisations/ocha-and-co" className="btn btn-ink" data-proj="ocha-and-co">
              Voir le projet
            </Link>
            <Link to="/realisations" className="lnk" data-pv="realisations">
              Toutes les réalisations
            </Link>
          </div>
        </div>
        <div className="p-media cs-nx-m">
          <img src="/images/881de3b40197db.png" alt="" />
          <div className="win win-shot mdb-cwin">
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
              <img className="shot" src="/images/71eb80b3e243f6.jpg" alt="Le site Ocha & Co." />
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
            Une boutique qui doit mieux vendre ?<span className="serif">Regardons-la ensemble.</span>
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
      <OchaCo />
      <GCta />
    </section>
  )
}
