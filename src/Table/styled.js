import styled, { css } from "styled-components";
export const StyledTable = styled.table`
    margin: auto;
    width: 90%;
    position: relative;
    align-items: center;
    border-collapse: collapse;
    background: rgba(242, 252, 228, 1);
    border: 1px solid rgb(128, 128, 128);  
`;
export const StyledTableRow = styled.tr`
    border: 1px solid rgb(228, 228, 228);  
    border-collapse: collapse;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0 10px; 
    align-items: center;
    justify-content: center;
    justify-items: normal;
    border-style: solid;

  ${({primary}) => primary && css`
    background-color: rgb(217, 241, 188, 0.8); 
    border-color : rgb(228,228,228);
  `};
`;
export const StyledTableCell = styled.td`
    padding: 9px 0;
    text-align: center;
    max-width: 100px;
    margin: 0 15px ; 
    
    ${({primary}) => primary && css`
    background-color: rgb(217, 241, 188, 0.1); 
    font-weight:700`};  
`;
export const StyledTableInputCell = styled.input`
    width: 90%;
    text-align: right;
    border-style: none; 
`;
export const StyledTableContainer = styled.div`
    background-color: rgb(219, 241, 188);
    padding-bottom: 20px;
`;