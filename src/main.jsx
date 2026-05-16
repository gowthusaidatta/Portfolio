import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
// UI initialization moved into `App` via useEffect; script helpers kept for reference

function mountApp() {
  const container = document.getElementById('root')
  if (!container) return
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )

  // UI initialization moved into App via useEffect
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  mountApp()
} else {
  window.addEventListener('DOMContentLoaded', mountApp)
}
