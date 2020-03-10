import React from "react";
import "./header.css";
import Container from "../container";
import fox from "./fox.png";
import Button from "../button";
import Link from "../link";

const Header = ({ url }) => (
  <header className="header">
    <Container>
      <div className="header_logo-container">
        <img className="header_logo" src={fox} alt="logo"></img>
        <Link url="/" title="Fox forum" className="header_link" />
      </div>
      <div className="header_items">
        <Link url="/signup" title="Sign up" />
        <Button url="/signin" title="Sign in" />
      </div>
    </Container>
  </header>
);

export default Header;
