import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function FooterNantes({ children }: { children: ReactNode }) {
  return (
    <footer className="dark ft">
      {children}
      <div className="ft-main">
        <div className="ft-l">
          <span className="logo">
            <img className="pxsvg logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
            <img className="pxsvg logo-w" src="/px/logo-w-438c9e6d.svg" alt="" width={151} height={21} />
          </span>
          <p>
            Studio de design et de développement web entre Paris et Nantes. Sites sur-mesure, e-commerce,
            applications et visibilité.
          </p>
        </div>
        <div className="ft-cols">
          <div className="fc">
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
          <div className="fc">
            <div className="fc-k">Pour qui ?</div>
            <Link to="/pour-qui/tpe-pme">TPE & PME</Link>
            <Link to="/pour-qui/golfs">Golfs</Link>
            <Link to="/pour-qui/independants">Indépendants</Link>
            <Link to="/pour-qui/marques-e-commerce">Marques & e-commerçants</Link>
            <Link to="/pour-qui/start-up">Start-up</Link>
          </div>
          <div className="fc">
            <div className="fc-k">Studio</div>
            <Link to="/realisations">Réalisations</Link>
            <Link to="/orion-admin">Orion Admin</Link>
            <Link to="/le-studio">Le studio</Link>
            <a>Contact</a>
          </div>
          <div className="fc">
            <div className="fc-k">Ressources</div>
            <Link to="/ressources">Articles</Link>
            <Link to="/ressources?cat=guides">Guides</Link>
            <Link to="/faq">Questions fréquentes</Link>
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
          <b>Nantes</b>
          <span>6 rue Merle, 06400</span>
          <a>Itinéraire</a>
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
            src="/images/926133384353c5.png"
            alt="Le ciel de Nantes et la constellation d’Orion, en pixels"
          />
          <img
            className="pxsvg bigword"
            src="/px/bigword-b79decb3.svg"
            alt=""
            width={1530}
            height={147}
            style={{ left: '-45px', top: '158px', opacity: '0.16' }}
          />
          <i className="betel" style={{ left: '746px', top: '78px' }} />
          <span className="orio" style={{ left: '588px', top: '62px' }} title="Orio et Bételgeuse">
            <span className="orio-in">
              <img className="pxsvg" src="/px/art-7159fa31.svg" alt="" width={132} height={138} />
            </span>
          </span>
        </div>
        <div className="ft-legal">
          <span>© 2026 Orion Studio SAS — RCS 938 775 368</span>
          <div>
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/confidentialite">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
