import React, { Component } from "react";
import "./styles.scss";

const INITIAL_VALUES = {
  offset: 0,
  offsetN: 0,
  offsetF: 0
}

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_VALUES,
    }
  }
  
  render() {
    return (
      <div className="button">
        hola
      </div>
    );
  }
}

export default Button;
