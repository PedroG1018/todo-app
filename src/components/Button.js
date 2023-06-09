import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utls/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

const Button = ({ children, type, variant = 'primary', ...rest }) => (
  <button
    className={getClasses([
      styles.button,
      styles[`button--${buttonTypes[variant]}`],
    ])}
    type={type === 'submit' ? 'submit' : 'button'}
    {...rest}
  >
    {children}
  </button>
);

const SelectButton = ({ children, id, ...rest }) => (
  <select
    id={id}
    className={getClasses([styles.button, styles.button__select])}
    {...rest}
  >
    {children}
  </select>
);

export { SelectButton };
export default Button;
