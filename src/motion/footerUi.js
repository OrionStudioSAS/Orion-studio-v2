import { G, ST, anim, $, $$, esc } from './core'
import { footer } from './sections'

/* ---------- logos clients : apparition / disparition en boucle ---------- */
const CL_NAMES = ['Osmose Nutrition', 'Parker & Smith', 'Groupe Colas', 'Absolute Boat']
function logoCycle(cells) {
  if (!cells.length || !anim) return
  const pool = [
    ...cells.map((c) => c.innerHTML),
    ...CL_NAMES.map((n) => `<span class="cl-name">${esc(n)}</span>`),
  ]
  cells.forEach((c) => {
    c.innerHTML = `<span class="cl-in">${c.innerHTML}</span>`
  })
  const shown = cells.map((_, i) => i)
  let next = cells.length,
    last = -1,
    running = false,
    timer = null
  const tick = () => {
    timer = null
    if (!running) return
    let i
    do {
      i = (Math.random() * cells.length) | 0
    } while (i === last && cells.length > 1)
    last = i
    let k = next % pool.length,
      guard = 0
    while (shown.includes(k) && guard++ < pool.length) k = (k + 1) % pool.length
    next = k + 1
    shown[i] = k
    const cell = cells[i],
      cur = $('.cl-in', cell),
      nw = document.createElement('span')
    nw.className = 'cl-in'
    nw.innerHTML = pool[k]
    cell.append(nw)
    if (cur)
      G.to(cur, {
        yPercent: -70,
        opacity: 0,
        duration: 0.5,
        ease: 'steps(6)',
        onComplete: () => cur.remove(),
      })
    G.fromTo(
      nw,
      { yPercent: 70, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.6, ease: 'steps(7)', delay: 0.18 },
    )
    timer = G.delayedCall(1.7, tick)
  }
  ST.create({
    trigger: cells[0].parentNode,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (st) => {
      running = st.isActive
      if (running && !timer) timer = G.delayedCall(2.2, tick)
    },
  })
}

/* ---------- footer : lettre d'Orion et langue ---------- */
function footerUI(R) {
  $$('.nl-f', R).forEach((f, i) => {
    if (f.dataset.ok) return
    f.dataset.ok = 1
    const form = document.createElement('form')
    form.className = f.className
    form.noValidate = true
    form.innerHTML = `<label class="ow-sr" for="nl-${i}">Votre e-mail</label><input id="nl-${i}" name="nl-${i}" type="email" autocomplete="email" placeholder="votre@email.fr"><button type="submit">S’inscrire</button>`
    f.replaceWith(form)
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const v = $('input', form).value.trim()
      let msg =
        form.nextElementSibling && form.nextElementSibling.classList.contains('nl-msg')
          ? form.nextElementSibling
          : null
      if (!msg) {
        msg = document.createElement('div')
        msg.className = 'nl-msg'
        form.after(msg)
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
        msg.className = 'nl-msg err'
        msg.textContent = 'Indiquez une adresse e-mail valide.'
        return
      }
      msg.className = 'nl-msg'
      msg.innerHTML = `Merci, c’est noté : la prochaine lettre arrive à <b>${esc(v)}</b>.<small>Prototype : aucune donnée n’est envoyée.</small>`
      form.reset()
      if (anim) G.from(msg, { y: 8, opacity: 0, duration: 0.45, ease: 'power3.out' })
    })
  })
  $$('.ft-lang', R).forEach((l) =>
    $$('span', l).forEach((sp) => {
      sp.setAttribute('role', 'button')
      sp.tabIndex = 0
      sp.addEventListener('click', () => $$('span', l).forEach((x) => x.classList.toggle('on', x === sp)))
    }),
  )
}

export { logoCycle, footerUI }
