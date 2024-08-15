import React, { useState } from "react";
import "./index.css";

const Calculate: React.FC = () => {
  const [display, setDisplay] = useState<string>("");
  const [operator, setOperator] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<number | null>(null);

  const handleClick = (value: string) => {
    if (["+", "-", "*", "/"].includes(value)) {
      // Handle operator click
      if (display !== "") {
        setPreviousValue(parseFloat(display));
        setDisplay("");
        setOperator(value);
      }
    } else if (value === "=") {
      // Calculate result
      if (operator && previousValue !== null) {
        const currentValue = parseFloat(display);
        let result: number;
        switch (operator) {
          case "+":
            result = previousValue + currentValue;
            break;
          case "-":
            result = previousValue - currentValue;
            break;
          case "*":
            result = previousValue * currentValue;
            break;
          case "/":
            result = previousValue / currentValue;
            break;
          default:
            return;
        }
        setDisplay(result.toString());
        setOperator(null);
        setPreviousValue(null);
      }
    } else if (value === "C") {
      // Clear display
      setDisplay("");
      setOperator(null);
      setPreviousValue(null);
    } else {
      // Handle number or decimal point
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleClick("C")}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  );
};

export default Calculate;
