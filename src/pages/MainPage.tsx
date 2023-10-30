import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useNavigate } from 'react-router-dom';
import { Text } from '@react-three/drei';



const Default = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const Title = styled.h1`
  background: linear-gradient(30deg, #c850c0, #ffcc70);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 15em;
  font-weight: 500;
`;

function RouteButton() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    navigate('/sub');
  };

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  return (
    <group position={[0, -0.5, 0]} onPointerDown={handleClick} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
      <mesh scale={hovered ? [1.2, 0.6, 0.1] : [1, 0.5, 0.1]}>
        <boxGeometry args={[1, 0.5, 0.1]} />
        <meshBasicMaterial color={hovered ? '#ffcc70' : '#f2cc86'} />
      </mesh>
      <Text
        position={[0, 0, 0.05]}
        fontSize={0.2}
        color="#120720"
        anchorX="center"
        anchorY="middle"
      >
        Click Me!
      </Text>
    </group>
  );
}

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
      <Title>HELLO</Title>
    </div>
  );
}

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

const MainPgae: React.FC = () => {
  return (
    <Default>
      <Canvas camera={{ position: [0, 1, 2] }}>  
      <color attach="background" args={['#120720']} />
        <Stars />
        <RouteButton />
      </Canvas>
      <Overlay />
    </Default>
  );
}

export default MainPgae;

