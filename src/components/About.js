import React from 'react'
import Socials from './Socials'
import profilePic from '../images/profile.jpg'
import '../styles/About.css'

function About() {
  return (
    <>
      <div className="about">
        <div className="profile-info">
          <div className="profile-picture">
            <img src={profilePic} alt="profile of me" />
          </div>
          <div className="profile-details">
            <span className="nick">hilusjr</span>
            <span className="name">Piotr Hilicki</span>
            <Socials />
          </div>
        </div>
        <div className="quote">
          Passion is not everything, but everything without passion is nothing.
        </div>
        <div className="description">
          <span>
            My name is Peter and I’m an amateur photographer based in Szczecin,
            Poland. My interests are mainly programming and photography, though
            I am doing this purely out of the passion I feel towards it.
          </span>
          <span>
            I am not educated when it comes to photography, but I enjoy looking
            for new opportunities to capture something that might tell a story
            or just show something from a rare perspective. I mostly photograph
            cities, their infrastructure and architecture, all my better shots
            end up on Instagram.
          </span>
          <span>
            When it comes to gear I use for taking images, I don’t have a fancy
            camera and expensive equipment. As of now, all the photos I’ve taken
            on my phone. It lacks some features, quality, but who knows what
            future may bring.
          </span>
        </div>
      </div>
    </>
  )
}

export default About
