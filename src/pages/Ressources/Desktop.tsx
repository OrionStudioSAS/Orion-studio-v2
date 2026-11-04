import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'
import { Footer } from '../../components/shared/Footer'

function FqHero() {
  return (
    <div className="fq-hero">
      <div>
        <div className="crumb">
          <Link to="/">
            Ressources / <b>Tous les articles</b>
          </Link>
        </div>
        <h1 className="s-h1 r-h1">
          <span className="s-a">Ressources</span>
          <span className="serif">pour faire grandir votre site.</span>
        </h1>
        <p className="lead r-lead">
          Guides, méthodes et retours d’expérience sur le web, l’e-commerce, le SEO et la visibilité dans les
          IA. Écrits par l’équipe qui fait les sites.
        </p>
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
              placeholder="Rechercher un article : Shopify, GEO, devis…"
              aria-label="Rechercher un article"
              autoComplete="off"
            />
          </label>
        </div>
        <div className="fq-sug">
          <span role="button" tabIndex={0}>
            GEO
          </span>
          <span role="button" tabIndex={0}>
            Shopify
          </span>
          <span role="button" tabIndex={0}>
            Refonte
          </span>
          <span role="button" tabIndex={0}>
            Google Ads
          </span>
        </div>
      </div>
    </div>
  )
}

function RTabs() {
  return (
    <div className="r-tabs">
      <div className="r-tabs-in">
        <span className="on" data-k="all" role="button" tabIndex={0}>
          Tous
        </span>
        <span className="" data-k="guides" role="button" tabIndex={0}>
          Guides
        </span>
        <span className="" data-k="seo" role="button" tabIndex={0}>
          SEO & GEO
        </span>
        <span className="" data-k="shop" role="button" tabIndex={0}>
          E-commerce
        </span>
        <span className="" data-k="auto" role="button" tabIndex={0}>
          Automatisations
        </span>
        <span className="" data-k="methode" role="button" tabIndex={0}>
          Méthode
        </span>
        <span className="" data-k="golf" role="button" tabIndex={0}>
          Golf
        </span>
      </div>
      <span className="r-count" aria-live="polite">
        12 articles
      </span>
    </div>
  )
}

function RWrap() {
  return (
    <div className="r-wrap">
      <Link to="/ressources/etre-cite-par-chatgpt-perplexity" className="r-feat" data-k="seo">
        <span className="r-im">
          <img src="/images/8da8d8ba5e08da.png" alt="" />
        </span>
        <div className="r-feat-b">
          <div className="k">
            <span>À la une · SEO & GEO</span>
            <span>11 min de lecture</span>
          </div>
          <h2>Être cité par ChatGPT et Perplexity : ce qui marche vraiment</h2>
          <p>
            Vos clients posent leurs questions aux IA. Voici ce qui fait qu’une marque apparaît dans leurs
            réponses, et ce qui ne sert à rien.
          </p>
          <div className="r-by">
            <span className="av">J</span>
            <div>
              <b>Julien</b>28 octobre 2026
            </div>
          </div>
          <span className="lnk">Lire l’article</span>
        </div>
      </Link>
    </div>
  )
}

function RGrid() {
  return (
    <div className="r-grid">
      <a
        className="r-card"
        data-k="guides"
        data-soon="Shopify, Webflow ou sur-mesure : comment choisir en 2026"
      >
        <span className="r-im">
          <img src="/images/015f650fa5e47b.png" alt="" />
        </span>
        <div className="k">
          <span>Guides</span>
          <span>8 min de lecture</span>
        </div>
        <h3>Shopify, Webflow ou sur-mesure : comment choisir en 2026</h3>
        <span className="r-date">21 octobre 2026</span>
      </a>
      <a
        className="r-card"
        data-k="methode"
        data-soon="Refonte de site : le cahier des charges en douze questions"
      >
        <span className="r-im">
          <img src="/images/aee46e2ea20958.png" alt="" />
        </span>
        <div className="k">
          <span>Méthode</span>
          <span>6 min de lecture</span>
        </div>
        <h3>Refonte de site : le cahier des charges en douze questions</h3>
        <span className="r-date">14 octobre 2026</span>
      </a>
      <a className="r-card" data-k="seo" data-soon="SEO local : les dix réglages de votre fiche Google">
        <span className="r-im">
          <img src="/images/bf5c99b2affb23.png" alt="" />
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
        data-k="golf"
        data-soon="Site de golf : ce que les joueurs regardent avant de réserver"
      >
        <span className="r-im">
          <img src="/images/43c1e04cd1ba76.png" alt="" />
        </span>
        <div className="k">
          <span>Golf</span>
          <span>9 min de lecture</span>
        </div>
        <h3>Site de golf : ce que les joueurs regardent avant de réserver</h3>
        <span className="r-date">30 septembre 2026</span>
      </a>
      <a className="r-card" data-k="auto" data-soon="Automatiser ses devis avec Make : un exemple pas à pas">
        <span className="r-im">
          <img src="/images/8353e035bb2d3a.png" alt="" />
        </span>
        <div className="k">
          <span>Automatisations</span>
          <span>10 min de lecture</span>
        </div>
        <h3>Automatiser ses devis avec Make : un exemple pas à pas</h3>
        <span className="r-date">23 septembre 2026</span>
      </a>
      <div className="r-cta">
        <svg
          className="o-star"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C10 4.4 15.6 10 20 10C15.6 10 10 15.6 10 20C10 15.6 4.4 10 0 10C4.4 10 10 4.4 10 0Z"
            fill="#FF4D1A"
          />
        </svg>
        <b>Et votre site, il en est où ?</b>
        <p>
          On l’analyse gratuitement : design, SEO, vitesse, visibilité dans les IA. Vous recevez l’analyse et
          une maquette par e-mail.
        </p>
        <a className="btn btn-acc btn-s">
          Analyser mon site <span className="kbd">↵</span>
        </a>
      </div>
      <a
        className="r-card"
        data-k="guides"
        data-soon="Google Ads pour une PME : par où commencer avec un petit budget"
      >
        <span className="r-im">
          <img src="/images/f963f77cbfab80.png" alt="" />
        </span>
        <div className="k">
          <span>Guides</span>
          <span>8 min de lecture</span>
        </div>
        <h3>Google Ads pour une PME : par où commencer avec un petit budget</h3>
        <span className="r-date">16 septembre 2026</span>
      </a>
      <a className="r-card" data-k="shop" data-soon="Fiches produits Shopify : anatomie d’une page qui vend">
        <span className="r-im">
          <img src="/images/514c26ed6ab15b.png" alt="" />
        </span>
        <div className="k">
          <span>E-commerce</span>
          <span>9 min de lecture</span>
        </div>
        <h3>Fiches produits Shopify : anatomie d’une page qui vend</h3>
        <span className="r-date">9 septembre 2026</span>
      </a>
      <a
        className="r-card"
        data-k="seo"
        data-soon="llms.txt : à quoi sert ce fichier, et faut-il l’ajouter ?"
      >
        <span className="r-im">
          <img src="/images/2140baa9120499.png" alt="" />
        </span>
        <div className="k">
          <span>SEO & GEO</span>
          <span>5 min de lecture</span>
        </div>
        <h3>llms.txt : à quoi sert ce fichier, et faut-il l’ajouter ?</h3>
        <span className="r-date">2 septembre 2026</span>
      </a>
      <a
        className="r-card"
        data-k="guides"
        data-soon="Indépendants : les cinq pages indispensables de votre site"
      >
        <span className="r-im">
          <img src="/images/b177a26d522956.png" alt="" />
        </span>
        <div className="k">
          <span>Guides</span>
          <span>6 min de lecture</span>
        </div>
        <h3>Indépendants : les cinq pages indispensables de votre site</h3>
        <span className="r-date">26 août 2026</span>
      </a>
      <a className="r-card" data-k="methode" data-soon="Espace client : quand faut-il en créer un ?">
        <span className="r-im">
          <img src="/images/bc4f84b8174216.png" alt="" />
        </span>
        <div className="k">
          <span>Méthode</span>
          <span>7 min de lecture</span>
        </div>
        <h3>Espace client : quand faut-il en créer un ?</h3>
        <span className="r-date">19 août 2026</span>
      </a>
      <a
        className="r-card"
        data-k="guides"
        data-soon="Vitesse de site : ce qui ralentit vraiment votre page d’accueil"
      >
        <span className="r-im">
          <img src="/images/1fc3e456af0ef4.png" alt="" />
        </span>
        <div className="k">
          <span>Guides</span>
          <span>6 min de lecture</span>
        </div>
        <h3>Vitesse de site : ce qui ralentit vraiment votre page d’accueil</h3>
        <span className="r-date">12 août 2026</span>
      </a>
    </div>
  )
}

function REmpty() {
  return (
    <div className="r-empty" hidden>
      <b>Aucun article ne correspond.</b>
      <p>Essayez un autre mot, ou parcourez tous les articles.</p>
      <a className="lnk r-reset">Voir tous les articles</a>
    </div>
  )
}

function GCta() {
  return (
    <div className="g-cta">
      <Footer>
        <div className="cta">
          <h2>
            Une question sur votre site ?<span className="serif">On y répond en trente minutes.</span>
          </h2>
          <div className="cta-r">
            <div className="cta-btns">
              <a className="btn btn-line">Réserver un appel</a>
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
    <section className="artboard g-page r-page">
      <Nav />
      <MmVeilLive />
      <FqHero />
      <RTabs />
      <RWrap />
      <RGrid />
      <REmpty />
      <GCta />
    </section>
  )
}
