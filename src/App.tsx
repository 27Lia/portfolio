import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, Plane, PerspectiveCamera } from '@react-three/drei';
import './App.css';
import { Vector3 } from 'three';  // 추가된 부분

const Avatar: React.FC = () => {
  return (
    <Box position={[0, 0.5, 0]} args={[1, 1, 1]}>
      <meshStandardMaterial color={'blue'} />
    </Box>
  );
};

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <PerspectiveCamera position={[0, 5, 5]} makeDefault />
        <gridHelper args={[10, 10]} />
        <Avatar />
      </Canvas>
    </div>
  );
}

export default App;
