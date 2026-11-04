import { G, anim, $, $$ } from './core'
import { steps } from './sections'

/* ---------- pop-up « Démarrer un projet » ---------- */
let PJ = { open() {} }
function initProjectModal() {
  PJ = (() => {
    const pj = $('#pj')
    if (!pj) return { open() {} }
    const box = $('.pj-box', pj),
      veil = $('.pj-veil', pj),
      form = $('.pj-form', pj),
      steps = $$('.pj-step', pj)
    const next = $('.pj-next', pj),
      back = $('.pj-back', pj),
      hint = $('.pj-hint', pj),
      count = $('.pj-count', pj)
    const prog = $$('.pj-prog i', pj),
      side = $$('.pj-steps li', pj),
      foot = $('.pj-foot', pj)
    const LABELS = ['Continuer', 'Choisir un créneau', 'Confirmer le rendez-vous']
    let cur = 0,
      last = null,
      done = false
    const book = { day: null, slot: null, view: null }
    const val = (n) => $(`[name="${n}"]:checked`, form)?.value || ''
    const types = () => $$('[name="type"]:checked', form).map((i) => i.value)
    const fmtDay = (d) => d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })

    // disponibilités d'exemple : jours ouvrés à partir de demain, sur 30 jours, quelques créneaux déjà pris
    const SLOTS = [
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
    ]
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const first = new Date(today)
    first.setDate(first.getDate() + 1)
    const lastDay = new Date(today)
    lastDay.setDate(lastDay.getDate() + 30)
    const key = (d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
    const hash = (str) => {
      let h = 7
      for (const c of str) h = (h * 31 + c.charCodeAt(0)) >>> 0
      return h
    }
    const free = (d) =>
      d.getDay() === 0 || d.getDay() === 6 || d < first || d > lastDay
        ? []
        : SLOTS.filter((t) => hash(key(d) + t) % 10 > 3)
    book.view = new Date(first.getFullYear(), first.getMonth(), 1)

    function renderCal() {
      const v = book.view,
        days = $('.pj-days', pj)
      $('.pj-month', pj).textContent = v.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
      const lead = (new Date(v.getFullYear(), v.getMonth(), 1).getDay() + 6) % 7,
        n = new Date(v.getFullYear(), v.getMonth() + 1, 0).getDate()
      let h = '<span></span>'.repeat(lead)
      for (let i = 1; i <= n; i++) {
        const d = new Date(v.getFullYear(), v.getMonth(), i),
          ok = free(d).length > 0
        const cls = [
          ok ? 'av' : '',
          +d === +today ? 'today' : '',
          book.day && +d === +book.day ? 'sel' : '',
        ].join(' ')
        h += `<button type="button" class="${cls}" data-d="${i}"${ok ? '' : ' disabled'} aria-label="${fmtDay(d)}${ok ? '' : ', indisponible'}">${i}</button>`
      }
      days.innerHTML = h
      const [pv, nx] = $$('.pj-nav', pj)
      pv.disabled = v.getFullYear() === first.getFullYear() && v.getMonth() <= first.getMonth()
      nx.disabled = v.getFullYear() === lastDay.getFullYear() && v.getMonth() >= lastDay.getMonth()
      $$('button.av', days).forEach(
        (btn) =>
          (btn.onclick = () => {
            book.day = new Date(v.getFullYear(), v.getMonth(), +btn.dataset.d)
            book.slot = null
            renderCal()
            renderSlots()
            update()
          }),
      )
    }
    function renderSlots() {
      const t = $('.pj-times', pj),
        title = $('.pj-day-t', pj)
      if (!book.day) {
        title.textContent = 'Choisissez un jour'
        t.innerHTML =
          '<div class="pj-empty">Les jours marqués d’un carré orange ont des créneaux libres.</div>'
        return
      }
      const fd = fmtDay(book.day)
      title.textContent = fd.charAt(0).toUpperCase() + fd.slice(1)
      t.innerHTML = free(book.day)
        .map(
          (s) =>
            `<button type="button" class="${s === book.slot ? 'sel' : ''}" data-t="${s}">${s.replace(':', ' h ')}</button>`,
        )
        .join('')
      $$('button', t).forEach(
        (btn) =>
          (btn.onclick = () => {
            book.slot = btn.dataset.t
            renderSlots()
            update()
          }),
      )
      if (anim)
        G.from($$('button', t), { y: 8, opacity: 0, duration: 0.35, stagger: 0.02, ease: 'power3.out' })
    }
    $$('.pj-nav', pj).forEach(
      (btn) =>
        (btn.onclick = () => {
          book.view = new Date(book.view.getFullYear(), book.view.getMonth() + +btn.dataset.m, 1)
          renderCal()
        }),
    )

    function summary() {
      const s = $$('.pj-sum', pj),
        ty = types()
      s[0].textContent = ty.length
        ? [ty.join(', '), val('kind'), val('budget'), val('when')].filter(Boolean).join(' · ')
        : 'Type, budget, délai'
      const pn = $('#pj-prenom').value.trim(),
        nm = $('#pj-nom').value.trim(),
        em = $('#pj-email').value.trim()
      s[1].textContent =
        pn || em
          ? [[pn, nm].filter(Boolean).join(' '), em].filter(Boolean).join(' · ')
          : 'Pour vous recontacter'
      s[2].textContent = book.slot
        ? `${fmtDay(book.day)} · ${book.slot.replace(':', ' h ')} · ${val('mode')}`
        : 'Appel de 30 minutes'
    }
    function check(i) {
      $$('.pj-f.err', pj).forEach((f) => f.classList.remove('err'))
      if (i === 0 && !types().length) return 'Choisissez au moins un type de projet.'
      if (i === 1) {
        if (!$('#pj-prenom').value.trim()) {
          $('#pj-prenom').closest('.pj-f').classList.add('err')
          $('#pj-prenom').focus()
          return 'Indiquez votre prénom.'
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test($('#pj-email').value.trim())) {
          $('#pj-email').closest('.pj-f').classList.add('err')
          $('#pj-email').focus()
          return 'Indiquez une adresse e-mail valide.'
        }
      }
      if (i === 2 && !book.slot) return 'Choisissez un jour puis un horaire.'
      return ''
    }
    function update() {
      summary()
      hint.textContent = ''
      next.textContent = LABELS[Math.min(cur, 2)]
      next.setAttribute('aria-disabled', cur === 2 && !book.slot)
      back.style.visibility = cur > 0 && cur < 3 ? 'visible' : 'hidden'
      foot.hidden = cur === 3
      count.textContent = cur < 3 ? `Étape ${cur + 1} sur 3` : 'Demande envoyée'
      prog.forEach((p, k) => {
        p.className = k < cur ? 'on' : k === cur ? 'cur' : ''
      })
      side.forEach((l, k) => {
        l.classList.toggle('on', k === cur)
        l.classList.toggle('done', k < cur)
      })
    }
    function show(i, dir = 1) {
      const from = steps[cur],
        to = steps[i]
      cur = i
      update()
      const swap = () => {
        steps.forEach((s) => (s.hidden = s !== to))
        form.scrollTop = 0
      }
      if (!anim || from === to) {
        swap()
        return
      }
      G.to(from, {
        x: -24 * dir,
        opacity: 0,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: () => {
          swap()
          G.set(from, { clearProps: 'all' })
          G.fromTo(
            to,
            { x: 30 * dir, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', clearProps: 'transform' },
          )
          G.from(to.children, {
            y: 14,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power3.out',
            delay: 0.05,
          })
        },
      })
    }
    function finish(withSlot) {
      const pn = $('#pj-prenom').value.trim(),
        mode = val('mode')
      $('.pj-done-t', pj).textContent = `C’est noté${pn ? ', ' + pn : ''}.`
      const gcal = $('.pj-gcal', pj),
        ticket = $('.pj-ticket', pj)
      if (withSlot) {
        const [hh, mm] = book.slot.split(':').map(Number),
          d = book.day
        const p2 = (n) => String(n).padStart(2, '0'),
          stamp = (h, m) => `${d.getFullYear()}${p2(d.getMonth() + 1)}${p2(d.getDate())}T${p2(h)}${p2(m)}00`
        const endM = hh * 60 + mm + 30
        const where =
          mode === 'Visio'
            ? 'en visio (Google Meet)'
            : mode === 'Téléphone'
              ? 'par téléphone'
              : 'au studio (Paris 8e)'
        $('.pj-done-p', pj).textContent =
          `Rendez-vous le ${fmtDay(d)} à ${book.slot.replace(':', ' h ')} (heure de Paris), ${where}, avec Julien ou Théo. Un récapitulatif de votre projet leur est transmis avant l’appel.`
        ticket.innerHTML = `<div class="d"><b>${d.getDate()}</b><small>${d.toLocaleDateString('fr-FR', { month: 'short' }).replace('.', '')}</small></div>
        <div class="t"><b>Appel découverte · 30 min</b><span>${fmtDay(d)}, ${book.slot.replace(':', ' h ')} – ${p2(Math.floor(endM / 60))} h ${p2(endM % 60)} · ${mode}</span><span>${types().join(', ')}</span></div>`
        ticket.hidden = false
        const q = new URLSearchParams({
          action: 'TEMPLATE',
          text: 'Appel découverte — Orion Studio',
          dates: `${stamp(hh, mm)}/${stamp(Math.floor(endM / 60), endM % 60)}`,
          ctz: 'Europe/Paris',
          details: `30 minutes avec Julien ou Théo (Orion Studio), ${where}.`,
          location: mode === 'Au studio' ? '60 rue François Ier, 75008 Paris' : '',
        })
        gcal.href = 'https://calendar.google.com/calendar/render?' + q.toString()
        gcal.hidden = false
      } else {
        $('.pj-done-p', pj).textContent =
          'Julien ou Théo vous rappelle pour en parler, avec un récapitulatif de votre projet sous les yeux.'
        ticket.hidden = true
        gcal.hidden = true
      }
      done = true
      show(3)
      if (anim)
        G.fromTo(
          $('.pj-ok', pj),
          { scale: 0, rotate: -20 },
          { scale: 1, rotate: 0, duration: 0.7, ease: 'back.out(2.5)', delay: 0.3 },
        )
    }
    next.onclick = () => {
      const err = check(cur)
      if (err) {
        hint.textContent = err
        if (anim) G.fromTo(next, { x: -6 }, { x: 0, duration: 0.5, ease: 'elastic.out(1,.3)' })
        return
      }
      if (cur === 2) finish(true)
      else show(cur + 1, 1)
    }
    back.onclick = () => cur > 0 && show(cur - 1, -1)
    $('.pj-skip', pj).onclick = () => finish(false)
    form.addEventListener('change', () => {
      hint.textContent = ''
      summary()
    })
    form.addEventListener('input', () => summary())
    form.addEventListener('submit', (e) => e.preventDefault())
    $$('[name="mode"]', form).forEach((r) => r.addEventListener('change', summary))

    function reset() {
      form.reset()
      book.day = null
      book.slot = null
      book.view = new Date(first.getFullYear(), first.getMonth(), 1)
      done = false
      steps.forEach((s, k) => (s.hidden = k !== 0))
      cur = 0
      renderCal()
      renderSlots()
      update()
    }
    function open() {
      if (!pj.hidden) return
      if (done) reset()
      last = document.activeElement
      pj.hidden = false
      document.documentElement.style.overflow = 'hidden'
      update()
      if (anim) {
        G.fromTo(veil, { opacity: 0 }, { opacity: 1, duration: 0.4 })
        G.fromTo(
          box,
          { y: 40, scale: 0.97, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.7, ease: 'expo.out', clearProps: 'transform' },
        )
        G.from([...$$('.pj-side-in > *', pj), ...steps[cur].children], {
          y: 16,
          opacity: 0,
          duration: 0.6,
          stagger: 0.04,
          ease: 'power3.out',
          delay: 0.15,
        })
      }
      setTimeout(() => ($('input', steps[cur]) || $('.pj-x', pj)).focus({ preventScroll: true }), 80)
    }
    function close() {
      if (pj.hidden) return
      const end = () => {
        pj.hidden = true
        document.documentElement.style.overflow = ''
        G && G.set([box, veil], { clearProps: 'all' })
        last && last.focus && last.focus({ preventScroll: true })
      }
      if (!anim) {
        end()
        return
      }
      G.to(veil, { opacity: 0, duration: 0.3 })
      G.to(box, { y: 24, scale: 0.98, opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: end })
    }
    $$('[data-close]', pj).forEach((el) => el.addEventListener('click', close))
    pj.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        const f = $$('button, [href], input, textarea', box).filter(
          (el) => !el.disabled && el.offsetParent !== null && !el.closest('[hidden]'),
        )
        if (!f.length) return
        if (e.shiftKey && document.activeElement === f[0]) {
          e.preventDefault()
          f[f.length - 1].focus()
        } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) {
          e.preventDefault()
          f[0].focus()
        }
      }
    })
    // sur la fenêtre : le focus peut avoir quitté la pop-up (étape masquée, Safari)
    addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !pj.hidden) {
        e.preventDefault()
        close()
      }
    })
    renderCal()
    renderSlots()
    update()
    return { open }
  })()
}

export { PJ, initProjectModal }
