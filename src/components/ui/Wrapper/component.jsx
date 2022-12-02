import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import classes from './styles.module.scss';

const Wrapper = ({ children, className }) => (
  <div className={cn(classes.wrapper, className)}>{children}</div>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Wrapper;
