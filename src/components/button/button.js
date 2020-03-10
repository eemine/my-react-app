import React from "react";
import classNames from 'classnames';
import "./button.css";

const Button = ({ onClick, className, title }) => (
  <button onClick={onClick} className={classNames('button', className)}>
    {title}
  </button>
);

export default Button;
