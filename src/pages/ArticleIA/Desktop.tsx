import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function AHead() {
  return (
    <header className="a-head">
      <div className="crumb">
        <Link to="/ressources">
          Ressources / SEO & GEO / <b>Être cité par les IA</b>
        </Link>
      </div>
      <div className="a-meta">
        <span>SEO & GEO</span>
        <span>11 min de lecture</span>
        <span>Publié le 28 octobre 2026</span>
        <span>Mis à jour le 2 novembre 2026</span>
      </div>
      <h1 className="a-h1">Être cité par ChatGPT et Perplexity : ce qui marche vraiment</h1>
      <p className="a-dek">
        Vos clients posent leurs questions aux IA avant de taper une recherche. Voici ce qui fait qu’une
        marque apparaît dans leurs réponses, ce qui ne sert à rien, et comment le mesurer.
      </p>
      <div className="a-by">
        <span className="av">J</span>
        <div>
          <b>Julien</b>Cofondateur d’Orion Studio
        </div>
        <div className="a-share">
          <span className="a-copy" role="button" tabIndex={0}>
            Copier le lien
          </span>
          <span>LinkedIn</span>
          <span>E-mail</span>
        </div>
      </div>
    </header>
  )
}

function AHero() {
  return (
    <div className="a-hero">
      <img
        src="/images/une-bibliotheque-ancienne-avec-un-planetaire-en.png"
        alt="Une bibliothèque ancienne avec un planétaire en laiton, en pixel art"
      />
    </div>
  )
}

function ABody() {
  return (
    <div className="a-body">
      <aside className="a-toc">
        <div className="a-k">Sommaire</div>
        <a className="on" data-s="0" role="button" tabIndex={0}>
          <i>01</i>On ne cherche plus, on demande
        </a>
        <a className="" data-s="1" role="button" tabIndex={0}>
          <i>02</i>Comment une IA choisit ses sources
        </a>
        <a className="" data-s="2" role="button" tabIndex={0}>
          <i>03</i>Les cinq leviers qui marchent
        </a>
        <a className="" data-s="3" role="button" tabIndex={0}>
          <i>04</i>Ce qui ne sert à rien
        </a>
        <a className="" data-s="4" role="button" tabIndex={0}>
          <i>05</i>SEO et GEO : ce qui change
        </a>
        <a className="" data-s="5" role="button" tabIndex={0}>
          <i>06</i>Et le fichier llms.txt ?
        </a>
        <a className="" data-s="6" role="button" tabIndex={0}>
          <i>07</i>Mesurer sa visibilité
        </a>
        <a className="" data-s="7" role="button" tabIndex={0}>
          <i>08</i>La checklist
        </a>
        <div className="a-prog">
          <i />
        </div>
        <span className="a-progt">0 % lu</span>
      </aside>
      <article className="a-txt">
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
          Aujourd’hui, une partie croissante de vos clients pose directement sa question à ChatGPT, à
          Perplexity ou aux aperçus IA de Google, et lit une réponse rédigée. Ils ne voient plus une liste de
          sites : ils voient quelques noms, parfois accompagnés de liens.
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
                  Plusieurs studios travaillent avec des golfs. Les critères à regarder : réservation de
                  départs en ligne, espace membres, expérience mobile…{' '}
                  <span className="ai-cite">votre-marque.fr</span>
                  <span className="ai-cite">annuaire-golf.fr</span>
                </div>
              </div>
            </div>
          </div>
          <figcaption>
            Une réponse générée cite rarement une seule source. Votre objectif : faire partie des pages
            citées, sur votre site et ailleurs.
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
          Chaque page importante devrait commencer par une réponse courte à la question qu’elle traite, en
          deux ou trois phrases. Le détail vient après. C’est utile pour vos lecteurs pressés, et c’est
          exactement le passage qu’une IA reprend.
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
          « Une IA ne devine pas ce que vous faites. Elle reprend ce qui est écrit clairement, au même
          endroit, de la même façon. »
        </blockquote>
        <h3>4. Raconter la même histoire partout</h3>
        <p>
          Votre site, votre fiche Google, votre page LinkedIn et les annuaires de votre secteur doivent
          décrire votre activité avec les mêmes mots. Quand les sources se contredisent, l’IA hésite, et cite
          quelqu’un d’autre.
        </p>
        <h3>5. Exister ailleurs que chez vous</h3>
        <p>
          Les réponses générées s’appuient aussi sur des sources tierces : avis clients, articles de presse
          locale, sites de partenaires, comparatifs indépendants. Chaque mention sérieuse renforce la
          confiance que le moteur accorde à votre marque.
        </p>
        <h2 data-s="3">Ce qui ne sert à rien</h2>
        <p>
          Répéter dix fois le même mot-clé, publier des dizaines d’articles creux générés à la chaîne, ou
          rédiger un « top 10 des meilleures agences » où vous vous classez premier : ces recettes
          vieillissent mal. Les moteurs savent les repérer, et elles abîment la crédibilité de votre site
          auprès des lecteurs humains.
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
          Les fondations restent les mêmes : un site rapide, bien structuré et utile. Le GEO ajoute une
          exigence de clarté et de cohérence que beaucoup de sites n’ont jamais eue.
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
          <div className="acc">
            <div className="q">
              <div className="q-h">
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
            <div className="q">
              <div className="q-h">
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
                Il n’y a pas de délai garanti. Les assistants qui font une recherche en direct peuvent
                reprendre une page dès qu’elle est bien indexée ; ce que les modèles savent de mémoire évolue
                plus lentement, au fil de leurs mises à jour. D’où l’intérêt d’un relevé chaque mois.
              </p>
            </div>
            <div className="q">
              <div className="q-h">
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
                page, des faits précis, une idée par titre. Ce qui aide une IA à vous citer aide aussi un
                client pressé à vous choisir.
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
      <aside className="a-side">
        <div className="a-sbox">
          <div className="a-k">Analyse gratuite</div>
          <b>Que disent les IA de votre marque ?</b>
          <p>
            On interroge ChatGPT, Perplexity et Gemini sur vos requêtes clés, et on vous envoie le relevé avec
            nos recommandations.
          </p>
          <a className="btn btn-acc btn-s">Analyser ma visibilité</a>
        </div>
        <div className="a-sbox a-sbox-l">
          <div className="a-k">Dans cet article</div>
          <span>Un tableau SEO / GEO</span>
          <span>Un exemple de llms.txt</span>
          <span>Une checklist en 7 points</span>
        </div>
      </aside>
    </div>
  )
}

function ALireEnsuite() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '96px' }}>
        <h2 className="h2">À lire ensuite</h2>
        <Link to="/ressources" className="lnk">
          Tous les articles
        </Link>
      </div>
      <div className="r-grid" style={{ paddingBottom: '112px' }}>
        <a
          className="r-card"
          data-k="seo"
          data-soon="llms.txt : à quoi sert ce fichier, et faut-il l’ajouter ?"
        >
          <span className="r-im">
            <img src="/images/img-ea281d04.png" alt="" />
          </span>
          <div className="k">
            <span>SEO & GEO</span>
            <span>5 min de lecture</span>
          </div>
          <h3>llms.txt : à quoi sert ce fichier, et faut-il l’ajouter ?</h3>
          <span className="r-date">2 septembre 2026</span>
        </a>
        <a className="r-card" data-k="seo" data-soon="SEO local : les dix réglages de votre fiche Google">
          <span className="r-im">
            <img src="/images/img-d67d96ba.png" alt="" />
          </span>
          <div className="k">
            <span>SEO & GEO</span>
            <span>7 min de lecture</span>
          </div>
          <h3>SEO local : les dix réglages de votre fiche Google</h3>
          <span className="r-date">7 octobre 2026</span>
        </a>
        <a
          className="r-card"
          data-k="guides"
          data-soon="Shopify, Webflow ou sur-mesure : comment choisir en 2026"
        >
          <span className="r-im">
            <img src="/images/img-0294a67b.png" alt="" />
          </span>
          <div className="k">
            <span>Guides</span>
            <span>8 min de lecture</span>
          </div>
          <h3>Shopify, Webflow ou sur-mesure : comment choisir en 2026</h3>
          <span className="r-date">21 octobre 2026</span>
        </a>
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
            Que disent les IA de votre marque ?<span className="serif">On vous le dit gratuitement.</span>
          </h2>
          <div className="cta-r">
            <div className="cta-btns">
              <Link to="/ressources" className="btn btn-line">
                Lire nos autres articles
              </Link>
              <a className="btn btn-acc">
                Analyser ma visibilité <span className="kbd">↵</span>
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
    <section className="artboard g-page a-page">
      <Nav />
      <MmVeilLive />
      <AHead />
      <AHero />
      <ABody />
      <ALireEnsuite />
      <GCta />
    </section>
  )
}
