import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <header className="mo-hero ma-head">
      <div className="crumb">
        <Link to="/ressources">
          Ressources / <b>SEO & GEO</b>
        </Link>
      </div>
      <div className="a-meta ma-meta">
        <span>SEO & GEO</span>
        <span>11 min de lecture</span>
        <span>28 octobre 2026</span>
      </div>
      <h1 className="mo-h1 ma-h1">Être cité par ChatGPT et Perplexity : ce qui marche vraiment</h1>
      <p className="mo-lead">
        Vos clients posent leurs questions aux IA avant de taper une recherche. Voici ce qui fait qu’une
        marque apparaît dans leurs réponses, ce qui ne sert à rien, et comment le mesurer.
      </p>
      <div className="a-by">
        <span className="av">J</span>
        <div>
          <b>Julien</b>Cofondateur · mis à jour le 2 novembre 2026
        </div>
      </div>
    </header>
  )
}

function MaHero() {
  return (
    <div className="ma-hero">
      <img
        src="/images/une-bibliotheque-ancienne-avec-un-planetaire-en.png"
        alt="Une bibliothèque ancienne avec un planétaire en laiton, en pixel art"
      />
    </div>
  )
}

function MaToc() {
  return (
    <div className="ma-toc">
      <div className="ma-toc-h" role="button" tabIndex={0} aria-expanded="false">
        <span>Sommaire</span>
        <span className="a-progt">0 % lu</span>
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
      <div className="ma-toc-l">
        <div>
          <a data-s="0" role="button" tabIndex={0}>
            On ne cherche plus, on demande
          </a>
          <a data-s="1" role="button" tabIndex={0}>
            Comment une IA choisit ses sources
          </a>
          <a data-s="2" role="button" tabIndex={0}>
            Les cinq leviers qui marchent
          </a>
          <a data-s="3" role="button" tabIndex={0}>
            Ce qui ne sert à rien
          </a>
          <a data-s="4" role="button" tabIndex={0}>
            SEO et GEO : ce qui change
          </a>
          <a data-s="5" role="button" tabIndex={0}>
            Et le fichier llms.txt ?
          </a>
          <a data-s="6" role="button" tabIndex={0}>
            Mesurer sa visibilité
          </a>
          <a data-s="7" role="button" tabIndex={0}>
            La checklist
          </a>
        </div>
      </div>
      <div className="a-prog">
        <i />
      </div>
    </div>
  )
}

function ATxt() {
  return (
    <article className="a-txt ma-txt">
      <div className="tldr">
        <div className="a-k">L’essentiel en 30 secondes</div>
        <ul>
          <li>Les IA citent des pages qui répondent clairement, avec des faits vérifiables.</li>
          <li>
            Votre marque doit être décrite de la même façon partout : site, Google, LinkedIn, annuaires.
          </li>
          <li>Les données structurées et une FAQ en clair aident les moteurs à vous comprendre.</li>
          <li>Être mentionné ailleurs (avis, presse, partenaires) compte autant que votre propre site.</li>
          <li>On mesure en interrogeant régulièrement les IA sur ses requêtes clés.</li>
        </ul>
      </div>
      <h2 data-s="0">On ne cherche plus, on demande</h2>
      <p>
        Pendant vingt ans, être visible voulait dire apparaître dans les dix liens bleus de Google.
        Aujourd’hui, une partie croissante de vos clients pose directement sa question à ChatGPT, à Perplexity
        ou aux aperçus IA de Google, et lit une réponse rédigée. Ils ne voient plus une liste de sites : ils
        voient quelques noms, parfois accompagnés de liens.
      </p>
      <p>
        Pour une entreprise, la question devient simple : quand quelqu’un demande « quelle agence pour… » ou
        « quel artisan à Paris pour… », votre nom fait-il partie de la réponse ? C’est l’objet du GEO, pour
        Generative Engine Optimization.
      </p>
      <h2 data-s="1">Comment une IA choisit ses sources</h2>
      <p>
        Les assistants qui citent leurs sources ne connaissent pas le web par cœur. Pour répondre à une
        question récente ou locale, ils lancent des recherches, lisent quelques pages, puis rédigent une
        synthèse. Les pages retenues ont souvent trois points communs : elles sont bien référencées, elles
        répondent clairement à la question, et leurs informations sont faciles à extraire.
      </p>
      <figure className="a-fig">
        <div className="a-fig-in">
          <img src="/images/img-feb43772.png" alt="" />
          <div className="ai a-ai">
            <div className="ai-q">
              Quelle agence pour créer le site de notre golf, près d’Aix-en-Provence ?
            </div>
            <div className="ai-a">
              <span className="ai-dot" />
              <div>
                Plusieurs studios travaillent avec des golfs. Les critères à regarder : réservation de départs
                en ligne, espace membres, expérience mobile… <span className="ai-cite">votre-marque.fr</span>
                <span className="ai-cite">annuaire-golf.fr</span>
              </div>
            </div>
          </div>
        </div>
        <figcaption>
          Une réponse générée cite rarement une seule source. Votre objectif : faire partie des pages citées,
          sur votre site et ailleurs.
        </figcaption>
      </figure>
      <p>
        Autrement dit, une IA cite plus volontiers une page qui dit « Un site vitrine prend en moyenne 4 à 8
        semaines » qu’une page qui promet « des délais adaptés à chaque projet ». La première phrase répond,
        la seconde ne dit rien.
      </p>
      <h2 data-s="2">Les cinq leviers qui marchent</h2>
      <h3>1. Répondre tout de suite</h3>
      <p>
        Chaque page importante devrait commencer par une réponse courte à la question qu’elle traite, en deux
        ou trois phrases. Le détail vient après. C’est utile pour vos lecteurs pressés, et c’est exactement le
        passage qu’une IA reprend.
      </p>
      <h3>2. Écrire des faits, pas des promesses</h3>
      <p>
        Prix de départ, délais, zones d’intervention, technologies, types de clients : tout ce qui est
        vérifiable et précis a plus de chances d’être repris qu’un slogan.
      </p>
      <h3>3. Structurer pour les machines</h3>
      <p>
        Les données structurées (organisation, services, FAQ, avis) décrivent votre activité dans un format
        que les moteurs lisent sans ambiguïté. Une FAQ rédigée en HTML, avec une question par titre, joue le
        même rôle pour le texte.
      </p>
      <blockquote>
        « Une IA ne devine pas ce que vous faites. Elle reprend ce qui est écrit clairement, au même endroit,
        de la même façon. »
      </blockquote>
      <h3>4. Raconter la même histoire partout</h3>
      <p>
        Votre site, votre fiche Google, votre page LinkedIn et les annuaires de votre secteur doivent décrire
        votre activité avec les mêmes mots. Quand les sources se contredisent, l’IA hésite, et cite quelqu’un
        d’autre.
      </p>
      <h3>5. Exister ailleurs que chez vous</h3>
      <p>
        Les réponses générées s’appuient aussi sur des sources tierces : avis clients, articles de presse
        locale, sites de partenaires, comparatifs indépendants. Chaque mention sérieuse renforce la confiance
        que le moteur accorde à votre marque.
      </p>
      <h2 data-s="3">Ce qui ne sert à rien</h2>
      <p>
        Répéter dix fois le même mot-clé, publier des dizaines d’articles creux générés à la chaîne, ou
        rédiger un « top 10 des meilleures agences » où vous vous classez premier : ces recettes vieillissent
        mal. Les moteurs savent les repérer, et elles abîment la crédibilité de votre site auprès des lecteurs
        humains.
      </p>
      <h2 data-s="4">SEO et GEO : ce qui change</h2>
      <div className="a-tabw">
        <table className="a-tab">
          <thead>
            <tr>
              <th />
              <th>SEO</th>
              <th>GEO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Objectif</td>
              <td>Apparaître dans la liste des résultats</td>
              <td>Être cité dans la réponse générée</td>
            </tr>
            <tr>
              <td>Ce qui compte</td>
              <td>Pertinence, technique, liens</td>
              <td>Clarté, faits vérifiables, cohérence de l’entité</td>
            </tr>
            <tr>
              <td>Format gagnant</td>
              <td>Pages complètes sur un sujet</td>
              <td>Réponses courtes en tête de page, FAQ, tableaux</td>
            </tr>
            <tr>
              <td>Mesure</td>
              <td>Positions, clics, Search Console</td>
              <td>Citations relevées, trafic venant des IA</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Les fondations restent les mêmes : un site rapide, bien structuré et utile. Le GEO ajoute une exigence
        de clarté et de cohérence que beaucoup de sites n’ont jamais eue.
      </p>
      <h2 data-s="5">Et le fichier llms.txt ?</h2>
      <p>
        Le fichier llms.txt, placé à la racine de votre site, résume votre activité et liste vos pages clés
        dans un format pensé pour les modèles de langage. Il est simple à produire et ne coûte presque rien.
        Son effet sur les citations n’est pas encore démontré : à ajouter, sans en attendre de miracle.
      </p>
      <div className="code a-code">
        <div>
          <span className="c-f"># Orion Studio</span>
        </div>
        <div>{'> Studio de design et de développement web basé à Paris.'}</div>
        <div />
        <div>
          <span className="c-k">## Expertises</span>
        </div>
        <div>- [Site internet](https://orion-studio.io/expertises/site-internet)</div>
        <div>- [GEO](https://orion-studio.io/expertises/geo)</div>
        <div />
        <div>
          <span className="c-k">## Questions fréquentes</span>
        </div>
        <div>- [FAQ](https://orion-studio.io/faq)</div>
      </div>
      <h2 data-s="6">Mesurer sa visibilité</h2>
      <p>
        Il n’existe pas encore de Search Console des IA. La méthode la plus fiable reste manuelle : choisir
        une dizaine de questions que posent vos clients, les poser chaque mois à ChatGPT, Perplexity et
        Gemini, et noter qui est cité. En parallèle, votre outil de statistiques montre les visites qui
        arrivent depuis ces assistants.
      </p>
      <h2 data-s="7">La checklist</h2>
      <ul className="a-check">
        <li role="checkbox" aria-checked="false" tabIndex={0}>
          <i />
          Chaque page clé commence par une réponse claire en deux ou trois phrases.
        </li>
        <li role="checkbox" aria-checked="false" tabIndex={0}>
          <i />
          Vos prix, délais, zones et spécialités sont écrits en toutes lettres.
        </li>
        <li role="checkbox" aria-checked="false" tabIndex={0}>
          <i />
          Une FAQ en HTML, une question par titre, des réponses de 40 à 60 mots.
        </li>
        <li role="checkbox" aria-checked="false" tabIndex={0}>
          <i />
          Données structurées : organisation, services, FAQ, avis.
        </li>
        <li role="checkbox" aria-checked="false" tabIndex={0}>
          <i />
          Même description de votre activité sur le site, Google, LinkedIn et les annuaires.
        </li>
        <li role="checkbox" aria-checked="false" tabIndex={0}>
          <i />
          Des avis récents et des mentions sur des sites tiers reconnus.
        </li>
        <li role="checkbox" aria-checked="false" tabIndex={0}>
          <i />
          Un relevé mensuel des citations sur vos dix requêtes principales.
        </li>
      </ul>
      <div className="a-ckc">
        <b>0</b> sur 7 points cochés
      </div>
      <div className="a-faq">
        <h2>Questions fréquentes</h2>
        <div className="mo-faq">
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Le GEO remplace-t-il le SEO ?</span>
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
              Non. Les IA qui citent des sources s’appuient en grande partie sur des pages déjà bien
              référencées. Le GEO s’ajoute au SEO : mêmes fondations, avec une exigence plus forte de clarté
              et de cohérence.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Combien de temps avant d’être cité ?</span>
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
              Il n’y a pas de délai garanti. Les assistants qui font une recherche en direct peuvent reprendre
              une page dès qu’elle est bien indexée ; ce que les modèles savent de mémoire évolue plus
              lentement, au fil de leurs mises à jour. D’où l’intérêt d’un relevé chaque mois.
            </p>
          </div>
          <div className="mo-q">
            <div className="mo-q-h">
              <span>Faut-il écrire différemment pour les IA ?</span>
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
              Pas vraiment : on écrit pour vos lecteurs, avec plus de rigueur. Une réponse claire en tête de
              page, des faits précis, une idée par titre. Ce qui aide une IA à vous citer aide aussi un client
              pressé à vous choisir.
            </p>
          </div>
        </div>
      </div>
      <div className="a-author">
        <span className="av av-lg">J</span>
        <div>
          <b>Julien</b>
          <span>
            Cofondateur d’Orion Studio. Conçoit des sites et des applications web depuis Paris, et suit de
            près l’arrivée des moteurs génératifs.
          </span>
          <Link to="/ressources" className="lnk">
            Tous ses articles
          </Link>
        </div>
      </div>
    </article>
  )
}

function MaBox() {
  return (
    <div className="ma-box">
      <div className="a-sbox">
        <div className="a-k">Analyse gratuite</div>
        <b>Que disent les IA de votre marque ?</b>
        <p>
          On interroge ChatGPT, Perplexity et Gemini sur vos requêtes clés, et on vous envoie le relevé avec
          nos recommandations.
        </p>
        <a className="btn btn-acc mo-btn">Analyser ma visibilité</a>
      </div>
      <div className="a-share ma-share">
        <span className="a-copy" role="button" tabIndex={0}>
          Copier le lien
        </span>
        <span>LinkedIn</span>
        <span>E-mail</span>
      </div>
    </div>
  )
}

function ALireEnsuite() {
  return (
    <section className="mo-sec">
      <div className="mo-shead mo-shead-row">
        <h2 className="mo-h2">À lire ensuite</h2>
        <Link to="/ressources" className="lnk">
          Tous les articles
        </Link>
      </div>
      <div className="mr-list ma-rel">
        <a
          className="mr-row"
          data-k="seo"
          data-soon="llms.txt : à quoi sert ce fichier, et faut-il l’ajouter ?"
        >
          <span className="r-im">
            <img src="/images/img-ea281d04.png" alt="" />
          </span>
          <div>
            <div className="k">
              <span>SEO & GEO</span>
              <span>5 min</span>
            </div>
            <h3>llms.txt : à quoi sert ce fichier, et faut-il l’ajouter ?</h3>
            <span className="r-date">2 septembre 2026</span>
          </div>
        </a>
        <a className="mr-row" data-k="seo" data-soon="SEO local : les dix réglages de votre fiche Google">
          <span className="r-im">
            <img src="/images/img-d67d96ba.png" alt="" />
          </span>
          <div>
            <div className="k">
              <span>SEO & GEO</span>
              <span>7 min</span>
            </div>
            <h3>SEO local : les dix réglages de votre fiche Google</h3>
            <span className="r-date">7 octobre 2026</span>
          </div>
        </a>
        <a
          className="mr-row"
          data-k="guides"
          data-soon="Shopify, Webflow ou sur-mesure : comment choisir en 2026"
        >
          <span className="r-im">
            <img src="/images/img-0294a67b.png" alt="" />
          </span>
          <div>
            <div className="k">
              <span>Guides</span>
              <span>8 min</span>
            </div>
            <h3>Shopify, Webflow ou sur-mesure : comment choisir en 2026</h3>
            <span className="r-date">21 octobre 2026</span>
          </div>
        </a>
      </div>
    </section>
  )
}

function MoFt() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Que disent les IA de votre marque ?<span className="serif">On vous le dit gratuitement.</span>
        </h2>
        <a className="btn btn-acc mo-btn">Analyser ma visibilité</a>{' '}
        <Link to="/ressources" className="btn btn-line mo-btn">
          Lire nos autres articles
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
          visibilité, en français et en anglais.
        </p>
        <div className="nl mo-nl">
          <div className="nl-k">La lettre d’Orion</div>
          <div className="nl-t">
            Un e-mail par mois sur le web, l’e-commerce et la visibilité dans les IA. Pas de spam, promis.
          </div>
          <div className="nl-f">
            <span>votre@email.fr</span>
            <a>S’inscrire</a>
          </div>
        </div>
        <div className="mo-fcols">
          <div className="mo-fc">
            <div className="fc-k">Expertises</div>
            <a>Site internet</a>
            <a>Développement & applications</a>
            <a>Automatisations</a>
            <a>SEO</a>
            <a>GEO</a>
            <a>Google Ads</a>
          </div>
          <div className="mo-fc">
            <div className="fc-k">Pour qui ?</div>
            <a>TPE & PME</a>
            <Link to="/golfs">Golfs</Link>
            <a>Indépendants</a>
            <a>Marques & e-commerçants</a>
          </div>
          <div className="mo-fc">
            <div className="fc-k">Studio</div>
            <Link to="/realisations">Réalisations</Link>
            <Link to="/le-studio">Le studio</Link>
            <a>Méthode</a>
            <a>Orion Admin</a>
            <a>Contact</a>
          </div>
          <div className="mo-fc">
            <div className="fc-k">Ressources</div>
            <Link to="/ressources">Articles</Link>
            <Link to="/ressources?cat=guides">Guides</Link>
            <a>Questions fréquentes</a>
            <a>Analyse gratuite</a>
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
          <img
            src="/images/le-ciel-et-la-constellation-d-orion-en-pixels-2.png"
            alt="Le ciel et la constellation d’Orion, en pixels"
          />
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
            <span>Mentions légales</span>
            <span>Confidentialité</span>
            <span>Cookies</span>
            <span>Plan du site</span>
          </div>
          <span>© 2026 Orion Studio SAS — RCS 938 775 368</span>
        </div>
      </div>
    </footer>
  )
}

export function Mobile() {
  return (
    <section className="artboard mo a-page">
      <MobileNav />
      <MoHero />
      <MaHero />
      <MaToc />
      <ATxt />
      <MaBox />
      <ALireEnsuite />
      <MoFt />
    </section>
  )
}
