import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Session from './core/Session'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Session />
  </StrictMode>,
)
