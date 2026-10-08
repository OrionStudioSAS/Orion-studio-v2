import { useRef } from 'react'
import { useScrollProgress } from '../hooks'
import { ArrowRight, Eyebrow, Reveal, SplitLines } from './ui'

const PRINCIPLES = [
  ['Interlocuteurs directs', 'Vous parlez à ceux qui font.'],
  ['Design & dev internalisés', 'Aucun relais, aucune perte.'],
  ['Paris — Cannes', '60 rue François Ier · 6 rue Merle'],
]

export function Studio() {
  const ref = useRef<HTMLDivElement>(null)
  const aRef = useRef<HTMLDivElement>(null)
  const bRef = useRef<HTMLDivElement>(null)

  // Les deux portraits défilent à des vitesses différentes
  useScrollProgress(ref, (p) => {
    const d = (p - 0.5) * 2
    aRef.current?.style.setProperty('--y', `${(d * 24).toFixed(1)}px`)
    bRef.current?.style.setProperty('--y', `${(d * -36).toFixed(1)}px`)
  })

  return (
    <section className="studio section section--paper-2" id="studio">
      <div className="container studio__grid">
        <div className="studio__portraits" ref={ref}>
          <Eyebrow index="05" className="studio__eyebrow">
            Le studio
          </Eyebrow>
          <Reveal as="figure" className="portrait" variant="mask">
            <div className="portrait__img" ref={aRef}>
              <img src="/images/julien.jpg" alt="Portrait de Julien" loading="lazy" />
            </div>
            <figcaption>
              <span className="portrait__name">Julien</span>
              <span className="mono-sm muted">Co-fondateur · Président</span>
            </figcaption>
          </Reveal>
          <Reveal as="figure" className="portrait portrait--offset" variant="mask" delay={150}>
            <div className="portrait__img" ref={bRef}>
              <img src="/images/theophile.jpg" alt="Portrait de Théophile" loading="lazy" />
            </div>
            <figcaption>
              <span className="portrait__name">Théophile</span>
              <span className="mono-sm muted">Co-fondateur · DG</span>
            </figcaption>
          </Reveal>
        </div>

        <div className="studio__text">
          <SplitLines as="h2" className="studio__title" text={'Petite équipe.\nExécution senior.\nLigne directe.'} />
          <Reveal as="p" className="body-lg studio__lead" delay={150}>
            Orion, c'est Julien et Théo. Pas de commercial entre vous et le projet : vous échangez directement avec ceux
            qui conçoivent et développent votre site.
          </Reveal>
          <dl className="principles">
            {PRINCIPLES.map(([k, v], i) => (
              <Reveal className="principles__row" key={k} delay={200 + i * 80}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={400}>
            <a href="#studio" className="link-underline">
              Découvrir le studio <ArrowRight size={13} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
