import React from "react";
import Introduction from "../components/Introduction";
import Career from "../components/Career";
import Projects from "../components/Projects";
import styled from "styled-components";



const Main: React.FC = () => {
  return (
    <>
        <Introduction />
        <Career />
        <Projects />
    </>
  );
};

export default Main;
