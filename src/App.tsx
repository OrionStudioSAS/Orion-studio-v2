import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Overlays } from './components/Overlays'
import { Page } from './components/Page'
import { PageTransition } from './components/PageTransition'
import { setNavigate } from './motion/nav'
import { initSite } from './motion/site'
import { findRoute, pageId } from './pageLoader'

export function App() {
  const navigate = useNavigate()

  useEffect(() => {
    setNavigate(navigate)
  }, [navigate])

  useEffect(() => {
    initSite()
  }, [])

  return (
    <>
      <div className="stage">
        <PageTransition>
          {(location) => <Page key={pageId(location)} route={findRoute(location.pathname)} />}
        </PageTransition>
      </div>
      <Overlays />
    </>
  )
}
