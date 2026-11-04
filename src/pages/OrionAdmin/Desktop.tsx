import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Orion Admin</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Orion Admin</span>
        <span className="serif">L’espace client inclus dans chaque projet.</span>
      </h1>
      <div className="hero-row cs-row">
        <p className="lead">
          Notre outil : chaque client a son espace pour suivre le projet (étapes, documents, messages,
          validations) et, une fois le site en ligne, le gérer au quotidien.
        </p>
        <div className="cs-facts">
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
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media cs-hero">
      <img src="/images/4b8094654fed91.png" alt="Orion Admin, la nuit" />
      <div className="win cs-win cs-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">Orion Admin — Château l’Arc Golf Club</span>
          <span className="win-sp" />
        </div>
        <img className="shot" src="/images/94f1f7140db692.jpg" alt="Le projet Orion Admin" />
      </div>
      <div className="capt">Orion Admin, la nuit</div>
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
          <p>Suivre son projet sans relancer personne,</p>
          <p className="serif">puis gérer son site au quotidien.</p>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce qu’on a fait</div>
          <ul>
            <li>Le suivi du projet, étape par étape, avec une préprod pour tester avant la mise en ligne</li>
            <li>Documents, messages et validations au même endroit</li>
            <li>Après la mise en ligne : le back-office du site, sur mesure</li>
            <li>Pour le Château l’Arc : état du parcours, tarifs, pop-up et résultats des compétitions</li>
          </ul>
        </div>
        <div className="cs-b2 pp-more">
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
              <span className="win-title">Orion Admin — Château l’Arc Golf Club</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/640db08a1fe9fc.jpg" alt="Le projet Orion Admin" />
          </div>
          <h3>État du parcours & bandeau</h3>
          <p>Ouverture, voiturettes, practice, restaurant ; l’accueil met à jour, le site suit.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Orion Admin — Château l’Arc Golf Club</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/dd157dcd71774f.jpg" alt="Le projet Orion Admin" />
          </div>
          <h3>Pop-up marketing</h3>
          <p>Stages, événements, offres du moment, pilotés depuis le back-office.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Orion Admin — Château l’Arc Golf Club</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/5b81411ff7e76f.jpg" alt="Le projet Orion Admin" />
          </div>
          <h3>Compétitions & résultats</h3>
          <p>Résultats importés, classement vérifié, publication en un clic.</p>
        </article>
      </div>
    </section>
  )
}

function Dathy() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="cs-next" data-proj="dathy">
        <div className="cs-nx-l">
          <span className="p-tag">Projet suivant</span>
          <h2 className="h2">DATHY</h2>
          <p className="lead">
            Le site d’un cabinet d’assistance à maîtrise d’ouvrage en bâtiment et travaux publics, dans le
            Vexin.
          </p>
          <div className="cs-nx-b">
            <Link to="/realisations/dathy" className="btn btn-ink" data-proj="dathy">
              Voir le projet
            </Link>
            <Link to="/realisations" className="lnk" data-pv="realisations">
              Toutes les réalisations
            </Link>
          </div>
        </div>
        <div className="p-media cs-nx-m">
          <img src="/images/dc0beeb280fba7.png" alt="" />
          <div className="win win-shot mdb-cwin">
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
              <img className="shot" src="/images/d6469bcda29f1a.jpg" alt="Le site DATHY" />
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
            Un projet à suivre de près ?<span className="serif">Démarrons-le.</span>
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
      <Dathy />
      <GCta />
    </section>
  )
}
