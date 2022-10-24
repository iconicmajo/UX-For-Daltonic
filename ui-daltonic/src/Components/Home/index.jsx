import React from "react";
import {ThemeContext} from "../../context/theme-context";
import Button from '../assets/Buttons';
import Alert from "../assets/Alerts";
import ProgressBar from "../assets/ProgessBar";
import Badge from "../assets/Badges";
import Modals from "../assets/Modals";
import DropDown from "../assets/Dropdowns";
import InputField from "../assets/Inputs";

import './styles.scss'  

function Home() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleThemeChange = (varTheme) => {
    const isCurrentNormal = theme === 'normal';
    if (theme !== 'normal'){
      console.log('entro al if')
      console.log(isCurrentNormal,)
      if (theme === 'protanopie') {
        console.log(theme)

      }
      if (theme === 'deuteranopie') {
        console.log(theme)
        
      }
      if (theme === 'tritanopie') {
        console.log(theme)
        
      }
    }
    setTheme(varTheme);
    localStorage.setItem('default-theme', varTheme );
  };
  
 
    return (
      <div className="layout-wrapper">
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
            <p>protanopia</p>
            <input
              className="toggle-btn__input"
              type="checkbox"
              label="protanopia"
              name="checkbox"
              onChange={() =>{handleThemeChange('dark')}}
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

      <Button 
          color={'secondary'}
          text={'The longest tittle i can imagine'}/>
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
