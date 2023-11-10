import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  max-width: 100%;
  margin-top:20px;
  height:40px;

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
