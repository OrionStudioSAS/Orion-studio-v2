import { useState, type CSSProperties } from 'react'
import { TESTIMONIALS } from '../data/content'
import { ArrowRight, Eyebrow, Reveal, Star } from './ui'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const n = TESTIMONIALS.length
  const t = TESTIMONIALS[index]
  const go = (d: number) => setIndex((i) => (i + d + n) % n)

  const words = t.quote.split(' ')
  const emph = t.emphasis ? t.emphasis.split(' ') : []

  return (
    <section className="testimonials section section--paper-2" id="temoignages">
      <div className="container">
        <div className="testimonials__head">
          <Eyebrow index="06">Ils en parlent</Eyebrow>
          <div className="pager">
            <span className="mono-sm muted">
              {String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
            </span>
            <button className="round-btn" onClick={() => go(-1)} aria-label="Avis précédent">
              <span style={{ transform: 'scaleX(-1)', display: 'inline-flex' }}>
                <ArrowRight size={15} />
              </span>
            </button>
            <button className="round-btn round-btn--ink" onClick={() => go(1)} aria-label="Avis suivant">
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <Reveal variant="fade">
          <blockquote className="quote" key={index} aria-live="polite">
            <span className="quote__word" style={{ '--d': '0ms' } as CSSProperties}>
              «&nbsp;
            </span>
            {words.map((w, i) => (
              <span key={i} className="quote__word" style={{ '--d': `${(i + 1) * 22}ms` } as CSSProperties}>
                {w}{' '}
              </span>
            ))}
            {emph.map((w, i) => (
              <em key={`e${i}`} className="quote__word" style={{ '--d': `${(words.length + i + 1) * 22}ms` } as CSSProperties}>
                {w}{' '}
              </em>
            ))}
            <span className="quote__word" style={{ '--d': `${(words.length + emph.length + 1) * 22}ms` } as CSSProperties}>
              »
            </span>
          </blockquote>

          <div className="attribution" key={`a${index}`}>
            <div className="attribution__who">
              <span className="attribution__avatar">{t.initials}</span>
              <div>
                <p className="attribution__name">{t.name}</p>
                <p className="mono-sm muted">{t.role}</p>
              </div>
            </div>
            <a className="attribution__google mono-sm muted" href="#temoignages">
              <span className="stars" aria-label="5 étoiles sur 5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={11} />
                ))}
              </span>
              5/5 — Lire les avis Google
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
