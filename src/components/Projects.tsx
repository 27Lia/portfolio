import React, { forwardRef } from 'react';

import styled from "styled-components";
import BusinessWebsiteProject from "../Projects/BusinessWebsiteProject";
import Celebee from "../Projects/Celebee";
import ShoppingMall from "../Projects/ShoppingMall";
import WeatherWeb from "../Projects/WeatherWeb";


const Header = styled.h1`
  color: #333;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
`;


interface ProjectsProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  projectsRef: React.RefObject<HTMLDivElement>;

}


const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  return (
<div ref={ref}>      
      <Header>Projects</Header>
      <BusinessWebsiteProject />
      <Celebee />
      <ShoppingMall />
      <WeatherWeb />
    </div>
  );
});

export default Projects;
