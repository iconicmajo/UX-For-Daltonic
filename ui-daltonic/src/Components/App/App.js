import React from "react";
import './App.scss';
import { ThemeContext} from '../../context/theme-context';
import Home from "../Home";


function App() {
  const [theme, setTheme] = React.useState('normal');
  
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Home />
      </div>
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
