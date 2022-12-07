import React, { Component } from "react";
import css from "../App.css";

let finalequation = "0";

export class ButtonPad extends Component {
  handleClick = (e) => {
    if (e.target.value === "clear") {
      finalequation = "0";
      this.setState({ equation: finalequation });
    } else if (e.target.value === "=") {
      function evalEquation() {
        finalequation
          .replace(/x/g, "*")
          .replace(/÷/g, "/")
          .replace(/%/g, "/100");
        return eval(finalequation);
      }
      finalequation = evalEquation();
      this.setState({ equation: finalequation });
    } else {
      if (finalequation === "0") {
        finalequation = "";
      }
      finalequation += e.target.value;
      this.setState({ equation: finalequation });
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      equation: finalequation,
    };
  }
  render() {
    return (
      <>
        <div id="screen">
          <div id="calcdiv">
            <p id="calctext">{this.state.equation}</p>
          </div>
        </div>
        <div className="parent">
          <button
            className="calcbutton1"
            id="div1"
            value="clear"
            onClick={this.handleClick}
          >
            AC
          </button>
          <button
            className="calcbutton1"
            id="div2"
            onClick={this.handleClick}
            value="-"
          >
            +/-
          </button>
          <button
            className="calcbutton1"
            id="div3"
            onClick={this.handleClick}
            value="%"
          >
            %
          </button>
          <button
            className="calcbutton2"
            id="div4"
            onClick={this.handleClick}
            value="/"
          >
            ÷
          </button>
          <button
            className="calcbutton"
            id="div5"
            onClick={this.handleClick}
            value="7"
          >
            7
          </button>
          <button
            className="calcbutton"
            id="div6"
            onClick={this.handleClick}
            value="8"
          >
            8
          </button>
          <button
            className="calcbutton"
            id="div7"
            onClick={this.handleClick}
            value="9"
          >
            9
          </button>
          <button
            className="calcbutton2"
            id="div8"
            onClick={this.handleClick}
            value="*"
          >
            &#215;
          </button>
          <button
            className="calcbutton"
            id="div9"
            onClick={this.handleClick}
            value="4"
          >
            4
          </button>
          <button
            className="calcbutton"
            id="div10"
            onClick={this.handleClick}
            value="5"
          >
            5
          </button>
          <button
            className="calcbutton"
            id="div11"
            onClick={this.handleClick}
            value="6"
          >
            6
          </button>
          <button
            className="calcbutton2"
            id="div12"
            onClick={this.handleClick}
            value="-"
          >
            -
          </button>
          <button
            className="calcbutton"
            id="div13"
            onClick={this.handleClick}
            value="1"
          >
            1
          </button>
          <button
            className="calcbutton"
            id="div14"
            onClick={this.handleClick}
            value="2"
          >
            2
          </button>
          <button
            className="calcbutton"
            id="div15"
            onClick={this.handleClick}
            value="3"
          >
            3
          </button>
          <button
            className="calcbutton2"
            id="div16"
            onClick={this.handleClick}
            value="+"
          >
            +
          </button>
          <button
            className="calcbutton4"
            id="div17"
            onClick={this.handleClick}
            value="0"
          >
            0
          </button>
          <button
            className="calcbutton"
            id="div18"
            onClick={this.handleClick}
            value="."
          >
            .
          </button>
          <button
            className="calcbutton2"
            id="div19"
            onClick={this.handleClick}
            value="="
          >
            =
          </button>
        </div>
      </>
    );
  }
}

export default ButtonPad;
