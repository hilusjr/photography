import React, { useState } from 'react'
import Grid from '../grid.svg'
import Single from '../single.svg'
import img1 from '../images/1.webp'
import img2 from '../images/2.webp'
import img3 from '../images/3.webp'
import img4 from '../images/4.webp'
import img5 from '../images/5.webp'
import img6 from '../images/6.webp'
import img7 from '../images/7.webp'
import img8 from '../images/8.webp'
import img9 from '../images/9.webp'
import img10 from '../images/10.webp'
import img11 from '../images/11.webp'
import img12 from '../images/12.webp'
import img13 from '../images/13.webp'
import img14 from '../images/14.webp'
import img15 from '../images/15.webp'
import img16 from '../images/16.webp'
import img17 from '../images/17.webp'
import img18 from '../images/18.webp'
import img19 from '../images/19.webp'
import img20 from '../images/20.webp'
import img21 from '../images/21.webp'
import img22 from '../images/22.webp'
import img23 from '../images/23.webp'
import img24 from '../images/24.webp'
import img25 from '../images/25.webp'
import img26 from '../images/26.webp'
import img27 from '../images/27.webp'
import img28 from '../images/28.webp'
import img29 from '../images/29.webp'
import img30 from '../images/30.webp'
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
        <img src={require('../images/1.webp')} alt="" loading="lazy" />
        <img src={img2} alt="" loading="lazy" />
        <img src={img3} alt="" loading="lazy" />
        <img src={img4} alt="" loading="lazy" />
        <img src={img5} alt="" loading="lazy" />
        <img src={img6} alt="" loading="lazy" />
        <img src={img7} alt="" loading="lazy" />
        <img src={img8} alt="" loading="lazy" />
        <img src={img9} alt="" loading="lazy" />
        <img src={img10} alt="" loading="lazy" />
        <img src={img11} alt="" loading="lazy" />
        <img src={img12} alt="" loading="lazy" />
        <img src={img13} alt="" loading="lazy" />
        <img src={img14} alt="" loading="lazy" />
        <img src={img15} alt="" loading="lazy" />
        <img src={img16} alt="" loading="lazy" />
        <img src={img17} alt="" loading="lazy" />
        <img src={img18} alt="" loading="lazy" />
        <img src={img19} alt="" loading="lazy" />
        <img src={img20} alt="" loading="lazy" />
        <img src={img21} alt="" loading="lazy" />
        <img src={img22} alt="" loading="lazy" />
        <img src={img23} alt="" loading="lazy" />
        <img src={img24} alt="" loading="lazy" />
        <img src={img25} alt="" loading="lazy" />
        <img src={img26} alt="" loading="lazy" />
        <img src={img27} alt="" loading="lazy" />
        <img src={img28} alt="" loading="lazy" />
        <img src={img29} alt="" loading="lazy" />
        <img src={img30} alt="" loading="lazy" />
      </div>
    </>
  )
}

export default Gallery
