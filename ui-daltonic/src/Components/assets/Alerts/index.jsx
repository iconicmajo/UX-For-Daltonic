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
      {color =='success' && <span class="material-icons">done</span>}
      {color =='danger' && <span class="material-icons">info</span>}
      {color =='info' && <span class="material-icons">add</span>}
      {text ? text:'Insert Text Here'}

   
         
    </div>
  )
}

export default Alert;
