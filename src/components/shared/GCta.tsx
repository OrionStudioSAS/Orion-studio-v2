import { Link } from 'react-router-dom'
import { Footer } from './Footer'

export function GCta() {
  return (
    <div className="g-cta">
      <Footer>
        <div className="cta">
          <h2>
            Votre site actuel vous freine ?<span className="serif">Commençons par l’analyser.</span>
          </h2>
          <div className="cta-r">
            <div className="cta-btns">
              <Link to="/realisations" className="btn btn-line">
                Voir nos réalisations
              </Link>
              <a className="btn btn-acc">
                Analyser mon site <span className="kbd">↵</span>
              </a>
            </div>
            <span className="mail">
              ou écrivez à <b>hello@orion-studio.io</b>
            </span>
          </div>
        </div>
      </Footer>
    </div>
  )
}
