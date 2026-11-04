import { Link } from 'react-router-dom'

export function MobileMenu() {
  return (
    <nav className="mo-menu" id="m-menu" aria-label="Menu">
      <div className="mo-mk">Expertises</div>
      <div className="mo-mg">
        <a className="mo-mi">
          <img className="px picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <span>Site internet</span>
        </a>
        <a className="mo-mi">
          <img className="px picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
          <span>Développement & applications</span>
        </a>
        <a className="mo-mi">
          <img className="px picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <span>Automatisations</span>
        </a>
        <a className="mo-mi">
          <img className="px picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
          <span>SEO</span>
        </a>
        <a className="mo-mi">
          <img className="px picon" src="/px/picon-84c912e7.svg" alt="" width={20} height={20} />
          <span>GEO</span>
        </a>
        <a className="mo-mi">
          <img className="px picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
          <span>Google Ads</span>
        </a>
      </div>
      <div className="mo-mk">Pour qui ?</div>
      <div className="mo-mg">
        <a className="mo-mi">
          <img className="px picon" src="/px/picon-4780f153.svg" alt="" width={20} height={20} />
          <span>TPE & PME</span>
        </a>
        <Link to="/golfs" className="mo-mi">
          <img className="px picon" src="/px/picon-1bac5105.svg" alt="" width={20} height={20} />
          <span>Golfs</span>
        </Link>
        <a className="mo-mi">
          <img className="px picon" src="/px/picon-00814f13.svg" alt="" width={20} height={20} />
          <span>Indépendants & micro-entrepreneurs</span>
        </a>
        <a className="mo-mi">
          <img className="px picon" src="/px/picon-808b4de1.svg" alt="" width={20} height={20} />
          <span>Marques & e-commerçants</span>
        </a>
      </div>
      <div className="mo-ml2">
        <Link to="/realisations">Réalisations</Link>
        <Link to="/le-studio">Le studio</Link>
        <Link to="/ressources">Ressources</Link>
      </div>
      <div className="mo-btns">
        <a className="btn btn-ink mo-btn" data-go="cta">
          Démarrer un projet
        </a>
        <a className="btn btn-ghost mo-btn" data-go="hero">
          Analyser mon site
        </a>
      </div>
      <div className="mo-mfoot">hello@orion-studio.io · Paris · France et international</div>
    </nav>
  )
}

export function VideoLightbox() {
  return (
    <div className="sv-lb" id="sv-lb" hidden>
      <div className="sv-lb-veil" data-close="" />
      <div className="sv-lb-box" role="dialog" aria-modal="true" aria-label="Vidéo Stand-ING en 16:9">
        <button type="button" className="sv-lb-x" data-close="" aria-label="Fermer la vidéo">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
        <video
          className="sv-lb-v"
          src="/media/standing-ad.mp4"
          controls
          playsInline
          preload="none"
          poster="/images/standing-poster.jpg"
        />
      </div>
    </div>
  )
}

export function StoriesViewer() {
  return (
    <div className="sx" id="sx" hidden>
      <div className="sx-veil" data-close="" />
      <div className="sx-box" role="dialog" aria-modal="true" aria-label="Stories d’Orion Studio">
        <div className="sx-g" data-set="studio" hidden>
          <span className="sx-th">
            <img src="/images/img-21643aaf.png" alt="" />
          </span>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Jour de shooting.">
            <img className="sx-bg" src="/images/img-73d13380.png" alt="" />
            <img className="sx-fg" src="/images/img-73d13380.png" alt="Jour de shooting." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Julien, côté fauteuil.">
            <img className="sx-bg" src="/images/img-8551791d.png" alt="" />
            <img className="sx-fg" src="/images/img-8551791d.png" alt="Julien, côté fauteuil." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Théo, côté chaise de réalisateur.">
            <img className="sx-bg" src="/images/img-10db7bf1.png" alt="" />
            <img className="sx-fg" src="/images/img-10db7bf1.png" alt="Théo, côté chaise de réalisateur." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="contain" data-cap="Le rouge, presque orange.">
            <img className="sx-bg" src="/images/img-fc28f010.png" alt="" />
            <img className="sx-fg" src="/images/img-fc28f010.png" alt="Le rouge, presque orange." />
          </div>
        </div>
        <div className="sx-g" data-set="studio" hidden>
          <span className="sx-th">
            <img src="/images/img-080dfe88.png" alt="" />
          </span>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Ce matin, au studio.">
            <img className="sx-bg" src="/images/img-a3943d4e.png" alt="" />
            <img className="sx-fg" src="/images/img-a3943d4e.png" alt="Ce matin, au studio." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Doggy, à l’accueil.">
            <img className="sx-bg" src="/images/img-080dfe88.png" alt="" />
            <img className="sx-fg" src="/images/img-080dfe88.png" alt="Doggy, à l’accueil." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="contain" data-cap="Le plus calme du plateau.">
            <img className="sx-bg" src="/images/img-fadddece.png" alt="" />
            <img className="sx-fg" src="/images/img-fadddece.png" alt="Le plus calme du plateau." />
          </div>
        </div>
        <div className="sx-g" data-set="studio" hidden>
          <span className="sx-th logo">
            <img src="/images/stand-ing.png" alt="" />
          </span>
          <div
            className="sx-sl"
            data-t="video"
            data-fit="contain"
            data-cap="Stand-ING · Imaginez. Personnalisez. Exposez."
          >
            <img className="sx-bg" src="/images/standing-poster.jpg" alt="" />
            <video
              className="sx-fg"
              src="/media/standing-ad.mp4"
              playsInline
              preload="none"
              muted
              poster="/images/standing-poster.jpg"
            />
          </div>
        </div>
        <div className="sx-g" data-set="studio" hidden>
          <span className="sx-th">
            <img src="/images/img-ff3fcf95.png" alt="" />
          </span>
          <div className="sx-sl" data-t="img" data-fit="contain" data-cap="Le bureau du jour.">
            <img className="sx-bg" src="/images/img-b2c5bcf2.png" alt="" />
            <img className="sx-fg" src="/images/img-b2c5bcf2.png" alt="Le bureau du jour." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Le moniteur vintage du plateau.">
            <img className="sx-bg" src="/images/img-07a5af77.png" alt="" />
            <img className="sx-fg" src="/images/img-07a5af77.png" alt="Le moniteur vintage du plateau." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="La plante du bureau.">
            <img className="sx-bg" src="/images/img-7cf0e673.png" alt="" />
            <img className="sx-fg" src="/images/img-7cf0e673.png" alt="La plante du bureau." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Le boîtier, toujours à portée.">
            <img className="sx-bg" src="/images/img-c34d1371.png" alt="" />
            <img className="sx-fg" src="/images/img-c34d1371.png" alt="Le boîtier, toujours à portée." />
          </div>
        </div>
        <div className="sx-g" data-set="studio" hidden>
          <span className="sx-th logo">
            <img src="/images/chateau-l-arc-golf-club.png" alt="" />
          </span>
          <div
            className="sx-sl"
            data-t="img"
            data-fit="contain"
            data-cap="Le site du Château l’Arc Golf Club."
          >
            <img
              className="sx-bg"
              src="/images/page-d-accueil-du-site-du-chateau-l-arc-golf-clu.jpg"
              alt=""
            />
            <img
              className="sx-fg"
              src="/images/page-d-accueil-du-site-du-chateau-l-arc-golf-clu.jpg"
              alt="Le site du Château l’Arc Golf Club."
            />
          </div>
          <div
            className="sx-sl"
            data-t="img"
            data-fit="contain"
            data-cap="Réserver un départ en quelques clics."
          >
            <img className="sx-bg" src="/images/img-11f11561.jpg" alt="" />
            <img
              className="sx-fg"
              src="/images/img-11f11561.jpg"
              alt="Réserver un départ en quelques clics."
            />
          </div>
          <div className="sx-sl" data-t="img" data-fit="contain" data-cap="Le back-office, dans Orion Admin.">
            <img
              className="sx-bg"
              src="/images/accueil-d-orion-admin-pour-le-chateau-l-arc-golf.jpg"
              alt=""
            />
            <img
              className="sx-fg"
              src="/images/accueil-d-orion-admin-pour-le-chateau-l-arc-golf.jpg"
              alt="Le back-office, dans Orion Admin."
            />
          </div>
        </div>
        <div className="sx-top">
          <div className="sx-bars" />
          <div className="sx-head">
            <span className="sx-av" />
            <b className="sx-name" />
            <span className="sx-by">Orion Studio</span>{' '}
            <button type="button" className="sx-snd" aria-label="Activer le son" hidden>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6.5H5L9 3V15L5 11.5H2V6.5Z" fill="currentColor" />
                <path
                  d="M12 6C13.2 7.2 13.2 10.8 12 12M14.5 4C16.6 6.4 16.6 11.6 14.5 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            <button type="button" className="sx-x" data-close="" aria-label="Fermer">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>
        <button type="button" className="sx-prev" aria-label="Story précédente" />
        <button type="button" className="sx-next" aria-label="Story suivante" />
        <p className="sx-cap" />
        <button type="button" className="sx-go" hidden>
          Voir le projet
        </button>
      </div>
    </div>
  )
}

export function ProjectModal() {
  return (
    <div className="pj" id="pj" hidden>
      <div className="pj-veil" data-close="" />
      <div className="pj-box" role="dialog" aria-modal="true" aria-labelledby="pj-title">
        <aside className="pj-side">
          <img className="pj-sky" src="/images/img-8048ecb4.png" alt="" />
          <div className="pj-side-in">
            <div className="pj-brand">
              <img className="px omark" src="/px/omark-fb765945.svg" alt="" width={23} height={22} />
              <span>Orion Studio</span>
            </div>
            <h2 className="pj-h" id="pj-title">
              Démarrer<span className="serif">un projet.</span>
            </h2>
            <ol className="pj-steps">
              <li data-s="0">
                <i />
                <div>
                  <b>Votre projet</b>
                  <span className="pj-sum">Type, budget, délai</span>
                </div>
              </li>
              <li data-s="1">
                <i />
                <div>
                  <b>Vos coordonnées</b>
                  <span className="pj-sum">Pour vous recontacter</span>
                </div>
              </li>
              <li data-s="2">
                <i />
                <div>
                  <b>Rendez-vous</b>
                  <span className="pj-sum">Appel de 30 minutes</span>
                </div>
              </li>
            </ol>
            <div className="pj-duo">
              <img
                src="/images/julien-et-theo-fondateurs-d-orion-studio.png"
                alt="Julien et Théo, fondateurs d’Orion Studio"
              />
              <div>
                <b>Julien ou Théo</b>
                <span>vous répond directement, sans intermédiaire.</span>
              </div>
            </div>
          </div>
        </aside>
        <div className="pj-main">
          <div className="pj-top">
            <div className="pj-prog" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span className="pj-count" aria-live="polite">
              Étape 1 sur 3
            </span>{' '}
            <button type="button" className="pj-x" data-close="" aria-label="Fermer">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
          <form className="pj-form" noValidate>
            <section className="pj-step" data-step="0">
              <h3 className="pj-q">
                Quel est votre projet ?<span>Plusieurs choix possibles.</span>
              </h3>
              <div className="pj-types">
                <label className="pj-card">
                  <input type="checkbox" name="type" value="Site internet" id="pj-type-site" />
                  <span className="pj-card-in">
                    <img className="px picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
                    <b>Site internet</b>
                    <small>Vitrine, refonte ou sur-mesure</small>
                    <i className="pj-tick">
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FFFFFF" strokeWidth="1.8" />
                      </svg>
                    </i>
                  </span>
                </label>
                <label className="pj-card">
                  <input type="checkbox" name="type" value="Boutique e-commerce" id="pj-type-shop" />
                  <span className="pj-card-in">
                    <img className="px picon" src="/px/picon-808b4de1.svg" alt="" width={20} height={20} />
                    <b>Boutique e-commerce</b>
                    <small>Shopify, catalogue, paiement</small>
                    <i className="pj-tick">
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FFFFFF" strokeWidth="1.8" />
                      </svg>
                    </i>
                  </span>
                </label>
                <label className="pj-card">
                  <input type="checkbox" name="type" value="Application web" id="pj-type-code" />
                  <span className="pj-card-in">
                    <img className="px picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
                    <b>Application web</b>
                    <small>Espace client, outil métier, SaaS</small>
                    <i className="pj-tick">
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FFFFFF" strokeWidth="1.8" />
                      </svg>
                    </i>
                  </span>
                </label>
                <label className="pj-card">
                  <input type="checkbox" name="type" value="Automatisations" id="pj-type-auto" />
                  <span className="pj-card-in">
                    <img className="px picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
                    <b>Automatisations</b>
                    <small>Formulaires, CRM, devis, relances</small>
                    <i className="pj-tick">
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FFFFFF" strokeWidth="1.8" />
                      </svg>
                    </i>
                  </span>
                </label>
                <label className="pj-card">
                  <input type="checkbox" name="type" value="SEO & GEO" id="pj-type-seo" />
                  <span className="pj-card-in">
                    <img className="px picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
                    <b>SEO & GEO</b>
                    <small>Google et les réponses des IA</small>
                    <i className="pj-tick">
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FFFFFF" strokeWidth="1.8" />
                      </svg>
                    </i>
                  </span>
                </label>
                <label className="pj-card">
                  <input type="checkbox" name="type" value="Google Ads" id="pj-type-ads" />
                  <span className="pj-card-in">
                    <img className="px picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
                    <b>Google Ads</b>
                    <small>Campagnes pilotées aux contacts</small>
                    <i className="pj-tick">
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FFFFFF" strokeWidth="1.8" />
                      </svg>
                    </i>
                  </span>
                </label>
              </div>
              <div className="pj-row">
                <div className="pj-k">Création ou refonte ?</div>
                <div className="pj-chips" role="radiogroup">
                  <label className="pj-chip">
                    <input type="radio" name="kind" value="Création" id="pj-kind-0" />
                    <span>Création</span>
                  </label>
                  <label className="pj-chip">
                    <input type="radio" name="kind" value="Refonte" id="pj-kind-1" />
                    <span>Refonte</span>
                  </label>
                  <label className="pj-chip">
                    <input type="radio" name="kind" value="Je ne sais pas encore" id="pj-kind-2" />
                    <span>Je ne sais pas encore</span>
                  </label>
                </div>
              </div>
              <div className="pj-row">
                <div className="pj-k">Budget envisagé</div>
                <div className="pj-chips" role="radiogroup">
                  <label className="pj-chip">
                    <input type="radio" name="budget" value="Moins de 5 k€" id="pj-budget-0" />
                    <span>Moins de 5 k€</span>
                  </label>
                  <label className="pj-chip">
                    <input type="radio" name="budget" value="5 à 15 k€" id="pj-budget-1" />
                    <span>5 à 15 k€</span>
                  </label>
                  <label className="pj-chip">
                    <input type="radio" name="budget" value="15 à 40 k€" id="pj-budget-2" />
                    <span>15 à 40 k€</span>
                  </label>
                  <label className="pj-chip">
                    <input type="radio" name="budget" value="Plus de 40 k€" id="pj-budget-3" />
                    <span>Plus de 40 k€</span>
                  </label>
                  <label className="pj-chip">
                    <input type="radio" name="budget" value="À définir ensemble" id="pj-budget-4" />
                    <span>À définir ensemble</span>
                  </label>
                </div>
              </div>
              <div className="pj-row">
                <div className="pj-k">Pour quand ?</div>
                <div className="pj-chips" role="radiogroup">
                  <label className="pj-chip">
                    <input type="radio" name="when" value="Dès que possible" id="pj-when-0" />
                    <span>Dès que possible</span>
                  </label>
                  <label className="pj-chip">
                    <input type="radio" name="when" value="Dans 1 à 3 mois" id="pj-when-1" />
                    <span>Dans 1 à 3 mois</span>
                  </label>
                  <label className="pj-chip">
                    <input type="radio" name="when" value="Plus tard" id="pj-when-2" />
                    <span>Plus tard</span>
                  </label>
                </div>
              </div>
            </section>
            <section className="pj-step" data-step="1" hidden>
              <h3 className="pj-q">
                Qui êtes-vous ?<span>Vos informations servent uniquement à vous recontacter.</span>
              </h3>
              <div className="pj-grid">
                <label className="pj-f" htmlFor="pj-prenom">
                  <span>
                    Prénom<em>*</em>
                  </span>
                  <input id="pj-prenom" name="prenom" type="text" autoComplete="given-name" required />
                </label>
                <label className="pj-f" htmlFor="pj-nom">
                  <span>Nom</span>
                  <input id="pj-nom" name="nom" type="text" autoComplete="family-name" />
                </label>
                <label className="pj-f" htmlFor="pj-email">
                  <span>
                    E-mail<em>*</em>
                  </span>
                  <input id="pj-email" name="email" type="email" autoComplete="email" required />
                </label>
                <label className="pj-f" htmlFor="pj-tel">
                  <span>Téléphone</span>
                  <input id="pj-tel" name="tel" type="tel" autoComplete="tel" />
                </label>
                <label className="pj-f" htmlFor="pj-societe">
                  <span>Entreprise</span>
                  <input id="pj-societe" name="societe" type="text" autoComplete="organization" />
                </label>
                <label className="pj-f" htmlFor="pj-site">
                  <span>Site actuel</span>
                  <input id="pj-site" name="site" type="url" autoComplete="url" />
                </label>
                <label className="pj-f pj-full" htmlFor="pj-msg">
                  <span>Votre projet en quelques lignes</span>
                  <textarea
                    id="pj-msg"
                    name="msg"
                    rows={4}
                    placeholder="Votre activité, vos objectifs, ce qui ne va pas avec le site actuel…"
                  />
                </label>
              </div>
            </section>
            <section className="pj-step" data-step="2" hidden>
              <h3 className="pj-q">
                Choisissez un créneau<span>Appel de 30 minutes avec Julien ou Théo · heure de Paris</span>
              </h3>
              <div className="pj-modes" role="radiogroup">
                <label className="pj-mode">
                  <input type="radio" name="mode" value="Visio" id="pj-mode-0" defaultChecked />
                  <span>
                    <b>Visio</b>
                    <small>Google Meet</small>
                  </span>
                </label>
                <label className="pj-mode">
                  <input type="radio" name="mode" value="Téléphone" id="pj-mode-1" />
                  <span>
                    <b>Téléphone</b>
                    <small>On vous appelle</small>
                  </span>
                </label>
                <label className="pj-mode">
                  <input type="radio" name="mode" value="Au studio" id="pj-mode-2" />
                  <span>
                    <b>Au studio</b>
                    <small>Paris 8e</small>
                  </span>
                </label>
              </div>
              <div className="pj-book">
                <div className="pj-cal">
                  <div className="pj-cal-h">
                    <button type="button" className="pj-nav" data-m="-1" aria-label="Mois précédent">
                      ‹
                    </button>
                    <b className="pj-month" />
                    <button type="button" className="pj-nav" data-m="1" aria-label="Mois suivant">
                      ›
                    </button>
                  </div>
                  <div className="pj-wd">
                    <span>L</span>
                    <span>M</span>
                    <span>M</span>
                    <span>J</span>
                    <span>V</span>
                    <span>S</span>
                    <span>D</span>
                  </div>
                  <div className="pj-days" />
                </div>
                <div className="pj-slots">
                  <div className="pj-day-t">Choisissez un jour</div>
                  <div className="pj-times" />
                </div>
              </div>
              <button type="button" className="pj-skip">
                Je préfère être rappelé·e
              </button>
            </section>
            <section className="pj-step pj-done" data-step="3" hidden>
              <span className="pj-ok">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FFFFFF" strokeWidth="1.8" />
                </svg>
              </span>
              <h3 className="pj-q pj-done-t" />
              <p className="pj-done-p" />
              <div className="pj-ticket" />
              <div className="pj-done-b">
                <a className="btn btn-ink pj-gcal" target="_blank" rel="noopener">
                  Ajouter à Google Calendar
                </a>
                <button type="button" className="btn btn-ghost" data-close="">
                  Fermer
                </button>
              </div>
              <p className="pj-proto">
                Prototype : aucune donnée n’est envoyée. En ligne, l’invitation Google Calendar et le lien
                Meet partent par e-mail.
              </p>
            </section>
          </form>
          <div className="pj-foot">
            <button type="button" className="pj-back">
              Retour
            </button>
            <span className="pj-hint" role="alert" />
            <button type="button" className="btn btn-ink pj-next">
              Continuer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function OrioWidget() {
  return (
    <div className="ow" id="ow">
      <div className="ow-teaser" hidden>
        <button type="button" className="ow-tx" aria-label="Masquer le message">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>{' '}
        <b>Bonjour, moi c’est Orio.</b>
        <span>Une question sur votre site ou sur le studio ? Je vous réponds ici.</span>
      </div>
      <section className="ow-panel" id="ow-panel" role="dialog" aria-label="Discuter avec Orio">
        <header className="ow-h">
          <span className="ow-av">
            <img className="px" src="/px/art-2060558d.svg" alt="" width={43.5} height={42} />
          </span>
          <div>
            <b>Orio</b>
            <span>
              <i />
              Assistant d’Orion Studio
            </span>
          </div>
          <button type="button" className="ow-close" aria-label="Fermer la discussion">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </header>
        <div className="ow-log" aria-live="polite" />
        <div className="ow-quick" />
        <form className="ow-form" noValidate>
          <label className="ow-sr" htmlFor="ow-in">
            Votre message
          </label>
          <input id="ow-in" name="ow-in" autoComplete="off" placeholder="Écrivez à Orio…" />
          <button type="submit" className="ow-send" aria-label="Envoyer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 1H9V5H13V9H9V13H5V9H1V5H5V1Z" fill="#0E0E0C" />
            </svg>
          </button>
        </form>
        <div className="ow-foot">
          Orio répond avec les infos du studio · Julien ou Théo prennent le relais
        </div>
      </section>
      <button
        type="button"
        className="ow-btn"
        aria-expanded="false"
        aria-controls="ow-panel"
        aria-label="Discuter avec Orio"
      >
        <span className="ow-face ow-f-open">
          <img className="px" src="/px/art-86489042.svg" alt="" width={50.75} height={49} />
        </span>
        <span className="ow-face ow-f-blink">
          <img className="px" src="/px/art-92c2f53a.svg" alt="" width={50.75} height={49} />
        </span>
        <i className="ow-dot" />
      </button>
    </div>
  )
}

export function CursorDot() {
  return (
    <div className="cur-dot" aria-hidden="true">
      <i />
    </div>
  )
}

export function CursorRing() {
  return (
    <div className="cur-ring" aria-hidden="true">
      <i />
    </div>
  )
}

/** Calques communs à toutes les pages (menu mobile, pop-up projet, stories, Orio, curseur). */
export function Overlays() {
  return (
    <>
      <MobileMenu />
      <VideoLightbox />
      <StoriesViewer />
      <ProjectModal />
      <OrioWidget />
      <CursorDot />
      <CursorRing />
    </>
  )
}
