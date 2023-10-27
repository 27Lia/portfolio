// BusinessWebsiteProject.tsx

import React from "react";

import {
  ProjectTitle,
  Link,
  ProjectRole,
  ProjectTable,
  ProjectRow,
  TableCell,
} from "./SharedStyles";

const WeatherWeb: React.FC = () => {
  return (
    <>
      <ProjectTitle>날씨 인터렉티브 웹</ProjectTitle>
      <ProjectRole>[기능 구현 및 역할]</ProjectRole>
      <ul>
        <li>
          동적 배경 이미지 변화:사용자의 현재 위치의 날씨를 동적으로 배경
          이미지를 변화하는 기능 개발
        </li>
        <li>penAPI 활용:사용자의 현재 위치를 기반으로 한 날씨 정보 제공</li>
        <li>라이브러리없이 슬라이드 구현</li>
        <li>할 일 목록 관리 기능:CRUD기능 구현</li>
      </ul>

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
    </>
  );
};

export default WeatherWeb;
