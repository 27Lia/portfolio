import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import './App.css';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { Plane } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";


const Avatar: React.FC = () => {
  const mtl = useLoader(MTLLoader, '/12221_Cat_v1_l3.mtl'); 
  const obj = useLoader(OBJLoader, '/12221_Cat_v1_l3.obj', loader => { 
    mtl.preload();
    loader.setMaterials(mtl);
  });

  return <primitive object={obj} position={[0, 0, 0]} scale={[0.1, 0.1, 0.2]} />;
};

const Floor: React.FC = () => {
  return (
<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
<Plane args={[5, 5]} />
      <meshBasicMaterial color={'#888888'} />
    </mesh>
  );
};


function App() {
  return (
    <div className='App'>
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Floor />
      <Avatar />
      <OrbitControls />
    </Canvas>
    </div>
  );
}


export default App;
