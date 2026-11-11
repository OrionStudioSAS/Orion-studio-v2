import { Link } from 'react-router-dom'
import { Mq, Mq2 } from '../../components/shared/Marquees'

/** Chaque logo mène au projet : au survol, le logo laisse place au site réalisé. */
const CLIENTS = [
  {
    name: 'Château l’Arc Golf Club',
    tag: 'Golf',
    to: '/realisations/chateau-larc',
    logo: '/images/a58f0039fd543e.png',
    h: 72,
    shot: '/images/661531aedb86a4.jpg',
  },
  {
    name: 'Stand-ING',
    tag: 'Configurateur 3D',
    to: '/realisations/stand-ing',
    logo: '/images/f929bc41088d4e.png',
    h: 46,
    shot: '/images/2c63fe08cd774a.png',
  },
  {
    name: 'Le Moulin de Balme',
    tag: 'Boulangerie',
    to: '/realisations/moulin-de-balme',
    logo: '/images/407078ca1be0b8.png',
    h: 74,
    shot: '/images/ce971a6eeb6bd1.jpg',
  },
  {
    name: 'DATHY',
    tag: 'AMO bâtiment & TP',
    to: '/realisations/dathy',
    logo: '/images/682cb609d42336.png',
    h: 58,
    shot: '/images/d6469bcda29f1a.jpg',
  },
  {
    name: 'Swing Call',
    tag: 'Start-up',
    to: '/realisations/swing-call',
    logo: '/images/c89d8692d26a0a.png',
    h: 30,
    shot: '/images/a4c19bfe3dd683.jpg',
  },
  {
    name: 'Les Bocaux du Vexin',
    tag: 'E-commerce',
    to: '/realisations/les-bocaux-du-vexin',
    logo: '/images/b56f8e7e2f.png',
    h: 30,
    shot: '/images/4decbda594bb3c.jpg',
  },
  {
    name: 'Osmose Nutrition',
    tag: 'E-commerce',
    to: '/realisations/osmose-nutrition',
    logo: '/images/f98ae461e1.png',
    h: 34,
    shot: '/images/b351708a31fde9.jpg',
  },
  {
    name: 'Ocha & Co.',
    tag: 'E-commerce',
    to: '/realisations/ocha-and-co',
    logo: '/images/f20df44bf4.png',
    h: 58,
    shot: '/images/71eb80b3e243f6.jpg',
  },
]

export function ClientsBlock({ mobile = false }: { mobile?: boolean }) {
  const list = mobile ? CLIENTS.slice(0, 6) : CLIENTS
  return (
    <section className={mobile ? 'hc hc-m' : 'hc'}>
      <Mq mobile={mobile} />
      <Mq2 mobile={mobile} />
      <div className="hc-in">
        <div className="hc-h">
          {mobile ? (
            <h2 className="mo-h2">
              Ils nous ont confié<span className="serif">leurs projets.</span>
            </h2>
          ) : (
            <h2 className="h2">
              Ils nous ont confié
              <br />
              <span className="serif">leurs projets.</span>
            </h2>
          )}
          <p>
            Golf, boulangerie, bâtiment, start-up ou e-commerce :{' '}
            {mobile ? 'chaque logo mène à son projet.' : 'passez sur un logo pour voir le site.'}
          </p>
        </div>
        <div className="hc-g">
          {list.map((c) => (
            <Link key={c.to} to={c.to} className="hc-c" aria-label={`${c.name}, voir le projet`}>
              <img
                className="hc-logo"
                src={c.logo}
                alt=""
                style={{ height: mobile ? Math.round(c.h * 0.72) : c.h }}
              />
              <img className="hc-shot" src={c.shot} alt="" loading="lazy" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
