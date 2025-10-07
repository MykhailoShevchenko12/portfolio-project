import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar-header">
        <p className="navbar-logo">ShevchenkoM</p>
        <ul className="navbar-menu">
          <NavLink
            to={'random-quotes'}
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Random Quote
          </NavLink>
          <NavLink
            to={'book-library'}
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Book Library
          </NavLink>
          <NavLink
            to={'docs'}
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
            }
          >
            Docs
          </NavLink>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? 'nav-link-active' : 'nav-link'
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
