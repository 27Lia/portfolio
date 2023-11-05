
import styled from "styled-components";

export const Default = styled.div`
  overflow:auto;
  margin: 0 auto;
  padding: 20px;
  max-height: 800px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  margin-bottom:20px;
  border-radius:30px;
  display:flex;
  justify-content:space-around;
  align-items:center;
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 40px; 
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 1.2; 
`;

export const ProjectBox = styled.div`
  width: 40%;
  
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
  border-bottom: 1px solid #eee;
  &:hover {
    background-color: #e9e9e9;
  }
`;

export const TableCell = styled.td`
  padding: 15px;
  vertical-align: top;
  border-bottom: 1px solid #ddd;

  &:first-child {
    font-weight: bold;
    color: #555;
  }
  `;

