import React, { useState } from 'react'
import useOffset from '../hooks/useOffset'
import Logo from './Logo'

function Navbar({ Link }) {
  const [isOpen, setOpen] = useState(false)
  const isScrolled = useOffset()

  const toggleMenu = () => {
    setOpen(!isOpen)
  }
  return (
    <>
      <i
        className={`fa-solid fa-${isOpen ? 'xmark' : 'bars'} menu-btn`}
        onClick={toggleMenu}
      ></i>
      <nav data-menu={isOpen} data-scrolled={isScrolled}>
        <Logo isOpen={isOpen} />
        <div className="nav-btns">
          <Link to="/">
            <button className="photography-btn" onClick={toggleMenu}>
              photography
            </button>
          </Link>
          <Link to="/about">
            <button className="about-btn" onClick={toggleMenu}>
              about me
            </button>
          </Link>
          <Link to="/contact">
            <button className="contact-btn" onClick={toggleMenu}>
              contact
            </button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
