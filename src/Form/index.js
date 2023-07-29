import {
  StyledForm,
  Button,
  Container,
  Label,
  Input,
  CalculationDate,
} from "./styled";

const Form = ({
  calculationDate,
  maxDate,
  changeDate,
  valuePLN,
  changeValuePLN,
  convertTable,
  currencyTable,
}) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Container>
        <Label>Data:</Label>
        <CalculationDate
          defaultValue={calculationDate}
          name="calculation_Date"
          type="date"
          required
          max={maxDate}
          onChange={({ target }) => changeDate(target.value)}
        ></CalculationDate>
        <Label>Kwota w PLN:</Label>
        <Input
          required
          type="number"
          step="0.01"
          defaultValue={valuePLN}
          onChange={({ target }) => changeValuePLN(target.value)}
        ></Input>
        <Button onClick={() => convertTable(currencyTable)}>Przelicz</Button>
      </Container>
    </StyledForm>
  );
};
export default Form;
