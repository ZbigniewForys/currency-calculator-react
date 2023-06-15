
import {
    StyledTable,
    StyledTableRow,
    StyledTableCell,
    StyledTableContainer
} from "./styled"
import TableBody from "./Row";


const Table = ({ currencyTable }) => {
    const row = (currencyTable) =>
        currencyTable.map((currencyItems) =>
        (<TableBody key={currencyItems.currency}
            currencyTable={currencyItems}>
        </TableBody>));

    return (
        <StyledTableContainer>
            <StyledTable>
                <thead>
                    <StyledTableRow primary>
                        <StyledTableCell primary>Waluta</StyledTableCell>                    
                        <StyledTableCell primary>Kurs dnia</StyledTableCell>                     
                        <StyledTableCell primary>Wartość</StyledTableCell>                     
                    </StyledTableRow>
                </thead>
                <tbodyBody>
                    {row(currencyTable)}
                </tbodyBody>
            </StyledTable>
        </StyledTableContainer>
    );
}
export default Table;