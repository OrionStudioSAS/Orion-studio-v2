import { menuSet } from './chrome'

/* Pont entre les modules d'animation et le routeur React. */
const PATHS = {
  accueil: '/',
  realisations: '/realisations',
  'chateau-larc': '/realisations/chateau-larc',
  standing: '/realisations/stand-ing',
  golf: '/golfs',
  studio: '/le-studio',
  ressources: '/ressources',
  'etre-cite-par-les-ia': '/ressources/etre-cite-par-chatgpt-perplexity',
}
const TITLES = {
  accueil: 'Orion Studio — Agence de développement web à Paris',
  realisations: 'Réalisations — Orion Studio',
  'chateau-larc': 'Château l’Arc Golf Club — Orion Studio',
  standing: 'Stand-ING — Orion Studio',
  golf: 'Golfs — Orion Studio',
  studio: 'Le studio — Orion Studio',
  ressources: 'Ressources — Orion Studio',
  'etre-cite-par-les-ia': 'Être cité par ChatGPT et Perplexity — Orion Studio',
  'not-found': 'Page introuvable — Orion Studio',
}
let navigate = null
let pendingAfter = null
const setNavigate = (fn) => {
  navigate = fn
}
/** Va vers une page ; `after` s'exécute une fois la nouvelle page affichée. */
function go(name, after) {
  menuSet(false)
  pendingAfter = after || null
  navigate(PATHS[name] || name)
}
function runPendingAfter() {
  const a = pendingAfter
  pendingAfter = null
  if (a) a()
}

export { PATHS, TITLES, setNavigate, go, runPendingAfter }
