import { useState } from 'react';
import Main from "./Main";
import Header from "./Header";
import Form from "./Form";
import Table from "./Table";
import Footer from "./Footer";
import Clock from "./Clock";

function App() {
  const [currencyTable, setCurrencyTable] = useState([
    { currency: "EUR", indicator: 4.62, },
    { currency: "USD", indicator: 4.22, },
    { currency: "CHF", indicator: 4.70, },
    { currency: "GBP", indicator: 5.21, },
  ]);

  const resetTable = () => {
    setCurrencyTable(currencyTable => currencyTable.map(line =>
      ({ ...line, rate: "", value: "" })));
  };

  const convertTable = () => {
    setCurrencyTable(currencyTable => currencyTable.map(line =>
    ({
      ...line,
       rate: convertRate(line.indicator).toFixed(4),
      value: (Math.round(valuePLN *100 )/convertRate(line.indicator)/100).toFixed(2), 
    }))
    );
  };

  const [valuePLN, setValuePLN] = useState(100.00);
  const changeValuePLN = (value) => {
    setValuePLN(value)
    resetTable();
  };
  const today = new Date();
  const maxDate = today.toISOString().slice(0, 10)
  const [calculationDate, setCalculationDate] =
    useState(today.toISOString().slice(0, 10));
  const changeDate = (value) => {
    setCalculationDate(value);
    resetTable();
  }
  const simulateRateOfDay = (indicator) =>
    (indicator * (100 + Math.round(calculationDate.slice(9, 10))) / 100);

  const convertRate = (indicator) =>
    Math.ceil(simulateRateOfDay(indicator) * 10000) / 10000; 
  
  return (
    <Main>
      <Clock></Clock>
      <Header></Header>
      <Form
        calculationDate={calculationDate}
        maxDate={maxDate}
        changeDate={changeDate}
        changeValuePLN={changeValuePLN}
        convertTable={convertTable}
        valuePLN={valuePLN}>
      </Form>
      <Table
        currencyTable={currencyTable}>
      </Table>
      <Footer></Footer>
    </Main>
  )
}

export default App; 
