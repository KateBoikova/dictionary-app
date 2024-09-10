import { createContext, useCallback, useState } from 'react';
import CONSTANTS from '../constants';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const styleMap = {
    [CONSTANTS.THEMES.LIGHT]: {
      backgroundColor: '#e3ffdf',
    },
    [CONSTANTS.THEMES.DARK]: {
      backgroundColor: 'black',
    },
  };

  const toggleTheme = useCallback(() => {
    setDarkTheme(prevTheme => !prevTheme);
  });

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
