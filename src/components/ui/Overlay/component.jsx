import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './styles.module.scss';

const Overlay = ({ isVisible, onClick }) => {
  const overlayClasses = classNames(classes.overlay, { [classes.isVisible]: isVisible });

  return (
    <div className={overlayClasses} onClick={onClick} onKeyDown={onClick} role="presentation" />
  );
};

Overlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Overlay;
