import React from "react";
import "./footer.css";
import Container from "../container";
import Link from "../link";

const Footer = () => (
  <footer className="footer">
    <Container>
        <div className="footer_text">Copyright &copy; 2020 Fox forum</div>
        <div className="footer_items">
          <Link to="/about" text="About" />
          <Link to="/contact" text="Contact" />
        </div>
    </Container>
  </footer>
);

export default Footer;
