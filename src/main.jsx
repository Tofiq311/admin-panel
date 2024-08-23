import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeContextProvider } from './Context/DarkModeContext.jsx'
import { AuthContextProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
         <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </StrictMode>,
)
