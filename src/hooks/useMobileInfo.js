import { useState, useEffect } from 'react'

const useMobileInfo = () => {
  const [isMobile, setMobile] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) setMobile(true)
      else setMobile(false)
    })
  }, [])

  return isMobile
}

export default useMobileInfo
