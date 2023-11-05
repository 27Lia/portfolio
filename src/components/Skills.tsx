// Skills.tsx

import React, { forwardRef } from "react";
import styled from "styled-components";

const Default = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-size: 3rem;
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
  font-size: 18px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
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
      <Default>
        <Title>Skills</Title>
        <SkillsGrid>
          <SkillCard>
            <SkillIcon
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
            />
            <SkillIcon
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg
              "
              alt="CSS3"
            />
            <SkillIcon
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg
              "
              alt="JavaScript"
            />
            <SkillItem
              skillName="HTML, CSS, JS"
              descriptions={[
                "SEO 최적화, 시멘틱 태그를 활용할수있습니다.",
                "반응형웹을 만들수있습니다.",
                "ES6에서 추가된 async/await를 활용하여 비동기 코드를 보다 가독성 있게 작성할 수 있습니다.",
                "DOM 사용에 어려움이 없습니다.",
              ]}
            />
          </SkillCard>

          <SkillCard>
            <SkillIcon
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg
              "
              alt="React"
            />
            <SkillItem
              skillName="REACT"
              descriptions={[
                "리액트 라우터를 통해 페이지 간의 네비게이션을 관리하고, 단일 페이지 애플리케이션(SPA)의 장점을 활용할 수 있습니다.",
                "컴포넌트 기반 아키텍처를 통해 UI를 모듈화하고 재사용 가능한 컴포넌트를 개발하며, 코드의 가독성과 유지 보수성을 향상시킬 수 있습니다.",
                "다양한 라이브러리를 통합하여 다양한 기능을 추가하고 웹 애플리케이션의 확장성을 높일수있습니다.",
              ]}
            />
          </SkillCard>

          <SkillCard>
            <SkillIcon
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg
              "
              alt="TypeScript"
            />
            <SkillItem
              skillName="TYPESCRIPT"
              descriptions={[
                "인터페이스를 사용하여 객체의 구조를 정의하고, 코드의 예측 가능성을 높입니다.",
                "Props와 State에 타입을 적용하여 React 컴포넌트의 타입 안정성을 강화합니다.",
                "간단한 타입스크립트 프로젝트에서의 경험을 바탕으로 지속적으로 학습하고 있으며, 타입 시스템의 이점을 활용하여 버그 발생 가능성을 줄이고자 합니다.",
              ]}
            />
          </SkillCard>

          <SkillCard>
            <SkillIcon
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg
              "
              alt="Redux"
            />
            <SkillItem
              skillName="REDUX"
              descriptions={[
                "컴포넌트 간에 전역 상태를 공유하고, 데이터 공유와 관리를 용이하게 했습니다.",
                "redux-persist를 통해 Redux 스토어의 상태를 로컬 스토리지에 영구적으로 저장하고, 페이지 새로고침 시에도 사용자의 로그인 상태나 기타 중요한 데이터를 유지할 수 있습니다",
              ]}
            />
          </SkillCard>
          <SkillCard>
            <SkillIcon
              src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
              alt="STYLECOMPONENTS"
            />
            <SkillItem
              skillName="STYLECOMPONENTS"
              descriptions={[
                "- 컴포넌트 스타일을 컴포넌트 자체에 포함시킴으로써, 외부 의존성을 줄이고 모듈화된 스타일링을 적용할 수 있습니다.",
                "컴포넌트 단위로 스타일을 정의하고 관리하여 코드의 가독성과 유지보수성을 높일 수 있습니다.",
              ]}
            />
          </SkillCard>
          <SkillCard>
            <SkillIcon
              src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg
              "
              alt="Vercel"
            />
            <SkillIcon
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg
              "
              alt="AWS"
            />
            <SkillIcon
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg
              "
              alt="Firebase"
            />
            <SkillItem
              skillName="VERCEL, AWS, FIREBASE"
              descriptions={[
                "S3 버킷을 활용한 프론트엔드 배포 경험이 있습니다.",
                "Firebase Authentication을 활용한 사용자 로그인 및 인증 구현을 할 수 있습니다.",
                "Vercel을 통한 환경 변수 설정과 배포 경험이 있습니다. ",
              ]}
            />
          </SkillCard>
          <SkillCard>
            <SkillIcon
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg
              "
              alt="Figma"
            />
            <SkillItem skillName="DESIGN" descriptions={["FIGMA"]} />
          </SkillCard>
        </SkillsGrid>
      </Default>
    </div>
  );
});

export default Skills;
