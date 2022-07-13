import React from 'react'
import '../styles/Contact.css'
import Header from './Header'

function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
        <form action="https://formsubmit.co/pietrzef@gmail.com" method="POST">
          <input
            type="hidden"
            name="_subject"
            value="hilusjr photography - new email!"
          />
          <span>Name</span>
          <input type="text" name="name" required />
          <span>Your e-mail</span>
          <input type="email" name="email" required />
          <span>Message</span>
          <input type="text" name="message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}

export default Contact
