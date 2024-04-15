import React from "react";
import "./App.css";

const ops = ["+", "-", "*", "/"];

const consecutiveOps = (str) => {
  var newStr = "";

  for (let i = 0; i < str.length; i++) {
    //char is a num
    if (!ops.includes(str[i])) {
      newStr += str[i];
    }

    if ((ops.includes(str[i]) && !ops.includes(str[i + 1])) || (!ops.includes(str[i+1]) && str[i]==='-')) {
      newStr += str[i]; //last op before a number is encountered is selected
    }
  }
  return newStr;
};

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      expression: '',
      dec: 0
    }

    this.handleClear = this.handleClear.bind(this);
    this.appendToExpression = this.appendToExpression.bind(this);
    this.calculateExpression = this.calculateExpression.bind(this);
  }

  //clear values
   handleClear() {
    this.setState({
      expression: '',
      dec: 0
    });
  };

  //formulating expression
  appendToExpression(val){
    //zeros in beginning not needed
    if (val === "0" && this.state.expression === "") {
      return;
    }

    if (val === ".") {
      this.setState({
        dec: this.state.dec+1
      })
      if (this.state.dec >= 1) {
        return;
      }
    }

    this.setState(prevState => ({
      expression: prevState.expression+val
    }));

  };
  
  //calculating result
  calculateExpression(){
    if(this.state.expression===''){
      return;
    }
    let newExp = consecutiveOps(this.state.expression);
    this.setState({
      expression: eval(newExp)
    });
  };

  render() {

  return (
    <div id="wrapper">
      <div id="calculator">
        <h4 id="display">{this.state.expression === "" ? 0 : this.state.expression}</h4>
        <div id="calc-buttons">
          <button id="clear" className="keys" onClick={() => this.handleClear()}>
            AC
          </button>
          <button
            id="divide"
            className="keys"
            onClick={() => this.appendToExpression("/")}
          >
            /
          </button>
          <button
            id="multiply"
            className="keys"
            onClick={() => this.appendToExpression("*")}
          >
            *
          </button>
          <button
            id="add"
            className="keys"
            onClick={() => this.appendToExpression("+")}
          >
            +
          </button>
          <button
            id="nine"
            className="keys"
            onClick={() => this.appendToExpression("9")}
          >
            9
          </button>
          <button
            id="eight"
            className="keys"
            onClick={() => this.appendToExpression("8")}
          >
            8
          </button>
          <button
            id="seven"
            className="keys"
            onClick={() => this.appendToExpression("7")}
          >
            7
          </button>
          <button
            id="subtract"
            className="keys"
            onClick={() => this.appendToExpression("-")}
          >
            -
          </button>
          <button
            id="six"
            className="keys"
            onClick={() => this.appendToExpression("6")}
          >
            6
          </button>
          <button
            id="five"
            className="keys"
            onClick={() => this.appendToExpression("5")}
          >
            5
          </button>
          <button
            id="four"
            className="keys"
            onClick={() => this.appendToExpression("4")}
          >
            4
          </button>
          <button
            id="decimal"
            className="keys"
            onClick={() => this.appendToExpression(".")}
          >
            .
          </button>
          <button
            id="three"
            className="keys"
            onClick={() => this.appendToExpression("3")}
          >
            3
          </button>
          <button
            id="two"
            className="keys"
            onClick={() => this.appendToExpression("2")}
          >
            2
          </button>
          <button
            id="one"
            className="keys"
            onClick={() => this.appendToExpression("1")}
          >
            1
          </button>
          <button
            id="zero"
            className="keys"
            onClick={() => this.appendToExpression("0")}
          >
            0
          </button>
          <button
            id="equals"
            className="keys"
            onClick={() => this.calculateExpression()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
  }
}


export default App;