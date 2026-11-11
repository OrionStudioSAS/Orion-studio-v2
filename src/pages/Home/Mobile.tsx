import { Link } from 'react-router-dom'
import { MobileFooter } from '../../components/shared/MobileFooter'
import { ClientsBlock } from './ClientsBlock'
import { ServicesIndex } from './ServicesIndex'
import { AdminBlock } from '../../components/shared/AdminBlock'
import { OrioSteps } from '../../components/shared/OrioSteps'
import { ReviewsBlock } from '../../components/shared/ReviewsBlock'
import { WorkTrack } from '../../components/shared/WorkTrack'

function MoNav() {
  return (
    <header className="mo-nav">
      <Link to="/" className="logo">
        <img className="pxsvg logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
        <img className="pxsvg logo-w" src="/px/logo-w-ad3e722d.svg" alt="" width={151} height={21} />
      </Link>
      <div className="mo-nav-r">
        <button
          className="mo-burger"
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded="false"
          aria-controls="m-menu"
        >
          <i />
          <i />
        </button>
      </div>
      <i className="nav-prog" />
    </header>
  )
}

function MoHero() {
  return (
    <section className="mo-hero">
      <h1 className="mo-h1" aria-label="Agence de développement web pour les marques qui voient loin.">
        Agence de
        <br />
        développement web
        <span className="serif">
          pour les <span className="rot">marques qui voient loin.</span>
        </span>
      </h1>
      <p className="mo-lead">
        Orion Studio conçoit et développe des sites sur-mesure, des boutiques Shopify et des applications web.
        Une équipe à taille humaine basée à Paris, du premier croquis à la mise en ligne, sans intermédiaire.
      </p>
      <div className="mo-btns">
        <a className="btn btn-ink mo-btn" data-go="cta">
          Démarrer un projet
        </a>
        <a className="btn btn-ghost mo-btn" data-go="work">
          Voir les réalisations
        </a>
      </div>
      <div className="proof mo-proof">
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
    </section>
  )
}

function MoMedia() {
  return (
    <div className="mo-media">
      <div className="hm-layer">
        <img
          className="mo-media-bg"
          src="/images/4bcb961555f4a1.png"
          alt="Une baie la nuit sous la constellation d’Orion, en pixel art"
        />
        <i className="betel" style={{ left: '193px', top: '136px' }} />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="pxsvg omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde votre site
            <br />
            ensemble ?
          </span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              https://www.maison-arlette.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site</span>
          </div>
          <div className="mo-crit">
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Design
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              SEO
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Vitesse
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Conversion
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
            </span>{' '}
            <span className="send mo-send">Analyser mon site</span>
          </div>
        </div>
        <div className="mo-sug">
          <span className="sg" data-pj>
            <img className="pxsvg picon" src="/px/picon-2c356b90.svg" alt="" width={10} height={10} />
            <b>Je n’ai pas encore de site</b>
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
            Gratuit et sans engagement. Analyse et maquette envoyées par e-mail sous quelques jours.
          </span>
        </div>
      </div>
      <div className="mo-capt">
        22 h 40 — <b>Bételgeuse</b>, l’étoile rouge d’Orion
      </div>
    </div>
  )
}

function OrionStudioCEst() {
  return (
    <section className="mo-sec mo-mf">
      <div className="mo-k">
        <span>Le studio</span>
        <span>Paris · France et international · FR / EN</span>
      </div>
      <h2 className="mo-mh">
        <div className="mo-ml">
          <span className="mf-t mo-mt ">Orion Studio, c’est</span>
        </div>
        <div className="mo-ml">
          <img
            className="mo-pic"
            src="/images/a4d016edd40d8d.png"
            alt="Julien et Théo, fondateurs d’Orion Studio"
          />
          <span className="mf-t mo-mt ">une équipe</span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt ">à taille humaine,</span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt ">basée à Paris</span>
          <img className="mo-pic" src="/images/417a770a7fa506.png" alt="Une baie la nuit, en pixel art" />
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt mf-m">qui dessine</span>
          <span className="mf-ui mf-figma mo-ui mo-fig" title="Figma">
            <img className="pxsvg" src="/px/art-d5501567.svg" alt="" width={27.2} height={40.8} />
          </span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt mf-m">et code</span>
          <span className="mf-ui mf-code mo-ui">
            <i className="k" style={{ width: '46%' }} />
            <i style={{ width: '70%', marginLeft: '6px' }} />
            <i className="s" style={{ width: '38%', marginLeft: '6px' }} />
            <i style={{ width: '24%' }} />
          </span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt mf-m">des sites qui font</span>
        </div>
        <div className="mo-ml">
          <span className="mf-t mo-mt mf-m">venir</span>
          <span className="mf-ui mf-site mo-ui mo-site">
            <span className="mf-bar">
              <b />
              <b />
              <b />
            </span>
            <img src="/images/7de98511bd76f4.png" alt="" />
          </span>
          <span className="mf-t mo-mt mf-m mf-s mo-ms">des clients.</span>
        </div>
      </h2>
      <div className="mfp mfp-mo">
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
      <div className="mo-btns">
        <Link to="/le-studio" className="btn btn-ink mo-btn">
          Découvrir le studio
        </Link>
      </div>
      <div className="mo-lnk-c">
        <Link to="/realisations" className="lnk">
          Voir nos réalisations
        </Link>
      </div>
    </section>
  )
}

function PourQui() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">Pour qui ?</h2>
        <p className="mo-lead">
          Des entreprises très différentes, un point commun : leur site compte vraiment dans leur activité.
        </p>
      </div>
      <div className="mo-accs">
        <div className="mo-acc mo-acc-on" data-k="pme">
          <div className="mo-acc-h">
            <img className="pxsvg picon" src="/px/picon-4780f153.svg" alt="" width={20} height={20} />
            <b>TPE & PME</b>
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
          <div className="mo-who">
            <img className="mo-who-img" src="/images/239e996b114e64.jpg" alt="" />
            <div className="mo-who-b">
              <h3>Un site qui fait venir des demandes, sans y passer vos soirées.</h3>
              <p>
                Artisans, cabinets, commerces, entreprises de services : un site professionnel, rapide et bien
                référencé, que vous mettez à jour vous-même, sans y passer vos soirées.
              </p>
              <Link to="/pour-qui/tpe-pme" className="lnk who-go" data-who-go="tpe-pme">
                Voir la page
              </Link>
            </div>
          </div>
        </div>
        <div className="mo-acc" data-k="indep">
          <div className="mo-acc-h">
            <img className="pxsvg picon" src="/px/picon-91b8b92b.svg" alt="" width={20} height={20} />
            <b>Indépendants & micro-entrepreneurs</b>
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
        <div className="mo-acc" data-k="shop">
          <div className="mo-acc-h">
            <img className="pxsvg picon" src="/px/picon-8036a9f1.svg" alt="" width={20} height={20} />
            <b>Marques & e-commerçants</b>
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
        <div className="mo-acc" data-k="startup">
          <div className="mo-acc-h">
            <img className="pxsvg picon" src="/px/picon-44243463.svg" alt="" width={20} height={20} />
            <b>Start-up</b>
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
        <div className="mo-acc" data-k="secteurs">
          <div className="mo-acc-h">
            <img className="pxsvg picon" src="/px/picon-44172bb4.svg" alt="" width={20} height={20} />
            <b>Par secteur : golfs, boulangeries…</b>
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
    </section>
  )
}

function CinqEtapesZeroZone() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Cinq étapes.<span className="serif">Zéro zone grise.</span>
        </h2>
        <p className="mo-lead">
          Vous savez toujours où en est votre projet. Un site vitrine prend en moyenne 4 à 8 semaines, selon
          sa complexité et le rythme des échanges.
        </p>
      </div>
      <OrioSteps mobile />
    </section>
  )
}

function LesQuestionsQuOn() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Les questions<span className="serif">qu’on nous pose.</span>
        </h2>
        <p className="mo-lead">
          Budget, délais, technologie, suivi : les réponses aux questions qui reviennent avant chaque projet.
        </p>
      </div>
      <div className="mo-faq">
        <div className="mo-q">
          <div className="mo-q-h">
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
            Chaque projet est chiffré sur devis après un premier échange. Dans le formulaire de contact, vous
            indiquez une fourchette de budget : on vous oriente vers la bonne approche dès le premier appel.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
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
        <div className="mo-q">
          <div className="mo-q-h">
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
        <div className="mo-q">
          <div className="mo-q-h">
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
        <div className="mo-q">
          <div className="mo-q-h">
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
        <div className="mo-q">
          <div className="mo-q-h">
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
      <div className="mo-lnk-c">
        <a className="lnk">Une autre question ? Écrivez-nous</a>
      </div>
    </section>
  )
}

function Ressources() {
  return (
    <section className="mo-sec mo-res">
      <div className="mo-shead mo-shead-row">
        <h2 className="mo-h2">Ressources</h2>
        <Link to="/ressources" className="lnk">
          Tous les articles
        </Link>
      </div>
      <div className="mo-rail">
        <div className="mo-track">
          <a className="mo-art">
            <img src="/images/1547cebce5d492.png" alt="" />
            <div className="k">
              <span>Guide</span>
              <span>8 min de lecture</span>
            </div>
            <h3>Shopify, Webflow ou sur-mesure : comment choisir en 2026</h3>
            <span className="more">Lire l’article</span>
          </a>
          <Link to="/ressources/etre-cite-par-chatgpt-perplexity" className="mo-art">
            <img src="/images/b665a1ab308a17.png" alt="" />
            <div className="k">
              <span>SEO & GEO</span>
              <span>11 min de lecture</span>
            </div>
            <h3>Être cité par ChatGPT et Perplexity : ce qui marche vraiment</h3>
            <span className="more">Lire l’article</span>
          </Link>
          <a className="mo-art">
            <img src="/images/204444271e8f06.png" alt="" />
            <div className="k">
              <span>Méthode</span>
              <span>6 min de lecture</span>
            </div>
            <h3>Refonte de site : le cahier des charges en douze questions</h3>
            <span className="more">Lire l’article</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function Mobile() {
  return (
    <section className="artboard mo">
      <MoNav />
      <MoHero />
      <MoMedia />
      <ClientsBlock mobile />
      <OrionStudioCEst />
      <WorkTrack mobile />
      <ServicesIndex mobile />
      <PourQui />
      <CinqEtapesZeroZone />
      <AdminBlock mobile />
      <ReviewsBlock mobile />
      <LesQuestionsQuOn />
      <Ressources />
      <MobileFooter />
    </section>
  )
}
