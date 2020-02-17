import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animateLogo: true
    };
    this.toggleLogo = this.toggleLogo.bind(this);
  }

  toggleLogo(event) {
    this.setState(prevState => ({
      animateLogo: !prevState.animateLogo
    }));
  }

  render() {
    const { animateLogo } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={animateLogo ? "App-logo" : "static-logo" } alt="logo" onClick={this.toggleLogo} />
          <h1>Welcome</h1>
          <button onClick={this.toggleLogo}>toggle logo</button>
        </header>
      </div>
    );
  }
}

export default App;
