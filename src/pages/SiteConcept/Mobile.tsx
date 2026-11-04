import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">Expertises</Link>
        {' / '}
        <Link to="/expertises/site-internet" className="xp-cr" data-exp="site-internet">
          Site internet
        </Link>{' '}
        / <b>Site concept</b>
      </div>
      <h1 className="mo-h1">
        Site concept<span className="serif">pour une marque qu’on n’oublie pas.</span>
      </h1>
      <p className="mo-lead">
        Lancement, nouvelle marque, campagne : un site pensé comme une expérience, avec une direction
        artistique forte, des animations et un récit qui se déroule au scroll. Une seule page suffit parfois.
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
    <div className="mo-media mg-media xp-mmedia">
      <div className="hm-layer">
        <img className="mo-media-bg" src="/images/acec22c14acb1b.jpg" alt="" />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="px omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>
            On regarde votre site
            <br />
            ensemble ?
          </span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              https://www.votre-marque.fr
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
              Animations
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Mobile
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              SEO
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
      <div className="mo-capt">L’observatoire, 22 h</div>
    </div>
  )
}

function CeQuUnSite() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce qu’un site concept<span className="serif">apporte à votre marque.</span>
        </h2>
      </div>
      <div className="sxm-ocs">
        <div className="sxm-oc">
          <h3>Une première impression forte</h3>
          <p>Une direction artistique propre à votre marque, qui la distingue dès le premier écran.</p>
        </div>
        <div className="sxm-oc">
          <h3>Un récit qui se lit jusqu’au bout</h3>
          <p>
            Le scroll raconte votre histoire étape par étape : chaque section donne envie de voir la suivante.
          </p>
        </div>
        <div className="sxm-oc">
          <h3>Une expérience qui reste rapide</h3>
          <p>Des animations légères, pensées pour le téléphone et pour Google.</p>
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
          <h3>Direction artistique</h3>
          <p>Typographies, couleurs, illustrations : une identité qui se reconnaît en un écran.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Storyboard & prototype</h3>
          <p>Chaque scène dessinée puis animée dans un prototype, validé avant le développement.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Animations au scroll</h3>
          <p>Titres, images et transitions qui suivent la lecture, sans gêner la navigation.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="xp-orio">
              <img className="px" src="/px/art-3a97b3a2.svg" alt="" width={220} height={230} />
            </div>
          </div>
          <h3>Illustrations & personnages</h3>
          <p>Illustrations, pixel art ou mascotte : des images faites pour votre marque.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Page de lancement</h3>
          <p>Liste d’attente, précommande ou inscription : la page qui accompagne votre lancement.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
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
          <h3>Performance & accessibilité</h3>
          <p>Animations légères et images optimisées : l’expérience reste rapide et lisible par tous.</p>
        </article>
      </div>
    </section>
  )
}

function CommentOnTravaille() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Comment<span className="serif">on travaille.</span>
        </h2>
        <p className="mo-lead">Une seule équipe du premier échange à la mise en ligne.</p>
      </div>
      <ol className="sxm-steps">
        <li>
          <b>Cadrer</b>
          <span>Message, public et ce que la page doit déclencher.</span>
        </li>
        <li>
          <b>Imaginer</b>
          <span>Direction artistique et storyboard, scène par scène.</span>
        </li>
        <li>
          <b>Animer & développer</b>
          <span>Prototype animé, puis intégration sur une préprod.</span>
        </li>
        <li>
          <b>Lancer</b>
          <span>Mise en ligne et ajustements.</span>
        </li>
      </ol>
    </section>
  )
}

function ExpertisesAssociees() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Expertises<span className="serif">associées.</span>
        </h2>
      </div>
      <div className="xpm-rel">
        <Link to="/expertises/site-vitrine" className="rl xpm-rl" data-exp="site-vitrine">
          <img className="px picon" src="/px/picon-5d9e4e01.svg" alt="" width={20} height={20} />
          <div>
            <b>Site vitrine</b>
            <span>Présenter votre activité et être contacté.</span>
          </div>
        </Link>
        <Link to="/expertises/site-dynamique" className="rl xpm-rl" data-exp="site-dynamique">
          <img className="px picon" src="/px/picon-c328b51d.svg" alt="" width={20} height={20} />
          <div>
            <b>Site dynamique</b>
            <span>Vendre, réserver et gérer en ligne.</span>
          </div>
        </Link>
        <Link to="/expertises/google-ads" className="rl xpm-rl" data-exp="google-ads">
          <img className="px picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
          <div>
            <b>Google Ads</b>
            <span>Des campagnes qui rapportent des contacts.</span>
          </div>
        </Link>
      </div>
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
            <span>Combien coûte un site concept ?</span>
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
            dépend du nombre de scènes, des animations et des illustrations à créer.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Combien de temps faut-il ?</span>
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
          <p>Le planning dépend du nombre de scènes et d’illustrations : il est fixé dans le devis.</p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Le site sera-t-il rapide et accessible ?</span>
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
            Oui. Images optimisées, code léger, contrastes lisibles et navigation au clavier sont vérifiés
            avant chaque mise en ligne.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Le SEO est-il inclus dans la création de site ?</span>
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
            Les bases, oui : structure, balises, redirections, données structurées et vitesse. Un
            accompagnement SEO dans la durée (contenus, suivi des positions) se fait à part.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Pourrai-je modifier mon site seul ?</span>
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
            Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Textes, images, pages
            et actualités se modifient sans connaissances techniques.
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
          Un lancement en vue ?<span className="serif">Racontons-le en grand.</span>
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
          <img className="px logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
          <img className="px logo-w" src="/px/logo-w-438c9e6d.svg" alt="" width={151} height={21} />
        </span>
        <p>
          Studio de design et de développement web basé à Paris. Sites sur-mesure, e-commerce, applications et
          visibilité.
        </p>
        <div className="mo-fcols">
          <div className="mo-fc">
            <div className="fc-k">Expertises</div>
            <Link to="/expertises/site-internet">Site internet</Link>
            <Link to="/expertises/developpement-applications">Développement d’applications</Link>
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
            <Link to="/le-studio">Le studio</Link>
            <a>Méthode</a>
            <Link to="/realisations/orion-admin">Orion Admin</Link>
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
              <b>Partout ailleurs</b>
              <span>France et international, en visio</span>
            </div>
            <a>Réserver</a>
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
            className="px bigword"
            src="/px/bigword-a5329b0d.svg"
            alt=""
            width={416}
            height={40}
            style={{ left: '-13px', top: '132px', opacity: '0.16' }}
          />
          <i className="betel" style={{ left: '193px', top: '88px' }} />
          <span className="orio" style={{ left: '91px', top: '34px' }} title="Orio et Bételgeuse">
            <span className="orio-in">
              <img className="px" src="/px/art-c8610941.svg" alt="" width={88} height={92} />
            </span>
          </span>
        </div>
        <div className="mo-legal">
          <div className="ft-lang">
            <span className="on">Français</span>
            <span>English</span>
          </div>
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
    <section className="artboard mo xp-page">
      <MobileNav />
      <MoHero />
      <MoMedia />
      <CeQuUnSite />
      <CeQuOnLivre />
      <CommentOnTravaille />
      <ExpertisesAssociees />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
