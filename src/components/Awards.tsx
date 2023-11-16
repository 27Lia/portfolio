import React from 'react';
import styled, { css } from 'styled-components';
import { Title } from '../Styles/SharedStyles';

const media = {
  mobile: (strings: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: 1400px) {
      ${css(strings, ...args)}
    }
  `,
};

const SubTitle = styled.h3``;
const Description = styled.div`
  font-size: 18px;
`;

const Box = styled.div`
  // padding: 100px;

  ${media.mobile`
  padding:40px;
  `}
`;

const Awards: React.FC = () => {
  return (
    <>
      <Title>Awards</Title>
      <Box>
        <SubTitle>다음색 보컬데이터를 활용한 Ai 아이디어 해커톤 2위</SubTitle>
        <br></br>
        <Description>
          소상공인 로고송을 만들어주는 AI 서비스를 기획하여. 메타버스의 AI
          로고송 메이커 로고봇을 통해 음악장르, 보컬톤, 상점종류 등을 선택하는
          기획으로 해커톤에 참가하였습니다.
        </Description>
      </Box>
    </>
  );
};

export default Awards;
