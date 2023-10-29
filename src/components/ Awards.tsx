// Education.tsx

import React from "react";
import styled from "styled-components";
import { Container } from "../components/Introduction";

const Title = styled.h1`
  color: #333;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

const SubTitle = styled.h3``;
const Description = styled.div`
  font-size: 18px;
`;

const Awards: React.FC = () => {
  return (
    <Container>
      <Title>Awards</Title>
      <SubTitle>다음색 보컬데이터를 활용한 Ai 아이디어 해커톤 2위</SubTitle>
      <br></br>
      <Description>
        소상공인 로고송을 만들어주는 AI 서비스를 기획하여. 메타버스의 AI 로고송
        메이커 '로고봇' 통해 음악장르, 보컬톤, 상점종류 등을 선택하는 기획으로
        해커톤에 참가하였습니다.
      </Description>
    </Container>
  );
};

export default Awards;
