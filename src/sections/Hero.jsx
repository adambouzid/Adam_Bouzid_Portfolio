import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Hilal } from "../components/hilal";
import Loader from "../components/Loader";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { MOUSE } from "three"; 
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: "853px"});
  const isTablet = useMediaQuery({minWidth: "854px", maxWidth: "1440px"});
  const is2K = useMediaQuery({minWidth: "1441px", maxWidth: "2560px"});
  const is4K = useMediaQuery({minWidth: "2561px"});
  const [pageGlow, setPageGlow] = useState(0);
  
 
  const getHilalProps = () => {
    if (isMobile) {
      return { 
        scale: 1.3, 
        position: [0, 0, -1],
        rotation: [Math.PI /2, Math.PI /1.3, 6.1]
      };
    } else if (isTablet) {
      return { 
        scale: 1.6, 
        position: [2.5, 0, -2],
        rotation: [Math.PI / 2, Math.PI  /1.3, 6.1]
      };
    } else if (is2K) {
      return { 
        scale: 2.0, 
        position: [3.5, 0, -2],
        rotation: [Math.PI / 2, Math.PI  /1.3, 6.1]
      };
    } else if (is4K) {
      return { 
        scale: 2.3, 
        position: [4.5, 0.1, -2],
        rotation: [Math.PI / 2, Math.PI  /1.3, 6.1]
      };
    }
    return { 
      scale: 1.6, 
      position: [2.5, 0, -2],
      rotation: [Math.PI / 2, Math.PI  /1.3, 6.1]
    };
  };

    return (
      <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space" style={{touchAction: 'pan-y'}}>
          <HeroText />
          <ParallaxBackground />
          
          {/* Page-wide glow when mouse near Hilal - Desktop only */}
          {!isMobile && (
            <div 
              className="fixed inset-0 pointer-events-none z-10"
              style={{
                background: `radial-gradient(circle at 70% 50%, rgba(96, 165, 250, ${pageGlow * 0.15}), transparent 60%)`,
                transition: 'background 0.3s ease-out',
              }}
            />
          )}
          <figure className="absolute inset-0"
                  style={{
                    width: "100vw", 
                    height: "100vh",
                    pointerEvents: isMobile ? 'none' : 'auto'
                  }}
          >
            
            <Canvas camera={{position: [0, 1, 3]}}>
              <Suspense fallback={<Loader />}>
              {/* Lumières optimisées pour Hilal cyan lumineux */}
              <ambientLight intensity={0.8} color="#e0f2fe" />
              <directionalLight position={[5, 5, 5]} intensity={2} color="#38bdf8" />
              <directionalLight position={[-5, -5, -5]} intensity={1.2} color="#0ea5e9" />
              <pointLight position={[2, 3, 2]} intensity={3} color="#06b6d4" />
              <pointLight position={[-2, 2, 1]} intensity={2} color="#22d3ee" />
              <spotLight 
                position={[0, 5, 0]} 
                angle={0.6}
                penumbra={1}
                intensity={2}
                target-position={[0, 0, 0]}
              />
              
              {/* Hilal - Croissant de lune mystique */}
              <Float 
                speed={1.2} 
                rotationIntensity={0.2} 
                floatIntensity={0.4}
                floatingRange={[-0.1, 0.1]}
              >
                <Hilal {...getHilalProps()} onGlowChange={setPageGlow} isMobile={isMobile} />
              </Float>
             </Suspense>
              <Rig />
            </Canvas>
            
          </figure>
      </section>
  
    );
  };

function Rig(){
    useFrame((state, delta) => {
        // Mouvement limité: seulement gauche-droite (axe X), Y fixe
        easing.damp3(state.camera.position, 
          [state.mouse.x / 15, 1, 3 ],  // Divisé par 15 pour mouvement plus subtil
          0.5,
          delta
        );
    });
    return null;
}
  export default Hero
  