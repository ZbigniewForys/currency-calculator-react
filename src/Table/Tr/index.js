import "./style.css";
const Tr = ({ currencyTable }) =>
(
    <tr>
        <th className="table__cell table__header">{currencyTable.currency}</th>
        <td className="table__cell"><input
            className="table__inputCell"
            value={currencyTable.rate}
            type="number" step="0.0001"
            readonly></input >
        </td>
        <td className="table__cell"><input className="table__inputCell"
            type="number" step="0.01"
            readonly></input>
        </td>
    </tr >
);

export default Tr;

