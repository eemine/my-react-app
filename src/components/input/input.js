import React from "react";
import classNames from 'classnames';
import "./input.css";

const Input = ({className, type}) => <input className={classNames("formInput", className)} type={type} />;

export default Input;
