import React from 'react'
import { BsX } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import cx from 'classnames'

function SideMenu({ menuOpen, closeSideMenu }) {
  return (
    <nav
      onClick={closeSideMenu}
      className={cx(
        'w-60 h-screen fixed top-0 right-0 bg-white shadow-md pt-20 px-4 transition translate-x-60',
        {
          'translate-x-0': menuOpen,
        }
      )}
    >
      <div className="w-60 h-16 px-4 bg-white shadow-md fixed top-0 right-0 flex items-center justify-end">
        <button onClick={closeSideMenu}>
          <BsX size={20} className="text-purple-700" />
        </button>
      </div>
      <Link to="/register">Register</Link>
    </nav>
  )
}

export default SideMenu
