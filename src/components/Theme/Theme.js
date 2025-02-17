import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import * as motion from 'motion/react-client';
import Moon from './Moon';
import Sun from './Sun';
import styles from './Theme.module.scss';

function Theme () {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.themeToggle}>
      <motion.button
        whileHover={{ scale: 1.2, rotate: 360 }}
        onClick={toggleTheme}
        className={styles.btnThemeToggle}
      >
        {darkTheme ? <Sun /> : <Moon />}
      </motion.button>
    </div>
  );
}
export default Theme;
