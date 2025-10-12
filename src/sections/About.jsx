import Card from "../components/Card";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import CopyEmailButton from "../components/CopyEmailButton";
import {Globe} from "../components/Globe";
import {Frameworks} from "../components/Frameworks";
const About = () => {
    const { t } = useTranslation();
    const grid2container = useRef();
    const grid3container = useRef();
    const [hoveredTech, setHoveredTech] = useState(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-cycle through technologies
    useEffect(() => {
      if (!isAutoPlaying) return;

      const techStack = [
        { name: "React", color: "#61DAFB" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Spring", color: "#6DB33F" },
        { name: "Docker", color: "#2496ED" },
        { name: "Kubernetes", color: "#326CE5" },
        { name: "PostgreSQL", color: "#4169E1" },
      ];

      let currentIndex = 0;
      const interval = setInterval(() => {
        setHoveredTech(techStack[currentIndex]);
        currentIndex = (currentIndex + 1) % techStack.length;
      }, 2000);

      return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleManualHover = (tech) => {
      setIsAutoPlaying(false); // Stop auto-play when user hovers
      setHoveredTech(tech);
    };
  return  <section className="c-space section-spacing">
    <h2 className="text-heading">{t('about.title')}</h2>
    <div className="grid grid-cols-1  gap-4 md:grid-cols-6 md:auto-rows-[20rem] mt-12">
      {/* Grid 1 */}
      <div className="flex items-end grid-default-color grid-1">
        <img src="assets/coding-pov.png" className="absolute scale-[1.75] -right-[5em] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />
        <div className="z-10">
            <p className="headtext">{t('about.greeting')}</p>
            <p className="subtext">{t('about.description')}</p>
        </div>  
        <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-950"></div>    
      </div>

      {/* Grid 2 */}
      <div className="grid-default-color grid-2">
       <div ref={grid2container} className="flex items-center justify-center w-full h-full relative">
        <p className="flex items-end text-5xl text-gray-500">{t('about.codeIsCraft')}</p>  
        <Card style={{ rotate: "75deg" , top: "30%" , left: "20%" }} text="GRASP" containerRef={grid2container}/>
        <Card style={{ rotate: "-30deg" , top: "60%" , left: "45%" }} text="SOLID" containerRef={grid2container}/>
        <Card style={{ rotate: "90deg" , bottom: "30%" , left: "70%" }} text="Design Patterns " containerRef={grid2container}/>
        <Card style={{ rotate: "-45deg" , top: "55%" , left: "0%" }} text="Design Principles" containerRef={grid2container}/>
        <Card style={{ rotate: "20deg" , top: "10%" , left: "30%" }} text="SRP" containerRef={grid2container}/>
        <Card style={{ rotate: "30deg" , top: "70%" , left: "70%" }} image="assets/logos/icons8-nestjs-100.png"  containerRef={grid2container}/>
        <Card style={{ rotate: "-45deg" , top: "70%" , left: "25%" }} image="assets/logos/icons8-spring-boot-144.png"  containerRef={grid2container}/>
        <Card style={{ rotate: "-45deg" , top: "5%" , left: "10%" }} image="assets/logos/icons8-nextjs-100.png" containerRef={grid2container}/>
        <Card style={{ rotate: "360deg" , top: "0%" , left: "90%" }} image="assets/logos/electron-icon.png" containerRef={grid2container}/>
       </div>
      </div>
     
      {/* Grid 3 */}
      <div ref={grid3container} className="grid-black-color grid-3 relative">
        <div className="z-10 w-[50%]">
            <p className="headText">{t('about.timeZone')}</p>
            <p className="subtext">{t('about.location')}</p>
        </div>
        {/* GitHub-style Globe */}
        <div className="absolute left-[30%] top-[10%]">
          <Globe/>
        </div>
      </div>
      {/* Grid 4 */}
      <div className="grid-special-color grid-4">
      <div className="flex flex-col items-center justify-center gap-4 size-full">
        <p className="text-center headText">{t('about.openOpportunities')}</p>
        <CopyEmailButton/>
      </div>
      </div>
      
      {/* Grid 5 - Download CV */}
      <div className="grid-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-midnight via-navy to-midnight border border-white/5">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-5 size-full p-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-white/10 flex items-center justify-center">
              <svg className="w-9 h-9 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl font-bold text-white mb-2">{t('about.downloadCV')}</p>
            <p className="text-xs text-neutral-500">{t('about.getResume')}</p>
          </div>
          <a 
            href="/assets/Adam_Bouzid_CV.pdf" 
            download="Adam_Bouzid_CV.pdf"
            className="group relative z-20 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 text-slate-200 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const link = document.createElement('a');
              link.href = '/assets/Adam_Bouzid_CV.pdf';
              link.download = 'Adam_Bouzid_CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
            </svg>
            {t('about.download')}
          </a>
        </div>
      </div>

      {/* Grid 6 - Tech Stack Full Width */}
      <div 
        className="col-span-1 md:col-span-6 rounded-3xl p-6 sm:p-8 md:p-12 pb-16 sm:pb-20 md:pb-24 relative border border-white/5 min-h-[450px] sm:min-h-[500px] md:min-h-[450px] transition-all duration-500"
        style={{
          background: hoveredTech 
            ? `linear-gradient(to bottom right, ${hoveredTech.color}15, ${hoveredTech.color}05, #0a0e27)`
            : 'linear-gradient(to bottom right, #0a0e27, #1a1f3a, #0a0e27)'
        }}
      >
        <div className="relative z-10">
          <div className="mb-8 md:mb-10 text-center">
            <h2 
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-3 transition-all duration-300"
              style={{
                color: hoveredTech 
                  ? (hoveredTech.color === '#000000' || hoveredTech.color === '#181717' ? '#ffffff' : hoveredTech.color)
                  : '#ffffff'
              }}
            >
              {hoveredTech ? hoveredTech.name : t('about.techStack')}
            </h2>
            <p className="text-white text-xs md:text-sm max-w-2xl mx-auto px-4">
              {hoveredTech ? t('about.hoverToExplore') : t('about.techDescription')}
            </p>
          </div>
          <div className="py-6 md:py-8">
            <Frameworks onHover={handleManualHover} />
          </div>
        </div>
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: hoveredTech ? 0.15 : 0.05,
            backgroundImage: hoveredTech 
              ? `
                linear-gradient(${hoveredTech.color}40 1px, transparent 1px),
                linear-gradient(90deg, ${hoveredTech.color}40 1px, transparent 1px)
              `
              : `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
            backgroundSize: "40px 40px",
          }}
        ></div>
        {/* Glow effect on hover */}
        {hoveredTech && (
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: `radial-gradient(circle at center, ${hoveredTech.color}10, transparent 70%)`,
              opacity: 0.5,
            }}
          ></div>
        )}
      </div>
    </div>
  </section>
  
};

export default About;