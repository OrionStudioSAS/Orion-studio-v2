import { RM, $, $$, esc, local } from './core'
import { PJ } from './projectModal'
import { WHO, FAQ_A } from './sections'

/* ---------- widget conversationnel Orio ---------- */
function initOrio() {
  return (() => {
    const ow = $('#ow')
    if (!ow) return {}
    const btn = $('.ow-btn', ow),
      panel = $('.ow-panel', ow),
      log = $('.ow-log', ow),
      quickBox = $('.ow-quick', ow)
    const form = $('.ow-form', ow),
      input = $('#ow-in'),
      teaser = $('.ow-teaser', ow)
    const AV = '<img class="px" src="/px/orio-0abc5d59.svg" alt="" width="29" height="28">',
      THINK = '<img class="px" src="/px/orio-a7091ad5.svg" alt="" width="29" height="28">'
    let step = null,
      pending = '',
      started = false,
      busy = Promise.resolve()
    const wait = (ms) => new Promise((r) => setTimeout(r, RM ? 0 : ms))
    const scroll = () => {
      log.scrollTop = log.scrollHeight
    }
    const store = (k, v) => {
      try {
        v === undefined ? localStorage.getItem(k) : localStorage.setItem(k, v)
      } catch (e) {}
    }
    const seenBefore = (() => {
      try {
        return localStorage.getItem('orio-seen') === '1'
      } catch (e) {
        return false
      }
    })()

    function bubble(html, who) {
      const m = document.createElement('div')
      m.className = 'ow-m ' + (who === 'u' ? 'ow-u' : 'ow-o')
      m.innerHTML = (who === 'u' ? '' : `<span class="ow-a">${AV}</span>`) + `<div class="ow-b">${html}</div>`
      log.append(m)
      scroll()
      return m
    }
    function say(html, delay = 650) {
      busy = busy.then(async () => {
        const t = bubble('<span class="ow-typing"><i></i><i></i><i></i></span>')
        $('.ow-a', t).innerHTML = THINK
        await wait(delay + Math.min(900, html.length * 6))
        $('.ow-a', t).innerHTML = AV
        $('.ow-b', t).innerHTML = html
        scroll()
      })
      return busy
    }
    function quick(items) {
      busy.then(() => {
        quickBox.innerHTML = ''
        items.forEach(([label, fn, acc]) => {
          const b = document.createElement('button')
          b.type = 'button'
          b.textContent = label
          if (acc) b.className = 'acc'
          b.onclick = () => {
            user(label)
            quickBox.innerHTML = ''
            fn()
          }
          quickBox.append(b)
        })
        scroll()
      })
    }
    const user = (t) => bubble(esc(t), 'u')
    const MAIN = () => [
      ['Analyser mon site', analyse, true],
      ['Combien coûte un site ?', () => answer('prix')],
      ['Quels délais ?', () => answer('delai')],
      ['Prendre rendez-vous', rdv],
      ['Vous faites des sites de golf ?', () => answer('golf')],
    ]
    const MORE = () => [
      ['Prendre rendez-vous', rdv, true],
      ['Analyser mon site', analyse],
      [
        'Autre question',
        () => {
          say('Je vous écoute : écrivez votre question juste en dessous.')
          input.focus()
        },
      ],
    ]

    const KB = {
      prix: FAQ_A[0],
      delai: FAQ_A[1],
      techno: FAQ_A[2],
      modif: FAQ_A[3],
      langue: FAQ_A[4],
      apres: FAQ_A[5],
      golf: `${WHO.golf.lead}<small>Projet de référence : Château l’Arc Golf Club</small>`,
      shop: WHO.shop.lead,
      pme: WHO.pme.lead,
      indep: WHO.indep.lead,
      seo: 'Audit, SEO technique, contenus et référencement local : on fait remonter votre site sur les recherches qui amènent de vrais clients.',
      geo: 'Vos clients posent leurs questions à ChatGPT, Perplexity ou Gemini. On structure votre site et vos contenus pour que votre marque apparaisse, et soit citée, dans leurs réponses.<small>Notre guide : « Être cité par ChatGPT et Perplexity »</small>',
      equipe:
        'Orion, c’est Julien et Théo : deux associés basés à Paris, qui conçoivent et développent eux-mêmes. Pas de commercial entre vous et le projet.',
      ou: 'Le studio est à Paris (60 rue François Ier, 75008). On travaille partout en France et à l’international, sur place ou à distance.',
      suivi:
        'Chaque projet a son espace dans Orion Admin : étapes, documents, messages et validations au même endroit, avec une préprod pour tester avant la mise en ligne.',
    }
    const RULES = [
      [/prix|co[uû]t|tarif|budget|combien.*(co[uû]te|€|euros)|devis/i, 'prix'],
      [/d[ée]lai|combien de temps|semaine|rapide|quand/i, 'delai'],
      [/webflow|wordpress|next|react|techno|cms|sur.?mesure/i, 'techno'],
      [/modifier|seul|autonome|back.?office|mettre à jour/i, 'modif'],
      [/anglais|english|[ée]tranger|distance|langue/i, 'langue'],
      [/apr[eè]s|maintenance|h[ée]bergement|mise en ligne/i, 'apres'],
      [/golf|club|green|parcours|d[ée]part/i, 'golf'],
      [/shopify|boutique|e-?commerce|vendre en ligne/i, 'shop'],
      [/tpe|pme|artisan|entreprise/i, 'pme'],
      [/ind[ée]pendant|freelance|micro|consultant|coach/i, 'indep'],
      [/chatgpt|perplexity|gemini|\bia\b|\bgeo\b|intelligence/i, 'geo'],
      [/seo|google|r[ée]f[ée]rencement|visibilit/i, 'seo'],
      [/qui|[ée]quipe|julien|th[ée]o|associ|studio/i, 'equipe'],
      [/o[uù] |adresse|paris|cannes|bureau/i, 'ou'],
      [/suivi|orion admin|espace client|avancement/i, 'suivi'],
    ]
    function answer(k) {
      say(KB[k])
      quick(MORE())
    }

    function analyse() {
      step = 'url'
      say(
        'Avec plaisir. Collez l’adresse de votre site, je le passe au crible : design, SEO, vitesse et conversion.',
      )
      busy.then(() => input.focus({ preventScroll: true }))
    }
    async function runAnalyse(url) {
      const host = url
        .replace(/^https?:\/\//i, '')
        .replace(/^www\./i, '')
        .split('/')[0]
      step = null
      await say(`Je regarde <b>${esc(host)}</b>.`)
      busy = busy.then(async () => {
        const m = bubble(
          `<div class="ow-jobs"><div class="ow-job"><i></i>Capture des pages clés</div><div class="ow-job"><i></i>Audit SEO et vitesse</div><div class="ow-job"><i></i>Maquette personnalisée</div></div>`,
        )
        const jobs = $$('.ow-job', m)
        for (let i = 0; i < jobs.length; i++) {
          jobs[i].className = 'ow-job cur'
          await wait(i === 2 ? 700 : 1100)
          jobs[i].className = i === 2 ? 'ow-job cur' : 'ow-job ok'
        }
      })
      say(
        'L’analyse complète et une maquette de page d’accueil vous arrivent par e-mail sous quelques jours. À quelle adresse les envoie-t-on ?',
      )
      step = 'email-a'
      busy.then(() => input.focus({ preventScroll: true }))
    }
    function rdv() {
      say(
        'Je vous ouvre l’agenda de Julien et Théo : trois questions rapides sur votre projet, puis vous choisissez un créneau de 30 minutes.',
        400,
      )
        .then(() => wait(700))
        .then(() => {
          close(false)
          PJ.open()
        })
    }
    function handle(text) {
      const t = text.trim()
      if (!t) return
      user(t)
      quickBox.innerHTML = ''
      if (step === 'url') {
        if (!/[a-z0-9-]+\.[a-z]{2,}/i.test(t)) {
          say('Je n’arrive pas à lire cette adresse. Essayez sous la forme <b>votre-site.fr</b>.')
          return
        }
        runAnalyse(t)
        return
      }
      if (step === 'email-a' || step === 'email-q') {
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(t)) {
          say('Cette adresse e-mail ne semble pas complète. Pouvez-vous la vérifier ?')
          return
        }
        const q = step === 'email-q'
        step = null
        say(
          q
            ? `Merci. Julien ou Théo vous répondent à <b>${esc(t)}</b>.<small>Prototype : aucune donnée n’est envoyée.</small>`
            : `C’est noté. L’analyse part à <b>${esc(t)}</b> sous quelques jours.<small>Prototype : aucune donnée n’est envoyée.</small>`,
        )
        quick([
          ['Prendre rendez-vous', rdv, true],
          [
            'Autre question',
            () => {
              say('Je vous écoute.')
              input.focus()
            },
          ],
        ])
        return
      }
      if (/^(bonjour|salut|hello|coucou|bonsoir|hey)\b/i.test(t)) {
        say('Bonjour ! Que puis-je faire pour vous ?')
        quick(MAIN())
        return
      }
      if (/merci/i.test(t)) {
        say('Avec plaisir. Je reste là si besoin.')
        quick(MORE())
        return
      }
      if (/analy|audit/i.test(t)) {
        analyse()
        return
      }
      if (/rdv|rendez|appel|r[ée]server|rencontrer|parler/i.test(t)) {
        rdv()
        return
      }
      const hit = RULES.find(([re]) => re.test(t))
      if (hit) {
        answer(hit[1])
        return
      }
      pending = t
      step = 'email-q'
      say(
        'Bonne question. Je préfère que Julien ou Théo vous répondent eux-mêmes : laissez votre e-mail et ils reviennent vers vous.',
      )
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const v = input.value
      input.value = ''
      handle(v)
    })

    function open() {
      ow.classList.add('open', 'seen')
      btn.setAttribute('aria-expanded', true)
      teaser.hidden = true
      try {
        localStorage.setItem('orio-seen', '1')
      } catch (e) {}
      if (!started) {
        started = true
        say(
          'Bonjour, moi c’est <b>Orio</b>, l’assistant d’Orion Studio. Je réponds à vos questions sur le studio, je peux analyser votre site ou vous réserver un appel avec Julien ou Théo.',
          300,
        )
        quick(MAIN())
      }
      setTimeout(() => input.focus({ preventScroll: true }), 350)
    }
    function close(refocus = true) {
      ow.classList.remove('open')
      btn.setAttribute('aria-expanded', false)
      if (refocus) btn.focus({ preventScroll: true })
    }
    btn.addEventListener('click', () => (ow.classList.contains('open') ? close() : open()))
    $('.ow-close', ow).addEventListener('click', () => close())
    ow.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && ow.classList.contains('open')) {
        e.stopPropagation()
        close()
      }
    })
    teaser.addEventListener('click', (e) => {
      if (e.target.closest('.ow-tx')) {
        teaser.hidden = true
        ow.classList.add('seen')
        return
      }
      open()
    })
    if (seenBefore) ow.classList.add('seen')
    else
      setTimeout(() => {
        if (!ow.classList.contains('open')) {
          teaser.hidden = false
          setTimeout(() => {
            teaser.hidden = true
          }, 12000)
        }
      }, 6000)
    return { open }
  })()
}

export { initOrio }
