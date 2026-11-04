import { Link, NavLink, useLocation } from 'react-router-dom'

const navClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'on' : '')

export function Nav() {
  const { pathname } = useLocation()
  return (
    <header className="nav">
      <Link to="/" className="logo">
        <img className="px logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
        <img className="px logo-w" src="/px/logo-w-ad3e722d.svg" alt="" width={151} height={21} />
      </Link>
      <nav className="nav-links">
        <a data-mm="exp">
          Expertises
          <svg
            className="chev"
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 0.5L4 4L7.5 0.5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </a>
        <a className={pathname.startsWith('/golfs') ? 'on' : ''} data-mm="who">
          Pour qui ?
          <svg
            className="chev"
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 0.5L4 4L7.5 0.5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </a>
        <NavLink to="/realisations" className={navClass}>
          Réalisations
        </NavLink>
        <NavLink to="/le-studio" className={navClass}>
          Le studio
        </NavLink>
        <NavLink to="/ressources" className={navClass}>
          Ressources
        </NavLink>
      </nav>
      <div className="nav-r">
        <span className="lang">
          <b>FR</b> / EN
        </span>
        <a className="btn btn-ghost btn-s">Analyser mon site</a>{' '}
        <a className="btn btn-ink btn-s">
          Démarrer un projet <span className="kbd">P</span>
        </a>
      </div>
      <div className="mm-live" data-panel="exp">
        <div className="mm">
          <div className="mm-in">
            <div className="mm-col">
              <div className="mm-k">Web & développement</div>
              <a className="mm-it">
                <img className="px picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
                <div>
                  <b>Site internet</b>
                  <span>Sites vitrines et refontes sur-mesure, rapides et simples à gérer.</span>
                </div>
              </a>
              <a className="mm-it">
                <img className="px picon" src="/px/picon-8236c841.svg" alt="" width={20} height={20} />
                <div>
                  <b>Développement & applications</b>
                  <span>Applications web, espaces clients, outils métiers et SaaS.</span>
                </div>
              </a>
              <a className="mm-it">
                <img className="px picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
                <div>
                  <b>Automatisations</b>
                  <span>Formulaires, CRM, devis, relances : vos tâches répétitives, automatisées.</span>
                </div>
              </a>
            </div>
            <div className="mm-col">
              <div className="mm-k">Marketing digital</div>
              <a className="mm-it">
                <img className="px picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
                <div>
                  <b>SEO</b>
                  <span>Audit, technique et contenus pour remonter sur Google.</span>
                </div>
              </a>
              <a className="mm-it">
                <img className="px picon" src="/px/picon-84c912e7.svg" alt="" width={20} height={20} />
                <div>
                  <b>GEO</b>
                  <span>Être cité par ChatGPT, Perplexity et les réponses IA de Google.</span>
                </div>
              </a>
              <a className="mm-it">
                <img className="px picon" src="/px/picon-011bf99b.svg" alt="" width={20} height={20} />
                <div>
                  <b>Google Ads</b>
                  <span>Campagnes Search et Performance Max, pilotées au nombre de contacts.</span>
                </div>
              </a>
            </div>
            <Link to="/ressources/etre-cite-par-chatgpt-perplexity" className="mm-feat">
              <img src="/images/img-f166a44a.png" alt="" />
              <div className="mm-fk">Guide · 11 min</div>
              <b>Être cité par ChatGPT et Perplexity : ce qui marche vraiment</b>
              <span className="lnk">Lire le guide</span>
            </Link>
          </div>
          <div className="mm-foot">
            <span>
              Pas sûr de ce qu’il vous faut ? On analyse votre site gratuitement et on vous envoie une
              maquette.
            </span>
            <a className="btn btn-acc btn-s">Analyser mon site</a>
          </div>
        </div>
      </div>
      <div className="mm-live" data-panel="who">
        <div className="mm">
          <div className="mm-in">
            <div className="mm-col mm-col-2">
              <div className="mm-k">Pour qui ?</div>
              <div className="mm-g2">
                <a className="mm-it mm-it-w">
                  <img className="px picon" src="/px/picon-4780f153.svg" alt="" width={20} height={20} />
                  <div>
                    <b>TPE & PME</b>
                    <span>Un site qui fait venir des demandes, sans y passer vos soirées.</span>
                    <small>Ex. Association des Entrepreneurs du Vexin</small>
                  </div>
                </a>
                <Link to="/golfs" className="mm-it mm-it-w">
                  <img className="px picon" src="/px/picon-1bac5105.svg" alt="" width={20} height={20} />
                  <div>
                    <b>Golfs</b>
                    <span>Réservation de départs, espace membres, boutique et événements.</span>
                    <small>Ex. Château l’Arc Golf Club</small>
                  </div>
                </Link>
                <a className="mm-it mm-it-w">
                  <img className="px picon" src="/px/picon-00814f13.svg" alt="" width={20} height={20} />
                  <div>
                    <b>Indépendants & micro-entrepreneurs</b>
                    <span>Une présence pro, rapide à lancer, avec un budget maîtrisé.</span>
                    <small>Ex. DATHY</small>
                  </div>
                </a>
                <a className="mm-it mm-it-w">
                  <img className="px picon" src="/px/picon-808b4de1.svg" alt="" width={20} height={20} />
                  <div>
                    <b>Marques & e-commerçants</b>
                    <span>Des boutiques Shopify qui vendent, et les outils pour grandir.</span>
                    <small>Ex. Les Bocaux du Vexin</small>
                  </div>
                </a>
              </div>
            </div>
            <Link to="/realisations/chateau-larc" className="mm-feat">
              <img src="/images/img-ccfa5beb.png" alt="" />
              <div className="mm-fk">Étude de cas · Golf</div>
              <b>Château l’Arc Golf Club : un site et un back-office pour remplir les départs</b>
              <span className="lnk">Voir le projet</span>
            </Link>
          </div>
          <div className="mm-foot">
            <span>
              Votre activité n’est pas dans la liste ? On travaille aussi avec des associations, des
              industriels et des groupes.
            </span>
            <a className="btn btn-acc btn-s">Parlons de votre projet</a>
          </div>
        </div>
      </div>
      <i className="nav-prog" />
    </header>
  )
}
