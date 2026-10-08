import { useState } from 'react'
import { FAQS } from '../data/content'
import { ArrowRight, Eyebrow, Plus, Reveal, SplitLines } from './ui'

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq section section--paper" id="faq">
      <div className="container faq__grid">
        <div className="faq__intro">
          <Eyebrow index="07">Questions fréquentes</Eyebrow>
          <SplitLines as="h2" className="faq__title" text={"Les questions\nqu'on nous pose\ntout le temps."} />
          <Reveal as="p" className="body-lg faq__lead" delay={150}>
            Budget, délais, technologie, suivi : les réponses aux questions qui reviennent avant chaque projet.
          </Reveal>
          <Reveal delay={250}>
            <a href="#contact" className="link-underline">
              Une autre question ? Écrivez-nous <ArrowRight size={13} />
            </a>
          </Reveal>
        </div>

        <ul className="accordion">
          {FAQS.map((f, i) => (
            <Reveal as="li" key={f.q} delay={i * 60} className={`accordion__item ${open === i ? 'is-open' : ''}`}>
              <button className="accordion__head" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="accordion__q">{f.q}</span>
                <span className="accordion__icon">
                  <Plus size={12} />
                </span>
              </button>
              <div className="accordion__body">
                <div>
                  <p>{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
