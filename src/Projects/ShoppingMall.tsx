import React, { useState } from "react";
import {ModalHeader, Section, SubSection, SubTitle, Description, ButtonBox, CloseButton } from '../Styles/ModalStyles'
import ModalButton from "../components/ModalButton";
import Modal from "../components/Modal";
import ImageSlider from "../components/ImageSlider";
import styled from 'styled-components';

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
    font-size:18px;
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


const ShoppingMall: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // 모달의 상태를 관리

  const toggleModal = () => {
    setShowModal(!showModal);
  };


  const images = [
    "images/shopping.png",
    "images/shopping2.png",
    "images/shopping3.png",
  ];
  

  const modalContent = (
    <>
          <ButtonBox>
        <CloseButton onClick={toggleModal}>닫기</CloseButton>
      </ButtonBox>
              <ImageSlider images={images} />
      <ModalHeader>쇼핑몰 콘텐츠 최적화</ModalHeader>
      <Section>
        <SubSection>
          <SubTitle>✅ 최적화 경험</SubTitle>
          <Description>
            - 초기 로딩 시 상품 로드 양을 줄이기 위해 <b>무한 스크롤 기능을 도입</b>했습니다. 기존에 한 번에 100개의 상품을 로드했던 것에 비해, 현재는 `perPage` 값을 활용하여 10개씩 로드합니다. 이로 인해 초기 로딩 시 필요한 데이터 양이 <b>전체의 10%로 감소</b>하게 되었습니다.
          </Description>
        </SubSection>
  
        <SubSection>
          <SubTitle>✅ AWS S3 웹사이트 배포 시 403 Forbidden 오류</SubTitle>
          <Description>
            - <b>S3 버킷의 권한 정책을 수정</b>하였습니다.
            - 외부 사용자가 웹사이트 리소스에 접근할 수 있도록 <b>허용</b>했습니다.
            - 버킷 정책의 세부 설정을 통해 외부 접근 권한을 조절할 수 있다는 것을 <b>학습</b>하였습니다.
          </Description>
        </SubSection>
  
        <SubSection>
          <SubTitle>✅ 퍼블릭 액세스 차단 설정으로 버킷 내용에 대한 공개적인 액세스 불가 문제</SubTitle>
          <Description>
            - <b>퍼블릭 액세스 차단을 해제</b>하였습니다.
            - 버킷의 내용에 대한 공개적인 액세스를 <b>부여</b>하였습니다.
            - 버킷의 내용을 공개적으로 액세스하기 위한 조건 및 설정 방법에 대해 <b>학습</b>하였습니다.
          </Description>
        </SubSection>
  
        <SubSection>
          <SubTitle>✅ 페이지 새로고침 시 상태 초기화 문제</SubTitle>
          <Description>
            - 페이지 새로고침 시 상태가 초기화되는 문제를 해결하여 사용자 경험을 <b>향상</b>시켰습니다.<br></br>
            - <b>Redux 저장소를 영구적으로 유지</b>할 수 있는 redux-persist 를 활용했습니다.
            - 사용자 인증 상태를 안전하게 로컬 스토리지에 저장하도록 <b>Redux 저장소를 구성</b>하였습니다.
          </Description>
        </SubSection>
  
        <SubSection>
          <SubTitle>✅ Vercel 배포 시 환경변수 문제</SubTitle>
          <Description>
            - 환경 변수를 따로 <b>설정</b>하였습니다.<br></br>
            - .env 파일이 배포 시 자동으로 빌드된다고 생각했는데 콘솔 창에서 Firebase 관련해서 API 키를 찾을 수 없다는 오류를 확인하여서 Vercel에서 환경변수를 <b>설정</b>하였습니다.
          </Description>
        </SubSection>
  
        <SubSection>
          <SubTitle>Firebase 선택 이유</SubTitle>
          <Description>
            - Firebase는 대중적이고 사용이 간편한 플랫폼으로, 프로젝트 개발 속도를 <b>향상</b>시키기 위해 선택했습니다.
          </Description>
        </SubSection>
  
        <SubSection>
          <SubTitle>Redux 선택 이유</SubTitle>
          <Description>
            - 로그인의 상태를 <b>전역적으로 공유</b>하기 위해 사용하였습니다.
          </Description>
        </SubSection>
      </Section>
  

    </>
  );
  

  return (
    <ProjectDefault>
            <ProjectBox>

      <ProjectTitle>쇼핑몰</ProjectTitle>
      <ProjectRole>[기능 구현 및 역할]</ProjectRole>
<Item
                descriptions={[
                  "S3 버킷으로 웹사이트 배포",
                  "Firebase Authentication을 활용한 로그인,로그아웃, 회원가입 구현",
                  "상품 필터링, 무한 스크롤 기능, 북마크toast message 알림 기능 구현",
                  "스타일드 컴포넌트를 활용하여 CSS 스타일링 및 레이아웃 디자인 진행",
                  "Firebase를 활용한 문의 게시판 CRUD 기능 구현",
                ]}
            />  
      <ModalButton label="성과 및 학습 보기" onClick={toggleModal} />
      {showModal && <Modal content={modalContent} toggleModal={toggleModal} />}
      </ProjectBox>

      <ProjectTable>
        <ProjectRow>
          <TableCell>소개</TableCell>
          <TableCell>
          Firebase를 사용한 간단한 쇼핑몰 웹 사이트입니다.
          </TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>링크</TableCell>
          <TableCell>
            <Link href="https://fe-sprint-coz-shopping-eta.vercel.app/">배포링크</Link> | <Link href="https://github.com/27Lia/fe-sprint-coz-shopping">
              Github Repo
            </Link>
          </TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>프로젝트 기간</TableCell>
          <TableCell>2023.07 ~리팩토링 진행중</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>프로젝트 유형</TableCell>
          <TableCell>솔로 프로젝트</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>기술 스택</TableCell>
          <TableCell>React, Styled-components, Firebase, Redux, AWS S3</TableCell>
        </ProjectRow>
        <ProjectRow>
          <TableCell>테스트 ID</TableCell>
          <TableCell>ID: test@gmail.com | PW: test1234!</TableCell>
        </ProjectRow>
      </ProjectTable>
    </ProjectDefault>
  );
};
export default ShoppingMall;
