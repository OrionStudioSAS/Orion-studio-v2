import { RM, ST, $, $$ } from './core'

/* ---------- vidéo Stand-ING : story + lecteur 16:9 ---------- */
let LB = null
function stories() {
  return $$('.sv-phone')
}
function openLB() {
  if (!LB) return
  stories().forEach((ph) => {
    const f = $('.sv-fg', ph)
    if (f) {
      f.pause()
      $('.sv-bg', ph).pause()
      ph.classList.add('paused')
    }
  })
  LB.hidden = false
  document.documentElement.style.overflow = 'hidden'
  const v = $('.sv-lb-v', LB)
  v.currentTime = 0
  v.play().catch(() => {})
  $('.sv-lb-x', LB).focus({ preventScroll: true })
}
function closeLB() {
  if (!LB || LB.hidden) return
  $('.sv-lb-v', LB).pause()
  LB.hidden = true
  document.documentElement.style.overflow = ''
}
function initLightbox() {
  LB = $('#sv-lb')
  if (LB) {
    $$('[data-close]', LB).forEach((el) => el.addEventListener('click', closeLB))
    addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLB()
    })
  }
}
function storyInit(R) {
  $$('.sv-phone', R).forEach((ph) => {
    const fg = $('.sv-fg', ph),
      bg = $('.sv-bg', ph),
      bar = $('.sv-bar i', ph),
      snd = $('.sv-snd', ph)
    let want = !RM
    const play = () => {
      fg.play().catch(() => {})
      bg.play().catch(() => {})
      ph.classList.remove('paused')
    }
    const pause = () => {
      fg.pause()
      bg.pause()
      ph.classList.add('paused')
    }
    const sound = (on) => {
      fg.muted = !on
      ph.classList.toggle('sound', on)
      snd.setAttribute('aria-label', on ? 'Couper le son' : 'Activer le son')
    }
    fg.addEventListener('timeupdate', () => {
      if (fg.duration) bar.style.width = (fg.currentTime / fg.duration) * 100 + '%'
      if (Math.abs(bg.currentTime - fg.currentTime) > 0.4) bg.currentTime = fg.currentTime
    })
    snd.addEventListener('click', (e) => {
      e.stopPropagation()
      sound(fg.muted)
      want = true
      play()
    })
    ph.addEventListener('click', () => {
      if (fg.muted) {
        sound(true)
        want = true
        play()
      } else if (fg.paused) {
        want = true
        play()
      } else {
        want = false
        pause()
      }
    })
    ph.setAttribute('role', 'button')
    ph.tabIndex = 0
    ph.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        ph.click()
      }
    })
    if (RM) ph.classList.add('paused')
    if (ST)
      ST.create({
        trigger: ph,
        start: 'top bottom',
        end: 'bottom top',
        onToggle: (st) => {
          if (st.isActive && want && R.offsetWidth) play()
          else if (!st.isActive) pause()
        },
      })
  })
  $$('.sv-open', R).forEach((btn) =>
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      openLB()
    }),
  )
}

export { stories, initLightbox, storyInit }
