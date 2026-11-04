import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Housses Taxi</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Housses Taxi</span>
        <span className="serif">Des housses sur mesure, posées à l’atelier.</span>
      </h1>
      <div className="hero-row cs-row">
        <p className="lead">
          Un atelier de Pierrelaye, dans le Val-d’Oise, qui fabrique des housses de sièges sur mesure pour les
          taxis, les VTC, les utilitaires et les vans, posées sur place par ses installateurs.
        </p>
        <div className="cs-facts">
          <div>
            <span>Client</span>
            <b>Fabricant de housses · Val-d’Oise</b>
          </div>
          <div>
            <span>Projet</span>
            <b>Site vitrine</b>
          </div>
          <div>
            <span>Pour</span>
            <b>Taxis, VTC, utilitaires, vans</b>
          </div>
          <div>
            <span>En ligne</span>
            <b>houssestaxi.com</b>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media cs-hero">
      <img src="/images/6fd799a3a74785.png" alt="L’atelier, en pixel" />
      <div className="win cs-win cs-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">houssestaxi.com</span>
          <span className="win-sp" />
        </div>
        <img className="shot" src="/images/17eafb1d2deb75.jpg" alt="Le projet Housses Taxi" />
      </div>
      <div className="capt">L’atelier, en pixel</div>
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
          <p>Montrer le savoir-faire de l’atelier,</p>
          <p className="serif">et faire venir les rendez-vous.</p>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce qu’on a fait</div>
          <ul>
            <li>Présentation des housses par véhicule : taxi, VTC, utilitaire, van</li>
            <li>Le parcours client en trois étapes, du rendez-vous à la pose</li>
            <li>Prise de rendez-vous et coordonnées de l’atelier sur chaque page</li>
            <li>Pages « Notre histoire », « Nos marchés » et FAQ</li>
            <li>Version mobile soignée, pour les chauffeurs</li>
          </ul>
        </div>
        <div className="cs-b2 pp-more">
          <div className="case-k">Pour aller plus loin</div>
          <ul>
            <li>
              <a className="lnk" href="https://www.houssestaxi.com/" target="_blank" rel="noopener">
                Voir le site en ligne
              </a>
            </li>
            <li>
              <Link to="/pour-qui/tpe-pme" className="lnk" data-pv="tpe-pme">
                Le cas sur la page « TPE & PME »
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
              <span className="win-title">houssestaxi.com</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/1a94289d7d9cd0.jpg" alt="Le projet Housses Taxi" />
          </div>
          <h3>Comment ça marche</h3>
          <p>Rendez-vous, pose dans les locaux, départ avec un véhicule comme neuf.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">houssestaxi.com</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/0750102270d8d9.jpg" alt="Le projet Housses Taxi" />
          </div>
          <h3>La FAQ</h3>
          <p>Les questions des chauffeurs, regroupées dans une FAQ claire.</p>
        </article>
      </div>
      <div className="mdb-visit">
        <a className="btn btn-ink" href="https://www.houssestaxi.com/" target="_blank" rel="noopener">
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
          <img src="/images/afaca6e7e387d4.jpg" alt="Le site Housses Taxi sur mobile" />
          <img src="/images/309c514cdd4e40.jpg" alt="Le site Housses Taxi sur mobile" />
        </div>
      </div>
    </section>
  )
}

function OrionAdmin() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="cs-next" data-proj="orion-admin" data-to="/realisations/chateau-larc">
        <div className="cs-nx-l">
          <span className="p-tag">Projet suivant</span>
          <h2 className="h2">Orion Admin</h2>
          <p className="lead">
            Notre outil : suivi du projet, documents, messagerie et gestion du site au même endroit.
          </p>
          <div className="cs-nx-b">
            <Link to="/realisations/orion-admin" className="btn btn-ink" data-proj="orion-admin">
              Voir le projet
            </Link>
            <Link to="/realisations" className="lnk" data-pv="realisations">
              Toutes les réalisations
            </Link>
          </div>
        </div>
        <div className="p-media cs-nx-m">
          <img src="/images/4b8094654fed91.png" alt="" />
          <div className="win win-shot win-adm">
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
              <img
                className="shot"
                src="/images/94f1f7140db692.jpg"
                alt="Accueil d’Orion Admin pour le Château l’Arc Golf Club"
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
            Un atelier à faire connaître ?<span className="serif">Montrons-le.</span>
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
      <OrionAdmin />
      <GCta />
    </section>
  )
}
