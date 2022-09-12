import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './styles.module.scss';

const BurgerButton = ({ onClick = () => {}, isOpen = false }) => {
  const btnClasses = classNames(classes.burger, { [classes.isOpen]: isOpen });
  return (
    <button className={btnClasses} onClick={onClick} type="button">
      <span className={classes.line} />
    </button>
  );
};

BurgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default BurgerButton;
