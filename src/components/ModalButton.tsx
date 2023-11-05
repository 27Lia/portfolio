import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 40%;

  &:hover {
    transform: scale(1.02);
  }
`;

interface ModalButtonProps {
  onClick: () => void;
  label: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ onClick, label }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default ModalButton;
