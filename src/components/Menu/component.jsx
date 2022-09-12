/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './styles.module.scss';

const Menu = ({ items }) => (
  <nav className={classes.menu} role="navigation">
    <ul className={classes.list}>
      {items.map((item) => (
        <li className={classes.listItem} key={`${item.id}_li`}>
          <NavLink
            to={item.route}
            key={item.id}
            className={({ isActive }) => classNames(classes.link, { [classes.isActive]: isActive })}
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

Menu.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      route: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default Menu;
