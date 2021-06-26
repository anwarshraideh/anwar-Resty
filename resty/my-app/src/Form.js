import React from "react";
import "./Form.scss";
import Loader from "./Loader";
import IF from "./IF";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RESTurl: "",
      Method: "",
      History: [],
      Body: {},
      results: [],
      flag: false,
    };
  }

  handelSubmit = async (e) => {
    e.preventDefault();
    setTimeout(async () => {
      const body = e.target.body.value;

      let FromUser =
        this.state.Method === "POST" || this.state.Method === "PUT"
          ? await fetch(this.state.RESTurl || this.props.url, {
              method: this.state.Method || this.props.method,
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: body,
            })
          : await fetch(this.state.RESTurl || this.props.url);

      let data = await FromUser.json();
      let results = data.results;
      let count = data.count;
      
      
      if (data) {
        this.setState({ results: data, Body: body, flag: !this.state.flag });
        const { Method, RESTurl } = this.state;

        if (localStorage.getItem("recentInput")) {
          let newData = JSON.parse(localStorage.getItem("recentInput"));

          let found = newData.find((obj) => {
            return obj.Method === Method && obj.RESTurl === RESTurl;
          });

          if (!found) {
            newData.push({ Method, RESTurl, data});
            localStorage.setItem("recentInput", JSON.stringify(newData));
          }
        } else {
          localStorage.setItem(
            "recentInput",
            JSON.stringify([{ Method, RESTurl, data }])
          );
        }
      }
      // this.setState({ History: JSON.parse(localStorage.getItem("recentInput")) });

      let inLocal = localStorage.getItem("recentInput")

      this.props.handler(results, count, data, FromUser, inLocal);
    }, 2000);
  };

  handleMethod = (e) => {
    e.preventDefault();
    let valueMethod = e.target.innerHTML;
    const UserInput = { ...this.state, Method: valueMethod };
    this.setState(UserInput);
  };

  handleURL = (e) => {
    e.preventDefault();
    let valueURL = e.target.value;
    const UserInput = { ...this.state, RESTurl: valueURL };
    this.setState(UserInput);
  };

  handleReRequest = () => {
    if (this.props.requestHappend)
      this.setState({ Method: this.props.method, RESTurl: this.props.url });
  };

  toggle = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    return (
      <React.Fragment>
        <form className="from" onSubmit={this.handelSubmit}>
          <input
            type="text"
            onChange={this.handleURL}
            placeholder="Enter URL"
          />

          <textarea name="body" placeholder="Body Data must be an object" />

          <button onClick={this.toggle} className="go"> GO !! </button>
          <IF condition={this.state.flag}>
            <Loader></Loader>
          </IF>

          <div className="buttons">
            <button
              onClick={this.handleMethod}
              className="get"
              value={this.props.method}
            >
              GET
            </button>

            <button
              onClick={this.handleMethod}
              className="post"
              value={this.props.method}
            >
              POST
            </button>

            <button
              onClick={this.handleMethod}
              className="put"
              value={this.props.method}
            >
              PUT
            </button>

            <button
              onClick={this.handleMethod}
              className="delete"
              value={this.props.method}
            >
              DELETE
            </button>
          </div>
        </form>

        <div className="result">
          <h3>Current Search </h3>
          <p> URL: {this.state.RESTurl || this.props.url} </p>
          <p> Method: {this.state.Method || this.props.method} </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;