import { useState } from "react";
import "./App.css";

const ops = ["+", "-", "*", "/"];

function Calculator() {
  const [expression, setExpression] = useState("");
  const [dec, setDec] = useState(0);

  //clear values
  const handleClear = () => {
    setExpression("");
    setDec(0);
  };

  //formulating expression
  const appendToExpression = (val) => {
    //zeros in beginning not needed
    if (val === "0" && expression === "") {
      return;
    }

    if (val === ".") {
      setDec(dec + 1);
      if (dec >= 1) {
        return;
      }
    }

    setExpression(expression + val);
  };

  const consecutiveOps = (str) => {
    var newStr = "";

    for (let i = 0; i < str.length; i++) {
      //char is a num
      if (!ops.includes(str[i])) {
        newStr += str[i];
      }

      if (str[i + 1] === "-") {
        newStr += str[i]; //negative sign ignored
      }

      if (ops.includes(str[i]) && !ops.includes(str[i + 1])) {
        newStr += str[i]; //last op before a number is encountered is selected
      }
    }
    return newStr;
  };

  //calculating result
  const calculateExpression = () => {
    let newExp = consecutiveOps(expression);
    setExpression(eval(newExp));
  };

  return (
    <div id="wrapper">
      <div id="calculator">
        <h4 id="display">{expression === "" ? 0 : expression}</h4>
        <div id="calc-buttons">
          <button id="clear" className="keys" onClick={() => handleClear()}>
            AC
          </button>
          <button
            id="divide"
            className="keys"
            onClick={() => appendToExpression("/")}
          >
            /
          </button>
          <button
            id="multiply"
            className="keys"
            onClick={() => appendToExpression("*")}
          >
            *
          </button>
          <button
            id="add"
            className="keys"
            onClick={() => appendToExpression("+")}
          >
            +
          </button>
          <button
            id="nine"
            className="keys"
            onClick={() => appendToExpression("9")}
          >
            9
          </button>
          <button
            id="eight"
            className="keys"
            onClick={() => appendToExpression("8")}
          >
            8
          </button>
          <button
            id="seven"
            className="keys"
            onClick={() => appendToExpression("7")}
          >
            7
          </button>
          <button
            id="subtract"
            className="keys"
            onClick={() => appendToExpression("-")}
          >
            -
          </button>
          <button
            id="six"
            className="keys"
            onClick={() => appendToExpression("6")}
          >
            6
          </button>
          <button
            id="five"
            className="keys"
            onClick={() => appendToExpression("5")}
          >
            5
          </button>
          <button
            id="four"
            className="keys"
            onClick={() => appendToExpression("4")}
          >
            4
          </button>
          <button
            id="decimal"
            className="keys"
            onClick={() => appendToExpression(".")}
          >
            .
          </button>
          <button
            id="three"
            className="keys"
            onClick={() => appendToExpression("3")}
          >
            3
          </button>
          <button
            id="two"
            className="keys"
            onClick={() => appendToExpression("2")}
          >
            2
          </button>
          <button
            id="one"
            className="keys"
            onClick={() => appendToExpression("1")}
          >
            1
          </button>
          <button
            id="zero"
            className="keys"
            onClick={() => appendToExpression("0")}
          >
            0
          </button>
          <button
            id="equals"
            className="keys"
            onClick={() => calculateExpression()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
