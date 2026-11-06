import { Link } from 'react-router-dom'

export function MobileMenu() {
  return (
    <nav className="mo-menu" id="m-menu" aria-label="Menu">
      <div className="mo-mk">Expertises</div>
      <div className="mo-mg">
        <Link to="/expertises/site-internet" className="mo-mi" data-exp="site-internet">
          <img className="pxsvg picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <span>Site internet</span>
        </Link>
        <Link to="/expertises/site-vitrine" className="mo-mi mo-msub" data-exp="site-vitrine">
          <span>Site vitrine</span>
        </Link>
        <Link to="/expertises/site-dynamique" className="mo-mi mo-msub" data-exp="site-dynamique">
          <span>Site dynamique</span>
        </Link>
        <Link to="/expertises/site-concept" className="mo-mi mo-msub" data-exp="site-concept">
          <span>Site concept</span>
        </Link>
        <Link to="/expertises/e-commerce" className="mo-mi" data-exp="e-commerce">
          <img className="pxsvg picon" src="/px/picon-808b4de1.svg" alt="" width={20} height={20} />
          <span>E-commerce</span>
        </Link>
        <Link
          to="/expertises/developpement-applications"
          className="mo-mi"
          data-exp="developpement-applications"
        >
          <img className="pxsvg picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
          <span>Développement d’applications</span>
        </Link>
        <Link to="/expertises/automatisations" className="mo-mi" data-exp="automatisations">
          <img className="pxsvg picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <span>Automatisations</span>
        </Link>
        <Link to="/expertises/seo" className="mo-mi" data-exp="seo">
          <img className="pxsvg picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
          <span>SEO</span>
        </Link>
        <Link to="/expertises/geo" className="mo-mi" data-exp="geo">
          <img className="pxsvg picon" src="/px/picon-84c912e7.svg" alt="" width={20} height={20} />
          <span>GEO</span>
        </Link>
        <Link to="/expertises/google-ads" className="mo-mi" data-exp="google-ads">
          <img className="pxsvg picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
          <span>Google Ads</span>
        </Link>
      </div>
      <div className="mo-mk">Pour qui ?</div>
      <div className="mo-mg mo-mg-who">
        <Link to="/pour-qui/tpe-pme" className="mo-mi" data-sector="pme">
          <img className="pxsvg picon" src="/px/picon-4780f153.svg" alt="" width={20} height={20} />
          <span>TPE & PME</span>
        </Link>
        <Link to="/pour-qui/independants" className="mo-mi" data-sector="indep">
          <img className="pxsvg picon" src="/px/picon-00814f13.svg" alt="" width={20} height={20} />
          <span>Indépendants & micro-entrepreneurs</span>
        </Link>
        <Link to="/pour-qui/marques-e-commerce" className="mo-mi" data-sector="shop">
          <img className="pxsvg picon" src="/px/picon-808b4de1.svg" alt="" width={20} height={20} />
          <span>Marques & e-commerçants</span>
        </Link>
        <Link to="/pour-qui/start-up" className="mo-mi" data-sector="startup">
          <img className="pxsvg picon" src="/px/picon-f0c33abd.svg" alt="" width={20} height={20} />
          <span>Start-up</span>
        </Link>
      </div>
      <div className="mo-mk">Par secteur</div>
      <div className="sec-ring mo-sec-ring">
        <Link to="/pour-qui/golfs" className="sec-st" data-sector="golf" role="link" tabIndex={0}>
          <span className="sec-av">
            <span>
              <img
                className="pxsvg"
                src="/px/art-adc97f27.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
          <b>Golfs</b>
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
        <Link to="/pour-qui/associations" className="sec-st" data-sector="asso" role="link" tabIndex={0}>
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
                <rect x="-1" y="-1" width="16" height="16" fill="#FFE3D9" />
                <rect x="3" y="2" width="3" height="1" fill="#FF4D1A" />
                <rect x="8" y="2" width="3" height="1" fill="#FF4D1A" />
                <rect x="2" y="3" width="10" height="1" fill="#FF4D1A" />
                <rect x="2" y="4" width="1" height="1" fill="#FF4D1A" />
                <rect x="3" y="4" width="2" height="1" fill="#FFB59C" />
                <rect x="5" y="4" width="7" height="1" fill="#FF4D1A" />
                <rect x="2" y="5" width="1" height="1" fill="#FF4D1A" />
                <rect x="3" y="5" width="1" height="1" fill="#FFB59C" />
                <rect x="4" y="5" width="8" height="1" fill="#FF4D1A" />
                <rect x="2" y="6" width="10" height="1" fill="#FF4D1A" />
                <rect x="3" y="7" width="8" height="1" fill="#FF4D1A" />
                <rect x="11" y="7" width="1" height="1" fill="#C93A12" />
                <rect x="4" y="8" width="6" height="1" fill="#FF4D1A" />
                <rect x="10" y="8" width="1" height="1" fill="#C93A12" />
                <rect x="5" y="9" width="4" height="1" fill="#FF4D1A" />
                <rect x="9" y="9" width="1" height="1" fill="#C93A12" />
                <rect x="6" y="10" width="2" height="1" fill="#FF4D1A" />
                <rect x="8" y="10" width="1" height="1" fill="#C93A12" />
              </svg>
            </span>
          </span>
          <b>Associations</b>
        </Link>
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
        <Link to="/pour-qui/immobilier" className="sec-st" data-sector="immo" role="link" tabIndex={0}>
          <span className="sec-av">
            <span>
              <img
                className="pxsvg"
                src="/px/art-b70ac2f6.svg"
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
            </span>
          </span>
          <b>Immobilier</b>
        </Link>
        <Link
          to="/pour-qui"
          className="sec-st sec-all mm-all"
          role="link"
          tabIndex={0}
          aria-label="Voir tous les secteurs (8)"
        >
          <span className="sec-av">
            <span className="sec-mos">
              <i>
                <img
                  className="pxsvg"
                  src="/px/art-e0dda6d2.svg"
                  alt=""
                  style={{ width: '100%', height: '100%' }}
                />
              </i>
              <i>
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
              </i>
              <i>
                <svg
                  viewBox="-1 -1 16 16"
                  width="100%"
                  height="100%"
                  shapeRendering="crispEdges"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect x="-1" y="-1" width="16" height="16" fill="#FFE3D9" />
                  <rect x="3" y="2" width="3" height="1" fill="#FF4D1A" />
                  <rect x="8" y="2" width="3" height="1" fill="#FF4D1A" />
                  <rect x="2" y="3" width="10" height="1" fill="#FF4D1A" />
                  <rect x="2" y="4" width="1" height="1" fill="#FF4D1A" />
                  <rect x="3" y="4" width="2" height="1" fill="#FFB59C" />
                  <rect x="5" y="4" width="7" height="1" fill="#FF4D1A" />
                  <rect x="2" y="5" width="1" height="1" fill="#FF4D1A" />
                  <rect x="3" y="5" width="1" height="1" fill="#FFB59C" />
                  <rect x="4" y="5" width="8" height="1" fill="#FF4D1A" />
                  <rect x="2" y="6" width="10" height="1" fill="#FF4D1A" />
                  <rect x="3" y="7" width="8" height="1" fill="#FF4D1A" />
                  <rect x="11" y="7" width="1" height="1" fill="#C93A12" />
                  <rect x="4" y="8" width="6" height="1" fill="#FF4D1A" />
                  <rect x="10" y="8" width="1" height="1" fill="#C93A12" />
                  <rect x="5" y="9" width="4" height="1" fill="#FF4D1A" />
                  <rect x="9" y="9" width="1" height="1" fill="#C93A12" />
                  <rect x="6" y="10" width="2" height="1" fill="#FF4D1A" />
                  <rect x="8" y="10" width="1" height="1" fill="#C93A12" />
                </svg>
              </i>
              <i>
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
              </i>
            </span>
            <em>+4</em>
          </span>
          <b>Tous les secteurs</b>
        </Link>
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
          poster="/images/f54b9517fb.jpg"
        />
      </div>
    </div>
  )
}

export function VideoStoriesViewer() {
  return (
    <div className="avsv" id="avsv" hidden>
      <div className="avsv-veil" data-x="" />
      <div className="avsv-box" role="dialog" aria-modal="true" aria-label="Témoignages vidéo">
        <div className="avsv-bars" />
        <div className="avsv-top">
          <span className="avs-av">
            <img alt="" />
          </span>
          <b />
          <button type="button" className="avsv-x" data-x="" aria-label="Fermer">
            Fermer
          </button>
        </div>
        <video className="avsv-v" playsInline />
        <button type="button" className="avsv-prev" aria-label="Story précédente" />
        <button type="button" className="avsv-next" aria-label="Story suivante" />
      </div>
    </div>
  )
}

export function StoriesViewer() {
  return (
    <div className="sx" id="sx" hidden>
      <div className="sx-veil" data-close="" />
      <div className="sx-box" role="dialog" aria-modal="true" aria-label="Stories d’Orion Studio">
        <div className="sx-g" data-name="Shooting" data-set="studio" hidden>
          <span className="sx-th">
            <img src="/images/a608f4afa30e86.png" alt="" />
          </span>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Jour de shooting.">
            <img className="sx-bg" src="/images/347124480e4a57.png" alt="" />
            <img className="sx-fg" src="/images/347124480e4a57.png" alt="Jour de shooting." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Julien, côté fauteuil.">
            <img className="sx-bg" src="/images/569cf65d4427e1.png" alt="" />
            <img className="sx-fg" src="/images/569cf65d4427e1.png" alt="Julien, côté fauteuil." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Théo, côté chaise de réalisateur.">
            <img className="sx-bg" src="/images/23873003fe2522.png" alt="" />
            <img className="sx-fg" src="/images/23873003fe2522.png" alt="Théo, côté chaise de réalisateur." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="contain" data-cap="Le rouge, presque orange.">
            <img className="sx-bg" src="/images/f9ca0176950b2b.png" alt="" />
            <img className="sx-fg" src="/images/f9ca0176950b2b.png" alt="Le rouge, presque orange." />
          </div>
        </div>
        <div className="sx-g" data-name="Doggy" data-set="studio" hidden>
          <span className="sx-th">
            <img src="/images/4f470e228f8d42.png" alt="" />
          </span>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Ce matin, au studio.">
            <img className="sx-bg" src="/images/d59a9003b57e1a.png" alt="" />
            <img className="sx-fg" src="/images/d59a9003b57e1a.png" alt="Ce matin, au studio." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Doggy, à l’accueil.">
            <img className="sx-bg" src="/images/4f470e228f8d42.png" alt="" />
            <img className="sx-fg" src="/images/4f470e228f8d42.png" alt="Doggy, à l’accueil." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="contain" data-cap="Le plus calme du plateau.">
            <img className="sx-bg" src="/images/529d056e5364c0.png" alt="" />
            <img className="sx-fg" src="/images/529d056e5364c0.png" alt="Le plus calme du plateau." />
          </div>
        </div>
        <div className="sx-g" data-name="Stand-ING" data-set="studio" hidden>
          <span className="sx-th logo">
            <img src="/images/f929bc41088d4e.png" alt="" />
          </span>
          <div
            className="sx-sl"
            data-t="video"
            data-fit="contain"
            data-cap="Stand-ING · Imaginez. Personnalisez. Exposez."
          >
            <img className="sx-bg" src="/images/b3624ef1019ca0.jpg" alt="" />
            <video
              className="sx-fg"
              src="/media/standing-ad.mp4"
              playsInline
              preload="none"
              muted
              poster="/images/f54b9517fb.jpg"
            />
          </div>
        </div>
        <div className="sx-g" data-name="Le bureau" data-set="studio" hidden>
          <span className="sx-th">
            <img src="/images/2e238aa4803b68.png" alt="" />
          </span>
          <div className="sx-sl" data-t="img" data-fit="contain" data-cap="Le bureau du jour.">
            <img className="sx-bg" src="/images/763775a11e4636.png" alt="" />
            <img className="sx-fg" src="/images/763775a11e4636.png" alt="Le bureau du jour." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Le moniteur vintage du plateau.">
            <img className="sx-bg" src="/images/b9fcad2688824d.png" alt="" />
            <img className="sx-fg" src="/images/b9fcad2688824d.png" alt="Le moniteur vintage du plateau." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="La plante du bureau.">
            <img className="sx-bg" src="/images/8a174aa0f7139b.png" alt="" />
            <img className="sx-fg" src="/images/8a174aa0f7139b.png" alt="La plante du bureau." />
          </div>
          <div className="sx-sl" data-t="img" data-fit="cover" data-cap="Le boîtier, toujours à portée.">
            <img className="sx-bg" src="/images/59d744e3bf52ec.png" alt="" />
            <img className="sx-fg" src="/images/59d744e3bf52ec.png" alt="Le boîtier, toujours à portée." />
          </div>
        </div>
        <div className="sx-g" data-name="Château l’Arc" data-set="studio" hidden>
          <span className="sx-th logo">
            <img src="/images/a58f0039fd543e.png" alt="" />
          </span>
          <div
            className="sx-sl"
            data-t="img"
            data-fit="contain"
            data-cap="Le site du Château l’Arc Golf Club."
          >
            <img className="sx-bg" src="/images/661531aedb86a4.jpg" alt="" />
            <img
              className="sx-fg"
              src="/images/661531aedb86a4.jpg"
              alt="Le site du Château l’Arc Golf Club."
            />
          </div>
          <div
            className="sx-sl"
            data-t="img"
            data-fit="contain"
            data-cap="Réserver un départ en quelques clics."
          >
            <img className="sx-bg" src="/images/8c9e1b90dcf458.jpg" alt="" />
            <img
              className="sx-fg"
              src="/images/8c9e1b90dcf458.jpg"
              alt="Réserver un départ en quelques clics."
            />
          </div>
          <div className="sx-sl" data-t="img" data-fit="contain" data-cap="Le back-office, dans Orion Admin.">
            <img className="sx-bg" src="/images/94f1f7140db692.jpg" alt="" />
            <img className="sx-fg" src="/images/94f1f7140db692.jpg" alt="Le back-office, dans Orion Admin." />
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
          <img className="pj-sky" src="/images/729bb5e7cb4d36.png" alt="" />
          <div className="pj-side-in">
            <div className="pj-brand">
              <img className="pxsvg omark" src="/px/omark-fb765945.svg" alt="" width={23} height={22} />
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
              <img src="/images/a4d016edd40d8d.png" alt="Julien et Théo, fondateurs d’Orion Studio" />
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
                    <img className="pxsvg picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
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
                    <img className="pxsvg picon" src="/px/picon-808b4de1.svg" alt="" width={20} height={20} />
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
                    <img className="pxsvg picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
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
                    <img className="pxsvg picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
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
                  <input type="checkbox" name="type" value="Google Ads" id="pj-type-ads" />
                  <span className="pj-card-in">
                    <img className="pxsvg picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
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
                    <input type="radio" name="budget" value="Moins de 3 000 €" id="pj-budget-0" />
                    <span>Moins de 3 000 €</span>
                  </label>
                  <label className="pj-chip">
                    <input type="radio" name="budget" value="3 000 à 5 000 €" id="pj-budget-1" />
                    <span>3 000 à 5 000 €</span>
                  </label>
                  <label className="pj-chip">
                    <input type="radio" name="budget" value="5 000 à 10 000 €" id="pj-budget-2" />
                    <span>5 000 à 10 000 €</span>
                  </label>
                  <label className="pj-chip">
                    <input type="radio" name="budget" value="10 000 € et plus" id="pj-budget-3" />
                    <span>10 000 € et plus</span>
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

/** Calques communs à toutes les pages (menu mobile, pop-up projet, stories, curseur). */
export function Overlays() {
  return (
    <>
      <MobileMenu />
      <VideoLightbox />
      <VideoStoriesViewer />
      <StoriesViewer />
      <ProjectModal />
      <CursorDot />
      <CursorRing />
    </>
  )
}
