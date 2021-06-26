import React from "react";
import "./Headers.scss";
import IF from "./IF";

class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
         <IF condition={this.props.data.headers}>
          <p id="headers"> Header Request : {this.props.data.headers}</p>
        </IF>
      
      </React.Fragment>
    );
  }
}

export default Results;