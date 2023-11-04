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
import Skills from "./components/Skills";

const Default = styled.div`
  height: 100vh;
`;

const CanvasContainer = styled.div`
  height: 95vh;
  z-index: 9999;
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

  return (
    <>
      <Default>
        <CanvasContainer>
          <Canvas>
            <ambientLight intensity={4} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <AnimatedSphere />
          </Canvas>
          <ScrollButton onClick={() => scrollToRef(introRef)}>
            Go to Introduction
          </ScrollButton>
        </CanvasContainer>
      </Default>
      <Default>
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
        <Skills
         scrollToRef={scrollToRef}
         skillsRef={skillsRef}
         ref={skillsRef}
        />
      </Default>
    </>
  );
};

export default App;
