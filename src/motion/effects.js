import { RM, FINE, G, anim, $$, local } from './core'

/* ---------- étincelles pixel dans le ciel ---------- */
const sparks = []
function sizeSparks() {
  sparks.forEach((s) => {
    const d = Math.min(2, devicePixelRatio || 1)
    s.c.width = s.el.offsetWidth * d
    s.c.height = s.el.offsetHeight * d
    s.x.setTransform(d, 0, 0, d, 0, 0)
  })
}
function sparkle(el) {
  if (!el || RM || !FINE) return
  const c = document.createElement('canvas')
  c.className = 'spark'
  el.append(c)
  const s = { el, c, x: c.getContext('2d'), p: [] }
  sparks.push(s)
  sizeSparks()
  const cols = ['#F4F4F1', '#F4F4F1', '#C9D4F0', '#FFD9CC', '#FF4D1A']
  el.addEventListener('mousemove', (e) => {
    const q = local(el, e)
    for (let i = 0; i < 2; i++)
      s.p.push({
        x: q.x + (Math.random() - 0.5) * 26,
        y: q.y + (Math.random() - 0.5) * 26,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 0.7 - 0.15,
        l: 1,
        big: Math.random() < 0.14,
        col: cols[(Math.random() * cols.length) | 0],
      })
    if (s.p.length > 240) s.p.splice(0, s.p.length - 240)
  })
  ;(function loop() {
    if (!el.isConnected) {
      sparks.splice(sparks.indexOf(s), 1)
      return
    }
    const { x, p } = s
    if (p.length || s.dirty) {
      x.clearRect(0, 0, el.offsetWidth, el.offsetHeight)
      for (let i = p.length - 1; i >= 0; i--) {
        const q = p[i]
        q.x += q.vx
        q.y += q.vy
        q.l -= 0.02
        if (q.l <= 0) {
          p.splice(i, 1)
          continue
        }
        x.globalAlpha = q.l
        x.fillStyle = q.col
        const gx = Math.round(q.x / 4) * 4,
          gy = Math.round(q.y / 4) * 4
        if (q.big) {
          x.fillRect(gx - 4, gy, 12, 4)
          x.fillRect(gx, gy - 4, 4, 12)
        } else x.fillRect(gx, gy, 4, 4)
      }
      x.globalAlpha = 1
      s.dirty = p.length > 0
    }
    requestAnimationFrame(loop)
  })()
}

/* ---------- boutons magnétiques ---------- */
function magnetic(R) {
  if (!anim || !FINE) return
  $$('.btn, .send', R).forEach((b) => {
    const xt = G.quickTo(b, 'x', { duration: 0.6, ease: 'power3.out' }),
      yt = G.quickTo(b, 'y', { duration: 0.6, ease: 'power3.out' })
    b.addEventListener('mousemove', (e) => {
      const r = b.getBoundingClientRect(),
        k = b.offsetWidth / r.width
      xt((e.clientX - r.left - r.width / 2) * k * 0.28)
      yt((e.clientY - r.top - r.height / 2) * k * 0.4)
    })
    b.addEventListener('mouseleave', () => {
      xt(0)
      yt(0)
    })
  })
}

export { sizeSparks, sparkle, magnetic }
