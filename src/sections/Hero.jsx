import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import Loader from "../components/Loader";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { MOUSE } from "three"; 
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: "853px"});
  const isTablet = useMediaQuery({minWidth: "854px", maxWidth: "1440px"});
  const is2K = useMediaQuery({minWidth: "1441px", maxWidth: "2560px"});
  const is4K = useMediaQuery({minWidth: "2561px"});
  
 
  const getAstronautProps = () => {
    if (isMobile) {
      return { scale: 0.23, position: [0, -1.5, 0] };
    } else if (isTablet) {
      return { scale: 0.22, position: [1.4, -1.4, 0] }; // 1080p and similar
    } else if (is2K) {
      return { scale: 0.24, position: [3.2, -1.6, 0] }; // Smaller and far right for 2K screens
    } else if (is4K) {
      return { scale: 0.28, position: [4.0, -1.4, 0] }; // 4K and above
    }
    return { scale: 0.22, position: [1.2, -1.4, 0] }; // Safe default
  };

    return (
      <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
          <HeroText />
          <ParallaxBackground />
          <figure className="absolute inset-0"
                  style={{width: "100vw", height: "100vh", }}
          >
            
            <Canvas camera={{position: [0, 1, 3]}}>
              <Suspense fallback={<Loader />}>
              <Float>
              <Astronaut 
              {...getAstronautProps()}
               
             />
             
             {/* <OrbitControls /> */}
             
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
        easing.damp3(state.camera.position, 
          [state.mouse.x / 10, 1 + state.mouse.y / 10, 3 ],
          0.5,
          delta
        );
    });
    return null;
}
  export default Hero
  