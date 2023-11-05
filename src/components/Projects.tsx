import React, { forwardRef } from "react";

import styled from "styled-components";
import BusinessWebsiteProject from "../Projects/BusinessWebsiteProject";
import Celebee from "../Projects/Celebee";
import ShoppingMall from "../Projects/ShoppingMall";
import WeatherWeb from "../Projects/WeatherWeb";
import ScrollButton from "../Styles/ScrollButton";
import { Title } from "../Styles/SharedStyles";

const Default = styled.div`
  height: 100vh;
  overflow: auto;
  width:80%;
  margin: 0 auto;
`;



interface ProjectsProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  educationRef: React.RefObject<HTMLDivElement>;

}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  return (
    <div ref={ref}>
      <Default>
        <Title>Projects</Title>
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
