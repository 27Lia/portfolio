import styled from 'styled-components';

const ScrollButton = styled.button`
  position: absolute;
  bottom: 0px;
  left: 50%; 
  transform: translateX(-50%);
  background-color:#fab658;
  padding: 0.8rem 1.6rem;
  border: none;
  color:#fff;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
  z-index:10;
  width:250px;
  &:hover {
    background-color: #f8ab3e;
  }
`;

export default ScrollButton;
