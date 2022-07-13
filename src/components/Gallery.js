import React, { useState } from 'react'
import Grid from '../grid.svg'
import Single from '../single.svg'
import '../styles/Gallery.css'
import GalleryRoll from './GalleryRoll'
import Header from './Header'

function Gallery() {
  const IMG_AMOUNT = 30
  const [isGrid, setGrid] = useState(true)
  const [isOpen, setOpen] = useState(false)
  const [imageID, setImageID] = useState(1)

  const changeLayout = () => {
    setGrid(!isGrid)
  }

  const openImage = img => {
    const id = img.target.id
    setImageID(Number(id))
    setOpen(true)
  }

  return (
    <>
      <Header />
      <button className="toggle-view-btn">
        <span>view</span>
        <img src={isGrid ? Single : Grid} alt="" onClick={changeLayout} />
      </button>
      <div className="gallery" data-grid={isGrid}>
        {[...Array(IMG_AMOUNT)].map((x, i) => (
          <img
            src={require(`../images/thumbnails/${i + 1}.webp`)}
            id={i + 1}
            key={i}
            alt=""
            loading="lazy"
            onClick={openImage}
          />
        ))}
      </div>
      <GalleryRoll
        imageID={imageID}
        setImageID={setImageID}
        setOpen={setOpen}
        isOpen={isOpen}
      />
    </>
  )
}

export default Gallery
