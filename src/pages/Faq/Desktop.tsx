import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function FqHero() {
  return (
    <div className="fq-hero">
      <div>
        <div className="crumb">
          <Link to="/ressources">
            Ressources / <b>Questions fréquentes</b>
          </Link>
        </div>
        <h1 className="s-h1">
          <span className="s-a">Questions fréquentes</span>
          <span className="serif">sur nos sites, nos délais et nos tarifs.</span>
        </h1>
      </div>
      <div className="fq-search">
        <div className="composer">
          <label className="c-in">
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
              placeholder="Cherchez une question : délais, prix, Shopify…"
              aria-label="Rechercher une question"
              autoComplete="off"
            />
          </label>
        </div>
        <div className="fq-sug">
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
      </div>
    </div>
  )
}

function FqBand() {
  return (
    <div className="fq-band">
      <div className="hm-layer">
        <img src="/images/926133384353c5.png" alt="Ciel de nuit et constellation d’Orion, en pixels" />
      </div>
    </div>
  )
}

function FqBody() {
  return (
    <div className="fq-body">
      <aside className="fq-nav">
        <a className="on" data-c="0" role="button" tabIndex={0}>
          Budget & devis<i>4</i>
        </a>
        <a className="" data-c="1" role="button" tabIndex={0}>
          Délais & méthode<i>4</i>
        </a>
        <a className="" data-c="2" role="button" tabIndex={0}>
          Technique<i>5</i>
        </a>
        <a className="" data-c="3" role="button" tabIndex={0}>
          SEO, GEO & publicité<i>4</i>
        </a>
        <a className="" data-c="4" role="button" tabIndex={0}>
          Après la mise en ligne<i>3</i>
        </a>
        <a className="" data-c="5" role="button" tabIndex={0}>
          Analyse gratuite<i>3</i>
        </a>
        <a className="" data-c="6" role="button" tabIndex={0}>
          International<i>2</i>
        </a>
        <div className="fq-help">
          <b className="q-total">25 réponses, et la vôtre ?</b>
          <p>Si votre question n’est pas là, on vous répond directement.</p>
          <a className="btn btn-ink btn-s q-ask">Poser ma question</a>
        </div>
      </aside>
      <div className="fq-main">
        <div className="fq-cat" data-c="0">
          <h2>Budget & devis</h2>
          <div className="fq-q">
            <h3>Combien coûte un site internet ?</h3>
            <p>
              Chaque projet est chiffré sur devis après un premier échange. Le prix dépend du nombre de pages,
              des fonctionnalités (réservation, boutique, espace client) et du niveau de sur-mesure. Dans le
              formulaire de contact, vous indiquez une fourchette de budget : on vous oriente vers la bonne
              approche dès le premier appel.
            </p>
          </div>
          <div className="fq-q">
            <h3>Le devis est-il gratuit ?</h3>
            <p>
              Oui. Le premier échange et le devis sont gratuits et sans engagement. L’analyse de votre site
              actuel, avec sa maquette personnalisée, l’est aussi.
            </p>
          </div>
          <div className="fq-q">
            <h3>Comment se passe le paiement ?</h3>
            <p>
              Un acompte à la signature, puis des échéances calées sur les étapes du projet (maquettes
              validées, mise en ligne). L’échéancier exact figure dans le devis.
            </p>
          </div>
          <div className="fq-q">
            <h3>Le prix peut-il changer en cours de projet ?</h3>
            <p>
              Non, pas sans votre accord. Le devis fixe un périmètre ; si vous souhaitez ajouter une
              fonctionnalité en route, on vous chiffre l’ajout avant de le réaliser.
            </p>
          </div>
        </div>
        <div className="fq-cat" data-c="1">
          <h2>Délais & méthode</h2>
          <div className="fq-q">
            <h3>Combien de temps faut-il pour un site ?</h3>
            <p>
              Un site vitrine prend en moyenne 4 à 8 semaines, selon sa complexité et le rythme des échanges.
              Une boutique ou une application demande davantage : le planning est fixé dans le devis.
            </p>
          </div>
          <div className="fq-q">
            <h3>Comment se déroule un projet ?</h3>
            <p>
              Cinq étapes : cadrer (objectifs, arborescence, devis), designer (maquettes validées écran par
              écran), développer (préprod ouverte pour tester), lancer (mise en ligne, formation), puis faire
              grandir si vous le souhaitez.
            </p>
          </div>
          <div className="fq-q">
            <h3>Comment suis-je informé de l’avancement ?</h3>
            <p>
              On vous tient au courant à chaque étape : vous voyez où en est le projet et vous validez avant qu’on passe à la suite.
            </p>
          </div>
          <div className="fq-q">
            <h3>Qui sont mes interlocuteurs ?</h3>
            <p>
              Les associés du studio, Julien et Théo. Pas de commercial ni de chef de projet intermédiaire :
              vous parlez directement à ceux qui conçoivent et développent votre site.
            </p>
          </div>
        </div>
        <div className="fq-cat" data-c="2">
          <h2>Technique</h2>
          <div className="fq-q">
            <h3>Webflow, Shopify, WordPress ou code sur mesure ?</h3>
            <p>
              On choisit selon votre projet et votre équipe : Webflow pour un site vitrine que vous gérez
              facilement, Shopify pour l’e-commerce, du code sur mesure (Next.js, React) pour les applications
              et les besoins spécifiques.
            </p>
          </div>
          <div className="fq-q">
            <h3>Pourrai-je modifier mon site seul ?</h3>
            <p>
              Oui. On vous livre un back-office adapté et on vous forme à son utilisation. Textes, images,
              pages et actualités se modifient sans connaissances techniques.
            </p>
          </div>
          <div className="fq-q">
            <h3>Reprenez-vous un site existant ?</h3>
            <p>
              Oui, après un audit. On vous dit franchement s’il vaut mieux le faire évoluer ou repartir de
              zéro, et pourquoi.
            </p>
          </div>
          <div className="fq-q">
            <h3>Le site sera-t-il rapide et accessible ?</h3>
            <p>
              Oui. Images optimisées, code léger, contrastes lisibles et navigation au clavier sont vérifiés
              avant chaque mise en ligne.
            </p>
          </div>
          <div className="fq-q">
            <h3>Où mon site est-il hébergé ?</h3>
            <p>
              Selon la technologie : chez Webflow ou Shopify, ou sur un hébergeur adapté pour le code sur
              mesure. On vous recommande la solution la plus simple et la plus fiable pour votre cas.
            </p>
          </div>
        </div>
        <div className="fq-cat" data-c="3">
          <h2>SEO, GEO & publicité</h2>
          <div className="fq-q">
            <h3>Le SEO est-il inclus dans la création de site ?</h3>
            <p>
              Oui. Un SEO complet (technique, contenus, suivi des positions) et un GEO complet (réponses claires, données structurées, suivi dans les IA) sont inclus dans le devis de chacun de nos clients.
            </p>
          </div>
          <div className="fq-q">
            <h3>Qu’est-ce que le GEO ?</h3>
            <p>
              Le GEO regroupe les actions qui aident les IA comme ChatGPT, Perplexity ou les aperçus IA de
              Google à comprendre votre activité et à citer votre marque dans leurs réponses.
            </p>
          </div>
          <div className="fq-q">
            <h3>Garantissez-vous la première position sur Google ?</h3>
            <p>
              Non, et personne ne peut le garantir honnêtement. On s’engage sur un travail mesurable :
              corrections, contenus et suivi mensuel des positions et des demandes.
            </p>
          </div>
          <div className="fq-q">
            <h3>Gérez-vous les campagnes Google Ads ?</h3>
            <p>
              Oui : audit, création des campagnes, pages d’atterrissage et pilotage mensuel, avec un suivi des
              conversions de l’annonce jusqu’à la demande.
            </p>
          </div>
        </div>
        <div className="fq-cat" data-c="4">
          <h2>Après la mise en ligne</h2>
          <div className="fq-q">
            <h3>Que se passe-t-il après la mise en ligne ?</h3>
            <p>
              On reste disponibles pour les corrections et les questions. Vous pouvez ensuite choisir un suivi
              régulier (évolutions, SEO, maintenance) ou nous solliciter ponctuellement.
            </p>
          </div>
          <div className="fq-q">
            <h3>Proposez-vous une maintenance ?</h3>
            <p>
              Oui : mises à jour, sauvegardes, surveillance et petites évolutions. Le contenu de la
              maintenance dépend de la technologie de votre site et vous est proposé au devis.
            </p>
          </div>
          <div className="fq-q">
            <h3>Serai-je propriétaire de mon site ?</h3>
            <p>
              Oui. Le nom de domaine, les contenus et les accès sont à votre nom ; les conditions précises sur
              le code figurent dans le devis.
            </p>
          </div>
        </div>
        <div className="fq-cat" data-c="5">
          <h2>Analyse gratuite</h2>
          <div className="fq-q">
            <h3>Qu’est-ce que l’analyse gratuite ?</h3>
            <p>
              Vous saisissez l’adresse de votre site et vos coordonnées. On étudie le design, le SEO, la
              vitesse et la conversion, puis on vous envoie l’analyse et une maquette de page d’accueil
              personnalisée.
            </p>
          </div>
          <div className="fq-q">
            <h3>Est-ce vraiment sans engagement ?</h3>
            <p>Oui. L’analyse est à vous, que vous travailliez avec nous ensuite ou non.</p>
          </div>
          <div className="fq-q">
            <h3>Sous quel délai vais-je la recevoir ?</h3>
            <p>
              Sous quelques jours ouvrés, par e-mail. On vous propose ensuite un appel de 30 minutes pour en
              parler, si vous le souhaitez.
            </p>
          </div>
        </div>
        <div className="fq-cat" data-c="6">
          <h2>International</h2>
          <div className="fq-q">
            <h3>Travaillez-vous en anglais et à distance ?</h3>
            <p>
              Oui. Le studio est basé à Paris et travaille partout en France et à l’international, en français
              ou en anglais, sur place ou à distance.
            </p>
          </div>
          <div className="fq-q">
            <h3>Pouvez-vous créer un site multilingue ?</h3>
            <p>
              Oui : versions par langue, URL et balises hreflang propres, et un back-office pour gérer les
              traductions.
            </p>
          </div>
        </div>
        <div className="q-empty" hidden>
          <b>Pas de réponse à cette question… pour l’instant.</b>
          <p>Écrivez-nous : Julien et Théo vous répondent directement.</p>
          <a className="btn btn-ink btn-s q-ask">Poser ma question</a>
        </div>
      </div>
    </div>
  )
}

function GCta() {
  return (
    <div className="g-cta">
      <Footer>
        <div className="cta">
          <h2>
            Pas trouvé votre réponse ?<span className="serif">Posez-la-nous.</span>
          </h2>
          <div className="cta-r">
            <div className="cta-btns">
              <a className="btn btn-line">Réserver un appel</a>
              <a className="btn btn-acc">
                Écrire au studio <span className="kbd">P</span>
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
    <section className="artboard g-page q-page">
      <Nav />
      <MmVeilLive />
      <FqHero />
      <FqBand />
      <FqBody />
      <GCta />
    </section>
  )
}
