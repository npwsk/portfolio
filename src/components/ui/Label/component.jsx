import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Label = ({ name, color }) => (
  <span className={styles.label} style={{ backgroundColor: color }}>
    {name}
  </span>
);

Label.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Label;
