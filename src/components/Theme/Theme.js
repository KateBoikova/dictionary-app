import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import CONSTANTS from '../../constants';
import Moon from './Moon';
import Sun from './Sun';
import styles from './Theme.module.scss';

function Theme () {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.themeToggle}>
      {darkTheme ? <Sun /> : <Moon />}
      <input
        type='checkbox'
        onChange={toggleTheme}
        className={styles.btnThemeToggle}
      ></input>
    </div>
  );
}
export default Theme;
