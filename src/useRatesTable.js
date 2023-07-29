import { useState, useEffect } from "react";
import { useCurrentDate } from "./Clock/useCurrentDate";
export const useRatesTable = () => {
  const date = useCurrentDate();
  const maxDate = date.toISOString().slice(0, 10);
  const [calculationDate, setCalculationDate] = useState(
    date.toISOString().slice(0, 10)
  );
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fethRates = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate.host/" + calculationDate + "?base=PLN"
        );        
              if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { rates, date } = await response.json();

        setRatesData({
          state: "succes",
          rates,
          date,
        });
      } catch {

        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(fethRates, 1000);
  }, [calculationDate]);

  const [currencyTable, setCurrencyTable] = useState([
    { currency: "EUR" },
    { currency: "USD" },
    { currency: "CHF" },
    { currency: "GBP" },
    { currency: "RUB" },
  ]);

  const resetTable = () => {
    setCurrencyTable((currencyTable) =>
      currencyTable.map((line) => ({
        ...line,
        rate: "",
        value: "",
      }))
    );
  };

  const [valuePLN, setValuePLN] = useState(100.0);
  const changeValuePLN = (value) => {
    setValuePLN(value);
    resetTable();
  };

  const changeDate = (value) => {
    setCalculationDate(value);

    resetTable();
  };

  const convertTable = () => {
    setCurrencyTable((currencyTable) =>
      currencyTable.map((line) => ({
        ...line,
        rate: ratesData.rates[line.currency].toFixed(4),
        value: (
          (Math.round(valuePLN * 100) *
            ratesData.rates[line.currency].toFixed(4)) /
          100
        ).toFixed(2),
      }))
    );
  };

  return {
    ratesData,
    currencyTable,
    convertTable,
    maxDate,
    changeDate,
    calculationDate,
    valuePLN,
    changeValuePLN,
  };
};
