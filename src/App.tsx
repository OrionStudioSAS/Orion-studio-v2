import { useEffect, type ComponentType } from 'react'
import { Route, Routes, useNavigate, type Location } from 'react-router-dom'
import { Overlays } from './components/Overlays'
import { Page } from './components/Page'
import { PageTransition } from './components/PageTransition'
import { initSite } from './motion/site'
import { PATHS, setNavigate } from './motion/nav'
import { Desktop as ArticleIADesktop } from './pages/ArticleIA/Desktop'
import { Mobile as ArticleIAMobile } from './pages/ArticleIA/Mobile'
import { Desktop as ChateauLarcDesktop } from './pages/ChateauLarc/Desktop'
import { Mobile as ChateauLarcMobile } from './pages/ChateauLarc/Mobile'
import { Desktop as GolfsDesktop } from './pages/Golfs/Desktop'
import { Mobile as GolfsMobile } from './pages/Golfs/Mobile'
import { Desktop as HomeDesktop } from './pages/Home/Desktop'
import { Mobile as HomeMobile } from './pages/Home/Mobile'
import { NotFoundDesktop, NotFoundMobile } from './pages/NotFound'
import { Desktop as RealisationsDesktop } from './pages/Realisations/Desktop'
import { Mobile as RealisationsMobile } from './pages/Realisations/Mobile'
import { Desktop as RessourcesDesktop } from './pages/Ressources/Desktop'
import { Mobile as RessourcesMobile } from './pages/Ressources/Mobile'
import { Desktop as StandIngDesktop } from './pages/StandIng/Desktop'
import { Mobile as StandIngMobile } from './pages/StandIng/Mobile'
import { Desktop as StudioDesktop } from './pages/Studio/Desktop'
import { Mobile as StudioMobile } from './pages/Studio/Mobile'

const ROUTES: { view: keyof typeof PATHS; Desktop: ComponentType; Mobile: ComponentType }[] = [
  { view: 'accueil', Desktop: HomeDesktop, Mobile: HomeMobile },
  { view: 'realisations', Desktop: RealisationsDesktop, Mobile: RealisationsMobile },
  { view: 'chateau-larc', Desktop: ChateauLarcDesktop, Mobile: ChateauLarcMobile },
  { view: 'standing', Desktop: StandIngDesktop, Mobile: StandIngMobile },
  { view: 'golf', Desktop: GolfsDesktop, Mobile: GolfsMobile },
  { view: 'studio', Desktop: StudioDesktop, Mobile: StudioMobile },
  { view: 'ressources', Desktop: RessourcesDesktop, Mobile: RessourcesMobile },
  { view: 'etre-cite-par-les-ia', Desktop: ArticleIADesktop, Mobile: ArticleIAMobile },
]

function SiteRoutes({ location }: { location: Location }) {
  return (
    <Routes location={location}>
      {ROUTES.map(({ view, Desktop, Mobile }) => (
        <Route key={view} path={PATHS[view]} element={<Page view={view} Desktop={Desktop} Mobile={Mobile} />} />
      ))}
      <Route path="*" element={<Page view="not-found" Desktop={NotFoundDesktop} Mobile={NotFoundMobile} />} />
    </Routes>
  )
}

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
        <PageTransition>{(location) => <SiteRoutes location={location} />}</PageTransition>
      </div>
      <Overlays />
    </>
  )
}
