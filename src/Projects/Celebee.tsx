
import React from "react";

import {
  ProjectTitle,
  Link,
  ProjectRole,
  ProjectTable,
  ProjectRow,
  TableCell,
} from './SharedStyles';

const Celebee: React.FC = () => {
  return (
    <>
     <ProjectTitle>하루모임</ProjectTitle>
      <ProjectRole>[기능 구현 및 역할]</ProjectRole>
<ul>
    <li><strong>카드작성페이지, 카드조회페이지, 카드참여, 찜기능</strong> 등 구현</li>
    <li><strong>카카오맵을 활용</strong>하여 다양한 <strong>지도 서비스 기능 구현</strong></li>
    <li>React-hook-form을 이용한 폼 <strong>유효성 검사</strong></li>
    <li><strong>서비스 기획</strong> 및 아이디어 구체화, <strong>전반적인 UI/UX 디자인 제안 및 구현</strong></li>
    <li>Keyframes를 이용한 디자인 요소 구현, 모바일 화면 <strong>반응형웹 구현</strong></li>
</ul>
<ProjectTable>

        <ProjectRow>
          <TableCell>소개</TableCell>
          <TableCell>카드 형태로 모임을 만들고 참여하는 인터렉티브한 플랫폼입니다.</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>링크</TableCell>
          <TableCell><Link href="https://celebee-three.vercel.app/">배포링크</Link> | <Link href="https://github.com/codestates-seb/seb45_main_004">Github Repo</Link></TableCell>

        </ProjectRow>
        <ProjectRow>
          <TableCell>프로젝트 기간</TableCell>
          <TableCell>2023.08.24 ~ 2023.09.22</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>프로젝트 유형</TableCell>
          <TableCell>Front 3명, Back 3명</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>기술 스택</TableCell>
          <TableCell>React,Router,Styled-components, RESTful API</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>테스트 ID</TableCell>
          <TableCell>ID: test123@gmail.com | PW: 123123123</TableCell>
        </ProjectRow>
      </ProjectTable>
      </>
  )}

export default Celebee;