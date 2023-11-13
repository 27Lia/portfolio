
import styled, { css } from "styled-components";
const media = {
  mobile: (strings: TemplateStringsArray, ...args: any[]) => css`
    @media (max-width: 1300px) {
      ${css(strings, ...args)}
    }
  `,
};

export const LinkBox = styled.div`
  display:flex;
  justify-content: start;
  gap: 20px;
  margin-top: 20px;

  ${media.mobile`
margin-top: 0px;

  `}


`
export const TabContentSection = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;


export const SectionText = styled.ul`
  line-height: 1.6;
  display:flex;
  flex-direction:column;
  height:300px;
  margin-top: 30px;
font-size:0.8em;
  
${media.mobile`
margin-top: 0px;

  `}

`;

export const Text = styled.li`
  margin-bottom: 5px;
  line-height: 1.6;
  display:flex;
  justify-content:space-between;



`;

export const SectionLinks = styled.div`
  margin-top: 10px;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 10px;

  ${media.mobile`

  font-size: 1.2em;

  `}

`;

export const ListItem = styled.li`
  margin-bottom: 5px;



`;

export const Icon = styled.span`
  margin-right: 5px;
`;

export const  TabsContainer = styled.div`
  margin-top: 20px;
  width:100%;
`;

export const TabButton = styled.button`
  padding: 10px 15px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-right: 10px;
  font-size: 18px;

  &:hover {
    border-bottom: 2px solid blue;
  }

  &.active {
    font-weight: bold;
    border-bottom: 2px solid blue;
  }

`;

export const TabContent = styled.div`
  padding: 20px 0;
  display: none;
  &.active {
    display: block;
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
  /* align-items: center; */
  `


export const Title = styled.h1`
  color: #333;
  text-align: center;
  font-size: 2.7rem;
  font-weight: 600;
  /* margin-bottom:40px; */
  
`;

export const ProjectBox = styled.div`
  /* flex: 1;  */
  display: flex;
  flex-direction: column; 
  justify-content:space-evenly;
  align-items: center;
`;

export const ProjectTitle = styled.h2`
  font-size: 28px;
  color: #333;
  display: inline-block;
`;

export const Link = styled.a`
  text-decoration: underline;
  color:#333;
`;

export const ProjectRole = styled.div`
 font-weight: bold;
  margin: 30px 0;
  font-size: 22px;
  color: #555;
  border-left: 5px solid #007BFF;
  padding-left: 10px;
`;

export const ProjectTable = styled.table`
  /* flex: 1;  */
  border-collapse: collapse;
  margin: 10px 0; 
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const ProjectRow = styled.tr`
  /* border-bottom: 1px solid #eee; */
`;

export const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  border: 1px solid;
  max-height: 20px; /* 각 셀의 높이 */
  overflow:auto;
  &:first-child {
    font-weight: bold;
    color: #555;
  }
  `;