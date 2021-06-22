import "./App.scss";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Headers from "./Headers";
import History from "./History";


import JSONPretty from "react-json-pretty";

import "./JSON.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      count: 0,
      response: {},
      header: {},
    };
  }

  formHandleUpdate = (results, count, response, header) => {
    this.setState({ results, count, response, header });
  };

  render() {
    return (
      <React.Fragment>

        <Header />

        <History />

        <Form handler={this.formHandleUpdate}></Form>

        <Headers data={this.state.header}></Headers>

        <JSONPretty className="json" data={this.state.response}></JSONPretty>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;