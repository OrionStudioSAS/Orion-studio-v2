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
          Tous <i>11</i>
        </span>
        <span className="" data-k="site">
          Sites internet <i>6</i>
        </span>
        <span className="" data-k="shop">
          E-commerce <i>4</i>
        </span>
        <span className="" data-k="app">
          Applications & outils <i>6</i>
        </span>
        <span className="" data-k="da">
          Direction artistique & UX <i>3</i>
        </span>
      </div>
    </div>
  )
}

function MoRzn() {
  return <div className="mo-rzn">11 projets</div>
}

function MoRzs() {
  return (
    <section className="mo-sec mo-rzs">
      <div className="mo-projs">
        <article className="mo-proj" data-cats="site app da" data-to="/realisations/chateau-larc">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/e70252f225f7d4.png" alt="" />
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
                <img className="shot" src="/images/661531aedb86a4.jpg" alt="" />
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
            <img className="mo-pm-bg" src="/images/b07c317bbc84a7.png" alt="" />
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
                <img className="cfg-shot" src="/images/cfe60288d854b0.png" alt="" />
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
        <article className="mo-proj" data-cats="site shop app" data-to="/realisations/moulin-de-balme">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/4a723a9387332c.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Le Moulin de Balme</span>
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
            <h3>
              <Link to="/realisations/moulin-de-balme">Le Moulin de Balme</Link>
            </h3>
            <span>Boulangerie · Site + back-office</span>
          </div>
          <p>
            La boulangerie de Stéphane et Tomoko Reinat, à Brive : un site avec click & collect, et un
            back-office pour tout gérer depuis le fournil.
          </p>
          <a className="lnk mo-more">Lire l’étude de cas</a>
        </article>
        <article className="mo-proj" data-cats="site da">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/dc0beeb280fba7.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">DATHY</span>
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
            <h3>DATHY</h3>
            <span>Site vitrine · DA</span>
          </div>
          <p>
            Le site d’un cabinet d’assistance à maîtrise d’ouvrage en bâtiment et travaux publics, dans le
            Vexin.
          </p>
          <Link to="/realisations/dathy" className="lnk mo-more" data-proj="dathy">
            Voir le projet
          </Link>
        </article>
        <article className="mo-proj" data-cats="shop">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/881de3b40197db.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Ocha & Co.</span>
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
            <h3>Ocha & Co.</h3>
            <span>E-commerce · Shopify</span>
          </div>
          <p>
            La boutique en ligne d’une maison de thé japonaise : matchas et thés bio, quiz pour trouver le
            sien.
          </p>
          <Link to="/realisations/ocha-and-co" className="lnk mo-more" data-proj="ocha-and-co">
            Voir le projet
          </Link>
        </article>
        <article className="mo-proj" data-cats="site app">
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
        <article className="mo-proj" data-cats="site app">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/17682ce2f50cef.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Association des Entrepreneurs du Vexin</span>
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
            <h3>Association des Entrepreneurs du Vexin</h3>
            <span>Association · Site + espace membres</span>
          </div>
          <p>Le site du réseau des chefs d’entreprise du Vexin : membres, événements et adhésion en ligne.</p>
          <Link
            to="/realisations/entrepreneurs-du-vexin"
            className="lnk mo-more"
            data-proj="entrepreneurs-du-vexin"
          >
            Voir le projet
          </Link>
        </article>
        <article className="mo-proj" data-cats="site">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/6fd799a3a74785.png" alt="" />
            <div className="win rz-wire mo-wire">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Housses Taxi</span>
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
            <h3>Housses Taxi</h3>
            <span>Site vitrine · TPE</span>
          </div>
          <p>Le site d’un fabricant de housses sur mesure pour taxis et VTC, dans le Val-d’Oise.</p>
          <Link to="/realisations/housses-taxi" className="lnk mo-more" data-proj="housses-taxi">
            Voir le projet
          </Link>
        </article>
        <article className="mo-proj" data-cats="shop">
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
          <Link
            to="/realisations/les-bocaux-du-vexin"
            className="lnk mo-more"
            data-proj="les-bocaux-du-vexin"
          >
            Voir le projet
          </Link>
        </article>
        <article className="mo-proj" data-cats="app">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/0c6fffca9924a1.png" alt="" />
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
                <img className="shot" src="/images/94f1f7140db692.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="mo-pmeta">
            <h3>Orion Admin</h3>
            <span>Interface d’administration · sur mesure</span>
          </div>
          <p>L’interface faite sur mesure pour piloter son site : chiffres, contenus, langues et tout ce que l’activité demande.</p>
          <Link to="/orion-admin" className="lnk mo-more" data-proj="orion-admin">
            Voir le projet
          </Link>
        </article>
        <article className="mo-proj" data-cats="shop da">
          <div className="mo-pm">
            <img className="mo-pm-bg" src="/images/5e44d143820ccb.png" alt="" />
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
            <span>E-commerce · Refonte UX/CRO · 2025</span>
          </div>
          <p>
            La refonte de la boutique d’un fabricant de compléments alimentaires : diagnostic, routine sur
            mesure, abonnements.
          </p>
          <Link to="/realisations/osmose-nutrition" className="lnk mo-more" data-proj="osmose-nutrition">
            Voir le projet
          </Link>
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
            <img src="/images/a58f0039fd543e.png" alt="Château l’Arc Golf Club" style={{ height: '54px' }} />
          </div>
          <div>
            <img src="/images/f929bc41088d4e.png" alt="Stand-ING" style={{ height: '34px' }} />
          </div>
          <div>
            <img src="/images/407078ca1be0b8.png" alt="Le Moulin de Balme" style={{ height: '56px' }} />
          </div>
          <div>
            <img src="/images/682cb609d42336.png" alt="DATHY" style={{ height: '44px' }} />
          </div>
          <div>
            <img src="/images/c89d8692d26a0a.png" alt="Swing Call" style={{ height: '22px' }} />
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
