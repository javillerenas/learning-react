import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Card from "./components/Card";

import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
const pulseAnimation = keyframes`${pulse}`

const Logo = styled.img`
  animation: 1s ${pulseAnimation};
  height: 80px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animateLogo: true,
      cards: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
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
          <Logo
            src={logo}
            className={animateLogo ? "App-logo" : "static-logo"}
            alt="logo"
            onClick={this.toggleLogo}
          />
          <h1 className="animated infinite pulse">Welcome</h1>
        </header>
        <div className="Grid">
          {this.state.cards.map(card => (
            <Card duration={150} key={card.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
