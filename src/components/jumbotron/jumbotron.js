import React from "react";
import Container from "../container";
import "./jumbotron.css";

const Jumbotron = ({ title, description }) => (
  <div className="jumbotron">
    <Container>
      <div className="jumbotron_container">
        <div key="" className="jumbotron_title">
          {title}
        </div>
        <div className="jumbotron_description">{description}</div>
      </div>
    </Container>
  </div>
);

export default Jumbotron;
