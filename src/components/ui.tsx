import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '../hooks'

export function Star({ size = 14, className, style }: { size?: number; className?: string; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 21 21" className={className} style={style} aria-hidden="true">
      <path
        d="M10.5 0C10.5 5.775 15.225 10.5 21 10.5C15.225 10.5 10.5 15.225 10.5 21C10.5 15.225 5.775 10.5 0 10.5C5.775 10.5 10.5 5.775 10.5 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Flèche diagonale ↗ */
export function ArrowUpRight({ size = 13, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15.2 15.2" fill="none" aria-hidden="true" className="icon-arrow-ur">
      <path d="M1.2 14L14 1.2M14 12.4V1.2H2.8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

/** Flèche horizontale → */
export function ArrowRight({ size = 13, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={(size * 11) / 13} viewBox="0 0 13 11" fill="none" aria-hidden="true" className="icon-arrow-r">
      <path d="M0 5.5H12M7.5 1L12 5.5L7.5 10" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  )
}

export function Plus({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" className="icon-plus">
      <path d="M7 0V14" stroke="currentColor" strokeWidth="1.2" className="icon-plus__v" />
      <path d="M0 7H14" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

/** Petit libellé de section « (01) Manifeste » en Geist Mono. */
export function Eyebrow({ index, children, className = '' }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow ${className}`}>
      {index && <span>({index}) </span>}
      {children}
    </p>
  )
}

type RevealProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
  variant?: 'up' | 'fade' | 'mask'
  [key: string]: unknown
}

/** Apparition douce au scroll (une seule fois). */
export function Reveal({ as: Tag = 'div', children, className = '', delay = 0, style, variant = 'up', ...rest }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? 'is-in' : ''} ${className}`}
      style={{ ...style, '--d': `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {/* Le masque est porté par un enfant : IntersectionObserver ignore une cible entièrement clippée */}
      {variant === 'mask' ? <div className="reveal__clip">{children}</div> : children}
    </Tag>
  )
}

/** Titre révélé ligne par ligne (masque + translation). Les lignes sont séparées par \n. */
export function SplitLines({
  text,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  stagger = 90,
  renderLine,
}: {
  text: string
  as?: ElementType
  className?: string
  delay?: number
  stagger?: number
  renderLine?: (line: string, i: number) => ReactNode
}) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.2 })
  const lines = text.split('\n')
  return (
    <Tag ref={ref} className={`split ${inView ? 'is-in' : ''} ${className}`} aria-label={text.replace(/\n/g, ' ')}>
      {lines.map((line, i) => (
        <span className="split__line" key={i} aria-hidden="true">
          <span className="split__inner" style={{ '--d': `${delay + i * stagger}ms` } as CSSProperties}>
            {renderLine ? renderLine(line, i) : line}
          </span>
        </span>
      ))}
    </Tag>
  )
}
