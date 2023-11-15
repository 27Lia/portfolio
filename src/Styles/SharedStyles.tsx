import styled, { css } from "styled-components";
const media = {
  mobile: (strings: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: 1300px) {
      ${css(strings, ...args)}
    }
  `,
};

export const LinkBox = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
`;

export const SectionText = styled.ul`
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-top: 30px;
  overflow: auto;

  ${media.mobile`
margin-top: 0px;
font-size: 0.9em
  `}
`;

export const DescriptionList = styled.ul`
  margin-left: 25px;
`;

export const Text = styled.li`
  margin-bottom: 5px;
  line-height: 1.6;
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
  font-size: 1em;
  color:#ddd;
`;

export const Icon = styled.span`
  margin-right: 5px;
`;

export const TabsContainer = styled.div`
  margin-top: 20px;
  width:100%;
  ${media.mobile`
  width: 100%;
  `}

`;

export const TabButton = styled.button`
  padding: 10px 15px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-right: 10px;
  font-size:18px;

  &:hover {
    border-bottom: 2px solid blue;
  }

  &.active {
    font-weight: bold;
    border-bottom: 2px solid blue;
  }

  ${media.mobile`
  padding: 0px;
  font-size:1em;
  `}
`;

export const TabContent = styled.div`
  padding: 20px 0;
  display: none;
  height: 300px;
  overflow: auto;
  
  &.active {
    display: block;
  }

  &::-webkit-scrollbar {
    height: 12px;
  }

`;

export const ProjectDefault = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  height: 500px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color:white;

  ${media.mobile`
  width: 100%; 
  margin: 0px;
  `}
`;

export const Default = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #6d6c6c;
  font-size: 2.7rem;
  font-weight: 600;
  text-align:center;
`;

export const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width:100%;
`;

export const ProjectTitle = styled.h2`
  font-size: 28px;
  color: #333;
  display: inline-block;

  ${media.mobile`
font-size: 1.3rem;
`}
`;

export const Link = styled.a`
  text-decoration: underline;
  color: #333;
`;

export const DescriptionItem = styled.li`
  margin-top: 5px;
  line-height: 1.8;

  ${media.mobile`
font-size: 16px;
`}
`;


export const Button = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  color: #333;
  background-color: transparent;
  width: 150px;
  height:40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  &:hover {
    background-color: #faf7f7;
    transform: translateY(2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const ScrollButton = styled.button`
  position: absolute;
  bottom: 0px;
  left: 50%; 
  transform: translateX(-50%);
  background-color: transparent;
  padding: 0.8rem 1.6rem;
  border: 2px solid #ddd;
  color: #333;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight:600;
  transition: background-color 0.2s;
  z-index:10;
  width:250px;
  &:hover {
    background-color: #faf7f7e6;
  }

`;