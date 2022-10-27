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
       <table class="default">

<caption>Consumo de combustible de los autos a lo largo de las pruebas de manejo</caption>

<tr>

  <th scope="col">Componente</th>

  <th>Visualización</th>

</tr>



<tr>

  <th>Dropdowns</th>

  <td> 
    <DropDown
              color={'success'}
              options={this.state.options}
              tittle={'Dropdown'}
              />
              </td>



</tr>
<tr>

  <th>Buttons</th>

  <td>
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
              </td>



</tr>
<tr>

  <th>Badges</th>

  <td>
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
              text={' '} 
              />
              <Badge 
              color={'success'}
              text={' '} 
              />
              <Badge 
              color={'info'}
              text={' '} 
              />
              </td>



</tr>

<tr>

  <th>Alerts</th>

  <td>
  <Alert 
              color={'primary'}
              text={'Youre almost Done'} 
              />
              <Alert 
              color={'secondary'}
              text={'Youre almost Done'} 
              />
               <Alert 
              color={'warning'}
              text={'Youre almost Done'} 
              />
               <Alert 
              color={'danger'}
              text={'Youre almost Done'} 
              />
               <Alert 
              color={'success'}
              text={'Youre almost Done'} 
              />
               <Alert 
              color={'info'}
              text={'Youre almost Done'} 
              />
  </td>



</tr>

<tr>

  <th>Progress Bar</th>

  <td><ProgressBar 
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
              percentaje={'50'} /></td>



</tr>

<tr>

  <th>Input</th>

  <td> <div class="input-icons">
            <input class="form-control"
               placeholder="Ingrese su nombre"
               type="text"/>
            <i><span class="material-icons">remove_red_eye</span></i>  
        </div></td>
</tr>

<tr>

  <th>Modals</th>

  <td><Modals
                  display={true}
                  /></td>



</tr>

</table>
         {/*<div className="elements-list">
            
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



              
          <button className="button-info"
              onClick={() => {this.setState({openModal:!this.state.openModal})}}>
                Mostrar Modal
              </button>
                {this.state.openModal ? <Modals
                  display={true}
                  />: <></>}

            
*/}
                
             {/*<input
               name="nameCart"
               //component={FormInput}
               title="Propietario de Tarjeta"
               type="text"
               data='hello'
               placeholder="Ingrese su nombre"
               //validate={[required]}
              className="form-control"
              />
              
      */}
               

      

          </div>
    </div>
    );
  }
}

export default Home;
