import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { ParSecteurDesPages } from '../../components/shared/ParSecteurDesPages'
import { FooterNantes } from '../../components/shared/FooterNantes'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/pour-qui">
          Pour qui ? / <b>Marques & e-commerçants</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Agence e-commerce Shopify</span>
        <span className="serif">pour les marques qui veulent grandir.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Création et refonte de boutiques Shopify, fiches produits qui convertissent, intégrations
          logistiques et marketing : on construit la boutique, et les outils pour la faire grandir.
        </p>
        <div className="hero-cta">
          <div className="hero-btns">
            <a className="btn btn-ink">Analyser ma boutique</a>
            <Link to="/realisations" className="btn btn-ghost">
              Voir nos réalisations
            </Link>
          </div>
          <div className="proof">
            <svg
              className="pxstar"
              width="13.5"
              height="12"
              viewBox="0 0 13.5 12"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
              <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
              <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
              <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
              <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
              <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
              <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
              <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
              <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            </svg>
            <span>5/5 sur Google · Paris · France et international · FR / EN</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMedia() {
  return (
    <div className="hero-media sx-media">
      <div className="hm-layer">
        <img
          src="/images/20caaf15c9d1a8.png"
          alt="Un atelier d’expédition avec des colis prêts à partir, en pixel art"
        />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="pxsvg omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde votre boutique ensemble ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.votre-boutique.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site, ou décrivez votre projet</span>
          </div>
          <div className="ch2-foot">
            <div className="ch2-l">
              <span className="ib">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 1V13M1 7H13" stroke="#0E0E0C" strokeWidth="1.4" />
                </svg>
              </span>
              <span className="ib">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
              </span>{' '}
              <span className="tg">
                <img className="pxsvg omark" src="/px/omark-214dbacb.svg" alt="" width={14} height={14} />
                <b>Analyse complète</b>
              </span>
              <span className="cr">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
                </svg>
                Ventes
              </span>
              <span className="cr">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
                </svg>
                Shopify
              </span>
              <span className="cr">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
                </svg>
                Google
              </span>
              <span className="cr">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
                </svg>
                Mobile
              </span>
            </div>
            <span className="send ch2-send">
              Analyser mon site <span className="kbd">↵</span>
            </span>
          </div>
        </div>
        <div className="ch2-sug">
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
        <div className="ch2-note">
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
      <div className="capt">L’atelier d’expédition, 10 h</div>
    </div>
  )
}

function CeQuUneBoutique() {
  return (
    <section className="sec" style={{ padding: '0', borderTop: 'none' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’une boutique
          <br />
          <span className="serif">bien construite change.</span>
        </h2>
      </div>
      <div className="ocs">
        <div className="oc">
          <h3>Plus de ventes</h3>
          <p>Des fiches produits claires, un panier fluide et un paiement sans friction.</p>
        </div>
        <div className="oc">
          <h3>Une boutique simple à gérer</h3>
          <p>Produits, stocks et commandes gérés au quotidien sans dépendre de nous.</p>
        </div>
        <div className="oc">
          <h3>Une marque qui se distingue</h3>
          <p>Un thème sur mesure, pas un modèle reconnu dès la page d’accueil.</p>
        </div>
      </div>
    </section>
  )
}

function CeQuOnLivre() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’on livre
          <br />
          <span className="serif">concrètement.</span>
        </h2>
        <p className="lead">
          Chaque projet assemble les briques dont vous avez besoin, pas une de plus. Les écrans ci-dessous
          sont des exemples.
        </p>
      </div>
      <div className="gcells">
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
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
          </div>
          <div className="gc-b">
            <h3>Boutique Shopify sur mesure</h3>
            <p>Un thème dessiné pour votre marque et vos produits.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
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
          </div>
          <div className="gc-b">
            <h3>Fiches produits</h3>
            <p>Photos, variantes, avis et réassurance au bon endroit.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
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
          </div>
          <div className="gc-b">
            <h3>Panier & paiement</h3>
            <p>Un tunnel court, des moyens de paiement adaptés à vos clients.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
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
          </div>
          <div className="gc-b">
            <h3>Abonnements & fidélité</h3>
            <p>Box, réassort automatique et programme de fidélité.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
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
          </div>
          <div className="gc-b">
            <h3>Intégrations</h3>
            <p>Logistique, avis, e-mailing et comptabilité reliés à Shopify.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
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
          </div>
          <div className="gc-b">
            <h3>Optimisation (CRO)</h3>
            <p>Tests et ajustements mensuels pour vendre plus avec le même trafic.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function CasClientLesBocaux() {
  return (
    <section className="sec" style={{ padding: '0' }} id="cas-bocaux">
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Cas client
          <br />
          <span className="serif">Les Bocaux du Vexin.</span>
        </h2>
        <p className="lead">
          Une conserverie du Vexin : des recettes artisanales et locales, prêtes en quelques minutes, livrées
          dans des bocaux consignés.
        </p>
      </div>
      <div className="mb-case">
        <div className="mb-main">
          <div className="win win-shot">
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
              <img className="shot" src="/images/4decbda594bb3c.jpg" alt="Capture du site" />
            </div>
          </div>
        </div>
        <div className="mb-side">
          <figure>
            <div className="win win-shot">
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
                <img className="shot" src="/images/d5e63f6f3b68a0.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>Les bocaux préférés, ajoutés au panier sans quitter la page.</figcaption>
          </figure>
          <figure>
            <div className="win win-shot">
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
                <img className="shot" src="/images/724ec9d47d9598.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>Compose ta box : 6, 9 ou 12 bocaux, à son goût.</figcaption>
          </figure>
          <figure>
            <div className="win win-shot">
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
                <img className="shot" src="/images/72072556a42d8b.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>La fiche produit : achat unique ou abonnement, en un geste.</figcaption>
          </figure>
        </div>
      </div>
      <div className="case-cols">
        <div>
          <h3>Refondre la boutique Shopify, et donner faim dès la première page.</h3>
          <span className="p-tag">E-commerce · Shopify · Vexin</span>
          <div className="mb-btns">
            <Link
              to="/realisations/les-bocaux-du-vexin"
              className="btn btn-ink"
              data-proj="les-bocaux-du-vexin"
            >
              Voir le projet
            </Link>
          </div>
        </div>
        <div>
          <div className="case-k">Ce que fait le site</div>
          <ul>
            <li>Refonte de la boutique Shopify sur le thème Ignite</li>
            <li>Les bocaux rangés par envie : apéro, entrées, plats, desserts</li>
            <li>Une box à composer soi-même : 6, 9 ou 12 bocaux</li>
            <li>Des fiches produit avec achat unique ou abonnement, ingrédients et allergènes</li>
            <li>Méga-menu, panier latéral et accès dédié aux professionnels</li>
          </ul>
        </div>
        <div>
          <div className="case-k">Résultats</div>
          <p>Les chiffres seront publiés avec l’accord du client.</p>
        </div>
      </div>
    </section>
  )
}

function CasClientOsmoseNutrition() {
  return (
    <section className="sec" style={{ padding: '0' }} id="cas-osmose">
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Cas client
          <br />
          <span className="serif">Osmose Nutrition.</span>
        </h2>
        <p className="lead">
          Osmose Nutrition (O.N) fabrique en France des compléments alimentaires. On a repensé toute la
          boutique pour la conversion : du diagnostic à l’abonnement, jusqu’aux e-mails de relance.
        </p>
      </div>
      <div className="mb-case">
        <div className="mb-main">
          <div className="win win-shot">
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
              <img className="shot" src="/images/b351708a31fde9.jpg" alt="Capture du site" />
            </div>
          </div>
        </div>
        <div className="mb-side">
          <figure>
            <div className="win win-shot">
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
                <img className="shot" src="/images/f18125d7351f9c.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>Le diagnostic : quelques questions, puis une cure recommandée.</figcaption>
          </figure>
          <figure>
            <div className="win win-shot">
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
                <img className="shot" src="/images/a32872dd39f5d4.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>Composez votre routine : la cure se construit produit par produit.</figcaption>
          </figure>
          <figure>
            <div className="win win-shot">
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
                <img className="shot" src="/images/8a597c2e12ae53.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>Le compte client : abonnements, prochaines livraisons, modifications.</figcaption>
          </figure>
        </div>
      </div>
      <div className="case-cols">
        <div>
          <h3>Une boutique de compléments repensée pour vendre, et faire revenir.</h3>
          <span className="p-tag">E-commerce · Refonte UX/CRO · Abonnements</span>
          <div className="mb-btns">
            <Link to="/realisations/osmose-nutrition" className="btn btn-ink" data-proj="osmose-nutrition">
              Voir le projet
            </Link>
          </div>
        </div>
        <div>
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
        <div>
          <div className="case-k">Résultats</div>
          <p>Les chiffres seront publiés avec l’accord du client.</p>
        </div>
      </div>
    </section>
  )
}

function CasClientOchaCo() {
  return (
    <section className="sec" style={{ padding: '0' }} id="cas-ocha">
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Cas client
          <br />
          <span className="serif">Ocha & Co.</span>
        </h2>
        <p className="lead">
          Une maison de thé japonaise familiale, installée à Shizuoka, qui vend ses matchas et ses thés bio en
          ligne, en Europe comme aux États-Unis.
        </p>
      </div>
      <div className="mb-case">
        <div className="mb-main">
          <div className="win win-shot">
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
              <img className="shot" src="/images/71eb80b3e243f6.jpg" alt="Capture du site" />
            </div>
          </div>
        </div>
        <div className="mb-side">
          <figure>
            <div className="win win-shot">
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
                <img className="shot" src="/images/b97d35e8690d69.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>Le Tea finder : deux quiz pour trouver son thé en une minute.</figcaption>
          </figure>
          <figure>
            <div className="win win-shot">
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
                <img className="shot" src="/images/2685c9ee94e19a.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>La boutique : les thés, leurs prix et leurs avis, en un coup d’œil.</figcaption>
          </figure>
          <figure>
            <div className="win win-shot">
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
                <img className="shot" src="/images/a3f708de3d060d.jpg" alt="Capture du site" />
              </div>
            </div>
            <figcaption>Les familles de thés, pour parcourir le catalogue autrement.</figcaption>
          </figure>
        </div>
      </div>
      <div className="case-cols">
        <div>
          <h3>Faire découvrir le thé japonais, et guider chacun vers le bon.</h3>
          <span className="p-tag">E-commerce · Shopify · International</span>
          <div className="mb-btns">
            <Link to="/realisations/ocha-and-co" className="btn btn-ink" data-proj="ocha-and-co">
              Voir le projet
            </Link>
            <a className="btn btn-ghost" href="https://www.ochaandco.com/" target="_blank" rel="noopener">
              Voir le site
            </a>
          </div>
        </div>
        <div>
          <div className="case-k">Ce que fait le site</div>
          <ul>
            <li>Boutique Shopify multidevise, livrée à l’international</li>
            <li>Un quiz « Tea finder » pour trouver son matcha ou son thé vert</li>
            <li>Catalogue par familles : matcha, thés verts, hojicha, thés de saison</li>
            <li>Le récit de la maison : le producteur, la culture bio, la fraîcheur</li>
            <li>Un espace dédié aux professionnels pour la revente</li>
          </ul>
        </div>
        <div>
          <div className="case-k">Résultats</div>
          <p>Les chiffres seront publiés avec l’accord du client.</p>
        </div>
      </div>
    </section>
  )
}

function CommentOnTravaille() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Comment
          <br />
          <span className="serif">on travaille.</span>
        </h2>
        <p className="lead">
          Une seule équipe du premier échange à la mise en ligne. Vous suivez chaque étape dans Orion Admin.
        </p>
      </div>
      <div className="steps s-steps">
        <div className="pixbar">
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-on" />
          <span className="pb-cur" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
          <span className="pb-off" />
        </div>
        <div className="st-row" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          <div className="st ">
            <h3>
              <i />
              Auditer
            </h3>
            <p>Votre boutique actuelle, vos chiffres, vos concurrents.</p>
          </div>
          <div className="st cur">
            <h3>
              <i />
              Designer
            </h3>
            <p>Thème, fiches produits et parcours d’achat.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Développer
            </h3>
            <p>Shopify, applications et intégrations.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Faire grandir
            </h3>
            <p>Tests, CRO et évolutions mensuelles.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function UnProjetRecent() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">Un projet récent</h2>
        <Link to="/realisations" className="lnk">
          Toutes les réalisations
        </Link>
      </div>
      <div className="pf">
        <article className="pf-p">
          <div className="p-media">
            <img src="/images/52f03c24d1c911.png" alt="" />
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
                <img
                  className="shot"
                  src="/images/4decbda594bb3c.jpg"
                  alt="La boutique Les Bocaux du Vexin"
                />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">Les Bocaux du Vexin</h3>
            <span className="p-tag">E-commerce · Shopify · 2026</span>
          </div>
          <p className="p-desc">
            Les Bocaux du Vexin : une boutique Shopify simple à tenir au quotidien pour une conserverie
            locale.
          </p>
        </article>
        <div className="rv pf-q">
          <p className="rv-q">
            « Leur expertise sur le développement sur-mesure est impressionnante. Une équipe à l’écoute,
            professionnelle, et qui livre dans les temps. »
          </p>
          <div className="rv-by">
            <div className="q-stars">
              <svg
                className="pxstar"
                width="13.5"
                height="12"
                viewBox="0 0 13.5 12"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
                <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
                <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              </svg>
              <svg
                className="pxstar"
                width="13.5"
                height="12"
                viewBox="0 0 13.5 12"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
                <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
                <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              </svg>
              <svg
                className="pxstar"
                width="13.5"
                height="12"
                viewBox="0 0 13.5 12"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
                <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
                <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              </svg>
              <svg
                className="pxstar"
                width="13.5"
                height="12"
                viewBox="0 0 13.5 12"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
                <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
                <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              </svg>
              <svg
                className="pxstar"
                width="13.5"
                height="12"
                viewBox="0 0 13.5 12"
                fill="none"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
                <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
                <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
                <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
              </svg>
            </div>
            <b>Thierry Cordier</b>Association des Entrepreneurs du Vexin · Avis Google
          </div>
        </div>
      </div>
    </section>
  )
}

function LesExpertisesMobilisees() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '96px' }}>
        <h2 className="h2">Les expertises mobilisées</h2>
      </div>
      <div className="rls">
        <Link to="/expertises/site-internet" className="rl">
          <img className="pxsvg picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <div>
            <b>Site internet</b>
            <span>Sites vitrines et refontes sur mesure.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/google-ads" className="rl">
          <img className="pxsvg picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
          <div>
            <b>Google Ads</b>
            <span>Des campagnes qui rapportent des contacts.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/automatisations" className="rl">
          <img className="pxsvg picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <div>
            <b>Automatisations</b>
            <span>Vos tâches répétitives, automatisées.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
      </div>
    </section>
  )
}

function QuestionsFrequentes() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="faq">
        <div className="faq-l">
          <h2 className="h2">
            Questions
            <br />
            <span className="serif">fréquentes.</span>
          </h2>
          <p className="lead">Les réponses aux questions qu’on nous pose le plus souvent sur ce sujet.</p>
          <Link to="/faq" className="lnk">
            Toute la FAQ
          </Link>
        </div>
        <div className="acc">
          <div className="q">
            <div className="q-h">
              <span>Pourquoi choisir Shopify ?</span>
              <svg
                className="plus"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <p>
              Shopify gère pour vous l’hébergement, la sécurité et les paiements, et dispose d’un très large
              écosystème d’applications. C’est la base la plus sereine pour la plupart des marques ; on vous
              le dit franchement quand une autre solution convient mieux.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Reprenez-vous une boutique existante ?</span>
              <svg
                className="plus"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <p>
              Oui, après un audit. On vous dit franchement s’il vaut mieux le faire évoluer ou repartir de
              zéro, et pourquoi.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien coûte une boutique Shopify sur mesure ?</span>
              <svg
                className="plus"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <p>
              Chaque projet est chiffré sur devis après un premier échange, gratuit et sans engagement. Le
              prix dépend du nombre de pages et des fonctionnalités.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Proposez-vous un suivi après le lancement ?</span>
              <svg
                className="plus"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <p>
              On reste disponibles pour les corrections et les questions. Vous pouvez ensuite choisir un suivi
              régulier (évolutions, SEO, maintenance) ou nous solliciter ponctuellement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function GCta() {
  return (
    <div className="g-cta">
      <FooterNantes>
        <div className="cta">
          <h2>
            Votre boutique peut vendre plus.<span className="serif">Regardons où ça bloque.</span>
          </h2>
          <div className="cta-r">
            <div className="cta-btns">
              <Link to="/realisations" className="btn btn-line">
                Voir nos réalisations
              </Link>
              <a className="btn btn-acc">
                Analyser mon site <span className="kbd">↵</span>
              </a>
            </div>
            <span className="mail">
              ou écrivez à <b>hello@orion-studio.io</b>
            </span>
          </div>
        </div>
      </FooterNantes>
    </div>
  )
}

export function Desktop() {
  return (
    <section className="artboard g-page s-page sx-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <CeQuUneBoutique />
      <CeQuOnLivre />
      <CasClientLesBocaux />
      <CasClientOsmoseNutrition />
      <CasClientOchaCo />
      <CommentOnTravaille />
      <UnProjetRecent />
      <LesExpertisesMobilisees />
      <ParSecteurDesPages />
      <QuestionsFrequentes />
      <GCta />
    </section>
  )
}
