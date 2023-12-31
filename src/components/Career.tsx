import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
  Default,
  DefaultBox,
  ScrollButton,
  Title,
} from '../Styles/SharedStyles';
///

const media = {
  mobile: (strings: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: 1400px) {
      ${css(strings, ...args)}
    }
  `,
};

const IntroductionBox = styled.div`
  max-height: 50vh;
  overflow: auto;
  ${media.mobile`
  padding:40px;
  `}
`;
const JobTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const JobDetails = styled.span`
  font-size: 18px;
  margin-left: 20px;
`;

const JobRole = styled.div`
  font-weight: 300;
  margin: 10px 0;
  font-size: 21px;
`;

const JobDescription = styled.p`
  margin: 10px 20px 10px 20px;
  line-height: 1.5;
  font-size: 18px;
`;

interface CareerProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  projectsRef: React.RefObject<HTMLDivElement>;
}
const Career = forwardRef<HTMLDivElement, CareerProps>((props, ref) => {
  return (
    <DefaultBox ref={ref}>
      <Default>
        <Title>Career</Title>
        <IntroductionBox>
          <JobTitle>콘샐러드</JobTitle>
          <JobDetails>컨텐츠 운영팀 / 사원 / 2022.01 - 2023.02</JobDetails>
          <JobRole>담당 업무</JobRole>
          <JobDescription>
            - 해외 음악 플랫폼 UI/UX, CMS 사용 및 특성 파악
            <br />
            사용자 중심의 웹 디자인 및 프론트엔드 개발에 대한 인사이트
            획득하였습니다.
          </JobDescription>
          <JobDescription>
            - 데이터 관리 및 모니터링
            <br />
            자사 CMS내 이슈 발생 또는 새로운 기능 추가 시 데이터를 검토하고
            실서비스를 모니터링하며 QA와 흡사한 업무를 진행하였습니다.
          </JobDescription>
          <br />
          <JobTitle>한국음악실연자연합회</JobTitle>
          <JobDetails>회원관리팀 / 인턴 / 2021.03 - 2021.12</JobDetails>
          <JobRole>담당 업무</JobRole>
          <JobDescription>
            - CMS를 통한 음악 사용 로그 데이터 분석 및 관리
          </JobDescription>
          <JobDescription>
            - 인공지능 학습용 데이터 구축사업 참여 (음악 데이터 검수 및 편집)
          </JobDescription>
        </IntroductionBox>
        <ScrollButton onClick={() => props.scrollToRef(props.projectsRef)}>
          Go to Projects
        </ScrollButton>
      </Default>
    </DefaultBox>
  );
});
Career.displayName = 'Career';
export default Career;
