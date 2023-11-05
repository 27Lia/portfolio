// Skills.tsx

import React, { forwardRef, useState } from "react";
import styled, { css } from "styled-components";
import { Title } from "../Styles/SharedStyles";
import { skills } from "../components/SkillsArray";

const Default = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const SkillHeader = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
`;

const DescriptionList = styled.ul`
  margin-left: 25px;
  list-style-type: disc;
`;

const DescriptionItem = styled.li`
  margin-top: 15px;
  font-size: 19px;
  color: #fff;
`;

const SkillIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  display: flex;
`;

const Wallet = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SkillCardBaseStyle = css`
  margin: -125px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 170px;
  border-radius: 12px;
  color: #fff;
  transition: all 0.2s ease;
  cursor: pointer;
  overflow: hidden;
  background-color: #e0e0e0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const SkillIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const SkillCardExpandedStyle = css<SkillCardProps>`
  height: 500px;
  padding: 20px;
  color: #222;
  background-color: #ffffff;
`;

const ExpandButton = styled.button`
  padding: 10px 20px;
  margin-left: 140px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

// -------------------------------------------------------------------------------------------

interface SkillCardProps {
  expanded: boolean;
  clicked: boolean;
}
const SkillCard = styled.div<
  SkillCardProps & { index: number; gradient: string; expandAll: boolean }
>`
  ${SkillCardBaseStyle}
  z-index: ${({ expanded, index }) => (expanded ? 9999 : 1000 - index)};
  background: ${({ gradient }) => gradient};

  ${({ expandAll }) =>
    expandAll &&
    css`
      width: calc(33.333% - 130px);
      margin: 10px;
    `}

  ${({ expanded, clicked }) =>
    expanded
      ? SkillCardExpandedStyle
      : clicked
      ? "transform: none;"
      : "transform: rotateX(45deg) rotateY(-15deg) rotate(45deg);"}

  &:hover {
    transform: ${({ clicked }) =>
      clicked
        ? "none"
        : "rotateX(30deg) rotateY(-15deg) rotate(30deg) translateY(-40px)"};
  }
`;

// -------------------------------------------------------------------------------------------

interface SkillsProps {
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  skillsRef: React.RefObject<HTMLDivElement>;
}

const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);
  const [clickedSkill, setClickedSkill] = useState<number | null>(null);
  const [expandAll, setExpandAll] = useState<boolean>(false); 

  const toggleSkill = (id: number) => {
    if (expandAll) return; 

    const isExpanding = expandedSkill !== id;
    setExpandedSkill(isExpanding ? id : null);
    setClickedSkill(isExpanding ? id : null); 
  };
  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
    if (!expandAll) {
      setExpandedSkill(null);
      setClickedSkill(null);
    }
  };
  return (
    <div ref={ref}>
      <Default>
        <Title>Skills</Title>

        <Wallet>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              expanded={expandAll || expandedSkill === skill.id} 
              clicked={expandAll || clickedSkill === skill.id} 
              expandAll={expandAll} 
              onClick={() => toggleSkill(skill.id)}
              index={index}
              gradient={skill.gradient}
            >
              
              <SkillHeader>{skill.name}</SkillHeader>
              <SkillIconWrapper>
                {skill.icons.map((icon, index) => (
                  <SkillIcon
                    key={index}
                    src={icon}
                    alt={`${skill.name} icon`}
                  />
                ))}
              </SkillIconWrapper>
              {(expandAll || expandedSkill === skill.id) && ( 
                <DescriptionList>
                  {skill.descriptions.map((desc, index) => (
                    <DescriptionItem key={index}>{desc}</DescriptionItem>
                  ))}
                </DescriptionList>
              )}
            </SkillCard>
          ))}
                  <ExpandButton onClick={toggleExpandAll}>
          {expandAll ? "닫기" : "펼쳐보기"}
        </ExpandButton>
        </Wallet>
      </Default>
    </div>
  );
});

export default Skills;
