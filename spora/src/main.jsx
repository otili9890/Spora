import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Profile from './components/Profile.jsx'
import Explore from './components/Explore.jsx'
import Dashboard from './components/Dashboard.jsx'
import { BrowserRouter } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage.jsx'
import Navbar from './components/Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
