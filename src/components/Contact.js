import React from 'react'
import '../styles/Contact.css'
import Header from './Header'

function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
        <form
          action="https://formsubmit.co/63c074cb4f96f30823cee895796f2333"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="hilusjr photography - new email!"
          />
          <input
            type="hidden"
            name="_next"
            value="https://hilusjr.github.io/photography"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <span>Name</span>
          <input type="text" name="name" required />
          <span>Your e-mail</span>
          <input type="email" name="email" required />
          <span>Message</span>
          <input type="text" name="message" required />
          <button
            type="submit"
            onClick={() => alert('Your message has been sent')}
          >
            Send
          </button>
        </form>
      </div>
    </>
  )
}

export default Contact
