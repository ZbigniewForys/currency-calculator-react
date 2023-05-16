import "./style.css";
import Tbody from "./Row";

const Table = ({ currencyTable }) => {
    const row = (currencyTable) =>
        currencyTable.map((currencyItems) =>
        (<Tbody key={currencyItems.currency}
                currencyTable={currencyItems}>
        </Tbody>));

    return (
        <div className="table__container">
            <table className="table">
                <thead>
                    <tr>
                        <th className="table__cell table__header">Waluta</th>
                        <th className="table__cell table__header">Kurs dnia</th>
                        <th className="table__cell table__header">Wartość</th>
                    </tr>
                </thead>
                <tbody>
                {row(currencyTable)}
                </tbody>
            </table>
        </div>

    );
}
export default Table;