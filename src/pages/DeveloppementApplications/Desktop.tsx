import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/">
          Expertises / <b>Développement d’applications</b>
        </Link>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Développement d’applications web</span>
        <span className="serif">taillées pour votre métier.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Espaces clients, outils internes, back-offices, plateformes SaaS : on développe des applications web
          robustes, agréables à utiliser et faciles à faire évoluer.
        </p>
        <div className="hero-cta">
          <div className="hero-btns">
            <a className="btn btn-ink">Envoyer mon besoin</a>
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
    <div className="hero-media sx-media xp-media">
      <div className="hm-layer">
        <img src="/images/0b3671704f979c.png" alt="" />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="pxsvg omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>Quel outil vous manque ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              Un espace client pour suivre les commandes et télécharger les factures
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
                Outil métier
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
                SaaS
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
                API
              </span>
            </div>
            <span className="send ch2-send">
              Envoyer mon besoin <span className="kbd">↵</span>
            </span>
          </div>
        </div>
        <div className="ch2-sug">
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-b6521826.svg" alt="" width={10} height={10} />
            <b>Créer un espace client</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-b6521826.svg" alt="" width={10} height={10} />
            <b>Remplacer un tableur par un outil</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-909d41ec.svg" alt="" width={10} height={10} />
            <b>Relier mes outils</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Refaire mon site</b>
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
          <span>Gratuit. On vous répond sous quelques jours avec une première piste et une estimation.</span>
        </div>
      </div>
      <div className="capt">L’atelier de l’horloger, 15 h</div>
    </div>
  )
}

function CeQuUnBon() {
  return (
    <section className="sec" style={{ padding: '0', borderTop: 'none' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’un bon outil
          <br />
          <span className="serif">change au quotidien.</span>
        </h2>
      </div>
      <div className="ocs">
        <div className="oc">
          <h3>Moins de ressaisie</h3>
          <p>L’information est saisie une fois, au bon endroit, et suit son chemin toute seule.</p>
        </div>
        <div className="oc">
          <h3>Tout au même endroit</h3>
          <p>Clients, commandes, documents et échanges réunis dans une interface claire.</p>
        </div>
        <div className="oc">
          <h3>Un outil qui grandit avec vous</h3>
          <p>Une base de code propre, documentée, prête pour les évolutions de demain.</p>
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
              <div className="u-bare um">
                <div className="msg msg-l">
                  <b>Julien</b>La facture de novembre est disponible dans votre espace.
                </div>
                <div className="msg msg-r">
                  <b>Vous</b>Merci, je la transmets à la compta.
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Espaces clients</h3>
            <p>Suivi, documents, messagerie : vos clients trouvent tout sans vous appeler.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Commandes du jour</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>#2291 · Atelier Morel</span>
                  <b>Expédiée</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-wa" />
                  <span>#2292 · SARL Ducret</span>
                  <b>En préparation</b>
                </div>
                <div className="ul-r">
                  <i className="sq" />
                  <span>#2293 · Maison Vidal</span>
                  <b>À valider</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>#2294 · Hôtel Belles Rives</span>
                  <b>Expédiée</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Outils internes & back-offices</h3>
            <p>Des écrans pensés pour vos équipes, pas pour un tableur.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ub">
                <div className="ul-h">Utilisateurs actifs</div>
                <div className="bars">
                  <i style={{ height: '28px' }} />
                  <i style={{ height: '44px' }} />
                  <i style={{ height: '36px' }} />
                  <i style={{ height: '60px' }} />
                  <i style={{ height: '52px' }} />
                  <i style={{ height: '76px' }} />
                  <i style={{ height: '68px' }} />
                  <i style={{ height: '92px' }} />
                  <i style={{ height: '84px' }} />
                  <i style={{ height: '108px' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Plateformes SaaS</h3>
            <p>Comptes, abonnements, rôles et tableaux de bord, de la V1 à la montée en charge.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="code u-bare">
                <div>
                  <span className="c-k">POST</span> <span className="c-f">/api/orders</span>
                </div>
                <div>
                  <span className="c-k">→</span> ERP <span className="c-s">synchronisé</span>
                </div>
                <div>
                  <span className="c-k">→</span> Facture <span className="c-s">générée</span>
                </div>
                <div>
                  <span className="c-k">→</span> E-mail client <span className="c-s">envoyé</span>
                </div>
                <div>
                  <span className="c-ok">
                    <i />
                    200 OK — 184 ms
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>API & intégrations</h3>
            <p>On relie votre application à vos outils : ERP, CRM, paiement, logistique.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Configurateur de stand</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Structure</span>
                  <b>Arche</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Comptoir</span>
                  <b>Avec réserve</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Écran</span>
                  <b>55 pouces</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-wa" />
                  <span>Surface</span>
                  <b>18 m²</b>
                </div>
                <div className="shop-cta ul-btn">Recevoir mon devis</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Configurateurs</h3>
            <p>Le client compose son produit, voit le résultat et reçoit son devis.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Journal des versions</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>v2.4 · Export comptable</span>
                  <b>En ligne</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>v2.3 · Rôles utilisateurs</span>
                  <b>En ligne</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-wa" />
                  <span>v2.5 · Application mobile</span>
                  <b>En cours</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Maintenance & évolutions</h3>
            <p>Mises à jour, sécurité, nouvelles fonctionnalités : on reste à vos côtés.</p>
          </div>
        </article>
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
              Cadrer
            </h3>
            <p>Ateliers métier, parcours et périmètre de la V1.</p>
          </div>
          <div className="st cur">
            <h3>
              <i />
              Designer
            </h3>
            <p>Prototype cliquable testé avec vos équipes.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Développer
            </h3>
            <p>Livraisons régulières sur une préprod.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Lancer & faire grandir
            </h3>
            <p>Mise en production, suivi et évolutions.</p>
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
            <img src="/images/aa1dbc34a9de66.png" alt="" />
            <div className="win win-stand">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Stand-ING — Configurateur de stand 3D</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img
                  className="cfg-shot"
                  src="/images/cfe60288d854b0.png"
                  alt="Configurateur de stand 3D Stand-ING"
                />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">Stand-ING</h3>
            <span className="p-tag">Configurateur 3D · 2026</span>
          </div>
          <p className="p-desc">
            Stand-ING : un configurateur de stands en ligne, du choix des éléments jusqu’au devis.
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

function ExpertisesAssociees() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '96px' }}>
        <h2 className="h2">Expertises associées</h2>
      </div>
      <div className="rls">
        <Link to="/expertises/automatisations" className="rl" data-exp="automatisations">
          <img className="pxsvg picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <div>
            <b>Automatisations</b>
            <span>Vos tâches répétitives, automatisées.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/site-internet" className="rl" data-exp="site-internet">
          <img className="pxsvg picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <div>
            <b>Site internet</b>
            <span>Vitrine, dynamique ou concept.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/geo" className="rl" data-exp="geo">
          <img className="pxsvg picon" src="/px/picon-84c912e7.svg" alt="" width={20} height={20} />
          <div>
            <b>GEO</b>
            <span>Être cité par les IA.</span>
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
              <span>Quelles technologies utilisez-vous ?</span>
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
              Principalement Next.js, React et Node.js, avec une base de données adaptée au projet. On choisit
              des technologies répandues et bien documentées, pour que votre application reste maintenable par
              n’importe quelle équipe.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Proposez-vous une maintenance ?</span>
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
              Oui : mises à jour, sauvegardes, surveillance et petites évolutions. Le contenu de la
              maintenance dépend de la technologie de votre site et vous est proposé au devis.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Le prix peut-il changer en cours de projet ?</span>
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
              Non, pas sans votre accord. Le devis fixe un périmètre ; si vous souhaitez ajouter une
              fonctionnalité en route, on vous chiffre l’ajout avant de le réaliser.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Comment suis-je informé de l’avancement ?</span>
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
              Dans Orion Admin, l’espace client inclus dans chaque projet : étapes, documents, messages et
              validations au même endroit.
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
            Un outil métier en tête ?<span className="serif">Dessinons-le ensemble.</span>
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
    <section className="artboard g-page s-page xp-page">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <CeQuUnBon />
      <CeQuOnLivre />
      <CommentOnTravaille />
      <UnProjetRecent />
      <ExpertisesAssociees />
      <QuestionsFrequentes />
      <GCta />
    </section>
  )
}
