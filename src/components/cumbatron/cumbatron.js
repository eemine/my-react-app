import React from "react";
import "./cumbatron.css";
import Container from "../container";

const Cumbatron = () => (
  <div className="cumbatron">
    <Container>
        <div className="cumbatron_container">
            <div className="cumbatron_title">Welcome</div>
            <div className="cumbatron_description">Todays hot discussions go here</div>
        </div>
    </Container>
  </div>
);

export default Cumbatron;
