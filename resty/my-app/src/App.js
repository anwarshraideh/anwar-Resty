import "./App.scss";
import React from "react";

import IF from "./IF";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Headers from "./Headers";
import History from "./History";

import SnippetHistory from "./SnippetHistory";
import Help from "./Help";
import { Route, Switch } from "react-router-dom";


import JSONPretty from "react-json-pretty";
import 'react-json-pretty/themes/monikai.css';

import "./JSON.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      count: 0,
      response: {},
      header: {},
      formMethod: "",
      formURL: "",
      History: []
    };
  }

  formHandleUpdate = (results, count, response, header, history) => {
    this.setState({ results, count, response, header, History: JSON.parse(history), });
  };

  refillTheForm = (method, url) => {
    this.setState({ formMethod: method, formURL: url });
  };

  render() {
    return (
      <React.Fragment>

        <main>
          <Switch>
            <Route exact path="/history">
              <History hist={this.state.History} refill={this.refillTheForm} />
            </Route>

            <Route exact path="/">
              <Form
                handler={this.formHandleUpdate}
                url={this.state.formURL}
                method={this.state.formMethod}
              ></Form>
              <SnippetHistory hist={this.state.History} refill={this.refillTheForm} />

              <Headers data={this.state.header}></Headers>

              <IF condition={Object.keys(this.state.response).length}>
                <JSONPretty
                  className="json"
                  data={this.state.response}
                ></JSONPretty>
              </IF>
            </Route>

            <Route exact path="/help">
              <Help />
            </Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;