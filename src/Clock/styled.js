import styled from "styled-components";

export const StyledClock = styled.div`
  text-align: right;
  background-color: ${({ theme }) => theme.color.feta};
  border-color: ${({ theme }) => theme.color.darkgrey};
  border-style: solid;
  border-width: 1px;
  font-size: small;
  font-family: monospace;
  padding: 10px;
`;
