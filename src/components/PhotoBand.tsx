import { useRef } from 'react'
import { useScrollProgress } from '../hooks'
import { SplitLines } from './ui'

export function PhotoBand() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)

  // Parallaxe de l'image + ouverture du cadre à l'entrée
  useScrollProgress(sectionRef, (p) => {
    if (imgRef.current) imgRef.current.style.transform = `translate3d(0, ${((p - 0.5) * 14).toFixed(2)}%, 0) scale(1.18)`
    if (frameRef.current) {
      const open = Math.min(1, p / 0.42)
      const inset = (1 - open) * 6
      frameRef.current.style.clipPath = `inset(${inset}% ${inset}% ${inset}% ${inset}% round ${(1 - open) * 12}px)`
    }
  })

  return (
    <section className="photo-band" ref={sectionRef} aria-label="Le studio">
      <div className="photo-band__frame" ref={frameRef}>
        <img
          ref={imgRef}
          src="/images/studio.jpg"
          alt="Julien et Théo, fondateurs d'Orion Studio, au studio de Cannes"
          loading="lazy"
        />
        <div className="photo-band__shade" />
        <div className="photo-band__caption">
          <SplitLines as="p" className="photo-band__title" text={'Deux associés.\nZéro intermédiaire.'} />
          <p className="photo-band__place">Paris — Cannes</p>
        </div>
      </div>
    </section>
  )
}
