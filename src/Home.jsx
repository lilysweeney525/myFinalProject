import React, { useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; 
import RotatingModel from './RotatingModel';
import { Environment } from '@react-three/drei'; 

const Home = () => {
  const [currentEnvironment, setCurrentEnvironment] = useState("sunset");
  const [currentBackground, setCurrentBackground] = useState("linear-gradient(to left, #DF3204, #EF7432, #EFB89E, #EF7432, #DF3204)");

  const changeEnvironment = (environment) => {setCurrentEnvironment(environment);};
  const changeBackground = (background) => {setCurrentBackground(background);};

  const handleBoth = (environment, background) => {
    changeEnvironment(environment);
    changeBackground(background);
  };

  return (
    <div style={{background: currentBackground, height: "100vh", display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      
      <div style={{textAlign: 'center', color: 'white', paddingTop: '20px'}}>
        <p>iPhone 16 Pro</p>
        <h1 style={{fontSize: '55px'}}>Hello, Apple Intelligence</h1>
        <h2>Enjoy your iPhone anywhere!</h2>
      </div>

      <div style={{ height: '400px', width: '400px', margin: '0 auto', overflow: 'hidden' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Environment preset={currentEnvironment} />
          <ambientLight intensity={0.25} />
          <directionalLight position={[10, 10, 10]} intensity={3} />
          <RotatingModel /> 
          <OrbitControls 
            enableZoom={false} 
            enableRotate={false} 
            enablePan={false}    
          />
        </Canvas>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',  
        paddingBottom: '20px',     
        zIndex: 10,
      }}>
        <button onClick={() => handleBoth('sunset', "linear-gradient(to left, #DF3204, #EF7432, #EFB89E, #EF7432, #DF3204)")}
          style={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}
        >Sunset</button>
        <button onClick={() => handleBoth('forest', "linear-gradient(to left, #55660A, #9BD439, #C7C14C, #9BD439, #55660A)")}
          style={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}
        >Forest</button>
        <button onClick={() => handleBoth('city', "linear-gradient(to left, #6E8B99, #A7C0CC, #D5E2E8, #A7C0CC, #6E8B99)")}
          style={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}
        >City</button>
        <button onClick={() => handleBoth('apartment', "linear-gradient(to left, #8F836E, #AB9B80, #C4B497, #AB9B80, #8F836E)")}
          style={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}
        >Apartment</button>
        <button onClick={() => handleBoth('night', "linear-gradient(to left, #10135E, #2F3282, #4D4F85, #2F3282, #10135E)")}
          style={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}
        >Night</button>
        <button onClick={() => handleBoth('warehouse', "linear-gradient(to left, #4F5059, #6B6B75, #92939C, #6B6B75, #4F5059)")}
          style={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}
        >Warehouse</button>
        <button onClick={() => handleBoth('dawn', "linear-gradient(to left, #D64971, #F29DB5, #F7B2C6, #F29DB5, #D64971)")}
          style={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}
        >Dawn</button>
      </div>

    </div>
  );
};

export default Home;