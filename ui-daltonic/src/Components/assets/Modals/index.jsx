import React from "react";
import "./styles.scss";


export const Modals = ({
  color,
  text
}) => {
  return(
    <div className={`button ${color}`}>
        {text ? text:'Insert Text Here'}
    </div>
  )
}

export default Modals;
