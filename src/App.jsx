import React from 'react'
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import EducationANDCertif from './sections/EducationANDCertif';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Snowfall from 'react-snowfall';
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: '853px' });
  const snowflakeCount = isMobile ? 60 : 140;
  return (
    <div className="container mx-auto px-4 max-w-7xl 2xl:max-w-[1600px] overflow-x-hidden">
      <Snowfall
        snowflakeCount={snowflakeCount}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />
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