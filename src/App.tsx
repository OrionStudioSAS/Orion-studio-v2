import { Header } from './components/Header'
import { Hero } from './components/hero/Hero'
import { Manifesto } from './components/Manifesto'
import { PhotoBand } from './components/PhotoBand'
import { Projects } from './components/Projects'
import { Expertises } from './components/Expertises'
import { Method } from './components/Method'
import { Studio } from './components/Studio'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { ConstellationRail, CtaFinal, Footer, MobileCta } from './components/Closing'

const SECTIONS = ['top', 'manifeste', 'projets', 'expertises', 'methode', 'studio', 'temoignages', 'faq', 'contact']

export default function App() {
  return (
    <>
      <Header />
      <ConstellationRail ids={SECTIONS} />
      <main>
        <Hero />
        <Manifesto />
        <PhotoBand />
        <Projects />
        <Expertises />
        <Method />
        <Studio />
        <Testimonials />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <MobileCta />
    </>
  )
}
