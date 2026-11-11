/**
 * Pré-rendu (lancé au build, côté Node) : produit le HTML de chaque page pour les moteurs et les IA,
 * qui n'ont ainsi pas besoin d'exécuter le JavaScript pour lire le contenu.
 */
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { ROUTES } from './routes'
import { SERVICES, type ServiceId } from './components/services/servicesData'

export { ROUTES, SERVICES }
export { SITE, TITLES, ORG_DESCRIPTION, HOME_DESCRIPTION } from './seo'
export type { ServiceId }

export async function render(path: string): Promise<string> {
  const route = ROUTES.find((r) => r.path === path)
  if (!route) throw new Error(`Page inconnue : ${path}`)
  const Content = await route.Desktop()
  return renderToString(
    <StaticRouter location={path}>
      <div className="stage">
        <div className={`view ${route.wrap} on`} data-view={route.view}>
          <div className="site-d">
            <Content />
          </div>
        </div>
      </div>
    </StaticRouter>,
  )
}
