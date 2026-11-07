import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoCommentOnTravaille2 } from '../../components/shared/MoCommentOnTravaille2'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Création de site internet / <b>Meaux</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Création de site internet à Meaux
        <span className="serif">pour les commerces, artisans et PME du pays de Meaux.</span>
      </h1>
      <p className="mo-lead">
        Commerces du centre historique, artisans, restaurants, producteurs et PME des zones d’activités : on
        conçoit et on refond des sites sur mesure pour les entreprises de Meaux et des communes voisines,
        pensés pour être trouvés sur Google par une clientèle locale.
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
          src="/images/lc-mo-meaux.png"
          alt="La cathédrale Saint-Étienne de Meaux au-dessus de la Marne, en pixel art"
        />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="pxsvg omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde le site
            <br />
            de votre entreprise meldoise ?
          </span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              https://www.votre-entreprise.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site</span>
          </div>
          <div className="mo-crit">
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Horaires
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Commandes
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
            <img className="pxsvg picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Refaire le site de la boutique</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-ca3eed21.svg" alt="" width={10} height={10} />
            <b>Prendre les commandes en ligne</b>
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
      <div className="mo-capt">Le fournil, avant l’ouverture</div>
    </div>
  )
}

function CreationEtRefonteA() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Création et refonte<span className="serif">à Meaux.</span>
        </h2>
        <p className="mo-lead">Un site clair, rapide sur mobile et trouvable dans le pays de Meaux.</p>
      </div>
      <div className="lcm-cards">
        <article className="lc-card lca">
          <div className="lcv-vis lcv-build lca">
            <div className="win lcv-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">votre-boutique-meaux.fr</span>
                <span className="win-sp" />
              </div>
              <div className="lcv-build-in">
                <div className="wire lcv-wire" style={{ border: 'none' }}>
                  <i style={{ width: '62%' }} />
                  <i style={{ width: '38%' }} />
                  <i className="blk" />
                  <i style={{ width: '70%' }} />
                  <i style={{ width: '46%' }} />
                </div>
                <img className="lcv-built" src="/images/lc-meaux.png" alt="" />
                <span className="lcv-stamp">En ligne</span>
              </div>
            </div>
            <div className="lcv-steps">
              <span>Maquette</span>
              <span>Développement</span>
              <span>Mise en ligne</span>
            </div>
          </div>
          <span className="lc-k">Création</span>
          <h3>Créer votre site</h3>
          <p>
            Vous ouvrez un commerce dans le centre ou vous vous installez comme artisan dans le pays de
            Meaux : un site clair, prêt pour Google dès l’ouverture.
          </p>
          <ul>
            <li>Site vitrine sur mesure</li>
            <li>Pages par prestation et par secteur desservi</li>
            <li>Appel, itinéraire et devis à un geste</li>
          </ul>
          <Link to="/expertises/site-internet" className="lnk" data-pv="site-internet">
            Nos sites internet
          </Link>
        </article>
        <article className="lc-card lca">
          <div className="lcv-vis lcv-ba lca" style={{ '--x': '55%' } as CSSProperties}>
            <div className="lcv-ba-old">
              <div className="lcv-old-h">Bienvenue sur notre site</div>
              <div className="lcv-old-l">
                <u>Accueil</u>
                <u>Nos services</u>
                <u>Contact</u>
              </div>
              <div className="lcv-old-img" />
              <div className="lcv-old-t">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="lcv-ba-new">
              <img src="/images/lc-meaux.png" alt="" />
              <div className="lcv-new-bar">
                <b>votre-boutique-meaux.fr</b>
                <span>Commander</span>
              </div>
            </div>
            <span className="lcv-ba-h" aria-hidden="true">
              <i />
            </span>
            <span className="lcv-ba-k lcv-k-a">Avant</span>
            <span className="lcv-ba-k lcv-k-b">Après</span>
            <input
              className="lcv-ba-r"
              type="range"
              min="5"
              max="95"
              defaultValue="55"
              aria-label="Comparer avant et après la refonte"
            />
          </div>
          <span className="lc-k">Refonte</span>
          <h3>Refondre votre site</h3>
          <p>
            Votre site date, s’affiche mal sur mobile ou n’apparaît pas dans les résultats locaux : on le
            refond en gardant ce qui fonctionne.
          </p>
          <ul>
            <li>Reprise des contenus et redirections</li>
            <li>Fiche Google revue et reliée au site</li>
            <li>Back-office pour publier vos nouveautés</li>
          </ul>
          <a className="lnk" data-pv="__hero__">
            Analyser mon site actuel
          </a>
        </article>
      </div>
    </section>
  )
}

function PourQuiAMeaux() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Pour qui,<span className="serif">à Meaux.</span>
        </h2>
      </div>
      <div className="lc-rows lcm-rows">
        <div className="lc-row lca">
          <b>Commerçant du centre-ville</b>
          <p>Attirer au-delà des habitués et annoncer ses nouveautés.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Pages produits, horaires, actualités, fiche Google.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Artisan</b>
          <p>Recevoir des demandes de devis précises, dans sa zone d’intervention.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Pages par prestation et par commune desservie, réalisations, formulaire de
            devis.
          </p>
        </div>
        <div className="lc-row lca">
          <b>Restaurant ou hébergement</b>
          <p>Réserver en direct plutôt que via les plateformes.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Carte à jour, réservation, avis mis en avant.
          </p>
        </div>
        <div className="lc-row lca">
          <b>PME locale</b>
          <p>Se présenter comme un acteur sérieux, et recruter.</p>
          <p className="lc-ex">
            <span>Par exemple</span>Pages métiers, références, offres d’emploi.
          </p>
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
          Ce qu’on livre,<span className="serif">pour Meaux.</span>
        </h2>
        <p className="mo-lead">Les écrans ci-dessous sont des exemples.</p>
      </div>
      <div className="lcv-mrail">
        <div className="lcv-mtrack">
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="serp u-bare">
                  <div className="serp-q">
                    <svg
                      className="lcv-mag"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                    <span className="lcv-type" data-type="fromagerie meaux" />
                    <i className="lcv-caret" />
                  </div>
                  <div className="serp-r lcv-res">
                    <span className="serp-u">votre-fromagerie-meaux.fr</span>
                    <b>Fromagerie à Meaux — Brie de Meaux et produits fermiers</b>
                    <span className="serp-d">
                      Horaires, produits du moment et commande à retirer en boutique.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>SEO local</h3>
              <p>Être trouvé sur « fromagerie Meaux », « artisan Meaux », dans tout le pays de Meaux.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="gbp">
                  <div className="gbp-n">Votre boutique</div>
                  <div className="gbp-m">Fromagerie · Centre-ville · Ouvert jusqu’à 19 h</div>
                  <div className="gbp-b">
                    <span>Itinéraire</span>
                    <span>Appeler</span>
                    <span className="lcv-pulse">Site web</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Fiche Google</h3>
              <p>Horaires, itinéraire et lien vers le site, tenus à jour.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="uf lcv-fill">
                  <div className="ul-h">Commande à retirer</div>
                  <div className="uf-g">
                    <label className="fld fld-f">
                      <span>Produit</span>
                      <b data-v="Brie de Meaux" />
                    </label>
                    <label className="fld">
                      <span>Quantité</span>
                      <b data-v="1 pièce" />
                    </label>
                    <label className="fld">
                      <span>Retrait</span>
                      <b data-v="Samedi matin" />
                    </label>
                    <label className="fld">
                      <span>Nom</span>
                      <b data-v="Votre nom" />
                    </label>
                  </div>
                  <div className="shop-cta">Commander</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Commande avec retrait</h3>
              <p>Commerces de bouche : commander en ligne, retirer en boutique.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="uf lcv-fill">
                  <div className="ul-h">Demande de devis</div>
                  <div className="uf-g">
                    <label className="fld fld-f">
                      <span>Travaux</span>
                      <b data-v="Salle de bains" />
                    </label>
                    <label className="fld">
                      <span>Commune</span>
                      <b data-v="Trilport" />
                    </label>
                    <label className="fld">
                      <span>Délai</span>
                      <b data-v="Sous 2 mois" />
                    </label>
                    <label className="fld">
                      <span>Photos</span>
                      <b data-v="3 ajoutées" />
                    </label>
                  </div>
                  <div className="shop-cta">Envoyer ma demande</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Demande de devis</h3>
              <p>Artisans : des demandes qui précisent la commune, le besoin et le délai.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="ui-sl lcv-slots">
                  <div className="ul-h">Restaurant · dimanche</div>
                  <div className="rs-s sl-g" style={{ gridTemplateColumns: 'repeat(3,1fr)!important' }}>
                    <span className="">12:00</span>
                    <span className="off">12:30</span>
                    <span className="">13:00</span>
                    <span className="">13:30</span>
                    <span className="off">14:00</span>
                    <span className="">19:30</span>
                  </div>
                  <div className="shop-cta">Réserver</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Réservation en ligne</h3>
              <p>Restaurants et hébergements : réserver en direct, sans commission de plateforme.</p>
            </div>
          </article>
          <article className="gc lca">
            <div className="gc-ui">
              <div className="gcu">
                <div className="uf lcv-fill">
                  <div className="ul-h">Candidature</div>
                  <div className="uf-g">
                    <label className="fld fld-f">
                      <span>Poste</span>
                      <b data-v="Technicien" />
                    </label>
                    <label className="fld">
                      <span>Contrat</span>
                      <b data-v="CDI" />
                    </label>
                    <label className="fld">
                      <span>Lieu</span>
                      <b data-v="Meaux" />
                    </label>
                    <label className="fld">
                      <span>CV</span>
                      <b data-v="Ajouté" />
                    </label>
                  </div>
                  <div className="shop-cta">Postuler</div>
                </div>
              </div>
            </div>
            <div className="gc-b">
              <h3>Page recrutement</h3>
              <p>PME des zones d’activités : des candidatures reçues depuis le site.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function LeTissuLocalSecteur() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Le tissu local,<span className="serif">secteur par secteur.</span>
        </h2>
        <p className="mo-lead">
          Au bord de la Marne, Meaux s’organise autour de sa cité épiscopale et de la cathédrale
          Saint-Étienne, d’un centre-ville commerçant et de zones d’activités qui accueillent PME et artisans.
          Son nom porte aussi deux produits connus bien au-delà de la Seine-et-Marne, le brie et la moutarde,
          et le musée de la Grande Guerre attire des visiteurs de toute la région.
        </p>
      </div>
      <figure className="lcv-nd lcv-nd-m lca">
        <div className="lcv-nd-in">
          <img
            src="/images/lc-mo-meaux-nd.png"
            alt="Une rue commerçante du centre historique de Meaux, la cathédrale au fond, en pixel art"
          />
        </div>
        <figcaption>Le centre historique, un matin de marché</figcaption>
      </figure>
      <div className="lc-sects lcm-sects">
        <div className="lc-s lca">
          <h3>Commerces du centre historique</h3>
          <p>Boutiques, fromagers, cavistes, autour de la cathédrale et du marché.</p>
        </div>
        <div className="lc-s lca">
          <h3>Artisans</h3>
          <p>Bâtiment, rénovation, métiers de bouche : être appelé pour un devis.</p>
        </div>
        <div className="lc-s lca">
          <h3>Restauration et tourisme</h3>
          <p>
            Restaurants et hébergements qui reçoivent les visiteurs de la cité épiscopale et du musée de la
            Grande Guerre.
          </p>
        </div>
        <div className="lc-s lca">
          <h3>PME des zones d’activités</h3>
          <p>Services, négoce, industrie : un site qui présente l’entreprise aux clients et aux candidats.</p>
        </div>
      </div>
      <div className="sec-ring sx-others mo-sec-ring lcm-ring">
        <Link to="/pour-qui/artisans" className="sec-st" data-sector="artisan" role="link" tabIndex={0}>
          <span className="sec-av">
            <span>
              <svg
                viewBox="-1 -1 16 16"
                width="100%"
                height="100%"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="-1" y="-1" width="16" height="16" fill="#DCE6F0" />
                <rect x="2" y="2" width="1" height="1" fill="#8994A3" />
                <rect x="3" y="2" width="8" height="1" fill="#4A5563" />
                <rect x="1" y="3" width="1" height="1" fill="#8994A3" />
                <rect x="2" y="3" width="10" height="1" fill="#4A5563" />
                <rect x="2" y="4" width="9" height="1" fill="#4A5563" />
                <rect x="6" y="5" width="2" height="1" fill="#C98B4E" />
                <rect x="6" y="6" width="2" height="1" fill="#C98B4E" />
                <rect x="6" y="7" width="2" height="1" fill="#C98B4E" />
                <rect x="6" y="8" width="2" height="1" fill="#C98B4E" />
                <rect x="6" y="9" width="2" height="1" fill="#C98B4E" />
                <rect x="6" y="10" width="2" height="1" fill="#C98B4E" />
                <rect x="6" y="11" width="2" height="1" fill="#8A5523" />
                <rect x="6" y="12" width="2" height="1" fill="#8A5523" />
              </svg>
            </span>
          </span>
          <b>Artisans</b>
        </Link>
        <Link
          to="/pour-qui/boulangeries"
          className="sec-st"
          data-sector="boulangerie"
          role="link"
          tabIndex={0}
        >
          <span className="sec-av">
            <span>
              <img
                className="pxsvg"
                src="/px/art-e0dda6d2.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
          <b>Boulangeries</b>
        </Link>
        <Link to="/pour-qui/restaurants" className="sec-st" data-sector="restaurant" role="link" tabIndex={0}>
          <span className="sec-av">
            <span>
              <svg
                viewBox="-1 -1 16 16"
                width="100%"
                height="100%"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="-1" y="-1" width="16" height="16" fill="#E4E9EE" />
                <rect x="6" y="2" width="2" height="1" fill="#6E7781" />
                <rect x="6" y="3" width="2" height="1" fill="#6E7781" />
                <rect x="4" y="4" width="6" height="1" fill="#B9C2CB" />
                <rect x="3" y="5" width="1" height="1" fill="#B9C2CB" />
                <rect x="4" y="5" width="1" height="1" fill="#F4F6F8" />
                <rect x="5" y="5" width="7" height="1" fill="#B9C2CB" />
                <rect x="2" y="6" width="1" height="1" fill="#B9C2CB" />
                <rect x="3" y="6" width="1" height="1" fill="#F4F6F8" />
                <rect x="4" y="6" width="9" height="1" fill="#B9C2CB" />
                <rect x="2" y="7" width="1" height="1" fill="#B9C2CB" />
                <rect x="3" y="7" width="1" height="1" fill="#F4F6F8" />
                <rect x="4" y="7" width="9" height="1" fill="#B9C2CB" />
                <rect x="2" y="8" width="11" height="1" fill="#B9C2CB" />
                <rect x="1" y="9" width="13" height="1" fill="#6E7781" />
              </svg>
            </span>
          </span>
          <b>Restaurants</b>
        </Link>
        <Link to="/pour-qui/hotels-gites" className="sec-st" data-sector="hotel" role="link" tabIndex={0}>
          <span className="sec-av">
            <span>
              <img
                className="pxsvg"
                src="/px/art-e6cc4a17.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
          <b>Hôtels & gîtes</b>
        </Link>
        <Link to="/pour-qui/coiffeurs" className="sec-st" data-sector="coiffure" role="link" tabIndex={0}>
          <span className="sec-av">
            <span>
              <img
                className="pxsvg"
                src="/px/art-b8783d94.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
          <b>Coiffeurs</b>
        </Link>
      </div>
    </section>
  )
}

function CeQueVotreSite() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce que votre site<span className="serif">doit vous apporter.</span>
        </h2>
      </div>
      <div className="sxm-ocs">
        <div className="lca sxm-oc">
          <span className="lc-k">Visibilité</span>
          <div className="lcv-mini">
            <div className="serp-q lcv-q">
              <svg
                className="lcv-mag"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              <span className="lcv-type" data-type="artisan meaux" />
              <i className="lcv-caret" />
            </div>
          </div>
          <p>
            « création site internet Meaux », « artisan Meaux », « restaurant Meaux » : des pages pensées pour
            la recherche locale.
          </p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Image</span>
          <div className="lcv-mini lcv-spec">
            <span className="lcv-aa">Aa</span>
            <span className="lcv-sw" style={{ '--c': '#2B2A33' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#E9DCC0' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#8A6A3C' } as CSSProperties} />
            <span className="lcv-sw" style={{ '--c': '#FF4D1A' } as CSSProperties} />
          </div>
          <p>Une image moderne, sans renier l’ancrage local.</p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Demandes</span>
          <div className="lcv-mini">
            <div className="lcv-notif">
              <i className="sq sq-ok" />
              <div>
                <b>Nouvelle demande de devis</b>
                <span>Salle de bains · Trilport</span>
              </div>
              <em>maintenant</em>
            </div>
          </div>
          <p>Des demandes de devis qui précisent la commune, le besoin et le délai.</p>
        </div>
        <div className="lca sxm-oc">
          <span className="lc-k">Conversion</span>
          <div className="lcv-mini lcv-langbtn">
            <span className="lcv-cta">
              <b>Appeler</b>
              <b>Itinéraire</b>
            </span>
          </div>
          <p>Un site rapide sur mobile, l’appel et l’itinéraire à un geste.</p>
        </div>
      </div>
    </section>
  )
}

function QuelquesRealisationsDuStudio() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Quelques réalisations<span className="serif">du studio.</span>
        </h2>
        <p className="mo-lead">
          Commerces de bouche, artisans, fabricants : des projets proches de ceux des entreprises du pays de
          Meaux.
        </p>
      </div>
      <div className="mo-projs">
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
      </div>
      <Link to="/realisations" className="btn btn-ink mo-btn mo-btn-full lcm-all" data-pv="realisations">
        Toutes les réalisations
      </Link>
    </section>
  )
}

function AutourDeMeauxOn() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Autour de Meaux,<span className="serif">on intervient aussi.</span>
        </h2>
      </div>
      <div className="lmw lmw-m">
        <div className="lm-card">
          <img
            className="lm-base"
            src="/images/lc-map-meaux-m.svg"
            alt="Carte de Meaux et des communes voisines : routes, voies ferrées, forêts et cours d’eau"
          />
          <svg className="lmap-o" viewBox="0 0 670 620" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              className="lm-town"
              data-c="0"
              style={{ '--d': '0.15s' } as CSSProperties}
              d="M456.1 212.3 L466.5 248.1 L468.3 272.8 L466.8 281.4 L464.5 286.8 L457.4 292.7 L451.7 302.9 L441.8 312.8 L447.0 317.8 L444.7 320.0 L454.4 323.8 L474.8 317.9 L479.4 327.0 L486.1 325.4 L487.2 327.7 L492.5 325.9 L492.9 328.7 L501.6 326.8 L508.2 336.6 L514.9 333.1 L516.1 334.4 L519.9 333.7 L522.2 337.2 L524.1 336.1 L527.2 340.2 L527.9 339.8 L531.2 348.0 L533.8 347.6 L532.4 344.3 L534.2 343.4 L536.8 349.3 L541.3 347.6 L540.5 345.7 L545.4 342.5 L545.2 340.6 L546.6 340.1 L547.0 343.5 L549.6 343.4 L549.0 340.8 L552.6 340.0 L553.4 341.2 L556.3 339.4 L554.4 336.8 L555.7 335.9 L553.0 331.2 L558.2 331.9 L578.1 312.8 L599.8 322.9 L601.9 321.4 L606.6 311.9 L608.5 300.1 L610.4 295.5 L614.2 278.4 L614.1 264.9 L611.4 256.6 L606.3 249.2 L501.8 205.8 L502.9 209.8 L476.0 211.4 L470.1 210.1 L456.1 212.3Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="1"
              style={{ '--d': '0.22s' } as CSSProperties}
              d="M268.4 284.0 L260.6 288.0 L255.4 289.1 L246.1 288.1 L246.1 289.0 L235.1 295.3 L205.1 305.3 L190.1 305.7 L172.1 317.5 L163.3 320.8 L153.2 327.8 L139.4 332.9 L141.6 346.0 L144.0 352.5 L149.3 361.3 L158.8 372.6 L150.8 381.4 L160.8 394.0 L178.1 404.0 L177.8 405.1 L209.6 421.0 L233.3 378.6 L265.1 341.1 L280.7 315.5 L279.3 307.3 L275.8 303.8 L273.8 298.0 L267.7 297.0 L266.9 293.3 L268.9 290.6 L268.4 284.0Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="2"
              style={{ '--d': '0.29s' } as CSSProperties}
              d="M287.5 342.1 L289.5 382.3 L291.9 392.3 L297.4 401.7 L300.8 412.4 L302.4 428.2 L290.6 433.0 L290.3 454.0 L295.8 455.2 L325.2 467.5 L328.0 471.1 L341.4 468.3 L348.9 464.2 L363.2 464.3 L374.9 463.0 L395.8 466.4 L386.4 458.7 L381.5 450.1 L381.6 446.7 L382.7 438.8 L384.6 434.6 L384.7 428.6 L387.4 421.0 L383.7 418.3 L387.7 401.0 L394.1 406.2 L399.0 393.5 L404.2 395.6 L411.8 395.2 L412.1 392.6 L407.8 380.1 L409.5 379.4 L408.5 374.9 L403.4 359.7 L397.9 362.6 L391.2 353.4 L385.7 359.9 L367.2 368.5 L350.1 373.2 L343.1 373.6 L330.6 365.9 L317.3 354.3 L311.8 343.7 L306.4 337.7 L301.7 323.1 L297.2 315.0 L295.6 308.4 L290.1 309.0 L290.5 313.0 L289.1 314.1 L287.5 331.8 L287.5 342.1Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="3"
              style={{ '--d': '0.36s' } as CSSProperties}
              d="M171.3 123.6 L150.5 129.1 L120.1 140.6 L102.4 145.2 L93.5 135.0 L85.3 128.9 L79.8 136.2 L64.0 139.6 L55.8 143.0 L57.7 151.6 L58.2 184.7 L62.2 197.8 L63.5 211.2 L74.5 238.7 L75.4 245.1 L74.7 251.8 L99.1 255.7 L131.4 258.7 L132.9 275.3 L140.1 320.5 L139.4 332.9 L153.2 327.8 L163.3 320.8 L172.1 317.5 L190.1 305.7 L205.1 305.3 L235.1 295.3 L241.0 291.7 L241.5 281.9 L245.9 284.4 L244.3 271.4 L255.8 272.2 L256.2 261.1 L257.6 262.2 L256.8 253.7 L253.5 245.6 L247.4 253.1 L240.8 248.9 L232.0 239.7 L225.4 227.6 L223.6 220.6 L226.6 211.5 L234.7 201.3 L229.9 196.1 L227.6 190.7 L216.5 176.9 L210.0 166.6 L171.3 123.6Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="4"
              style={{ '--d': '0.43s' } as CSSProperties}
              d="M282.4 137.9 L276.0 157.8 L272.8 154.8 L269.5 154.1 L256.1 152.8 L248.3 153.5 L258.1 176.7 L260.4 185.9 L251.7 190.9 L243.0 194.1 L234.7 201.3 L226.6 211.5 L223.6 220.6 L227.0 231.8 L232.0 239.7 L240.8 248.9 L247.4 253.1 L253.5 245.6 L256.8 253.7 L257.6 262.2 L263.9 268.6 L265.8 268.0 L263.7 255.6 L268.6 254.3 L265.1 245.8 L267.2 228.9 L279.0 212.2 L283.8 207.2 L285.8 201.0 L292.8 195.1 L299.5 192.9 L310.9 193.3 L317.0 197.4 L320.3 193.9 L321.1 194.4 L319.7 176.5 L317.8 167.6 L310.6 161.3 L295.6 144.2 L290.5 144.5 L282.4 137.9Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="5"
              style={{ '--d': '0.50s' } as CSSProperties}
              d="M267.1 338.4 L252.2 357.3 L242.3 367.1 L233.3 378.6 L209.6 421.0 L204.8 441.4 L200.8 450.5 L196.9 492.3 L206.6 496.4 L211.9 489.1 L212.9 485.6 L219.0 487.4 L222.7 473.6 L229.9 475.4 L230.2 474.0 L232.0 474.7 L236.1 463.7 L247.1 469.7 L252.4 458.3 L256.5 460.6 L257.4 458.9 L271.2 466.7 L271.6 465.7 L273.3 466.3 L282.6 471.1 L289.2 471.7 L289.2 473.0 L313.1 473.2 L312.4 480.0 L320.7 479.0 L319.9 483.0 L321.9 482.7 L324.9 479.8 L327.6 484.1 L334.5 480.9 L333.2 479.0 L361.9 482.7 L363.4 474.7 L363.2 464.3 L348.9 464.2 L341.4 468.3 L328.0 471.1 L325.2 467.5 L295.8 455.2 L290.3 454.0 L290.6 433.0 L302.4 428.2 L300.8 412.4 L297.4 401.7 L291.9 392.3 L289.5 382.3 L287.5 342.1 L274.6 348.6 L271.9 346.3 L274.0 343.1 L267.1 338.4Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="6"
              style={{ '--d': '0.57s' } as CSSProperties}
              d="M403.5 146.3 L401.6 144.5 L400.1 145.4 L399.6 142.4 L385.7 146.4 L373.1 152.5 L375.8 158.1 L373.0 160.4 L372.1 164.0 L360.5 186.8 L353.4 207.3 L356.3 210.5 L357.2 208.2 L362.5 215.7 L370.6 224.4 L373.4 230.1 L374.5 241.4 L394.1 244.6 L401.3 248.6 L408.6 256.6 L412.7 266.7 L411.3 266.5 L411.4 268.0 L425.8 270.0 L425.1 277.3 L451.3 274.9 L449.2 280.9 L466.9 280.2 L468.3 268.6 L466.5 248.1 L455.6 209.6 L450.1 207.1 L446.8 204.4 L439.9 193.9 L432.7 187.8 L424.1 173.0 L413.2 161.2 L405.9 155.5 L402.4 149.2 L403.5 146.3Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="7"
              style={{ '--d': '0.64s' } as CSSProperties}
              d=""
              pathLength="1"
            />
            <path
              className="lm-center"
              d="M320.4 190.2 L321.1 194.4 L320.3 193.9 L317.0 197.4 L310.9 193.3 L299.5 192.9 L292.8 195.1 L285.8 201.0 L283.8 207.2 L279.0 212.2 L267.2 228.9 L265.1 245.8 L268.6 254.3 L263.7 255.6 L265.8 268.0 L263.9 268.6 L256.2 261.1 L255.8 272.2 L244.3 271.4 L245.9 284.4 L241.5 281.9 L241.0 291.7 L246.1 289.0 L246.1 288.1 L255.4 289.1 L260.6 288.0 L268.2 283.5 L269.1 288.3 L268.6 291.5 L266.9 293.3 L267.7 297.0 L273.8 298.0 L274.9 302.3 L279.3 307.3 L280.6 311.6 L280.7 315.5 L278.4 320.2 L267.1 338.4 L274.0 343.1 L271.9 346.3 L274.6 348.6 L287.5 342.1 L287.5 331.8 L289.1 314.1 L290.5 313.0 L290.1 309.0 L295.6 308.4 L297.2 315.0 L301.7 323.1 L306.4 337.7 L311.8 343.7 L318.7 356.1 L338.3 371.1 L343.1 373.6 L350.1 373.2 L366.0 369.0 L385.7 359.9 L391.2 353.4 L399.5 346.1 L415.1 335.7 L434.7 317.2 L444.5 310.6 L452.9 301.3 L457.4 292.7 L464.5 286.8 L466.9 280.2 L449.2 280.9 L451.3 274.9 L425.1 277.3 L425.8 270.0 L411.4 268.0 L411.3 266.5 L412.7 266.7 L408.6 256.6 L401.3 248.6 L394.1 244.6 L374.5 241.4 L374.0 233.2 L372.2 227.3 L357.2 208.2 L356.3 210.5 L354.0 207.7 L345.9 202.3 L332.9 195.5 L329.9 191.4 L327.8 192.9 L320.4 190.2Z"
              pathLength="1"
            />
            <g className="lm-ch" transform="translate(286.1 269.2)">
              <rect x="-6.0" y="-6.0" width="12.0" height="12.0" rx="1" />
            </g>
            <text className="lm-lb lm-lb-ch" x="298.1" y="275.8" fontSize="16.3" textAnchor="start">
              Cathédrale
            </text>
            <g
              className="lm-pin"
              data-c="0"
              style={{ '--d': '0.60s' } as CSSProperties}
              transform="translate(529.1 276.3)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="0"
              style={{ '--d': '0.70s' } as CSSProperties}
              x="529.1"
              y="304.3"
              fontSize="19"
              textAnchor="middle"
            >
              Trilport
            </text>
            <g
              className="lm-pin"
              data-c="1"
              style={{ '--d': '0.67s' } as CSSProperties}
              transform="translate(208.7 347.9)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="1"
              style={{ '--d': '0.77s' } as CSSProperties}
              x="208.7"
              y="375.9"
              fontSize="19"
              textAnchor="middle"
            >
              Villenoy
            </text>
            <g
              className="lm-pin"
              data-c="2"
              style={{ '--d': '0.74s' } as CSSProperties}
              transform="translate(340.4 405.1)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="2"
              style={{ '--d': '0.84s' } as CSSProperties}
              x="365.1"
              y="433.1"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="365.1">Nanteuil-</tspan>
              <tspan x="365.1" dy="20.9">
                lès-Meaux
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="3"
              style={{ '--d': '0.81s' } as CSSProperties}
              transform="translate(153.7 218.5)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="3"
              style={{ '--d': '0.91s' } as CSSProperties}
              x="153.7"
              y="246.5"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="153.7">Chauconin-</tspan>
              <tspan x="153.7" dy="20.9">
                Neufmontiers
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="4"
              style={{ '--d': '0.88s' } as CSSProperties}
              transform="translate(270.1 195.8)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="4"
              style={{ '--d': '0.98s' } as CSSProperties}
              x="270.1"
              y="223.9"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="270.1">Crégy-</tspan>
              <tspan x="270.1" dy="20.9">
                lès-Meaux
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="5"
              style={{ '--d': '0.95s' } as CSSProperties}
              transform="translate(260.0 424.9)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="5"
              style={{ '--d': '1.05s' } as CSSProperties}
              x="233.4"
              y="453.0"
              fontSize="19"
              textAnchor="middle"
            >
              <tspan x="233.4">Mareuil-</tspan>
              <tspan x="233.4" dy="20.9">
                lès-Meaux
              </tspan>
            </text>
            <g
              className="lm-pin"
              data-c="6"
              style={{ '--d': '1.02s' } as CSSProperties}
              transform="translate(412.5 215.2)"
            >
              <rect x="-5.0" y="-5.0" width="10" height="10" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="6"
              style={{ '--d': '1.12s' } as CSSProperties}
              x="412.5"
              y="243.3"
              fontSize="19"
              textAnchor="middle"
            >
              Poincy
            </text>
            <text className="lm-lb lm-lb-c" x="365.3" y="302.1" fontSize="30.4" textAnchor="middle">
              Meaux
            </text>
            <g className="lm-paris">
              <g transform="translate(16.0 552.2) rotate(168.7)">
                <path d="M-61 0 H0 m-6 -4 l6 4 l-6 4" fill="none" />
              </g>
              <text x="81.5" y="545.8" fontSize="17.1" textAnchor="start">
                Paris 8e · le studio
              </text>
            </g>
            <text className="lm-attr" x="660" y="610" fontSize="13.7" textAnchor="end">
              © contributeurs OpenStreetMap
            </text>
          </svg>
        </div>
        <aside className="lm-side">
          <span className="lc-k">Communes voisines · Seine-et-Marne</span>
          <ul className="lm-list">
            <li data-c="0" tabIndex={0}>
              <b>Trilport</b>
              <span>à l’est</span>
            </li>
            <li data-c="1" tabIndex={0}>
              <b>Villenoy</b>
              <span>au sud-ouest</span>
            </li>
            <li data-c="2" tabIndex={0}>
              <b>Nanteuil-lès-Meaux</b>
              <span>au sud</span>
            </li>
            <li data-c="3" tabIndex={0}>
              <b>Chauconin-Neufmontiers</b>
              <span>à l’ouest</span>
            </li>
            <li data-c="4" tabIndex={0}>
              <b>Crégy-lès-Meaux</b>
              <span>au nord-ouest</span>
            </li>
            <li data-c="5" tabIndex={0}>
              <b>Mareuil-lès-Meaux</b>
              <span>au sud-ouest</span>
            </li>
            <li data-c="6" tabIndex={0}>
              <b>Poincy</b>
              <span>au nord-est</span>
            </li>
            <li data-c="7" tabIndex={0}>
              <b>Lagny-sur-Marne</b>
              <span>au sud-ouest</span>
            </li>
          </ul>
          <p className="lc-note">
            Et partout dans le pays de Meaux et en Seine-et-Marne. Le studio est à Paris : on se déplace pour
            lancer le projet, puis on avance en visio.
          </p>
          <span className="lc-k lm-k2">Nos autres pages locales</span>
          <ul className="lc-links">
            <li>
              <Link
                to="/creation-site-internet/versailles"
                className="lnk"
                data-pv="creation-site-internet-versailles"
              >
                Création de site internet à Versailles
              </Link>
            </li>
            <li>
              <Link to="/creation-site-internet/cergy" className="lnk" data-pv="creation-site-internet-cergy">
                Création de site internet à Cergy
              </Link>
            </li>
            <li>
              <Link
                to="/creation-site-internet/boulogne-billancourt"
                className="lnk"
                data-pv="creation-site-internet-boulogne-billancourt"
              >
                Création de site internet à Boulogne-Billancourt
              </Link>
            </li>
            <li>
              <Link to="/creation-site-internet/massy" className="lnk" data-pv="creation-site-internet-massy">
                Création de site internet à Massy
              </Link>
            </li>
          </ul>
        </aside>
      </div>
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
            <span>Intervenez-vous à Meaux ?</span>
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
            Oui. Le studio est à Paris : on peut se voir à Meaux pour lancer le projet, puis tout avance en visio et par message.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Je suis artisan autour de Meaux : comment être trouvé dans les communes voisines ?</span>
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
            Avec des pages par prestation et par secteur desservi, rédigées pour vos clients, et une fiche
            Google soignée. On évite les pages copiées-collées pour chaque ville, que Google ne valorise pas.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pouvez-vous vendre nos produits en ligne, avec retrait en boutique ?</span>
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
            Oui : boutique en ligne ou commande avec retrait, comme pour Le Moulin de Balme, qui a aussi un
            back-office pour tout gérer depuis le fournil.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien coûte une création de site internet à Meaux ?</span>
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
            dépend du nombre de pages et des fonctionnalités, pas de la ville.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien de temps faut-il pour être en ligne ?</span>
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
            Un site vitrine prend en moyenne 4 à 8 semaines, selon sa complexité et le rythme des échanges.
            Une refonte avec reprise des contenus et du référencement, ou des fonctionnalités sur mesure,
            demandent davantage : le planning est fixé dans le devis.
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
          Un projet à Meaux ?<span className="serif">Parlons-en.</span>
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
          Studio de design et de développement web basé à Paris. Sites sur-mesure, e-commerce, applications et
          visibilité.
        </p>
        <div className="mo-fcols">
          <div className="mo-fc">
            <div className="fc-k">Expertises</div>
            <Link to="/expertises/site-internet">Site internet</Link>
            <Link to="/expertises/e-commerce">E-commerce</Link>
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
            <Link to="/orion-admin">Orion Admin</Link>
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
              <b>Partout ailleurs</b>
              <span>France et international, en visio</span>
            </div>
            <a>Réserver</a>
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
          <img src="/images/bf5a322d7f4ded.png" alt="Le ciel et la constellation d’Orion, en pixels" />
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
      <CreationEtRefonteA />
      <PourQuiAMeaux />
      <CeQuOnLivre />
      <LeTissuLocalSecteur />
      <CeQueVotreSite />
      <QuelquesRealisationsDuStudio />
      <MoCommentOnTravaille2 />
      <AutourDeMeauxOn />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
