import React from "react";
import {ThemeContext} from "../../context/theme-context";
import Button from '../assets/Buttons';
import Alert from "../assets/Alerts";
import ProgressBar from "../assets/ProgessBar";
import Badge from "../assets/Badges";
import Modals from "../assets/Modals";
import DropDown from "../assets/Dropdowns";
import InputField from "../assets/Inputs";
import Colormenu from "../ColorMenu";

import './styles.scss'  

function Home() {
    return (
      <div className="layout-wrapper">
        <Colormenu />
        <div className="body">
            <Button 
              color={'secondary'}
              text={'The longest tittle i can imagine'}
              onClick={console.log('el boton button')}/>
          <button className="primary" enabled='true'
              onClick={() => {console.log('click button')}}
              >hola
          </button>
          <Alert 
              color={'primary'}
              text={'THIS IS AN ALERT'} />
          <ProgressBar 
              color={'primary'}
              text={'Youre almost Done'} 
              percentaje={'50'} />
          <Badge 
              color={'primary'}
              text={'1'} 
              />
              <button>
                Displau modal
              </button>
            <Modals
              color={'primary'}
              text={'1'}
              />
              <DropDown
              color={'primary'}
              text={'1'} 
              />
          </div>
    </div>
    );
}

export default Home;
