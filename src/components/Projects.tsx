import React, { forwardRef, useEffect, useRef, useState } from "react";

import styled, { css } from "styled-components";
import BusinessWebsiteProject from "../Projects/BusinessWebsiteProject";
import Celebee from "../Projects/Celebee";
import ShoppingMall from "../Projects/ShoppingMall";
import WeatherWeb from "../Projects/WeatherWeb";
import ScrollButton from "../Styles/ScrollButton";
import { Default, Title } from "../Styles/SharedStyles";

const media = {
  mobile: (strings: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: 1300px) {
      ${css(strings, ...args)}
    }
  `,
};


const Box = styled.div`
  display: flex;
  align-items: center;
  /* flex-wrap: nowrap;  */
  overflow: auto;
  padding: 0px 100px;
  /* -webkit-overflow-scrolling: touch;  */
  /* scroll-behavior: smooth;  */
  height: 80vh;

  ${media.mobile`
  flex-wrap:wrap;
  padding: 0px ;

  `}


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
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

interface ProjectsProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  educationRef: React.RefObject<HTMLDivElement>;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  const boxRef = useRef<HTMLDivElement>(null); 

  const handleWheel = (e: WheelEvent) => {
    const boxElement = boxRef.current;
    if (!boxElement) return;
  
    const maxScrollLeft = boxElement.scrollWidth - boxElement.clientWidth;
    const minScrollLeft = 0;
    const newScrollLeft = boxElement.scrollLeft + e.deltaY + e.deltaX;
  
    if (newScrollLeft < minScrollLeft || newScrollLeft > maxScrollLeft) {
      return;
    }
  //
    e.preventDefault();
    boxElement.scrollLeft = newScrollLeft;
  };
  

  useEffect(() => {
    const boxElement = boxRef.current;
    if (!boxElement) return;

    boxElement.addEventListener("wheel", handleWheel);

    return () => {
      boxElement.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleModalStateChange = (isOpen: boolean) => {
    const boxElement = boxRef.current;
    if (!boxElement) return;

    if (isOpen) {
      boxElement.removeEventListener("wheel", handleWheel);
    } else {
      boxElement.addEventListener("wheel", handleWheel);
    }
  };
  return (
    <DivBox ref={ref}>
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
    </DivBox>
  );
});

export default Projects;
