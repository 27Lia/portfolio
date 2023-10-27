
import React from "react";

import {
  ProjectTitle,
  Link,
  ProjectRole,
  ProjectTable,
  ProjectRow,
  TableCell,
} from './SharedStyles';

const BusinessWebsiteProject: React.FC = () => {
  return (
    <>
<ProjectTitle>업체 홈페이지</ProjectTitle>
<ProjectRole>기능 구현 및 역할</ProjectRole>
<ul>
    <li><strong>SEO 최적화</strong></li>
    <li><strong>디자인 기획</strong></li>
    <li>라이브러리없이 슬라이드 구현</li>
    <li><strong>반응형웹 구현</strong></li>
</ul>
<ProjectTable>
  <ProjectRow>
    <TableCell>소개</TableCell>
    <TableCell>SEO최적화를 적용한 지역 내 소규모 업체 홈페이지입니다.</TableCell>
  </ProjectRow>
  <ProjectRow>
    <TableCell>링크</TableCell>
    <TableCell><Link href="https://junkshop.vercel.app/">배포링크</Link></TableCell>
  </ProjectRow>
  <ProjectRow>
    <TableCell>프로젝트 기간</TableCell>
    <TableCell>2023.09.30 ~ 2023.10.18</TableCell>
  </ProjectRow>
  <ProjectRow>
    <TableCell>프로젝트 유형</TableCell>
    <TableCell>솔로 프로젝트</TableCell>
  </ProjectRow>
  <ProjectRow>
    <TableCell>기술 스택</TableCell>
    <TableCell>React, Styled-components, Naver Map API, SEO</TableCell>
  </ProjectRow>
</ProjectTable>
</>
  );
};

export default BusinessWebsiteProject;
