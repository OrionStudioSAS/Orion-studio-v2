import { useRef } from 'react'
import { PROJECTS } from '../data/content'
import { useScrollProgress } from '../hooks'
import { ArrowUpRight, Eyebrow, Reveal } from './ui'

const STRONG = 'Nous designons et développons des sites, des boutiques et des applications pour les marques qui ont de vrais enjeux digitaux.'
const SOFT = 'Une seule équipe, du premier croquis au dernier commit.'

const WORDS = [
  ...STRONG.split(' ').map((w) => ({ w, soft: false })),
  ...SOFT.split(' ').map((w) => ({ w, soft: true })),
]

export function Manifesto() {
  const textRef = useRef<HTMLParagraphElement>(null)
  const wordRefs = useRef<HTMLSpanElement[]>([])

  // Les mots s'allument au fil du défilement
  useScrollProgress(textRef, (p) => {
    const start = 0.18
    const end = 0.62
    const t = (p - start) / (end - start)
    const n = WORDS.length
    wordRefs.current.forEach((el, i) => {
      const local = Math.min(1, Math.max(0, t * n - i * 0.92))
      el.style.setProperty('--lit', local.toFixed(3))
    })
  })

  return (
    <section className="manifesto section section--paper" id="manifeste">
      <div className="container">
        <Eyebrow index="01">Manifeste</Eyebrow>
        <p className="manifesto__text" ref={textRef} aria-label={`${STRONG} ${SOFT}`}>
          {WORDS.map(({ w, soft }, i) => (
            <span
              key={i}
              aria-hidden="true"
              ref={(el) => {
                if (el) wordRefs.current[i] = el
              }}
              className={`manifesto__word ${soft ? 'is-soft' : ''}`}
            >
              {w}{' '}
            </span>
          ))}
        </p>

        <Reveal className="manifesto__row">
          <div className="founders">
            <div className="founders__avatars">
              <img src="/images/avatar-j.jpg" alt="Julien" />
              <img src="/images/avatar-t.jpg" alt="Théo" />
            </div>
            <div>
              <p className="founders__name">Julien & Théo</p>
              <p className="founders__role">Fondateurs · Paris — Cannes</p>
            </div>
          </div>
          <ul className="clients" aria-label="Ils nous ont confié leur projet">
            {PROJECTS.slice(0, 5).map((p) => (
              <li key={p.slug}>
                <a href="#projets">{p.short}</a>
              </li>
            ))}
          </ul>
          <a className="google-link" href="#temoignages">
            5/5 sur Google <ArrowUpRight size={10} strokeWidth={1.6} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
