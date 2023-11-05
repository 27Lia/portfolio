// Skills.tsx

import React, { forwardRef } from "react";
import styled from "styled-components";
import { Title } from "../Styles/SharedStyles";
import {skills} from "../components/SkillsArray";

const Default = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillHeader = styled.h2`
  font-weight: 600;
  margin-top: 25px;
  font-size: 2rem; 
  color: #222; 
`;

const DescriptionList = styled.ul`
  margin-left: 25px;
  list-style-type: disc;
`;

const DescriptionItem = styled.li`
  margin-top: 8px;
  font-size: 18px;
  color: #555; 
`;
const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 20px; 
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  justify-content: flex-start; 
`;

const SkillCard = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  flex-basis: calc(33.333% - 20px); 
  max-width: calc(33.333% - 20px); 
  box-sizing: border-box; 
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
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
        {skills.map(skill => (
            <SkillCard key={skill.id}>
              {skill.icons.map((icon, index) => (
                <SkillIcon key={index} src={icon} alt={`${skill.name} icon`} />
              ))}
              <SkillItem skillName={skill.name} descriptions={skill.descriptions} />
            </SkillCard>
          ))}
        </SkillsGrid>
      </Default>
    </div>
  );
});

export default Skills;
