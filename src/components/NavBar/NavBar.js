import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar () {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navItemsContainer}>
        <li className={styles.navItem}>
          <NavLink to='/'>Search</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to='/saved'>Saved</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to='/folders'>Folders</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
