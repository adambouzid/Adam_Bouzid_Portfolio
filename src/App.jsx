import React from 'react'
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import EducationANDCertif from './sections/EducationANDCertif';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container ms-auto max-w-7xl 2xl:max-w-[1600px] overflow-x-hidden">
      <Navbar />
      <div id="home" className="mb-20">
        <Hero />
      </div>
      <div id="about" className="md:mb-64 mb-20">
        <About />
      </div>
      <div id="work" className="mb-20">
        <Projects />
        <Experiences />
      </div>
      <div id="EducationANDCertif">
        <EducationANDCertif />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer/>
    </div>
  )
}
export default App