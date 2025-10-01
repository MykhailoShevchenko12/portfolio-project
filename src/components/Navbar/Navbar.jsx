import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div className={styles.header}>
        <p className={styles.logo}>ShevchenkoM</p>
        <ul className={styles.menu}>
          <NavLink
            to={'random-quotes'}
            className={({ isActive }) =>
              isActive ? styles.navLinkActive : styles.navLink
            }
          >
            Random Quote App
          </NavLink>
          <NavLink
            to={'book-library'}
            className={({ isActive }) =>
              isActive ? styles.navLinkActive : styles.navLink
            }
          >
            Book Library App
          </NavLink>
          <NavLink
            to={'docs'}
            className={({ isActive }) =>
              isActive ? styles.navLinkActive : styles.navLink
            }
          >
            Docs
          </NavLink>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? styles.navLinkActive : styles.navLink
            }
          >
            About me
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
