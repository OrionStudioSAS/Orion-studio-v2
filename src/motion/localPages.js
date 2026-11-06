import { RM, G, $, onWin, pageEvery, pageAfter, pageClear, smoothTo } from './core'
import { toast } from './resourcesPage'

/* Pages locales, tirages de l'équipe et témoignages vidéo. L'export lançait ces scripts une fois
   sur tout le document ; ici ils se branchent sur la page montée et s'arrêtent avec elle. */
function teamPrints(R) {
  R.querySelectorAll('.mfp').forEach(function (box) {
    var cards = [].slice.call(box.querySelectorAll('.mfp-c')),
      i = 0,
      timer = null,
      seen = false
    function cycle() {
      if (!seen || !box.offsetParent) return
      var c = cards[i++ % cards.length]
      c.classList.add('on')
      pageAfter(function () {
        c.classList.remove('on')
      }, 1700)
    }
    function start() {
      if (seen) return
      seen = true
      if (!RM)
        G.from(cards, {
          y: -60,
          opacity: 0,
          rotation: function (k) {
            return k % 2 ? 14 : -14
          },
          duration: 0.9,
          ease: 'back.out(1.6)',
          stagger: 0.14,
          clearProps: 'transform,opacity',
        })
      if (!RM) timer = pageEvery(cycle, 3200)
    }
    if ('IntersectionObserver' in window)
      new IntersectionObserver(
        function (es, o) {
          es.forEach(function (e) {
            if (e.isIntersecting) {
              start()
              o.disconnect()
            }
          })
        },
        { threshold: 0.35 },
      ).observe(box)
    else start()
    cards.forEach(function (c) {
      c.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') c.click()
      })
    })
  })
}

function studioPrints(R) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  var i = 0
  pageEvery(function () {
    var ins = [].slice
      .call(R.querySelectorAll('.pw-ph'))
      .map(function (p) {
        return p.parentNode
      })
      .filter(function (x) {
        return x.offsetParent
      })
    if (!ins.length) return
    var c = ins[i++ % ins.length]
    c.classList.add('on')
    pageAfter(function () {
      c.classList.remove('on')
    }, 1700)
  }, 2600)
}

function localHero(R) {
  R.querySelectorAll('[data-pv="__hero__"]').forEach(function (a) {
    a.removeAttribute('data-pv')
    a.addEventListener('click', function (e) {
      e.preventDefault()
      var v = a.closest('.site-d, .site-m'),
        c = v && v.querySelector('.hero-media, .mo-media')
      if (c) smoothTo(c.getBoundingClientRect().top + scrollY - 40)
    })
  })
}

/* ---------- témoignages vidéo : un lecteur global, des cartes par page ---------- */
let openStory = () => {},
  closeStory = () => {}
function initVideoStories() {
  const V = $('#avsv')
  if (!V) return
  const vid = V.querySelector('.avsv-v'),
    bars = V.querySelector('.avsv-bars')
  let list = [],
    i = 0,
    last = null
  function say(html) {
    toast(html)
  }
  function show(k) {
    i = k
    var c = list[i]
    bars.innerHTML = list
      .map(function (_, n) {
        return '<i><b style="width:' + (n < i ? 100 : 0) + '%"></b></i>'
      })
      .join('')
    V.querySelector('.avsv-top b').textContent = c.dataset.name
    V.querySelector('.avsv-top img').src = c.dataset.logo
    vid.src = c.dataset.src
    vid.currentTime = 0
    vid.play().catch(function () {})
  }
  function open(c) {
    var row = c.closest('.avs-row')
    list = [].slice.call(row.querySelectorAll('.avs-c')).filter(function (x) {
      return x.dataset.src
    })
    if (!list.length || !c.dataset.src) {
      say(
        '<b>Témoignage vidéo en préparation</b><small>La vidéo de ' +
          c.dataset.name +
          ' arrive bientôt.</small>',
      )
      return
    }
    last = c
    V.hidden = false
    document.documentElement.style.overflow = 'hidden'
    show(list.indexOf(c))
  }
  closeStory = close
  openStory = open
  function close() {
    if (V.hidden) return
    vid.pause()
    vid.removeAttribute('src')
    V.hidden = true
    document.documentElement.style.overflow = ''
    if (last) last.focus()
  }
  vid.addEventListener('timeupdate', function () {
    var b = bars.children[i] && bars.children[i].firstChild
    if (b && vid.duration) b.style.width = (vid.currentTime / vid.duration) * 100 + '%'
  })
  vid.addEventListener('ended', function () {
    i < list.length - 1 ? show(i + 1) : close()
  })
  V.querySelector('.avsv-next').addEventListener('click', function () {
    i < list.length - 1 ? show(i + 1) : close()
  })
  V.querySelector('.avsv-prev').addEventListener('click', function () {
    i > 0 ? show(i - 1) : (vid.currentTime = 0)
  })
  ;[].forEach.call(V.querySelectorAll('[data-x]'), function (x) {
    x.addEventListener('click', close)
  })
  addEventListener('keydown', function (e) {
    if (V.hidden) return
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowRight') V.querySelector('.avsv-next').click()
    if (e.key === 'ArrowLeft') V.querySelector('.avsv-prev').click()
  })
}

function videoStories(R) {
  closeStory()
  const RMs = RM
  ;[].forEach.call(R.querySelectorAll('.avs-c'), function (c) {
    if (c.dataset.src) c.classList.add('has-v')
    c.addEventListener('click', function (e) {
      e.preventDefault()
      e.stopPropagation()
      openStory(c)
    })
    if (!RMs) {
      /* aperçu : la barre de story se remplit au survol */
      var t = null,
        p = 0,
        bar = c.querySelector('.avs-bars i')
      c.addEventListener('mouseenter', function () {
        p = 0
        pageClear(t)
        t = pageEvery(function () {
          p = Math.min(100, p + 2)
          bar.style.setProperty('--p', p + '%')
        }, 40)
      })
      c.addEventListener('mouseleave', function () {
        pageClear(t)
        bar.style.setProperty('--p', '0%')
      })
    }
  })
  /* apparition en cascade */
  if (!RMs && 'IntersectionObserver' in window) {
    ;[].forEach.call(R.querySelectorAll('.avs-row'), function (row) {
      var cs = row.querySelectorAll('.avs-c')
      G.set(cs, { y: 60, opacity: 0 })
      new IntersectionObserver(
        function (es, o) {
          es.forEach(function (e) {
            if (e.isIntersecting) {
              G.to(cs, {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'expo.out',
                stagger: 0.08,
                clearProps: 'transform,opacity',
              })
              o.disconnect()
            }
          })
        },
        { threshold: 0.2 },
      ).observe(row)
    })
  }
}

function localVisuals(R) {
  function onIn(el, fn, th) {
    if (!('IntersectionObserver' in window)) return fn()
    new IntersectionObserver(
      function (es, o) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            fn()
            o.disconnect()
          }
        })
      },
      { threshold: th || 0.25 },
    ).observe(el)
  }
  function each(sel, fn) {
    ;[].forEach.call(R.querySelectorAll(sel), fn)
  }
  /* apparitions en cascade */
  each('.lca', function (el) {
    var sib = el.parentNode
      ? [].filter.call(el.parentNode.children, function (c) {
          return c.classList.contains('lca')
        })
      : [el]
    if (!el.style.getPropertyValue('--d'))
      el.style.setProperty('--d', (Math.max(0, sib.indexOf(el)) % 6) * 0.08 + 's')
    if (RM) {
      el.classList.add('lcin')
      return
    }
    onIn(
      el,
      function () {
        el.classList.add('lcin')
      },
      0.15,
    )
  })
  if (RM) return
  /* frappe dans les champs de recherche */
  each('.lcv-type', function (el) {
    var txt = el.dataset.type,
      res = el.closest('.serp') && el.closest('.serp').querySelector('.lcv-res')
    function run() {
      var n = 0
      el.textContent = ''
      if (res) res.classList.remove('on')
      var t = pageEvery(function () {
        el.textContent = txt.slice(0, ++n)
        if (n >= txt.length) {
          pageClear(t)
          if (res) res.classList.add('on')
          pageAfter(run, 4200)
        }
      }, 70)
    }
    onIn(el, run, 0.6)
  })
  /* avant / après : balayage puis glisser */
  each('.lcv-ba', function (b) {
    var r = b.querySelector('.lcv-ba-r'),
      user = false
    function set(v) {
      b.style.setProperty('--x', v + '%')
      r.value = v
    }
    r.addEventListener('input', function () {
      user = true
      set(r.value)
    })
    onIn(
      b,
      function () {
        var t0 = null
        function step(ts) {
          if (user) return
          t0 = t0 || ts
          var p = Math.min(1, (ts - t0) / 2600),
            v = 55 + Math.sin(p * Math.PI * 2) * -40 * (1 - p * 0.4)
          set(p < 1 ? v : 50)
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      },
      0.5,
    )
  })
  /* fiche Google : le bouton « Site web » s'allume */
  each('.lcv-pulse', function (el) {
    onIn(
      el,
      function () {
        pageEvery(function () {
          el.classList.toggle('on')
        }, 1600)
      },
      0.6,
    )
  })
  /* langues cochées tour à tour */
  each('.lcv-langs', function (el) {
    var sq = el.querySelectorAll('.sq'),
      i = 0
    onIn(
      el,
      function () {
        pageEvery(function () {
          i = (i + 1) % (sq.length + 1)
          ;[].forEach.call(sq, function (q, k) {
            q.classList.toggle('sq-ok', k < i || (i === 0 && k < 2))
          })
        }, 900)
      },
      0.6,
    )
  })
  /* créneaux de rendez-vous */
  each('.lcv-slots', function (el) {
    var sp = [].filter.call(el.querySelectorAll('.rs-s span'), function (x) {
        return !x.classList.contains('off')
      }),
      i = 0
    onIn(
      el,
      function () {
        pageEvery(function () {
          sp.forEach(function (x) {
            x.classList.remove('on')
          })
          sp[i++ % sp.length].classList.add('on')
        }, 1300)
      },
      0.6,
    )
  })
  /* formulaires qui se remplissent */
  each('.lcv-fill', function (el) {
    var f = [].slice.call(el.querySelectorAll('.fld'))
    function run() {
      f.forEach(function (x) {
        x.querySelector('b').innerHTML = '&nbsp;'
        x.classList.remove('cur')
      })
      f.forEach(function (x, k) {
        pageAfter(function () {
          f.forEach(function (y) {
            y.classList.remove('cur')
          })
          x.classList.add('cur')
          var b = x.querySelector('b'),
            v = b.dataset.v,
            n = 0
          var t = pageEvery(function () {
            b.textContent = v.slice(0, ++n)
            if (n >= v.length) pageClear(t)
          }, 45)
          if (k === f.length - 1) pageAfter(run, 3800)
        }, k * 900)
      })
    }
    onIn(el, run, 0.6)
  })
  /* notification de demande */
  each('.lcv-notif', function (el) {
    onIn(
      el,
      function () {
        ;(function loop() {
          el.classList.add('on')
          pageAfter(function () {
            el.classList.remove('on')
            pageAfter(loop, 900)
          }, 3400)
        })()
      },
      0.6,
    )
  })
  /* bouton FR / EN */
  each('.lcv-langbtn', function (el) {
    onIn(
      el,
      function () {
        pageEvery(function () {
          el.classList.toggle('en')
        }, 2200)
      },
      0.6,
    )
  })
  /* carte constellation */
  each('.lcv-mapbox', function (el) {
    onIn(
      el,
      function () {
        el.classList.add('lcin')
      },
      0.3,
    )
  })
  /* parallaxe douce sur le visuel du quartier */
  each('.lcv-nd-in img', function (img) {
    function tick() {
      var r = img.parentNode.getBoundingClientRect()
      if (r.bottom > 0 && r.top < innerHeight) {
        var p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight
        img.style.transform = 'translateY(' + (-8 + p * -10) + '%)'
      }
    }
    onWin('scroll', tick, { passive: true })
    tick()
  })
}

function localMap(R) {
  ;[].forEach.call(R.querySelectorAll('.lmw'), function (w) {
    var card = w.querySelector('.lm-card')
    function on(c, v) {
      ;[].forEach.call(w.querySelectorAll('[data-c="' + c + '"]'), function (e) {
        e.classList.toggle('on', v)
      })
    }
    ;[].forEach.call(w.querySelectorAll('.lm-list li, .lm-town'), function (e) {
      var c = e.dataset.c
      e.addEventListener('mouseenter', function () {
        on(c, true)
      })
      e.addEventListener('mouseleave', function () {
        on(c, false)
      })
      e.addEventListener('focus', function () {
        on(c, true)
      })
      e.addEventListener('blur', function () {
        on(c, false)
      })
    })
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      card.classList.add('lcin')
      return
    }
    new IntersectionObserver(
      function (es, o) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            card.classList.add('lcin')
            o.disconnect()
          }
        })
      },
      { threshold: 0.25 },
    ).observe(card)
  })
}

export { teamPrints, studioPrints, localHero, initVideoStories, videoStories, localVisuals, localMap }
