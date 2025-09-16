import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Profile from './components/Profile.jsx'
import Explore from './components/Explore.jsx'
import Dashboard from './components/Dashboard.jsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/explore',
    element: <Explore />,
  },
  {
    path: '/explore/:id',
    element: <Profile />,
  },
  {
    path: '/*',
    element: <NotFoundPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
