import styled from "styled-components";
import React, { forwardRef } from "react";
import ScrollButton from "../Styles/ScrollButton";
import { Default, Title } from "../Styles/SharedStyles";
import Skills from "./Skills";

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height:100%;
  display:flex;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  width:100%;
  overflow: auto; 
  height:100vh;
  scrollbar-width: thin; 
  padding:100px;

  &::-webkit-scrollbar {
    height: 12px; 
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



const ListItem = styled.li`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 10px; 
  
`;

const IconContainer = styled.div`
margin-left:4px;
  display: flex;
`;

const Link = styled.a`
  text-decoration: none;
  transition: color 0.2s;
  color: #333;
`;

const Text = styled.p`
  font-size: 1.125rem;
  line-height: 2;

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
const Imgbox = styled.div`
  display:flex;
  justify-content:space-around;
  width:100%;
height:500px;
`;

const LeftBox = styled.div`
  display:flex;
  flex-direction:column;
    width: 50%;
    height:100%;
    align-items:center;
    padding:20px;

`;

const RightBox = styled.ul`
display:flex;
  list-style: none;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
overflow:auto;
padding:20px;

width:50%;
height:100%;

`;

const BoxContainer = styled.div`
display:flex;
height:100vh;
width: 100%;
overflow:auto;
`;

const SkillsBox = styled.div `
  height:100%;
  overflow:auto;
`

const ListBox = styled.div `
display:flex;
justify-content:center; 
flex-direction:column;
  overflow:auto;


`



interface IntroductionProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  careerRef: React.RefObject<HTMLDivElement>;
}

const Introduction = forwardRef<HTMLDivElement, IntroductionProps>(
  (props, ref) => {
    return (
      <div ref={ref}>
        <Default>

        <DataContainer>

        {/* <Title>Introduction</Title> */}

        <BoxContainer>

      <LeftBox>
          <Imgbox>
          <Img src="../images/profile.jpgw" alt="Profile Image" />

          <Title>
          <ListBox>
                <h4>김선미 / Lia </h4>
                <ListItem>1996.09.19</ListItem>

                <ListItem>Tel: 010-3331-3743</ListItem>
                <ListItem>Email:<Link href="mailto:tjs4114@gmail.com">tjs4114@gmail.com</Link></ListItem>
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
                </ListBox>
          </Title>
          </Imgbox>


         
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

            
            </LeftBox>


            <RightBox>


                <SkillsBox>
<Skills {...(null as any)} />
</SkillsBox>

                </RightBox>
              

                </BoxContainer>


                <ScrollButton onClick={() => props.scrollToRef(props.careerRef)}>
            Go to Career
          </ScrollButton>

          </DataContainer>

        </Default>
      </div>
    );
  }
);

export default Introduction;
