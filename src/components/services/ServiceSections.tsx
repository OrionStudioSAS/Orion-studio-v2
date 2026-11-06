import { Link } from 'react-router-dom'
import { AdminBlock } from '../shared/AdminBlock'
import { OrioSteps } from '../shared/OrioSteps'
import { ReviewsBlock } from '../shared/ReviewsBlock'
import { WorkTrack, type WorkItem } from '../shared/WorkTrack'
import { VisibleBlock } from './VisibleBlock'
import {
  PROJECTS,
  SERVICES,
  SERVICE_LINKS,
  SITE_PAGES,
  VISIBLE_PAGES,
  afterOf,
  type Point,
  type Ref,
  type ServiceId,
} from './servicesData'

const Plus = ({ open = false }: { open?: boolean }) => (
  <svg
    className="plus"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={open ? 'M0 6H12' : 'M6 0V12M0 6H12'} stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

const Points = ({ items }: { items: readonly Point[] }) => (
  <div className="xs-pts">
    {items.map((p) => (
      <div className="xs-pt" key={p.t}>
        <h3>{p.t}</h3>
        <p>{p.d}</p>
      </div>
    ))}
  </div>
)

/** Et après : la barre de pixels de l'accueil, à la verticale, allume les lignes au défilement. */
const After = ({ items }: { items: readonly Point[] }) => (
  <div className="xs-af-box">
    <div className="xs-rail" aria-hidden="true">
      {Array.from({ length: 30 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
    <div className="xs-afs">
      {items.map((p) => (
        <div className="xs-af" key={p.t}>
          <h3>{p.t}</h3>
          <p>{p.d}</p>
          {p.links && (
            <div className="xs-af-l">
              {p.links.map((l) => (
                <Link to={l.to} key={l.to}>
                  {l.label}
                  <i aria-hidden="true">→</i>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)

// Le défilé garde au moins 3 projets : ceux du service d'abord, puis des projets récents du studio.
const FILL: readonly Ref['p'][] = ['chateau', 'standing', 'moulin', 'housses']
function workItems(refs: readonly Ref[]): WorkItem[] {
  const all = [...refs]
  for (const p of FILL) if (all.length < 3 && !all.some((r) => r.p === p)) all.push({ p })
  return all.map(({ p, note }) => ({ ...PROJECTS[p], desc: note ?? PROJECTS[p].desc }))
}

/** Le même déroulé sur toutes les pages Expertises, avec les blocs de l'accueil quand ils existent. */
export function ServiceSections({
  id,
  mobile = false,
  anchor,
}: {
  id: ServiceId
  mobile?: boolean
  anchor?: string
}) {
  const s = SERVICES[id]
  const others = SERVICE_LINKS.filter((l) => l.id !== id)
  const icon = SERVICE_LINKS.find((l) => l.id === id)?.icon
  const work = workItems(s.refs)
  const workLead =
    'De vrais projets conçus et développés par le studio, du premier croquis à la mise en ligne.'

  if (mobile)
    return (
      <>
        <section className="mo-sec xs-what" id={anchor}>
          <div className="mo-shead">
            <span className="xs-ico">
              <img className="pxsvg" src={icon} alt="" />
            </span>
            <h2 className="mo-h2">
              C’est quoi,<span className="serif">{s.what.title}</span>
            </h2>
          </div>
          <p className="xs-lead">{s.what.lead}</p>
          <Points items={s.what.points} />
        </section>
        {VISIBLE_PAGES.includes(id) && <VisibleBlock id={id} mobile />}
        <section className="mo-sec">
          <div className="mo-shead">
            <h2 className="mo-h2">
              Comment ça se passe,<span className="serif">en 4 étapes.</span>
            </h2>
          </div>
          <OrioSteps
            mobile
            steps={s.steps}
            note={<b>Vous suivez chaque étape dans Orion Admin, votre espace client.</b>}
          />
        </section>
        <section className="xs-after xs-after-m">
          <div className="xs-after-c">
            <h2 className="mo-h2">
              Et après ?<span className="serif">On reste à vos côtés.</span>
            </h2>
            <After items={afterOf(id)} />
          </div>
        </section>
        {SITE_PAGES.includes(id) && <AdminBlock mobile />}
        <section className="mo-sec">
          <div className="mo-shead">
            <h2 className="mo-h2">
              Nos autres<span className="serif">services.</span>
            </h2>
          </div>
          <div className="xpm-rel">
            {others.map((l) => (
              <Link to={`/expertises/${l.id}`} className="xpm-rl" data-exp={l.id} key={l.id}>
                <img className="pxsvg picon" src={l.icon} alt="" width={20} height={20} />
                <div>
                  <b>{l.name}</b>
                  <span>{l.d}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <WorkTrack mobile items={work} title="Exemples de" serif="réalisations." />
        <ReviewsBlock mobile />
        <section className="mo-sec">
          <div className="mo-shead">
            <h2 className="mo-h2">
              Vos questions,<span className="serif">nos réponses.</span>
            </h2>
          </div>
          <div className="mo-faq">
            {s.faq.map((f) => (
              <div className="mo-q" key={f.q}>
                <div className="mo-q-h">
                  <span>{f.q}</span>
                  <Plus />
                </div>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    )

  const head = { paddingLeft: '72px', paddingRight: '72px' }
  return (
    <>
      <section className="sec xs-what" id={anchor}>
        <div className="xs-what-l">
          <span className="xs-ico">
            <img className="pxsvg" src={icon} alt="" />
          </span>
          <h2 className="h2">
            C’est quoi,
            <br />
            <span className="serif">{s.what.title}</span>
          </h2>
        </div>
        <div className="xs-what-r">
          <p className="xs-lead">{s.what.lead}</p>
          <Points items={s.what.points} />
        </div>
      </section>
      {VISIBLE_PAGES.includes(id) && <VisibleBlock id={id} />}
      <section className="sec" style={{ padding: 0 }}>
        <div className="shead" style={head}>
          <h2 className="h2">
            Comment ça se passe,
            <br />
            <span className="serif">en 4 étapes.</span>
          </h2>
        </div>
        <OrioSteps
          steps={s.steps}
          note={<b>Vous suivez chaque étape dans Orion Admin, votre espace client.</b>}
        />
      </section>
      <section className="xs-after">
        <div className="xs-after-c">
          <h2 className="h2">
            Et après ?
            <br />
            <span className="serif">On reste à vos côtés.</span>
          </h2>
          <After items={afterOf(id)} />
        </div>
      </section>
      {SITE_PAGES.includes(id) && <AdminBlock />}
      <section className="sec xs-svcs" style={{ padding: 0, borderTop: 'none' }}>
        <div className="shead" style={head}>
          <h2 className="h2">Nos autres services</h2>
        </div>
        <div className="xs-rls">
          {others.map((l) => (
            <Link to={`/expertises/${l.id}`} className="xs-sv" data-exp={l.id} key={l.id}>
              <img className="pxsvg picon" src={l.icon} alt="" width={24} height={24} />
              <div>
                <b>{l.name}</b>
                <span>{l.d}</span>
              </div>
              <i aria-hidden="true">→</i>
            </Link>
          ))}
        </div>
      </section>
      <WorkTrack items={work} title="Exemples de" serif="réalisations." lead={workLead} />
      <ReviewsBlock />
      <section className="sec xs-faq" style={{ padding: 0 }}>
        <div className="faq">
          <div className="faq-l">
            <h2 className="h2">
              Questions
              <br />
              <span className="serif">fréquentes.</span>
            </h2>
            <p className="lead">Les réponses aux questions qu’on nous pose le plus souvent sur ce sujet.</p>
            <Link to="/faq" className="lnk">
              Toute la FAQ
            </Link>
          </div>
          <div className="acc">
            {s.faq.map((f) => (
              <div className="q" key={f.q}>
                <div className="q-h">
                  <span>{f.q}</span>
                  <Plus open />
                </div>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
