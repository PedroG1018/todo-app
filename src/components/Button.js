import React from 'react';
import style from '../styles/modules/button.module.scss';
import { getClasses } from '../utls/getClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

const Button = ({ children, type, variant, ...rest }) => (
  <button
    className={getClasses([
      style.button,
      style[`button--${buttonTypes[variant]}`],
    ])}
    type={type === 'submit' ? 'submit' : 'button'}
    {...rest}
  >
    {children}
  </button>
);

const SelectButton = ({ children, ...rest }) => (
  <select
    className={getClasses([style.button, style.button__select])}
    {...rest}
  >
    {children}
  </select>
);

export { SelectButton };
export default Button;
