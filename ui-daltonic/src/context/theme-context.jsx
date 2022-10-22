import { createContext } from "react";

export const ThemeContext = createContext({
    theme: '',
    seeTheme: function (theme) {},
});

export default ThemeContext;