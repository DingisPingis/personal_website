import Navbar from './components/Navbar/Navbar'
import SplashPage from './components/SplashPage/SplashPage'
import AboutMePage from './components/AboutMePage/AboutMePage'
import SkillsPage from './components/SkillsPage/SkillsPage'
import PortfolioPage from './components/PortfolioPage/PortfolioPage'
import ContactPage from './components/ContactPage/ContactPage'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <div id="home">
        <Navbar />
        <SplashPage />
      </div>
      <div id="about">
        <AboutMePage />
      </div>
      <div id="skills">
        <SkillsPage />
      </div>
      <div id="portfolio">
        <PortfolioPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
      <Footer />
    </div>
  )
}
