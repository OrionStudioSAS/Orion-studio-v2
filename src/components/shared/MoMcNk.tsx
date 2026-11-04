import { Link } from 'react-router-dom'

export function MoMcNk() {
  return (
    <section className="mo-sec">
      <div className="mc-nk">Projet suivant</div>
      <article className="mo-proj" data-to="/realisations/chateau-larc">
        <div className="mo-pm">
          <img className="mo-pm-bg" src="/images/e70252f225f7d4.png" alt="" />
          <div className="win win-shot mo-win">
            <div className="win-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="win-title">chateaularcgolfclub.com</span>
              <span className="win-sp" />
            </div>
            <div className="win-body">
              <img className="shot" src="/images/661531aedb86a4.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="mo-pmeta">
          <h3>
            <Link to="/realisations/chateau-larc">Château l’Arc Golf Club</Link>
          </h3>
          <span>Golf · Site + back-office · 2026</span>
        </div>
        <p>
          Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et événements.
        </p>
        <a className="lnk mo-more">Lire l’étude de cas</a>
      </article>
      <Link to="/realisations" className="btn btn-ink mo-btn mo-btn-full mc-all">
        Toutes les réalisations
      </Link>
    </section>
  )
}
