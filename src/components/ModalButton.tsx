import React from 'react';
import styled, { css } from "styled-components";
import { Button } from '../Styles/SharedStyles';




interface ModalButtonProps {
  onClick: () => void;
  label: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ onClick, label }) => {
  return <Button onClick={onClick}>{label}</Button>;
};

export default ModalButton;
