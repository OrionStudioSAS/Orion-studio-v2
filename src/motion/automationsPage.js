import { RM, G, ST, anim, $, $$, onView, smoothTo } from './core'
import { PJ } from './projectModal'

/* ---------- Automatisations : notes de visite, heures gagnées, liste pour l'audit ---------- */
function auPage(R, mob) {
  if (!$('.ax-page', R)) return
  // notes de visite : les lignes s'allument tour à tour
  const rows = $$('.ax-nr', R),
    box = $('.ax-notes', R)
  if (box && anim) {
    G.from(rows, { opacity: 0, x: 24, duration: 0.6, stagger: 0.12, delay: 1.2, ease: 'power3.out' })
    G.from($$('.ax-nv', R), { opacity: 0, duration: 0.3, stagger: 0.12, delay: 1.9 })
    let k = 0,
      t = null
    const step = () => {
      rows.forEach((r, i) => r.classList.toggle('live', i === k))
      k = (k + 1) % rows.length
      t = G.delayedCall(1.6, step)
    }
    ST.create({
      trigger: box,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (st) => {
        if (st.isActive) {
          if (!t) step()
        } else if (t) {
          t.kill()
          t = null
        }
      },
    })
  }
  // heures gagnées : la barre « Après » passe du noir à l'orange, de droite à gauche
  const gain = $$('.ax-hr2 .ax-cells i.g', R).reverse()
  if (gain.length && anim) {
    gain.forEach((c) => {
      c.style.background = 'var(--ink)'
    })
    onView(
      $('.ax-hrs', R),
      () =>
        gain.forEach((c, i) =>
          G.delayedCall(0.25 + i * 0.06, () => {
            c.style.background = ''
            G.fromTo(c, { scaleY: 0.4 }, { scaleY: 1, duration: 0.45, ease: 'back.out(3)' })
          }),
        ),
      'top 75%',
    )
  }
  // liste pour l'audit
  const list = $('.ax-list', R),
    ul = $('.ax-lu', R),
    cnt = $('.ax-lc', R),
    boxes = $$('.ax-t input', R)
  const picked = () => boxes.filter((i) => i.checked).map((i) => i.value)
  const render = () => {
    const p = picked()
    ul.innerHTML = p.map((t) => `<li>${t}</li>`).join('')
    cnt.textContent = p.length ? `${p.length} tâche${p.length > 1 ? 's' : ''}` : 'Aucune tâche'
    list.classList.toggle('has', p.length > 0)
    if (anim && p.length)
      G.fromTo(ul.lastElementChild, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.35 })
  }
  boxes.forEach((i) => i.addEventListener('change', render))
  const audit = (withList) => {
    PJ.open()
    setTimeout(() => {
      const ty = $('#pj-type-auto')
      if (ty && !ty.checked) {
        ty.checked = true
        ty.dispatchEvent(new Event('change', { bubbles: true }))
      }
      const msg = $('#pj-msg'),
        p = withList ? picked() : []
      if (msg)
        msg.value =
          'Audit sur place pour nos automatisations.' +
          (p.length ? '\nTâches repérées :\n- ' + p.join('\n- ') : '')
    }, 60)
  }
  $$('[data-au]', R).forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      const k = a.dataset.au
      if (k === 'pay') {
        const el = $(mob ? '#ax-mpay' : '#ax-pay', R)
        smoothTo(el.getBoundingClientRect().top + scrollY - 60)
        return
      }
      audit(k === 'list')
    }),
  )
}

export { auPage }
