import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './styles/index.css'

// La position de défilement est gérée par PageTransition (derrière le rideau de pixels).
history.scrollRestoration = 'manual'

// Pas de StrictMode : les animations GSAP modifient le DOM des pages une fois montées,
// et un double montage de développement les rejouerait sur un DOM déjà découpé.
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
