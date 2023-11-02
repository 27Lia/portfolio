import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';


const Avatar: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[50, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

const Grid: React.FC = () => {
    const { scene } = useThree();
  
    // 그리드를 생성
    const size = 1000;
    const divisions = 100;
    const gridHelper = new THREE.GridHelper(size, divisions);
  
    // 그리드를 scene에 추가
    scene.add(gridHelper);
  
    return null;
  }
  

const MainPage: React.FC = () => {
    const [avatarPosition, setAvatarPosition] = useState<[number, number, number]>([0, 0, 0]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      let x = avatarPosition[0];
      let y = avatarPosition[1];
      let z = avatarPosition[2];


      switch (event.key) {
        case 'ArrowUp':
          z = Math.max(z - 30, -450);
          break;
        case 'ArrowDown':
          z = Math.min(z + 30, 450);
          break;
        case 'ArrowLeft':
          x = Math.max(x - 30, -450);
          break;
        case 'ArrowRight':
          x = Math.min(x + 30, 450);
          break;
      }

      setAvatarPosition([x, y, z]);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [avatarPosition]);

  return (
    <>
      <Canvas style={{ height: "100vh", width: "100vw" }} camera={{ position: [2, 10, 6] }}>
        <ambientLight />

        <Grid />

        <Avatar position={avatarPosition} />

        <OrbitControls
  minPolarAngle={Math.PI / 4}
  maxPolarAngle={Math.PI / 3}
/>      </Canvas>
    </>
  );
};

export default MainPage;
