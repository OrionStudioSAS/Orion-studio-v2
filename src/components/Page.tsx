import { useEffect, useLayoutEffect, useRef, useState, type ComponentType } from 'react'
import { mountPage } from '../motion/site'

const MOBILE_QUERY = '(max-width: 819px)'

function useIsMobile() {
  const [mobile, setMobile] = useState(() => matchMedia(MOBILE_QUERY).matches)
  useEffect(() => {
    const mq = matchMedia(MOBILE_QUERY)
    const onChange = () => setMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return mobile
}

type PageProps = {
  view: string
  Desktop: ComponentType
  Mobile: ComponentType
}

/** Une page du site : maquette 1440 ou 390 selon la largeur, animations branchées le temps qu'elle est affichée. */
export function Page({ view, Desktop, Mobile }: PageProps) {
  const mobile = useIsMobile()
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => mountPage(view, rootRef.current, mobile), [view, mobile])

  return (
    <div className={`view ${view === 'accueil' ? 'v-home' : 'v-pg'} on`} data-view={view}>
      <div ref={rootRef} className={mobile ? 'site-m' : 'site-d'}>
        {mobile ? <Mobile /> : <Desktop />}
      </div>
    </div>
  )
}
