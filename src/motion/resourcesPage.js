import { RM, G, ST, anim, $, $$, root, onWin, onView, up, pixelate } from './core'
import { hero } from './hero'
import { steps } from './sections'

/* ---------- Ressources : liste filtrable, article avec sommaire actif ---------- */
const ART = 'etre-cite-par-les-ia',
  ART_URL = 'https://orion-studio.io/ressources/etre-cite-par-chatgpt-perplexity'
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ')
let toastT = null
function toast(html) {
  let t = $('.r-toast')
  if (!t) {
    t = document.createElement('div')
    t.className = 'r-toast'
    t.setAttribute('role', 'status')
    document.body.append(t)
  }
  t.innerHTML = html
  clearTimeout(toastT)
  if (anim) G.fromTo(t, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' })
  else t.style.opacity = 1
  toastT = setTimeout(() => {
    if (anim) G.to(t, { y: 10, opacity: 0, duration: 0.3 })
    else t.style.opacity = 0
  }, 3200)
}
function resTab(k) {
  const R = root()
  const tab = $(`.r-tabs-in [data-k="${k}"], .mr-tabs-in [data-k="${k}"]`, R)
  if (tab) tab.click()
}
function resList(R, mob) {
  const page = $('.r-page', R)
  if (!page) return
  const tabs = $$(mob ? '.mr-tabs-in span' : '.r-tabs-in span', page),
    q = $('.r-q', page),
    cnt = $('.r-count', page),
    empty = $('.r-empty', page)
  const items = $$('[data-k]:not(span)', page),
    cta = $('.r-cta', page),
    feat = $(mob ? '.mr-feat' : '.r-wrap', page)
  let k = 'all',
    first = true
  const run = () => {
    const s = norm(q.value.trim())
    const keep = items.filter(
      (c) => (k === 'all' || c.dataset.k === k) && (!s || norm(c.textContent).includes(s)),
    )
    items.forEach((c) => {
      ;(c.classList.contains('r-feat') ? feat : c).hidden = !keep.includes(c)
    })
    if (feat && mob) feat.hidden = !keep.includes(feat)
    if (cta) cta.hidden = k !== 'all' || !!s
    cnt.textContent = keep.length + (keep.length > 1 ? ' articles' : ' article')
    empty.hidden = !!keep.length
    if (anim && !first) {
      G.fromTo(
        keep.map((c) => (c.classList.contains('r-feat') ? feat : c)),
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.04, ease: 'power3.out', overwrite: true },
      )
      ST.refresh()
    }
    first = false
  }
  run()
  // lien direct vers une catégorie : /ressources?cat=guides
  const initCat = new URLSearchParams(location.search).get('cat')
  tabs.forEach((t) => {
    const sel = () => {
      tabs.forEach((x) => {
        x.classList.toggle('on', x === t)
        x.setAttribute('aria-pressed', x === t)
      })
      k = t.dataset.k
      run()
      if (mob) t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: RM ? 'auto' : 'smooth' })
    }
    t.addEventListener('click', sel)
    t.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        sel()
      }
    })
  })
  if (initCat) {
    const t0 = tabs.find((t) => t.dataset.k === initCat)
    if (t0) t0.click()
  }
  q.addEventListener('input', run)
  $$('.fq-sug span', page).forEach((s) => {
    const f = () => {
      q.value = s.textContent
      run()
      q.focus()
    }
    s.addEventListener('click', f)
    s.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') f()
    })
  })
  const rs = $('.r-reset', page)
  if (rs)
    rs.addEventListener('click', (e) => {
      e.preventDefault()
      q.value = ''
      tabs[0].click()
    })
  // apparitions
  up(
    $$(mob ? '.mr-search, .mr-tabs, .mr-cnt' : '.fq-hero .crumb, .r-lead, .fq-search, .r-tabs', page),
    null,
    { y: 22, s: 0.08, delay: 0.8 },
  )
  up([feat], feat, { y: 40, delay: 0.9 })
  ;(mob ? $$('.mr-row, .mr-cta', page) : $$('.r-grid > *', page)).forEach((c, i) =>
    up([c], c, { y: 40, delay: mob ? 0 : (i % 3) * 0.08 }),
  )
  up($$(mob ? '.mr-nl' : '.r-nl', page), null, { y: 30 })
  if (anim)
    onView(feat, () => {
      const i = $('img', feat)
      G.fromTo(
        i,
        { scale: 1.18 },
        { scale: 1, duration: 1.6, ease: 'expo.out', clearProps: 'transform', delay: 0.9 },
      )
    })
}
function resArticle(R, mob) {
  const page = $('.a-page', R)
  if (!page) return
  const txt = $('.a-txt', page),
    hs = $$('h2[data-s]', txt),
    links = $$(mob ? '.ma-toc-l a' : '.a-toc a', page)
  const bars = $$('.a-prog i', page),
    pct = $$('.a-progt', page)
  const goS = (i) => {
    const h = hs[i]
    if (!h) return
    scrollTo({
      top: h.getBoundingClientRect().top + scrollY - (mob ? 76 : 96),
      behavior: RM ? 'auto' : 'smooth',
    })
  }
  links.forEach((a) => {
    const f = () => {
      if (mob) {
        toc.classList.add('snap')
        tocSet(false)
        void toc.offsetHeight
        setTimeout(() => toc.classList.remove('snap'), 50)
      }
      goS(+a.dataset.s)
    }
    a.addEventListener('click', f)
    a.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        f()
      }
    })
  })
  let last = -1,
    lastP = -1
  const spy = () => {
    if (!page.offsetParent) return
    const r = txt.getBoundingClientRect(),
      vh = innerHeight
    const p = Math.max(0, Math.min(1, -r.top / Math.max(1, r.height - vh * 0.6)))
    const n = Math.round(p * 100)
    if (n !== lastP) {
      lastP = n
      bars.forEach((b) => {
        b.style.width = n + '%'
      })
      pct.forEach((x) => {
        x.textContent = n + ' % lu'
      })
    }
    let cur = 0
    hs.forEach((h, i) => {
      if (h.getBoundingClientRect().top < vh * 0.35) cur = i
    })
    if (cur !== last) {
      last = cur
      links.forEach((a) => a.classList.toggle('on', +a.dataset.s === cur))
    }
  }
  onWin('scroll', spy, { passive: true })
  onWin('resize', spy)
  spy()
  // sommaire repliable (mobile)
  const toc = $('.ma-toc', page),
    th = toc && $('.ma-toc-h', toc)
  function tocSet(o) {
    if (!toc) return
    toc.classList.toggle('open', o)
    th.setAttribute('aria-expanded', o)
  }
  if (th) {
    th.addEventListener('click', () => tocSet(!toc.classList.contains('open')))
    th.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        tocSet(!toc.classList.contains('open'))
      }
    })
  }
  // copier le lien
  $$('.a-copy', page).forEach((c) => {
    const done = (ok) => {
      c.textContent = ok ? 'Lien copié' : 'orion-studio.io/ressources/…'
      c.classList.toggle('ok', ok)
      setTimeout(() => {
        c.textContent = 'Copier le lien'
        c.classList.remove('ok')
      }, 2200)
      if (!ok) toast(`<b>Copie impossible ici</b><small>${ART_URL}</small>`)
    }
    const f = () => {
      try {
        navigator.clipboard.writeText(ART_URL).then(
          () => done(true),
          () => done(false),
        )
      } catch (e) {
        done(false)
      }
    }
    c.addEventListener('click', f)
    c.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        f()
      }
    })
  })
  // checklist
  const lis = $$('.a-check li', page),
    ck = $('.a-ckc', page)
  const count = () => {
    const n = lis.filter((l) => l.classList.contains('ok')).length
    $('b', ck).textContent = n
    ck.classList.toggle('done', n === lis.length)
  }
  lis.forEach((l) => {
    const f = () => {
      const o = !l.classList.contains('ok')
      l.classList.toggle('ok', o)
      l.setAttribute('aria-checked', o)
      count()
      if (anim && o) G.fromTo($('i', l), { scale: 0.6 }, { scale: 1, duration: 0.45, ease: 'back.out(3)' })
    }
    l.addEventListener('click', f)
    l.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        f()
      }
    })
  })
  // apparitions
  if (anim) {
    const hero = $(mob ? '.ma-hero' : '.a-hero', page)
    G.set(hero, { opacity: 0 })
    setTimeout(() => {
      G.set(hero, { opacity: 1 })
      pixelate(hero, '#0E0E0C', mob ? 18 : 28, 1.2)
    }, 900)
    up($$(mob ? '.ma-meta, .ma-head .a-by, .ma-toc' : '.a-head .crumb, .a-meta, .a-dek, .a-by', page), null, {
      y: 20,
      s: 0.07,
      delay: 0.9,
    })
    if (!mob) up([$('.a-toc', page), $('.a-side', page)], txt, { y: 30, s: 0.1, start: 'top 90%' })
    up($$('.tldr li', page), $('.tldr', page), { y: 14, s: 0.07 })
    $$(
      '.a-txt > h2, .a-txt > h3, .a-txt > blockquote, .a-txt > .a-tabw, .a-txt > .a-check, .a-txt > .a-author, .a-faq',
      page,
    ).forEach((el) => up([el], el, { y: 28 }))
    const fig = $('.a-fig', page)
    if (fig) {
      const q = $('.ai-q', fig),
        a = $('.ai-a', fig),
        cites = $$('.ai-cite', fig)
      G.set([q, a], { opacity: 0, y: 12 })
      G.set(cites, { opacity: 0, scale: 0.6 })
      onView(
        fig,
        () =>
          G.timeline()
            .to(q, { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(2)' })
            .to(a, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '+=.5')
            .to(cites, { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(3)', stagger: 0.18 }, '+=.4')
            .fromTo(
              cites[0],
              { boxShadow: '0 0 0 0 rgba(255,77,26,.6)' },
              { boxShadow: '0 0 0 9px rgba(255,77,26,0)', duration: 0.9, clearProps: 'boxShadow' },
            ),
        'top 75%',
      )
    }
    const code = $('.a-code', page)
    if (code) {
      const ls = $$(':scope > div', code)
      G.set(ls, { clipPath: 'inset(0 100% 0 0)' })
      onView(
        code,
        () => {
          const tl = G.timeline()
          ls.forEach((l) => {
            const n = Math.max(2, l.textContent.length)
            tl.to(l, {
              clipPath: 'inset(0 0% 0 0)',
              duration: Math.min(0.9, n * 0.022),
              ease: `steps(${n})`,
              clearProps: 'clipPath',
            })
          })
        },
        'top 80%',
      )
    }
  }
}
function resPage(R, mob) {
  resList(R, mob)
  resArticle(R, mob)
}

export { norm, toast, resTab, resPage, ART }
