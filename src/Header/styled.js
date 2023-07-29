import styled  from "styled-components";

export const StyledHeader = styled.header `
    text-align: center;
    background-color: ${({theme})=>theme.color.feta};
    border-color: ${({theme})=>theme.color.darkgray};
    border-style: solid;
    border-width: 1px;
    font-size: larger;
    padding: 10px;
    margin: 0;
    font-weight: 700;  
`;

