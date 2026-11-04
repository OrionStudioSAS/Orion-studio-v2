import { Link } from 'react-router-dom'

export function ChateauLArcGolf() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="cs-next" data-to="/realisations/chateau-larc">
        <div className="cs-nx-l">
          <span className="p-tag">Projet suivant</span>
          <h2 className="h2">Château l’Arc Golf Club</h2>
          <p className="lead">
            Un site qui donne envie de venir jouer, et un back-office pour gérer départs, offres et
            événements.
          </p>
          <div className="cs-nx-b">
            <a className="btn btn-ink">Voir le projet</a>
            <Link to="/realisations" className="lnk">
              Toutes les réalisations
            </Link>
          </div>
        </div>
        <div className="p-media cs-nx-m">
          <img src="/images/55a80d70f3d20a.png" alt="" />
          <div className="win win-shot win-golf">
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
              <img
                className="shot"
                src="/images/661531aedb86a4.jpg"
                alt="Page d’accueil du site du Château l’Arc Golf Club"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
