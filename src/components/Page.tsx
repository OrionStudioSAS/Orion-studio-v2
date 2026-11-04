import { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react'
import { mountPage } from '../motion/site'
import { MOBILE_QUERY, isMobileViewport, loadPage, loadedPage } from '../pageLoader'
import type { SiteRoute } from '../routes'

function useIsMobile() {
  const [mobile, setMobile] = useState(isMobileViewport)
  useEffect(() => {
    const mq = matchMedia(MOBILE_QUERY)
    const onChange = () => setMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return mobile
}

/** Une page du site : maquette 1440 ou 390 selon la largeur, animations branchées le temps qu'elle est affichée. */
export function Page({ route }: { route: SiteRoute }) {
  const mobile = useIsMobile()
  const rootRef = useRef<HTMLDivElement>(null)
  const [, refresh] = useReducer((n: number) => n + 1, 0)
  const Content = loadedPage(route, mobile)

  // Normalement déjà chargée par PageTransition ; sinon (passage desktop ↔ mobile), on la charge ici.
  useEffect(() => {
    if (!Content) loadPage(route, mobile).then(refresh)
  }, [Content, route, mobile])

  useLayoutEffect(() => {
    if (Content) return mountPage(route.view, rootRef.current, mobile)
  }, [Content, route.view, mobile])

  return (
    <div className={`view ${route.wrap} on`} data-view={route.view}>
      <div ref={rootRef} className={mobile ? 'site-m' : 'site-d'}>
        {Content && <Content />}
      </div>
    </div>
  )
}
