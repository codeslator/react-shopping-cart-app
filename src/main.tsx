import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ShoppingCartApp from './ShoppingCartApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShoppingCartApp />
  </StrictMode>,
)
