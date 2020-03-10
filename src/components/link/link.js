import React from "react";
import classNames from 'classnames';
import { Link as RouterLink } from "react-router-dom";
import "./link.css";

const Link = ({ url, className, title }) => (
  <RouterLink to={url} className={classNames('link', className)}>
    {title}
  </RouterLink>
);

export default Link;
