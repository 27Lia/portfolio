import React, { useRef, useState } from "react"; 
import { Mesh } from "three";
import { useSpring, animated as a } from "@react-spring/three";
import { MeshDistortMaterial } from "@react-three/drei";
import { Text } from "@react-three/drei"; 

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
      
      {/* 클릭되지 않았을 때만 "Click Me!" 텍스트를 보여줌 */}
    {!clicked && (
      <Text
        position={[0, 0, 2]}
        fontSize={0.5}
        color="black" 
        anchorX="center"
        anchorY="middle"
      >
        Click Me!
      </Text>
    )}
{explode && (
  <Text
    position={[0, 0, 3]}
    fontSize={0.15}
    color="black"
    anchorX="center"
    anchorY="middle" 
    font="./HakgyoansimSantteutdotumM.ttf"
    maxWidth={2}
    textAlign="center" 
  >
안녕하세요, 프론트엔드 개발자 김선미입니다.
</Text>
)}
    </>
  );
};

export default AnimatedSphere;
