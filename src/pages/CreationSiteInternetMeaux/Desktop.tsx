import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { IlsNousOntFait } from '../../components/shared/IlsNousOntFait'
import { CommentOnTravaille } from '../../components/shared/CommentOnTravaille'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/">
          Création de site internet / <b>Meaux</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Création de site internet à Meaux</span>
        <span className="serif">pour les commerces, artisans et PME du pays de Meaux.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Commerces du centre historique, artisans, restaurants, producteurs et PME des zones d’activités : on
          conçoit et on refond des sites sur mesure pour les entreprises de Meaux et des communes voisines,
          pensés pour être trouvés sur Google par une clientèle locale.
        </p>
        <div className="hero-cta">
          <div className="hero-btns">
            <a className="btn btn-ink">Analyser mon site</a>
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
          src="/images/lc-meaux.png"
          alt="La cathédrale Saint-Étienne de Meaux au-dessus de la Marne, en pixel art"
        />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="pxsvg omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde le site de votre entreprise meldoise ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.votre-entreprise.fr
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
                Horaires
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
                Commandes
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
      <div className="capt">La cathédrale Saint-Étienne et la Marne, à l’heure bleue</div>
    </div>
  )
}

function CreationEtRefonteDe() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Création et refonte
          <br />
          <span className="serif">de sites internet à Meaux.</span>
        </h2>
        <p className="lead">Un site clair, rapide sur mobile et trouvable dans le pays de Meaux.</p>
      </div>
      <div className="lc-two">
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Pour qui,
          <br />
          <span className="serif">à Meaux.</span>
        </h2>
        <p className="lead">
          Les entreprises qu’on accompagne ici, et ce que leur site doit faire pour elles.
        </p>
      </div>
      <div className="lc-rows">
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’on livre,
          <br />
          <span className="serif">pour Meaux.</span>
        </h2>
        <p className="lead">
          Les briques qui comptent pour les entreprises du pays de Meaux. Les écrans ci-dessous sont des
          exemples.
        </p>
      </div>
      <div className="gcells">
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
    </section>
  )
}

function LeTissuLocalSecteur() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Le tissu local,
          <br />
          <span className="serif">secteur par secteur.</span>
        </h2>
        <p className="lead">
          Au bord de la Marne, Meaux s’organise autour de sa cité épiscopale et de la cathédrale
          Saint-Étienne, d’un centre-ville commerçant et de zones d’activités qui accueillent PME et artisans.
          Son nom porte aussi deux produits connus bien au-delà de la Seine-et-Marne, le brie et la moutarde,
          et le musée de la Grande Guerre attire des visiteurs de toute la région.
        </p>
      </div>
      <figure className="lcv-nd lca">
        <div className="lcv-nd-in">
          <img
            src="/images/lc-meaux-nd.png"
            alt="Une rue commerçante du centre historique de Meaux, la cathédrale au fond, en pixel art"
          />
        </div>
        <figcaption>Le centre historique, un matin de marché</figcaption>
      </figure>
      <div className="lc-sects">
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
      <div className="sx-oth lc-oth">
        <span className="lc-k">Nos pages métiers</span>
        <div className="sec-ring sx-others">
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
          <Link
            to="/pour-qui/restaurants"
            className="sec-st"
            data-sector="restaurant"
            role="link"
            tabIndex={0}
          >
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
      </div>
    </section>
  )
}

function CeQueVotreSite() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce que votre site
          <br />
          <span className="serif">doit vous apporter.</span>
        </h2>
      </div>
      <div className="ocs lc-ocs">
        <div className="lca oc">
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
        <div className="lca oc">
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
        <div className="lca oc">
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
        <div className="lca oc">
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
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Quelques réalisations
          <br />
          <span className="serif">du studio.</span>
        </h2>
        <p className="lead">
          Commerces de bouche, artisans, fabricants : des projets proches de ceux des entreprises du pays de
          Meaux.
        </p>
        <Link to="/realisations" className="lnk">
          Toutes les réalisations
        </Link>
      </div>
      <div className="rz-grid lc-rz">
        <article
          className="rz-card rz-balme"
          data-cats="site shop app"
          data-to="/realisations/moulin-de-balme"
        >
          <div className="p-media">
            <img src="/images/4a723a9387332c.png" alt="" />
            <div className="win win-shot mdb-cwin">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">moulin-de-balme.fr</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img className="shot" src="/images/ce971a6eeb6bd1.jpg" alt="Le site du Moulin de Balme" />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">
              <Link to="/realisations/moulin-de-balme">Le Moulin de Balme</Link>
            </h3>
            <span className="p-tag">Boulangerie · Site + back-office</span>
          </div>
          <p className="p-desc">
            La boulangerie de Stéphane et Tomoko Reinat, à Brive : un site avec click & collect, et un
            back-office pour tout gérer depuis le fournil.
          </p>
          <a className="lnk rz-more">Lire l’étude de cas</a>
        </article>
        <article className="rz-card rz-ht" data-cats="site">
          <div className="p-media">
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
          <div className="p-meta">
            <h3 className="p-name">Housses Taxi</h3>
            <span className="p-tag">Site vitrine · TPE</span>
          </div>
          <p className="p-desc">
            Le site d’un fabricant de housses sur mesure pour taxis et VTC, dans le Val-d’Oise.
          </p>
          <Link to="/realisations/housses-taxi" className="lnk rz-more" data-proj="housses-taxi">
            Voir le projet
          </Link>
        </article>
      </div>
    </section>
  )
}

function AutourDeMeauxOn() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Autour de Meaux,
          <br />
          <span className="serif">on intervient aussi.</span>
        </h2>
      </div>
      <div className="lmw">
        <div className="lm-card">
          <img
            className="lm-base"
            src="/images/lc-map-meaux-d.svg"
            alt="Carte de Meaux et des communes voisines : routes, voies ferrées, forêts et cours d’eau"
          />
          <svg className="lmap-o" viewBox="0 0 860 560" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              className="lm-town"
              data-c="0"
              style={{ '--d': '0.15s' } as CSSProperties}
              d="M576.7 161.7 L586.0 191.0 L589.3 205.0 L591.5 234.9 L589.7 245.3 L586.8 251.9 L578.2 259.1 L571.4 271.4 L559.4 283.4 L565.7 289.5 L562.8 292.1 L574.7 296.8 L599.3 289.6 L604.9 300.6 L613.1 298.7 L614.4 301.5 L620.8 299.3 L621.3 302.7 L631.8 300.4 L635.9 307.8 L639.8 312.2 L648.0 308.0 L649.4 309.6 L651.0 309.0 L652.0 309.9 L654.0 308.7 L656.7 312.9 L659.1 311.7 L662.8 316.6 L663.6 316.1 L667.7 326.1 L670.8 325.5 L669.1 321.5 L671.4 320.5 L674.5 327.7 L679.9 325.5 L679.0 323.2 L684.8 319.4 L684.6 317.1 L686.3 316.4 L686.8 320.6 L690.0 320.4 L689.2 317.3 L693.6 316.4 L694.6 317.8 L698.1 315.6 L695.7 312.4 L697.3 311.3 L694.1 305.7 L700.4 306.6 L724.5 283.4 L750.7 295.7 L753.3 293.8 L759.1 282.3 L761.3 268.0 L763.7 262.5 L768.2 241.7 L768.1 225.3 L764.8 215.3 L758.6 206.3 L632.1 153.8 L633.4 158.6 L600.9 160.6 L593.6 159.0 L576.7 161.7Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="1"
              style={{ '--d': '0.22s' } as CSSProperties}
              d="M349.3 248.5 L339.9 253.3 L333.6 254.7 L322.3 253.4 L322.3 254.6 L309.0 262.3 L272.6 274.3 L254.5 274.8 L232.7 289.1 L222.0 293.1 L209.8 301.6 L193.0 307.7 L195.7 323.6 L198.6 331.5 L205.0 342.1 L216.6 355.8 L206.8 366.5 L219.0 381.8 L239.9 393.9 L239.6 395.2 L278.1 414.4 L306.7 363.1 L317.7 349.2 L326.8 340.7 L345.4 317.7 L364.2 286.6 L364.2 281.9 L362.6 276.7 L358.3 272.5 L355.9 265.4 L353.5 265.8 L348.5 264.2 L347.5 259.8 L349.9 256.5 L349.3 248.5Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="2"
              style={{ '--d': '0.29s' } as CSSProperties}
              d="M372.4 318.9 L374.9 367.6 L377.8 379.7 L384.5 391.1 L388.6 404.1 L390.5 423.2 L376.2 429.0 L375.9 454.4 L382.5 455.8 L413.5 469.7 L418.2 470.8 L421.5 475.2 L437.7 471.7 L446.8 466.8 L464.2 467.0 L478.3 465.3 L503.7 469.4 L492.2 460.2 L486.4 449.7 L486.4 445.6 L487.8 436.0 L490.1 431.0 L490.2 423.7 L492.6 419.3 L493.5 414.4 L489.1 411.2 L493.9 390.3 L501.6 396.5 L504.8 390.3 L507.5 381.2 L513.8 383.6 L523.0 383.2 L523.4 380.1 L518.1 364.9 L520.3 364.1 L519.1 358.6 L516.4 350.7 L517.1 350.3 L512.9 340.3 L506.2 343.7 L498.0 332.6 L491.4 340.5 L479.8 344.9 L469.1 350.8 L448.3 356.6 L439.8 357.0 L424.7 347.8 L412.3 338.0 L408.5 333.6 L401.9 320.9 L395.4 313.5 L389.7 295.9 L384.2 286.1 L382.3 278.1 L375.6 278.8 L376.1 283.6 L375.9 284.8 L374.3 284.9 L372.5 306.4 L372.4 318.9Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="3"
              style={{ '--d': '0.36s' } as CSSProperties}
              d="M231.7 54.2 L206.5 60.8 L169.7 74.8 L148.3 80.4 L144.9 77.6 L137.5 68.1 L127.5 60.6 L120.8 69.4 L101.8 73.6 L91.8 77.7 L94.0 88.1 L94.6 128.2 L99.5 144.1 L101.1 160.3 L114.4 193.6 L115.5 201.4 L114.7 209.5 L144.3 214.3 L183.4 217.9 L185.2 238.0 L193.9 292.8 L193.0 307.7 L209.8 301.6 L222.0 293.1 L232.7 289.1 L254.5 274.8 L272.6 274.3 L309.0 262.3 L316.2 257.8 L316.7 245.9 L317.4 245.4 L322.1 249.0 L320.2 233.3 L334.1 234.2 L334.5 220.7 L336.2 222.0 L335.3 211.9 L331.3 202.0 L323.9 211.0 L315.9 206.0 L305.3 194.8 L297.2 180.2 L295.1 171.7 L298.6 160.7 L308.5 148.3 L302.7 142.1 L299.9 135.5 L286.5 118.7 L278.6 106.2 L265.6 90.6 L256.9 82.5 L231.7 54.2Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="4"
              style={{ '--d': '0.43s' } as CSSProperties}
              d="M366.3 71.5 L358.6 95.6 L354.7 91.9 L350.6 91.1 L334.4 89.6 L325.0 90.4 L336.9 118.5 L339.6 129.7 L329.1 135.7 L318.6 139.5 L308.5 148.3 L298.6 160.7 L295.1 171.7 L299.2 185.2 L305.3 194.8 L315.9 206.0 L323.9 211.0 L331.3 202.0 L335.3 211.9 L336.2 222.0 L343.8 229.8 L346.2 229.1 L345.1 227.2 L343.6 214.1 L349.6 212.5 L346.6 207.2 L345.3 202.2 L347.9 181.7 L362.1 161.6 L368.0 155.4 L370.4 148.0 L378.9 140.8 L387.0 138.1 L400.8 138.7 L408.2 143.5 L412.2 139.3 L413.2 140.0 L411.4 118.3 L409.2 107.5 L400.4 99.8 L382.2 79.2 L376.1 79.5 L371.3 74.5 L366.3 71.5Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="5"
              style={{ '--d': '0.50s' } as CSSProperties}
              d="M347.7 314.4 L329.7 337.3 L317.7 349.2 L306.7 363.1 L278.1 414.4 L272.2 439.2 L267.5 450.2 L262.7 500.9 L274.4 505.8 L280.9 497.0 L282.1 492.7 L289.5 494.9 L294.0 478.2 L302.7 480.4 L303.0 478.7 L305.3 479.5 L310.2 466.2 L323.5 473.5 L329.9 459.6 L334.9 462.4 L336.0 460.4 L352.7 469.8 L353.2 468.6 L355.2 469.3 L366.5 475.2 L374.6 475.9 L374.5 477.4 L384.5 478.3 L403.5 477.7 L402.6 486.0 L412.6 484.7 L411.8 489.6 L414.1 489.2 L417.8 485.7 L421.0 490.9 L429.4 487.0 L427.8 484.7 L438.6 486.9 L462.6 489.2 L464.4 479.5 L464.2 467.0 L446.8 466.8 L437.7 471.7 L421.5 475.2 L418.2 470.8 L413.5 469.7 L382.5 455.8 L375.9 454.4 L376.2 429.0 L390.5 423.2 L388.6 404.1 L384.5 391.1 L377.8 379.7 L374.9 367.6 L372.4 318.9 L356.9 326.8 L353.6 324.0 L356.1 320.1 L353.7 317.6 L347.7 314.4Z"
              pathLength="1"
            />
            <path
              className="lm-town"
              data-c="6"
              style={{ '--d': '0.57s' } as CSSProperties}
              d="M513.0 81.7 L510.6 79.5 L508.8 80.6 L508.3 77.0 L491.4 81.8 L476.2 89.2 L479.4 96.0 L476.0 98.8 L475.0 103.1 L460.9 130.8 L452.3 155.6 L455.9 159.5 L456.9 156.6 L463.4 165.8 L473.1 176.3 L476.5 183.2 L477.9 196.9 L501.6 200.8 L510.3 205.6 L519.2 215.3 L524.1 227.5 L522.5 227.3 L522.5 229.1 L539.9 231.5 L539.1 240.3 L570.9 237.5 L568.3 244.8 L589.8 243.9 L591.5 229.8 L589.3 205.0 L576.1 158.3 L573.0 156.1 L569.4 155.4 L565.5 152.0 L557.0 139.3 L548.4 132.0 L538.0 114.1 L524.7 99.8 L515.9 92.8 L511.7 85.2 L513.0 81.7Z"
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
              d="M412.3 134.8 L413.2 140.0 L412.2 139.3 L408.2 143.5 L400.8 138.7 L387.0 138.1 L378.9 140.8 L370.4 148.0 L368.0 155.4 L362.1 161.6 L347.9 181.7 L345.3 202.2 L346.6 207.2 L349.6 212.5 L343.6 214.1 L345.1 227.2 L346.2 229.1 L343.8 229.8 L334.5 220.7 L334.1 234.2 L320.2 233.3 L322.1 249.0 L317.4 245.4 L316.7 245.9 L316.2 257.8 L322.3 254.6 L322.3 253.4 L333.6 254.7 L339.9 253.3 L349.0 247.9 L350.2 253.7 L349.6 257.6 L347.5 259.8 L348.5 264.2 L353.5 265.8 L355.9 265.4 L357.2 270.6 L362.6 276.7 L364.2 281.9 L364.2 286.6 L361.4 292.4 L347.7 314.4 L353.7 317.6 L356.1 320.1 L353.6 324.0 L356.9 326.8 L372.4 318.9 L372.5 306.4 L374.3 284.9 L375.9 284.8 L376.1 283.6 L375.6 278.8 L382.3 278.1 L384.2 286.1 L389.7 295.9 L395.4 313.5 L401.9 320.9 L410.2 335.9 L434.0 354.0 L439.8 357.0 L448.3 356.6 L467.5 351.5 L479.8 344.9 L491.4 340.5 L498.0 332.6 L508.1 323.8 L527.1 311.2 L550.8 288.7 L562.6 280.8 L572.8 269.5 L578.2 259.1 L586.8 251.9 L589.8 243.9 L568.3 244.8 L570.9 237.5 L539.1 240.3 L539.9 231.5 L522.5 229.1 L522.5 227.3 L524.1 227.5 L519.2 215.3 L510.3 205.6 L501.6 200.8 L477.9 196.9 L477.2 186.9 L475.0 179.8 L456.9 156.6 L455.9 159.5 L453.0 156.1 L443.2 149.5 L427.4 141.4 L423.8 136.3 L421.3 138.1 L412.3 134.8Z"
              pathLength="1"
            />
            <g className="lm-ch" transform="translate(370.8 230.5)">
              <rect x="-4.2" y="-4.2" width="8.4" height="8.4" rx="1" />
            </g>
            <text className="lm-lb lm-lb-ch" x="362.4" y="234.9" fontSize="10.8" textAnchor="end">
              Cathédrale
            </text>
            <g
              className="lm-pin"
              data-c="0"
              style={{ '--d': '0.60s' } as CSSProperties}
              transform="translate(665.1 239.2)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="0"
              style={{ '--d': '0.70s' } as CSSProperties}
              x="665.1"
              y="258.0"
              fontSize="12.5"
              textAnchor="middle"
            >
              Trilport
            </text>
            <g
              className="lm-pin"
              data-c="1"
              style={{ '--d': '0.67s' } as CSSProperties}
              transform="translate(276.9 325.9)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="1"
              style={{ '--d': '0.77s' } as CSSProperties}
              x="276.9"
              y="344.7"
              fontSize="12.5"
              textAnchor="middle"
            >
              Villenoy
            </text>
            <g
              className="lm-pin"
              data-c="2"
              style={{ '--d': '0.74s' } as CSSProperties}
              transform="translate(436.6 395.1)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="2"
              style={{ '--d': '0.84s' } as CSSProperties}
              x="436.6"
              y="414.0"
              fontSize="12.5"
              textAnchor="middle"
            >
              Nanteuil-lès-Meaux
            </text>
            <g
              className="lm-pin"
              data-c="3"
              style={{ '--d': '0.81s' } as CSSProperties}
              transform="translate(210.4 169.1)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="3"
              style={{ '--d': '0.91s' } as CSSProperties}
              x="210.4"
              y="188.0"
              fontSize="12.5"
              textAnchor="middle"
            >
              Chauconin-Neufmontiers
            </text>
            <g
              className="lm-pin"
              data-c="4"
              style={{ '--d': '0.88s' } as CSSProperties}
              transform="translate(351.4 141.7)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="4"
              style={{ '--d': '0.98s' } as CSSProperties}
              x="351.4"
              y="160.5"
              fontSize="12.5"
              textAnchor="middle"
            >
              Crégy-lès-Meaux
            </text>
            <g
              className="lm-pin"
              data-c="5"
              style={{ '--d': '0.95s' } as CSSProperties}
              transform="translate(339.1 419.2)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="5"
              style={{ '--d': '1.05s' } as CSSProperties}
              x="339.1"
              y="438.1"
              fontSize="12.5"
              textAnchor="middle"
            >
              Mareuil-lès-Meaux
            </text>
            <g
              className="lm-pin"
              data-c="6"
              style={{ '--d': '1.02s' } as CSSProperties}
              transform="translate(523.8 165.2)"
            >
              <rect x="-3.5" y="-3.5" width="7" height="7" />
            </g>
            <text
              className="lm-lb lm-lb-t"
              data-c="6"
              style={{ '--d': '1.12s' } as CSSProperties}
              x="523.8"
              y="184.1"
              fontSize="12.5"
              textAnchor="middle"
            >
              Poincy
            </text>
            <text className="lm-lb lm-lb-c" x="441.9" y="248.1" fontSize="20.0" textAnchor="middle">
              Meaux
            </text>
            <g className="lm-paris">
              <g transform="translate(16.0 338.8) rotate(168.0)">
                <path d="M-40 0 H0 m-6 -4 l6 4 l-6 4" fill="none" />
              </g>
              <text x="61.0" y="333.6" fontSize="11.2" textAnchor="start">
                Paris 8e · le studio
              </text>
            </g>
            <text className="lm-attr" x="850" y="550" fontSize="9.0" textAnchor="end">
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

function VosQuestionsAMeaux() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="faq">
        <div className="faq-l">
          <h2 className="h2">
            Vos questions,
            <br />
            <span className="serif">à Meaux.</span>
          </h2>
          <p className="lead">Les réponses aux questions qu’on nous pose le plus souvent sur ce sujet.</p>
          <Link to="/faq" className="lnk">
            Toute la FAQ
          </Link>
        </div>
        <div className="acc">
          <div className="q">
            <div className="q-h">
              <span>Intervenez-vous à Meaux ?</span>
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
              Oui. Le studio est à Paris : on peut se voir à Meaux pour lancer le projet, puis tout avance en
              visio et dans Orion Admin, votre espace de suivi.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Je suis artisan autour de Meaux : comment être trouvé dans les communes voisines ?</span>
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
              Avec des pages par prestation et par secteur desservi, rédigées pour vos clients, et une fiche
              Google soignée. On évite les pages copiées-collées pour chaque ville, que Google ne valorise
              pas.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Pouvez-vous vendre nos produits en ligne, avec retrait en boutique ?</span>
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
              Oui : boutique en ligne ou commande avec retrait, comme pour Le Moulin de Balme, qui a aussi un
              back-office pour tout gérer depuis le fournil.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien coûte une création de site internet à Meaux ?</span>
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
              prix dépend du nombre de pages et des fonctionnalités, pas de la ville.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien de temps faut-il pour être en ligne ?</span>
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
              Un site vitrine prend en moyenne 4 à 8 semaines, selon sa complexité et le rythme des échanges.
              Une refonte avec reprise des contenus et du référencement, ou des fonctionnalités sur mesure,
              demandent davantage : le planning est fixé dans le devis.
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
      <Footer>
        <div className="cta">
          <h2>
            Un projet à Meaux ?<span className="serif">Parlons-en.</span>
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
      </Footer>
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
      <IlsNousOntFait />
      <CreationEtRefonteDe />
      <PourQuiAMeaux />
      <CeQuOnLivre />
      <LeTissuLocalSecteur />
      <CeQueVotreSite />
      <QuelquesRealisationsDuStudio />
      <CommentOnTravaille />
      <AutourDeMeauxOn />
      <VosQuestionsAMeaux />
      <GCta />
    </section>
  )
}
