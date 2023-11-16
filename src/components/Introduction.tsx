import styled, { css } from 'styled-components';
import React, { forwardRef } from 'react';
import {
  Default,
  DefaultBox,
  ScrollButton,
  Title,
} from '../Styles/SharedStyles';
import Skills from './Skills';

// 미디어 쿼리를 위한 헬퍼 함수
const media = {
  mobile: (strings: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: 1000px) {
      ${css(strings, ...args)}
    }
  `,
};
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  max-height: 700px;
  border-radius: 30px;
  scrollbar-width: thin;
  margin: 0 auto;
  &::-webkit-scrollbar {
    height: 12px;
  }

  ${media.mobile`
    padding: 0; // 768px 이하에서 패딩을 0으로 설정
  `}
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
  color: #757474;
`;

const IconContainer = styled.div`
  margin-left: 4px;
  display: flex;
`;

const Link = styled.a`
  text-decoration: none;
  transition: color 0.2s;
  color: #757474;
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  justify-content: space-evenly;
  ${media.mobile`
width:100%;
padding:40px;

`}
`;

const RightBox = styled.ul`
  display: flex;
  list-style: none;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: space-evenly;
  ${media.mobile`
width:100%;
height:50%;
padding:0px;

`}
`;

const BoxContainer = styled.div`
  display: flex;
  height: 50vh;
  overflow: auto;
  justify-content: center;
  align-items: center;

  ${media.mobile`
display: block;

`}
`;
const SkillsBox = styled.div`
  height: 100%;
  overflow: auto;
`;
const ListBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

interface IntroductionProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  careerRef: React.RefObject<HTMLDivElement>;
}

const Introduction = forwardRef<HTMLDivElement, IntroductionProps>(
  (props, ref) => {
    return (
      <DefaultBox ref={ref}>
        <Default>
          <Title>Introduction</Title>
          <DataContainer>
            {/* <Title>Introduction</Title> */}

            <BoxContainer>
              <LeftBox>
                <Imgbox>
                  <Img src="./profile.jpg" alt="Profile Image" />

                  <ListBox>
                    <h2>김선미 / Lia </h2>
                    <ListItem>1996.09.19</ListItem>

                    <ListItem>Tel: 010-3331-3743</ListItem>
                    <ListItem>
                      Email:
                      <Link href="mailto:tjs4114@gmail.com">
                        tjs4114@gmail.com
                      </Link>
                    </ListItem>
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
                        <IconImg src="./velog.jpeg" alt="Velog" />
                      </IconLink>
                    </IconContainer>
                  </ListBox>
                </Imgbox>

                <TextBox>
                  <Text>
                    <strong>아이디어</strong>를 내고{' '}
                    <strong>적극적으로 소통</strong>하는 것을 좋아합니다.
                    반복적인 작업을 지속하는 것을 지양하며 효율적인 작업을
                    지향합니다.
                  </Text>
                  <Text>
                    이전 직장에서 업무를 수행하면서{' '}
                    <strong>반복적인 작업에 직면</strong>하게 되었고,{' '}
                    <strong>더 효율적인 방법이 없을까?</strong> 하는 호기심으로
                    인해 개발을 시작하게 되었습니다.
                  </Text>
                </TextBox>
              </LeftBox>

              <RightBox>
                <SkillsBox>
                  <Skills {...(null as any)} />
                </SkillsBox>
              </RightBox>
            </BoxContainer>
          </DataContainer>
          <ScrollButton onClick={() => props.scrollToRef(props.careerRef)}>
            Go to Career
          </ScrollButton>
        </Default>
      </DefaultBox>
    );
  },
);
Introduction.displayName = 'Introduction';

export default Introduction;
