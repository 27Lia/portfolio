import React from 'react'; 
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 70%;
  max-height: 90%;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  z-index:1;
`;

interface Props {
    toggleModal: () => void;
    content: JSX.Element;
  }
  
  const Modal: React.FC<Props> = ({ toggleModal, content }) => {
    return (
      <ModalBackground onClick={toggleModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>{content}</ModalContent>
      </ModalBackground>
    );
  };
  
  export default Modal;