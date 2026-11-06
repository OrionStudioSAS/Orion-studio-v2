import { Link } from 'react-router-dom'
import { Nav } from '../../components/shared/Nav'
import { MmVeilLive } from '../../components/shared/MmVeilLive'

function E4() {
  return (
    <section className="e4">
      <canvas className="e4-c" aria-hidden="true" />
      <div className="e4-l">
        <span className="e4-k">Erreur 404 · page introuvable</span>
        <div className="e4-num" style={{ width: '442px', height: '182px' }} aria-hidden="true">
          <i style={{ left: '0px', top: '0px', width: '23px', height: '23px' }} />
          <i style={{ left: '104px', top: '0px', width: '23px', height: '23px' }} />
          <i style={{ left: '0px', top: '26px', width: '23px', height: '23px' }} />
          <i style={{ left: '104px', top: '26px', width: '23px', height: '23px' }} />
          <i style={{ left: '0px', top: '52px', width: '23px', height: '23px' }} />
          <i style={{ left: '104px', top: '52px', width: '23px', height: '23px' }} />
          <i style={{ left: '0px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '26px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '52px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '78px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '104px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '104px', top: '104px', width: '23px', height: '23px' }} />
          <i style={{ left: '104px', top: '130px', width: '23px', height: '23px' }} />
          <i style={{ left: '104px', top: '156px', width: '23px', height: '23px' }} />
          <i style={{ left: '182px', top: '0px', width: '23px', height: '23px' }} />
          <i style={{ left: '208px', top: '0px', width: '23px', height: '23px' }} />
          <i style={{ left: '234px', top: '0px', width: '23px', height: '23px' }} />
          <i style={{ left: '156px', top: '26px', width: '23px', height: '23px' }} />
          <i style={{ left: '260px', top: '26px', width: '23px', height: '23px' }} />
          <i style={{ left: '156px', top: '52px', width: '23px', height: '23px' }} />
          <i style={{ left: '234px', top: '52px', width: '23px', height: '23px' }} />
          <i style={{ left: '260px', top: '52px', width: '23px', height: '23px' }} />
          <i style={{ left: '156px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '208px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '260px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '156px', top: '104px', width: '23px', height: '23px' }} />
          <i style={{ left: '182px', top: '104px', width: '23px', height: '23px' }} />
          <i style={{ left: '260px', top: '104px', width: '23px', height: '23px' }} />
          <i style={{ left: '156px', top: '130px', width: '23px', height: '23px' }} />
          <i style={{ left: '260px', top: '130px', width: '23px', height: '23px' }} />
          <i style={{ left: '182px', top: '156px', width: '23px', height: '23px' }} />
          <i style={{ left: '208px', top: '156px', width: '23px', height: '23px' }} />
          <i style={{ left: '234px', top: '156px', width: '23px', height: '23px' }} />
          <i style={{ left: '312px', top: '0px', width: '23px', height: '23px' }} />
          <i style={{ left: '416px', top: '0px', width: '23px', height: '23px' }} />
          <i style={{ left: '312px', top: '26px', width: '23px', height: '23px' }} />
          <i style={{ left: '416px', top: '26px', width: '23px', height: '23px' }} />
          <i style={{ left: '312px', top: '52px', width: '23px', height: '23px' }} />
          <i style={{ left: '416px', top: '52px', width: '23px', height: '23px' }} />
          <i style={{ left: '312px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '338px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '364px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '390px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '416px', top: '78px', width: '23px', height: '23px' }} />
          <i style={{ left: '416px', top: '104px', width: '23px', height: '23px' }} />
          <i style={{ left: '416px', top: '130px', width: '23px', height: '23px' }} />
          <i style={{ left: '416px', top: '156px', width: '23px', height: '23px' }} />
        </div>
        <h1 className="e4-h">
          Cette page s’est perdue<span className="serif">dans les étoiles.</span>
        </h1>
        <p className="e4-p">
          Le lien est peut-être cassé, ou la page a changé d’orbite. Orio la cherche encore ; en attendant,
          rallumez Orion ou reprenez la route.
        </p>
        <div className="e4-btns">
          <Link to="/" className="btn btn-acc e4-home">
            Retour à l’accueil
          </Link>
          <Link to="/realisations" className="btn btn-line">
            Voir nos réalisations
          </Link>
        </div>
        <div className="e4-links">
          <span>Ou filez vers</span>
          <Link to="/realisations">Réalisations</Link>
          <Link to="/orion-admin">Orion Admin</Link>
          <Link to="/le-studio">Le studio</Link>
          <Link to="/ressources">Ressources</Link>
          <Link to="/faq">Questions fréquentes</Link>
        </div>
      </div>
      <div className="e4-r">
        <div className="e4-sky">
          <svg className="e4-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line x1="18" y1="14" x2="36" y2="50" data-e="0-2" />
            <line x1="74" y1="20" x2="60" y2="42" data-e="1-4" />
            <line x1="36" y1="50" x2="48" y2="46" data-e="2-3" />
            <line x1="48" y1="46" x2="60" y2="42" data-e="3-4" />
            <line x1="36" y1="50" x2="28" y2="86" data-e="2-5" />
            <line x1="60" y1="42" x2="80" y2="82" data-e="4-6" />
            <line x1="18" y1="14" x2="74" y2="20" data-e="0-1" />
          </svg>
          <button
            type="button"
            className="e4-star e4-so"
            style={{ left: '18%', top: '14%' }}
            data-i="0"
            aria-label="Étoile Bételgeuse"
          >
            <i />
            <span>Bételgeuse</span>
          </button>
          <button
            type="button"
            className="e4-star e4-sw"
            style={{ left: '74%', top: '20%' }}
            data-i="1"
            aria-label="Étoile Bellatrix"
          >
            <i />
            <span>Bellatrix</span>
          </button>
          <button
            type="button"
            className="e4-star e4-sw"
            style={{ left: '36%', top: '50%' }}
            data-i="2"
            aria-label="Étoile Alnitak"
          >
            <i />
            <span>Alnitak</span>
          </button>
          <button
            type="button"
            className="e4-star e4-sw"
            style={{ left: '48%', top: '46%' }}
            data-i="3"
            aria-label="Étoile Alnilam"
          >
            <i />
            <span>Alnilam</span>
          </button>
          <button
            type="button"
            className="e4-star e4-sw"
            style={{ left: '60%', top: '42%' }}
            data-i="4"
            aria-label="Étoile Mintaka"
          >
            <i />
            <span>Mintaka</span>
          </button>
          <button
            type="button"
            className="e4-star e4-sw"
            style={{ left: '28%', top: '86%' }}
            data-i="5"
            aria-label="Étoile Saïph"
          >
            <i />
            <span>Saïph</span>
          </button>
          <button
            type="button"
            className="e4-star e4-sb"
            style={{ left: '80%', top: '82%' }}
            data-i="6"
            aria-label="Étoile Rigel"
          >
            <i />
            <span>Rigel</span>
          </button>
          <div className="e4-hint">
            Allumez les 7 étoiles d’Orion<b>0 / 7</b>
          </div>
        </div>
        <div className="e4-orio" aria-hidden="true">
          <span className="e4-o e4-o1">
            <img className="pxsvg" src="/px/art-e73bf255.svg" alt="" width={176} height={184} />
          </span>
          <span className="e4-o e4-o2">
            <img className="pxsvg" src="/px/art-d00c728e.svg" alt="" width={176} height={184} />
          </span>
        </div>
      </div>
      <div className="e4-done" hidden>
        <b>Orion est rallumé.</b>
        <span>Vous aussi, retrouvez votre chemin.</span>
        <Link to="/" className="btn btn-acc e4-home">
          Retour à l’accueil
        </Link>
      </div>
    </section>
  )
}

export function Desktop() {
  return (
    <section className="artboard g-page e4-page">
      <Nav />
      <MmVeilLive />
      <E4 />
    </section>
  )
}
