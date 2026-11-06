const STEPS = [
  [
    'Cadrer',
    'Atelier, objectifs, arborescence et devis ferme. On sait ce qu’on construit avant de dessiner.',
  ],
  ['Designer', 'Direction artistique, maquettes Figma et prototype cliquable, validés écran par écran.'],
  ['Développer', 'Intégration, CMS ou Shopify, automatisations. Une préprod ouverte pour tester en continu.'],
  ['Lancer', 'Mise en ligne, redirections, SEO technique et prise en main par votre équipe.'],
  ['Faire grandir', 'Mesure, tests et évolutions au fil de l’eau, quand vous en avez besoin.'],
]

/** Même fonctionnement que la page Le studio : la barre suit le défilement, Orio avance dessus. */
export function OrioSteps({ mobile = false }: { mobile?: boolean }) {
  const cells = Array.from({ length: mobile ? 40 : 64 })
  return (
    <div className={mobile ? 's2-track s2-m s2-orio' : 's2-track s2-orio'}>
      <div className="s2-dog">
        <span className="dg" role="img" aria-label="Orio, la mascotte du studio, avec son ordinateur">
          <img className="pxsvg dg-f o-a" src="/px/orio-ordi-a.svg" alt="" />
          <img className="pxsvg dg-f o-b" src="/px/orio-ordi-b.svg" alt="" />
        </span>
      </div>
      <div className="s2-bar">
        {cells.map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <div className="s2-row">
        {STEPS.map(([title, text], i) => (
          <div className="s2-st" data-i={i} key={title}>
            <b>
              <i />
              {title}
            </b>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <p className="s2-note">
        <b>Vous suivez chaque étape en direct dans Orion Admin</b>, avec une préprod pour tester avant la mise
        en ligne.
      </p>
    </div>
  )
}
