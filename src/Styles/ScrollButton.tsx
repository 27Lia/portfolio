import styled from 'styled-components';

const ScrollButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%; 
  transform: translateX(-50%);
  padding: 0.8rem 1.6rem;
  margin-top: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
  z-index:999;
  width:250px;
  margin-bottom:20px;
  &:hover {
    background-color: #0056b3;
  }
`;

export default ScrollButton;
