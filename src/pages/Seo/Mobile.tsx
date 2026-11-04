import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Expertises / <b>SEO</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Référencement naturel (SEO)<span className="serif">pour être trouvé au bon moment.</span>
      </h1>
      <p className="mo-lead">
        Audit, SEO technique, contenus et référencement local : on fait remonter votre site sur les recherches
        qui amènent de vrais clients, pas seulement du trafic.
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
        <img className="mo-media-bg" src="/images/c11d3ecd202d9a.jpg" alt="" />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="px omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>Où en est votre référencement ?</span>
        </div>
        <div className="mo-comp">
          <div className="mo-in">
            <span className="ch2-url">
              https://www.votre-site.fr
              <span className="caret" />
            </span>{' '}
            <span className="ch2-hint">Collez l’adresse de votre site</span>
          </div>
          <div className="mo-crit">
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Technique
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Contenus
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Local
            </span>
            <span className="cr">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" strokeWidth="1.8" />
              </svg>
              Concurrents
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
            <img className="px picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Remonter sur Google</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Être trouvé dans ma ville</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-92b066cf.svg" alt="" width={10} height={10} />
            <b>Être cité par ChatGPT</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
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
      <div className="mo-capt">Le phare guide les bateaux, 20 h</div>
    </div>
  )
}

function CeQueLeSeo() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce que le SEO<span className="serif">vous apporte.</span>
        </h2>
      </div>
      <div className="sxm-ocs">
        <div className="sxm-oc">
          <h3>Les bonnes recherches</h3>
          <p>On cible les requêtes de vos futurs clients, pas celles qui flattent les statistiques.</p>
        </div>
        <div className="sxm-oc">
          <h3>Un site irréprochable</h3>
          <p>Vitesse, structure, balises, indexation : Google comprend et aime votre site.</p>
        </div>
        <div className="sxm-oc">
          <h3>Une présence locale forte</h3>
          <p>Fiche Google, avis et pages locales pour être trouvé près de chez vous.</p>
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
              <div className="ul-h">Audit · votre-site.fr</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Pages indexées</span>
                <b>OK</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>Balises title en double</span>
                <b>À corriger</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>Pages lentes sur mobile</span>
                <b>À corriger</b>
              </div>
              <div className="ul-r">
                <i className="sq" />
                <span>Données structurées</span>
                <b>Absentes</b>
              </div>
            </div>
          </div>
          <h3>Audit SEO</h3>
          <p>Un état des lieux complet, priorisé, en français clair.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="code u-bare">
              <div>
                <span className="c-k">{'<title>'}</span>Menuiserie sur mesure à Nantes
                <span className="c-k">{'</title>'}</span>
              </div>
              <div>
                <span className="c-k">{'<link'}</span> <span className="c-a">rel</span>=
                <span className="c-s">"canonical"</span> <span className="c-k">{'/>'}</span>
              </div>
              <div>
                <span className="c-k">{'<script'}</span> <span className="c-a">type</span>=
                <span className="c-s">"application/ld+json"</span>
                <span className="c-k">{'>'}</span>
              </div>
              <div>
                <span className="c-ok">
                  <i />
                  Sitemap envoyé à Google
                </span>
              </div>
            </div>
          </div>
          <h3>SEO technique</h3>
          <p>Vitesse, maillage, redirections, sitemap : les fondations.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Calendrier éditorial</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Guide · Choisir ses fenêtres</span>
                <b>Publié</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Page · Menuiserie Antibes</span>
                <b>Publiée</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>Article · Aides à la rénovation</span>
                <b>En rédaction</b>
              </div>
            </div>
          </div>
          <h3>Stratégie de contenus</h3>
          <p>Les pages et les articles qui répondent aux questions de vos clients.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="gbp">
              <div className="gbp-n">Votre entreprise</div>
              <div className="gbp-s">
                <b>5,0</b>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 0H7V4H11V7H7V11H4V7H0V4H4V0Z" fill="#FF4D1A" />
                </svg>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 0H7V4H11V7H7V11H4V7H0V4H4V0Z" fill="#FF4D1A" />
                </svg>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 0H7V4H11V7H7V11H4V7H0V4H4V0Z" fill="#FF4D1A" />
                </svg>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 0H7V4H11V7H7V11H4V7H0V4H4V0Z" fill="#FF4D1A" />
                </svg>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 0H7V4H11V7H7V11H4V7H0V4H4V0Z" fill="#FF4D1A" />
                </svg>
                <span>Avis Google</span>
              </div>
              <div className="gbp-m">Menuisier · Nantes · Ouvert jusqu’à 18 h</div>
              <div className="gbp-b">
                <span>Itinéraire</span>
                <span>Appeler</span>
                <span>Site web</span>
              </div>
            </div>
          </div>
          <h3>SEO local</h3>
          <p>Fiche Google optimisée, avis et pages par ville.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ub">
              <div className="ul-h">Visites depuis Google</div>
              <div className="bars">
                <i style={{ height: '30px' }} />
                <i style={{ height: '34px' }} />
                <i style={{ height: '42px' }} />
                <i style={{ height: '40px' }} />
                <i style={{ height: '55px' }} />
                <i style={{ height: '62px' }} />
                <i style={{ height: '60px' }} />
                <i style={{ height: '74px' }} />
                <i style={{ height: '82px' }} />
                <i style={{ height: '96px' }} />
              </div>
            </div>
          </div>
          <h3>Suivi des positions</h3>
          <p>Un rapport mensuel lisible : positions, trafic, demandes.</p>
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
                <span>menuisier nantes</span>
              </div>
              <div className="serp-r">
                <span className="serp-u">votre-site.fr › menuiserie</span>
                <b>Menuiserie sur mesure à Nantes — Votre entreprise</b>
                <span className="serp-d">Fenêtres, portes et agencement. Devis gratuit sous 48 h.</span>
              </div>
            </div>
          </div>
          <h3>Résultats de recherche</h3>
          <p>Des titres et descriptions qui donnent envie de cliquer.</p>
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
          <span>Technique, contenus, concurrence et mots-clés.</span>
        </li>
        <li>
          <b>Corriger</b>
          <span>Les chantiers techniques en priorité.</span>
        </li>
        <li>
          <b>Produire</b>
          <span>Pages et contenus qui répondent aux recherches.</span>
        </li>
        <li>
          <b>Mesurer</b>
          <span>Positions, trafic et demandes chaque mois.</span>
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
        <Link to="/expertises/geo" className="rl xpm-rl" data-exp="geo">
          <img className="px picon" src="/px/picon-84c912e7.svg" alt="" width={20} height={20} />
          <div>
            <b>GEO</b>
            <span>Être cité par les IA.</span>
          </div>
        </Link>
        <Link to="/expertises/google-ads" className="rl xpm-rl" data-exp="google-ads">
          <img className="px picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
          <div>
            <b>Google Ads</b>
            <span>Des campagnes qui rapportent des contacts.</span>
          </div>
        </Link>
        <Link to="/expertises/site-internet" className="rl xpm-rl" data-exp="site-internet">
          <img className="px picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <div>
            <b>Site internet</b>
            <span>Vitrine, dynamique ou concept.</span>
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
            <span>Combien de temps pour voir des résultats en SEO ?</span>
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
            Les corrections techniques produisent souvent leurs effets en quelques semaines ; les contenus et
            la notoriété prennent généralement plusieurs mois. On vous montre l’évolution chaque mois, requête
            par requête.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Garantissez-vous la première position sur Google ?</span>
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
            Non, et personne ne peut le garantir honnêtement. On s’engage sur un travail mesurable :
            corrections, contenus et suivi mensuel des positions et des demandes.
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
          Vos clients vous cherchent déjà.
          <span className="serif">Faisons en sorte qu’ils vous trouvent.</span>
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
      <CeQueLeSeo />
      <CeQuOnLivre />
      <CommentOnTravaille />
      <ExpertisesAssociees />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
