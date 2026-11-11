import { NBSP, FINE, G, ST, anim, $, $$, esc, onWin, split, pixelate, typeIn, local } from './core'
import { sparkle } from './effects'
import { PJ } from './projectModal'

/* ---------- parcours « Analyser mon site » ---------- */
const IC_OK =
  '<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.2L4.3 8.5L11 1.5" stroke="#FF4D1A" stroke-width="1.8"/></svg>'
function chatFlow(chat, pfx) {
  if (!chat) return
  const comp = $('.ch2-comp, .mo-comp', chat)
  if (!comp || comp.dataset.flow) return
  comp.dataset.flow = 1
  const inBox = $('.ch2-in, .mo-in', comp),
    demo = $('.ch2-url', comp),
    hint = $('.ch2-hint', comp)
  const hint0 = hint ? hint.innerHTML : ''
  const send = $('.send', comp),
    sendTxt = [...send.childNodes].find((n) => n.nodeType === 3),
    send0 = sendTxt ? sendTxt.textContent : ''
  // les points à analyser se choisissent à l'étape 2 : le champ ne garde que l'adresse
  $$('.cr, .tg, .mo-crit', comp).forEach((c) => c.parentNode && c.parentNode.removeChild(c))
  const crBox = null,
    tg = null,
    ibs = $$('.ib', comp),
    plus = ibs[0],
    tune = null
  const sugs = $$('.sg', chat)
  const CHECK = IC_OK
  const OPTS = ['SEO', 'Design', 'Vitesse', 'Conversion', 'Visibilité IA']
  const BASE = OPTS
  const DESC = {
    Design: 'Image, lisibilité, cohérence de la marque',
    Mobile: 'Affichage et parcours sur téléphone',
    SEO: 'Ce que Google comprend de vos pages',
    Vitesse: 'Temps de chargement des pages',
    Conversion: 'Formulaires et appels à l’action',
    'Visibilité IA': 'Ce que ChatGPT, Perplexity et Gemini disent de vous',
    Accessibilité: 'Contrastes, tailles de texte, navigation au clavier',
  }
  let sel = new Set(BASE),
    mode = 'url',
    intent = null,
    need = null,
    file = null
  // champs réels (l'adresse de démonstration tapée par l'animation reste visible tant qu'on n'a pas cliqué)
  const field = document.createElement('input')
  Object.assign(field, {
    type: 'text',
    className: 'ch2-field',
    autocomplete: 'url',
    spellcheck: false,
    placeholder: 'https://www.votre-site.fr',
  })
  field.setAttribute('inputmode', 'url')
  field.setAttribute('aria-label', 'Adresse de votre site')
  field.id = pfx + '-url'
  const area = document.createElement('textarea')
  Object.assign(area, {
    className: 'ch2-area',
    rows: 2,
    placeholder: 'Votre activité, votre ville, ce que le site doit faire…',
  })
  area.setAttribute('aria-label', 'Décrivez votre projet')
  const err = document.createElement('div')
  err.className = 'ch2-err'
  err.hidden = true
  err.setAttribute('role', 'alert')
  const fileIn = document.createElement('input')
  Object.assign(fileIn, {
    type: 'file',
    hidden: true,
    accept: '.pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,.key,.pptx',
  })
  const fileChip = document.createElement('span')
  fileChip.className = 'ch2-file'
  fileChip.hidden = true
  ;(demo || inBox.firstChild).after(field, area)
  inBox.append(fileChip, err)
  comp.append(fileIn)
  const setSend = (t) => {
    if (sendTxt) sendTxt.textContent = t + ' '
  }
  const live = () => {
    if (mode !== 'url') return
    comp.classList.add('live')
    field.focus({ preventScroll: true })
  }
  const hideErr = () => {
    err.hidden = true
    comp.classList.remove('err')
  }
  const showErr = (m, el) => {
    err.textContent = m
    err.hidden = false
    comp.classList.add('err')
    comp.classList.remove('shake')
    void comp.offsetWidth
    comp.classList.add('shake')
    if (el) el.focus({ preventScroll: true })
  }
  const demoTxt = demo ? demo.textContent.trim() : '',
    projD = /\s/.test(demoTxt) && !/^https?:/i.test(demoTxt)
  if (projD) {
    mode = 'proj'
    comp.classList.add('projd')
    area.placeholder = demoTxt.replace(/\s+$/, '') || area.placeholder
    area.setAttribute('aria-label', 'Décrivez votre besoin')
  }
  inBox.addEventListener('click', (e) => {
    if (e.target.closest('a, button')) return
    if (mode === 'url') live()
    else {
      comp.classList.add('proj')
      area.focus()
    }
  })
  field.addEventListener('input', hideErr)
  area.addEventListener('input', hideErr)
  field.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      submit()
    }
  })
  area.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  })
  // critères : cochés / décochés, « Analyse complète », panneau de réglages
  function chip(o) {
    const c = document.createElement('span'),
      on = sel.has(o)
    c.className = 'cr' + (on ? '' : ' off')
    c.tabIndex = 0
    c.setAttribute('role', 'checkbox')
    c.setAttribute('aria-checked', on)
    c.dataset.o = o
    c.innerHTML = (on ? CHECK : '<i class="cr-box"></i>') + esc(o)
    const f = () => toggle(o, c)
    c.onclick = f
    c.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        f()
      }
    }
    return c
  }
  function toggle(o, c) {
    if (sel.has(o) && sel.size === 1) {
      if (c && anim) G.fromTo(c, { x: -4 }, { x: 0, duration: 0.4, ease: 'elastic.out(1,.3)' })
      showErr('Gardez au moins un point à analyser.')
      return
    }
    sel.has(o) ? sel.delete(o) : sel.add(o)
    hideErr()
    renderCrit()
    syncPop()
  }
  function renderCrit() {
    if (!crBox) return
    $$('.cr', crBox).forEach((c) => c.remove())
    OPTS.filter((o) => BASE.includes(o) || sel.has(o)).forEach((o) => crBox.append(chip(o)))
    const full = OPTS.every((o) => sel.has(o))
    if (tg) {
      tg.classList.toggle('on', full)
      tg.setAttribute('aria-pressed', full)
    }
  }
  if (tg) {
    tg.setAttribute('role', 'button')
    tg.tabIndex = 0
    tg.title = 'Tout analyser'
    const f = () => {
      const full = OPTS.every((o) => sel.has(o))
      sel = new Set(full ? BASE : OPTS)
      hideErr()
      renderCrit()
      syncPop()
    }
    tg.onclick = f
    tg.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        f()
      }
    }
  }
  let pop = null
  function syncPop() {
    if (pop)
      $$('input', pop).forEach((i) => {
        i.checked = sel.has(i.value)
      })
  }
  function closePop() {
    if (!pop) return
    pop.remove()
    pop = null
    if (tune) tune.classList.remove('on')
  }
  function openPop() {
    if (pop) {
      closePop()
      return
    }
    pop = document.createElement('div')
    pop.className = 'ch2-pop'
    pop.setAttribute('role', 'dialog')
    pop.setAttribute('aria-label', 'Points à analyser')
    pop.innerHTML =
      `<h4>Que regarde-t-on${NBSP}?</h4>` +
      OPTS.map(
        (o) =>
          `<label><input type="checkbox" value="${esc(o)}"${sel.has(o) ? ' checked' : ''}><span><b>${esc(o)}</b>${DESC[o] ? `<small>${DESC[o]}</small>` : ''}</span></label>`,
      ).join('') +
      '<div class="ch2-pop-f"><button type="button" class="cf-back" data-all>Tout cocher</button><button type="button" class="ch2-pop-ok">OK</button></div>'
    comp.append(pop)
    if (tune) tune.classList.add('on')
    $$('input', pop).forEach(
      (i) =>
        (i.onchange = () => {
          if (!i.checked && sel.size === 1) {
            i.checked = true
            return
          }
          i.checked ? sel.add(i.value) : sel.delete(i.value)
          renderCrit()
        }),
    )
    $('[data-all]', pop).onclick = () => {
      sel = new Set(OPTS)
      renderCrit()
      syncPop()
    }
    $('.ch2-pop-ok', pop).onclick = closePop
    if (anim) G.from(pop, { y: 10, opacity: 0, duration: 0.35, ease: 'power3.out' })
    $('input', pop).focus({ preventScroll: true })
  }
  onWin('click', (e) => {
    if (pop && !pop.contains(e.target) && !(tune && tune.contains(e.target))) closePop()
  })
  comp.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pop) {
      e.stopPropagation()
      closePop()
      tune && tune.focus()
    }
  })
  const btn = (el, label, f) => {
    if (!el) return
    el.setAttribute('role', 'button')
    el.tabIndex = 0
    el.setAttribute('aria-label', label)
    el.title = label
    el.onclick = f
    el.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        f()
      }
    }
  }
  btn(tune, 'Choisir les points à analyser', openPop)
  btn(plus, 'Joindre un fichier (cahier des charges, capture, brief)', () => fileIn.click())
  fileIn.onchange = () => {
    const f = fileIn.files[0]
    if (!f) return
    file = f.name
    fileChip.hidden = false
    fileChip.innerHTML = `<i></i>${esc(file.length > 32 ? file.slice(0, 29) + '…' : file)}<button type="button" aria-label="Retirer le fichier">×</button>`
    $('button', fileChip).onclick = (e) => {
      e.stopPropagation()
      file = null
      fileIn.value = ''
      fileChip.hidden = true
    }
    if (anim) G.from(fileChip, { scale: 0.8, opacity: 0, duration: 0.35, ease: 'back.out(2)' })
  }
  // amorces : chacune ouvre son propre parcours
  const kindOf = (t) =>
    /pas encore de site|^Créer mon site|nouvelle marque/i.test(t)
      ? 'new'
      : /Google Ads|Auditer mon compte|campagne|atterrissage/i.test(t)
        ? 'ads'
        : /ChatGPT|les IA/i.test(t)
          ? 'geo'
          : /Google|trouvé/i.test(t)
            ? 'seo'
            : /^Refaire/i.test(t)
              ? 'redo'
              : 'need'
  const HINT = {
    redo: 'Collez l’adresse du site à refaire : on vous montre ce qu’on changerait, maquette à l’appui.',
    seo: 'Collez votre adresse : on regarde ce qui vous empêche de remonter sur Google.',
    geo: 'Collez votre adresse : on regarde ce que ChatGPT, Perplexity et Gemini disent de votre activité.',
    ads: 'Collez votre adresse : on vérifie si vos pages sont prêtes à recevoir une campagne.',
    need: 'Vous avez déjà un site ? Collez son adresse. <a data-proj>Je n’ai pas encore de site</a>',
  }
  const CRIT = {
    seo: ['SEO', 'Vitesse', 'Mobile'],
    geo: ['Visibilité IA', 'SEO'],
    ads: ['Conversion', 'Vitesse', 'Mobile'],
  }
  function setHint(h) {
    if (!hint) return
    hint.innerHTML = h
    const a = $('[data-proj]', hint),
      b = $('[data-url]', hint)
    if (a)
      a.onclick = (e) => {
        e.stopPropagation()
        projMode()
      }
    if (b)
      b.onclick = (e) => {
        e.stopPropagation()
        urlMode(true)
      }
  }
  function urlMode(focus) {
    if (projD) {
      mode = 'proj'
      setHint(intent && HINT[intent] && intent !== 'need' ? HINT[intent] : hint0)
      if (focus) {
        comp.classList.add('proj')
        area.focus({ preventScroll: true })
      }
      return
    }
    mode = 'url'
    comp.classList.remove('proj')
    setSend(send0.trim())
    hideErr()
    setHint(intent && HINT[intent] ? HINT[intent] : hint0)
    field.setAttribute('aria-label', 'Adresse de votre site')
    if (focus) live()
  }
  function projMode() {
    mode = 'proj'
    comp.classList.add('proj')
    comp.classList.remove('live')
    hideErr()
    if (!projD) setSend('Continuer')
    setHint(
      'Décrivez votre projet en une phrase : on vous répond sous quelques jours avec une première piste et une estimation. <a data-url>J’ai déjà un site</a>',
    )
    area.focus({ preventScroll: true })
  }
  sugs.forEach((s) => {
    s.setAttribute('role', 'button')
    s.tabIndex = 0
    // accueil : pas de site à analyser, on ouvre le formulaire « Démarrer un projet »
    if (s.hasAttribute('data-pj')) {
      s.setAttribute('aria-haspopup', 'dialog')
      s.onclick = () => PJ.open()
      s.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          PJ.open()
        }
      }
      return
    }
    s.setAttribute('aria-pressed', 'false')
    const f = () => {
      if (comp.classList.contains('step2') || comp.classList.contains('isdone')) resetAll()
      const t = s.textContent.trim(),
        k = kindOf(t),
        again = s.getAttribute('aria-pressed') === 'true'
      sugs.forEach((x) => x.setAttribute('aria-pressed', 'false'))
      if (again) {
        intent = need = null
        sel = new Set(BASE)
        renderCrit()
        syncPop()
        urlMode(false)
        setHint(hint0)
        return
      }
      s.setAttribute('aria-pressed', 'true')
      intent = k
      need = k === 'need' ? t : null
      if (k === 'new' || projD) {
        if (projD) {
          area.value = t
          comp.classList.add('proj')
          area.focus({ preventScroll: true })
        } else projMode()
        return
      }
      const c = (CRIT[k] || []).filter((o) => OPTS.includes(o))
      sel = new Set(c.length ? c : BASE)
      renderCrit()
      syncPop()
      urlMode(true)
      if (anim)
        G.fromTo(
          comp,
          { boxShadow: '0 0 0 0 rgba(255,77,26,.8)' },
          { boxShadow: '0 0 0 10px rgba(255,77,26,0)', duration: 0.9, clearProps: 'boxShadow' },
        )
    }
    s.onclick = f
    s.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        f()
      }
    }
  })
  // envoi
  const normUrl = (v) => {
    v = v.trim().replace(/\s+/g, '')
    if (!v) return null
    if (!/^https?:\/\//i.test(v)) v = 'https://' + v
    try {
      const h = new URL(v).hostname
      return /^([a-z0-9-]+\.)+[a-z]{2,}$/i.test(h) ? h.replace(/^www\./i, '') : null
    } catch (e) {
      return null
    }
  }
  btn(send, 'Envoyer', () => submit())
  function submit() {
    closePop()
    hideErr()
    if (mode === 'proj') {
      const t = area.value.trim()
      if (t.length < 10)
        return showErr(
          'Dites-nous en quelques mots : votre activité, votre ville, ce que le site doit faire.',
          area,
        )
      return step2({ project: t })
    }
    if (!comp.classList.contains('live') || !field.value.trim()) {
      live()
      return showErr('Collez l’adresse de votre site pour lancer l’analyse.', field)
    }
    const host = normUrl(field.value)
    if (!host)
      return showErr('Cette adresse ne ressemble pas à un site. Essayez par exemple « mon-site.fr ».', field)
    step2({ site: host })
  }
  const fld = (id, label, ac, type = 'text', opt = false) =>
    `<label class="cf-i" for="${pfx}-${id}"><span>${label}${opt ? ' <em>facultatif</em>' : ''}</span><input id="${pfx}-${id}" name="${id}" type="${type}" autocomplete="${ac}"><small class="cf-ferr" hidden></small></label>`
  let form = null,
    data = null
  function step2(d) {
    data = d
    comp.classList.add('step2')
    const tags = [...(need ? [need] : []), ...(file ? ['Pièce jointe : ' + file] : [])]
    form = document.createElement('form')
    form.className = 'cf'
    form.noValidate = true
    form.innerHTML = `<div class="cf-k">${d.site ? 'Analyse de <b>' + esc(d.site) + '</b>' : 'Votre projet : <b>' + esc(d.project.length > 70 ? d.project.slice(0, 67) + '…' : d.project) + '</b>'}<span>Étape 2 sur 2 · À qui envoie-t-on ${d.site ? 'l’analyse' : 'notre réponse'}${NBSP}?</span></div>
      ${tags.length ? `<div class="cf-tags">${tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>` : ''}
      ${d.site ? `<div class="cf-what"><span>Que regarde-t-on${NBSP}? <em>Tout est coché, retirez ce qui ne vous intéresse pas.</em></span><div class="cf-opts">${OPTS.map((o) => `<button type="button" class="cf-o${sel.has(o) ? ' on' : ''}" aria-pressed="${sel.has(o)}" data-o="${esc(o)}">${CHECK}${esc(o)}</button>`).join('')}</div></div>` : ''}
      <div class="cf-g">${fld('prenom', 'Prénom', 'given-name')}${fld('nom', 'Nom', 'family-name')}${fld('email', 'E-mail', 'email', 'email')}${fld('tel', 'Téléphone', 'tel', 'tel', true)}</div>
      <div class="cf-f"><button type="button" class="cf-back">Modifier</button><button type="submit" class="send cf-send">${d.site ? 'Recevoir mon analyse' : 'Envoyer ma demande'}</button></div>`
    comp.append(form)
    if (anim)
      G.from($$('.cf-k, .cf-tags, .cf-what, .cf-i, .cf-f', form), {
        y: 12,
        opacity: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: 'power3.out',
      })
    $('.cf-back', form).onclick = back
    // les points à analyser : chacun se coche ou se décoche, il en reste toujours un
    $$('.cf-o', form).forEach((b) => {
      b.onclick = () => {
        const o = b.dataset.o
        if (sel.has(o) && sel.size === 1) {
          if (anim) G.fromTo(b, { x: -4 }, { x: 0, duration: 0.4, ease: 'elastic.out(1,.3)' })
          return
        }
        sel.has(o) ? sel.delete(o) : sel.add(o)
        b.classList.toggle('on', sel.has(o))
        b.setAttribute('aria-pressed', sel.has(o))
      }
    })
    const fe = (id, m) => {
      const i = $(`#${pfx}-${id}`, form),
        l = i.closest('.cf-i'),
        s = $('.cf-ferr', l)
      l.classList.toggle('bad', !!m)
      s.hidden = !m
      s.textContent = m || ''
      return !m
    }
    $$('input', form).forEach((i) => i.addEventListener('input', () => fe(i.name, '')))
    form.onsubmit = (e) => {
      e.preventDefault()
      const v = (id) => $(`#${pfx}-${id}`, form).value.trim()
      let ok = fe('prenom', v('prenom') ? '' : 'Votre prénom, pour vous répondre.')
      ok =
        fe(
          'email',
          /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(v('email'))
            ? ''
            : 'Une adresse e-mail valide, pour recevoir ' + (data.site ? 'l’analyse.' : 'notre réponse.'),
        ) && ok
      ok =
        fe(
          'tel',
          !v('tel') || /^[+0-9][0-9 .()-]{7,}$/.test(v('tel')) ? '' : 'Ce numéro semble incomplet.',
        ) && ok
      if (!ok) {
        const b = $('.cf-i.bad input', form)
        b && b.focus()
        return
      }
      done(v('prenom'), v('email'))
    }
    setTimeout(() => $('input', form).focus({ preventScroll: true }), 60)
  }
  function back() {
    if (form) form.remove()
    form = null
    comp.classList.remove('step2')
    mode === 'url' ? live() : area.focus({ preventScroll: true })
  }
  function done(name, mail) {
    if (form) form.remove()
    form = null
    comp.classList.remove('step2')
    comp.classList.add('isdone')
    const box = document.createElement('div')
    box.className = 'cf-donebox'
    const what = data.site
      ? `Votre analyse de <b>${esc(data.site)}</b> et votre maquette arrivent à <b>${esc(mail)}</b> d’ici quelques jours.`
      : `On vous répond à <b>${esc(mail)}</b> sous quelques jours avec une première piste et une estimation.`
    box.innerHTML = `<div class="cf-done"><span class="cf-ok">${IC_OK}</span><div><b>C’est parti, ${esc(name)}.</b><p>${what}</p><span class="cf-proto">Prototype : aucune donnée n’est envoyée.</span></div></div>
      <button type="button" class="cf-back cf-again">${data.site ? 'Analyser un autre site' : 'Nouvelle demande'}</button>`
    comp.append(box)
    $('.cf-again', box).onclick = resetAll
    if (anim) G.from(box.children, { y: 12, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' })
  }
  function resetAll() {
    $$('.cf-donebox, form.cf', comp).forEach((x) => x.remove())
    comp.classList.remove('step2', 'isdone')
    field.value = ''
    area.value = ''
    intent = need = file = null
    fileIn.value = ''
    fileChip.hidden = true
    sugs.forEach((x) => x.setAttribute('aria-pressed', 'false'))
    sel = new Set(BASE)
    renderCrit()
    urlMode(false)
    setHint(hint0)
    comp.classList.remove('live')
    if (projD) comp.classList.remove('proj')
  }
  renderCrit()
  follow(chat)
}

/* le bloc part du haut de l'image puis suit le centre de l'écran au défilement, sans jamais en sortir */
function follow(chat) {
  const media = chat.closest('.hero-media')
  if (!media || !anim) return
  const upd = () => {
    const r = media.getBoundingClientRect(),
      k = r.height / media.offsetHeight || 1,
      max = media.offsetHeight - chat.offsetTop - chat.offsetHeight - 32,
      want = (innerHeight / 2 - r.top) / k - chat.offsetTop - chat.offsetHeight / 2
    chat.style.setProperty('--fy', Math.max(0, Math.min(max, want)) + 'px')
  }
  ST.create({ trigger: media, start: 'top bottom', end: 'bottom top', onUpdate: upd, onRefresh: upd })
}

/* ---------- héro ---------- */
function hero(R, mob, firstLoad) {
  const nav = $(mob ? '.mo-nav' : '.nav', R),
    h1 = $(mob ? '.mo-h1' : '.h1', R)
  const media = $(mob ? '.mo-media' : '.hero-media', R)
  const imgs = [$('.hm-layer', media)]
  const chat = $(mob ? '.mo-chat' : '.chat', R)
  const url = $('.ch2-url', chat),
    urlText = url ? url.firstChild.textContent : ''
  chatFlow(chat, mob ? 'm' : 'd')
  sparkle(media)
  if (!anim) return
  G.set(imgs, { scale: 1.1, transformOrigin: '50% 40%' })
  const words = split(h1)
  const after = mob
    ? $$('.mo-hero > .mo-lead, .mo-hero .mo-btn, .mo-hero .mo-proof', R)
    : $$('.hero-row .lead, .hero-btns .btn, .proof', R)
  const comp = $('.ch2-comp, .mo-comp', chat),
    greet = $('.ch2-greet, .mo-greet', chat)
  const sugs = $$('.sg', chat),
    note = $('.ch2-note', chat),
    logos = mob ? $$('.mo-cl-k, .mo-cl-g > div', R) : $$('.clients > div', R)
  if (url) url.firstChild.textContent = ''
  rotator(h1)
  // le cache pixel couvre l'image tout de suite, puis se dissipe : elle n'apparaît jamais nette avant lui
  pixelate(media, '#0E0E0C', mob ? 18 : 28, 1.25, firstLoad ? 0.75 : 1.2)
  const tl = G.timeline({ defaults: { ease: 'expo.out' }, delay: firstLoad ? 0.1 : 0.55 }) // après une transition, on attend que l'écran se découvre
  tl.from(nav, { y: -24, opacity: 0, duration: 0.8, clearProps: 'transform,opacity' })
    .from(words, { yPercent: 110, duration: 1.15, stagger: 0.05 }, '-=.45')
    .from(after, { y: 22, opacity: 0, duration: 0.9, stagger: 0.07, ease: 'power3.out' }, '-=.85')
    .fromTo(imgs, { scale: 1.25 }, { scale: 1.1, duration: 2.4, ease: 'power2.out' }, '-=.75')
    .from(greet, { y: 22, opacity: 0, duration: 0.9 }, '-=1.6')
    .from(comp, { y: 34, opacity: 0, scale: 0.97, duration: 1.1 }, '-=.75')
    .add(() => typeIn(url, urlText), '-=.5')
    .from(sugs, { y: 14, opacity: 0, duration: 0.7, stagger: 0.06, ease: 'power3.out' }, '-=.4')
    .from(note, { opacity: 0, duration: 0.8 }, '-=.4')
    .from(logos, { y: 18, opacity: 0, duration: 0.8, stagger: 0.06, ease: 'power3.out' }, '-=1.2')
  // parallaxe : scroll + souris
  G.to(imgs, {
    yPercent: 9,
    ease: 'none',
    scrollTrigger: { trigger: media, start: 'top top', end: 'bottom top', scrub: true },
  })
  if (FINE) {
    const mx = imgs.map((i) => G.quickTo(i, 'x', { duration: 1.2, ease: 'power3.out' })),
      my = imgs.map((i) => G.quickTo(i, 'y', { duration: 1.2, ease: 'power3.out' }))
    const cx = G.quickTo(chat, 'x', { duration: 1.2, ease: 'power3.out' }),
      cy = G.quickTo(chat, 'y', { duration: 1.2, ease: 'power3.out' })
    media.addEventListener('mousemove', (e) => {
      const q = local(media, e),
        px = q.x / q.w - 0.5,
        py = q.y / q.h - 0.5
      mx.forEach((f) => f(-px * 22))
      my.forEach((f) => f(-py * 14))
      cx(px * 10)
      cy(py * 6)
    })
    media.addEventListener('mouseleave', () => {
      mx.forEach((f) => f(0))
      my.forEach((f) => f(0))
      cx(0)
      cy(0)
    })
  }
}

/* ---------- héro : fin de phrase qui tourne ---------- */
const ROT = [
  'marques qui voient loin.',
  'golfs qui visent juste.',
  'PME qui veulent grandir.',
  'indépendants qui se lancent.',
  'boutiques qui vendent.',
]
function rotator(h1) {
  const rot = h1 && $('.rot', h1)
  if (!rot || !anim) return
  let i = 0,
    running = true,
    timer = null
  const words = (t) =>
    t
      .split(' ')
      .map((w) => `<span class="w"><span class="wi">${w}</span></span>`)
      .join(' ')
  const next = () => {
    timer = null
    if (!running) return
    i = (i + 1) % ROT.length
    G.to($$('.wi', rot), {
      yPercent: -110,
      duration: 0.45,
      ease: 'power3.in',
      stagger: 0.035,
      onComplete: () => {
        rot.innerHTML = words(ROT[i])
        G.fromTo(
          $$('.wi', rot),
          { yPercent: 110 },
          { yPercent: 0, duration: 0.85, ease: 'expo.out', stagger: 0.055 },
        )
        timer = G.delayedCall(3.1, next)
      },
    })
  }
  timer = G.delayedCall(4.4, next)
  ST.create({
    trigger: h1,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (st) => {
      running = st.isActive
      if (running && !timer) timer = G.delayedCall(1.2, next)
    },
  })
}

export { IC_OK, chatFlow, hero }
