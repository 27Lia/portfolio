import React from "react";

import {
  ProjectTitle,
  Link,
  ProjectRole,
  ProjectTable,
  ProjectRow,
  TableCell,
} from "./SharedStyles";

const ShoppingMall: React.FC = () => {
  return (
    <>
      <ProjectTitle>쇼핑몰</ProjectTitle>
      <ProjectRole>[기능 구현 및 역할]</ProjectRole>
      <ul>
        <li>카드작성페이지, 카드조회페이지, 카드참여, 찜기능 등 구현</li>
        <li>
          <strong>S3 버킷으로 웹사이트 배포</strong>
        </li>
        <li>
          <strong>Firebase Authentication</strong>을 활용한{" "}
          <strong>로그인, 로그아웃, 회원가입 구현</strong>
        </li>
        <li>
          상품 <strong>필터링</strong>, <strong>무한 스크롤</strong> 기능,{" "}
          <strong>북마크toast message</strong> 알림 기능 구현
        </li>
        <li>
          <strong>스타일드 컴포넌트</strong>를 활용하여 CSS 스타일링 및 레이아웃
          디자인 진행
        </li>
        <li>
          Firebase를 활용한 <strong>문의 게시판 CRUD 기능 구현</strong>
        </li>
      </ul>
      <ProjectTable>
        <ProjectRow>
          <TableCell>소개</TableCell>
          <TableCell>
          Firebase를 사용한 간단한 쇼핑몰 웹 사이트입니다.
          </TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>링크</TableCell>
          <TableCell>
            <Link href="https://fe-sprint-coz-shopping-eta.vercel.app/">배포링크</Link> | <Link href="https://github.com/27Lia/fe-sprint-coz-shopping">
              Github Repo
            </Link>
          </TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>프로젝트 기간</TableCell>
          <TableCell>2023.07 ~리팩토링 진행중</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>프로젝트 유형</TableCell>
          <TableCell>솔로 프로젝트</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>기술 스택</TableCell>
          <TableCell>React, Styled-components, Firebase, Redux, AWS S3</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>테스트 ID</TableCell>
          <TableCell>ID: test@gmail.com | PW: test1234!</TableCell>
        </ProjectRow>
      </ProjectTable>
    </>
  );
};
export default ShoppingMall;
