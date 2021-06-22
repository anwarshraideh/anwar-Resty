import React from "react";
import "./Form.scss";
import Loader from "./Loader";
import IF from "./IF";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      Method: "",
      Body: {},
      results: [],
      flag: false,
    };
  }

  handleMethod = (event) => {
    event.preventDefault();
    let valueMethod = event.target.value;
    const UserInput = { ...this.state, Method: valueMethod };
    this.setState(UserInput);
  };

  handelSubmit = async (e) => {
    e.preventDefault();
    setTimeout(async () => {
      const body = e.target.body.value;

      let FromUser =
        this.state.Method === "POST" || this.state.Method === "PUT"
          ? await fetch(this.state.url, {
              method: this.state.Method,
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: body,
            })
          : await fetch(this.state.url);

      let data = await FromUser.json();

      this.setState({ results: data, Body: body, flag: !this.state.flag});
      let results = FromUser.results;
      let count = FromUser.count;

      if (data) {
        const { Method, url } = this.state;
        if (localStorage.getItem("recentInput")) {
          let newData = JSON.parse(localStorage.getItem("recentInput"));

          let found = newData.find((obj) => {
            return obj.Method === Method && obj.url === url;
          });

          if (!found) {
            newData.push({ Method, url });
            localStorage.setItem("recentInput", JSON.stringify(newData));
          }
        } else {
          localStorage.setItem(
            "recentInput",
            JSON.stringify([{ Method, url }])
          );
        }
      }

      this.props.handler(results, count, data, FromUser);
    }, 2000);
  };

  handleURL = (event) => {
    let valueURL = event.target.value;
    const UserInput = { ...this.state, url: valueURL };
    this.setState(UserInput);
  };

  toggle = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    return (
      <React.Fragment>
        <form className="from" onSubmit={this.handelSubmit}>
          <input type="text" onChange={this.handleURL} placeholder="Enter URL HERE" />

          <textarea name="body" placeholder="Body Data must be an object"/>

          <button onClick={this.toggle}> GO !! </button>
          <IF condition={this.state.flag}>
            <Loader></Loader>
          </IF>

          <div className="buttons">
            <button onClick={this.handleMethod} className="get" value="GET">
              GET
            </button>

            <button onClick={this.handleMethod} className="post" value="POST">
              POST
            </button>

            <button onClick={this.handleMethod} className="put" value="PUT">
              PUT
            </button>

            <button
              onClick={this.handleMethod}
              className="delete"
              value="DELETE"
            >
              DELETE
            </button>
          </div>
        </form>

        <div className="result">
          <p> URL: {this.state.url} </p>
          <p> METHOD: {this.state.Method} </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;