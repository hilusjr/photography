import React, { useState } from 'react'
import Grid from '../grid.svg'
import Single from '../single.svg'
import img1 from '../images/1.webp'
import img2 from '../images/2.webp'
import img3 from '../images/3.webp'
import img4 from '../images/4.webp'
import img5 from '../images/5.webp'
import img6 from '../images/6.webp'
import img8 from '../images/8.webp'
import img9 from '../images/9.webp'
import '../styles/Gallery.css'
import Header from './Header'

function Gallery() {
  const [isGrid, setGrid] = useState(true)

  const changeLayout = () => {
    setGrid(!isGrid)
  }

  return (
    <>
      <Header />
      <button className="toggle-view-btn">
        <span>view</span>
        <img src={isGrid ? Single : Grid} alt="" onClick={changeLayout} />
      </button>
      <div className="gallery" data-grid={isGrid}>
        <img src={img1} alt="" loading="lazy" />
        <img src={img2} alt="" loading="lazy" />
        <img src={img3} alt="" loading="lazy" />
        <img src={img4} alt="" loading="lazy" />
        <img src={img5} alt="" loading="lazy" />
        <img src={img6} alt="" loading="lazy" />
        <img src={img8} alt="" loading="lazy" />
        <img src={img9} alt="" loading="lazy" />
      </div>
    </>
  )
}

export default Gallery
