import { G, ST, anim, $, $$, onView } from './core'
import { PJ } from './projectModal'

/* ---------- page Le studio : Doggy, polaroids, étapes ---------- */
function doggyInit(R) {
  $$('.dg', R).forEach((d) => {
    const bub = $('.dg-bub', d),
      hello = bub ? bub.textContent : ''
    const line = d.classList.contains('pp')
      ? 'On en parle ? Choisissez un créneau.'
      : 'Je préviens Julien et Théo !'
    const hop = () => {
      d.classList.remove('hop')
      void d.offsetWidth
      d.classList.add('hop')
    }
    const act = () => {
      hop()
      if (bub) {
        bub.textContent = line
        d.classList.add('talk')
      }
      setTimeout(() => {
        d.classList.remove('talk')
        if (bub) bub.textContent = hello
        PJ.open()
      }, 800)
    }
    d.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      act()
    })
    d.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        act()
      }
    })
    d.addEventListener('mouseenter', hop)
  })
}
function wall(R) {
  const ps = $$('.st2-wall .pw', R)
  if (!anim || !ps.length) return
  G.set(ps, { y: 140, opacity: 0, rotate: () => (Math.random() - 0.5) * 24 })
  onView(
    $('.st2-wall', R),
    () =>
      G.to(ps, {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.1,
        ease: 'back.out(1.4)',
        stagger: { each: 0.09, from: 'random' },
      }),
    'top 80%',
  )
}
function stepWalk(R) {
  const tr = $('.s2-track', R)
  if (!tr) return
  const dg = $('.s2-dog .dg', tr),
    bar = $('.s2-bar', tr),
    cells = $$('.s2-bar span', tr),
    st = $$('.s2-st', tr)
  const set = (p) => {
    const n = Math.round(p * cells.length)
    cells.forEach((c, i) => {
      c.className = i < n - 1 ? 'on' : i === n - 1 ? 'cur' : ''
    })
    const k = Math.min(st.length - 1, Math.floor(p * st.length * 0.999))
    st.forEach((s, i) => {
      s.classList.toggle('on', p > 0.02 && i <= k)
      s.classList.toggle('cur', p > 0.02 && i === k)
    })
    const w = bar.offsetWidth - dg.offsetWidth
    dg.style.transform = `translate(${p * w}px, ${-Math.abs(Math.sin(p * Math.PI * 14)) * 18}px)`
  }
  if (!anim) {
    set(1)
    return
  }
  set(0)
  ST.create({
    trigger: tr,
    start: 'top 72%',
    end: 'bottom 45%',
    onUpdate: (s) => set(s.progress),
    onRefresh: (s) => set(s.progress),
  })
}

/* ---------- scène pixel du studio : Julien et Théo vont à leur bureau, Doggy court ---------- */
function crewAnim(R) {
  const cr = $('.crew', R)
  if (!cr || !anim || !cr.dataset.pos) return
  const P = JSON.parse(cr.dataset.pos),
    J = $('.cm-j', cr),
    T = $('.cm-t', cr),
    D = $('.cm-dog', cr)
  const add =
      (el, ...c) =>
      () =>
        el.classList.add(...c),
    rm =
      (el, ...c) =>
      () =>
        el.classList.remove(...c)
  const tl = G.timeline({ repeat: -1, paused: true, defaults: { ease: 'none' } })
  tl.set(J, { left: P.rest[0] + '%' })
    .set(T, { left: P.rest[1] + '%' })
    .set(D, { left: P.rest[2] + '%' })
    .to({}, { duration: 1.8 })
    .addLabel('go')
    .call(add(J, 'walking'), null, 'go')
    .call(add(T, 'walking'), null, 'go')
    .to(J, { left: P.desk[0] + '%', duration: 2.3 }, 'go')
    .to(T, { left: P.desk[1] + '%', duration: 2.5 }, 'go')
    .call(rm(J, 'walking'), null, 'go+=2.3')
    .call(add(J, 'think'), null, 'go+=2.4')
    .call(rm(T, 'walking'), null, 'go+=2.5')
    .call(add(T, 'think'), null, 'go+=2.6')
    .call(add(D, 'running'), null, 'go+=1.3')
    .to(D, { left: P.dog[0] + '%', duration: 1.3, ease: 'power1.inOut' }, 'go+=1.3')
    .call(rm(D, 'running'), null, 'go+=2.6')
    .call(add(D, 'think'), null, 'go+=2.6')
    .call(rm(D, 'think'), null, 'go+=3.6')
    .call(add(D, 'running'), null, 'go+=3.6')
    .to(D, { left: P.dog[1] + '%', duration: 1.7, ease: 'power1.inOut' }, 'go+=3.6')
    .call(rm(D, 'running'), null, 'go+=5.3')
    .call(add(D, 'think'), null, 'go+=5.3')
    .addLabel('back', 'go+=6.6')
    .call(
      () => {
        ;[J, T, D].forEach((e) => e.classList.remove('think'))
        J.classList.add('walking')
        T.classList.add('walking')
        D.classList.add('running')
      },
      null,
      'back',
    )
    .to(J, { left: P.rest[0] + '%', duration: 2.3 }, 'back')
    .to(T, { left: P.rest[1] + '%', duration: 2.5 }, 'back')
    .to(D, { left: P.rest[2] + '%', duration: 1.8, ease: 'power1.inOut' }, 'back')
    .call(rm(D, 'running'), null, 'back+=1.8')
    .call(rm(J, 'walking'), null, 'back+=2.3')
    .call(rm(T, 'walking'), null, 'back+=2.5')
    .to({}, { duration: 3.2 }, 'back+=2.5')
  ST.create({
    trigger: cr,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (st) => {
      if (st.isActive && R.offsetWidth) tl.play()
      else tl.pause()
    },
  })
}

export { doggyInit, wall, stepWalk, crewAnim }
