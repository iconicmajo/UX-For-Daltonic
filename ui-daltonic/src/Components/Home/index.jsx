import React,{ Component }  from "react";
import {ThemeContext} from "../../context/theme-context";
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
      blogs: []
    }
  }

  render() {
    return (
      <div className="layout-wrapper">
        <Colormenu />
        <div className="body">

            <button className="button-success">
                <a href="https://www.google.com">
                  Google it
                </a>
              </button>

            <button className="button-danger"
              onClick={() => {this.setState({openAlert:!this.state.openAlert})}}>
                {this.state.openAlert ? 'Ocultar Alerta':'Mostrar Alerta'}
              </button>
            {this.state.openAlert ?  <Alert 
              color={'secondary'}
              text={'THIS IS AN ALERT'} />: <></>}
         
          <ProgressBar 
              color={'primary'}
              text={'Youre almost Done'} 
              percentaje={'50'} />
              <br/>

          <Badge 
              color={'primary'}
              text={'1'} 
              />
              <button className="button-info"
              onClick={() => {this.setState({openModal:true})}}>
                Mostrar Modal
              </button>
            {this.state.openModal ? <Modals
              color={'primary'}
              text={'1'}
              />: <></>}
              <DropDown
              color={'primary'}
              text={'1'} 
              />
             
          </div>
    </div>
    );
  }
}

export default Home;
