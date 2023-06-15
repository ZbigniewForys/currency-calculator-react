
import React from 'react';
import {
  StyledForm,
  StyledFormButton,
  StyledFormContainer,
  StyledFormLabel,
  StyledFormInput,
  StyledFormCalculationDate
} from "./styled";

const Form = (props) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledFormContainer>
        <StyledFormLabel>Data:</StyledFormLabel>
        <StyledFormCalculationDate
          defaultValue={props.calculationDate}
          name="calculation_Date"
          type="date"
          required
          max={props.maxDate}
          onChange={({ target }) => props.changeDate(target.value)}>
        </StyledFormCalculationDate>
        <StyledFormLabel>Kwota w PLN:</StyledFormLabel>
        <StyledFormInput
          required
          type="number"
          step="0.01"
          defaultValue={props.valuePLN}
          onChange={({ target }) => props.changeValuePLN(target.value)}>
        </StyledFormInput>
        <StyledFormButton
          onClick={({ target }) => props.convertTable()}
        >Przelicz
        </StyledFormButton>
      </StyledFormContainer>
    </StyledForm>
  )
}

export default Form;
