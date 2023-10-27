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
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const Header: React.FC = () => {
  return (
    <Navbar>
      <Logo>김선미의 포트폴리오</Logo>
      <NavLinks>
        <a href="#intro">Introdution</a>
        <a href="#skills">Career</a>
        <a href="#projects">Projects</a>
        {/* 추가로 다른 링크 */}
      </NavLinks>
    </Navbar>
  );
};
