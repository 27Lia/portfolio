import React, { forwardRef } from "react";
import styled from "styled-components";
import ScrollButton from "../Styles/ScrollButton";
import Awards from "./Awards";
import { Default, Title } from "../Styles/SharedStyles";

const EdicationBox = styled.div`
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 40px;
  width:80%;
  
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
    <div ref={ref}>
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
          <EdicationBox>
          <Awards/>
          </EdicationBox>
        <ScrollButton onClick={() => props.scrollToRef(props.skillsRef)}>
          Go to Skills
        </ScrollButton>
      </Default>
    </div>
  );
});

export default Education;
