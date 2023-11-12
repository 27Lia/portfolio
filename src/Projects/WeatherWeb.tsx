import styled from "styled-components";

import React from "react";

import {
  ProjectTitle,
  Link,
  ProjectRole,
  ProjectTable,
  ProjectRow,
  TableCell,
  ProjectDefault,
  ProjectBox,
  TabsContainer,
  Text,
  LinkBox,
  SectionText,
} from "../Styles/SharedStyles";
import TabsComponent from "../components/TabsComponent";
import { StyledButton } from "../components/ModalButton";
import ImageSlider from "../components/ImageSlider";

const DescriptionList = styled.ul`
  margin-left: 25px;
`;

const DescriptionItem = styled.li`
  margin-top: 5px;
  font-size:18px;
`;

type ItemProps = {
  descriptions: string[];
};

const Item: React.FC<ItemProps> = ({ descriptions }) => {
  return (
    <div>
      <DescriptionList>
        {descriptions.map((desc, index) => (
          <DescriptionItem key={index}>{desc}</DescriptionItem>
        ))}
      </DescriptionList>
    </div>
  );
};

const WeatherWeb: React.FC = () => {

  const images = [
    "./weather.jpg",
    "./weather2.jpg",
    "./weather3.jpg",
    "./weather4.jpg",

  ];

  const tabs = ["소개", "기여한 점"];
  const contents = [
    <SectionText>
      <h3>      사용자의 현재위치 날씨에 따라 배경이 동적으로 변경 되며, To-Do List
            기능이 포함됐습니다.
</h3>
      <br />

      <Text>기간: 2023.07</Text>
      <Text>인원: 솔로 프로젝트</Text>
      <Text>기술스택: HTML, CSS, JS, openAPI</Text>
      <LinkBox>
        <Link href="https://momentum-rivpiekhd-27lia.vercel.app/">
          <StyledButton>배포링크</StyledButton>
        </Link>
        <Link href="https://github.com/27Lia/Momentum">
          <StyledButton>Github Repo</StyledButton>
        </Link>
      </LinkBox>
    </SectionText>,

<Item
descriptions={[
  "동적 배경 이미지 변화:사용자의 현재 위치의 날씨를 동적으로 배경 이미지를 변화하는 기능 개발",
  "openAPI 활용:사용자의 현재 위치를 기반으로 한 날씨 정보 제공",
  "할 일 목록 관리 기능:CRUD기능 구현",
]}
/>,
  ];

  return (
    <ProjectDefault>
            <ProjectBox>

      <ProjectTitle>날씨 인터렉티브 웹</ProjectTitle>
      <ImageSlider images={images} />

            </ProjectBox>

 

      <TabsContainer>
        <TabsComponent tabs={tabs} contents={contents} />
      </TabsContainer>

    </ProjectDefault>
  );
};

export default WeatherWeb;
