import React from "react";
import {ThemeContext} from "../../context/theme-context";
import Button from '../assets/Buttons';
import Alert from "../assets/Alerts";
import ProgressBar from "../assets/ProgessBar";
import Badge from "../assets/Badges";
import Modals from "../assets/Modals";
import DropDown from "../assets/Dropdowns";
import InputField from "../assets/Inputs";
import icon from "../assets/images/coloradd.png"

import './styles.scss'  

function Home() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleThemeChange = (varTheme) => {
    //const isCurrentNormal = theme === 'normal';
    setTheme(varTheme);
    localStorage.setItem('default-theme', varTheme );
  };
  
 
    return (
      <div className="layout-wrapper">
        <div>
        <div className="menu">
          <div className="d-flex flex-column justify-content-around align-items-center w-100 h-100" style={{zIndex:'101'}}>
            <img src={icon} className='img-burger' alt="Img" />
            <div className="menu-options">
            <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
          <p>Normal</p>
            <input
              className="toggle-btn__input"
              type="checkbox"
              label="protanopia"
              name="checkbox"
              onChange={() =>{handleThemeChange('normal')}}
              checked={theme === 'normal'}
            />
            <p>Protanopia</p>
            <input
              className="toggle-btn__input"
              type="checkbox"
              label="protanopia"
              name="checkbox"
              onChange={() =>{handleThemeChange('protanopie')}}
              checked={theme === 'protanopie'}
            />
            <p>Deuteranopia</p>
            <input
              className="toggle-btn__input"
              type="checkbox"
              label="protanopia"
              name="checkbox"
              onChange={() =>{handleThemeChange('deuteranopie')}}
              checked={theme === 'deuteranopie'}
            />
            <p>Tritanopia</p>
            <input
              className="toggle-btn__input"
              type="checkbox"
              label="protanopia"
              name="checkbox"
              onChange={() =>{handleThemeChange('tritanopie')}}
              checked={theme === 'tritanopie'}
            />
          </div>
        </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
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
    );
}

export default Home;
