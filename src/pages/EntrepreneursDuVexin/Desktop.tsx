import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Association des Entrepreneurs du Vexin</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Association des Entrepreneurs du Vexin</span>
        <span className="serif">Le réseau des chefs d’entreprise du Vexin.</span>
      </h1>
      <div className="hero-row cs-row">
        <p className="lead">
          Le réseau des chefs d’entreprise du Vexin : petits-déjeuners, afterworks, conférences et visites
          d’entreprises, avec un site pour présenter les membres et faire adhérer.
        </p>
        <div className="cs-facts">
          <div>
            <span>Client</span>
            <b>Association · Vexin</b>
          </div>
          <div>
            <span>Projet</span>
            <b>Site + espace membres</b>
          </div>
          <div>
            <span>Fonctions</span>
            <b>Annuaire, agenda, adhésion en ligne</b>
          </div>
          <div>
            <span>En ligne</span>
            <b>association-ev.fr</b>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media cs-hero">
      <img src="/images/17682ce2f50cef.png" alt="Le Vexin, en pixel" />
      <div className="win cs-win cs-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">association-ev.fr</span>
          <span className="win-sp" />
        </div>
        <img
          className="shot"
          src="/images/f7f70ac67d2f8d.jpg"
          alt="Le projet Association des Entrepreneurs du Vexin"
        />
      </div>
      <div className="capt">Le Vexin, en pixel</div>
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
          <p>Présenter les membres du réseau,</p>
          <p className="serif">et donner envie d’adhérer.</p>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce qu’on a fait</div>
          <ul>
            <li>Présentation de l’association, de ses valeurs et de sa charte</li>
            <li>Annuaire des membres, avec une fiche par entrepreneur</li>
            <li>Agenda des événements, relié au blog</li>
            <li>Adhésion en ligne et espace membre (connexion, compte)</li>
            <li>FAQ pour les futurs adhérents</li>
          </ul>
        </div>
        <div className="cs-b2 pp-more">
          <div className="case-k">Pour aller plus loin</div>
          <ul>
            <li>
              <a className="lnk" href="https://association-ev.fr/" target="_blank" rel="noopener">
                Voir le site en ligne
              </a>
            </li>
            <li>
              <Link to="/pour-qui/associations" className="lnk" data-pv="associations">
                Le cas sur la page « Associations »
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
              <span className="win-title">association-ev.fr</span>
              <span className="win-sp" />
            </div>
            <img
              className="shot"
              src="/images/a3f2097a4f9879.jpg"
              alt="Le projet Association des Entrepreneurs du Vexin"
            />
          </div>
          <h3>Nos membres</h3>
          <p>Chaque entrepreneur présenté, avec son entreprise.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">association-ev.fr</span>
              <span className="win-sp" />
            </div>
            <img
              className="shot"
              src="/images/b6a413e2267a48.jpg"
              alt="Le projet Association des Entrepreneurs du Vexin"
            />
          </div>
          <h3>Nos événements</h3>
          <p>Les prochains rendez-vous du réseau.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">association-ev.fr</span>
              <span className="win-sp" />
            </div>
            <img
              className="shot"
              src="/images/388ec2a8c02406.jpg"
              alt="Le projet Association des Entrepreneurs du Vexin"
            />
          </div>
          <h3>La FAQ</h3>
          <p>Les questions des futurs adhérents, avant de dire « J’adhère ».</p>
        </article>
      </div>
      <div className="mdb-visit">
        <a className="btn btn-ink" href="https://association-ev.fr/" target="_blank" rel="noopener">
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
          <img
            src="/images/7c5a27924f6eb5.jpg"
            alt="Le site Association des Entrepreneurs du Vexin sur mobile"
          />
          <img
            src="/images/0532b458e8d391.jpg"
            alt="Le site Association des Entrepreneurs du Vexin sur mobile"
          />
        </div>
      </div>
    </section>
  )
}

function HoussesTaxi() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="cs-next" data-proj="housses-taxi">
        <div className="cs-nx-l">
          <span className="p-tag">Projet suivant</span>
          <h2 className="h2">Housses Taxi</h2>
          <p className="lead">
            Le site d’un fabricant de housses sur mesure pour taxis et VTC, dans le Val-d’Oise.
          </p>
          <div className="cs-nx-b">
            <Link to="/realisations/housses-taxi" className="btn btn-ink" data-proj="housses-taxi">
              Voir le projet
            </Link>
            <Link to="/realisations" className="lnk" data-pv="realisations">
              Toutes les réalisations
            </Link>
          </div>
        </div>
        <div className="p-media cs-nx-m">
          <img src="/images/6fd799a3a74785.png" alt="" />
          <div className="win win-shot mdb-cwin">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">houssestaxi.com</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img className="shot" src="/images/17eafb1d2deb75.jpg" alt="Le site Housses Taxi" />
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
            Une association à faire grandir ?<span className="serif">Parlons-en.</span>
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
      <HoussesTaxi />
      <GCta />
    </section>
  )
}
