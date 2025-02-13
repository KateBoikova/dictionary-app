import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar () {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav className={styles.navBar}>
      <ul className={styles.navItemsContainer}>
        <li className={styles.navItem}>
          <NavLink
            to='/'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Search
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to='/saved'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Saved
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to='/folders'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Folders
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
