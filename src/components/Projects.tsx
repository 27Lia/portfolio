import React from "react";
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
`;

const Projects: React.FC = () => {
  return (
    <>
      <Title>Projects</Title>
      <BusinessWebsiteProject />
      <Celebee />
      <ShoppingMall />
      <WeatherWeb />
    </>
  );
};

export default Projects;
