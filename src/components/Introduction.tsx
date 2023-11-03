import styled from "styled-components";
import React, { forwardRef } from 'react';
import ScrollButton from "../Styles/ScrollButton";

// 기본 컨테이너 스타일
const Default = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
  height:100vh;
`;

// 제목 스타일
const Header = styled.h1`
  color: #333;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  background-color: #e4e4e4;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

// 데이터 컨테이너 스타일
const DataContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

// 프로필 이미지 스타일
const Img = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 250px;
  margin-right: 2rem;
`;

// 목록 스타일
const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1rem;
`;

// 목록 아이템 스타일
const ListItem = styled.li`
  margin-bottom: 1rem;
`;

// 링크 스타일
const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #0056b3;
  }
`;

// 텍스트 스타일
const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #555;
  margin-top: 1rem;
  text-align: center;
  max-width: 600px;
`;


// Introduction 컴포넌트 프롭 타입 정의
interface IntroductionProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  projectsRef: React.RefObject<HTMLDivElement>;
}

// Introduction 컴포넌트 정의
const Introduction = forwardRef<HTMLDivElement, IntroductionProps>((props, ref) => {
  return (
    <div ref={ref}>
      <Default>
        <Header>Introduction</Header>
        <DataContainer>
          <Img src="../img.jpeg" alt="Profile Image" />
          <List>
            <ListItem>Address: 서울시 송파구 문정동</ListItem>
            <ListItem>Email: <Link href="mailto:tjs4114@gmail.com">tjs4114@gmail.com</Link></ListItem>
            <ListItem>Phone: 010-3331-3743</ListItem>
            <ListItem>GitHub: <Link href="https://github.com/27Lia" target="_blank" rel="noopener noreferrer">27Lia</Link></ListItem>
            <ListItem>Blog: <Link href="https://velog.io/@rlatjsal010" target="_blank" rel="noopener noreferrer">rlatjsal010</Link></ListItem>
          </List>
        </DataContainer>
        <Text><strong>아이디어</strong>를 내고 <strong>적극적으로 소통</strong>하는 것을 좋아합니다. 반복적인 작업을 지속하는 것을 지양하며 효율적인 작업을 지향합니다.</Text>
        <Text>이전 직장에서 업무를 수행하면서 <strong>반복적인 작업에 직면</strong>하게 되었고, <strong>더 효율적인 방법이 없을까?</strong> 하는 호기심으로 인해 개발을 시작하게 되었습니다.</Text>
        <ScrollButton onClick={() => props.scrollToRef(props.projectsRef)}>Go to Projects</ScrollButton>
      </Default>
    </div>
  );
});

export default Introduction;
