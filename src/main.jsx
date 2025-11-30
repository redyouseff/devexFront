import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import store from './redux/store.js'
import { Provider } from "react-redux";

// Force LTR direction globallys
document.documentElement.setAttribute('dir', 'ltr')
document.documentElement.setAttribute('lang', 'en')


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
          <App />  

    </Provider>

 
 
  </StrictMode>,
)
