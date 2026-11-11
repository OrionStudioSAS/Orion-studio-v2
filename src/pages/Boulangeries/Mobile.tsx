import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'
import { MoCommentOnTravaille2 } from '../../components/shared/MoCommentOnTravaille2'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/pour-qui">
          Pour qui ? / <b>Boulangeries</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Site internet pour boulangeries<span className="serif">qui donne faim avant l’ouverture.</span>
      </h1>
      <p className="mo-lead">
        Boulangeries, pâtisseries, traiteurs : vos horaires toujours justes, les commandes de gâteaux et le
        retrait en boutique, sur un site que vous mettez à jour depuis votre téléphone.
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
          src="/images/088924e6720bff.png"
          alt="Un fournil de boulangerie au petit matin, en pixel art"
        />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="pxsvg omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde le site
            <br />
            de votre boulangerie ?
          </span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              https://www.votre-boulangerie.fr
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

function CeQueVotreSite() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce que votre site<span className="serif">doit faire pour vous.</span>
        </h2>
      </div>
      <div className="sxm-ocs">
        <div className="sxm-oc">
          <h3>Des horaires toujours justes</h3>
          <p>
            Congés, jours fériés, fermetures exceptionnelles : vous les changez en une minute depuis votre
            téléphone.
          </p>
        </div>
        <div className="sxm-oc">
          <h3>Les commandes sans le téléphone qui sonne</h3>
          <p>Gâteaux, pièces montées, plateaux : vos clients commandent en ligne, avec la date de retrait.</p>
        </div>
        <div className="sxm-oc">
          <h3>Trouvée par le quartier</h3>
          <p>Une fiche Google soignée et un site qui répond à « boulangerie près de chez moi ».</p>
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
            <div className="win win-shot sx-real">
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
                <img
                  className="shot"
                  src="/images/87791a3fdc31ca.jpg"
                  alt="Capture du site du Moulin de Balme"
                />
              </div>
            </div>
          </div>
          <h3>Vitrine de la boutique</h3>
          <p>Vos pains, vos pâtisseries et vos spécialités, en photos. Ici, le site du Moulin de Balme.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="uf">
              <div className="ul-h">Commander un gâteau</div>
              <div className="uf-g">
                <label className="fld fld-f">
                  <span>Gâteau</span>
                  <b>Fraisier</b>
                </label>
                <label className="fld">
                  <span>Parts</span>
                  <b>8</b>
                </label>
                <label className="fld">
                  <span>Retrait</span>
                  <b>Samedi</b>
                </label>
                <label className="fld">
                  <span>Message</span>
                  <b>Joyeux anniversaire</b>
                </label>
              </div>
              <div className="shop-cta">Valider la commande</div>
            </div>
          </div>
          <h3>Commande de gâteaux</h3>
          <p>Parfum, nombre de parts, date de retrait : tout est demandé dès la commande.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ui-sl">
              <div className="ul-h">Retrait · samedi</div>
              <div className="rs-s sl-g">
                <span className="off">7:30</span>
                <span className="">8:00</span>
                <span className="on">8:30</span>
                <span className="off">9:00</span>
                <span className="">9:30</span>
                <span className="">10:00</span>
              </div>
              <div className="shop-cta">Choisir ce créneau</div>
            </div>
          </div>
          <h3>Retrait en boutique</h3>
          <p>Vos clients choisissent un créneau, vous préparez à l’avance.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Horaires</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Mardi – samedi</span>
                <b>6:30 – 19:30</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Dimanche</span>
                <b>7:00 – 13:00</b>
              </div>
              <div className="ul-r">
                <i className="sq" />
                <span>Lundi</span>
                <b>Fermé</b>
              </div>
            </div>
          </div>
          <h3>Horaires & fermetures</h3>
          <p>Modifiés depuis votre téléphone, affichés partout sur le site.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="gbp">
              <div className="gbp-n">Votre boulangerie</div>
              <div className="gbp-m">Boulangerie · Ouvert · ferme à 19 h 30</div>
              <div className="gbp-b">
                <span>Itinéraire</span>
                <span>Appeler</span>
                <span>Site web</span>
              </div>
            </div>
          </div>
          <h3>Fiche Google</h3>
          <p>Horaires, photos et itinéraire à jour sur Google.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="serp u-bare">
              <div className="serp-q">
                <svg
                  className="c-ic"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="9" r="7.4" stroke="#77776F" strokeWidth="1.2" />
                  <path
                    d="M1.6 9H16.4M9 1.6C11 3.6 11.9 6.2 11.9 9C11.9 11.8 11 14.4 9 16.4M9 1.6C7 3.6 6.1 6.2 6.1 9C6.1 11.8 7 14.4 9 16.4"
                    stroke="#77776F"
                    strokeWidth="1.2"
                  />
                </svg>
                <span>boulangerie paris 11</span>
              </div>
              <div className="serp-r">
                <span className="serp-u">votre-boulangerie.fr</span>
                <b>Boulangerie artisanale à Paris 11e — Pains au levain</b>
                <span className="serp-d">
                  Pains, viennoiseries et gâteaux sur commande. Retrait en boutique.
                </span>
              </div>
            </div>
          </div>
          <h3>SEO local</h3>
          <p>Être trouvée sur « boulangerie + votre quartier ».</p>
        </article>
      </div>
    </section>
  )
}

function CasClientLeMoulin() {
  return (
    <section className="mo-sec" id="m-cas-balme">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Cas client<span className="serif">Le Moulin de Balme.</span>
        </h2>
        <p className="mo-lead">
          La boulangerie de Stéphane et Tomoko Reinat, à Brive-la-Gaillarde : pains au levain, farines
          anciennes, et un site qui prend les commandes la veille.
        </p>
      </div>
      <div className="mb-phones">
        <img
          src="/images/616d8441042c98.jpg"
          alt="Le site du Moulin de Balme sur mobile : accueil et click & collect"
        />
        <img src="/images/f28433b73562c8.jpg" alt="Le site du Moulin de Balme sur mobile : sortie du four" />
      </div>
      <div className="mc-list mg-case">
        <div className="case-k">Ce que fait le site</div>
        <ul>
          <li>Click & collect : commande avant 14 h, retrait dès 7 h le lendemain</li>
          <li>Compte à rebours jusqu’à la clôture des commandes</li>
          <li>Boutique en ligne : panier, recherche, meilleures ventes</li>
          <li>« Cette semaine » : les pains qui sortent du four, jour par jour</li>
          <li>L’histoire de la maison, de Tokyo à Brive</li>
        </ul>
      </div>
      <Link
        to="/realisations/moulin-de-balme"
        className="btn btn-ink mo-btn mo-btn-full"
        data-case="moulin-de-balme"
      >
        Lire l’étude de cas
      </Link>{' '}
      <a
        className="btn btn-ghost mo-btn mo-btn-full mb-mvisit"
        href="https://www.moulin-de-balme.fr/"
        target="_blank"
        rel="noopener"
      >
        Voir le site
      </a>
    </section>
  )
}

function LesAutresSecteurs() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Les autres<span className="serif">secteurs.</span>
        </h2>
      </div>
      <div className="sec-ring sx-others mo-sec-ring">
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
      </div>
      <Link to="/pour-qui" className="lnk sx-alllnk sxm-alllnk">
        Voir tous les secteurs
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
            <span>Combien coûte un site pour une boulangerie ?</span>
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
            dépend du nombre de pages et des fonctionnalités (commande de gâteaux, retrait en boutique).
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien de temps pour être en ligne ?</span>
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
            Des fonctionnalités sur mesure demandent davantage : le planning est fixé dans le devis.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pourrai-je modifier mes horaires et mes produits moi-même ?</span>
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
            Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Horaires, fermetures,
            produits et actualités se modifient sans connaissances techniques.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pouvez-vous connecter notre caisse ou notre outil de commande ?</span>
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
            Oui, si l’outil le permet : la connexion (API, widget ou export) est vérifiée au cadrage, avant le
            devis.
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
          Et si votre site devenait<span className="serif">la vitrine de votre boulangerie ?</span>
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
            <Link to="/expertises/site-vitrine">Site vitrine</Link>
            <Link to="/expertises/site-dynamique">Site dynamique</Link>
            <Link to="/expertises/site-concept">Site concept</Link>
            <Link to="/expertises/e-commerce">E-commerce</Link>
            <Link to="/expertises/developpement-applications">Développement d’applications</Link>
            <Link to="/expertises/saas">SaaS</Link>
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
      <CeQueVotreSite />
      <CeQuOnLivre />
      <CasClientLeMoulin />
      <MoCommentOnTravaille2 />
      <LesAutresSecteurs />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
