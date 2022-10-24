import React from "react";
import "./styles.scss";
import Button from "../Buttons";


export const Modals = ({
  color,
  text,
  display
}) => {
  return(
    <div className={`modal`}>
      <div className="modal-object">
      <div className="modal-tittle">
      <span className="closebtn" onClick={() => {display='none'}}>&times;</span> 
        Tittle
      </div>
      <hr/>
      <div className="modal-body">
      Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </div>
      <hr/>
      <div className="modal-footer">
      <Button 
      color={'secondary'}
      text={'Cerrar'}/>
      <Button 
      color={'primary'}
      text={'Aceptar'}/>
      </div>
      </div> 
    </div>
  )
}

export default Modals;
