import Theme from '../Theme/Theme';
import NavBar from '../NavBar/NavBar';
import styles from './Header.module.scss';

function Header () {
  return (
    <header className={styles.headerBar}>
      <NavBar />
      <Theme />
    </header>
  );
}
export default Header;
