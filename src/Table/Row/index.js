import React from 'react';
import { StyledTableRow, StyledTableCell, StyledTableInputCell }
    from ".././styled";
const Row = ({ currencyTable }) =>
(
    <StyledTableRow>
        <StyledTableCell primary> {currencyTable.currency} </StyledTableCell>
        <StyledTableCell><StyledTableInputCell
            value={currencyTable.rate}
            type="number" step="0.0001"
            readOnly={true}
        ></StyledTableInputCell></StyledTableCell>
        <StyledTableCell><StyledTableInputCell
            className="table__inputCell"
            type="number" step="0.01"
            value={currencyTable.value}
            readOnly={true}
            accept=""
        ></StyledTableInputCell>
        </StyledTableCell>
    </StyledTableRow >
);

export default Row;
