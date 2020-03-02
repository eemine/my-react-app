import React from "react";
import "./header.css";
import Container from "../container";
import fox from "./fox.png";
import Button from '../button';
import Link from "../link";

const Header = ({ url }) => (
  <header className="header">
    <Container>
      <div className="header_logo-container">
        <img className="header_logo" src={fox} alt="logo"></img>
        <Link to="/" text="Fox forum" className="header_link"/>
      </div>
      <div className="header_items">
        <Link to="/signup" text="Sign up" />
        <Button onClick="" text="Sign in" />
      </div>
    </Container>
  </header> 
);

export default Header;
