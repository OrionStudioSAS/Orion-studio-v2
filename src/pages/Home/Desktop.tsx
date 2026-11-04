import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Clients } from '../../components/shared/Clients'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <h1 className="h1" aria-label="Agence de développement web pour les marques qui voient loin.">
        Agence de développement web
        <span className="serif">
          pour les <span className="rot">marques qui voient loin.</span>
        </span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Orion Studio conçoit et développe des sites sur-mesure, des boutiques Shopify et des applications
          web. Deux associés basés à Paris, du premier croquis à la mise en ligne, sans intermédiaire.
        </p>
        <div className="hero-cta">
          <div className="hero-btns">
            <a className="btn btn-ink" data-go="cta">
              Démarrer un projet <span className="kbd">P</span>
            </a>
            <a className="btn btn-ghost" data-go="work">
              Voir les réalisations
            </a>
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
    <div className="hero-media">
      <div className="hm-layer">
        <img
          src="/images/une-baie-la-nuit-sous-la-constellation-d-orion-e.png"
          alt="Une baie la nuit sous la constellation d’Orion, en pixel art"
        />
        <img
          className="hero-orig"
          src="/images/la-meme-scene-peinture-d-origine.jpg"
          alt="La même scène, peinture d’origine"
        />
        <i className="betel" style={{ left: '698px', top: '106px' }} />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="px omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>Quel site analyse-t-on ce soir ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.maison-arlette.fr
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
                <img className="px omark" src="/px/omark-214dbacb.svg" alt="" width={14} height={14} />
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
                Design
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
                SEO
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
                Vitesse
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
                Conversion
              </span>
            </div>
            <span className="send ch2-send">
              Analyser mon site <span className="kbd">↵</span>
            </span>
          </div>
        </div>
        <div className="ch2-sug">
          <span className="sg">
            <img className="px picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Refaire mon site</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Remonter sur Google</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-92b066cf.svg" alt="" width={10} height={10} />
            <b>Être cité par ChatGPT</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-2c356b90.svg" alt="" width={10} height={10} />
            <b>Je n’ai pas encore de site</b>
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
            Gratuit et sans engagement. Analyse et maquette envoyées par e-mail sous quelques jours.
          </span>
        </div>
      </div>
      <div className="toggle" role="group" aria-label="Rendu de l’image">
        <span className="on" data-v="px" role="button" tabIndex={0}>
          <i />
          PIXEL
        </span>
        <span data-v="orig" role="button" tabIndex={0}>
          <i />
          ORIGINAL
        </span>
      </div>
      <div className="capt">
        22 h 40 — <b>Bételgeuse</b>, l’étoile rouge d’Orion
      </div>
    </div>
  )
}

function OrionStudioCEst() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="mf">
        <div className="mf-k">
          <span>Le studio</span>
          <span>Paris · France et international · FR / EN</span>
        </div>
        <h2 className="mf-h">
          <div className="mf-l">
            <span className="mf-t ">Orion Studio, c’est</span>
            <img
              className="mf-pic"
              src="/images/julien-et-theo-fondateurs-d-orion-studio.png"
              alt="Julien et Théo, fondateurs d’Orion Studio"
            />
            <span className="mf-t ">Julien et Théo,</span>
          </div>
          <div className="mf-l">
            <span className="mf-t ">deux associés basés à Paris</span>
            <img
              className="mf-pic"
              src="/images/une-baie-la-nuit-en-pixel-art.png"
              alt="Une baie la nuit, en pixel art"
            />
          </div>
          <div className="mf-l">
            <span className="mf-t mf-m">qui dessinent</span>
            <span className="mf-ui mf-figma" title="Figma">
              <img className="px" src="/px/art-13e55d0a.svg" alt="" width={40} height={60} />
            </span>
            <span className="mf-t mf-m">et codent</span>
            <span className="mf-ui mf-code">
              <i className="k" style={{ width: '46%' }} />
              <i style={{ width: '70%', marginLeft: '10px' }} />
              <i className="s" style={{ width: '38%', marginLeft: '10px' }} />
              <i style={{ width: '24%' }} />
            </span>
          </div>
          <div className="mf-l">
            <span className="mf-t mf-m">des sites qui font venir</span>
            <span className="mf-ui mf-site">
              <span className="mf-bar">
                <b />
                <b />
                <b />
              </span>
              <img src="/images/img-e01c44f8.png" alt="" />
            </span>
            <span className="mf-t mf-m mf-s">des clients.</span>
          </div>
        </h2>
        <div className="mf-foot">
          <Link to="/le-studio" className="btn btn-ink">
            Découvrir le studio
          </Link>
          <Link to="/realisations" className="lnk">
            Voir nos réalisations
          </Link>
        </div>
      </div>
    </section>
  )
}

function RealisationsRecentes() {
  return (
    <section className="sec" style={{ padding: '0' }} id="d-work">
      <div className="shead in" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Réalisations
          <br />
          <span className="serif">récentes.</span>
        </h2>
        <p className="lead">
          Sites sur-mesure, boutiques et outils métiers, conçus et développés de bout en bout par le studio.
        </p>
      </div>
      <div className="proj-grid">
        <article className="p-a" data-to="/realisations/chateau-larc">
          <div className="p-media">
            <img src="/images/img-3b6de440.png" alt="" />
            <div className="win win-shot win-golf">
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
                  alt="Page d’accueil du site du Château l’Arc Golf Club"
                />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">
              <Link to="/realisations/chateau-larc">Château l’Arc Golf Club</Link>
            </h3>
            <span className="p-tag">Golf · Site + back-office · 2026</span>
          </div>
          <p className="p-desc">
            Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et
            événements.
          </p>
        </article>
        <article className="p-b" data-to="/realisations/stand-ing">
          <div className="p-media">
            <img src="/images/img-12109804.png" alt="" />
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
                  src="/images/configurateur-de-stand-3d-stand-ing.png"
                  alt="Configurateur de stand 3D Stand-ING"
                />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">
              <Link to="/realisations/stand-ing">Stand-ING</Link>
            </h3>
            <span className="p-tag">Configurateur 3D · 2026</span>
          </div>
          <p className="p-desc">
            Un configurateur de stands en ligne : le client compose, visualise et reçoit son devis.
          </p>
        </article>
        <article className="p-c">
          <div className="p-media">
            <img src="/images/img-9d5bedd1.png" alt="" />
            <div className="shop">
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
          <div className="p-meta">
            <h3 className="p-name">Les Bocaux du Vexin</h3>
            <span className="p-tag">E-commerce · Shopify · 2026</span>
          </div>
          <p className="p-desc">
            Une boutique Shopify simple à tenir au quotidien pour une conserverie locale.
          </p>
        </article>
        <article className="p-d" data-to="/realisations/chateau-larc">
          <div className="p-media">
            <img src="/images/img-17705de3.png" alt="" />
            <div className="win win-shot win-adm">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">Orion Admin — Château l’Arc Golf Club</span>
                <span className="win-sp" />
              </div>
              <div className="win-body">
                <img
                  className="shot"
                  src="/images/accueil-d-orion-admin-pour-le-chateau-l-arc-golf.jpg"
                  alt="Accueil d’Orion Admin pour le Château l’Arc Golf Club"
                />
              </div>
            </div>
          </div>
          <div className="p-meta">
            <h3 className="p-name">
              <Link to="/realisations/chateau-larc">Orion Admin</Link>
            </h3>
            <span className="p-tag">Espace client · inclus dans chaque projet</span>
          </div>
          <p className="p-desc">
            Notre outil : suivi du projet, documents, messagerie et gestion du site au même endroit.
          </p>
        </article>
      </div>
      <div className="index">
        <div className="ix-row">
          <span className="n">Osmose Nutrition</span>
          <span className="t">E-commerce · Abonnements</span>
          <span className="y">2025</span>
        </div>
        <div className="ix-row">
          <span className="n">Parker & Smith</span>
          <span className="t">Horlogerie · DA & UX</span>
          <span className="y">2025</span>
        </div>
        <div className="ix-row">
          <span className="n">Tersen — Groupe Colas</span>
          <span className="t">Plateforme SaaS</span>
          <span className="y">2025</span>
        </div>
        <div className="ix-row">
          <span className="n">Absolute Boat</span>
          <span className="t">Yachting · Site</span>
          <span className="y">2024</span>
        </div>
      </div>
      <div className="ix-foot">
        <span className="mono">8 projets · 2024–2026</span>
        <Link to="/realisations" className="btn btn-ink">
          Toutes les réalisations
        </Link>
      </div>
    </section>
  )
}

function DuCroquisAuCode() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Du croquis au code,
          <br />
          <span className="serif">sans relais.</span>
        </h2>
        <p className="lead">
          Six métiers portés par les mêmes personnes : ce qu’on dessine, on le construit, composant par
          composant.
        </p>
      </div>
      <div className="bento">
        <div className="cell e-site">
          <img className="px picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <h3>Site internet</h3>
          <p>
            <b>Sites vitrines et refontes sur-mesure</b>, rapides, accessibles et simples à mettre à jour.
          </p>
          <div className="vis">
            <div className="flow">
              <span className="fl-n">Accueil</span>
              <span className="fl-l" />
              <span className="fl-n">Services</span>
              <span className="fl-l" />
              <span className="fl-n fl-on">Contact</span>
              <div className="wire">
                <i style={{ width: '70%' }} />
                <i style={{ width: '45%' }} />
                <i className="blk" />
                <i style={{ width: '60%' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="cell e-dev">
          <img className="px picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
          <h3>Développement & applications</h3>
          <p>
            <b>Applications web, espaces clients et outils métiers</b> qui tiennent la charge.
          </p>
          <div className="vis">
            <div className="code">
              <div>
                <span className="c-k">export function</span> <span className="c-f">ProjectCard</span>
                {'({ project }) {'}
              </div>
              <div className="i1">
                <span className="c-k">return</span> {'<'}
                <span className="c-t">article</span> <span className="c-a">className</span>=
                <span className="c-s">"card"</span>
                {'>'}
              </div>
              <div className="i2">
                {'<'}
                <span className="c-t">h3</span>
                {'>{project.name}</'}
                <span className="c-t">h3</span>
                {'>'}
              </div>
              <div className="i1">
                {'</'}
                <span className="c-t">article</span>
                {'>'}
              </div>
              <div>{'}'}</div>
              <div className="c-ok">
                <i />
                Build réussi — déployé en production
              </div>
            </div>
          </div>
        </div>
        <div className="cell e-auto">
          <img className="px picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <h3>Automatisations</h3>
          <p>
            <b>Moins de copier-coller, plus de temps utile.</b> Formulaires, CRM, devis et relances reliés
            entre eux.
          </p>
          <div className="vis">
            <div className="auto">
              <div className="au-n">
                <b>Formulaire de contact</b>
                <span>Nouvelle demande</span>
              </div>
              <span className="au-l" />
              <div className="au-n">
                <b>CRM</b>
                <span>Fiche créée, devis préparé</span>
              </div>
              <span className="au-l" />
              <div className="au-n au-on">
                <b>E-mail + relance J+3</b>
                <span>Envoyé automatiquement</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cell e-seo">
          <img className="px picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
          <h3>SEO</h3>
          <p>
            <b>Remonter sur Google</b> avec un site rapide, bien structuré et des contenus utiles.
          </p>
          <div className="vis">
            <div className="serp">
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
                <span>agence web cannes</span>
              </div>
              <div className="serp-r">
                <span className="serp-u">votre-site.fr › services</span>
                <b>Votre entreprise — le titre qui donne envie de cliquer</b>{' '}
                <span className="serp-d">
                  Une description claire, la bonne requête, et des avis visibles dans les résultats.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="cell e-geo">
          <img className="px picon" src="/px/picon-84c912e7.svg" alt="" width={20} height={20} />
          <h3>GEO</h3>
          <p>
            <b>Être cité par les IA</b> : ChatGPT, Perplexity et les réponses générées de Google.
          </p>
          <div className="vis">
            <div className="ai">
              <div className="ai-q">Quelle agence pour refondre notre boutique ?</div>
              <div className="ai-a">
                <span className="ai-dot" />
                <div>
                  Pour une refonte Shopify, plusieurs studios se distinguent par…
                  <span className="ai-cite">votre-marque.fr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cell e-ads">
          <img className="px picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
          <h3>Google Ads</h3>
          <p>
            <b>Des campagnes pilotées au nombre de contacts</b>, pas aux clics.
          </p>
          <div className="vis">
            <div className="adp">
              <span className="adp-k">Sponsorisé</span>
              <span className="serp-u">votre-site.fr</span> <b>Devis en 24 h — Artisan menuisier à Cannes</b>
              <span className="serp-d">
                Fenêtres, portes et agencement sur-mesure. Intervention dans les Alpes-Maritimes.
              </span>
              <div className="adp-s">
                <span>Demander un devis</span>
                <span>Nos réalisations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PourQui() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">Pour qui ?</h2>
        <p className="lead">
          Des entreprises très différentes, un point commun : leur site compte vraiment dans leur activité.
        </p>
      </div>
      <div className="who">
        <div className="who-list">
          <div className="" data-k="pme">
            <img className="px picon" src="/px/picon-4780f153.svg" alt="" width={20} height={20} />
            TPE & PME
            <span className="mk" />
          </div>
          <div className="on" data-k="golf">
            <img className="px picon" src="/px/picon-1bac5105.svg" alt="" width={20} height={20} />
            Golfs
            <span className="mk" />
          </div>
          <div className="" data-k="indep">
            <img className="px picon" src="/px/picon-00814f13.svg" alt="" width={20} height={20} />
            Indépendants & micro-entrepreneurs
            <span className="mk" />
          </div>
          <div className="" data-k="shop">
            <img className="px picon" src="/px/picon-808b4de1.svg" alt="" width={20} height={20} />
            Marques & e-commerçants
            <span className="mk" />
          </div>
        </div>
        <div className="who-p">
          <img
            className="who-img"
            src="/images/parcours-de-golf-en-provence-en-pixel-art.png"
            alt="Parcours de golf en Provence, en pixel art"
          />
          <div className="who-pin">
            <h3>Remplir les départs, fidéliser les membres.</h3>
            <p className="lead">
              Site de golf, réservation de départs en ligne, espace membres, boutique du pro-shop et
              back-office pour les événements : tout ce qu’un club gère au quotidien, au même endroit.
            </p>
            <div className="who-cols">
              <div>
                <div className="who-k">Ce qu’on livre</div>
                <ul>
                  <li>Site et réservation de départs</li>
                  <li>Espace membres et abonnements</li>
                  <li>Back-office événements et offres</li>
                </ul>
              </div>
              <div>
                <div className="who-k">Projet de référence</div>
                <div className="who-ref">
                  Château l’Arc Golf Club
                  <small>Un site qui donne envie de venir jouer, géré par l’équipe du club.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CinqEtapesZeroZone() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Cinq étapes.
          <br />
          <span className="serif">Zéro zone grise.</span>
        </h2>
        <p className="lead">
          Vous savez toujours où en est votre projet. Un site vitrine prend en moyenne 4 à 8 semaines, selon
          sa complexité et le rythme des échanges.
        </p>
      </div>
      <div className="steps">
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
        <div className="st-row">
          <div className="st ">
            <h3>
              <i />
              Cadrer
            </h3>
            <p>
              Atelier, objectifs, arborescence et devis ferme. On sait ce qu’on construit avant de dessiner.
            </p>
          </div>
          <div className="st ">
            <h3>
              <i />
              Designer
            </h3>
            <p>Direction artistique, maquettes Figma et prototype cliquable, validés écran par écran.</p>
          </div>
          <div className="st cur">
            <h3>
              <i />
              Développer
            </h3>
            <p>Intégration, CMS ou Shopify, automatisations. Une préprod ouverte pour tester en continu.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Lancer
            </h3>
            <p>Mise en ligne, redirections, SEO technique et prise en main par votre équipe.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Faire grandir
            </h3>
            <p>Mesure, tests et évolutions au fil de l’eau, quand vous en avez besoin.</p>
          </div>
        </div>
      </div>
      <div className="steps-note">
        Ici, un projet en cours de développement. <b>Vous suivez chaque étape en direct dans Orion Admin</b>,
        avec une préprod pour tester avant la mise en ligne.
      </div>
    </section>
  )
}

function AvSec() {
  return (
    <section className="sec av-sec">
      <div className="av-card">
        <img className="av-bg" src="/images/img-5789321f.png" alt="" />
        <div className="av-veil" />
        <div className="av-l">
          <div className="av-k">
            <span>Avis clients</span>
            <span>Ils en parlent mieux que nous</span>
          </div>
          <img className="px av-q" src="/px/av-q-179751fb.svg" alt="" width={55} height={40} />
          <p className="av-txt">
            Leur expertise sur le développement sur-mesure est impressionnante. Une équipe à l’écoute,
            professionnelle, et qui livre dans les temps.
          </p>
          <div className="av-by">
            <span className="av-logo">
              <img
                src="/images/association-des-entrepreneurs-du-vexin.png"
                alt="Association des Entrepreneurs du Vexin"
              />
            </span>
            <div>
              <b>Thierry Cordier</b>
              <span>Association des Entrepreneurs du Vexin · Site vitrine</span>
            </div>
            <span className="av-g">
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
              <em>Avis Google</em>
            </span>
          </div>
        </div>
        <div className="av-r">
          <div className="av-rk">Note Google</div>
          <div className="av-score">
            <b>5,0</b>
            <span>/ 5</span>
          </div>
          <div className="av-stars">
            <svg
              className="pxstar"
              width="22.5"
              height="20"
              viewBox="0 0 22.5 20"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="0" width="2.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="2.5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="0" y="7.5" width="22.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="10" width="17.5" height="2.5" fill="#FF4D1A" />
              <rect x="5" y="12.5" width="12.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="12.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
              <rect x="15" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
            </svg>
            <svg
              className="pxstar"
              width="22.5"
              height="20"
              viewBox="0 0 22.5 20"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="0" width="2.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="2.5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="0" y="7.5" width="22.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="10" width="17.5" height="2.5" fill="#FF4D1A" />
              <rect x="5" y="12.5" width="12.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="12.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
              <rect x="15" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
            </svg>
            <svg
              className="pxstar"
              width="22.5"
              height="20"
              viewBox="0 0 22.5 20"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="0" width="2.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="2.5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="0" y="7.5" width="22.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="10" width="17.5" height="2.5" fill="#FF4D1A" />
              <rect x="5" y="12.5" width="12.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="12.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
              <rect x="15" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
            </svg>
            <svg
              className="pxstar"
              width="22.5"
              height="20"
              viewBox="0 0 22.5 20"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="0" width="2.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="2.5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="0" y="7.5" width="22.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="10" width="17.5" height="2.5" fill="#FF4D1A" />
              <rect x="5" y="12.5" width="12.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="12.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
              <rect x="15" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
            </svg>
            <svg
              className="pxstar"
              width="22.5"
              height="20"
              viewBox="0 0 22.5 20"
              fill="none"
              shapeRendering="crispEdges"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="0" width="2.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="2.5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="7.5" y="5" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="0" y="7.5" width="22.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="10" width="17.5" height="2.5" fill="#FF4D1A" />
              <rect x="5" y="12.5" width="12.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="12.5" y="15" width="7.5" height="2.5" fill="#FF4D1A" />
              <rect x="2.5" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
              <rect x="15" y="17.5" width="5" height="2.5" fill="#FF4D1A" />
            </svg>
          </div>
          <p>
            Les avis laissés par nos clients sur notre fiche Google, après la mise en ligne de leur projet.
          </p>
          <div className="av-btns">
            <a className="btn av-btn">Lire les avis Google</a>
            <a className="av-lnk">Voir le projet AEV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function LesQuestionsQuOn() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="faq">
        <div className="faq-l">
          <h2 className="h2">
            Les questions
            <br />
            <span className="serif">qu’on nous pose.</span>
          </h2>
          <p className="lead">
            Budget, délais, technologie, suivi : les réponses aux questions qui reviennent avant chaque
            projet.
          </p>
          <a className="lnk">Une autre question ? Écrivez-nous</a>
        </div>
        <div className="acc">
          <div className="q">
            <div className="q-h">
              <span>Combien coûte un projet ?</span>
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
              Chaque projet est chiffré sur devis après un premier échange. Dans le formulaire de contact,
              vous indiquez une fourchette de budget : on vous oriente vers la bonne approche dès le premier
              appel.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien de temps faut-il pour un site ?</span>
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
          </div>
          <div className="q">
            <div className="q-h">
              <span>Webflow, Shopify ou code sur-mesure ?</span>
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
          </div>
          <div className="q">
            <div className="q-h">
              <span>Est-ce que je pourrai modifier mon site seul ?</span>
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
          </div>
          <div className="q">
            <div className="q-h">
              <span>Travaillez-vous en anglais et avec des clients à l’étranger ?</span>
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
          </div>
          <div className="q">
            <div className="q-h">
              <span>Que se passe-t-il après la mise en ligne ?</span>
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
          </div>
        </div>
      </div>
    </section>
  )
}

function Ressources() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '96px' }}>
        <h2 className="h2">Ressources</h2>
        <Link to="/ressources" className="lnk">
          Tous les articles
        </Link>
      </div>
      <div className="res">
        <a className="art" data-cur="Lire">
          <span className="art-im">
            <img src="/images/img-27de7549.png" alt="" />
          </span>
          <div className="k">
            <span>Guide</span>
            <span>8 min de lecture</span>
          </div>
          <h3>Shopify, Webflow ou sur-mesure : comment choisir en 2026</h3>
          <span className="more">Lire l’article</span>
        </a>
        <Link to="/ressources/etre-cite-par-chatgpt-perplexity" className="art" data-cur="Lire">
          <span className="art-im">
            <img src="/images/img-5f76407d.png" alt="" />
          </span>
          <div className="k">
            <span>SEO & GEO</span>
            <span>11 min de lecture</span>
          </div>
          <h3>Être cité par ChatGPT et Perplexity : ce qui marche vraiment</h3>
          <span className="more">Lire l’article</span>
        </Link>
        <a className="art" data-cur="Lire">
          <span className="art-im">
            <img src="/images/img-70a0d7bb.png" alt="" />
          </span>
          <div className="k">
            <span>Méthode</span>
            <span>6 min de lecture</span>
          </div>
          <h3>Refonte de site : le cahier des charges en douze questions</h3>
          <span className="more">Lire l’article</span>
        </a>
      </div>
    </section>
  )
}

function Dark() {
  return (
    <Footer>
      <div className="cta">
        <h2>
          Un projet en tête ?<span className="serif">Construisons-le.</span>
        </h2>
        <div className="cta-r">
          <div className="cta-btns">
            <a className="btn btn-line">Analyser mon site</a>
            <a className="btn btn-acc">
              Démarrer un projet <span className="kbd">P</span>
            </a>
          </div>
          <span className="mail">
            ou écrivez à <b>hello@orion-studio.io</b>
          </span>
        </div>
      </div>
    </Footer>
  )
}

export function Desktop() {
  return (
    <section className="artboard">
      <Nav />
      <MmVeilLive />
      <Hero />
      <HeroMedia />
      <Clients />
      <OrionStudioCEst />
      <RealisationsRecentes />
      <DuCroquisAuCode />
      <PourQui />
      <CinqEtapesZeroZone />
      <AvSec />
      <LesQuestionsQuOn />
      <Ressources />
      <Dark />
    </section>
  )
}
