import React from "react";
import styled from "styled-components";

import {
  ProjectTitle,
  Link,
  ProjectRole,
  ProjectTable,
  ProjectRow,
  TableCell,
  ProjectDefault,
  ProjectBox,
  Text,
  SectionText,
  LinkBox,
  TabsContainer,
} from "../Styles/SharedStyles";
import { StyledButton } from "../components/ModalButton";
import TabsComponent from "../components/TabsComponent";
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

const BusinessWebsiteProject: React.FC = () => {

  const images = [
    "./BusinessWebsite.jpg",
    "./BusinessWebsite2.jpg",
    
  ];


  const tabs = ["소개", "기여한 점"];
  const contents = [
    <SectionText>
      <h3> SEO최적화를 적용한 지역 내 소규모 업체 홈페이지입니다.
</h3>
      <br />

      <Text>기간: 2023.09.30 ~ 2023.10.18</Text>
      <Text>인원: 솔로 프로젝트</Text>
      <Text>기술스택: React, Styled-components, Naver Map API, SEO</Text>
      <LinkBox>
        <Link href="https://junkshop.vercel.app/">
          <StyledButton>배포링크</StyledButton>
        </Link>
        <Link href="https://github.com/27Lia/junkshop">
          <StyledButton>Github Repo</StyledButton>
        </Link>
      </LinkBox>
    </SectionText>,

    <Item
      descriptions={[
        "S3 버킷으로 웹사이트 배포",
        "Firebase Authentication을 활용한 로그인,로그아웃, 회원가입 구현",
        "상품 필터링, 무한 스크롤 기능, 북마크toast message 알림 기능 구현",
        "스타일드 컴포넌트를 활용하여 CSS 스타일링 및 레이아웃 디자인 진행",
        "Firebase를 활용한 문의 게시판 CRUD 기능 구현",
      ]}
    />,
  ];

  return (
    <ProjectDefault>
      <ProjectBox>
      <ProjectTitle>업체 홈페이지</ProjectTitle>
              <ImageSlider images={images} />

      </ProjectBox>

      <TabsContainer>
        <TabsComponent tabs={tabs} contents={contents} />
      </TabsContainer>

     
      </ProjectDefault>
  );
};

export default BusinessWebsiteProject;