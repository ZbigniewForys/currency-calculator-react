import styled from "styled-components";
export const StyledForm = styled.form`
  padding: 15px;
  background-color: ${({ theme }) => theme.color.caper};
  width: 100%;
`;
export const Button = styled.button`
  margin-left: 15px;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  box-shadow: 3px 2px ${({ theme }) => theme.color.lightgray};
  background-color: ${({ theme }) => theme.color.yellow};
  color: black;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
    color: black;
  }
  &:focus {
    background-color: ${({ theme }) => theme.color.alto};
    font-weight: lighter;
  }
`;
export const Container = styled.div`
  display: inline-block;
  margin-left: 10px;
`;
export const Label = styled.label`
  padding-right: 5px;
  margin-left: 10px;
  text-align: left;
  width: 100px;
`;
export const Input = styled.input`
  width: 100px;
  text-align: right;
`;
export const CalculationDate = styled.input`
  margin-left: 5px;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.color.lightgray};
`;
