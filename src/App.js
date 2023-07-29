import Header from "./Header";
import Form from "./Form";
import Table from "./Table";
import Footer from "./Footer";
import Clock from "./Clock";
import { useRatesTable } from "./useRatesTable";
function App() {
  const {
    calculationDate,
    maxDate,
    currencyTable,
    convertTable,
    valuePLN,
    changeValuePLN,
    changeDate,
    ratesData,
  } = useRatesTable();
  return (
    <main>
      <Clock></Clock>
      <Header></Header>
      <Form
        calculationDate={calculationDate}
        maxDate={maxDate}
        changeDate={changeDate}
        changeValuePLN={changeValuePLN}
        convertTable={convertTable}
        valuePLN={valuePLN}
      ></Form>
      <Table currencyTable={currencyTable}></Table>
      <Footer state={ratesData.state}></Footer>
    </main>
  );
}

export default App;
