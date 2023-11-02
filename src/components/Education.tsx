// Education.tsx

import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: #333;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

const ItemWrapper = styled.div`
  margin-top: 10px;
`;

const Date = styled.h3`
  font-weight: bold;
`;

const Description = styled.p`
  margin-left: 15px;
  font-size:18px;
`;

type EducationItemProps = {
  date: string;
  description: string;
};

const EducationItem: React.FC<EducationItemProps> = ({ date, description }) => {
  return (
    <ItemWrapper>
      <Date>{date}</Date>
      <Description>{description}</Description>
    </ItemWrapper>
  );
};

const Education: React.FC = () => {
  return (
    <>
      <Title>Education</Title>
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
    </>
  );
};

export default Education;
