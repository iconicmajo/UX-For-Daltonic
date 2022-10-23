import React from "react";
import {ThemeContext} from "../../context/theme-context";
import Button from '../assets/Buttons';
import Alert from "../assets/Alerts";
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
      <header className="header">
      <div className="header-content">
        <a href="/" className="logo-section">
          <span>Demo Library 4 Daltonic People</span>
          </a>
          <Button 
          color={'secondary'}
          text={'The longest tittle i can imagine'}/>
          <Alert 
          color={'primary'}
          text={'THIS IS AN ALERT'} />
        
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
    </div>
    );
}

export default Home;
