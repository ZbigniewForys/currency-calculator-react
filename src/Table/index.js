import {
  StyledTable,
  StyledRow,
  Cell,
  TableContainer,
 } from "./styled";

import Row from "./Row";

const Table = ({ currencyTable }) => {
  const row = (currencyTable) =>
    currencyTable.map((currencyItem) => (
      <Row key={currencyItem.currency} currencyItem={currencyItem}></Row>
    ));

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <StyledRow primary >
            <Cell primary>Waluta</Cell>
            <Cell primary>Kurs dnia</Cell>
            <Cell primary>Wartość</Cell>
          </StyledRow>
        </thead>
        <tbody>{row(currencyTable)}</tbody>
      </StyledTable>
    </TableContainer>
  );
};
export default Table;
