import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import IndexPage from './pages/Index'

// Components
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'

const App = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  return (
    <Router>
      <Navbar
        toggleSideMenu={() => setSideMenuOpen((prevState) => !prevState)}
      />
      <SideMenu
        menuOpen={sideMenuOpen}
        closeSideMenu={() => setSideMenuOpen(false)}
      />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </div>
    </Router>
  )
}

const root = createRoot(document.querySelector('#root'))
root.render(<App />)
