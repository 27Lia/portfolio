import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import AnimatedSphere from "./components/AnimatedSphere";
import Projects from "./components/Projects";
import "./App.css";
import Introduction from "./components/Introduction";
import styled from "styled-components";
import ScrollButton from "./Styles/ScrollButton";

const Default = styled.div`
  position: relative;
  margin: 0 auto;
`;

const CanvasContainer = styled.div`
  height: 100vh;
  z-index: 9999;
`;

const App = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Default>
        <CanvasContainer>
          <ScrollButton onClick={() => scrollToRef(introRef)}>
            Go to Introduction
          </ScrollButton>
          <Canvas>
            <ambientLight intensity={4} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <AnimatedSphere />
          </Canvas>
        </CanvasContainer>
      </Default>
      <Default>
        <div>
          <Introduction
            scrollToRef={scrollToRef}
            projectsRef={projectsRef}
            ref={introRef}
          />
          <Projects
            scrollToRef={scrollToRef}
            projectsRef={projectsRef}
            ref={projectsRef}
          />
        </div>
      </Default>
    </>
  );
};

export default App;
