import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import store from './redux/store.js'
import { Provider } from "react-redux";

// Force LTR direction globally
document.documentElement.setAttribute('dir', 'ltr')
document.documentElement.setAttribute('lang', 'en')

const rootElement = document.getElementById('root');

const AppWrapper = (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// Check if page was pre-rendered by react-snap
if (rootElement.hasChildNodes()) {
  // Hydrate pre-rendered content
  hydrateRoot(rootElement, AppWrapper);
} else {
  // Normal client-side rendering
  createRoot(rootElement).render(AppWrapper);
}
