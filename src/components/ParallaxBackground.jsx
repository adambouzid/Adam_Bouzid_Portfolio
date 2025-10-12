import { useState, useEffect } from 'react'

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const progress = window.scrollY / (documentHeight - windowHeight)
      setScrollProgress(Math.min(progress, 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth color interpolation based on scroll
  const getColorOverlay = () => {
    // Smooth interpolation between colors
    const r1 = 10 + (scrollProgress * 0)  // 10 → 0
    const g1 = 22 - (scrollProgress * 22) // 22 → 0
    const b1 = 40 - (scrollProgress * 20) // 40 → 20
    
    const r2 = 10 - (scrollProgress * 10) // 10 → 0
    const g2 = 22 - (scrollProgress * 22) // 22 → 0
    const b2 = 40 - (scrollProgress * 25) // 40 → 15
    
    const opacity1 = scrollProgress * 0.5           // 0 → 0.5
    const opacity2 = 0.2 + (scrollProgress * 0.75)  // 0.2 → 0.95
    
    return `linear-gradient(to bottom, rgba(${r1}, ${g1}, ${b1}, ${opacity1}), rgba(${r2}, ${g2}, ${b2}, ${opacity2}))`
  }

  return (
    <>
      {/* Base sky background - fixed */}
      <div 
        className='fixed inset-0 w-full h-full min-h-screen -z-50'
        style={{
          backgroundImage: "url('/assets/parallax/sky.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Color shift overlay - smooth transition */}
      <div 
        className='fixed inset-0 w-full h-full -z-48'
        style={{
          background: getColorOverlay(),
          transition: 'background 0.3s linear',
        }}
      />
      
      {/* Floating stars layer 1 - slow movement */}
      <div 
        className='fixed inset-0 w-full h-full -z-45 pointer-events-none'
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={`star1-${i}`}
            className='absolute rounded-full bg-white'
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              boxShadow: '0 0 4px rgba(255,255,255,0.8)',
            }}
          />
        ))}
      </div>

      {/* Floating stars layer 2 - medium movement */}
      <div 
        className='fixed inset-0 w-full h-full -z-40 pointer-events-none'
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {[...Array(30)].map((_, i) => (
          <div
            key={`star2-${i}`}
            className='absolute rounded-full bg-cyan-200'
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 150}%`,
              opacity: Math.random() * 0.6 + 0.2,
              boxShadow: '0 0 3px rgba(34, 211, 238, 0.6)',
            }}
          />
        ))}
      </div>

      {/* Floating stars layer 3 - faster movement */}
      <div 
        className='fixed inset-0 w-full h-full -z-35 pointer-events-none'
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={`star3-${i}`}
            className='absolute rounded-full bg-blue-300'
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 200}%`,
              opacity: Math.random() * 0.5 + 0.3,
              boxShadow: '0 0 6px rgba(96, 165, 250, 0.7)',
            }}
          />
        ))}
      </div>
    </>
  )
}

export default ParallaxBackground