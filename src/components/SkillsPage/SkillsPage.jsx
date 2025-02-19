import './SkillsPage.css'

export default function SkillsPage() {
  return (
    <div className="skills">
      <h2>What I <span className="accent">Do</span></h2>
      <div className="skills-sections">
        <div className="skills-section">
          <h3>Frontend</h3>
          <p>React • JavaScript • HTML • CSS</p>
        </div>
        <div className="skills-section">
          <h3>Backend</h3>
          <p>Java • Python • Swift • Node.js • SQL</p>
        </div>
        <div className="skills-section">
          <h3>Technologies</h3>
          <p>Google Firebase • Amazon Web Services • GitHub</p>
        </div>
      </div>
    </div>
  )
}
