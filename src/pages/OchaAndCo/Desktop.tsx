import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Ocha & Co.</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Ocha & Co.</span>
        <span className="serif">Le thé japonais, à portée de clic.</span>
      </h1>
      <div className="hero-row cs-row">
        <p className="lead">
          Une maison de thé japonaise familiale, installée à Shizuoka, qui vend ses matchas et ses thés bio en
          ligne, en Europe comme aux États-Unis.
        </p>
        <div className="cs-facts">
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
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media cs-hero">
      <img src="/images/881de3b40197db.png" alt="Ocha & Co., en pixel" />
      <div className="win cs-win cs-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">ochaandco.com</span>
          <span className="win-sp" />
        </div>
        <img className="shot" src="/images/71eb80b3e243f6.jpg" alt="Le projet Ocha & Co." />
      </div>
      <div className="capt">Ocha & Co., en pixel</div>
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
          <p>Faire découvrir le thé japonais,</p>
          <p className="serif">et guider chacun vers le bon.</p>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce qu’on a fait</div>
          <ul>
            <li>Boutique Shopify multidevise, livrée à l’international</li>
            <li>Un quiz « Tea finder » pour trouver son matcha ou son thé vert</li>
            <li>Catalogue par familles : matcha, thés verts, hojicha, thés de saison</li>
            <li>Le récit de la maison : le producteur, la culture bio, la fraîcheur</li>
            <li>Un espace dédié aux professionnels pour la revente</li>
          </ul>
        </div>
        <div className="cs-b2 pp-more">
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
              <span className="win-title">ochaandco.com</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/b97d35e8690d69.jpg" alt="Le projet Ocha & Co." />
          </div>
          <h3>Le Tea finder</h3>
          <p>Deux quiz pour trouver son thé en une minute.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">ochaandco.com</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/2685c9ee94e19a.jpg" alt="Le projet Ocha & Co." />
          </div>
          <h3>La boutique</h3>
          <p>Les thés, leurs prix et leurs avis, en un coup d’œil.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">ochaandco.com</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/a3f708de3d060d.jpg" alt="Le projet Ocha & Co." />
          </div>
          <h3>Les familles de thés</h3>
          <p>Les familles de thés, pour parcourir le catalogue autrement.</p>
        </article>
      </div>
      <div className="mdb-visit">
        <a className="btn btn-ink" href="https://www.ochaandco.com/" target="_blank" rel="noopener">
          Voir le site en ligne
        </a>
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
          <img src="/images/b3e851d1416d6e.jpg" alt="Le site Ocha & Co. sur mobile" />
          <img src="/images/91efd754b4bd4f.jpg" alt="Le site Ocha & Co. sur mobile" />
        </div>
      </div>
    </section>
  )
}

function SwingCall() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="cs-next" data-proj="swing-call">
        <div className="cs-nx-l">
          <span className="p-tag">Projet suivant</span>
          <h2 className="h2">Swing Call</h2>
          <p className="lead">Le site d’une start-up qui équipe les golfs d’un agent IA téléphonique.</p>
          <div className="cs-nx-b">
            <Link to="/realisations/swing-call" className="btn btn-ink" data-proj="swing-call">
              Voir le projet
            </Link>
            <Link to="/realisations" className="lnk" data-pv="realisations">
              Toutes les réalisations
            </Link>
          </div>
        </div>
        <div className="p-media cs-nx-m">
          <img src="/images/6cb0d8d4f25c2a.png" alt="" />
          <div className="win win-shot mdb-cwin">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">swingcall.fr</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img className="shot" src="/images/a4c19bfe3dd683.jpg" alt="Le site Swing Call" />
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
            Vendre à l’international ?<span className="serif">Ouvrons la boutique.</span>
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
      <SwingCall />
      <GCta />
    </section>
  )
}
