/** Les deux bandeaux défilants du site (page Le studio, accueil). */
export function Mq({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? 'mq mq-a mq-m' : 'mq mq-a'}>
      <div className="mq-t">
        <span>Site internet</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Développement d’applications</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Automatisations</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>SEO</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>GEO</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>SEA</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Site internet</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Développement d’applications</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Automatisations</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>SEO</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>GEO</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>SEA</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Site internet</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Développement d’applications</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Automatisations</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>SEO</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>GEO</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>SEA</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
      </div>
    </div>
  )
}

export function Mq2({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? 'mq mq-b mq-m' : 'mq mq-b'}>
      <div className="mq-t">
        <span>Basés à Paris</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Partout en France</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>À l’international</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>En français ou en anglais</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Sur place ou à distance</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Du croquis à la mise en ligne</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Basés à Paris</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Partout en France</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>À l’international</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>En français ou en anglais</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Sur place ou à distance</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Du croquis à la mise en ligne</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Basés à Paris</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Partout en France</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>À l’international</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>En français ou en anglais</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Sur place ou à distance</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
        <span>Du croquis à la mise en ligne</span>
        <i>
          <svg
            className="pxstar"
            width="13.5"
            height="12"
            viewBox="0 0 13.5 12"
            fill="none"
            shapeRendering="crispEdges"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="0" width="1.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="1.5" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="4.5" y="3" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="0" y="4.5" width="13.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="6" width="10.5" height="1.5" fill="#FF4D1A" />
            <rect x="3" y="7.5" width="7.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="7.5" y="9" width="4.5" height="1.5" fill="#FF4D1A" />
            <rect x="1.5" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
            <rect x="9" y="10.5" width="3" height="1.5" fill="#FF4D1A" />
          </svg>
        </i>
      </div>
    </div>
  )
}
