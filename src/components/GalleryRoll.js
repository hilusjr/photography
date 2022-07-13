import React from 'react'

function GalleryRoll({ imageID, setImageID, setOpen, isOpen }) {
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

  return (
    <div className="gallery-roll" data-open={isOpen}>
      <i className={`fa-solid fa-xmark close-roll`} onClick={closeRoll}></i>
      <div className="roll-image">
        <button onClick={displayPrevious}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <img src={image()} />
        <button onClick={displayNext}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  )
}

export default GalleryRoll
