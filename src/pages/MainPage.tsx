import React from "react";
import Introduction from "../components/Introduction";
import Career from "../components/Career";
import Projects from "../components/Projects";
import styled from "styled-components";

const Ff = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const Main: React.FC = () => {
  return (
    <Ff>
        <Introduction />
        <Career />
        <Projects />
    </Ff>
  );
};

export default Main;
