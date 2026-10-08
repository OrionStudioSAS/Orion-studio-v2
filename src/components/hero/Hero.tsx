import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { EXPERTISES_SHORT, PROJECTS } from '../../data/content'
import { useReducedMotion } from '../../hooks'
import { ArrowUpRight, Star } from '../ui'
import { createOrbitScene, type OrbitItem } from './orbitScene'

// Projets en orbite, avec la position de leur vignette dans la maquette (centre, px @1440×900)
const ORBIT_PROJECTS: (OrbitItem & { slug: string })[] = [
  { slug: 'chateau-larc', orbit: 0, figma: [487, 533] },
  { slug: 'parker-smith', orbit: 0, figma: [535.5, 239] },
  { slug: 'stand-ing', orbit: 0, figma: [1095.5, 196] },
  { slug: 'bocaux-du-vexin', orbit: 0, figma: [1129.5, 386] },
  { slug: 'osmose-nutrition', orbit: 1, figma: [399.5, 383.5] },
  { slug: 'absolute-boat', orbit: 1, figma: [872.5, 248.5] },
]
const orbitProjects = ORBIT_PROJECTS.map((o) => ({ ...o, project: PROJECTS.find((p) => p.slug === o.slug)! }))

const H1_LINES = ['On design.', 'On code. On lance.']

export function Hero() {
  const reducedMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<HTMLAnchorElement[]>([])
  const sceneRef = useRef<ReturnType<typeof createOrbitScene> | null>(null)
  const [active, setActive] = useState(-1)

  useEffect(() => {
    const stage = stageRef.current!
    const scene = createOrbitScene({
      canvas: canvasRef.current!,
      stage,
      cards: cardRefs.current,
      label: labelRef.current!,
      items: ORBIT_PROJECTS,
      reducedMotion,
      onActiveChange: setActive,
      getSafeArea: () => {
        const header = window.innerWidth < 768 ? 64 : 88
        const bottom = bottomRef.current
        const stageTop = stage.getBoundingClientRect().top
        const limit = bottom ? bottom.getBoundingClientRect().top - stageTop - 24 : stage.clientHeight
        return { top: header, bottom: limit }
      },
    })
    sceneRef.current = scene
    return () => scene.destroy()
  }, [reducedMotion])

  const activeProject = active >= 0 ? orbitProjects[active].project : null

  return (
    <section className="hero" ref={sectionRef} id="top">
      <div className="hero__stage" ref={stageRef}>
        <canvas className="hero__canvas" ref={canvasRef} aria-hidden="true" />
        {orbitProjects.map(({ project }, i) => (
          <a
            key={project.slug}
            href="#projets"
            ref={(el) => {
              if (el) cardRefs.current[i] = el
            }}
            className={`orbit-card ${active === i ? 'is-active' : ''}`}
            aria-label={`${project.name} — ${project.category}`}
            onPointerEnter={() => sceneRef.current?.setHovered(i)}
            onPointerLeave={() => sceneRef.current?.setHovered(-1)}
            onFocus={() => sceneRef.current?.setHovered(i)}
            onBlur={() => sceneRef.current?.setHovered(-1)}
          >
            <img src={project.image} alt="" draggable={false} />
          </a>
        ))}
        <div className={`orbit-label ${activeProject ? 'is-visible' : ''}`} ref={labelRef} aria-hidden="true">
          {activeProject && (
            <div className="orbit-label__inner" key={activeProject.slug}>
              <p className="orbit-label__name">
                {activeProject.name}
                <span className="orbit-label__arrow">
                  <ArrowUpRight size={8} strokeWidth={1.6} />
                </span>
              </p>
              <p className="orbit-label__meta">{activeProject.meta}</p>
            </div>
          )}
        </div>
      </div>

      <ExpertiseNav />

      <div className="hero__bottom container" ref={bottomRef}>
        <TypedTitle lines={H1_LINES} reducedMotion={reducedMotion} />
        <div className="hero__aside">
          <p className="hero__lead">
            Studio de design & développement entre Paris et Cannes. Sites sur-mesure, e-commerce Shopify et
            applications web, conçus, codés et lancés par la même équipe.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--light btn--lg">
              Démarrer un projet <ArrowUpRight size={14} strokeWidth={2.2} />
            </a>
            <a href="#projets" className="btn btn--dark btn--lg">
              Nos réalisations
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Navigation expertises du hero (desktop) : défile seule, se met en pause au survol. */
function ExpertiseNav() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const id = window.setTimeout(() => setCurrent((c) => (c + 1) % EXPERTISES_SHORT.length), 3600)
    return () => window.clearTimeout(id)
  }, [current, paused])

  return (
    <nav
      className="hero-xp"
      aria-label="Expertises"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      {EXPERTISES_SHORT.map((label, i) => (
        <a
          key={label}
          href="#expertises"
          className={`hero-xp__row ${i === current ? 'is-active' : ''} ${paused ? 'is-paused' : ''}`}
          onPointerEnter={() => setCurrent(i)}
          onFocus={() => setCurrent(i)}
        >
          <span className="hero-xp__bar">
            <span className="hero-xp__progress" key={`${current}-${paused}`} />
          </span>
          <span className="hero-xp__icon">
            <Star size={14} />
          </span>
          <span className="hero-xp__label">{label}</span>
        </a>
      ))}
    </nav>
  )
}

/** Titre en Geist Mono « tapé » caractère par caractère, sans décalage de mise en page. */
function TypedTitle({ lines, reducedMotion }: { lines: string[]; reducedMotion: boolean }) {
  const total = lines.reduce((n, l) => n + l.length, 0)
  const [count, setCount] = useState(reducedMotion ? total : 0)
  const [caret, setCaret] = useState(!reducedMotion)

  useEffect(() => {
    if (reducedMotion) {
      setCount(total)
      setCaret(false)
      return
    }
    let i = 0
    let timer = window.setTimeout(function tick() {
      i++
      setCount(i)
      if (i < total) {
        const prev = lines.join('').charAt(i - 1)
        timer = window.setTimeout(tick, prev === '.' ? 220 : prev === ' ' ? 70 : 42 + Math.random() * 30)
      } else {
        timer = window.setTimeout(() => setCaret(false), 2600)
      }
    }, 650)
    return () => window.clearTimeout(timer)
  }, [reducedMotion, total, lines])

  let idx = 0
  return (
    <h1 className="hero__title" aria-label={lines.join(' ')}>
      {lines.map((line, li) => (
        <span className="hero__title-line" key={li} aria-hidden="true">
          {[...line].map((ch, ci) => {
            const i = idx++
            const isLastDot = li === lines.length - 1 && ci === line.length - 1
            return (
              <span key={ci} className="hero__char-wrap">
                {caret && i === count && <Caret />}
                <span
                  className={`hero__char ${i < count ? 'is-on' : ''} ${isLastDot ? 'is-accent' : ''}`}
                  style={{ '--i': i } as CSSProperties}
                >
                  {ch}
                </span>
                {caret && i === total - 1 && count === total && <Caret />}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

function Caret() {
  return (
    <span className="caret-anchor">
      <span className="caret" />
    </span>
  )
}
