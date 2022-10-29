import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  function openMenu() {
    document.body.classList += ' menu--open';
  }

  function closeMenu() {
    document.body.classList.remove('menu--open');
  }

  return (
    <nav>
        <div className="nav__container">
            <Link to='/'>
                <h3 className='logo'>Movies</h3>
            </Link>
            <ul className="nav__links">
                <li className="nav__list">
                    <Link to="/" className='nav__link'>Home</Link>
                </li>
                <li className="nav__list">
                    <Link to="/search/:keyword" className='nav__link'>Search</Link>
                </li>
                <li className="nav__list">
                    <Link className='nav__link' onClick={() => window.alert("This feature has not been implemented.")}>Contact</Link>
                </li>
                <button className='btn__menu' onClick={openMenu}>
                    <FontAwesomeIcon icon="bars" />
                </button>
            </ul>
            <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                    <FontAwesomeIcon icon="times" />
                </button>
                <ul className="menu__links">
                    <li className="menu__list">
                        <Link to="/" onClick={closeMenu} className='menu__link'>Home</Link>
                    </li>
                    <li className="menu__list">
                        <Link to="/search/:keyword" onClick={closeMenu} className='menu__link'>Search</Link>
                    </li>
                    <li className="menu__list">
                        <Link className='menu__link' onClick={() => window.alert("This feature has not been implemented.")}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Nav;