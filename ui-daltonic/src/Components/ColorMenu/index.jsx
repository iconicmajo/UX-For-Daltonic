import React from "react";
import {ThemeContext} from "../../context/theme-context";
import icon from "../assets/images/coloradd.png"

import './styles.scss'  

function Colormenu() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleThemeChange = (varTheme) => {
    setTheme(varTheme);
    localStorage.setItem('default-theme', varTheme );
  };

    return (
        <div className="menu">
            <div className="d-flex flex-column justify-content-around align-items-center w-100 h-100" style={{zIndex:'101'}}>
                <img src={icon} className='img-burger' alt="Img" />
                <div className="menu-options">
                <div className="toggle-btn-section">
            <div className={`toggle-checkbox`}>
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
    );
}

export default Colormenu;
