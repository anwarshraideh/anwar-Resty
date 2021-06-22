import React from "react";
import JSONPretty from "react-json-pretty";
import IF from './IF'


class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      localData: {},
    };
  }

  getDate = () => {
    let data = JSON.parse(localStorage.getItem("recentInput"));
    this.setState({ localData: data , flag: !this.state.flag});
  };


  render() {
    return (
      <>
      <button onClick={this.getDate}>Show History</button>
      <IF condition={this.state.flag}>
        <JSONPretty data={this.state.localData}></JSONPretty>
        </IF>
      </>
    );
  }
}

export default History;