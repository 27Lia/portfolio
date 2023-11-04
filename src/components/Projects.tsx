import React, { forwardRef } from "react";

import styled from "styled-components";
import BusinessWebsiteProject from "../Projects/BusinessWebsiteProject";
import Celebee from "../Projects/Celebee";
import ShoppingMall from "../Projects/ShoppingMall";
import WeatherWeb from "../Projects/WeatherWeb";
import ScrollButton from "../Styles/ScrollButton";

const Default = styled.div`
  height: 100vh;
  overflow: auto;
  
`;

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
  educationRef: React.RefObject<HTMLDivElement>;

}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  return (
    <div ref={ref}>
      <Default>
        <Header>Projects</Header>
        <BusinessWebsiteProject />
        <Celebee />
        <ShoppingMall />
        <WeatherWeb />
        <WeatherWeb />
        <ScrollButton onClick={() => props.scrollToRef(props.educationRef)}>
          Go to Education / Awards
        </ScrollButton>
      </Default>
    </div>
  );
});

export default Projects;
