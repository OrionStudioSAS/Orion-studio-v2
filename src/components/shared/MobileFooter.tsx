import { Link } from 'react-router-dom'

export function MobileFooter() {
  return (
    <footer className="mo-ft">
      <div className="mo-cta">
        <h2>
          Un projet en tête ?<span className="serif">Construisons-le.</span>
        </h2>
        <a className="btn btn-acc mo-btn">Démarrer un projet</a>{' '}
        <a className="btn btn-line mo-btn">Analyser mon site</a>{' '}
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
