import React from "react";
import "./styles.scss";


export const Alert = ({
  color,
  text,
  display='block'
}) => {
  return(
    <div id="alert" className={`alert ${color}`} style={{display:`${display}`}}>
      <span className="closebtn" onClick={() => {display='none'}}>&times;</span> 
      {console.log(display)}
        {text ? text:'Insert Text Here'}
    </div>
  )
}

export default Alert;
