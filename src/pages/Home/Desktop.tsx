import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { ClientsBlock } from './ClientsBlock'
import { ServicesIndex } from './ServicesIndex'
import { AdminBlock } from '../../components/shared/AdminBlock'
import { OrioSteps } from '../../components/shared/OrioSteps'
import { ReviewsBlock } from '../../components/shared/ReviewsBlock'
import { WorkTrack } from '../../components/shared/WorkTrack'
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
      <OrioSteps />
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
      <WorkTrack />
      <ServicesIndex />
      <PourQui />
      <CinqEtapesZeroZone />
      <AdminBlock />
      <ReviewsBlock />
      <LesQuestionsQuOn />
      <Ressources />
      <Dark />
    </section>
  )
}
