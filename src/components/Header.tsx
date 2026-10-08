import { useEffect, useState, type CSSProperties } from 'react'
import { EMAIL, EXPERTISES, NAV_LINKS } from '../data/content'
import { ArrowUpRight, Star } from './ui'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      setScrolled(y > 24)
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 400)
        lastY = y
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', menuOpen)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`header ${scrolled ? 'is-scrolled' : ''} ${hidden && !menuOpen && !megaOpen ? 'is-hidden' : ''} ${menuOpen ? 'is-menu' : ''}`}
      >
        <div className="header__inner">
          <a href="#top" className="logo" aria-label="Orion Studio — accueil" onClick={close}>
            <Star size={21} className="logo__star" />
            <span>ORION STUDIO</span>
          </a>

          <nav className="header__links" aria-label="Navigation principale">
            {NAV_LINKS.map((l) =>
              l.mega ? (
                <div
                  key={l.label}
                  className={`mega ${megaOpen ? 'is-open' : ''}`}
                  onPointerEnter={() => setMegaOpen(true)}
                  onPointerLeave={() => setMegaOpen(false)}
                >
                  <a
                    href={l.href}
                    className="nav-link"
                    aria-expanded={megaOpen}
                    onFocus={() => setMegaOpen(true)}
                    onClick={() => setMegaOpen(false)}
                  >
                    {l.label}
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true" className="mega__chev">
                      <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </a>
                  <div className="mega__panel" onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setMegaOpen(false)}>
                    <div className="mega__grid">
                      {EXPERTISES.map((x, i) => (
                        <a href="#expertises" key={x.title} className="mega__item" onClick={() => setMegaOpen(false)}>
                          <span className="mega__num">0{i + 1}</span>
                          <span>
                            <span className="mega__title">{x.title}</span>
                            <span className="mega__desc">{x.description}</span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={l.label} href={l.href} className="nav-link">
                  {l.label}
                </a>
              ),
            )}
          </nav>

          <div className="header__right">
            <div className="lang" aria-label="Langue">
              <span className="is-current">FR</span> / <span>EN</span>
            </div>
            <a href="#contact" className="btn btn--light btn--sm header__cta" onClick={close}>
              <Star size={12} className="accent" />
              <span className="header__cta-long">Démarrer un projet</span>
              <span className="header__cta-short">Projet</span>
            </a>
            <button
              className={`burger ${menuOpen ? 'is-open' : ''}`}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__links">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={close}
              tabIndex={menuOpen ? 0 : -1}
              style={{ '--d': `${80 + i * 55}ms` } as CSSProperties}
            >
              <span className="mobile-menu__num">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__foot" style={{ '--d': '420ms' } as CSSProperties}>
          <a href={`mailto:${EMAIL}`} tabIndex={menuOpen ? 0 : -1}>
            {EMAIL}
          </a>
          <a href="#contact" className="btn btn--accent btn--lg btn--block" onClick={close} tabIndex={menuOpen ? 0 : -1}>
            Démarrer un projet <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </>
  )
}
