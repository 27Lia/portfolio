import React from "react";
import Introduction from "../components/Introduction";
import Career from "../components/Career";
import Projects from "../components/Projects";
import styled from "styled-components";
import Education from "../components/Education";
import Awards from "../components/ Awards";
import Skills from "../components/Skills";

const Default = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const Sub: React.FC = () => {
  return (
    <Default>
        <Introduction />
        <Career />
        <Projects />
        <Education/>
        < Awards />
        <Skills/>
    </Default>
  );
};

export default Sub;
