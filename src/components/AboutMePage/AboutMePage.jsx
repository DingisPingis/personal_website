import './AboutMePage.css'

import gradPhoto from '/images/grad-photo.jpg'

export default function AboutMePage() {
  return (
    <div className="about-me">
      <img className="about-me-grad-photo" src={gradPhoto} alt="Grad Photo"/>
      <div className="about-me-text">
        <h2>Who I <span className="accent">Am</span></h2>
        <p>
          I am a recent graduate from San Jose State University
          with a Bachelors of Science in Software Engineering.
          <br/><br/>
          I am currently looking for opportunities to refine my
          technical and interpersonal skills, while contributing
          my efforts to a growth-oriented company.
        </p>
      </div>
    </div>
  )
}
