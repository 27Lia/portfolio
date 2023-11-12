import React, { useState } from "react";
import Modal from "../components/Modal";
import {
  ModalHeader,
  Section,
  SubSection,
  SubTitle,
  Description,
  ButtonBox,
  CloseButton,
} from "../Styles/ModalStyles";
import ModalButton, { StyledButton } from "../components/ModalButton";
import styled from "styled-components";

import {
  ProjectTitle,
  Link,
  ProjectRole,
  ProjectTable,
  ProjectRow,
  TableCell,
  ProjectDefault,
  ProjectBox,
  TabsContainer,
  TabButton,
  TabContent,
  TabContentSection,
  SectionTitle,
  SectionLinks,
  SectionText,
  Text,
  LinkBox,
} from "../Styles/SharedStyles";
import ImageSlider from "../components/ImageSlider";
import TabsComponent from "../components/TabsComponent";

const DescriptionList = styled.ul`
  margin-left: 25px;
`;

const DescriptionItem = styled.li`
  margin-top: 5px;
  font-size: 18px;
  line-height: 1.8;
`;

const ModalBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

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

type CelebeeProps = {
  onModalStateChange: (isOpen: boolean) => void;
};

const Celebee: React.FC<CelebeeProps> = ({ onModalStateChange }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    const newShowModal = !showModal;
    setShowModal(newShowModal);
    onModalStateChange(newShowModal); 
  };

  const images = [
    "./celebee.jpg",
    "./celebee2.jpg",
    "./celebee3.jpg",
  ];

  const modalContent = (
    <>
      <ButtonBox>
        <CloseButton onClick={toggleModal}>닫기</CloseButton>
      </ButtonBox>

      <ModalHeader>2. 하루모임</ModalHeader>

      <Section>
        <SubSection>
          <SubTitle> ✅ 성능최적화 </SubTitle>
          <Description>
            useCallback 훅을 적용하여 React 컴포넌트의 커밋 단계 처리 시간을
            기존 2.6ms에서 1.3ms로 절반 가까이 줄여 리팩토링 하였습니다.
            <br></br>
            불필요한 함수 생성과 연관된 작업을 줄임으로써 전체 렌더링 과정을 더
            빠르게 완료하였습니다.
          </Description>
        </SubSection>

        <SubSection>
          <SubTitle> ✅ 컴포넌트 재사용 능력 강화</SubTitle>
          <Description>
            - 코드의 <b>재사용성을 향상</b>시켰습니다.
            <br></br>
            <b>공통으로 사용되는 카테고리 컴포넌트를 디자인하고 구현</b>하여
            이로써 <b>유지보수가 간편해지고 효율적인 개발</b>이 가능해졌습니다.
          </Description>
        </SubSection>

        <SubSection>
          <SubTitle> ✅ useForm 사용으로 사용자 경험 개선</SubTitle>
          <Description>
            - <b>알림창 방식에서 인라인 에러 메시지 방식으로 변경</b>함으로써
            <b>사용자의 중단 시간을 50% 감소하였습니다.</b> 이를 통해 사용자에게
            더 빠르고 직관적인 피드백을 제공하게 되었습니다.
          </Description>
        </SubSection>

        <SubSection>
          <SubTitle> ✅ 비동기 학습 (RESTful API 통신)</SubTitle>
          <Description>
            - 데이터를 받아올 때까지
            <b>
              사용자에게 빈 화면을 보여주지 않고, 다른 작업을 수행할 수 있게
              해주기 위해 기능들을 비동기 처리
            </b>
            하였습니다.
            <br></br>- 비동기 처리 방식으로 <b>async/await을 활용,</b> 예외
            처리로 <b>try-catch 블록을 사용</b>하였습니다.
            <br></br>이로 인해{" "}
            <b>
              요청이 완료될 때까지 다음 작업이 실행되지 않도록 할 수 있었습니다.
            </b>{" "}
            또한 비동기 <b>요청 중 발생할 수 있는 에러를 잡아낼수있었습니다.</b>
          </Description>
        </SubSection>

        <SubSection>
          <SubTitle> ✅ 커뮤니케이션</SubTitle>
          <Description>
            - <b>백엔드와 적극적으로 소통</b>하여 오류 또는 추가 요청이 있을 시
            바로 공유하여 <b>빠른대응을 받을 수 있었습니다.</b>
            <br></br>
            <b>- 다양한 디자인, 서비스 기획, 컴포넌트의 재사용성에 대해 리드</b>
            하여 팀 내 지식 공유를 촉진하였습니다.
          </Description>
        </SubSection>
      </Section>
    </>
  );

  const tabs = ["소개", "기여한 점"];
  const contents = [
    <SectionText>
      <h3>카드 형태로 모임을 만들고 참여하는 인터렉티브한 플랫폼입니다.</h3>
      <br />

      <Text>기간: 2023.08.24 ~ 2023.09.22</Text>
      <Text>인원: Front 3명, Back 3명</Text>
      <Text>기술스택: React, Router, Styled-components, RESTful API</Text>
      <Text>테스트 정보: ID: test123@gmail.com / PW: 123123123</Text>
      <LinkBox>
        <Link href="https://celebee-three.vercel.app/">
          <StyledButton>배포링크</StyledButton>
        </Link>
        <Link href="https://github.com/27Lia/celebee">
          <StyledButton>Github Repo</StyledButton>
        </Link>
        <ModalBtnBox>
          <ModalButton label="성과 및 학습 보기" onClick={toggleModal} />
        </ModalBtnBox>
        {showModal && (
          <Modal content={modalContent} toggleModal={toggleModal} />
        )}
      </LinkBox>
    </SectionText>,

    <Item
      descriptions={[
        "모임 작성 페이지, 모임 상세 페이지 개발",
        "카드참여, 찜기능 등 구현",
        "카카오맵 키워드검색,마크표시 등 다양한 지도 서비스 기능 구현",
        "서비스 기획 및 전반적인 UI/UX 디자인 구현",
        "React-hook-form을 이용한 폼 유효성 검사",
        "Keyframes를 이용한 반응형웹 구현",
      ]}
    />,
  ];

  return (
    <ProjectDefault>
      <ProjectBox>
        <ProjectTitle>하루모임</ProjectTitle>
        <ImageSlider images={images} />
      </ProjectBox>
      <TabsContainer>
        <TabsComponent tabs={tabs} contents={contents} />
      </TabsContainer>
    </ProjectDefault>
  );
};

export default Celebee;
