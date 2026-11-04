import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { CommentOnTravaille3 } from '../../components/shared/CommentOnTravaille3'
import { IlsNousOntFait } from '../../components/shared/IlsNousOntFait'
import { GCta } from '../../components/shared/GCta'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/">Expertises</Link>
        {' / '}
        <Link to="/expertises/site-internet" className="xp-cr" data-exp="site-internet">
          Site internet
        </Link>{' '}
        / <b>Site vitrine</b>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Site vitrine</span>
        <span className="serif">qui présente bien et fait venir des demandes.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Artisans, cabinets, commerces, indépendants : vos services, vos réalisations et vos avis présentés
          clairement, un formulaire qui pose les bonnes questions, et un site que vous mettez à jour
          vous-même.
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
    <div className="hero-media sx-media xp-media">
      <div className="hm-layer">
        <img src="/images/0c766d5f03172d.png" alt="" />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="px omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde votre site vitrine ensemble ?</span>
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
                Mobile
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
                Contact
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
            <b>Refaire mon site vitrine</b>
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
            <img className="px picon" src="/px/picon-909d41ec.svg" alt="" width={10} height={10} />
            <b>Recevoir des demandes de devis</b>
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
      <div className="capt">L’atelier ouvre ses portes, 8 h</div>
    </div>
  )
}

function CeQuUnBon() {
  return (
    <section className="sec" style={{ padding: '0', borderTop: 'none' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’un bon site vitrine
          <br />
          <span className="serif">change pour vous.</span>
        </h2>
      </div>
      <div className="ocs">
        <div className="oc">
          <h3>Une image à la hauteur</h3>
          <p>Une direction artistique propre à votre marque, pas un thème acheté en ligne et vu cent fois.</p>
        </div>
        <div className="oc">
          <h3>Des visiteurs qui deviennent des contacts</h3>
          <p>Des parcours clairs, des formulaires courts et des appels à l’action là où on les attend.</p>
        </div>
        <div className="oc">
          <h3>Un site que vous gérez seul</h3>
          <p>
            Un back-office simple pour modifier vos textes, vos pages et vos actualités sans nous appeler.
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
              <div className="win u-win">
                <div className="win-bar">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="win-title">votre-entreprise.fr</span>
                  <span className="win-sp" />
                </div>
                <div className="win-body">
                  <div className="wire" style={{ border: 'none', padding: '0' }}>
                    <i style={{ width: '70%' }} />
                    <i style={{ width: '45%' }} />
                    <i className="blk" />
                    <i style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Pages de présentation</h3>
            <p>Accueil, services, à propos : qui vous êtes et ce que vous proposez, en un coup d’œil.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="uth">
                <img src="/images/1547cebce5d492.png" alt="" />
                <img src="/images/204444271e8f06.png" alt="" />
                <img src="/images/b665a1ab308a17.png" alt="" />
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Réalisations</h3>
            <p>Vos projets mis en valeur, page par page.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="uf">
                <div className="ul-h">Demande de devis</div>
                <div className="uf-g">
                  <label className="fld fld-f">
                    <span>Type de demande</span>
                    <b>Rénovation</b>
                  </label>
                  <label className="fld">
                    <span>Ville</span>
                    <b>Nantes</b>
                  </label>
                  <label className="fld">
                    <span>Délai souhaité</span>
                    <b>Printemps</b>
                  </label>
                  <label className="fld">
                    <span>Budget</span>
                    <b>À préciser</b>
                  </label>
                </div>
                <div className="shop-cta">Envoyer ma demande</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Formulaire de devis</h3>
            <p>Les bonnes questions posées dès la première demande.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ui-sl">
                <div className="ul-h">Version mobile · Page contact</div>
                <div className="rs-s sl-g">
                  <span className="">Appeler</span>
                  <span className="">Itinéraire</span>
                  <span className="on">Devis</span>
                  <span className="">Horaires</span>
                </div>
                <div className="shop-cta">Demander un devis</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Mobile d’abord</h3>
            <p>Vos clients vous découvrent souvent sur leur téléphone : on dessine d’abord pour lui.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Contenus du site</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Pages</span>
                  <b>12</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Actualités</span>
                  <b>24</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Équipe</span>
                  <b>6</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-wa" />
                  <span>Témoignages</span>
                  <b>Brouillon</b>
                </div>
                <div className="shop-cta ul-btn">Modifier une page</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Back-office simple</h3>
            <p>Webflow, WordPress ou CMS sur mesure, selon ce que votre équipe sait déjà utiliser.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
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
                  <span>menuisier nantes</span>
                </div>
                <div className="serp-r">
                  <span className="serp-u">votre-site.fr</span>
                  <b>Menuiserie sur mesure à Nantes — Votre entreprise</b>
                  <span className="serp-d">Fenêtres, portes et agencement. Devis gratuit sous 48 h.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>SEO de base inclus</h3>
            <p>Balises, structure, redirections et données structurées dès la mise en ligne.</p>
          </div>
        </article>
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
        <Link to="/expertises/site-dynamique" className="rl" data-exp="site-dynamique">
          <img className="px picon" src="/px/picon-c328b51d.svg" alt="" width={20} height={20} />
          <div>
            <b>Site dynamique</b>
            <span>Vendre, réserver et gérer en ligne.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/site-concept" className="rl" data-exp="site-concept">
          <img className="px picon" src="/px/picon-ba26fc59.svg" alt="" width={20} height={20} />
          <div>
            <b>Site concept</b>
            <span>Une expérience pour marquer les esprits.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/seo" className="rl" data-exp="seo">
          <img className="px picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
          <div>
            <b>SEO</b>
            <span>Remonter sur Google.</span>
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
              <span>Combien coûte un site vitrine ?</span>
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
              prix dépend du nombre de pages et des fonctionnalités (formulaire de devis, prise de
              rendez-vous, multilingue).
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
                <path d="M0 6H12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
            <p>
              Un site vitrine prend en moyenne 4 à 8 semaines, selon sa complexité et le rythme des échanges.
              Une boutique ou une application demande davantage : le planning est fixé dans le devis.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Pourrai-je modifier mon site seul ?</span>
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
              Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Textes, images,
              pages et actualités se modifient sans connaissances techniques.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Webflow, Shopify, WordPress ou code sur mesure ?</span>
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
              On choisit selon votre projet et votre équipe : Webflow pour un site vitrine que vous gérez
              facilement, Shopify pour l’e-commerce, du code sur mesure (Next.js, React) pour les applications
              et les besoins spécifiques.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Reprenez-vous un site existant ?</span>
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
              Oui, après un audit. On vous dit franchement s’il vaut mieux le faire évoluer ou repartir de
              zéro, et pourquoi.
            </p>
          </div>
        </div>
      </div>
    </section>
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
      <CommentOnTravaille3 />
      <IlsNousOntFait />
      <ExpertisesAssociees />
      <QuestionsFrequentes />
      <GCta />
    </section>
  )
}
