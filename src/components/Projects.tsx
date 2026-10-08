import { useEffect, useRef, useState } from 'react'
import { PROJECTS, type Project } from '../data/content'
import { ArrowRight, ArrowUpRight, Eyebrow, Reveal, SplitLines, Star } from './ui'

export function Projects() {
  const listRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(-1)
  const [shown, setShown] = useState(0)

  // Aperçu flottant qui suit le curseur avec inertie (desktop uniquement)
  useEffect(() => {
    const list = listRef.current
    if (!list || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const target = { x: 0, y: 0 }
    const prev = { x: 0, y: 0 }
    const cur = { x: 0, y: 0 }
    let raf = 0
    let active = false
    const loop = () => {
      prev.x += (target.x - prev.x) * 0.12
      prev.y += (target.y - prev.y) * 0.12
      cur.x += (target.x - cur.x) * 0.35
      cur.y += (target.y - cur.y) * 0.35
      const vx = target.x - prev.x
      if (previewRef.current)
        previewRef.current.style.transform = `translate3d(${prev.x + 28}px, ${prev.y - 125}px, 0) rotate(${Math.max(-6, Math.min(6, vx * 0.04)).toFixed(2)}deg)`
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${cur.x - 48}px, ${cur.y - 48}px, 0)`
      raf = active ? requestAnimationFrame(loop) : 0
    }
    const onMove = (e: PointerEvent) => {
      const r = list.getBoundingClientRect()
      target.x = e.clientX - r.left
      target.y = e.clientY - r.top
      if (!active) {
        prev.x = cur.x = target.x
        prev.y = cur.y = target.y
        active = true
        raf = requestAnimationFrame(loop)
      }
    }
    const onLeave = () => {
      active = false
    }
    list.addEventListener('pointermove', onMove)
    list.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      list.removeEventListener('pointermove', onMove)
      list.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  const enter = (i: number) => {
    setHovered(i)
    setShown(i)
  }

  return (
    <section className="projects section section--ink" id="projets">
      <div className="container">
        <div className="projects__head">
          <div>
            <Eyebrow index="02">Projets</Eyebrow>
            <SplitLines as="h2" className="projects__title" text="Le travail." />
          </div>
          <Reveal className="projects__meta" delay={150}>
            <p className="mono-sm muted">07 projets · 2024–2026</p>
            <a href="#projets" className="link-arrow">
              Toutes les réalisations <ArrowRight size={13} />
            </a>
          </Reveal>
        </div>

        <div className={`projects__list ${hovered >= 0 ? 'has-hover' : ''}`} ref={listRef} onPointerLeave={() => setHovered(-1)}>
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} active={hovered === i} onEnter={() => enter(i)} />
          ))}

          <div className={`projects__preview ${hovered >= 0 ? 'is-visible' : ''}`} ref={previewRef} aria-hidden="true">
            {PROJECTS.map((p, i) => (
              <div key={p.slug} className={`projects__preview-img ${shown === i ? 'is-current' : ''}`}>
                <ProjectVisual project={p} />
              </div>
            ))}
          </div>
          <div className={`projects__cursor ${hovered >= 0 ? 'is-visible' : ''}`} ref={cursorRef} aria-hidden="true">
            <span>Voir l'étude</span>
            <ArrowUpRight size={10} strokeWidth={1.6} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ project, index, active, onEnter }: { project: Project; index: number; active: boolean; onEnter: () => void }) {
  return (
    <Reveal as="a" href="#projets" className={`project-row ${active ? 'is-active' : ''}`} delay={index * 60} onPointerEnter={onEnter} onFocus={onEnter}>
      <div className="project-row__media">
        <ProjectVisual project={project} />
        <span className="project-row__go">
          <ArrowUpRight size={14} strokeWidth={2} />
        </span>
      </div>
      <span className="project-row__num">
        <span className="project-row__idx">{String(index + 1).padStart(2, '0')}</span>
        <Star size={14} className="project-row__star" />
      </span>
      <span className="project-row__name">{project.name}</span>
      <span className="project-row__info">
        <span className="project-row__cat">{project.category}</span>
        {project.year && <span className="project-row__year">{project.year}</span>}
      </span>
      <span className="project-row__desc">{project.description}</span>
      <span className="project-row__tags">
        {project.tags.map((t) => (
          <span key={t} className="tag tag--dark">
            {t}
          </span>
        ))}
      </span>
    </Reveal>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) return <img src={project.image} alt="" loading="lazy" />
  // Pas encore de capture : visuel typographique
  return (
    <div className="project-placeholder">
      <Star size={22} className="accent" />
      <span>{project.short}</span>
    </div>
  )
}
