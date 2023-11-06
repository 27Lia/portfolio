import styled from "styled-components";
import React, { forwardRef } from "react";
import ScrollButton from "../Styles/ScrollButton";
import { Default, Title } from "../Styles/SharedStyles";

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 25px; 
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.2); 
  width: 80%;
  margin-top:10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-right: 2rem;
  object-fit: cover;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
  border: 5px solid white;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ListItem = styled.li`
  line-height: 2;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 10px; 
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px; 
  margin-top: 10px; 
`;

const Link = styled.a`
  text-decoration: none;
  transition: color 0.2s;
  color: #333;
`;

const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-top: 1rem;
  text-align: center;
`;

const IconLink = styled.a`
  display: inline-block;
  margin-right: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;
interface IntroductionProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  careerRef: React.RefObject<HTMLDivElement>;
}

const Introduction = forwardRef<HTMLDivElement, IntroductionProps>(
  (props, ref) => {
    return (
      <div ref={ref}>
        <Default>
          <Title>Introduction</Title>
          <DataContainer>
            <div>
              <Img src="../imges/.jpeg" alt="Profile Image" />
              <List>
                <ListItem>이름: 김선미</ListItem>
                <ListItem>주소: 서울시 송파구 문정동</ListItem>
                <ListItem>
                  Email:{" "}
                  <Link href="mailto:tjs4114@gmail.com">tjs4114@gmail.com</Link>
                </ListItem>
                <ListItem>Phone: 010-3331-3743</ListItem>
                <IconContainer>
                  <IconLink
                    href="https://github.com/27Lia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconImg
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt="GitHub"
                    />
                  </IconLink>
                  <IconLink
                    href="https://velog.io/@rlatjsal010"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconImg
                      src="../images/velog.jpeg"
                      alt="Velog"
                    />
                  </IconLink>
                </IconContainer>
              </List>
              {/* ... 나머지 컴포넌트 ... */}
            </div>
            <TextBox>
              <Text>
                <strong>아이디어</strong>를 내고{" "}
                <strong>적극적으로 소통</strong>하는 것을 좋아합니다. 반복적인
                작업을 지속하는 것을 지양하며 효율적인 작업을 지향합니다.
              </Text>
              <Text>
                이전 직장에서 업무를 수행하면서{" "}
                <strong>반복적인 작업에 직면</strong>하게 되었고,{" "}
                <strong>더 효율적인 방법이 없을까?</strong> 하는 호기심으로 인해
                개발을 시작하게 되었습니다.
              </Text>
            </TextBox>
          </DataContainer>
          <ScrollButton onClick={() => props.scrollToRef(props.careerRef)}>
            Go to Career
          </ScrollButton>
        </Default>
      </div>
    );
  }
);

export default Introduction;
