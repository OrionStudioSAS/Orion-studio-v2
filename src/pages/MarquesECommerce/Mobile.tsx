import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoCommentOnTravaille2 } from '../../components/shared/MoCommentOnTravaille2'
import { MoParSecteurDesPages2 } from '../../components/shared/MoParSecteurDesPages2'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/pour-qui">
          Pour qui ? / <b>Marques & e-commerçants</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Agence e-commerce Shopify<span className="serif">pour les marques qui veulent grandir.</span>
      </h1>
      <p className="mo-lead">
        Création et refonte de boutiques Shopify, fiches produits qui convertissent, intégrations logistiques
        et marketing : on construit la boutique, et les outils pour la faire grandir.
      </p>
      <div className="mo-btns">
        <a className="btn btn-ink mo-btn">Analyser mon site</a>
        <Link to="/realisations" className="btn btn-ghost mo-btn">
          Voir nos réalisations
        </Link>
      </div>
    </section>
  )
}

function MoMedia() {
  return (
    <div className="mo-media mg-media">
      <div className="hm-layer">
        <img
          className="mo-media-bg"
          src="/images/97b1208992f93a.png"
          alt="Un atelier d’expédition avec des colis prêts à partir, en pixel art"
        />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="pxsvg omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde votre boutique
            <br />
            ensemble ?
          </span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              https://www.votre-boutique.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site</span>
          </div>
          <div className="mo-crit">
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Ventes
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Shopify
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Google
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Mobile
            </span>
          </div>
          <div className="mo-cfoot">
            <span className="ib">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1V13M1 7H13" stroke="#0E0E0C" strokeWidth="1.4" />
              </svg>
            </span>
            <span className="ib">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3H15M1 11H15" stroke="#0E0E0C" strokeWidth="1.4" />
                <rect
                  x="4"
                  y="1"
                  width="3"
                  height="4"
                  rx="1"
                  fill="#fff"
                  stroke="#0E0E0C"
                  strokeWidth="1.4"
                />
                <rect
                  x="9"
                  y="9"
                  width="3"
                  height="4"
                  rx="1"
                  fill="#fff"
                  stroke="#0E0E0C"
                  strokeWidth="1.4"
                />
              </svg>
            </span>
            <span className="send mo-send">Analyser mon site</span>
          </div>
        </div>
        <div className="mo-sug">
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-ca3eed21.svg" alt="" width={10} height={10} />
            <b>Refaire ma boutique</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-34cc7426.svg" alt="" width={10} height={10} />
            <b>Lancer Google Ads</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Remonter sur Google</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-92b066cf.svg" alt="" width={10} height={10} />
            <b>Être cité par ChatGPT</b>
          </span>
        </div>
        <div className="ch2-note mo-note">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.7" y="5" width="8.6" height="6.3" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path
              d="M2.6 5V3.4C2.6 2 3.7 0.9 5 0.9C6.3 0.9 7.4 2 7.4 3.4V5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          <span>
            Gratuit. Analyse de votre site et maquette de page d’accueil personnalisée, par e-mail sous
            quelques jours.
          </span>
        </div>
      </div>
      <div className="mo-capt">L’atelier d’expédition, 10 h</div>
    </div>
  )
}

function CeQuUneBoutique() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce qu’une boutique<span className="serif">bien construite change.</span>
        </h2>
      </div>
      <div className="sxm-ocs">
        <div className="sxm-oc">
          <h3>Plus de ventes</h3>
          <p>Des fiches produits claires, un panier fluide et un paiement sans friction.</p>
        </div>
        <div className="sxm-oc">
          <h3>Une boutique simple à gérer</h3>
          <p>Produits, stocks et commandes gérés au quotidien sans dépendre de nous.</p>
        </div>
        <div className="sxm-oc">
          <h3>Une marque qui se distingue</h3>
          <p>Un thème sur mesure, pas un modèle reconnu dès la page d’accueil.</p>
        </div>
      </div>
    </section>
  )
}

function CeQuOnLivre() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce qu’on livre<span className="serif">concrètement.</span>
        </h2>
        <p className="mo-lead">
          Chaque projet assemble les briques dont vous avez besoin, pas une de plus. Les écrans ci-dessous
          sont des exemples.
        </p>
      </div>
      <div className="sxm-cards">
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="win u-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">votre-marque.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <div className="wire" style={{ border: 'none', padding: '0' }}>
                  <i style={{ width: '55%' }} />
                  <i className="blk" />
                  <i style={{ width: '80%' }} />
                  <i style={{ width: '40%' }} />
                </div>
              </div>
            </div>
          </div>
          <h3>Boutique Shopify sur mesure</h3>
          <p>Un thème dessiné pour votre marque et vos produits.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="shop u-shop">
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
          <h3>Fiches produits</h3>
          <p>Photos, variantes, avis et réassurance au bon endroit.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="cart u-bare">
              <div className="cart-l">
                <span className="cart-th" />
                <span>
                  Coffret découverte<small>Quantité 2</small>
                </span>
                <b>48,00 €</b>
              </div>
              <div className="cart-l">
                <span className="cart-th" />
                <span>
                  Livraison<small>Point relais</small>
                </span>
                <b>Offerte</b>
              </div>
              <div className="cart-btn">Commander</div>
            </div>
          </div>
          <h3>Panier & paiement</h3>
          <p>Un tunnel court, des moyens de paiement adaptés à vos clients.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Abonnement · Box mensuelle</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Prochaine livraison</span>
                <b>5 décembre</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Produits choisis</span>
                <b>4</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>Points fidélité</span>
                <b>320</b>
              </div>
              <div className="shop-cta ul-btn">Modifier ma box</div>
            </div>
          </div>
          <h3>Abonnements & fidélité</h3>
          <p>Box, réassort automatique et programme de fidélité.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="auto u-bare">
              <div className="au-n">
                <b>Commande Shopify</b>
                <span>Payée</span>
              </div>
              <span className="au-l" />
              <div className="au-n">
                <b>Logistique</b>
                <span>Colis préparé</span>
              </div>
              <span className="au-l" />
              <div className="au-n au-on">
                <b>E-mail + avis</b>
                <span>Envoyés</span>
              </div>
            </div>
          </div>
          <h3>Intégrations</h3>
          <p>Logistique, avis, e-mailing et comptabilité reliés à Shopify.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ub">
              <div className="ul-h">Taux de conversion · tests successifs</div>
              <div className="bars">
                <i style={{ height: '46px' }} />
                <i style={{ height: '52px' }} />
                <i style={{ height: '50px' }} />
                <i style={{ height: '58px' }} />
                <i style={{ height: '60px' }} />
                <i style={{ height: '66px' }} />
                <i style={{ height: '64px' }} />
                <i style={{ height: '72px' }} />
                <i style={{ height: '78px' }} />
                <i style={{ height: '84px' }} />
              </div>
            </div>
          </div>
          <h3>Optimisation (CRO)</h3>
          <p>Tests et ajustements mensuels pour vendre plus avec le même trafic.</p>
        </article>
      </div>
    </section>
  )
}

function CasClientLesBocaux() {
  return (
    <section className="mo-sec" id="m-cas-bocaux">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Cas client<span className="serif">Les Bocaux du Vexin.</span>
        </h2>
        <p className="mo-lead">
          Une conserverie du Vexin : des recettes artisanales et locales, prêtes en quelques minutes, livrées
          dans des bocaux consignés.
        </p>
      </div>
      <div className="rf-mwins">
        <div className="win win-shot rf-mwin">
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
            <img className="shot" src="/images/4decbda594bb3c.jpg" alt="Le site Les Bocaux du Vexin" />
          </div>
        </div>
        <div className="win win-shot rf-mwin">
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
            <img className="shot" src="/images/d5e63f6f3b68a0.jpg" alt="Le site Les Bocaux du Vexin" />
          </div>
        </div>
      </div>
      <div className="mc-list mg-case rf-mlist">
        <div className="case-k">Ce que fait le site</div>
        <ul>
          <li>Refonte de la boutique Shopify sur le thème Ignite</li>
          <li>Les bocaux rangés par envie : apéro, entrées, plats, desserts</li>
          <li>Une box à composer soi-même : 6, 9 ou 12 bocaux</li>
          <li>Des fiches produit avec achat unique ou abonnement, ingrédients et allergènes</li>
          <li>Méga-menu, panier latéral et accès dédié aux professionnels</li>
        </ul>
      </div>
      <Link
        to="/realisations/les-bocaux-du-vexin"
        className="btn btn-ink mo-btn mo-btn-full rf-mbtn"
        data-proj="les-bocaux-du-vexin"
      >
        Voir le projet
      </Link>
    </section>
  )
}

function CasClientOsmoseNutrition() {
  return (
    <section className="mo-sec" id="m-cas-osmose">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Cas client<span className="serif">Osmose Nutrition.</span>
        </h2>
        <p className="mo-lead">
          Osmose Nutrition (O.N) fabrique en France des compléments alimentaires. On a repensé toute la
          boutique pour la conversion : du diagnostic à l’abonnement, jusqu’aux e-mails de relance.
        </p>
      </div>
      <div className="mb-phones">
        <img src="/images/ecac3c9eeb863c.jpg" alt="Le site Osmose Nutrition sur mobile" />
        <img src="/images/895a729eedcaa4.jpg" alt="Le site Osmose Nutrition sur mobile" />
      </div>
      <div className="mc-list mg-case rf-mlist">
        <div className="case-k">Ce que fait le site</div>
        <ul>
          <li>Page d’accueil et méga-menu par objectif : énergie, immunité, sommeil…</li>
          <li>Un diagnostic en quelques questions, qui recommande une cure</li>
          <li>« Composez votre routine » : un pack sur mesure, construit produit par produit</li>
          <li>Fiche produit avec abonnement et barre d’achat fixe sur mobile</li>
          <li>Panier latéral, compte client et gestion des abonnements</li>
          <li>Séquences d’e-mails Klaviyo : bienvenue, panier abandonné, réachat</li>
        </ul>
      </div>
      <Link
        to="/realisations/osmose-nutrition"
        className="btn btn-ink mo-btn mo-btn-full rf-mbtn"
        data-proj="osmose-nutrition"
      >
        Voir le projet
      </Link>
    </section>
  )
}

function CasClientOchaCo() {
  return (
    <section className="mo-sec" id="m-cas-ocha">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Cas client<span className="serif">Ocha & Co.</span>
        </h2>
        <p className="mo-lead">
          Une maison de thé japonaise familiale, installée à Shizuoka, qui vend ses matchas et ses thés bio en
          ligne, en Europe comme aux États-Unis.
        </p>
      </div>
      <div className="mb-phones">
        <img src="/images/b3e851d1416d6e.jpg" alt="Le site Ocha & Co. sur mobile" />
        <img src="/images/91efd754b4bd4f.jpg" alt="Le site Ocha & Co. sur mobile" />
      </div>
      <div className="mc-list mg-case rf-mlist">
        <div className="case-k">Ce que fait le site</div>
        <ul>
          <li>Boutique Shopify multidevise, livrée à l’international</li>
          <li>Un quiz « Tea finder » pour trouver son matcha ou son thé vert</li>
          <li>Catalogue par familles : matcha, thés verts, hojicha, thés de saison</li>
          <li>Le récit de la maison : le producteur, la culture bio, la fraîcheur</li>
          <li>Un espace dédié aux professionnels pour la revente</li>
        </ul>
      </div>
      <a
        className="btn btn-ink mo-btn mo-btn-full rf-mbtn"
        href="https://www.ochaandco.com/"
        target="_blank"
        rel="noopener"
      >
        Voir le site
      </a>{' '}
      <Link
        to="/realisations/ocha-and-co"
        className="btn btn-ink mo-btn mo-btn-full rf-mbtn"
        data-proj="ocha-and-co"
      >
        Voir le projet
      </Link>
    </section>
  )
}

function VosQuestionsNosReponses() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Vos questions,<span className="serif">nos réponses.</span>
        </h2>
      </div>
      <div className="mo-faq">
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pourquoi choisir Shopify ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <p>
            Shopify gère pour vous l’hébergement, la sécurité et les paiements, et dispose d’un très large
            écosystème d’applications. C’est la base la plus sereine pour la plupart des marques ; on vous le
            dit franchement quand une autre solution convient mieux.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Reprenez-vous une boutique existante ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <p>
            Oui, après un audit. On vous dit franchement s’il vaut mieux le faire évoluer ou repartir de zéro,
            et pourquoi.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien coûte une boutique Shopify sur mesure ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <p>
            Chaque projet est chiffré sur devis après un premier échange, gratuit et sans engagement. Le prix
            dépend du nombre de pages et des fonctionnalités.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Proposez-vous un suivi après le lancement ?</span>
            <svg
              className="plus"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <p>
            On reste disponibles pour les corrections et les questions. Vous pouvez ensuite choisir un suivi
            régulier (évolutions, SEO, maintenance) ou nous solliciter ponctuellement.
          </p>
        </div>
      </div>
    </section>
  )
}

function MoFt() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Votre boutique peut vendre plus.<span className="serif">Regardons où ça bloque.</span>
        </h2>
        <a className="btn btn-acc mo-btn">Analyser mon site</a>{' '}
        <Link to="/realisations" className="btn btn-line mo-btn">
          Voir nos réalisations
        </Link>{' '}
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
          Studio de design et de développement web entre Paris et Nantes. Sites sur-mesure, e-commerce,
          applications et visibilité.
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
              <b>Nantes</b>
              <span>6 rue Merle, 06400</span>
            </div>
            <a>Itinéraire</a>
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
          <img
            src="/images/bf5a322d7f4ded.png"
            alt="Le ciel de Nantes et la constellation d’Orion, en pixels"
          />
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
          <div className="ft-lang">
            <span className="on">Français</span>
            <span>English</span>
          </div>
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
    <section className="artboard mo sx-page">
      <MobileNav />
      <MoHero />
      <MoMedia />
      <CeQuUneBoutique />
      <CeQuOnLivre />
      <CasClientLesBocaux />
      <CasClientOsmoseNutrition />
      <CasClientOchaCo />
      <MoCommentOnTravaille2 />
      <MoParSecteurDesPages2 />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
