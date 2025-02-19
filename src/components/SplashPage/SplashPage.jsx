import './SplashPage.css'

import envelopeFill from '/icons/contact/envelope-fill.svg'
import gitHub from '/icons/contact/github.svg'
import linkedIn from '/icons/contact/linkedin.svg'
import profilePicture from '/images/profile-picture.png'


export default function SplashPage() {
  return (
    <div className="splash-page">
      <div className="splash-summary">
        <h1>Hey! I'm <span className="accent">Ross</span></h1>
        <p>
          I am a software engineer specializing
          in full-stack development to design and
          develop exceptional software solutions.
        </p>
        <div className="splash-buttons">
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
      <img className="splash-profile-picture" src={profilePicture} alt="Profile Picture"/>
    </div>
  )
}
