import { useRef, useState } from 'react'
import { STEPS } from '../data/content'
import { useMediaQuery, useScrollProgress } from '../hooks'
import { Eyebrow, Plus, Reveal, SplitLines } from './ui'

const PAYMENTS = ['30 % signature', '30 % maquette', '30 % livraison', '10 % +2 sem.']

export function Method() {
  const desktop = useMediaQuery('(min-width: 1024px)')
  const trackRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLSpanElement>(null)
  const [active, setActive] = useState(2)

  // Desktop : la section est « épinglée », l'étape active suit le défilement
  useScrollProgress(trackRef, (_p, rect) => {
    if (!desktop) return
    const vh = window.innerHeight
    const scrollable = rect.height - vh
    const local = Math.min(1, Math.max(0, -rect.top / Math.max(1, scrollable)))
    const i = Math.min(STEPS.length - 1, Math.floor(local * STEPS.length))
    setActive((prev) => (prev === i ? prev : i))
    railRef.current?.style.setProperty('--p', local.toFixed(4))
  })

  const goTo = (i: number) => {
    if (!desktop || !trackRef.current) return setActive(i)
    const rect = trackRef.current.getBoundingClientRect()
    const scrollable = rect.height - window.innerHeight
    const top = window.scrollY + rect.top + ((i + 0.5) / STEPS.length) * scrollable
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section className="method section--paper" id="methode">
      <div className="method__track" ref={trackRef}>
        <div className="method__sticky container">
          <div className="method__left">
            <Eyebrow index="04">Méthode</Eyebrow>
            <SplitLines as="h2" className="h-display method__title" text={'Cinq étapes.\nZéro zone grise.'} />
            <Reveal as="p" className="body-lg method__lead" delay={150}>
              Vous savez toujours où en est votre projet. Un site vitrine prend en moyenne 4 à 8 semaines, selon sa
              complexité et le rythme des échanges.
            </Reveal>
            <Reveal className="method__pay" delay={250}>
              <p className="mono-sm muted">Échéancier de paiement</p>
              <div className="tags">
                {PAYMENTS.map((p) => (
                  <span key={p} className="tag tag--outline">
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="method__right">
            <span className="method__rail" ref={railRef} aria-hidden="true">
              <span className="method__rail-fill" />
            </span>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.title} className={`step ${active === i ? 'is-active' : ''}`}>
                  <button className="step__head" aria-expanded={active === i} onClick={() => goTo(i)}>
                    <span className="step__num">0{i + 1}</span>
                    <span className="step__title">{s.title}</span>
                    <span className="step__plus">
                      <Plus />
                    </span>
                  </button>
                  <div className="step__body">
                    <div>
                      <p className="step__desc">{s.description}</p>
                      <div className="tags">
                        {s.tags.map((t) => (
                          <span key={t} className="tag tag--ink">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
