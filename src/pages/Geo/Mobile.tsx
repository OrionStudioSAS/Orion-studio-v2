import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Expertises / <b>GEO</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        GEO : être cité<span className="serif">par ChatGPT, Perplexity et Google.</span>
      </h1>
      <p className="mo-lead">
        Vos clients posent désormais leurs questions aux IA. On structure votre site et vos contenus pour que
        votre marque apparaisse, et soit citée, dans leurs réponses.
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
        <img className="mo-media-bg" src="/images/8e960e3933b8a2.jpg" alt="" />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="pxsvg omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>Que disent les IA de votre marque ?</span>
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
              ChatGPT
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Perplexity
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Gemini
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Google
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
            <img className="pxsvg picon" src="/px/picon-92b066cf.svg" alt="" width={10} height={10} />
            <b>Être cité par ChatGPT</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-92b066cf.svg" alt="" width={10} height={10} />
            <b>Vérifier ce que disent les IA</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Remonter sur Google</b>
          </span>
          <span className="sg">
            <img className="pxsvg picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Refaire mon site</b>
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
      <div className="mo-capt">La grande bibliothèque, 21 h</div>
    </div>
  )
}

function CeQueLeGeo() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce que le GEO<span className="serif">change pour votre marque.</span>
        </h2>
      </div>
      <div className="sxm-ocs">
        <div className="sxm-oc">
          <h3>Être dans la réponse</h3>
          <p>Quand un client demande « quelle entreprise pour… », votre nom fait partie de la réponse.</p>
        </div>
        <div className="sxm-oc">
          <h3>Une marque bien décrite</h3>
          <p>Les IA reprennent les bons faits : ce que vous faites, pour qui, où et à quel prix.</p>
        </div>
        <div className="sxm-oc">
          <h3>Des visiteurs déjà convaincus</h3>
          <p>Ceux qui arrivent depuis une IA ont déjà comparé : ils sont prêts à vous contacter.</p>
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
            <div className="ul">
              <div className="ul-h">Requête : « agence web golf »</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>ChatGPT</span>
                <b>Cité</b>
              </div>
              <div className="ul-r">
                <i className="sq" />
                <span>Perplexity</span>
                <b>Non cité</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>Gemini</span>
                <b>Mentionné</b>
              </div>
              <div className="ul-r">
                <i className="sq" />
                <span>Google · Aperçu IA</span>
                <b>Non cité</b>
              </div>
            </div>
          </div>
          <h3>Audit de visibilité IA</h3>
          <p>On interroge les IA sur vos requêtes clés et on note qui est cité.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ai u-bare">
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
          <h3>Contenus citables</h3>
          <p>Des réponses courtes, factuelles et sourcées, faciles à reprendre.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="code u-bare">
              <div>{'{'}</div>
              <div>
                <span className="c-a">"@type"</span>: <span className="c-s">"ProfessionalService"</span>,
              </div>
              <div>
                <span className="c-a">"areaServed"</span>: <span className="c-s">"France"</span>,
              </div>
              <div>
                <span className="c-a">"knowsLanguage"</span>: [<span className="c-s">"fr"</span>,{' '}
                <span className="c-s">"en"</span>]
              </div>
              <div>{'}'}</div>
            </div>
          </div>
          <h3>Données structurées</h3>
          <p>Organisation, services, FAQ, avis : votre site parle aux machines.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="code u-bare">
              <div>
                <span className="c-f"># Votre marque</span>
              </div>
              <div>{'> Ce que vous faites, en une phrase.'}</div>
              <div>
                <span className="c-k">## Pages clés</span>
              </div>
              <div>- [Services](/services)</div>
              <div>- [Tarifs](/tarifs)</div>
              <div>- [FAQ](/faq)</div>
            </div>
          </div>
          <h3>llms.txt & pages clés</h3>
          <p>Un fichier qui résume votre activité pour les modèles de langage.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Où les IA lisent votre marque</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Site internet</span>
                <b>À jour</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Google Business Profile</span>
                <b>À jour</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>LinkedIn</span>
                <b>Description différente</b>
              </div>
              <div className="ul-r">
                <i className="sq" />
                <span>Annuaires professionnels</span>
                <b>Incomplets</b>
              </div>
            </div>
          </div>
          <h3>Cohérence de l’entité</h3>
          <p>Le même récit partout : site, LinkedIn, Google, annuaires.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ub">
              <div className="ul-h">Requêtes où votre marque est citée</div>
              <div className="bars">
                <i style={{ height: '12px' }} />
                <i style={{ height: '18px' }} />
                <i style={{ height: '16px' }} />
                <i style={{ height: '28px' }} />
                <i style={{ height: '34px' }} />
                <i style={{ height: '40px' }} />
                <i style={{ height: '52px' }} />
                <i style={{ height: '58px' }} />
                <i style={{ height: '66px' }} />
                <i style={{ height: '78px' }} />
              </div>
            </div>
          </div>
          <h3>Suivi des citations</h3>
          <p>Chaque mois, l’évolution de votre présence dans les réponses.</p>
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
          <b>Auditer</b>
          <span>Ce que les IA disent de vous et de vos concurrents.</span>
        </li>
        <li>
          <b>Structurer</b>
          <span>Données structurées, llms.txt, pages clés.</span>
        </li>
        <li>
          <b>Rédiger</b>
          <span>Contenus factuels et citables.</span>
        </li>
        <li>
          <b>Suivre</b>
          <span>Citations mesurées chaque mois.</span>
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
        <Link to="/expertises/seo" className="rl xpm-rl" data-exp="seo">
          <img className="pxsvg picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
          <div>
            <b>SEO</b>
            <span>Remonter sur Google.</span>
          </div>
        </Link>
        <Link to="/expertises/site-internet" className="rl xpm-rl" data-exp="site-internet">
          <img className="pxsvg picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <div>
            <b>Site internet</b>
            <span>Vitrine, dynamique ou concept.</span>
          </div>
        </Link>
        <Link to="/expertises/google-ads" className="rl xpm-rl" data-exp="google-ads">
          <img className="pxsvg picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
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
            <span>Qu’est-ce que le GEO ?</span>
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
            Le GEO (Generative Engine Optimization) regroupe les actions qui aident les IA génératives, comme
            ChatGPT, Perplexity ou les aperçus IA de Google, à comprendre votre activité et à citer votre
            marque dans leurs réponses.
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
      </div>
    </section>
  )
}

function MoFt() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Demain, vos clients demanderont à une IA.<span className="serif">Soyez dans la réponse.</span>
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
      <CeQueLeGeo />
      <CeQuOnLivre />
      <CommentOnTravaille />
      <ExpertisesAssociees />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
