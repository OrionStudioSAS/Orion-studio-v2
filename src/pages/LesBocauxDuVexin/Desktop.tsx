import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/realisations">
          Réalisations / <b>Les Bocaux du Vexin</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Les Bocaux du Vexin</span>
        <span className="serif">La vraie cuisine du Vexin, en bocal.</span>
      </h1>
      <div className="hero-row cs-row">
        <p className="lead">
          Une conserverie du Vexin : des recettes artisanales et locales, prêtes en quelques minutes, livrées
          dans des bocaux consignés.
        </p>
        <div className="cs-facts">
          <div>
            <span>Client</span>
            <b>Conserverie artisanale · Vexin</b>
          </div>
          <div>
            <span>Projet</span>
            <b>Refonte Shopify, thème Ignite</b>
          </div>
          <div>
            <span>Boutique</span>
            <b>Bocaux, box à composer, abonnement</b>
          </div>
          <div>
            <span>Livrable</span>
            <b>Maquettes desktop</b>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media cs-hero">
      <img src="/images/07246a74f6555c.png" alt="Le Vexin, en pixel" />
      <div className="win cs-win cs-hwin">
        <div className="win-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <span className="win-title">lesbocauxduvexin.fr</span>
          <span className="win-sp" />
        </div>
        <img className="shot" src="/images/4decbda594bb3c.jpg" alt="Le projet Les Bocaux du Vexin" />
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
          <p>Une boutique qui donne faim,</p>
          <p className="serif">et simple à tenir au quotidien.</p>
        </div>
        <div className="cs-b2">
          <div className="case-k">Ce qu’on a fait</div>
          <ul>
            <li>Refonte de la boutique Shopify sur le thème Ignite</li>
            <li>Les bocaux rangés par envie : apéro, entrées, plats, desserts</li>
            <li>Une box à composer soi-même : 6, 9 ou 12 bocaux</li>
            <li>Des fiches produit avec achat unique ou abonnement, ingrédients et allergènes</li>
            <li>Méga-menu, panier latéral et accès dédié aux professionnels</li>
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
              <span className="win-title">lesbocauxduvexin.fr</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/d5e63f6f3b68a0.jpg" alt="Le projet Les Bocaux du Vexin" />
          </div>
          <h3>Les préférés</h3>
          <p>Les bocaux préférés, ajoutés au panier sans quitter la page.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">lesbocauxduvexin.fr</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/724ec9d47d9598.jpg" alt="Le projet Les Bocaux du Vexin" />
          </div>
          <h3>Compose ta box</h3>
          <p>6, 9 ou 12 bocaux, à son goût.</p>
        </article>
        <article className="cs-tile">
          <div className="win cs-win ">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">lesbocauxduvexin.fr</span>
              <span className="win-sp" />
            </div>
            <img className="shot" src="/images/72072556a42d8b.jpg" alt="Le projet Les Bocaux du Vexin" />
          </div>
          <h3>La fiche produit</h3>
          <p>Achat unique ou abonnement, en un geste.</p>
        </article>
      </div>
    </section>
  )
}

function OsmoseNutrition() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="cs-next" data-proj="osmose-nutrition">
        <div className="cs-nx-l">
          <span className="p-tag">Projet suivant</span>
          <h2 className="h2">Osmose Nutrition</h2>
          <p className="lead">
            La refonte de la boutique d’un fabricant de compléments alimentaires : diagnostic, routine sur
            mesure, abonnements.
          </p>
          <div className="cs-nx-b">
            <Link to="/realisations/osmose-nutrition" className="btn btn-ink" data-proj="osmose-nutrition">
              Voir le projet
            </Link>
            <Link to="/realisations" className="lnk" data-pv="realisations">
              Toutes les réalisations
            </Link>
          </div>
        </div>
        <div className="p-media cs-nx-m">
          <img src="/images/5e44d143820ccb.png" alt="" />
          <div className="win win-shot mdb-cwin">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">Osmose Nutrition — maquettes</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img
                className="shot"
                src="/images/b351708a31fde9.jpg"
                alt="Maquette de la boutique Osmose Nutrition"
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
            Une boutique Shopify en tête ?<span className="serif">Construisons-la.</span>
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
      <OsmoseNutrition />
      <GCta />
    </section>
  )
}
