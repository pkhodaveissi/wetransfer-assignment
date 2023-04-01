import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import router from './routes/router'

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
