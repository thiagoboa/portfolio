import React, { Component } from "react";
import logo from "./logo.svg";
import "./assets/styles/main.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="stage">
          <div className="stage--block stage--block__black">
            <h1 className="hero hero__black">thiago</h1>
            <h1 className="hero hero__black">boa</h1>
          </div>
          <div className="stage--block stage--block__white">
            <h2 className="hero hero__white">design</h2>
            <h2 className="hero hero__white">technologist</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
