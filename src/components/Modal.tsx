import { useEffect } from 'react';
import styled from 'styled-components';

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
  z-index: 9999;
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
`;

interface Props {
  toggleModal: () => void;
  content: JSX.Element;
}

const Modal: React.FC<Props> = ({ toggleModal, content }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <ModalBackground onClick={toggleModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {content}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
