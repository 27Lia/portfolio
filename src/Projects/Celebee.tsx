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
import ModalButton from "../components/ModalButton";
import ImageSlider from "../components/ImageSlider";
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
} from "../Styles/SharedStyles";

const DescriptionList = styled.ul`
  margin-left: 25px;
`;

const DescriptionItem = styled.li`
  margin-top: 5px;
  font-size: 18px;
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
    onModalStateChange(newShowModal); // 모달 상태 변경을 상위 컴포넌트에 전달
  };


  const images = [
    "images/celebee.png",
    "images/celebee2.png",
    "images/celebee3.png",
    "images/celebee4.png",
  ];

  const modalContent = (
    <>
      <ButtonBox>
        <CloseButton onClick={toggleModal}>닫기</CloseButton>
      </ButtonBox>
      <ImageSlider images={images} />
      <ModalHeader>2. 하루모임</ModalHeader>
      <Section>
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

  return (
    <ProjectDefault>
      <ProjectBox>
        <ProjectTitle>하루모임</ProjectTitle>
        <ProjectRole>[기능 구현 및 역할]</ProjectRole>
        <Item
          descriptions={[
            "카드작성페이지, 카드조회페이지, 카드참여, 찜기능 등",
            "서비스 기획 및 아이디어 구체화, 전반적인 UI/UX 디자인 제안 및 구현",
            "카카오맵을 활용하여 다양한 지도 서비스 기능 구현",
            "React-hook-form을 이용한 폼 유효성 검사",
            "Keyframes를 이용한 디자인 요소 구현, 모바일 화면 반응형웹 구현",
          ]}
        />
        <ModalButton label="성과 및 학습 보기" onClick={toggleModal} />
        {showModal && (
          <Modal content={modalContent} toggleModal={toggleModal} />
        )}
      </ProjectBox>

      <ProjectTable>
        <ProjectRow>
          <TableCell>소개</TableCell>
          <TableCell>
            카드 형태로 모임을 만들고 참여하는 인터렉티브한 플랫폼입니다.
          </TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>링크</TableCell>
          <TableCell>
            <Link href="https://celebee-three.vercel.app/">배포링크</Link> |
            <Link href="https://github.com/27Lia/celebee">
              Github Repo
            </Link>
          </TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>프로젝트 기간</TableCell>
          <TableCell>2023.08.24 ~ 2023.09.22</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>프로젝트 유형</TableCell>
          <TableCell>Front 3명, Back 3명</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>기술 스택</TableCell>
          <TableCell>React,Router,Styled-components, RESTful API</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>테스트 ID</TableCell>
          <TableCell>ID: test123@gmail.com | PW: 123123123</TableCell>
        </ProjectRow>
      </ProjectTable>
    </ProjectDefault>
  );
};

export default Celebee;
