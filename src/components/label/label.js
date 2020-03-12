import React from "react";
import classNames from "classnames";
import "./label.css";

const Label = ({ className, title }) => (
  <label className={classNames("fromLabel", className)}>
    {title}
  </label>
);

export default Label;
