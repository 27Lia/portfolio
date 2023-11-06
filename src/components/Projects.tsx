import React, { forwardRef, useEffect, useRef } from "react";

import styled from "styled-components";
import BusinessWebsiteProject from "../Projects/BusinessWebsiteProject";
import Celebee from "../Projects/Celebee";
import ShoppingMall from "../Projects/ShoppingMall";
import WeatherWeb from "../Projects/WeatherWeb";
import ScrollButton from "../Styles/ScrollButton";
import { Default, Title } from "../Styles/SharedStyles";


const Box = styled.div`
  display: flex; 
  /* flex-wrap: nowrap;  */
  overflow-x: auto; 
  /* -webkit-overflow-scrolling: touch;  */
  /* scroll-behavior: smooth;  */
  width:80%;

  scrollbar-width: thin; 
  &::-webkit-scrollbar {
    height: 12px; 
  }

  & > div {
    flex: 0 0 auto; 
    margin-right: 10px;
  }
`;


interface ProjectsProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  educationRef: React.RefObject<HTMLDivElement>;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  const boxRef = useRef<HTMLDivElement>(null); // Box 컴포넌트를 위한 ref

  
  useEffect(() => {
    // 현재 DOM 노드 가져옴
    const boxElement = boxRef.current;
    if (!boxElement) return;

    // 스크롤 이벤트 핸들러
    const handleWheel = (e: WheelEvent) => {
      if (!boxElement) return;
      
      // 수직 스크롤을 수평 스크롤로 변환
      if (e.deltaY === 0) return;
      e.preventDefault();
      boxElement.scrollLeft += e.deltaY + e.deltaX;
    };

    // 이벤트 리스너를 Box 컴포넌트에 추가
    boxElement.addEventListener('wheel', handleWheel);

    // 클린업 함수
    return () => {
      // 컴포넌트가 언마운트되면 이벤트 리스너 제거
      boxElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div ref={ref}>
      <Default>
        <Title>Projects</Title>
        <Box ref={boxRef}>
        <BusinessWebsiteProject />
        <Celebee />
        <ShoppingMall />
        <WeatherWeb />
        <ScrollButton onClick={() => props.scrollToRef(props.educationRef)}>
          Go to Education / Awards
        </ScrollButton>
        </Box>
      </Default>
    </div>
  );
});

export default Projects;
