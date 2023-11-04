import React, { useRef, useState } from "react"; // Import FC
import { Mesh } from "three";
import { useSpring, animated as a } from "@react-spring/three";
import { MeshDistortMaterial } from "@react-three/drei";
import { Text } from "@react-three/drei"; // Make sure to import Text from drei

const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null);
  const [clicked, setClicked] = useState(false); // 클릭 상태를 저장하는 state
  const [explode, setExplode] = useState(false); // '터지는' 효과 상태를 저장하는 state

  const { scale } = useSpring({
    scale: clicked ? 2 : 1, // 클릭 시 스케일이 커지게 함
    onRest: () => {
      if (clicked) setExplode(true); // 애니메이션이 끝나면 '터짐' 상태로 설정
    },
  });

  const handlePointerDown = () => {
    setClicked(true);
  };

  return (
    <>
      <a.mesh
        ref={meshRef}
        scale={scale.to((s) => [s, s, s])}
        onClick={handlePointerDown} // 클릭 이벤트 처리
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={clicked ? "#ed5454" : "#fffb00"}
          distort={0.9}
          speed={2}
        />
      </a.mesh>
      {explode && (
        <Text
          position={[0, 0, 3]}
          fontSize={1}
          color="black" 
          anchorX="center"
          anchorY="middle"
        >
          Hello!
        </Text>
      )}
    </>
  );
};

export default AnimatedSphere;
