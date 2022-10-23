import React from "react";
import "./styles.scss";


export const ProgressBar = ({
  color,
  text,
  percentaje
}) => {
  return(
    <div className={`bar`}>
      <div className={`progress ${color}`} style={{width:`75%`}}>
        {text ? text:'Insert Text Here'}
      </div>
    </div>
  )
}

export default ProgressBar;
