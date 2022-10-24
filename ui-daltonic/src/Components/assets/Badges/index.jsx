import React from "react";
import "./styles.scss";


export const Badges = ({
  color,
  text
}) => {
  return(
    <div className={`badge ${color}`}>
        {text ? text:'Insert Text Here'}
    </div>
  )
}

export default Badges;
