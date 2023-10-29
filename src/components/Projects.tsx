import React from "react";
import styled from "styled-components";
import { Container } from "../components/Introduction";
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
    <Container>
      <Title>Projects</Title>
      <BusinessWebsiteProject />
      <Celebee />
      <ShoppingMall />
      <WeatherWeb />
    </Container>
  );
};

export default Projects;
