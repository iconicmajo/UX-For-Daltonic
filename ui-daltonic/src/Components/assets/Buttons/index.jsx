import React, { Component } from "react";
import "./styles.scss";

const INITIAL_VALUES = {
  offset: 0,
  offsetN: 0,
  offsetF: 0
}

export const Button = ({
  color,
  text
}) => {
  return(
    <div className="button">
      <div className={color ? `${color}`: 'primary'}>
      {text ? text:'Insert Text Here'}
        
      </div>
    </div>
  )
}

export default Button;
