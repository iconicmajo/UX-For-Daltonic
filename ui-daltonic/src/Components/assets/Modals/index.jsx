import React, {Component} from "react";
import "./styles.scss";
import Button from "../Buttons";


class Modal extends Component {
constructor(props) {
  super(props);
  this.state = {
    display: true
  };
}


  render() {
    return(
      <div className={`modal`} style={{display: `${this.state.display ? 'block':'none'}`}} >
        <div className="modal-object">
        <div className="modal-tittle">
        <span className="closebtn" onClick={() => {this.setState({display:!this.state.display})}}>&times;</span> 
          Tittle
        </div>
        <hr/>
        <div className="modal-body">
        Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </div>
        <hr/>
        <div className="modal-footer">
        <button className="button-secondary" onClick={() => {this.setState({display:!this.state.display})}}>
          Cerrar
        </button>
        <button className="button-primary" onClick={() => {this.setState({display:!this.state.display})}}>
          Aceptar
        </button>
        </div>
        </div> 
      </div>
    )
  }
  
}

export default Modal;
