import { useId } from 'react'

import './PortfolioPage.css'

import Card from '../Card/Card'
import portfolioData from './PortfolioData.js'

export default function PortfolioPage() {
  const projects = portfolioData.map(project => {
    return <Card
      key={useId()}
      name={project.name}
      description={project.description}
      image={project.image}
      link={project.link}
    />
  })

  return (
    <div className="portfolio">
      <h2>My <span className="accent">Work</span></h2>
      <div className="portfolio-projects">
        {projects}
      </div>
    </div>
  )
}
