import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import css from './Header.module.css';

export const Header = ({ showModal }) => {
  return (
    <header>
      <div className={css.headerContainer}>
        <Link to={'/'} aria-current="page" className={css.brandLink}>
          <span className="brand">ReduxPractice</span>
        </Link>
        <nav className="nav">
          <NavLink to={'/'} aria-current="page" className={css.navLink}>
            Home
          </NavLink>
          <NavLink to={'/news'} className={css.navLink}>
            News
          </NavLink>
          <NavLink to={'todos'} className={css.navLink}>
            ToDo
          </NavLink>
          <NavLink to={'products'} className={css.navLink}>
            Products
          </NavLink>
          <NavLink to={'phonebook'} className={css.navLink}>
            Phonebook
          </NavLink>
        </nav>
        <button type="button" className={css.modalBtn} onClick={showModal}>
          Modal
        </button>
      </div>
    </header>
  );
};
