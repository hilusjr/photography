import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isScrolled, setScrolled] = useState(false)
  const [isMobile, setMobile] = useState(true)

  const checkOffset = () => {
    const offset = window.pageYOffset

    if (offset > window.innerHeight / 4) {
      setScrolled(true)
    } else setScrolled(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', checkOffset)
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) setMobile(true)
      else setMobile(false)
    })
  }, [])

  return (
    <>
      <header data-scrolled={isScrolled}>
        <div className="logo">
          <span data-scrolled={isScrolled}>hilusjr</span>
          <span style={isScrolled ? { display: 'none' } : { display: 'block' }}>
            photography
          </span>
        </div>
        {!isMobile && (
          <div className="desktop-nav">
            <Link to="/">
              <button className="photography-btn">photography</button>
            </Link>
            <Link to="/about">
              <button className="about-btn">about me</button>
            </Link>
            <Link to="/contact">
              <button className="contact-btn">contact</button>
            </Link>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
