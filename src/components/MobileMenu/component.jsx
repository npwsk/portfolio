/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import classes from './styles.module.scss';

const MobileMenu = ({ items, closeMenu }) => (
  <nav className={classes.mobileMenu} role="navigation">
    <ul className={classes.menuList}>
      {items.map((item) => (
        <li key={`${item.id}_li_mobile`}>
          <NavLink
            to={item.route}
            key={`${item.id}_mobile`}
            onClick={closeMenu}
            className={({ isActive }) => classNames(classes.link, { [classes.isActive]: isActive })}
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

MobileMenu.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      route: PropTypes.string,
      text: PropTypes.string,
    }).isRequired
  ),
  closeMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
