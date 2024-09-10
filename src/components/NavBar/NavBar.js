import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar () {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navItemsContainer}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/quizzes'>Quizzes</NavLink>
        </li>
        <li>
          <NavLink to='/saved'>Saved</NavLink>
        </li>
        <li>
          <NavLink to='/folders'>Folders</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
