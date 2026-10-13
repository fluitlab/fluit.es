import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/fraunces/opsz.css'
import '@fontsource-variable/space-grotesk'
import './styles.css'
import App from './App.jsx'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// En dev Vite sirve #root vacío; solo el build lo prerenderiza
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
