import React from 'react'
import { BsX, BsList, BsChevronRight } from 'react-icons/bs'

function Navbar({ sideMenuOpen, toggleSideMenu }) {
  return (
    <nav className="h-16 w-screen px-4 bg-white shadow-md fixed top-0 left-0 flex items-center justify-between">
      <button>
        <BsChevronRight size={20} className="text-purple-700" />
      </button>
      <h1 className="text-xl font-bold text-purple-700">ToolKit</h1>
      <button onClick={toggleSideMenu}>
        {sideMenuOpen ? (
          <BsX size={20} className="text-purple-700" />
        ) : (
          <BsList size={20} className="text-purple-700" />
        )}
      </button>
    </nav>
  )
}

export default Navbar
