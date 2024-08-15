import React, { useState } from "react";

const Calculate: React.FC = () => {
  const [display, setDisplay] = useState<string>("");
  const [operator, setOperator] = useState<string | null>(null);
  const [operand1, setOperand1] = useState<number | null>(null);

  const handleClick = (value: string) => {
    if (["+", "-", "*", "/"].includes(value)) {
      setOperator(value);
      setOperand1(parseFloat(display));
      setDisplay("");
    } else if (value === "=") {
      if (operator && operand1 !== null) {
        const operand2 = parseFloat(display);
        let result: number;
        switch (operator) {
          case "+":
            result = operand1 + operand2;
            break;
          case "-":
            result = operand1 - operand2;
            break;
          case "*":
            result = operand1 * operand2;
            break;
          case "/":
            result = operand1 / operand2;
            break;
          default:
            return;
        }
        setDisplay(result.toString());
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  return (
    <div>
      <div data-testid="display">{display}</div>
      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("+")}>+</button>
      <button onClick={() => handleClick("=")}>=</button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default Calculate;
