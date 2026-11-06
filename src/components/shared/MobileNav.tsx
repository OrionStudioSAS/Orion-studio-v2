import { Link } from 'react-router-dom'

export function MobileNav() {
  return (
    <header className="mo-nav">
      <Link to="/" className="logo">
        <img className="pxsvg logo-m" src="/px/logo-m-3644e11a.svg" alt="" width={22} height={21} />
        <img className="pxsvg logo-w" src="/px/logo-w-ad3e722d.svg" alt="" width={151} height={21} />
      </Link>
      <div className="mo-nav-r">
        <button
          className="mo-burger"
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded="false"
          aria-controls="m-menu"
        >
          <i />
          <i />
        </button>
      </div>
      <i className="nav-prog" />
    </header>
  )
}
