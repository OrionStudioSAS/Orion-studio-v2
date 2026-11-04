import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { IlsNousOntFait } from '../../components/shared/IlsNousOntFait'
import { Footer } from '../../components/shared/Footer'

function Hero() {
  return (
    <section className="hero">
      <div className="crumb">
        <Link to="/">Expertises</Link>
        {' / '}
        <Link to="/expertises/site-internet" className="xp-cr" data-exp="site-internet">
          Site internet
        </Link>{' '}
        / <b>Site concept</b>
      </div>
      <h1 className="s-h1">
        <span className="s-a">Site concept</span>
        <span className="serif">pour une marque qu’on n’oublie pas.</span>
      </h1>
      <div className="hero-row">
        <p className="lead">
          Lancement, nouvelle marque, campagne : un site pensé comme une expérience, avec une direction
          artistique forte, des animations et un récit qui se déroule au scroll. Une seule page suffit
          parfois.
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
        <img src="/images/125257b1101030.png" alt="" />
      </div>
      <div className="chat ch2">
        <div className="greet ch2-greet">
          <img className="px omark" src="/px/omark-eff2793b.svg" alt="" width={31} height={30} />
          <span>On regarde votre site ensemble ?</span>
        </div>
        <div className="composer ch2-comp">
          <div className="ch2-in">
            <span className="ch2-url">
              https://www.votre-marque.fr
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
                Animations
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
            </div>
            <span className="send ch2-send">
              Analyser mon site <span className="kbd">↵</span>
            </span>
          </div>
        </div>
        <div className="ch2-sug">
          <span className="sg">
            <img className="px picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Lancer une nouvelle marque</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-34cc7426.svg" alt="" width={10} height={10} />
            <b>Créer une page de campagne</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Refaire mon site</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-92b066cf.svg" alt="" width={10} height={10} />
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
      <div className="capt">L’observatoire, 22 h</div>
    </div>
  )
}

function CeQuUnSite() {
  return (
    <section className="sec" style={{ padding: '0', borderTop: 'none' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px' }}>
        <h2 className="h2">
          Ce qu’un site concept
          <br />
          <span className="serif">apporte à votre marque.</span>
        </h2>
      </div>
      <div className="ocs">
        <div className="oc">
          <h3>Une première impression forte</h3>
          <p>Une direction artistique propre à votre marque, qui la distingue dès le premier écran.</p>
        </div>
        <div className="oc">
          <h3>Un récit qui se lit jusqu’au bout</h3>
          <p>
            Le scroll raconte votre histoire étape par étape : chaque section donne envie de voir la suivante.
          </p>
        </div>
        <div className="oc">
          <h3>Une expérience qui reste rapide</h3>
          <p>Des animations légères, pensées pour le téléphone et pour Google.</p>
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
              <div className="spec u-bare">
                <span className="spec-aa">Aa</span>
                <span className="spec-it">Aa</span>
                <div className="sw">
                  <i style={{ background: '#0E0E0C' }} />
                  <i style={{ background: '#77776F' }} />
                  <i style={{ background: '#E3E3DE' }} />
                  <i style={{ background: '#FF4D1A' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Direction artistique</h3>
            <p>Typographies, couleurs, illustrations : une identité qui se reconnaît en un écran.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="flow u-bare">
                <span className="fl-n">Ouverture</span>
                <span className="fl-l" />
                <span className="fl-n">Récit</span>
                <span className="fl-l" />
                <span className="fl-n fl-on">Appel</span>
                <div className="wire">
                  <i style={{ width: '70%' }} />
                  <i style={{ width: '45%' }} />
                  <i className="blk" />
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Storyboard & prototype</h3>
            <p>Chaque scène dessinée puis animée dans un prototype, validé avant le développement.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Scènes de la page</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Ouverture · titre animé</span>
                  <b>Validée</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Récit · quatre étapes</span>
                  <b>Validée</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-wa" />
                  <span>Galerie · transition</span>
                  <b>En cours</b>
                </div>
                <div className="ul-r">
                  <i className="sq" />
                  <span>Appel à l’action</span>
                  <b>À faire</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Animations au scroll</h3>
            <p>Titres, images et transitions qui suivent la lecture, sans gêner la navigation.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="xp-orio">
                <img className="px" src="/px/art-3a97b3a2.svg" alt="" width={220} height={230} />
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Illustrations & personnages</h3>
            <p>Illustrations, pixel art ou mascotte : des images faites pour votre marque.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="uf">
                <div className="ul-h">Être prévenu du lancement</div>
                <div className="uf-g">
                  <label className="fld fld-f">
                    <span>Prénom</span>
                    <b>Claire</b>
                  </label>
                  <label className="fld">
                    <span>E-mail</span>
                    <b>claire@exemple.fr</b>
                  </label>
                </div>
                <div className="shop-cta">M’inscrire</div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Page de lancement</h3>
            <p>Liste d’attente, précommande ou inscription : la page qui accompagne votre lancement.</p>
          </div>
        </article>
        <article className="gc">
          <div className="gc-ui">
            <div className="gcu">
              <div className="ul">
                <div className="ul-h">Contrôle avant mise en ligne</div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Images optimisées</span>
                  <b>OK</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Animations réduites si demandé</span>
                  <b>OK</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Navigation au clavier</span>
                  <b>OK</b>
                </div>
                <div className="ul-r">
                  <i className="sq sq-ok" />
                  <span>Temps de chargement</span>
                  <b>Rapide</b>
                </div>
              </div>
            </div>
          </div>
          <div className="gc-b">
            <h3>Performance & accessibilité</h3>
            <p>Animations légères et images optimisées : l’expérience reste rapide et lisible par tous.</p>
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
            <p>Message, public et ce que la page doit déclencher.</p>
          </div>
          <div className="st cur">
            <h3>
              <i />
              Imaginer
            </h3>
            <p>Direction artistique et storyboard, scène par scène.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Animer & développer
            </h3>
            <p>Prototype animé, puis intégration sur une préprod.</p>
          </div>
          <div className="st todo">
            <h3>
              <i />
              Lancer
            </h3>
            <p>Mise en ligne et ajustements.</p>
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
        <Link to="/expertises/site-vitrine" className="rl" data-exp="site-vitrine">
          <img className="px picon" src="/px/picon-5d9e4e01.svg" alt="" width={20} height={20} />
          <div>
            <b>Site vitrine</b>
            <span>Présenter votre activité et être contacté.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/site-dynamique" className="rl" data-exp="site-dynamique">
          <img className="px picon" src="/px/picon-c328b51d.svg" alt="" width={20} height={20} />
          <div>
            <b>Site dynamique</b>
            <span>Vendre, réserver et gérer en ligne.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/google-ads" className="rl" data-exp="google-ads">
          <img className="px picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
          <div>
            <b>Google Ads</b>
            <span>Des campagnes qui rapportent des contacts.</span>
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
              <span>Combien coûte un site concept ?</span>
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
              prix dépend du nombre de scènes, des animations et des illustrations à créer.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Combien de temps faut-il ?</span>
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
            <p>Le planning dépend du nombre de scènes et d’illustrations : il est fixé dans le devis.</p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Le site sera-t-il rapide et accessible ?</span>
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
              Oui. Images optimisées, code léger, contrastes lisibles et navigation au clavier sont vérifiés
              avant chaque mise en ligne.
            </p>
          </div>
          <div className="q">
            <div className="q-h">
              <span>Le SEO est-il inclus dans la création de site ?</span>
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
              Les bases, oui : structure, balises, redirections, données structurées et vitesse. Un
              accompagnement SEO dans la durée (contenus, suivi des positions) se fait à part.
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
            Un lancement en vue ?<span className="serif">Racontons-le en grand.</span>
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
      <CeQuUnSite />
      <CeQuOnLivre />
      <CommentOnTravaille />
      <IlsNousOntFait />
      <ExpertisesAssociees />
      <QuestionsFrequentes />
      <GCta />
    </section>
  )
}
