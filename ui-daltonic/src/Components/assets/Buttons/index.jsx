import React from "react";
import "./styles.scss";


export const Button = ({
  color,
  text
}) => {
  return(
    <div className={`button ${color}`}>
        {text ? text:'Insert Text Here'}
    </div>
  )
}

export default Button;
