/**
 * @copyright 2026 Trystan Queffelec
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Styles
 */
import '@/index.css'

/**
 * Components 
 */
import { App } from '@/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
