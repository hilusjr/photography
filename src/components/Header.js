import React, { useEffect, useState } from 'react'
import Logo from './Logo'

function Header() {
  const [isScrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const header = document.querySelector('header')
      if (!header) return
      const headerHeight = parseFloat(window.getComputedStyle(header).height)
      setScrolled(window.pageYOffset > headerHeight * (2 / 3))
    })
  }, [])
  return (
    <>
      <header data-scrolled={isScrolled}>
        <Logo />
      </header>
    </>
  )
}

export default Header
