import "./style.css";

const InputData=()=>(
 <div className="inputData__container">
    <label className="form__label">Data:</label> 
   <input className="form__calculationDate js-calculationDate" 
     name="calculationDate" type="date" required max="2023-02-20"></input>
    <label className="form_label">Kwota w PLN:</label>
    <input className="form__input js-plnValue" required type="number" step="0.01"></input>
<button className="form__button js-button">Przelicz</button>
</div>
)   
 
export default InputData;


