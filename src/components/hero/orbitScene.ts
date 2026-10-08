import { STAR_POINTS, STAR_SIZE } from '../../data/starPoints'

/**
 * Scène du hero : l'étoile en points (canvas) + deux orbites elliptiques inclinées
 * sur lesquelles tournent des vignettes projets (éléments DOM positionnés à chaque frame).
 *
 * Toutes les cotes de référence viennent de la maquette Figma (hero 1440×900,
 * centre de l'étoile en 720,361).
 */

const TILT = Math.atan2(-165, 1025.5) // ≈ -9.1°, inclinaison des deux ellipses
const REF = { cx: 720, cy: 361 }

// Ellipses mesurées sur les vecteurs Figma (demi-grand axe / demi-petit axe, px @1440)
const ORBITS_DESKTOP = [
  { a: 519, b: 155, period: 90 }, // orbite externe
  { a: 340, b: 99, period: 64 }, // orbite interne
]

export type OrbitItem = {
  orbit: 0 | 1
  /** Position du centre de la vignette dans la maquette (px, hero 1440×900) */
  figma: [number, number]
}

type Geometry = {
  w: number
  h: number
  cx: number
  cy: number
  starScale: number
  cardScale: number
  orbits: { a: number; b: number }[]
  mobile: boolean
}

export type SceneOptions = {
  canvas: HTMLCanvasElement
  stage: HTMLElement
  cards: HTMLElement[]
  label: HTMLElement
  items: OrbitItem[]
  /** Bord haut de la zone de texte du hero (px dans le stage) : l'étoile est centrée au-dessus. */
  getSafeArea: () => { top: number; bottom: number }
  onActiveChange: (index: number) => void
  reducedMotion: boolean
}

const N = STAR_POINTS.length / 4
const HALF = STAR_SIZE / 2

export function createOrbitScene(opts: SceneOptions) {
  const { canvas, stage, cards, label, items, getSafeArea, onActiveChange, reducedMotion } = opts
  const ctx = canvas.getContext('2d')!

  // Pré-calculs par point : distance au centre (pour l'intro) et phase de scintillement
  const dist = new Float32Array(N)
  const phase = new Float32Array(N)
  let maxDist = 0
  for (let i = 0; i < N; i++) {
    const x = STAR_POINTS[i * 4] - HALF
    const y = STAR_POINTS[i * 4 + 1] - HALF
    dist[i] = Math.hypot(x, y)
    maxDist = Math.max(maxDist, dist[i])
    phase[i] = Math.sin(i * 12.9898) * 43758.5453 % (Math.PI * 2)
  }

  // Angle initial de chaque vignette, retrouvé à partir de sa position dans la maquette
  const theta = items.map((it) => {
    const { a, b } = ORBITS_DESKTOP[it.orbit]
    const dx = it.figma[0] - REF.cx
    const dy = it.figma[1] - REF.cy
    const c = Math.cos(-TILT)
    const s = Math.sin(-TILT)
    const lx = dx * c - dy * s
    const ly = dx * s + dy * c
    return Math.atan2(ly / b, lx / a)
  })

  let geo: Geometry
  let dpr = 1
  const pointer = { x: 0, y: 0, tx: 0, ty: 0, light: 0, targetLight: 0, nx: 0, ny: 0, tnx: 0, tny: 0 }
  let lastTouch = -1e9
  let hovered = -1
  let active = -1
  let speed = 1
  let running = true
  let raf = 0
  let start = performance.now()
  let last = start
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches

  function measure() {
    const w = stage.clientWidth
    const h = stage.clientHeight
    const { top, bottom } = getSafeArea()
    const mobile = w < 768
    const avail = Math.max(160, bottom - top)
    const cx = w / 2
    const cy = top + avail / 2
    let starScale: number
    let cardScale: number
    let orbits: { a: number; b: number }[]
    if (mobile) {
      starScale = Math.min(w * 0.74, avail * 0.92) / STAR_SIZE
      const aO = w * 0.47
      const aI = w * 0.32
      orbits = [
        { a: aO, b: Math.min(aO * 0.34, avail * 0.42) },
        { a: aI, b: Math.min(aI * 0.32, avail * 0.3) },
      ]
      cardScale = Math.min(0.62, w / 600)
    } else {
      // Sur tablette on agrandit un peu la scène : la hauteur disponible le permet
      const widthRef = w < 1200 ? 1200 : 1440
      const k = Math.max(0.5, Math.min(w / widthRef, avail / 560, 1.25))
      starScale = k
      cardScale = Math.max(0.62, k)
      orbits = ORBITS_DESKTOP.map((o) => ({ a: o.a * k, b: o.b * k }))
    }
    geo = { w, h, cx, cy, starScale, cardScale, orbits, mobile }
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    if (!pointer.light) {
      pointer.x = pointer.tx = cx
      pointer.y = pointer.ty = cy
    }
  }

  const ease = (t: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3)

  function frame(now: number) {
    raf = 0
    if (!running) return
    const dt = Math.min(0.05, (now - last) / 1000)
    last = now
    const t = (now - start) / 1000
    const intro = reducedMotion ? 1 : t / 1.8

    // Lumière : curseur sur desktop, trajectoire automatique sur tactile (sauf doigt posé récemment)
    if (!canHover && now - lastTouch > 2200) {
      const r = 150 * geo.starScale
      pointer.tx = geo.cx + Math.cos(t * 0.55) * r
      pointer.ty = geo.cy + Math.sin(t * 0.83) * r * 0.75
      pointer.targetLight = intro > 0.6 ? 0.85 : 0
    }
    const follow = 1 - Math.pow(0.0008, dt) // lissage indépendant du framerate
    pointer.x += (pointer.tx - pointer.x) * follow
    pointer.y += (pointer.ty - pointer.y) * follow
    pointer.light += (pointer.targetLight - pointer.light) * (1 - Math.pow(0.02, dt))
    pointer.nx += (pointer.tnx - pointer.nx) * (1 - Math.pow(0.02, dt))
    pointer.ny += (pointer.tny - pointer.ny) * (1 - Math.pow(0.02, dt))

    // Parallaxe légère : l'étoile et les orbites ne bougent pas à la même vitesse
    const px = -pointer.nx * 10
    const py = -pointer.ny * 8
    const tilt = TILT + pointer.nx * 0.025

    const { cx, cy, starScale: ks, orbits, w, h } = geo
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, w, h)

    // Halo sous l'étoile (« Ombre portée » de la maquette)
    {
      const gy = cy + 290 * ks
      ctx.save()
      ctx.translate(cx + px * 0.5, gy)
      ctx.scale(1, 0.13)
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 220 * ks)
      grad.addColorStop(0, `rgba(243,241,235,${0.11 * ease(intro)})`)
      grad.addColorStop(1, 'rgba(243,241,235,0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(0, 0, 220 * ks, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    // Orbites (tracé progressif à l'intro)
    const orbitDraw = ease((intro - 0.15) / 0.7)
    if (orbitDraw > 0) {
      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(243,241,235,0.14)'
      orbits.forEach((o, i) => {
        ctx.beginPath()
        const startA = i === 0 ? Math.PI * 0.9 : Math.PI * 0.2
        ctx.ellipse(cx + px * 1.6, cy + py * 1.6, o.a, o.b, tilt, startA, startA + Math.PI * 2 * orbitDraw)
        ctx.stroke()
      })
    }

    // Lueur diffuse autour du curseur quand il approche de l'étoile
    const L = pointer.light
    if (L > 0.01) {
      const gr = 170 * Math.max(ks, 0.6)
      const g = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, gr)
      g.addColorStop(0, `rgba(243,241,235,${0.07 * L})`)
      g.addColorStop(1, 'rgba(243,241,235,0)')
      ctx.fillStyle = g
      ctx.fillRect(pointer.x - gr, pointer.y - gr, gr * 2, gr * 2)
    }

    // Étoile
    const sigma = Math.max(48, 92 * ks)
    const inv2s2 = 1 / (2 * sigma * sigma)
    const rScale = Math.max(ks, 0.62)
    const push = 8 * Math.max(ks, 0.6)
    const sx = cx + px
    const sy = cy + py
    // Proximité globale du curseur : l'étoile entière s'éclaircit légèrement
    const dc = Math.hypot(pointer.x - sx, pointer.y - sy)
    const ambient = L * Math.exp(-(dc * dc) / (2 * (320 * ks) ** 2)) * 0.45
    ctx.fillStyle = '#f3f1eb'
    for (let i = 0; i < N; i++) {
      const appear = reducedMotion ? 1 : ease((intro * 1.35 - dist[i] / maxDist) * 2.2)
      if (appear <= 0) continue
      const o = STAR_POINTS[i * 4 + 3]
      const r0 = STAR_POINTS[i * 4 + 2]
      let x = sx + (STAR_POINTS[i * 4] - HALF) * ks
      let y = sy + (STAR_POINTS[i * 4 + 1] - HALF) * ks
      const dx = x - pointer.x
      const dy = y - pointer.y
      const d2 = dx * dx + dy * dy
      const glow = L * Math.exp(-d2 * inv2s2)
      if (glow > 0.002) {
        const d = Math.sqrt(d2) || 1
        x += (dx / d) * glow * push
        y += (dy / d) * glow * push
      }
      const twinkle = reducedMotion ? 0 : 0.14 * Math.sin(t * 1.4 + phase[i])
      const alpha = Math.min(1, o * (1 + twinkle) * (1 + ambient) + glow * 0.9) * appear
      const r = r0 * rScale * (1 + glow * 1.25) * (0.6 + 0.4 * appear)
      ctx.globalAlpha = alpha
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1

    // Vignettes en orbite
    const targetSpeed = hovered >= 0 || reducedMotion ? 0 : 1
    speed += (targetSpeed - speed) * (1 - Math.pow(0.04, dt))
    const cosT = Math.cos(tilt)
    const sinT = Math.sin(tilt)
    let front = -1
    let frontDepth = -Infinity
    const ox = cx + px * 1.6
    const oy = cy + py * 1.6
    const pos: { x: number; y: number; s: number }[] = []
    items.forEach((it, i) => {
      const o = orbits[it.orbit]
      theta[i] += ((Math.PI * 2) / ORBITS_DESKTOP[it.orbit].period) * dt * speed
      const lx = o.a * Math.cos(theta[i])
      const ly = o.b * Math.sin(theta[i])
      const x = ox + lx * cosT - ly * sinT
      const y = oy + lx * sinT + ly * cosT
      const depth = Math.sin(theta[i]) // +1 : devant l'étoile, -1 : derrière
      const dn = (depth + 1) / 2
      if (depth > frontDepth) {
        frontDepth = depth
        front = i
      }
      const appear = reducedMotion ? 1 : ease((intro - 0.35 - i * 0.07) / 0.45)
      const s = geo.cardScale * (0.6 + 0.42 * dn) * (0.85 + 0.15 * appear)
      pos.push({ x, y, s })
      const el = cards[i]
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${s.toFixed(3)})`
      el.style.opacity = String(((0.38 + 0.62 * dn) * appear).toFixed(3))
      el.style.zIndex = depth > 0 ? String(10 + Math.round(dn * 10)) : '1'
    })

    const nextActive = hovered >= 0 ? hovered : front
    if (nextActive !== active) {
      active = nextActive
      onActiveChange(active)
    }
    if (active >= 0) {
      const p = pos[active]
      const cardH = cards[active].offsetHeight * p.s
      // Le libellé reste dans l'écran, même quand la vignette frôle un bord
      const lx = Math.min(Math.max(12, p.x - (cards[active].offsetWidth * p.s) / 2), w - label.offsetWidth - 12)
      label.style.transform = `translate3d(${lx.toFixed(1)}px, ${(p.y + cardH / 2 + 10).toFixed(1)}px, 0)`
      label.style.zIndex = '30'
    }

    raf = requestAnimationFrame(frame)
  }

  function play() {
    if (!raf && running) {
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
  }

  // --- Événements ---
  const onPointerMove = (e: PointerEvent) => {
    const rect = stage.getBoundingClientRect()
    pointer.tx = e.clientX - rect.left
    pointer.ty = e.clientY - rect.top
    pointer.tnx = (pointer.tx / rect.width - 0.5) * 2
    pointer.tny = (pointer.ty / rect.height - 0.5) * 2
    if (e.pointerType === 'touch') lastTouch = performance.now()
    pointer.targetLight = 1
  }
  const onPointerLeave = () => {
    if (canHover) pointer.targetLight = 0
    pointer.tnx = pointer.tny = 0
  }
  const section = stage.parentElement ?? stage
  section.addEventListener('pointermove', onPointerMove)
  section.addEventListener('pointerdown', onPointerMove)
  section.addEventListener('pointerleave', onPointerLeave)

  const ro = new ResizeObserver(() => measure())
  ro.observe(stage)

  const io = new IntersectionObserver(([entry]) => {
    running = entry.isIntersecting
    if (running) play()
  })
  io.observe(stage)

  measure()
  start = performance.now()
  play()

  return {
    setHovered(i: number) {
      hovered = i
    },
    destroy() {
      cancelAnimationFrame(raf)
      running = false
      ro.disconnect()
      io.disconnect()
      section.removeEventListener('pointermove', onPointerMove)
      section.removeEventListener('pointerdown', onPointerMove)
      section.removeEventListener('pointerleave', onPointerLeave)
    },
  }
}
