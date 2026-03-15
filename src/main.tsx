import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { initI18n } from './i18n'
import './index.css'

initI18n().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <HashRouter>
        <Suspense fallback={<div style={{ background: '#0D0D0D', minHeight: '100vh' }} />}>
          <App />
        </Suspense>
      </HashRouter>
    </React.StrictMode>,
  )
})
