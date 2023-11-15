// Skills.tsx

import React, { forwardRef, useState } from "react";
import styled, { css } from "styled-components";
import { skills } from "../components/SkillsArray";
import { Button } from "../Styles/SharedStyles";

const media = {
  mobile: (strings: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: 1000px) {
      ${css(strings, ...args)}
    }
  `,
};

const SkillHeader = styled.h2`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  padding: 10px;
`;

const DescriptionList = styled.ul`
  margin-left: 25px;
  list-style-type: disc;
`;

const DescriptionItem = styled.li`
  margin-top: 15px;
  color: #fff;
`;

const SkillIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  display: flex;
`;

const Wallet = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    height: 12px;
  }
  ${media.mobile`
  height: 150px;
  gap:10px;
  `}
`;

const SkillCardBaseStyle = css`
  display: flex;
  flex-direction: column;
  margin: -70px;
  width: 220px;
  height: 110px;
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
  overflow: auto;
  padding: 20px;
  color: #222;
  display: flex;
  justify-content: flex-start;
  align-items:center;
  height: 50%;
  width: 250px;

  ${media.mobile`
  height: auto;
  width: 240px;

  `}
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const DivBox = styled.div`
  height: 100%;
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
      width: calc(33.333% - 20px);
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

  @media (max-width: 1000px) {
    width: 100%;
    margin: 10px 0;
    transform: none;
    &:hover {
      transform: none;
    }
    ${SkillCardExpandedStyle}
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
    <DivBox ref={ref}>
      {/* <Default> */}

      <Wallet>
        <Btn>
          <Button onClick={toggleExpandAll}>
            {expandAll ? "닫기" : "스킬 펼쳐보기"}
          </Button>
        </Btn>
        <CardBox>
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
        </CardBox>
      </Wallet>
      {/* </Default> */}
    </DivBox>
  );
});

export default Skills;
