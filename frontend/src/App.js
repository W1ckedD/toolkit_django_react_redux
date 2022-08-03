// CSS
import 'react-toastify/dist/ReactToastify.css'

import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import IndexPage from './pages/Index'
import RegisterPage from './pages/Register'

// Components
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'

// Redux
import store from './store'
import { Provider } from 'react-redux'

const App = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  return (
    <Provider store={store}>
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
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
        <ToastContainer />
      </Router>
    </Provider>
  )
}

const root = createRoot(document.querySelector('#root'))
root.render(<App />)
