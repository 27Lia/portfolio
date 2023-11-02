import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import './App.css';


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
    </Canvas>
    </div>
  );
}


export default App;
