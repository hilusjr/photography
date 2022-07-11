import { useState, useEffect } from 'react'

const useOffset = () => {
  const [isScrolled, setScrolled] = useState(false)

  const checkOffset = () => {
    const offset = window.pageYOffset
    if (offset > window.innerHeight / 3) {
      setScrolled(true)
    } else setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkOffset)
  }, [])

  return isScrolled
}

export default useOffset
