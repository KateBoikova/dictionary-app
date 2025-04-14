import { createContext, useCallback, useState } from 'react';
import CONSTANTS from '../constants';

type ThemeContextType = {
  darkTheme: boolean;
  toggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext<null | ThemeContextType>(null);

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
  }, [setDarkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
