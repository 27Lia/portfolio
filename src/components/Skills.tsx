// Skills.tsx

import React, { forwardRef } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: #333;
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

const SkillHeader = styled.h2`
  font-weight: bold;
  margin-top: 25px;
`;

const DescriptionList = styled.ul`
  margin-left: 25px;
  list-style-type: disc;
`;

const DescriptionItem = styled.li`
  margin-top: 5px;
  font-size:18px;
`;

type SkillItemProps = {
  skillName: string;
  descriptions: string[];
};

const SkillItem: React.FC<SkillItemProps> = ({ skillName, descriptions }) => {
  return (
    <div>
      <SkillHeader>{skillName}</SkillHeader>
      <DescriptionList>
        {descriptions.map((desc, index) => (
          <DescriptionItem key={index}>{desc}</DescriptionItem>
        ))}
      </DescriptionList>
    </div>
  );
};

interface SkillsProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  skillsRef: React.RefObject<HTMLDivElement>;
}

const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
  return (
    <div ref={ref}>
      <Title>Skills</Title>
      <SkillItem
        skillName="HTML, CSS, JS"
        descriptions={[
          "SEO 최적화, 시멘틱 태그를 활용할수있습니다.",
          "반응형웹을 만들수있습니다.",
          "ES6에서 추가된 async/await를 활용하여 비동기 코드를 보다 가독성 있게 작성할 수 있습니다.",
          "DOM 사용에 어려움이 없습니다.",
        ]}
      />
      <SkillItem
        skillName="REACT"
        descriptions={[
          "리액트 라우터를 통해 페이지 간의 네비게이션을 관리하고, 단일 페이지 애플리케이션(SPA)의 장점을 활용할 수 있습니다.",
          "컴포넌트 기반 아키텍처를 통해 UI를 모듈화하고 재사용 가능한 컴포넌트를 개발하며, 코드의 가독성과 유지 보수성을 향상시킬 수 있습니다.",
          "다양한 라이브러리를 통합하여 다양한 기능을 추가하고 웹 애플리케이션의 확장성을 높일수있습니다.",
        ]}
      />
      <SkillItem
        skillName="REDUX"
        descriptions={[
          "컴포넌트 간에 전역 상태를 공유하고, 데이터 공유와 관리를 용이하게 했습니다.",
          "redux-persist를 통해 Redux 스토어의 상태를 로컬 스토리지에 영구적으로 저장하고, 페이지 새로고침 시에도 사용자의 로그인 상태나 기타 중요한 데이터를 유지할 수 있습니다",
        ]}
      />
      <SkillItem
        skillName="STYLECOMPONENTS"
        descriptions={[
          "- 컴포넌트 스타일을 컴포넌트 자체에 포함시킴으로써, 외부 의존성을 줄이고 모듈화된 스타일링을 적용할 수 있습니다.",
          "컴포넌트 단위로 스타일을 정의하고 관리하여 코드의 가독성과 유지보수성을 높일 수 있습니다.",
        ]}
      />
      <SkillItem
        skillName="VERCEL, AWS, FIREBASE"
        descriptions={[
          "S3 버킷을 활용한 프론트엔드 배포 경험이 있습니다.",
          "Firebase Authentication을 활용한 사용자 로그인 및 인증 구현을 할 수 있습니다.",
          "Vercel을 통한 환경 변수 설정과 배포 경험이 있습니다. ",
        ]}
      />
      <SkillItem skillName="DESIGN" descriptions={["FIGMA"]} />
    </div>
  );
});

export default Skills;
