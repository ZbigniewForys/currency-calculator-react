import React from "react";
import { StyledRow, Cell, InputCell } from ".././styled";
const Row = ({currencyItem}) => 

  (
    <StyledRow>
      <Cell primary> {currencyItem.currency} </Cell>
      <Cell>
        <InputCell
          value={currencyItem.rate}
          type="number"
          step="0.0001"
          readOnly={true}
        ></InputCell>
      </Cell>
      <Cell>
        <InputCell
          className="table__inputCell"
          type="number"
          step="0.01"
          value={currencyItem.value}
          readOnly={true}
          accept=""
        ></InputCell>
      </Cell>
    </StyledRow>
  );

export default Row;
