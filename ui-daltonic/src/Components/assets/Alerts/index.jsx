import React from "react";
import "./styles.scss";


export const Alert = ({
  color,
  text,
  display='block'
}) => {
  return(
    <div id="alert" className={`alert alert-${color}`} style={{display:`${display}`}}>
      {/*ICONS
      <span className="closebtn" onClick={() => {display='none'}}>&times;</span> */}
      {text ? text:'Insert Text Here'}
      {console.log(display)}
        
    </div>
  )
}

export default Alert;
