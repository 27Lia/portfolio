import styled from "styled-components";

import React from "react";

import {
  ProjectTitle,
  Link,
  ProjectRole,
  ProjectTable,
  ProjectRow,
  TableCell,
  Default,
} from "../Styles/SharedStyles";

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
  return (
    <Default>
      <ProjectTitle>날씨 인터렉티브 웹</ProjectTitle>
      <ProjectRole>[기능 구현 및 역할]</ProjectRole>
      <Item
        descriptions={[
          "동적 배경 이미지 변화:사용자의 현재 위치의 날씨를 동적으로 배경 이미지를 변화하는 기능 개발",
          "openAPI 활용:사용자의 현재 위치를 기반으로 한 날씨 정보 제공",
          "할 일 목록 관리 기능:CRUD기능 구현",
        ]}
      />
      <ProjectTable>
        <ProjectRow>
          <TableCell>소개</TableCell>
          <TableCell>
            사용자의 현재위치 날씨에 따라 배경이 동적으로 변경 되며, To-Do List
            기능이 포함됐습니다.
          </TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>링크</TableCell>
          <TableCell>
            <Link href="https://momentum-rivpiekhd-27lia.vercel.app/">
              배포링크
            </Link>{" "}
            | <Link href="https://github.com/27Lia/Momentum">Github Repo</Link>
          </TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>프로젝트 기간</TableCell>
          <TableCell>2023.07</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>프로젝트 유형</TableCell>
          <TableCell>front 1명, 디자이너 1명</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>기술 스택</TableCell>
          <TableCell>HTML, CSS, JS, openAPI</TableCell>
        </ProjectRow>
      </ProjectTable>
    </Default>
  );
};

export default WeatherWeb;
