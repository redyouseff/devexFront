import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'

// Force LTR direction globally
document.documentElement.setAttribute('dir', 'ltr')
document.documentElement.setAttribute('lang', 'en')


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />   
 
  </StrictMode>,
)
