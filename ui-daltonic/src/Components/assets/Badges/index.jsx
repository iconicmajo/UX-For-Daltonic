import React from "react";
import "./styles.scss";


export const Badges = ({
  color,
  text
}) => {
  return(
    <div className={`badge badge-${color}`}>
        {text ? text:'Insert Text Here'}
        {color =='success' && <span class="material-icons">done</span>}
      {color =='danger' && <span class="material-icons">info</span>}
      {color =='info' && <span class="material-icons">add</span>}
    </div>
  )
}

export default Badges;
