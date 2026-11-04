import { useEffect, useRef, useState, type ReactNode } from 'react'
import { flushSync } from 'react-dom'
import { useLocation, useNavigationType, type Location } from 'react-router-dom'
import { runPendingAfter } from '../motion/nav'
import { findRoute, isMobileViewport, loadPage, pageId } from '../pageLoader'

const COVER_MS = 420
const HOLD_MS = 60
const REVEAL_MS = 650
const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Rideau de pixels : des carrés noirs (quelques-uns orange) couvrent l'écran,
 * la nouvelle page prend la place de l'ancienne à l'abri, puis les carrés s'effacent.
 * Si le fichier de la page n'est pas encore arrivé (`ready`), l'écran reste couvert en l'attendant.
 */
function pixelWipe(ready: Promise<unknown>, onCovered: () => void, onDone: () => void) {
  const canvas = document.createElement('canvas')
  canvas.className = 'px-wipe'
  document.body.append(canvas)
  const w = innerWidth
  const h = innerHeight
  const dpr = Math.min(2, devicePixelRatio || 1)
  canvas.width = w * dpr
  canvas.height = h * dpr
  const ctx = canvas.getContext('2d')!
  ctx.scale(dpr, dpr)

  const cell = Math.ceil(Math.max(w, h) / 24)
  const cells: [number, number, number, boolean][] = []
  for (let j = 0; j < Math.ceil(h / cell); j++)
    for (let i = 0; i < Math.ceil(w / cell); i++) cells.push([i, j, Math.random(), Math.random() < 0.06])

  const draw = (p: number) => {
    ctx.clearRect(0, 0, w, h)
    for (const [i, j, t, orange] of cells) {
      if (t >= p) continue
      ctx.fillStyle = orange ? '#FF4D1A' : '#0E0E0C'
      ctx.fillRect(i * cell, j * cell, cell + 0.5, cell + 0.5)
    }
  }

  const start = performance.now()
  const cover = (now: number) => {
    const k = (now - start) / COVER_MS
    if (k < 1) {
      draw(k * k)
      requestAnimationFrame(cover)
      return
    }
    draw(1)
    ready.finally(() => {
      onCovered()
      const revealFrom = performance.now() + HOLD_MS
      const reveal = (t: number) => {
        const r = Math.min(1, (t - revealFrom) / REVEAL_MS)
        if (r >= 1) {
          canvas.remove()
          onDone()
          return
        }
        if (r > 0) draw((1 - r) * (1 - r))
        requestAnimationFrame(reveal)
      }
      requestAnimationFrame(reveal)
    })
  }
  requestAnimationFrame(cover)
}

/** Affiche la page courante et orchestre le changement de page (l'adresse change aussitôt, l'affichage sous le rideau). */
export function PageTransition({ children }: { children: (location: Location) => ReactNode }) {
  const location = useLocation()
  const navigationType = useNavigationType()
  const [shown, setShown] = useState(location)

  const shownRef = useRef(location)
  const latestRef = useRef(location)
  const typeRef = useRef(navigationType)
  const busyRef = useRef(false)
  const scrollByKey = useRef(new Map<string, number>())
  latestRef.current = location
  typeRef.current = navigationType

  useEffect(() => {
    const swap = () => {
      scrollByKey.current.set(shownRef.current.key, scrollY)
      const next = latestRef.current
      shownRef.current = next
      flushSync(() => setShown(next))
      // Retour / avance du navigateur : on retrouve l'endroit où l'on était
      const top = typeRef.current === 'POP' ? scrollByKey.current.get(next.key) ?? 0 : 0
      scrollTo({ top, behavior: 'instant' })
      setTimeout(runPendingAfter, 80)
    }
    const run = () => {
      if (busyRef.current) return
      if (pageId(latestRef.current) === pageId(shownRef.current)) return
      const ready = loadPage(findRoute(latestRef.current.pathname), isMobileViewport())
      if (reducedMotion()) {
        ready.finally(swap)
        return
      }
      busyRef.current = true
      pixelWipe(ready, swap, () => {
        busyRef.current = false
        run() // une autre page a été demandée pendant le rideau
      })
    }

    if (pageId(location) === pageId(shownRef.current)) {
      // Lien vers la page déjà affichée : retour en haut
      if (location.key !== shownRef.current.key && !busyRef.current) {
        shownRef.current = location
        scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' })
        runPendingAfter()
      }
      return
    }
    run()
  }, [location])

  return <>{children(shown)}</>
}
