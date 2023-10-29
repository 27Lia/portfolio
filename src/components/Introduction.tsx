import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width:80%;
  border-bottom:1px solid #ddd;
  margin-top:20px;
`;

const Header = styled.h1`
  color: #333;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px;
`;

const Divider = styled.div`
  height: 250px;
  border-left: 1px solid #e1e1e1; // 선 색상
`;

const Img = styled.img`
border-radius:50%;
width:200px;
height:250px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 16px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #007BFF;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #0056b3;
  }
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-top: 10px;
`;

const Introduction: React.FC = () => {
  return (
    <Container>
      <Header>Introduction</Header>
      <DataContainer>
      <Img src="../img.jpeg" alt="프로필 이미지"></Img>
      <Divider /> {/* 프로필 이미지와 목록 사이에 선 추가 */}
      <List>
        <ListItem>Adress: 서울시 송파구 문정동</ListItem>
        <ListItem>Email: <Link href="mailto:tjs4114@gmail.com">tjs4114@gmail.com</Link></ListItem>
        <ListItem>Phone: 010-3331-3743</ListItem>
        <ListItem>GitHub: <Link href="https://github.com/27Lia" target="_blank" rel="noopener noreferrer">27Lia</Link></ListItem>
        <ListItem>velog: <Link href="https://velog.io/@rlatjsal010" target="_blank" rel="noopener noreferrer">rlatjsal010</Link></ListItem>
      </List>
      </DataContainer>
      <Text>
        <strong>아이디어</strong>를 내고 <strong>적극적으로 소통</strong>하는 것을 좋아합니다. 
        반복적인 작업을 지속하는것을 지양하며 효율적인 작업을 지향합니다.
      </Text>

      <Text>
        이전 직장에서 업무를 수행하면서 <strong>반복적인 작업에 직면</strong>하게 되었고, 
        <strong>더 효율적인 방법이 없을까?</strong> 하는 호기심으로 인해 개발을 시작하게 되었습니다.
      </Text>
    </Container>
  );
};

export default Introduction;
