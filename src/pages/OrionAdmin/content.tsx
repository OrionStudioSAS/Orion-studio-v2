import { Link } from 'react-router-dom'

const Win = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="win oa-win">
    <div className="win-bar">
      <span className="dots">
        <i />
        <i />
        <i />
      </span>
      <span className="win-title">{title}</span>
      <span className="win-sp" />
    </div>
    {children}
  </div>
)

const Plus = () => (
  <svg
    className="plus"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 0V12M0 6H12" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

const POINTS = [
  {
    t: 'À quoi ça sert',
    d: 'À voir ce qui se passe sur votre site et à le faire vivre vous-même, sans attendre personne.',
  },
  {
    t: 'Pour qui',
    d: 'Pour chaque entreprise qui veut garder la main sur son site : on y met ce qui lui sert, rien d’autre.',
  },
  {
    t: 'Un exemple',
    d: 'Au Château l’Arc, l’accueil met à jour l’état du parcours, les tarifs et les résultats, sans nous appeler.',
  },
]

const TILES = [
  {
    img: '/images/640db08a1fe9fc.jpg',
    t: 'État du parcours et bandeau',
    d: 'Ouverture, voiturettes, practice, restaurant : l’accueil met à jour, le site suit.',
  },
  {
    img: '/images/dd157dcd71774f.jpg',
    t: 'Pop-up marketing',
    d: 'Stages, événements et offres du moment, avec les affichages et les clics.',
  },
  {
    img: '/images/5b81411ff7e76f.jpg',
    t: 'Compétitions et résultats',
    d: 'Résultats importés, classement vérifié, publication en un clic.',
  },
]

const FAQ = [
  {
    q: 'Faut-il savoir coder ?',
    a: 'Non. Vous cliquez sur ce que vous voulez changer, vous le modifiez, vous publiez. On vous montre comment faire à la mise en ligne.',
  },
  {
    q: 'Est-ce le même outil pour tout le monde ?',
    a: 'Non. Orion Admin est construit sur mesure pour chaque site qui le choisit. Un golf, une boulangerie et un cabinet n’ont pas besoin des mêmes écrans.',
  },
  {
    q: 'Que peut-on y faire exactement ?',
    a: 'Cela dépend de votre activité. On part de ce que vous faites chaque semaine, et on construit les écrans qui vous font gagner du temps.',
  },
  {
    q: 'Est-ce inclus avec mon site ?',
    a: 'Non, c’est une option. On vous le propose quand votre site en a besoin. Sans Orion Admin, vous pouvez toujours modifier votre site vous-même.',
  },
  {
    q: 'Combien ça coûte ?',
    a: 'Cela dépend de ce que vous voulez y mettre. C’est chiffré dans le devis de votre site, après un premier échange gratuit et sans engagement.',
  },
]

/** Le contenu est le même sur ordinateur et sur mobile : seuls les titres changent de classe. */
export function AdminContent({ mobile = false }: { mobile?: boolean }) {
  const H2 = ({ a, b }: { a: string; b: string }) =>
    mobile ? (
      <h2 className="mo-h2">
        {a}
        <span className="serif">{b}</span>
      </h2>
    ) : (
      <h2 className="h2">
        {a}
        <br />
        <span className="serif">{b}</span>
      </h2>
    )
  return (
    <div className="oa-page">
      <section className={mobile ? 'mo-sec xs-what' : 'sec xs-what'}>
        <div className={mobile ? 'mo-shead' : 'xs-what-l'}>
          <H2 a="C’est quoi," b="Orion Admin ?" />
        </div>
        <div className="xs-what-r">
          <p className="xs-lead">
            C’est l’interface d’administration de votre site, construite sur mesure par le studio, en option.
            Vous y voyez ce qui se passe sur votre site, et vous le modifiez vous-même.
          </p>
          <div className="xs-pts">
            {POINTS.map((p) => (
              <div className="xs-pt" key={p.t}>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="oa-fs">
        <div className="oa-f">
          <div className="oa-f-t">
            <H2 a="Vos chiffres," b="sans jargon." />
            <p>
              Combien de personnes viennent chaque mois, d’où elles arrivent, sur quels boutons elles
              cliquent. Vous savez ce qui marche, d’un coup d’œil.
            </p>
          </div>
          <div className="oa-f-m">
            <Win title="Orion Admin — Château l’Arc">
              <img
                className="oa-shot"
                src="/images/94f1f7140db692.jpg"
                alt="Le tableau de bord du Château l’Arc"
              />
            </Win>
          </div>
        </div>

        <div className="oa-f oa-f-r">
          <div className="oa-f-t">
            <H2 a="Votre site," b="modifiable au clic." />
            <p>
              Comme sur WordPress : vous cliquez sur un texte ou une image, vous le changez, vous publiez.
              Essayez sur cet exemple.
            </p>
          </div>
          <div className="oa-f-m">
            <Win title="Mode édition — exemple">
              <div className="oa-ed">
                <span className="oa-ed-k">Cliquez sur un texte</span>
                <button type="button" className="oa-e oa-e-h" data-alt="Le menu de saison">
                  Le menu du jour
                </button>
                <button
                  type="button"
                  className="oa-e oa-e-p"
                  data-alt="Des produits frais, une carte qui change avec les saisons."
                >
                  Une cuisine maison, préparée chaque matin.
                </button>
                <button type="button" className="oa-e oa-e-b" data-alt="Voir la carte">
                  Réserver une table
                </button>
              </div>
            </Win>
          </div>
        </div>

        <div className="oa-f">
          <div className="oa-f-t">
            <H2 a="Vos langues," b="au même endroit." />
            <p>
              Votre site existe en plusieurs langues ? Vous gérez toutes les traductions depuis un seul écran.
            </p>
          </div>
          <div className="oa-f-m">
            <Win title="Traductions — exemple">
              <div className="oa-trs">
                <div className="oa-lang">
                  <button type="button" className="on" data-l="fr" aria-pressed="true">
                    FR
                  </button>
                  <button type="button" data-l="en" aria-pressed="false">
                    EN
                  </button>
                </div>
                <div className="oa-tr oa-tr-h" data-fr="Bienvenue chez nous" data-en="Welcome to our place">
                  Bienvenue chez nous
                </div>
                <div className="oa-tr" data-fr="Nos horaires d’ouverture" data-en="Our opening hours">
                  Nos horaires d’ouverture
                </div>
                <div className="oa-tr" data-fr="Nous contacter" data-en="Contact us">
                  Nous contacter
                </div>
              </div>
            </Win>
          </div>
        </div>
      </section>

      <section className={mobile ? 'mo-sec oa-more' : 'sec oa-more'}>
        <div className={mobile ? 'mo-shead' : 'shead'}>
          <H2 a="Et tout ce que" b="votre activité demande." />
          <Link to="/realisations/chateau-larc" className="lnk">
            Voir le projet Château l’Arc
          </Link>
        </div>
        <div className="oa-tiles">
          {TILES.map((x) => (
            <article className="oa-tile" key={x.t}>
              <Win title="Orion Admin — Château l’Arc">
                <img className="oa-shot" src={x.img} alt={x.t} loading="lazy" />
              </Win>
              <h3>{x.t}</h3>
              <p>{x.d}</p>
            </article>
          ))}
        </div>
        <p className="oa-end">
          La liste n’a pas vraiment de fin :{' '}
          <span className="serif">si votre activité en a besoin, on le construit.</span>
        </p>
      </section>

      <section className={mobile ? 'mo-sec' : 'sec'} style={mobile ? undefined : { padding: 0 }}>
        {mobile ? (
          <>
            <div className="mo-shead">
              <H2 a="Vos questions," b="nos réponses." />
            </div>
            <div className="mo-faq">
              {FAQ.map((f) => (
                <div className="mo-q" key={f.q}>
                  <div className="mo-q-h">
                    <span>{f.q}</span>
                    <Plus />
                  </div>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="faq">
            <div className="faq-l">
              <H2 a="Questions" b="fréquentes." />
            </div>
            <div className="acc">
              {FAQ.map((f) => (
                <div className="q" key={f.q}>
                  <div className="q-h">
                    <span>{f.q}</span>
                    <Plus />
                  </div>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
