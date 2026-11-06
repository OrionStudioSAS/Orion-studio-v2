import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { ClientsBlock } from './ClientsBlock'
import { WorkPanels } from './WorkPanels'
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
          web. Une équipe à taille humaine basée à Paris, du premier croquis à la mise en ligne, sans
          intermédiaire.
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
          src="/images/e6d0322ad0257f.png"
          alt="Une baie la nuit sous la constellation d’Orion, en pixel art"
        />
        <i className="betel" style={{ left: '698px', top: '106px' }} />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="pxsvg omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde votre site ensemble ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.maison-arlette.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site</span>
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
          <span className="sg" data-pj>
            <img className="pxsvg picon" src="/px/picon-2c356b90.svg" alt="" width={10} height={10} />
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
        <div className="mfp">
          <figure
            className="mfp-c mfp-j"
            data-pv="studio"
            role="link"
            tabIndex={0}
            aria-label="Julien, cofondateur d’Orion Studio"
          >
            <span className="mfp-tape" aria-hidden="true" />
            <span className="mfp-ph">
              <img
                className="px"
                src="/images/team-julien-px.png"
                alt="Julien, cofondateur d’Orion Studio, en pixel"
              />
              <img className="o" src="/images/team-julien.jpg" alt="" loading="lazy" />
            </span>
            <figcaption>
              <b>Julien</b>
              <span>Cofondateur</span>
            </figcaption>
          </figure>
          <figure
            className="mfp-c mfp-t"
            data-pv="studio"
            role="link"
            tabIndex={0}
            aria-label="Théo, cofondateur d’Orion Studio"
          >
            <span className="mfp-tape" aria-hidden="true" />
            <span className="mfp-ph">
              <img
                className="px"
                src="/images/team-theo-px.png"
                alt="Théo, cofondateur d’Orion Studio, en pixel"
              />
              <img className="o" src="/images/team-theo.jpg" alt="" loading="lazy" />
            </span>
            <figcaption>
              <b>Théo</b>
              <span>Cofondateur</span>
            </figcaption>
          </figure>
          <figure
            className="mfp-c mfp-d"
            data-pv="studio"
            role="link"
            tabIndex={0}
            aria-label="Doggy, le chien du studio"
          >
            <span className="mfp-tape" aria-hidden="true" />
            <span className="mfp-ph">
              <img className="px" src="/images/team-doggy-px.png" alt="Doggy, le chien du studio, en pixel" />
              <img className="o" src="/images/team-doggy.jpg" alt="" loading="lazy" />
            </span>
            <figcaption>
              <b>Doggy</b>
              <span>Chien du studio</span>
            </figcaption>
          </figure>
        </div>
        <h2 className="mf-h">
          <div className="mf-l">
            <span className="mf-t ">Orion Studio, c’est</span>
            <img
              className="mf-pic"
              src="/images/a4d016edd40d8d.png"
              alt="Julien et Théo, fondateurs d’Orion Studio"
            />
          </div>
          <div className="mf-l">
            <span className="mf-t ">une équipe à taille humaine,</span>
          </div>
          <div className="mf-l">
            <span className="mf-t ">basée à Paris</span>
            <img className="mf-pic" src="/images/417a770a7fa506.png" alt="Une baie la nuit, en pixel art" />
          </div>
          <div className="mf-l">
            <span className="mf-t mf-m">qui dessine</span>
            <span className="mf-ui mf-figma" title="Figma">
              <img className="pxsvg" src="/px/art-13e55d0a.svg" alt="" width={40} height={60} />
            </span>
            <span className="mf-t mf-m">et code</span>
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
              <img src="/images/7de98511bd76f4.png" alt="" />
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
      <WorkPanels />
      <div className="ix-foot">
        <span className="mono">11 projets</span>
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
          <img className="pxsvg picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
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
          <img className="pxsvg picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
          <h3>Développement d’applications</h3>
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
          <img className="pxsvg picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
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
          <img className="pxsvg picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
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
          <img className="pxsvg picon" src="/px/picon-84c912e7.svg" alt="" width={20} height={20} />
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
          <img className="pxsvg picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
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
          <div className="on" data-k="pme">
            <img className="pxsvg picon" src="/px/picon-4780f153.svg" alt="" width={20} height={20} />
            TPE & PME
            <span className="mk" />
          </div>
          <div className="" data-k="indep">
            <img className="pxsvg picon" src="/px/picon-00814f13.svg" alt="" width={20} height={20} />
            Indépendants & micro-entrepreneurs
            <span className="mk" />
          </div>
          <div className="" data-k="shop">
            <img className="pxsvg picon" src="/px/picon-808b4de1.svg" alt="" width={20} height={20} />
            Marques & e-commerçants
            <span className="mk" />
          </div>
          <div className="" data-k="startup">
            <img className="pxsvg picon" src="/px/picon-f0c33abd.svg" alt="" width={20} height={20} />
            Start-up
            <span className="mk" />
          </div>
          <div className="" data-k="secteurs">
            <img className="pxsvg picon" src="/px/picon-480b3e48.svg" alt="" width={20} height={20} />
            Par secteur : golfs, boulangeries…
            <span className="mk" />
          </div>
        </div>
        <div className="who-p">
          <img
            className="who-img"
            src="/images/231a9906889e87.png"
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
        <img className="av-bg" src="/images/b1ad4d0b43d462.png" alt="" />
        <div className="av-veil" />
        <div className="av-l">
          <div className="av-k">
            <span>Avis clients</span>
            <span>Ils en parlent mieux que nous</span>
          </div>
          <img className="pxsvg av-q" src="/px/av-q-179751fb.svg" alt="" width={55} height={40} />
          <p className="av-txt">
            Leur expertise sur le développement sur-mesure est impressionnante. Une équipe à l’écoute,
            professionnelle, et qui livre dans les temps.
          </p>
          <div className="av-by">
            <span className="av-logo">
              <img src="/images/4261b99ecbbc3b.png" alt="Association des Entrepreneurs du Vexin" />
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
      <div className="avs">
        <div className="avs-h">
          <div>
            <span className="avs-k">En vidéo</span>
            <h3 className="avs-t">
              Nos clients racontent leur projet,<span className="serif">en story.</span>
            </h3>
          </div>
          <p className="avs-p">
            Des témoignages filmés, au format vertical : touchez une story pour la lancer, passez à la
            suivante comme sur Instagram.
          </p>
        </div>
        <div className="avs-row">
          <button
            type="button"
            className="avs-c"
            data-src=""
            data-name="Stand-ING"
            data-logo="/images/f929bc41088d4e.png"
            aria-label="Témoignage vidéo de Stand-ING"
          >
            <img className="avs-poster" src="/images/2c63fe08cd774a.png" alt="" />
            <span className="avs-veil" />
            <span className="avs-bars">
              <i />
            </span>
            <span className="avs-top">
              <span className="avs-av">
                <img src="/images/f929bc41088d4e.png" alt="" />
              </span>
              <span className="avs-who">
                <b>Stand-ING</b>
                <em>Configurateur 3D</em>
              </span>
            </span>
            <span className="avs-play">
              <svg viewBox="0 0 7 8" width="14" height="16" shapeRendering="crispEdges" aria-hidden="true">
                <path d="M0 0h2v1h2v1h2v1h1v2H6v1H4v1H2v1H0z" fill="currentColor" />
              </svg>
            </span>
            <span className="avs-bot">
              <span className="avs-soon">Vidéo à venir</span>
            </span>
          </button>
          <button
            type="button"
            className="avs-c"
            data-src=""
            data-name="Château l’Arc Golf Club"
            data-logo="/images/a58f0039fd543e.png"
            aria-label="Témoignage vidéo de Château l’Arc Golf Club"
          >
            <img className="avs-poster" src="/images/55a80d70f3d20a.png" alt="" />
            <span className="avs-veil" />
            <span className="avs-bars">
              <i />
            </span>
            <span className="avs-top">
              <span className="avs-av">
                <img src="/images/a58f0039fd543e.png" alt="" />
              </span>
              <span className="avs-who">
                <b>Château l’Arc Golf Club</b>
                <em>Site + back-office</em>
              </span>
            </span>
            <span className="avs-play">
              <svg viewBox="0 0 7 8" width="14" height="16" shapeRendering="crispEdges" aria-hidden="true">
                <path d="M0 0h2v1h2v1h2v1h1v2H6v1H4v1H2v1H0z" fill="currentColor" />
              </svg>
            </span>
            <span className="avs-bot">
              <span className="avs-soon">Vidéo à venir</span>
            </span>
          </button>
          <button
            type="button"
            className="avs-c"
            data-src=""
            data-name="Le Moulin de Balme"
            data-logo="/images/407078ca1be0b8.png"
            aria-label="Témoignage vidéo de Le Moulin de Balme"
          >
            <img className="avs-poster" src="/images/4a723a9387332c.png" alt="" />
            <span className="avs-veil" />
            <span className="avs-bars">
              <i />
            </span>
            <span className="avs-top">
              <span className="avs-av">
                <img src="/images/407078ca1be0b8.png" alt="" />
              </span>
              <span className="avs-who">
                <b>Le Moulin de Balme</b>
                <em>Site + click & collect</em>
              </span>
            </span>
            <span className="avs-play">
              <svg viewBox="0 0 7 8" width="14" height="16" shapeRendering="crispEdges" aria-hidden="true">
                <path d="M0 0h2v1h2v1h2v1h1v2H6v1H4v1H2v1H0z" fill="currentColor" />
              </svg>
            </span>
            <span className="avs-bot">
              <span className="avs-soon">Vidéo à venir</span>
            </span>
          </button>
          <button
            type="button"
            className="avs-c"
            data-src=""
            data-name="Swing Call"
            data-logo="/images/c89d8692d26a0a.png"
            aria-label="Témoignage vidéo de Swing Call"
          >
            <img className="avs-poster" src="/images/6cb0d8d4f25c2a.png" alt="" />
            <span className="avs-veil" />
            <span className="avs-bars">
              <i />
            </span>
            <span className="avs-top">
              <span className="avs-av">
                <img src="/images/c89d8692d26a0a.png" alt="" />
              </span>
              <span className="avs-who">
                <b>Swing Call</b>
                <em>Site produit</em>
              </span>
            </span>
            <span className="avs-play">
              <svg viewBox="0 0 7 8" width="14" height="16" shapeRendering="crispEdges" aria-hidden="true">
                <path d="M0 0h2v1h2v1h2v1h1v2H6v1H4v1H2v1H0z" fill="currentColor" />
              </svg>
            </span>
            <span className="avs-bot">
              <span className="avs-soon">Vidéo à venir</span>
            </span>
          </button>
          <button
            type="button"
            className="avs-c"
            data-src=""
            data-name="Association des Entrepreneurs du Vexin"
            data-logo="/images/4261b99ecbbc3b.png"
            aria-label="Témoignage vidéo de Association des Entrepreneurs du Vexin"
          >
            <img className="avs-poster" src="/images/17682ce2f50cef.png" alt="" />
            <span className="avs-veil" />
            <span className="avs-bars">
              <i />
            </span>
            <span className="avs-top">
              <span className="avs-av">
                <img src="/images/4261b99ecbbc3b.png" alt="" />
              </span>
              <span className="avs-who">
                <b>AEV</b>
                <em>Site + espace membres</em>
              </span>
            </span>
            <span className="avs-play">
              <svg viewBox="0 0 7 8" width="14" height="16" shapeRendering="crispEdges" aria-hidden="true">
                <path d="M0 0h2v1h2v1h2v1h1v2H6v1H4v1H2v1H0z" fill="currentColor" />
              </svg>
            </span>
            <span className="avs-bot">
              <span className="avs-soon">Vidéo à venir</span>
            </span>
          </button>
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
            <img src="/images/1547cebce5d492.png" alt="" />
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
            <img src="/images/b665a1ab308a17.png" alt="" />
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
            <img src="/images/204444271e8f06.png" alt="" />
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
      <ClientsBlock />
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
