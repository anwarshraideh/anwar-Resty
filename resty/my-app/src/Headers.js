import React from "react";
import "./Headers.scss"


class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p id="headers"> Header:  {this.props.data.headers}</p>

      
      </React.Fragment>
    );
  }
}

export default Results;