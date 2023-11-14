import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import AnimatedSphere from "./components/AnimatedSphere";
import Projects from "./components/Projects";
import "./App.css";
import Introduction from "./components/Introduction";
import styled from "styled-components";
import ScrollButton from "./Styles/ScrollButton";
import Career from "./components/Career";
import Education from "./components/Education";
import Dice from "./components/Dice";


const CanvasContainer = styled.div`
  height: 100vh;
`;
const Container = styled.div`
  height: 100vh;
  position: relative; 

`;

const App = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };



  const handleDiceResult = (rotation: { x: number; y: number; z: number }) => {
    // 주사위 결과에 따라 프로젝트 페이지로 이동하거나 정보를 표시하는 로직
  console.log("주사위 멈춤: ", rotation);
    //  rotation 값을 기반으로 특정 프로젝트로 이동하거나 정보를 표시
  };

  return (
    <Container>
        <CanvasContainer>
          <Canvas>
            <ambientLight intensity={5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <Dice onRollEnd={handleDiceResult} />

          </Canvas>
        </CanvasContainer>
        <ScrollButton onClick={() => scrollToRef(introRef)}>
            Go to Introduction
          </ScrollButton>
        <Introduction
          scrollToRef={scrollToRef}
          careerRef={careerRef}
          ref={introRef}
        />
        <Career
          scrollToRef={scrollToRef}
          projectsRef={projectsRef}
          ref={careerRef}
        />
        <Projects
          scrollToRef={scrollToRef}
          educationRef={educationRef}
          ref={projectsRef}
        />
        <Education
          scrollToRef={scrollToRef}
          skillsRef={skillsRef}
          ref={educationRef}
        />

    </Container>
  );
};

export default App;
