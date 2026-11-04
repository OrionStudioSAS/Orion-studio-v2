import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero">
      <div className="crumb">
        <Link to="/">
          Expertises / <b>Google Ads</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Campagnes Google Ads<span className="serif">pilotées au nombre de contacts.</span>
      </h1>
      <p className="mo-lead">
        Search, Performance Max, campagnes locales : on construit et on pilote vos campagnes pour qu’elles
        génèrent des demandes, avec des pages d’atterrissage qui convertissent.
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
        <img className="mo-media-bg" src="/images/b660a32ae27ca8.jpg" alt="" />
      </div>
      <div className="mo-chat">
        <div className="mo-greet">
          <img className="px omark" src="/px/omark-72fafdaa.svg" alt="" width={25} height={24} />
          <span>Que rapportent vos annonces ?</span>
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
              Search
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
              Landing
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
            <img className="px picon" src="/px/picon-34cc7426.svg" alt="" width={10} height={10} />
            <b>Lancer Google Ads</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-34cc7426.svg" alt="" width={10} height={10} />
            <b>Auditer mon compte</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-66b9ea70.svg" alt="" width={10} height={10} />
            <b>Créer une page d’atterrissage</b>
          </span>
          <span className="sg">
            <img className="px picon" src="/px/picon-6fc0fa75.svg" alt="" width={10} height={10} />
            <b>Remonter sur Google</b>
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
      <div className="mo-capt">Jour de marché sur le port, 9 h</div>
    </div>
  )
}

function CeQuUneCampagne() {
  return (
    <section className="mo-sec">
      <div className="mo-shead">
        <h2 className="mo-h2">
          Ce qu’une campagne bien pilotée<span className="serif">vous apporte.</span>
        </h2>
      </div>
      <div className="sxm-ocs">
        <div className="sxm-oc">
          <h3>Chaque euro suivi</h3>
          <p>Conversions mesurées de l’annonce jusqu’à la demande de devis ou la vente.</p>
        </div>
        <div className="sxm-oc">
          <h3>Des pages qui convertissent</h3>
          <p>Des pages d’atterrissage dédiées, rapides et pensées pour chaque campagne.</p>
        </div>
        <div className="sxm-oc">
          <h3>Des rapports lisibles</h3>
          <p>Ce que vous avez dépensé, ce que ça a rapporté, ce qu’on change le mois suivant.</p>
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
              <div className="ul-h">Audit · compte Google Ads</div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>Suivi des conversions</span>
                <b>Incomplet</b>
              </div>
              <div className="ul-r">
                <i className="sq" />
                <span>Mots-clés négatifs</span>
                <b>Absents</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Annonces responsives</span>
                <b>OK</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>Ciblage géographique</span>
                <b>Trop large</b>
              </div>
            </div>
          </div>
          <h3>Audit de compte</h3>
          <p>Ce qui coûte sans rapporter, et ce qu’il faut couper tout de suite.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="adp u-bare">
              <span className="adp-k">Sponsorisé</span>
              <span className="serp-u">votre-site.fr</span>
              <b>Devis en 24 h — Menuisier à Nantes</b>
              <span className="serp-d">
                Fenêtres, portes et agencement sur mesure. Intervention dans l’agglomération nantaise.
              </span>
              <div className="adp-s">
                <span>Demander un devis</span>
                <span>Nos réalisations</span>
              </div>
            </div>
          </div>
          <h3>Campagnes Search</h3>
          <p>Des annonces précises sur les recherches de vos futurs clients.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Éléments de la campagne</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Titres</span>
                <b>15 rédigés</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Visuels</span>
                <b>12 formats</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>Vidéo</span>
                <b>À produire</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Signaux d’audience</span>
                <b>Clients actuels</b>
              </div>
            </div>
          </div>
          <h3>Performance Max</h3>
          <p>Une campagne sur tous les réseaux Google, nourrie par vos meilleurs visuels.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="win u-win">
              <div className="win-bar">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="win-title">votre-site.fr/devis-menuiserie</span>
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
          <h3>Pages d’atterrissage</h3>
          <p>Une page par intention, avec le bon message et un formulaire court.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ul">
              <div className="ul-h">Événements suivis</div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Formulaire envoyé</span>
                <b>Actif</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Clic sur le téléphone</span>
                <b>Actif</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-ok" />
                <span>Achat</span>
                <b>Actif</b>
              </div>
              <div className="ul-r">
                <i className="sq sq-wa" />
                <span>Prise de rendez-vous</span>
                <b>À installer</b>
              </div>
            </div>
          </div>
          <h3>Suivi des conversions</h3>
          <p>Appels, formulaires, achats : chaque contact remonte dans GA4 et Google Ads.</p>
        </article>
        <article className="sxm-card">
          <div className="sxm-ui">
            <div className="ub">
              <div className="ul-h">Contacts générés par mois</div>
              <div className="bars">
                <i style={{ height: '20px' }} />
                <i style={{ height: '26px' }} />
                <i style={{ height: '24px' }} />
                <i style={{ height: '38px' }} />
                <i style={{ height: '44px' }} />
                <i style={{ height: '40px' }} />
                <i style={{ height: '56px' }} />
                <i style={{ height: '60px' }} />
                <i style={{ height: '72px' }} />
                <i style={{ height: '80px' }} />
              </div>
            </div>
          </div>
          <h3>Rapport mensuel</h3>
          <p>Un rapport court, en euros et en contacts, pas en jargon.</p>
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
          <span>Compte, suivi, concurrence et budget.</span>
        </li>
        <li>
          <b>Construire</b>
          <span>Campagnes, annonces et pages d’atterrissage.</span>
        </li>
        <li>
          <b>Lancer</b>
          <span>Mise en ligne et premiers ajustements serrés.</span>
        </li>
        <li>
          <b>Optimiser</b>
          <span>Chaque mois, on coupe ce qui ne rapporte pas.</span>
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
          <img className="px picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
          <div>
            <b>SEO</b>
            <span>Remonter sur Google.</span>
          </div>
        </Link>
        <Link to="/expertises/site-internet" className="rl xpm-rl" data-exp="site-internet">
          <img className="px picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <div>
            <b>Site internet</b>
            <span>Vitrine, dynamique ou concept.</span>
          </div>
        </Link>
        <Link to="/expertises/automatisations" className="rl xpm-rl" data-exp="automatisations">
          <img className="px picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <div>
            <b>Automatisations</b>
            <span>Vos tâches répétitives, automatisées.</span>
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
            <span>Quel budget prévoir pour Google Ads ?</span>
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
            Cela dépend de votre secteur, de votre zone et de la concurrence sur vos mots-clés. On l’estime
            ensemble à partir du coût par clic constaté et du nombre de contacts visés, avant de lancer quoi
            que ce soit.
          </p>
        </div>
        <div className="mo-q">
          <div className="mo-q-h">
            <span>Gérez-vous les campagnes Google Ads ?</span>
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
            Oui : audit, création des campagnes, pages d’atterrissage et pilotage mensuel, avec un suivi des
            conversions de l’annonce jusqu’à la demande.
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
          Vos annonces dépensent déjà.<span className="serif">Faisons-les rapporter.</span>
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
      <CeQuUneCampagne />
      <CeQuOnLivre />
      <CommentOnTravaille />
      <ExpertisesAssociees />
      <VosQuestionsNosReponses />
      <MoFt />
    </section>
  )
}
