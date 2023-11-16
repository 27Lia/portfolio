import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import Awards from './Awards';
import { Default, DefaultBox, Title } from '../Styles/SharedStyles';

const media = {
  mobile: (strings: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: 1300px) {
      ${css(strings, ...args)}
    }
  `,
};

const EdicationBox = styled.div`
  // padding: 100px;

  ${media.mobile`
  padding:40px;
  `}
`;

const ItemWrapper = styled.div`
  margin-top: 10px;
`;

const Date = styled.h3`
  font-weight: bold;
`;

const Description = styled.p`
  margin-left: 15px;
  font-size: 18px;
`;

type EducationItemProps = {
  date: string;
  description: string;
};

interface EdicationProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  skillsRef: React.RefObject<HTMLDivElement>;
}

const EducationItem: React.FC<EducationItemProps> = ({ date, description }) => {
  return (
    <ItemWrapper>
      <Date>{date}</Date>
      <Description>{description}</Description>
    </ItemWrapper>
  );
};

const Education = forwardRef<HTMLDivElement, EdicationProps>((props, ref) => {
  return (
    <DefaultBox ref={ref}>
      <Default>
        <Title>Education</Title>
        <EdicationBox>
          <EducationItem
            date="2023.04.11 - 2023.10.05"
            description="Front-end Software Education"
          />
          <EducationItem
            date="2022.03 -"
            description="방송통신대학교 (휴학) / 컴퓨터 과학과"
          />
          <EducationItem
            date="2018.03 - 2020.02"
            description="백석예술대학교 (졸업) / 음악학부"
          />
        </EdicationBox>
        <Awards />
      </Default>
    </DefaultBox>
  );
});
Education.displayName = 'Education';

export default Education;
