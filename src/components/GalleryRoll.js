import React, { useState } from 'react'

function GalleryRoll({ imageID, setImageID, setOpen, isOpen }) {
  const [isLoaded, setLoaded] = useState(false)

  const placeHolder = require(`../images/thumbnails/${imageID}.webp`)

  const image = () => {
    try {
      return require(`../images/${imageID}.jpg`)
    } catch {
      return require(`../images/${imageID}.jpeg`)
    }
  }

  const displayPrevious = () => {
    if (imageID <= 1) return
    setImageID(imageID - 1)
  }

  const displayNext = () => {
    if (imageID === 30) return
    setImageID(imageID + 1)
  }

  const closeRoll = () => {
    setOpen(false)
  }

  console.log(isLoaded)
  return (
    <div className="gallery-roll" data-open={isOpen}>
      <div className="roll-image">
        <i className={`fa-solid fa-xmark close-roll`} onClick={closeRoll}></i>
        <button onClick={displayPrevious}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <img
          src={isLoaded ? image() : placeHolder}
          onLoad={() => setLoaded(true)}
        />
        <button onClick={displayNext}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  )
}

export default GalleryRoll
