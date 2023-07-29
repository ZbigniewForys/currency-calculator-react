import styled, { css } from "styled-components";
export const StyledTable = styled.table`
  margin: auto;
  width: 90%;
  position: relative;
  align-items: center;
  border-collapse: collapse;
  background: ${({ theme }) => theme.color.feta};
  border: 1px solid ${({ theme }) => theme.color.gray};
`;
export const StyledRow = styled.tr`
  border: 1px solid ${({ theme }) => theme.color.mercury};
  border-collapse: collapse;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0 10px;
  align-items: center;
  justify-content: center;
  justify-items: normal;
  border-style: solid;
  ${({ primary }) =>
    primary &&
    css`
      background-color: ${({ theme }) => theme.color.caper};
      border-color: ${({ theme }) => theme.color.feta};
    `};
`;
export const Cell = styled.td`
  padding: 9px 0;
  text-align: center;
  max-width: 100px;
  margin: 0 15px;
  ${({ primary }) =>
    primary &&
    css`
      font-weight: 700;
    `};
`;
export const InputCell = styled.input`
  width: 90%;
  text-align: right;
  border-style: none;
`;
export const TableContainer = styled.div`
  background-color: ${({ theme }) => theme.color.caper};
  padding-bottom: 20px;
`;
