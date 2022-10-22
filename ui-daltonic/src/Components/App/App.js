import React, { Component } from "react";
import './App.scss';
import { ThemeContext} from '../../context/theme-context';
import Home from "../Home";


function App(props) {
  const [theme, setTheme] = React.useState('dark');
  
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Home />
        hola
      </div>
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
