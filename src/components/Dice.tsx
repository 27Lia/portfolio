// Dice.tsx
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh , TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

type DiceProps = {
    onRollEnd?: (rotation: { x: number; y: number; z: number }) => void;
    textureUrls: string[];
  };

const Dice: React.FC<DiceProps> = ({ onRollEnd, textureUrls }) => {
  const meshRef = useRef<Mesh>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 5, z: 0 });
  const [rotationSpeed, setRotationSpeed] = useState({ x: 0.1, y: 0.1, z: 0.1 });
  const textures = useLoader(TextureLoader, textureUrls);

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
    setVelocity({ x: 0, y: 1, z: 0 }); // 초기 속도 설정
    setRotationSpeed({ x: 0.1, y: 0.1, z: 0.1 }); // 초기 회전 속도 설정
    
  };

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} onClick={rollDice}>
              <boxGeometry args={[2, 2, 2]} />
              {textures.map((texture, index) => (
        <meshStandardMaterial key={index} map={texture} />
      ))}
    </mesh>
    
  );
};

export default Dice;
