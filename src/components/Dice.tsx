// Dice.tsx
import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader, Mesh, MeshBasicMaterial } from "three";
import { Box, Html } from "@react-three/drei";
import styled from "styled-components";

const DiceText = styled.div`
 position: relative; 
  top: -300px;
  transform: translate(-50%, -50%); 
  color: black;
  font-size: 30px;
  text-align: center; 
  width: 450px;
`;



const Dice: React.FC = () => {
  const meshRef = useRef<Mesh>(null);

  const [isRolling, setIsRolling] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 5, z: 0 });
  const [rotationSpeed, setRotationSpeed] = useState({
    x: 0.1,
    y: 0.1,
    z: 0.1,
  });
  const backgroundColors = [
    'linear-gradient(to right, #ffafbd, #ffc3a0)', 
    'linear-gradient(to right, #b4c5e1, #ffffff)',
    'linear-gradient(to right, #fbc2eb, #a6c1ee)', 
    'linear-gradient(to right, #ffecd2, #fcb69f)', 
    'linear-gradient(to right, #f7c4c6, #fecfef)', 
  ];
  // 프로젝트 이미지 URL 배열
  const textures = useLoader(TextureLoader, [
    "./celebee.jpg",
    "./shopping.jpg",
    "./weather2.jpg",
    "./shopping2.jpg",
    "./celebee3.jpg",
    "./BusinessWebsite.jpg",
  ]);
  const materials = textures.map(
    (texture) =>
      new MeshBasicMaterial({
        map: texture,
        color: 0xd6d6d6, 
      })
  );
  // 초기 회전 값 설정
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = 0.8;
      meshRef.current.rotation.y = 0.5;
    }
  }, []);

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
      }
    }
  });

  // 주사위를 던지는 함수
  const rollDice = () => {
    setIsRolling(true);
    setVelocity({ x: 0, y: 1, z: 0 }); // 초기 속도 설정
    setRotationSpeed({ x: 0.03, y: 0.03, z: 0.03 }); // 초기 회전 속도 설정
   // 페이지 전체의 배경색 변경
   const randomGradient = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
   document.body.style.backgroundImage = randomGradient;
  };

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} onClick={rollDice}>
      <Box args={[1.7, 1.7, 1.7]} ref={meshRef} material={materials} />
      <Html>
        <DiceText>
          클릭하여 주사위를 던져보세요!
        </DiceText>
      </Html>
    </mesh>
  );
};

export default Dice;
