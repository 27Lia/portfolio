import React from "react";
import styled from "styled-components";
import { Container } from "../components/Introduction";

const Title = styled.h1`
  color: #333;
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
`;

const ProjectTitle = styled.h2`
  font-size: 24px;
  color: #444;
  margin: 20px 0;
`;

const ProjectRole = styled.div`
  font-weight: bold;
  margin: 10px 0;
`;

const Link = styled.a`
  color: #007BFF;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #0056b3;
  }
`;
const ProjectTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const ProjectRow = styled.tr`
  border-bottom: 1px solid #eee;
`;

const TableCell = styled.td`
  padding: 10px;
  vertical-align: top;
`;

const Projects: React.FC = () => {
  return (
    <Container>
      <Title>Projects</Title>

      {/* Project 1 */}
      <ProjectTitle>업체 홈페이지</ProjectTitle>
      <Link href="https://junkshop.vercel.app/">배포링크</Link>
      <ProjectRole>[기능 구현 및 역할]</ProjectRole>
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

      {/* Project 2 */}
      <ProjectTitle>하루모임</ProjectTitle>
      <Link href="https://celebee-three.vercel.app/">배포링크</Link>
      <Link href="https://github.com/codestates-seb/seb45_main_004">Github Repo</Link>
      <ProjectRole>[기능 구현 및 역할]</ProjectRole>
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


            {/* Project 3 */}
            <ProjectTitle>쇼핑몰</ProjectTitle>
      <Link href="https://fe-sprint-coz-shopping-eta.vercel.app/">배포링크</Link>
      <Link href="https://github.com/27Lia/fe-sprint-coz-shopping">Github Repo</Link>
      <ProjectRole>[기능 구현 및 역할]</ProjectRole>
      <ProjectRole>[기능 구현 및 역할]</ProjectRole>
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


            {/* Project 4 */}
            <ProjectTitle>날씨 인터렉티브 웹</ProjectTitle>
      <Link href="https://momentum-rivpiekhd-27lia.vercel.app/">배포링크</Link>
      <Link href="https://github.com/27Lia/Momentum">Github Repo</Link>
      <ProjectRole>[기능 구현 및 역할]</ProjectRole>
      <ProjectRole>[기능 구현 및 역할]</ProjectRole>
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
</Container>
  
  );
};

export default Projects;
