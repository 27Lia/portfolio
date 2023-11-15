import React from 'react';
import styled from 'styled-components';

import {
  ProjectTitle,
  Link,
  ProjectDefault,
  ProjectBox,
  Text,
  SectionText,
  LinkBox,
  TabsContainer,
  DescriptionItem,
  DescriptionList,
  Button,
} from '../Styles/SharedStyles';
import TabsComponent from '../components/TabsComponent';
import ImageSlider from '../components/ImageSlider';

type ItemProps = {
  descriptions: string[];
};

const Item: React.FC<ItemProps> = ({ descriptions }) => {
  return (
    <div>
      <DescriptionList>
        {descriptions.map((desc, index) => (
          <DescriptionItem key={index}>{desc}</DescriptionItem>
        ))}
      </DescriptionList>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const images = ['./portfolio.jpg', './portfolio2.jpg', './portfolio3.jpg'];

  const tabs = ['소개', '기여한 점'];
  const contents = [
    <SectionText key="section1">
      <h3>개인 프로젝트를 담은 홈페이지입니다.</h3>
      <br />

      <Text>기간: 2023.10.31 ~ 2023.11.15</Text>
      <Text>인원: 솔로 프로젝트</Text>
      <Text>
        기술스택: Three.js (sR3F),TypeScript, React, Styled-components
      </Text>
      <LinkBox>
        <Link href="https://portfolio-27lia.vercel.app/">
          <Button>배포링크</Button>
        </Link>
        <Link href="https://github.com/27Lia/portfolio">
          <Button>Github Repo</Button>
        </Link>
      </LinkBox>
    </SectionText>,

    <Item
      key="item1"
      descriptions={[
        'Three.js와 React-three/fiber를 사용하여 인터랙티브한 3D 주사위 컴포넌트 구현',
        'useFrame 훅을 사용하여 애니메이션 프레임을 제어하고, 주사위의 회전 및 위치 업데이트 실시간 처리.',
        '주사위를 클릭할 때 페이지의 배경색이 랜덤하게 변경되는 인터랙티브한 효과 구현.',
        '마우스 휠 이벤트를 통해 가로 스크롤 기능 구현',
      ]}
    />,
  ];

  return (
    <ProjectDefault>
      <ProjectBox>
        <ProjectTitle>개인 포트폴리오</ProjectTitle>
        <ImageSlider images={images} />
      </ProjectBox>

      <TabsContainer>
        <TabsComponent tabs={tabs} contents={contents} />
      </TabsContainer>
    </ProjectDefault>
  );
};

export default Portfolio;
