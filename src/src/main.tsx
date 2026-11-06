import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Session from './core/Session'
import Loader from './core/Loader'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Session />
    <Loader /> 
  </StrictMode>,
)
