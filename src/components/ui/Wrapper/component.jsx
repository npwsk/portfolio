import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.module.scss';

const Wrapper = ({ children }) => <div className={classes.wrapper}>{children}</div>;

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Wrapper;
