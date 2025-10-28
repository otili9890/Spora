import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, Router } from 'react-router-dom'
// import Navbar from './components/Navbar.jsx'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './routes/Dashboard'
import Explore from './routes/Explore'
import Home from './routes/Home'
import Profile from './components/Profile'
import NotFoundPage from './components/NotFoundPage'
import AuthProvider from './components/AuthProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen left-0 top-0 fixed'>
          <AuthProvider>
            <Navbar />
            <div className='min-h-screen flex flex-col bg-green-50'>
              
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/explore/:id" element={<Profile />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </AuthProvider>
      </div>
    </>
  )
}

export default App
