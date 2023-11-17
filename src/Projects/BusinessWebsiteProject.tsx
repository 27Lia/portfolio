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

const BusinessWebsiteProject: React.FC = () => {
  const images = ['./BusinessWebsite.jpg', './BusinessWebsite2.jpg'];

  const tabs = ['소개', '기여한 점'];
  const contents = [
    <SectionText key="section1">
      <h3> SEO최적화를 적용한 지역 내 소규모 업체 홈페이지입니다.</h3>
      <Text>기간: 2023.09.30 ~ 2023.10.18</Text>
      <Text>인원: 솔로 프로젝트</Text>
      <Text>기술스택: React, Styled-components, Naver Map API, SEO</Text>
      <LinkBox>
        <Link target="_blank" href="https://junkshop.vercel.app/">
          <Button>배포링크</Button>
        </Link>
        <Link target="_blank" href="https://github.com/27Lia/junkshop">
          <Button>Github Repo</Button>
        </Link>
      </LinkBox>
    </SectionText>,

    <Item
      key="item1"
      descriptions={[
        'SEO 최적화',
        '디자인 기획',
        '라이브러리없이 슬라이드 구현',
        '반응형웹 구현',
      ]}
    />,
  ];

  return (
    <ProjectDefault>
      <ProjectBox>
        <ProjectTitle>업체 홈페이지</ProjectTitle>
        <ImageSlider images={images} />
      </ProjectBox>

      <TabsContainer>
        <TabsComponent tabs={tabs} contents={contents} />
      </TabsContainer>
    </ProjectDefault>
  );
};

export default BusinessWebsiteProject;
