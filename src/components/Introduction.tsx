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
  border-radius: 25px; /* More pronounced rounded corners */
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.2); /* Smoother box-shadow */
  width: 80%;

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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  border: 5px solid white; /* White border around the image */

`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  
`;

const Link = styled.a`
  color: #FF758C; /* A color that matches the gradient */
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #6DD5FA; /* Another color from the gradient */
  }
`;

const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-top: 1rem;
  text-align: center;
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
              <Img src="../img.jeg" alt="Profile Image" />
              <List>
                <ListItem>Address: 서울시 송파구 문정동</ListItem>
                <ListItem>
                  Email:{" "}
                  <Link href="mailto:tjs4114@gmail.com">tjs4114@gmail.com</Link>
                </ListItem>
                <ListItem>Phone: 010-3331-3743</ListItem>
                <ListItem>
                  GitHub:{" "}
                  <Link
                    href="https://github.com/27Lia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    27Lia
                  </Link>
                </ListItem>
                <ListItem>
                  Blog:{" "}
                  <Link
                    href="https://velog.io/@rlatjsal010"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    rlatjsal010
                  </Link>
                </ListItem>
              </List>
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
