import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const Button = ({ type, variant = 'filled', children, ...props }) => {
  const classes = cn({
    [styles.button]: true,
    [styles.outlined]: variant === 'outlined',
    [styles.filled]: variant === 'filled',
  });

  if (type === 'download') {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  const buttonType = type === 'button' || type === 'submit' ? type : 'button';

  /* eslint-disable react/button-has-type */
  return (
    <button className={classes} type={buttonType} {...props}>
      {children}
    </button>
  );
  /* eslint-enable react/button-has-type */
};
export default Button;
