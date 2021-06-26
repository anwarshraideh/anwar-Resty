import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    );
  }
}

const root = document.getElementById("root");

ReactDOM.render(<Main />, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
