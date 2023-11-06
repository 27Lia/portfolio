
import styled from "styled-components";

export const ProjectDefault = styled.div`
width:60%;
  overflow:auto;
  margin: 0 auto;
  padding: 10px;
  max-height: 600px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  margin-bottom:20px;
  border-radius:30px;
  display:flex;
  justify-content:space-around;
`;

export const Default = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

export const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 40px; 
  font-size: 3.5rem;
  font-weight: 600;
  
`;

export const ProjectBox = styled.div`
  display:flex;
  flex-direction:column;
  width: 40%;
  height:100%;
  
`
export const ProjectTitle = styled.h2`
  font-size: 28px;
  color: #333;
  border-bottom: 2px solid #007BFF;
  display: inline-block;
`;

export const Link = styled.a`
  color: #007BFF;
  text-decoration: underline;
  transition: color 0.2s;

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
  width: 50%;
  border-collapse: collapse;
  margin: 30px 0;
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

