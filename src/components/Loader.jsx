import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
   const {progress} = useProgress();

  return <Html center className="text-2xl font-normal text-center">{progress}%loaded</Html>;
    
  
};

export default Loader;