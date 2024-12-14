import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const RotatingModel = () => {
  const modelRef = useRef();
  const gltf = useLoader(GLTFLoader, "/models/iphone_16_pro_max.glb");

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.015; 
      }
    },
     16); 

    return () => clearInterval(interval); 
  }, 
  []);

  return (
    <mesh ref={modelRef}>
      <primitive object={gltf.scene} scale={[2, 2, 2]} />    
    </mesh>
    
    
  );
};

export default RotatingModel;
