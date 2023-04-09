import React from 'react';
import style from '../styles/modules/button.module.scss';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

const Button = ({ children, variant = 'primary' }) => (
  <button className={style.button} type="button">
    {children}
  </button>
);

export default Button;
