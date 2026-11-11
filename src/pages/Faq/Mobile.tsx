import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero mr-hero">
      <div className="crumb">
        <Link to="/ressources">
          Ressources / <b>Questions fréquentes</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Questions fréquentes<span className="serif">sur nos sites, nos délais et nos tarifs.</span>
      </h1>
      <label className="mr-search">
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
        <input
          className="r-q"
          type="search"
          placeholder="Délais, prix, Shopify…"
          aria-label="Rechercher une question"
          autoComplete="off"
        />
      </label>
      <div className="fq-sug mq-sug">
        <span role="button" tabIndex={0}>
          Combien coûte un site ?
        </span>
        <span role="button" tabIndex={0}>
          Qu’est-ce que le GEO ?
        </span>
        <span role="button" tabIndex={0}>
          Pourrai-je modifier mon site ?
        </span>
      </div>
    </section>
  )
}

function MrTabs() {
  return (
    <div className="mr-tabs mq-tabs">
      <div className="mr-tabs-in">
        <span className="on" data-c="0" role="button" tabIndex={0}>
          Budget & devis
        </span>
        <span className="" data-c="1" role="button" tabIndex={0}>
          Délais & méthode
        </span>
        <span className="" data-c="2" role="button" tabIndex={0}>
          Technique
        </span>
        <span className="" data-c="3" role="button" tabIndex={0}>
          SEO, GEO & publicité
        </span>
        <span className="" data-c="4" role="button" tabIndex={0}>
          Après la mise en ligne
        </span>
        <span className="" data-c="5" role="button" tabIndex={0}>
          Analyse gratuite
        </span>
        <span className="" data-c="6" role="button" tabIndex={0}>
          International
        </span>
      </div>
    </div>
  )
}

function MrCnt() {
  return (
    <div className="mr-cnt">
      <span className="q-count" aria-live="polite">
        25 réponses
      </span>
    </div>
  )
}

function MqBody() {
  return (
    <div className="mq-body">
      <div className="mq-cat" data-c="0">
        <h2>
          Budget & devis<i>4</i>
        </h2>
        <div className="mo-faq">
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Combien coûte un site internet ?</span>
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
              Chaque projet est chiffré sur devis après un premier échange. Le prix dépend du nombre de pages,
              des fonctionnalités (réservation, boutique, espace client) et du niveau de sur-mesure. Dans le
              formulaire de contact, vous indiquez une fourchette de budget : on vous oriente vers la bonne
              approche dès le premier appel.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Le devis est-il gratuit ?</span>
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
              Oui. Le premier échange et le devis sont gratuits et sans engagement. L’analyse de votre site
              actuel, avec sa maquette personnalisée, l’est aussi.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Comment se passe le paiement ?</span>
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
              Un acompte à la signature, puis des échéances calées sur les étapes du projet (maquettes
              validées, mise en ligne). L’échéancier exact figure dans le devis.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Le prix peut-il changer en cours de projet ?</span>
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
              Non, pas sans votre accord. Le devis fixe un périmètre ; si vous souhaitez ajouter une
              fonctionnalité en route, on vous chiffre l’ajout avant de le réaliser.
            </p>
          </div>
        </div>
      </div>
      <div className="mq-cat" data-c="1">
        <h2>
          Délais & méthode<i>4</i>
        </h2>
        <div className="mo-faq">
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
            <p>
              Un site vitrine prend en moyenne 4 à 8 semaines, selon sa complexité et le rythme des échanges.
              Une boutique ou une application demande davantage : le planning est fixé dans le devis.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Comment se déroule un projet ?</span>
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
              Cinq étapes : cadrer (objectifs, arborescence, devis), designer (maquettes validées écran par
              écran), développer (préprod ouverte pour tester), lancer (mise en ligne, formation), puis faire
              grandir si vous le souhaitez.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Comment suis-je informé de l’avancement ?</span>
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
              On vous tient au courant à chaque étape : vous voyez où en est le projet et vous validez avant qu’on passe à la suite.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Qui sont mes interlocuteurs ?</span>
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
              Les associés du studio, Julien et Théo. Pas de commercial ni de chef de projet intermédiaire :
              vous parlez directement à ceux qui conçoivent et développent votre site.
            </p>
          </div>
        </div>
      </div>
      <div className="mq-cat" data-c="2">
        <h2>
          Technique<i>5</i>
        </h2>
        <div className="mo-faq">
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Webflow, Shopify, WordPress ou code sur mesure ?</span>
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
              On choisit selon votre projet et votre équipe : Webflow pour un site vitrine que vous gérez
              facilement, Shopify pour l’e-commerce, du code sur mesure (Next.js, React) pour les applications
              et les besoins spécifiques.
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
              Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Textes, images,
              pages et actualités se modifient sans connaissances techniques.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Reprenez-vous un site existant ?</span>
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
              Oui, après un audit. On vous dit franchement s’il vaut mieux le faire évoluer ou repartir de
              zéro, et pourquoi.
            </p>
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
              <span>Où mon site est-il hébergé ?</span>
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
              Selon la technologie : chez Webflow ou Shopify, ou sur un hébergeur adapté pour le code sur
              mesure. On vous recommande la solution la plus simple et la plus fiable pour votre cas.
            </p>
          </div>
        </div>
      </div>
      <div className="mq-cat" data-c="3">
        <h2>
          SEO, GEO & publicité<i>4</i>
        </h2>
        <div className="mo-faq">
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
              Oui. Un SEO complet (technique, contenus, suivi des positions) et un GEO complet (réponses claires, données structurées, suivi dans les IA) sont inclus dans le devis de chacun de nos clients.
            </p>
          </div>
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
              Le GEO regroupe les actions qui aident les IA comme ChatGPT, Perplexity ou les aperçus IA de
              Google à comprendre votre activité et à citer votre marque dans leurs réponses.
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
      </div>
      <div className="mq-cat" data-c="4">
        <h2>
          Après la mise en ligne<i>3</i>
        </h2>
        <div className="mo-faq">
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
            <p>
              On reste disponibles pour les corrections et les questions. Vous pouvez ensuite choisir un suivi
              régulier (évolutions, SEO, maintenance) ou nous solliciter ponctuellement.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Proposez-vous une maintenance ?</span>
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
              Oui : mises à jour, sauvegardes, surveillance et petites évolutions. Le contenu de la
              maintenance dépend de la technologie de votre site et vous est proposé au devis.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Serai-je propriétaire de mon site ?</span>
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
              Oui. Le nom de domaine, les contenus et les accès sont à votre nom ; les conditions précises sur
              le code figurent dans le devis.
            </p>
          </div>
        </div>
      </div>
      <div className="mq-cat" data-c="5">
        <h2>
          Analyse gratuite<i>3</i>
        </h2>
        <div className="mo-faq">
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Qu’est-ce que l’analyse gratuite ?</span>
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
              Vous saisissez l’adresse de votre site et vos coordonnées. On étudie le design, le SEO, la
              vitesse et la conversion, puis on vous envoie l’analyse et une maquette de page d’accueil
              personnalisée.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Est-ce vraiment sans engagement ?</span>
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
            <p>Oui. L’analyse est à vous, que vous travailliez avec nous ensuite ou non.</p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Sous quel délai vais-je la recevoir ?</span>
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
              Sous quelques jours ouvrés, par e-mail. On vous propose ensuite un appel de 30 minutes pour en
              parler, si vous le souhaitez.
            </p>
          </div>
        </div>
      </div>
      <div className="mq-cat" data-c="6">
        <h2>
          International<i>2</i>
        </h2>
        <div className="mo-faq">
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Travaillez-vous en anglais et à distance ?</span>
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
              Oui. Le studio est basé à Paris et travaille partout en France et à l’international, en français
              ou en anglais, sur place ou à distance.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Pouvez-vous créer un site multilingue ?</span>
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
              Oui : versions par langue, URL et balises hreflang propres, et un back-office pour gérer les
              traductions.
            </p>
          </div>
        </div>
      </div>
      <div className="q-empty mq-empty" hidden>
        <b>Pas de réponse à cette question… pour l’instant.</b>
        <p>Écrivez-nous : Julien et Théo vous répondent directement.</p>
        <a className="btn btn-ink btn-s q-ask">Poser ma question</a>
      </div>
    </div>
  )
}

function MrNl() {
  return (
    <div className="mr-nl mq-help">
      <b className="q-total">25 réponses, et la vôtre ?</b>
      <p>Si votre question n’est pas là, on vous répond directement.</p>
      <a className="btn btn-ink mo-btn q-ask">Poser ma question</a>
    </div>
  )
}

function MoFt() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Pas trouvé votre réponse ?<span className="serif">Posez-la-nous.</span>
        </h2>
        <a className="btn btn-acc mo-btn">Écrire au studio</a>{' '}
        <a className="btn btn-line mo-btn">Réserver un appel</a>{' '}
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
            <Link to="/expertises/site-vitrine">Site vitrine</Link>
            <Link to="/expertises/site-dynamique">Site dynamique</Link>
            <Link to="/expertises/site-concept">Site concept</Link>
            <Link to="/expertises/e-commerce">E-commerce</Link>
            <Link to="/expertises/developpement-applications">Développement d’applications</Link>
            <Link to="/expertises/saas">SaaS</Link>
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
            <Link to="/orion-admin">Orion Admin</Link>
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
    <section className="artboard mo q-page">
      <MobileNav />
      <MoHero />
      <MrTabs />
      <MrCnt />
      <MqBody />
      <MrNl />
      <MoFt />
    </section>
  )
}
