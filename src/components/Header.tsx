// Components/Header.tsx
import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: royalblue;
  color: white;
  width:100%;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Header: React.FC = () => {
  return (
    <Navbar>
      <Logo>김선미의 포트폴리오</Logo>
    </Navbar>
  );
};
