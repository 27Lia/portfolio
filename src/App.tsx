import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SubPage from "./pages/SubPage";
// import { Header } from "./components/Header";
import MainPgae from "./pages/MainPage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5; // 밝은 배경색
  color: #333;
`;


const App: React.FC = () => {

  return (
    <Container>
    <Router>
        <Routes>
        <Route path="/" element={<MainPgae />} /> 
        <Route path="sub" element={<SubPage />} />
        </Routes>
    </Router>
    </Container>

  );
};

export default App;
