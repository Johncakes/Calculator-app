import ButtonHolder from "@/components/buttonHolder";
import { useState } from "react";
import Display from "./Display";

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [refresh, setRefresh] = useState(false);

  const [firstCalc, setFirstCalc] = useState("");

  const [operator, setOperator] = useState("");

  const operatorList = ["+", "−", "×", "÷", "%"];

  const isOperator = (value: string) => {
    return operatorList.includes(value);
  };

  const calculate = (first: string, second: string, operator: string) => {
    let result = 0;
    switch (operator) {
      case "+":
        result = parseFloat(first) + parseFloat(second);
        break;
      case "−":
        result = parseFloat(first) - parseFloat(second);
        break;
      case "×":
        result = parseFloat(first) * parseFloat(second);
        break;
      case "÷":
        if (parseFloat(second) === 0) {
          return "Error";
        }
        result = parseFloat(first) / parseFloat(second);
        break;
      case "%":
        result = (parseFloat(first) / 100) * parseFloat(second);
        break;
    }
    return result.toString();
  };

  const buttonClickHandler = (buttonValue: string) => {
    if (isOperator(buttonValue)) {
      setOperator(buttonValue);
      if (firstCalc != "") {
        const result = calculate(firstCalc, displayValue, operator);
        setDisplayValue(result);
        setFirstCalc(result);
      } else {
        setFirstCalc(displayValue);
      }
      setRefresh(true);
    } else {
      switch (buttonValue) {
        case "=":
          setDisplayValue(calculate(firstCalc, displayValue, operator));
          setRefresh(true);
          setFirstCalc("");
          break;
        case "C":
          setDisplayValue("0");
          break;
        case "CE":
          if (displayValue.length === 1) {
            setDisplayValue("0");
          } else {
            setDisplayValue(displayValue.slice(0, -1));
          }
          break;
        case ".":
          if (displayValue.includes(".")) {
            return;
          }
          setDisplayValue(displayValue + ".");
          break;
        case "+/-":
          setDisplayValue((prev) => (parseFloat(prev) * -1).toString());
          break;
        default:
          if (displayValue === "0" || refresh) {
            setRefresh(false);
            setDisplayValue(buttonValue);
          } else {
            setDisplayValue((prev) => prev + buttonValue);
          }
      }
    }
  };

  return (
    <div className="flex flex-col rounded-lg p-2 bg-black space-y-2">
      <Display displayValue={displayValue} />

      <div className="flex justify-center items-center w-full h-full bg-black">
        <ButtonHolder setDisplayValue={buttonClickHandler} />
      </div>
    </div>
  );
}
