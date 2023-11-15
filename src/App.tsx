import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Projects from "./components/Projects";
import "./App.css";
import Introduction from "./components/Introduction";
import styled from "styled-components";
import Career from "./components/Career";
import Education from "./components/Education";
import Dice from "./components/Dice";
import BackToTopButton from "./components/BackToTopButton";
import { ScrollButton } from "./Styles/SharedStyles";



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




  return (
    <Container>
        <CanvasContainer>
          <Canvas>
            <Dice  />
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
      <BackToTopButton />

    </Container>
  );
};

export default App;
