import React, { Component } from "react";
import "./Bapp.css";
import Sickle from "./Sickle";
import App from "./App";
import Sickle_test from "./Sickle_test";

class Bramhand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Sickle_test />
        <App />
      </div>
    );
  }
}

export default Bramhand;
