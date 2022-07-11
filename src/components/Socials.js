import React from 'react'

function Socials() {
  return (
    <div className="socials">
      <a
        href="https://www.instagram.com/hilusjr/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://www.facebook.com/hilusjr"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>

      {/* <a href="https://github.com/hilusjr" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github"></i>
      </a> */}
      <a
        href="https://www.youtube.com/channel/UC2PIHyXB5T_gE8LUYC00BYg"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-youtube"></i>
      </a>
    </div>
  )
}

export default Socials
