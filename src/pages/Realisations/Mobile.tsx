import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MobileFooter } from '../../components/shared/MobileFooter'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Accueil / <b>Réalisations</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Réalisations<span className="serif">conçues et codées par le studio.</span>
      </h1>
      <p className="mo-lead">
        Sites sur-mesure, boutiques et outils métiers, conçus et développés de bout en bout par le studio.
      </p>
    </section>
  )
}

function MoRzf() {
  return (
    <div className="mo-rzf">
      <div className="mo-tabs mo-rzt">
        <span className="on" data-k="all">
          Tous <i>8</i>
        </span>
        <span className="" data-k="site">
          Sites internet <i>2</i>
        </span>
        <span className="" data-k="shop">
          E-commerce <i>2</i>
        </span>
        <span className="" data-k="app">
          Applications & outils <i>4</i>
        </span>
        <span className="" data-k="da">
          Direction artistique & UX <i>2</i>
        </span>
      </div>
    </div>
  )
}

function MoRzn() {
  return <div className="mo-rzn">8 projets · 2024–2026</div>
}

function MoRzs() {
  return (
    <section className="mo-sec mo-rzs">
      <div className="mo-projs">
        <article className="mo-proj" data-cats="site app da" data-to="/realisations/chateau-larc">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/img-f588b997.png" alt="" />
            <div className="win win-shot mo-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">chateaularcgolfclub.com</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img
                  className="shot"
                  src="/images/page-d-accueil-du-site-du-chateau-l-arc-golf-clu.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mo-pmeta">
            <h3>
              <Link to="/realisations/chateau-larc">Château l’Arc Golf Club</Link>
            </h3>
            <span>Golf · Site + back-office · 2026</span>
          </div>
          <p>
            Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et
            événements.
          </p>
          <a className="lnk mo-more">Lire l’étude de cas</a>
        </article>
        <article className="mo-proj" data-cats="app" data-to="/realisations/stand-ing">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/img-2c2cba64.png" alt="" />
            <div className="win win-shot mo-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Stand-ING — Configurateur</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="cfg-shot" src="/images/configurateur-de-stand-3d-stand-ing.png" alt="" />
              </div>
            </div>
          </div>
          <div className="mo-pmeta">
            <h3>
              <Link to="/realisations/stand-ing">Stand-ING</Link>
            </h3>
            <span>Configurateur 3D · 2026</span>
          </div>
          <p>Un configurateur de stands en ligne : le client compose, visualise et reçoit son devis.</p>
        </article>
        <article className="mo-proj" data-cats="shop">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/img-f1fadfaa.png" alt="" />
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
          <p>Une boutique Shopify simple à tenir au quotidien pour une conserverie locale.</p>
        </article>
        <article className="mo-proj" data-cats="app">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/img-035ca900.png" alt="" />
            <div className="win win-shot mo-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Orion Admin</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img
                  className="shot"
                  src="/images/accueil-d-orion-admin-pour-le-chateau-l-arc-golf.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mo-pmeta">
            <h3>Orion Admin</h3>
            <span>Espace client · inclus dans chaque projet</span>
          </div>
          <p>Notre outil : suivi du projet, documents, messagerie et gestion du site au même endroit.</p>
        </article>
        <article className="mo-proj" data-cats="shop">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/img-016e5f0f.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Osmose Nutrition</span>
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
            <h3>Osmose Nutrition</h3>
            <span>E-commerce · Abonnements · 2025</span>
          </div>
          <p>Une boutique en ligne avec abonnements.</p>
        </article>
        <article className="mo-proj" data-cats="da">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/img-6c874cfa.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Parker & Smith</span>
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
            <h3>Parker & Smith</h3>
            <span>Horlogerie · DA & UX · 2025</span>
          </div>
          <p>Direction artistique et UX pour une marque d’horlogerie.</p>
        </article>
        <article className="mo-proj" data-cats="app">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/img-2d4d06b2.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Tersen — Groupe Colas</span>
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
            <h3>Tersen — Groupe Colas</h3>
            <span>Plateforme SaaS · 2025</span>
          </div>
          <p>Une plateforme SaaS, de la conception au développement.</p>
        </article>
        <article className="mo-proj" data-cats="site">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/img-a8360f3c.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Absolute Boat</span>
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
            <h3>Absolute Boat</h3>
            <span>Yachting · Site · 2024</span>
          </div>
          <p>Le site d’une entreprise du yachting.</p>
        </article>
      </div>
    </section>
  )
}

function MoRzc() {
  return (
    <section className="mo-sec mo-rzc">
      <div className="mo-clients">
        <div className="mo-cl-k">Ils nous ont confié leurs projets</div>
        <div className="mo-cl-g">
          <div>
            <img
              src="/images/chateau-l-arc-golf-club.png"
              alt="Château l’Arc Golf Club"
              style={{ height: '54px' }}
            />
          </div>
          <div>
            <img src="/images/stand-ing.png" alt="Stand-ING" style={{ height: '34px' }} />
          </div>
          <div>
            <img src="/images/les-bocaux-du-vexin.png" alt="Les Bocaux du Vexin" style={{ height: '24px' }} />
          </div>
          <div>
            <img
              src="/images/association-des-entrepreneurs-du-vexin.png"
              alt="Association des Entrepreneurs du Vexin"
              style={{ height: '48px' }}
            />
          </div>
          <div>
            <img src="/images/dathy.png" alt="DATHY" style={{ height: '44px' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export function Mobile() {
  return (
    <section className="artboard mo">
      <MobileNav />
      <MoHero />
      <MoRzf />
      <MoRzn />
      <MoRzs />
      <MoRzc />
      <MobileFooter />
    </section>
  )
}
