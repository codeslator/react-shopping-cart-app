import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import ShoppingCartApp from './ShoppingCartApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <ShoppingCartApp />
    </Provider>
  </StrictMode>,
)
