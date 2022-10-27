import React,{ Component }  from "react";
import '../assets/Buttons';
import Alert from "../assets/Alerts";
import ProgressBar from "../assets/ProgessBar";
import Badge from "../assets/Badges";
import Modals from "../assets/Modals";
import DropDown from "../assets/Dropdowns";
import Colormenu from "../ColorMenu";
import '../assets/Inputs';

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
        <div className="banner">
        </div>
        <p className="title">
          Bienvenidos al Blog
          </p>
          <div className="article">

          </div>
          
            <button className="button-secondary">
              Continuar leyendo
            </button>
            <div className="section-comments">
              Aqui usar badges indicando cuantos coments hay
            </div>
          <div className="comments">
            <button className="button-primary">
              Mostrar más
            </button>
          </div>
          <div className="form-coment">
            <input placeholder="Nombre"
            className="fomr-group"/>
            <DropDown 
            color={'warning'}
            text={'Ocupación'}
            options={this.state.options}/> {/**Aqui va a ser un dropdown
             * de seleccionar ocupacion o algo 
             */}
             <ProgressBar
             color={'success'}
             text={"Completa la Información"}
             percentaje={'25'} />
            <button className="button-success">
              Listo!
            </button>
          </div>


          </div>
    </div>
    );
  }
}

export default Home;
