import React from "react";
import "./styles.scss";


export const Alert = ({
  color,
  text
}) => {
  return(
    <div className={`alert ${color}`}>
        {text ? text:'Insert Text Here'}
    </div>
  )
}

export default Alert;
