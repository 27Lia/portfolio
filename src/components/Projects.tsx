import React, { forwardRef } from 'react';

import styled from "styled-components";
import BusinessWebsiteProject from "../Projects/BusinessWebsiteProject";
import Celebee from "../Projects/Celebee";
import ShoppingMall from "../Projects/ShoppingMall";
import WeatherWeb from "../Projects/WeatherWeb";

const Title = styled.h1`
  color: #333;
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
  background-color:blue;

`;

// props 타입을 정의합니다.
interface ProjectsProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
}


const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  return (
<div ref={ref}>      
      <Title>Projects</Title>
      <BusinessWebsiteProject />
      <Celebee />
      <ShoppingMall />
      <WeatherWeb />
    </div>
  );
});

export default Projects;
