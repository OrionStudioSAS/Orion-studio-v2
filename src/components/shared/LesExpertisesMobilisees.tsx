import { Link } from 'react-router-dom'

export function LesExpertisesMobilisees() {
  return (
    <section className="sec" style={{ padding: '0' }}>
      <div className="shead" style={{ paddingLeft: '72px', paddingRight: '72px', paddingTop: '96px' }}>
        <h2 className="h2">Les expertises mobilisées</h2>
      </div>
      <div className="rls">
        <Link to="/expertises/site-internet" className="rl">
          <img className="px picon" src="/px/picon-89906f55.svg" alt="" width={20} height={20} />
          <div>
            <b>Site internet</b>
            <span>Sites vitrines et refontes sur mesure.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/seo" className="rl">
          <img className="px picon" src="/px/picon-43178318.svg" alt="" width={20} height={20} />
          <div>
            <b>SEO</b>
            <span>Remonter sur Google.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
        <Link to="/expertises/automatisations" className="rl">
          <img className="px picon" src="/px/picon-163f1643.svg" alt="" width={20} height={20} />
          <div>
            <b>Automatisations</b>
            <span>Vos tâches répétitives, automatisées.</span>
          </div>
          <span className="lnk">Découvrir</span>
        </Link>
      </div>
    </section>
  )
}
