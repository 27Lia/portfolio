import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MainPage from "../src/pages/MainPage";
import { Header } from "./components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5; // 밝은 배경색
  color: #333;
  
`;

const Prompt = styled.h1`
  font-size: 8em;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  background: #ffc107; // 밝은 버튼색
  color: #282c34;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  margin-top: 30px;

  &:hover {
    background: #d4a50b;
    transform: scale(1.05); // 눌렸을 때의 효과
  }
`;

const App: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(true);

  return (
    <Router>
      <Header/>
      <Container>
        <Routes>
          <Route path="main" element={<MainPage />} />
          <Route
            path="/"
            element={
              showPrompt && (
                <>
                  <Prompt>스피커를 켜주세요!</Prompt>
                  <ReactAudioPlayer
                    src={process.env.PUBLIC_URL + "/asd.mp3"}
                    controls
                  />
                  <Link to="/main">
                    <Button>넘어가기</Button>
                  </Link>
                </>
              )
            }
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
