import { HiOutlineMenu } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="header">
        <p className="header-logo">ShevchenkoM</p>
        <nav className={`header-nav ${openMenu ? 'active' : ''}`}>
          <ul className="header-nav-list">
            <NavLink
              to={'random-quotes'}
              className={({ isActive }) =>
                isActive ? 'header-nav-link active' : 'header-nav-link'
              }
            >
              Random Quote
            </NavLink>
            <NavLink
              to={'book-library'}
              className={({ isActive }) =>
                isActive ? 'header-nav-link active' : 'header-nav-link'
              }
            >
              Book Library
            </NavLink>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive ? 'header-nav-link active' : 'header-nav-link'
              }
            >
              About me
            </NavLink>
          </ul>
        </nav>
        <button
          className="navbar-menu-btn"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <HiOutlineMenu />
        </button>
      </div>
    </>
  );
};

export default Navbar;
