import { Link } from 'react-router-dom'
import { REVIEWS } from './reviewsData'

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 8 8" shapeRendering="crispEdges" aria-hidden="true">
    <path fill="#FF4D1A" d="M3 0h2v2h3v2H7v1h1v3H6V7H2v1H0V5h1V4H0V2h3z" />
  </svg>
)

/** Une seule section : chaque client a sa vidéo en story et son avis, côte à côte. */
export function ReviewsBlock({ mobile = false }: { mobile?: boolean }) {
  return (
    <section className={mobile ? 'crv crv-m' : 'crv'}>
      <div className="crv-card">
        <img
          className="crv-bg"
          src={mobile ? '/images/729bb5e7cb4d36.png' : '/images/b1ad4d0b43d462.png'}
          alt=""
        />
        <div className="crv-veil" />
        <div className="crv-k">
          <span>Avis clients</span>
          <span>Ils en parlent mieux que nous</span>
        </div>
        <div className="crv-main">
          <div className="avs-row crv-story">
            {REVIEWS.map((r, i) => (
              <button
                key={r.to}
                type="button"
                className="avs-c"
                hidden={i > 0}
                data-src={r.video}
                data-name={r.name}
                data-logo={r.logo}
                aria-label={`Témoignage vidéo de ${r.name}`}
              >
                <img className="avs-poster" src={r.poster} alt="" />
                <span className="avs-veil" />
                <span className="avs-bars">
                  <i />
                </span>
                <span className="avs-top">
                  <span className="avs-av">
                    <img src={r.logo} alt="" />
                  </span>
                  <span className="avs-who">
                    <b>{r.short}</b>
                    <em>{r.kind}</em>
                  </span>
                </span>
                <span className="avs-play">
                  <svg
                    viewBox="0 0 7 8"
                    width="14"
                    height="16"
                    shapeRendering="crispEdges"
                    aria-hidden="true"
                  >
                    <path fill="currentColor" d="M0 0h2v1h2v1h2v1h1v2H6v1H4v1H2v1H0z" />
                  </svg>
                </span>
                <span className="avs-bot">{!r.video && <span className="avs-soon">Vidéo à venir</span>}</span>
              </button>
            ))}
          </div>
          <div className="crv-side">
            <div className="crv-qs">
              {REVIEWS.map((r, i) => (
                <div key={r.to} className="crv-q" hidden={i > 0}>
                  {r.quote ? (
                    <>
                      <div className="crv-stars" role="img" aria-label="5 étoiles sur 5">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                      <blockquote>{r.quote}</blockquote>
                    </>
                  ) : (
                    <blockquote className="crv-todo">L’avis de {r.name} arrive bientôt.</blockquote>
                  )}
                  <div className="crv-by">
                    <span className="crv-logo">
                      <img src={r.logo} alt="" />
                    </span>
                    <div>
                      <b>{r.author || r.short}</b>
                      <span>
                        {r.author ? `${r.name} · ` : ''}
                        {r.kind}
                      </span>
                    </div>
                    <Link to={r.to} className="crv-lnk">
                      Voir le projet
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* des flèches et un compteur : on voit tout de suite qu'il y a d'autres avis */}
            <div className="crv-nav">
              <button type="button" className="crv-ar" data-d="-1" aria-label="Avis précédent">
                ←
              </button>
              <span className="crv-n" aria-live="polite">
                <b>01</b> / {String(REVIEWS.length).padStart(2, '0')}
              </span>
              <button type="button" className="crv-ar" data-d="1" aria-label="Avis suivant">
                →
              </button>
              <span className="crv-dots" aria-hidden="true">
                {REVIEWS.map((r, i) => (
                  <i className={i === 0 ? 'on' : undefined} key={r.to} />
                ))}
              </span>
            </div>
            <div className="crv-score">
              <b>5,0</b>
              <span>/ 5 · Note Google</span>
              <a className="btn av-btn">Lire les avis Google</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
