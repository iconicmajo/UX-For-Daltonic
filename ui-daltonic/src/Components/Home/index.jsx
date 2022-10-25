import React,{ Component }  from "react";
import Button from '../assets/Buttons';
import Alert from "../assets/Alerts";
import ProgressBar from "../assets/ProgessBar";
import Badge from "../assets/Badges";
import Modals from "../assets/Modals";
import DropDown from "../assets/Dropdowns";
import FormInput from "../assets/Inputs";
import Colormenu from "../ColorMenu";

import './styles.scss'  

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      options: [
        {
          value:1,
          label:1
        },
        {
          value:2,
          label:2
        },

      ]
    }
  }


  render() {
    return (
      <div className="layout-wrapper">
        <Colormenu />
        <div className="body">
        <div className="elements-list">
            <button className="button-primary">
                <a href="https://www.google.com">
                  Google it
                </a>
              </button>
              <button className="button-secondary">
                <a href="https://www.google.com">
                  Google it
                </a>
              </button>
              <button className="button-warning">
                <a href="https://www.google.com">
                  Google it
                </a>
              </button>
              <button className="button-danger">
                <a href="https://www.google.com">
                  Google it
                </a>
              </button>
              <button className="button-success">
                <a href="https://www.google.com">
                  Google it
                </a>
              </button>
              <button className="button-info">
                <a href="https://www.google.com">
                  Google it
                </a>
              </button>
            </div>
            
            <div className="elements-list">
            <button className="button-primary"onClick={() => {this.setState({openAlert:!this.state.openAlert})}}>
                {this.state.openAlert ? 'Ocultar Alerta':'Mostrar Alerta'}
              </button>
              <button className="button-secondary"onClick={() => {this.setState({openAlert:!this.state.openAlert})}}>
                {this.state.openAlert ? 'Ocultar Alerta':'Mostrar Alerta'}
              </button>
              <button className="button-warning"onClick={() => {this.setState({openAlert:!this.state.openAlert})}}>
                {this.state.openAlert ? 'Ocultar Alerta':'Mostrar Alerta'}
              </button>
              <button className="button-danger"onClick={() => {this.setState({openAlert:!this.state.openAlert})}}>
                {this.state.openAlert ? 'Ocultar Alerta':'Mostrar Alerta'}
              </button>
              <button className="button-success"onClick={() => {this.setState({openAlert:!this.state.openAlert})}}>
                {this.state.openAlert ? 'Ocultar Alerta':'Mostrar Alerta'}
              </button>
              <button className="button-info"onClick={() => {this.setState({openAlert:!this.state.openAlert})}}>
                {this.state.openAlert ? 'Ocultar Alerta':'Mostrar Alerta'}
              </button>
            </div>
            
            {this.state.openAlert ?  <Alert 
              color={'success'}
              text={'THIS IS AN ALERT'} />: <></>}
         
         <div className="elements-list">
         <ProgressBar 
              color={'primary'}
              text={'Youre almost Done'} 
              percentaje={'50'} />
              <ProgressBar 
              color={'secondary'}
              text={'Youre almost Done'} 
              percentaje={'50'} />
               <ProgressBar 
              color={'warning'}
              text={'Youre almost Done'} 
              percentaje={'50'} />
               <ProgressBar 
              color={'danger'}
              text={'Youre almost Done'} 
              percentaje={'50'} />
               <ProgressBar 
              color={'success'}
              text={'Youre almost Done'} 
              percentaje={'50'} />
               <ProgressBar 
              color={'info'}
              text={'Youre almost Done'} 
              percentaje={'50'} />
         </div>
         <div className="elements-list">
          <Badge 
              color={'primary'}
              text={'1'} 
              />
              <Badge 
              color={'secondary'}
              text={'1'} 
              />
              <Badge 
              color={'warning'}
              text={'1'} 
              />
              <Badge 
              color={'danger'}
              text={'1'} 
              />
              <Badge 
              color={'success'}
              text={'1'} 
              />
              <Badge 
              color={'info'}
              text={'1'} 
              />
          </div>

             

              <DropDown
              color={'success'}
              options={this.state.options}
              tittle={'Dropdown'}
              />

             { <input
               name="nameCart"
               component={FormInput}
               title="Propietario de Tarjeta"
               type="text"
               data='hello'
               placeholder="Ingrese su nombre"
               //validate={[required]}
                className="form-control"/>}
          
          </div>
    </div>
    );
  }
}

export default Home;
