import { Footer } from './Footer'

export function GCta2() {
  return (
    <div className="g-cta">
      <Footer>
        <div className="cta">
          <h2>
            Une question sur ces informations ?<span className="serif">Écrivez-nous.</span>
          </h2>
          <div className="cta-r">
            <div className="cta-btns">
              <a className="btn btn-line">Analyser mon site</a>
              <a className="btn btn-acc">
                Démarrer un projet <span className="kbd">P</span>
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
