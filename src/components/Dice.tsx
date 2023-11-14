// Dice.tsx
import React, { useRef, useState } from "react";
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader, Mesh, MeshBasicMaterial } from 'three';
import { Box } from '@react-three/drei';

type DiceProps = {
    onRollEnd?: (rotation: { x: number; y: number; z: number }) => void;
  };

const Dice: React.FC<DiceProps> = ({ onRollEnd }) => {
  const meshRef = useRef<Mesh>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 5, z: 0 });
  const [rotationSpeed, setRotationSpeed] = useState({ x: 0.1, y: 0.1, z: 0.1 });

   // 프로젝트 이미지 URL 배열
   const textures = useLoader(TextureLoader, [
    './celebee.jpg',
    './shopping.jpg',
    './weather2.jpg',
    './shopping2.jpg',
    './celebee3.jpg',
    './BusinessWebsite.jpg',
]);

  useFrame(() => {
    if (isRolling && meshRef.current) {
      // 위치 업데이트
      meshRef.current.position.y += velocity.y;
      velocity.y -= 0.1; // 중력 효과

      // 회전 업데이트
      meshRef.current.rotation.x += rotationSpeed.x;
      meshRef.current.rotation.y += rotationSpeed.y;
      meshRef.current.rotation.z += rotationSpeed.z;

      // 바닥에 닿았을 때
      if (meshRef.current.position.y <= 0) {
        setIsRolling(false);
        onRollEnd?.({ x: meshRef.current.rotation.x, y: meshRef.current.rotation.y, z: meshRef.current.rotation.z });
    }
    }
  });

  const rollDice = () => {
    setIsRolling(true);
    setVelocity({ x: 1, y: 1, z: 0 }); // 초기 속도 설정
    setRotationSpeed({ x: 0.1, y: 0.1, z: 0.1 }); // 초기 회전 속도 설정
    
  };

  const materials = textures.map(texture => new MeshBasicMaterial({ map: texture }));
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]} onClick={rollDice}>
     <Box args={[2, 2, 2]} ref={meshRef} material={materials} />
    </mesh>
  );
};

export default Dice;




