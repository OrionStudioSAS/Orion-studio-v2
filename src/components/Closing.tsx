import { useEffect, useState, type MouseEvent } from 'react'
import { EMAIL } from '../data/content'
import { ArrowRight, ArrowUpRight, Eyebrow, Reveal, SplitLines, Star } from './ui'

export function CtaFinal() {
  const [copied, setCopied] = useState(false)

  const copy = async (e: MouseEvent) => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      e.preventDefault()
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      // Pas d'accès au presse-papiers : on laisse le lien mailto: s'ouvrir
    }
  }

  return (
    <section className="cta section--ink" id="contact">
      <div className="container">
        <Eyebrow index="08">Parlons-en</Eyebrow>
        <SplitLines
          as="h2"
          className="cta__title"
          stagger={110}
          text={'Un projet\nen tête ?\nConstruisons-le.'}
          renderLine={(line, i) => (i === 2 ? <em className="serif-italic">{line}</em> : line)}
        />
        <Reveal className="cta__actions" delay={350}>
          <div className="cta__main">
            <a href={`mailto:${EMAIL}?subject=Nouveau%20projet`} className="btn btn--accent btn--xl">
              Démarrer un projet <ArrowRight size={15} strokeWidth={1.8} />
            </a>
            <a href={`mailto:${EMAIL}`} className="cta__email" onClick={copy} title="Cliquer pour copier">
              <span className={`cta__email-text ${copied ? 'is-hidden' : ''}`}>{EMAIL}</span>
              <span className={`cta__email-copied ${copied ? 'is-visible' : ''}`}>Adresse copiée ✓</span>
            </a>
          </div>
          <a href={`mailto:${EMAIL}?subject=R%C3%A9server%20un%20appel`} className="cta__call mono-sm">
            Ou réservez directement un appel <ArrowUpRight size={11} strokeWidth={1.6} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  const toTop = (e: MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer className="footer section--ink">
      <div className="container">
        <div className="footer__cols">
          <p className="footer__tagline">
            Studio de design & développement.
            <br />
            <span>Sites, e-commerce, applications web.</span>
          </p>
          <FooterCol title="Studio" items={['Réalisations', 'Expertises', 'Orion Admin', 'Le studio', 'Journal']} />
          <FooterCol title="Expertises" items={['Sites sur-mesure', 'Shopify', 'SaaS & Web apps', 'CRO & Évolution']} />
          <div className="footer__col">
            <p className="footer__col-title">Contact</p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>60 rue François Ier, 75008 Paris</span>
            <span>6 rue Merle, 06400 Cannes</span>
            <span className="footer__socials">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </span>
          </div>
        </div>

        <Reveal className="wordmark" variant="mask" aria-hidden="true">
          <span className="wordmark__text">Orion Studio</span>
          <Star className="wordmark__star" />
        </Reveal>

        <div className="footer__legal mono-xs">
          <span>© 2026 Orion Studio SAS — RCS 938 775 368</span>
          <span className="footer__legal-links">
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
            <a href="#top" onClick={toTop}>
              Retour en haut
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="footer__col">
      <p className="footer__col-title">{title}</p>
      {items.map((i) => (
        <a key={i} href="#">
          {i}
        </a>
      ))}
    </div>
  )
}

/** Fil de constellation : rail fixe à gauche, une étoile par section (desktop). */
export function ConstellationRail({ ids }: { ids: string[] }) {
  const [marks, setMarks] = useState<number[]>([])
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const measure = () => {
      const docH = document.documentElement.scrollHeight
      setMarks(
        ids.map((id) => {
          const el = document.getElementById(id)
          return el ? (el.getBoundingClientRect().top + window.scrollY) / docH : 0
        }),
      )
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const docH = document.documentElement.scrollHeight - window.innerHeight
        setProgress(Math.min(1, window.scrollY / Math.max(1, docH)))
        const mid = window.innerHeight * 0.45
        let c = 0
        ids.forEach((id, i) => {
          const el = document.getElementById(id)
          if (el && el.getBoundingClientRect().top < mid) c = i
        })
        setCurrent(c)
      })
    }
    measure()
    onScroll()
    const ro = new ResizeObserver(measure)
    ro.observe(document.body)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      ro.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])

  return (
    <div className="rail" aria-hidden="true">
      <span className="rail__fill" style={{ transform: `scaleY(${progress})` }} />
      {marks.map((m, i) => (
        <span key={ids[i]} className={`rail__star ${i === current ? 'is-current' : ''} ${i < current ? 'is-past' : ''}`} style={{ top: `${m * 100}%` }}>
          <Star size={i === current ? 12 : 9} />
        </span>
      ))}
    </div>
  )
}

/** CTA flottant mobile, visible entre la fin du hero et la section contact. */
export function MobileCta() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById('contact')
      const past = window.scrollY > window.innerHeight * 0.8
      const beforeContact = contact ? contact.getBoundingClientRect().top > window.innerHeight * 0.9 : true
      setVisible(past && beforeContact)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <a href="#contact" className={`mobile-cta ${visible ? 'is-visible' : ''}`} tabIndex={visible ? 0 : -1}>
      <Star size={12} className="accent" />
      Démarrer un projet
      <ArrowUpRight size={12} />
    </a>
  )
}
