import type { ComponentType } from 'react'
import { matchPath } from 'react-router-dom'
import { ROUTES, type SiteRoute } from './routes'

export const MOBILE_QUERY = '(max-width: 819px)'
export const isMobileViewport = () => matchMedia(MOBILE_QUERY).matches

/** Identifie une page affichée : changer de chemin ou de paramètres change de page. */
export const pageId = (l: { pathname: string; search: string }) => l.pathname + l.search

const NOT_FOUND = ROUTES.find((r) => r.path === '*')!

export function findRoute(pathname: string): SiteRoute {
  return ROUTES.find((r) => r.path !== '*' && matchPath({ path: r.path, end: true }, pathname)) ?? NOT_FOUND
}

const loaded = new Map<string, ComponentType>()
const pending = new Map<string, Promise<void>>()
const keyOf = (route: SiteRoute, mobile: boolean) => `${route.view}:${mobile ? 'm' : 'd'}`

/** Le composant de la page s'il est déjà chargé : l'affichage peut alors être immédiat. */
export const loadedPage = (route: SiteRoute, mobile: boolean) => loaded.get(keyOf(route, mobile))

/** Charge le fichier d'une page (une seule fois). */
export function loadPage(route: SiteRoute, mobile: boolean): Promise<void> {
  const key = keyOf(route, mobile)
  if (loaded.has(key)) return Promise.resolve()
  let promise = pending.get(key)
  if (!promise) {
    promise = (mobile ? route.Mobile() : route.Desktop()).then((component) => {
      loaded.set(key, component)
      pending.delete(key)
    })
    pending.set(key, promise)
  }
  return promise
}
