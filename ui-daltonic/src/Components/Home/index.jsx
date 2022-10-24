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

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };
  
 
    return (
      <div className="layout-wrapper">
      <div className="main-wrapper">
     
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
           <InputField
           color={'primary'}
           text={'1'}
           />
           <header className="header">
      <div className="header-content"> 
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'dark'}
            />
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          </div>
        </div>
      </div>
    </header>
    </div>
    );
}

export default Home;
