import React, { useState } from 'react'
import Grid from '../grid.svg'
import Single from '../single.svg'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img8 from '../images/8.jpg'
import img9 from '../images/9.jpg'
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
