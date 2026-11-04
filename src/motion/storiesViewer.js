import { G, anim, $, $$ } from './core'
import { go } from './nav'
import { stories } from './standingVideo'

/* ---------- stories Instagram du studio ---------- */
let SX = { open() {} }
function initStories() {
  SX = (() => {
    const sx = $('#sx')
    if (!sx) return { open() {} }
    const goBtn = $('.sx-go', sx)
    const groups = $$('.sx-g', sx),
      bars = $('.sx-bars', sx),
      name = $('.sx-name', sx),
      av = $('.sx-av', sx),
      cap = $('.sx-cap', sx),
      snd = $('.sx-snd', sx)
    let g = 0,
      i = 0,
      t0 = 0,
      dur = 5000,
      held = false,
      heldAt = 0,
      raf = null,
      last = null,
      muted = true
    const slides = () => $$('.sx-sl', groups[g])
    const vid = () => {
      const s = slides()[i]
      return s && s.dataset.t === 'video' ? $('video', s) : null
    }
    function stopVid() {
      $$('video', sx).forEach((v) => {
        v.pause()
      })
    }
    function show() {
      stopVid()
      groups.forEach((el, k) => {
        el.hidden = k !== g
      })
      const ss = slides()
      ss.forEach((s, k) => s.classList.toggle('on', k === i))
      bars.innerHTML = ss.map((_, k) => `<i><b style="width:${k < i ? 100 : 0}%"></b></i>`).join('')
      name.textContent = groups[g].dataset.name
      const th = $('.sx-th', groups[g])
      av.className = 'sx-av' + (th.classList.contains('logo') ? ' logo' : '')
      av.innerHTML = th.innerHTML
      cap.textContent = ss[i].dataset.cap || ''
      goBtn.hidden = !groups[g].dataset.go
      const v = vid()
      snd.hidden = !v
      if (v) {
        v.muted = muted
        v.currentTime = 0
        v.play().catch(() => {})
        dur = 0
      } else dur = 5000
      t0 = performance.now()
      const b = $$('b', bars)[i]
      cancelAnimationFrame(raf)
      const tick = (now) => {
        if (held) {
          raf = requestAnimationFrame(tick)
          return
        }
        let p
        const vv = vid()
        if (vv) p = vv.duration ? vv.currentTime / vv.duration : 0
        else p = (now - t0) / dur
        if (b) b.style.width = Math.min(100, p * 100) + '%'
        if (p >= 1 || (vv && vv.ended)) {
          next()
          return
        }
        raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
      const ring = $$(`.sx-b[data-g="${g}"]`)
      ring.forEach((r) => r.classList.add('seen'))
    }
    const same = (k) => groups[k] && groups[k].dataset.set === groups[g].dataset.set
    function next() {
      if (i < slides().length - 1) i++
      else if (same(g + 1)) {
        g++
        i = 0
      } else {
        close()
        return
      }
      show()
    }
    function prev() {
      if (i > 0) i--
      else if (same(g - 1)) {
        g--
        i = 0
      }
      show()
    }
    function open(k) {
      last = document.activeElement
      g = k
      i = 0
      sx.hidden = false
      document.documentElement.style.overflow = 'hidden'
      show()
      $('.sx-x', sx).focus({ preventScroll: true })
      if (anim)
        G.fromTo(
          $('.sx-box', sx),
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.6)', clearProps: 'transform' },
        )
    }
    function close() {
      cancelAnimationFrame(raf)
      stopVid()
      sx.hidden = true
      document.documentElement.style.overflow = ''
      if (last && last.focus) last.focus({ preventScroll: true })
    }
    $('.sx-next', sx).addEventListener('click', () => {
      if (performance.now() - heldAt > 250 || !heldAt) next()
    })
    $('.sx-prev', sx).addEventListener('click', () => {
      if (performance.now() - heldAt > 250 || !heldAt) prev()
    })
    ;['pointerdown'].forEach((ev) =>
      $('.sx-box', sx).addEventListener(ev, (e) => {
        if (e.target.closest('.sx-head')) return
        held = true
        heldAt = 0
        const v = vid()
        if (v) v.pause()
      }),
    )
    ;['pointerup', 'pointerleave'].forEach((ev) =>
      $('.sx-box', sx).addEventListener(ev, () => {
        if (!held) return
        held = false
        heldAt = performance.now()
        const v = vid()
        if (v) v.play().catch(() => {})
        t0 = performance.now() - (parseFloat(($$('b', bars)[i] || {}).style?.width || 0) / 100) * dur
      }),
    )
    snd.addEventListener('click', (e) => {
      e.stopPropagation()
      muted = !muted
      const v = vid()
      if (v) v.muted = muted
      snd.setAttribute('aria-label', muted ? 'Activer le son' : 'Couper le son')
      snd.style.color = muted ? '#fff' : 'var(--acc)'
    })
    $$('[data-close]', sx).forEach((el) => el.addEventListener('click', close))
    goBtn.addEventListener('pointerdown', (e) => e.stopPropagation())
    goBtn.addEventListener('click', (e) => {
      e.stopPropagation()
      const v = groups[g].dataset.go
      close()
      go(v)
    })
    addEventListener('keydown', (e) => {
      if (sx.hidden) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    })
    return { open }
  })()
}

export { SX, initStories }
