import React, { forwardRef, useEffect, useRef, useState } from "react";

import styled from "styled-components";
import BusinessWebsiteProject from "../Projects/BusinessWebsiteProject";
import Celebee from "../Projects/Celebee";
import ShoppingMall from "../Projects/ShoppingMall";
import WeatherWeb from "../Projects/WeatherWeb";
import ScrollButton from "../Styles/ScrollButton";
import { Default, Title } from "../Styles/SharedStyles";

const Box = styled.div`
  display: flex;
  align-items:center;
  /* flex-wrap: nowrap;  */
  overflow: auto; 
  padding:   0px 100px ;
  /* -webkit-overflow-scrolling: touch;  */
  /* scroll-behavior: smooth;  */

width:100%;
height: 80vh;


  scrollbar-width: thin; 
  &::-webkit-scrollbar {
    height: 12px; 
  }

  & > div {
    flex: 0 0 auto; 
    margin-right: 10px;
  }
`;
const DivBox = styled.div`
min-height: 100vh;
  position: relative;
  max-width:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

`



interface ProjectsProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  educationRef: React.RefObject<HTMLDivElement>;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  const boxRef = useRef<HTMLDivElement>(null); // Box 컴포넌트를 위한 ref

  const handleWheel = (e: WheelEvent) => {
  const boxElement = boxRef.current;
  if (!boxElement) return;

  const maxScrollLeft = boxElement.scrollWidth - boxElement.clientWidth;

  const scrollingUp = e.deltaY < 0;
  const scrollingDown = e.deltaY > 0;

  const scrollingLeft = e.deltaX < 0;
  const scrollingRight = e.deltaX > 0;

  const isAtStart = boxElement.scrollLeft <= 0;
  const isAtEnd = boxElement.scrollLeft >= maxScrollLeft;

  if (isAtEnd && scrollingDown) {
  }
  else if (isAtStart && scrollingUp) {
  }
  else {
    e.preventDefault();
    boxElement.scrollLeft += e.deltaY + e.deltaX;
  }
};



  useEffect(() => {
    const boxElement = boxRef.current;
    if (!boxElement) return;

    boxElement.addEventListener('wheel', handleWheel);

    return () => {
      boxElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleModalStateChange = (isOpen: boolean) => {
    const boxElement = boxRef.current;
    if (!boxElement) return;

    if (isOpen) {
      boxElement.removeEventListener('wheel', handleWheel);
    } else {
      boxElement.addEventListener('wheel', handleWheel);
    }
  };
  return (
    <DivBox  ref={ref}>
      {/* <Default > */}
      <Title>Projects</Title>
        <Box ref={boxRef}>
        <BusinessWebsiteProject />
      <Celebee onModalStateChange={handleModalStateChange} />
        <ShoppingMall onModalStateChange={handleModalStateChange} />
        <WeatherWeb />
        </Box>

        <ScrollButton onClick={() => props.scrollToRef(props.educationRef)}>
          Go to Education / Awards
        </ScrollButton>

      {/* </Default> */}
    </DivBox>
  );
});

export default Projects;
