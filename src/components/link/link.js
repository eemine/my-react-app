import React from "react";
import classNames from 'classnames';
import { Link as RouterLink } from "react-router-dom";
import "./link.css";

const Link = ({ url, className, text }) => (
  <RouterLink to={url} className={classNames('link', className)}>
    {text}
  </RouterLink>
);

export default Link;
