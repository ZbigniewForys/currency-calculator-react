import styled,{css} from "styled-components";

export const StyledFooter = styled.footer`
  border-style: none;
  border-color: gray;
  margin: 0;
  background-color: ${({ theme }) => theme.color.feta};
`;

export const Paragraph = styled.p`
  margin: 0;
  padding: 5px;
  color: ${({ theme }) => theme.color.gray};
  font-size: small;
  border-color: ${({ theme }) => theme.color.lightgray};
  border-style: solid;
  text-align: justify;
  ${({ state }) =>
    state==="loading" &&
    css`
     color:${({ theme }) => theme.color.green};
     border-color:color:${({ theme }) => theme.color.green};
     background-color: white;
     font-weight: 700;
    `};
    ${({ state }) =>
    state==="error" &&
    css`
     color:${({ theme }) => theme.color.red};
     border-color:color:${({ theme }) => theme.color.red};
     background-color: white;
     font-weight: 700;
    `};
`;

export const Loading = styled.p`

align-items: center;
color:${({ theme }) => theme.color.red};
text-align: center;
`;

export const Failure = styled.p`
background-color:${({ theme }) => theme.color.green};
`;