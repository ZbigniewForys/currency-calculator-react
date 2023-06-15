import styled  from "styled-components";

export const StyledForm= styled.form `
    padding: 15px;
    background-color: rgb(219 241 188);
    width: 100%;
`;

export const StyledFormButton=styled.button `
    margin-left: 15px;
    height: 30px;
    width: 100px;
    border-radius: 5px;
    box-shadow: 3px 2px rgb(128, 128, 128);
    background-color: white;
    font-weight: bold;
  &:hover { 
    background-color: yellow;
  }
  &:focus {    
    background-color: rgb(228,228,228);
  }
`;
export const StyledFormContainer = styled.div `
    display: inline-block;
    margin-left: 10px;
`;
export const StyledFormLabel=styled.label ` 
    padding-right: 5px;
    margin-left: 10px;
    text-align: left;
    width: 100px;
`;
export const StyledFormInput=styled.input `
    width: 100px;
    text-align: right;
    `;

export const StyledFormCalculationDate=styled.input `
    margin-left: 5px;
    width: 120px;
    height: 30px;
    border-radius: 5px;
    border-color: lightgray;
`;
