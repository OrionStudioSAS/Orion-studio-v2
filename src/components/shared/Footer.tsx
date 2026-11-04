import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="dark ft">
      {children}
      <div className="ft-main">
        <div className="ft-l">
          <span className="logo">
            <img className="px logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
            <img className="px logo-w" src="/px/logo-w-438c9e6d.svg" alt="" width={151} height={21} />
          </span>
          <p>
            Studio de design et de développement web basé à Paris. Sites sur-mesure, e-commerce, applications
            et visibilité, en français et en anglais.
          </p>
          <div className="nl">
            <div className="nl-k">La lettre d’Orion</div>
            <div className="nl-t">
              Un e-mail par mois sur le web, l’e-commerce et la visibilité dans les IA. Pas de spam, promis.
            </div>
            <div className="nl-f">
              <span>votre@email.fr</span>
              <a>S’inscrire</a>
            </div>
          </div>
        </div>
        <div className="ft-cols">
          <div className="fc">
            <div className="fc-k">Expertises</div>
            <a>Site internet</a>
            <a>Développement & applications</a>
            <a>Automatisations</a>
            <a>SEO</a>
            <a>GEO</a>
            <a>Google Ads</a>
          </div>
          <div className="fc">
            <div className="fc-k">Pour qui ?</div>
            <a>TPE & PME</a>
            <Link to="/golfs">Golfs</Link>
            <a>Indépendants</a>
            <a>Marques & e-commerçants</a>
          </div>
          <div className="fc">
            <div className="fc-k">Studio</div>
            <Link to="/realisations">Réalisations</Link>
            <Link to="/le-studio">Le studio</Link>
            <a>Méthode</a>
            <a>Orion Admin</a>
            <a>Contact</a>
          </div>
          <div className="fc">
            <div className="fc-k">Ressources</div>
            <Link to="/ressources">Articles</Link>
            <Link to="/ressources?cat=guides">Guides</Link>
            <a>Questions fréquentes</a>
            <a>Analyse gratuite</a>
          </div>
        </div>
      </div>
      <div className="ft-cards">
        <div>
          <b>Paris</b>
          <span>60 rue François Ier, 75008</span>
          <a>Itinéraire</a>
        </div>
        <div>
          <b>Partout ailleurs</b>
          <span>En France et à l’international, en visio ou sur place</span>
          <a>Réserver un appel</a>
        </div>
        <div>
          <b>Un appel ?</b>
          <span>30 minutes avec Julien ou Théo</span>
          <a>Réserver un créneau</a>
        </div>
        <div>
          <b>Suivre</b>
          <span>LinkedIn · Instagram</span>
          <a>Voir nos coulisses</a>
        </div>
      </div>
      <div className="ft-sky">
        <div className="hm-layer">
          <img
            src="/images/le-ciel-et-la-constellation-d-orion-en-pixels.png"
            alt="Le ciel et la constellation d’Orion, en pixels"
          />
          <img
            className="px bigword"
            src="/px/bigword-b79decb3.svg"
            alt=""
            width={1530}
            height={147}
            style={{ left: '-45px', top: '158px', opacity: '0.16' }}
          />
          <i className="betel" style={{ left: '746px', top: '78px' }} />
          <span className="orio" style={{ left: '588px', top: '62px' }} title="Orio et Bételgeuse">
            <span className="orio-in">
              <img className="px" src="/px/art-7159fa31.svg" alt="" width={132} height={138} />
            </span>
          </span>
        </div>
        <div className="ft-legal">
          <span>© 2026 Orion Studio SAS — RCS 938 775 368</span>
          <div>
            <span>Mentions légales</span>
            <span>Confidentialité</span>
            <span>Cookies</span>
            <span>Plan du site</span>
          </div>
          <div className="ft-lang">
            <span className="on">Français</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
