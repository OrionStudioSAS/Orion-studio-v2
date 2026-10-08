import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { EXPERTISES } from '../data/content'
import { useInView, useScrollProgress } from '../hooks'
import { Eyebrow, Reveal, SplitLines, Star } from './ui'

export function Expertises() {
  const [active, setActive] = useState(3)
  const panelsRef = useRef<HTMLDivElement>(null)
  const codeRef = useRef<HTMLDivElement>(null)
  const [panelsSeenRef, panelsSeen] = useInView<HTMLDivElement>({ threshold: 0.3 })

  // Le panneau code glisse un peu plus vite que la maquette : effet de profondeur
  useScrollProgress(panelsRef, (p) => {
    if (codeRef.current) codeRef.current.style.setProperty('--shift', `${((0.5 - p) * 60).toFixed(1)}px`)
  })

  return (
    <section className="xp section section--paper" id="expertises">
      <div className="container">
        <div className="xp__head">
          <div>
            <Eyebrow index="03">Expertises</Eyebrow>
            <SplitLines as="h2" className="h-display xp__title" text={'Du croquis au code,\nsans relais.'} />
          </div>
          <Reveal as="p" className="xp__intro" delay={200}>
            Six métiers portés par les mêmes personnes : ce qu’on dessine, on le construit, composant par composant.
          </Reveal>
        </div>

        <div className="xp__body">
          <ul className="xp__list">
            {EXPERTISES.map((x, i) => (
              <Reveal as="li" key={x.title} delay={i * 50} className={`xp__item ${active === i ? 'is-active' : ''}`}>
                <button
                  className="xp__btn"
                  aria-expanded={active === i}
                  onClick={() => setActive(i)}
                  onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(i)}
                >
                  <span className="xp__num">
                    <span className="xp__idx">0{i + 1}</span>
                    <Star size={12} className="xp__star" />
                  </span>
                  <span className="xp__name">{x.title}</span>
                </button>
                <div className="xp__desc-wrap">
                  <p className="xp__desc">{x.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="xp__panels" ref={panelsRef}>
            <div className="xp__panels-inner" ref={panelsSeenRef}>
              <Reveal className="panel panel--design" variant="fade">
                <img src="/images/figma-panel.jpg" alt="Maquette du projet Château l'Arc dans Figma" loading="lazy" />
              </Reveal>
              <div className={`panel panel--code ${panelsSeen ? 'is-in' : ''}`} ref={codeRef}>
                <CodePanel index={active} play={panelsSeen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CodePanel({ index, play }: { index: number; play: boolean }) {
  const x = EXPERTISES[index]
  const lines = x.code.split('\n')
  const [status, setStatus] = useState<'idle' | 'run' | 'ok'>('idle')

  useEffect(() => {
    if (!play) return
    setStatus('run')
    const t = window.setTimeout(() => setStatus('ok'), 380 + lines.length * 70)
    return () => window.clearTimeout(t)
  }, [index, play, lines.length])

  return (
    <>
      <div className="panel__bar">
        <span className="panel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="panel__file" key={x.file}>
          {x.file}
        </span>
        <span className="panel__branch">{x.branch}</span>
      </div>
      <pre className="panel__code" key={index} aria-label={`Exemple de code : ${x.file}`}>
        {lines.map((line, i) => (
          <span className={`code-line ${play ? 'is-in' : ''}`} key={i} style={{ '--d': `${i * 55}ms` } as CSSProperties}>
            <span className="code-line__n">{String(i + 1).padStart(2, '0')}</span>
            <span className="code-line__c">{highlight(line)}</span>
          </span>
        ))}
      </pre>
      <div className="panel__terminal">
        <p className="muted-2">$ git push origin {x.branch}</p>
        <p className={`panel__status is-${status}`}>
          {status === 'ok' ? (
            <>
              <span className="accent">✓</span> {x.build}
            </>
          ) : (
            <>
              <span className="spinner" aria-hidden="true" /> Déploiement en cours…
            </>
          )}
        </p>
      </div>
    </>
  )
}

const KEYWORDS = new Set([
  'export', 'function', 'return', 'const', 'await', 'async', 'for', 'in', 'endfor', 'render', 'import', 'from',
])

/** Coloration syntaxique minimaliste (suffisante pour les extraits affichés). */
function highlight(line: string) {
  const re = /(\/\/.*$)|('[^']*'|"[^"]*")|(#[0-9a-f]{3,6}\b)|(<\/?[A-Za-z][\w.]*|\/?>)|(\{%|%\}|\{\{|\}\})|([A-Za-z_][\w-]*)/g
  const out: (string | JSX.Element)[] = []
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(line))) {
    if (m.index > last) out.push(line.slice(last, m.index))
    const [tok, comment, str, hex, tag, liquid, word] = m
    let cls = ''
    if (comment) cls = 'tk-comment'
    else if (str || hex) cls = 'tk-str'
    else if (tag) cls = 'tk-tag'
    else if (liquid) cls = 'tk-punct'
    else if (word && KEYWORDS.has(word)) cls = 'tk-kw'
    else if (word && line[m.index + word.length] === '(') cls = 'tk-fn'
    out.push(cls ? <span key={k++} className={cls}>{tok}</span> : tok)
    last = m.index + tok.length
  }
  if (last < line.length) out.push(line.slice(last))
  return out.length ? out : ' '
}
