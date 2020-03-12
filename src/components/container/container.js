import React from "react";
import classNames from "classnames";
import "./container.css";

const Container = ({ children, spaceBetween, center }) => (
  <div
    className={classNames(
      "container",
      { spaceBetween: spaceBetween },
      { center: center }
    )}
  >
    {children}
  </div>
);

export default Container;
