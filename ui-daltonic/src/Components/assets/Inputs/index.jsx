import React from "react";
import "./styles.scss";


export const InputField = ({
  color,
  text
}) => {
  return(
    <input className={`${color}`}>
        {text ? text:'Insert Text Here'}
    </input>
  )
}

export default InputField;
