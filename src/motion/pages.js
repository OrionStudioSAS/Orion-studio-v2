import { auPage } from './automationsPage'
import { RM, G, ST, anim, $, $$, split, onView, up, pixelate, goTo } from './core'
import { sparkle, magnetic } from './effects'
import { faqPage } from './faqPage'
import { CL_LOGOS, CL_LOGOS_M, logoCycle } from './footerUi'
import { chatFlow } from './hero'
import { legalPage, e4Page } from './legalPages'
import { resPage } from './resourcesPage'
import { sectorsPage } from './routing'
import { manifesto, headings, projects, steps, faq, footer } from './sections'
import { storyInit } from './standingVideo'
import { doggyInit, wall, stepWalk, crewAnim } from './studio'

/* ---------- pages avec un champ d'analyse et une bascule pixel / original (Golfs) ---------- */
function pageHero(R, mob) {
  const chat = $(mob ? '.mo-chat' : '.hero-media .chat', R)
  if (chat) chatFlow(chat, (mob ? 'm' : 'd') + (R.closest('.view').dataset.view || 'p'))
  const media = $('.hero-media', R),
    orig = media && $('.hero-orig', media),
    tg = media ? $$('.toggle span', media) : []
  if (orig && tg.length) {
    const setV = (v) => {
      tg.forEach((t) => t.classList.toggle('on', t.dataset.v === v))
      anim
        ? G.to(orig, { opacity: v === 'orig' ? 1 : 0, duration: 0.7, ease: 'power2.out' })
        : (orig.style.opacity = v === 'orig' ? 1 : 0)
      if (v === 'px') pixelate($('.hm-layer', media), '#0E0E0C', 16, 0.55)
    }
    tg.forEach((t) => {
      t.onclick = () => setV(t.dataset.v)
      t.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setV(t.dataset.v)
        }
      }
    })
  }
  const sm = mob ? $('.mo-media', R) : media
  if (sm && chat) sparkle(sm)
}

/* ---------- « Vos outils, un seul écosystème » : flux de données, lignes qui se synchronisent, survol ---------- */
function ecosystem(R, mob) {
  const box = $(mob ? '.mg-int' : '.int2', R)
  if (!box) return
  if (mob) {
    const tiles = $$(':scope > div', box)
    up(tiles, box, { y: 20, s: 0.05 })
    if (!anim) return
    let k = 0,
      t = null
    const step = () => {
      tiles.forEach((x, i) => x.classList.toggle('live', i === k))
      k = (k + 1) % tiles.length
      t = G.delayedCall(0.9, step)
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
    return
  }
  const tiles = $$('.it', box),
    paths = $$('.ip', box),
    rows = $$('.ic-r', box),
    ic = $('.ic', box)
  if (RM) $$('.ipd', box).forEach((d) => d.remove())
  if (anim) {
    G.set(
      tiles.filter((t) => t.classList.contains('it-l')),
      { x: -60, opacity: 0 },
    )
    G.set(
      tiles.filter((t) => t.classList.contains('it-r')),
      { x: 60, opacity: 0 },
    )
    G.set(ic, { scale: 0.9, opacity: 0 })
    paths.forEach((p) => {
      const L = p.getTotalLength()
      p.style.strokeDasharray = `${L}`
      p.style.strokeDashoffset = `${L}`
    })
    onView(
      box,
      () => {
        G.to(ic, { scale: 1, opacity: 1, duration: 0.9, ease: 'back.out(1.6)' })
        G.to(tiles, { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.06, delay: 0.15 })
        G.to(paths, {
          strokeDashoffset: 0,
          duration: 1.1,
          ease: 'power2.inOut',
          stagger: 0.05,
          delay: 0.4,
          onComplete() {
            this.targets().forEach((p) => {
              p.style.strokeDasharray = ''
              p.style.strokeDashoffset = ''
            })
          },
        })
      },
      'top 80%',
    )
  }
  // lignes du site qui s'allument tour à tour
  let k = 0,
    t = null,
    hold = false
  const step = () => {
    if (!hold) {
      rows.forEach((r, i) => r.classList.toggle('live', i === k))
      k = (k + 1) % rows.length
    }
    t = G ? G.delayedCall(1.1, step) : setTimeout(step, 1100)
  }
  if (anim)
    ST.create({
      trigger: box,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (st) => {
        if (st.isActive) {
          if (!t) step()
        } else if (t) {
          t.kill && t.kill()
          t = null
        }
      },
    })
  // survol d'un outil
  tiles.forEach((tile) => {
    const i = +tile.dataset.i,
      r = +tile.dataset.row
    tile.addEventListener('mouseenter', () => {
      hold = true
      box.classList.add('focus')
      tile.classList.add('on')
      paths[i].classList.add('on')
      rows.forEach((x, j) => x.classList.toggle('live', j === r))
    })
    tile.addEventListener('mouseleave', () => {
      hold = false
      box.classList.remove('focus')
      tile.classList.remove('on')
      paths[i].classList.remove('on')
    })
  })
}

function filters(R, mob) {
  const tabs = $$(mob ? '.mo-rzt span' : '.rz-tabs a', R),
    cards = $$(mob ? '.mo-projs > .mo-proj' : '.rz-grid > article', R)
  tabs.forEach((t) => {
    t.setAttribute('role', 'button')
    t.tabIndex = 0
    const run = () => {
      tabs.forEach((x) => x.classList.toggle('on', x === t))
      const k = t.dataset.k || 'all'
      const keep = cards.filter((c) => k === 'all' || (c.dataset.cats || '').split(' ').includes(k)),
        hide = cards.filter((c) => !keep.includes(c))
      const apply = () => {
        cards.forEach((c) => {
          c.hidden = !keep.includes(c)
        })
        if (anim) {
          G.fromTo(
            keep,
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.06, ease: 'power3.out' },
          )
          ST.refresh()
        }
      }
      if (anim && hide.some((c) => !c.hidden))
        G.to(
          hide.filter((c) => !c.hidden),
          { opacity: 0, scale: 0.96, duration: 0.22, onComplete: apply },
        )
      else apply()
    }
    t.onclick = run
    t.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        run()
      }
    }
  })
}
function pageIntro(R, mob) {
  if (!anim) return
  const h1 = $(mob ? '.mo-h1' : 'h1', R),
    words = split(h1)
  const after = $$(
    mob
      ? '.mo-hero > .crumb, .mo-hero > .mo-lead, .mo-hero > .mo-btns'
      : '.hero > .crumb, .hero-row > *, .st2-copy > .crumb, .st2-lead, .st2-btns',
    R,
  )
  const media = $(mob ? '.mo-sthero, .mo-cshero, .st2-mhero' : '.hero-media, .st2-hero', R)
  const tl = G.timeline({ defaults: { ease: 'expo.out' }, delay: 0.55 })
  tl.from(words, { yPercent: 110, duration: 1.1, stagger: 0.05 }).from(
    after,
    { y: 22, opacity: 0, duration: 0.8, stagger: 0.07, ease: 'power3.out' },
    '-=.8',
  )
  if (media) tl.add(() => pixelate(media, '#0E0E0C', mob ? 18 : 28, 1.2), '-=.7')
  const cm = $$('.crew .cm', R)
  if (cm.length)
    tl.from(cm, { y: 90, opacity: 0, duration: 0.9, stagger: 0.14, ease: 'back.out(1.8)' }, '-=.3')
}
function blocks(R, mob) {
  const sel = mob
    ? '.mo-sec > :not(.mo-shead):not(.mo-projs):not(.mg-int), .mo-rzf, .mo-rzn'
    : '.sec > :not(.shead):not(.steps):not(.st2-wall):not(.mf):not(.s2-track):not(.st2-where):not(.int-wrap), .cs-dark > :not(.shead), .rz-bar, .rz-avs, .g-page > .clients, .st2-map, .st2-places > *'
  $$(sel, R).forEach((el) => up([el], el, { y: 40 }))
}
function bindGo(R) {
  $$('[data-go]', R).forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault()
      goTo(a.dataset.go)
    }),
  )
  $$('a:not(.btn)', R).forEach((a) => {
    if (/^Réserver/.test(a.textContent.trim()))
      a.addEventListener('click', (e) => {
        e.preventDefault()
        goTo('cta')
      })
  })
  $$('a.btn', R).forEach((a) => {
    if (a.dataset.go) return
    if (/Analyser/.test(a.textContent))
      a.addEventListener('click', (e) => {
        e.preventDefault()
        goTo('hero')
      })
    if (/Démarrer/.test(a.textContent))
      a.addEventListener('click', (e) => {
        e.preventDefault()
        goTo('cta')
      })
  })
}
function initPage(R, mob) {
  pageIntro(R, mob)
  headings(R, mob)
  projects(R, mob)
  steps(R, mob)
  blocks(R, mob)
  footer(R, mob)
  magnetic(R)
  filters(R, mob)
  bindGo(R)
  logoCycle($$(mob ? '.mo-cl-g > div' : '.clients > div:not(:first-child)', R), mob ? CL_LOGOS_M : CL_LOGOS)
  storyInit(R)
  doggyInit(R)
  wall(R)
  stepWalk(R)
  manifesto(R, mob)
  crewAnim(R)
  pageHero(R, mob)
  if ($('.q, .mo-q', R)) faq(R, mob)
  ecosystem(R, mob)
  resPage(R, mob)
  faqPage(R, mob)
  sectorsPage(R)
  legalPage(R)
  e4Page(R)
  auPage(R, mob)
}

export { pageHero, ecosystem, filters, pageIntro, blocks, bindGo, initPage }
