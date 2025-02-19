import './ContactPage.css'

import envelopeFill from '/icons/contact/envelope-fill.svg'
import gitHub from '/icons/contact/github.svg'
import linkedIn from '/icons/contact/linkedin.svg'

export default function ContactMePage() {
  return (
    <div className="contact">
      <div className="contact-text">
        <h2>Let's <span className="accent">Connect</span></h2>
        <p>Interested in discussing networking opportunities? Send me a message!</p>
        <div className="contact-buttons">
          <a href="mailto:montepalco.ross@gmail.com">
            <img src={envelopeFill}/>
          </a>
          <a href="https://www.linkedin.com/in/rmontepalco">
            <img src={linkedIn}/>
          </a>
          <a href="https://github.com/RMontepalco">
            <img src={gitHub}/>
          </a>
        </div>
      </div>
    </div>
  )
}
