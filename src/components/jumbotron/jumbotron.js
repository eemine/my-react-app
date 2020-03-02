import React from "react";
import "./jumbotron.css";

class Jumbotron extends React.Component() {
  render() {
    return (
      <div className="jumbotron">
        {this.props.jumbotron &&
          this.props.jumbotron.map(item => {
            <div className="jumbotron_container">
              <div key="" className="jumbotron_title">{item.name}</div>;
              <div className="jumbotron_description">{item.description}</div>;
            </div>;
          })}
      </div>
    );
  }
}

export default Jumbotron;
