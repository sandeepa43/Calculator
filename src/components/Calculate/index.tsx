import React, { useState } from "react";
import "./index.css";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState<string | null>(null);

  const handleClick = (value: string) => {
    if (value === "C") {
      setDisplay("0");
      setOperation(null);
    } else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      if (display === "0") {
        setDisplay(value);
      } else {
        setDisplay((prev) => prev + value);
      }
    }
  };

  return (
    <div className="calculator">
      <div data-testid="display" className="display">
        {display}
      </div>
      <div className="buttons">
        <button data-testid="button-clear" onClick={() => handleClick("C")}>
          C
        </button>
        <button data-testid="button-divide" onClick={() => handleClick("/")}>
          /
        </button>
        <button data-testid="button-multiply" onClick={() => handleClick("*")}>
          *
        </button>
        <button data-testid="button-subtract" onClick={() => handleClick("-")}>
          -
        </button>
        <button data-testid="button-add" onClick={() => handleClick("+")}>
          +
        </button>
        <button data-testid="button-1" onClick={() => handleClick("1")}>
          1
        </button>
        <button data-testid="button-2" onClick={() => handleClick("2")}>
          2
        </button>
        <button data-testid="button-3" onClick={() => handleClick("3")}>
          3
        </button>
        <button data-testid="button-4" onClick={() => handleClick("4")}>
          4
        </button>
        <button data-testid="button-5" onClick={() => handleClick("5")}>
          5
        </button>
        <button data-testid="button-6" onClick={() => handleClick("6")}>
          6
        </button>
        <button data-testid="button-7" onClick={() => handleClick("7")}>
          7
        </button>
        <button data-testid="button-8" onClick={() => handleClick("8")}>
          8
        </button>
        <button data-testid="button-9" onClick={() => handleClick("9")}>
          9
        </button>
        <button data-testid="button-0" onClick={() => handleClick("0")}>
          0
        </button>
        <button data-testid="button-equals" onClick={() => handleClick("=")}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
