
import "./style.css";

const Form = (props) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <form className="form"
      onSubmit={onFormSubmit}
    > <div className="form__container">
        <label className="form__label">Data:</label>

        <input
          className="form__calculationDate"
          defaultValue={props.calculationDate}
          name="calculation_Date"
          type="date"
          required
          max={props.maxDate}
          onChange={({ target }) => props.changeDate(target.value)}>
        </input>
        <label className="form__label">Kwota w PLN:</label>
        <input className="form__input" required type="number" step="0.01"
          defaultValue={props.valuePLN}
          onChange={({ target }) => props.changeValuePLN(target.value)}>
        </input>
        <button
          className="form__button"
          onClick={({ target }) => props.convertTable()}
        >Przelicz
        </button>
      </div>
    </form>
  )
}

export default Form;
