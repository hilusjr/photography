import React, { useEffect, useState } from 'react'
import Logo from './Logo'

function Navbar({ Link }) {
  const [isOpen, setOpen] = useState(false)
  const [isScrolled, setScrolled] = useState(false)
  const isCollapsed =
    window.location.href.includes('about') ||
    window.location.href.includes('contact')

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const logo = document.querySelector('.logo')
      const logoHeight = parseFloat(window.getComputedStyle(logo).height)
      setScrolled(window.pageYOffset > logoHeight * (2 / 3))
    })
  }, [])

  return (
    <>
      <i
        className={`fa-solid fa-${isOpen ? 'xmark' : 'bars'} menu-btn`}
        onClick={toggleMenu}
      ></i>
      <nav
        data-menu={isOpen}
        data-collapsed={isCollapsed ? 'true' : isScrolled}
      >
        <Logo isScrolled={isCollapsed ? 'true' : isScrolled}/>
        <div className="nav-btns">
          <Link to="/">
            <button className="photography-btn" onClick={toggleMenu}>
              photography
            </button>
          </Link>
          <Link to="/about">
            <button className="about-btn" onClick={toggleMenu}>
              about
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
