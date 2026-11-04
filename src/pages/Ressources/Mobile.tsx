import { Link } from 'react-router-dom'
import { MobileNav } from '../../components/shared/MobileNav'

function MoHero() {
  return (
    <section className="mo-hero mr-hero">
      <div className="crumb">
        <Link to="/">
          Ressources / <b>Tous les articles</b>
        </Link>
      </div>
      <h1 className="mo-h1">
        Ressources<span className="serif">pour faire grandir votre site.</span>
      </h1>
      <p className="mo-lead">
        Guides, méthodes et retours d’expérience sur le web, l’e-commerce, le SEO et la visibilité dans les
        IA.
      </p>
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
          placeholder="Shopify, GEO, devis…"
          aria-label="Rechercher un article"
          autoComplete="off"
        />
      </label>
    </section>
  )
}

function MrTabs() {
  return (
    <div className="mr-tabs">
      <div className="mr-tabs-in">
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
    </div>
  )
}

function MrCnt() {
  return (
    <div className="mr-cnt">
      <span className="r-count" aria-live="polite">
        12 articles
      </span>
    </div>
  )
}

function MrFeat() {
  return (
    <Link to="/ressources/etre-cite-par-chatgpt-perplexity" className="mr-feat" data-k="seo">
      <span className="r-im">
        <img src="/images/img-b2b421e0.png" alt="" />
      </span>
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
    </Link>
  )
}

function MrList() {
  return (
    <div className="mr-list">
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
      <a
        className="mr-row"
        data-k="methode"
        data-soon="Refonte de site : le cahier des charges en douze questions"
      >
        <span className="r-im">
          <img src="/images/img-588fba6e.png" alt="" />
        </span>
        <div>
          <div className="k">
            <span>Méthode</span>
            <span>6 min</span>
          </div>
          <h3>Refonte de site : le cahier des charges en douze questions</h3>
          <span className="r-date">14 octobre 2026</span>
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
        data-k="golf"
        data-soon="Site de golf : ce que les joueurs regardent avant de réserver"
      >
        <span className="r-im">
          <img src="/images/img-a97491bf.png" alt="" />
        </span>
        <div>
          <div className="k">
            <span>Golf</span>
            <span>9 min</span>
          </div>
          <h3>Site de golf : ce que les joueurs regardent avant de réserver</h3>
          <span className="r-date">30 septembre 2026</span>
        </div>
      </a>
      <a className="mr-row" data-k="auto" data-soon="Automatiser ses devis avec Make : un exemple pas à pas">
        <span className="r-im">
          <img src="/images/img-2c68e65f.png" alt="" />
        </span>
        <div>
          <div className="k">
            <span>Automatisations</span>
            <span>10 min</span>
          </div>
          <h3>Automatiser ses devis avec Make : un exemple pas à pas</h3>
          <span className="r-date">23 septembre 2026</span>
        </div>
      </a>
      <div className="r-cta mr-cta">
        <b>Et votre site, il en est où ?</b>
        <p>
          On l’analyse gratuitement : design, SEO, vitesse, visibilité dans les IA. Vous recevez l’analyse et
          une maquette par e-mail.
        </p>
        <a className="btn btn-acc mo-btn">Analyser mon site</a>
      </div>
      <a
        className="mr-row"
        data-k="guides"
        data-soon="Google Ads pour une PME : par où commencer avec un petit budget"
      >
        <span className="r-im">
          <img src="/images/img-eba41a20.png" alt="" />
        </span>
        <div>
          <div className="k">
            <span>Guides</span>
            <span>8 min</span>
          </div>
          <h3>Google Ads pour une PME : par où commencer avec un petit budget</h3>
          <span className="r-date">16 septembre 2026</span>
        </div>
      </a>
      <a className="mr-row" data-k="shop" data-soon="Fiches produits Shopify : anatomie d’une page qui vend">
        <span className="r-im">
          <img src="/images/img-54ba4ddb.png" alt="" />
        </span>
        <div>
          <div className="k">
            <span>E-commerce</span>
            <span>9 min</span>
          </div>
          <h3>Fiches produits Shopify : anatomie d’une page qui vend</h3>
          <span className="r-date">9 septembre 2026</span>
        </div>
      </a>
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
      <a
        className="mr-row"
        data-k="guides"
        data-soon="Indépendants : les cinq pages indispensables de votre site"
      >
        <span className="r-im">
          <img src="/images/img-8b2fe8cc.png" alt="" />
        </span>
        <div>
          <div className="k">
            <span>Guides</span>
            <span>6 min</span>
          </div>
          <h3>Indépendants : les cinq pages indispensables de votre site</h3>
          <span className="r-date">26 août 2026</span>
        </div>
      </a>
      <a className="mr-row" data-k="methode" data-soon="Espace client : quand faut-il en créer un ?">
        <span className="r-im">
          <img src="/images/img-66a6a0f8.png" alt="" />
        </span>
        <div>
          <div className="k">
            <span>Méthode</span>
            <span>7 min</span>
          </div>
          <h3>Espace client : quand faut-il en créer un ?</h3>
          <span className="r-date">19 août 2026</span>
        </div>
      </a>
      <a
        className="mr-row"
        data-k="guides"
        data-soon="Vitesse de site : ce qui ralentit vraiment votre page d’accueil"
      >
        <span className="r-im">
          <img src="/images/img-cecc2f45.png" alt="" />
        </span>
        <div>
          <div className="k">
            <span>Guides</span>
            <span>6 min</span>
          </div>
          <h3>Vitesse de site : ce qui ralentit vraiment votre page d’accueil</h3>
          <span className="r-date">12 août 2026</span>
        </div>
      </a>
    </div>
  )
}

function REmpty() {
  return (
    <div className="r-empty mr-empty" hidden>
      <b>Aucun article ne correspond.</b>
      <p>Essayez un autre mot, ou parcourez tous les articles.</p>
      <a className="lnk r-reset">Voir tous les articles</a>
    </div>
  )
}

function MrNl() {
  return (
    <div className="mr-nl">
      <b>La lettre d’Orion</b>
      <p>Un e-mail par mois avec le meilleur de ces articles, et rien d’autre.</p>
      <div className="nl-f">
        <span>votre@email.fr</span>
        <a>S’inscrire</a>
      </div>
    </div>
  )
}

function MoFt() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Une question sur votre site ?<span className="serif">On y répond en trente minutes.</span>
        </h2>
        <a className="btn btn-acc mo-btn">Analyser mon site</a>{' '}
        <a className="btn btn-line mo-btn">Réserver un appel</a>{' '}
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
    <section className="artboard mo r-page">
      <MobileNav />
      <MoHero />
      <MrTabs />
      <MrCnt />
      <MrFeat />
      <MrList />
      <REmpty />
      <MrNl />
      <MoFt />
    </section>
  )
}
