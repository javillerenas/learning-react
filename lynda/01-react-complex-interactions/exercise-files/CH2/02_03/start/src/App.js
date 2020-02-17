import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
    }
    this.toggleLogo = this.toggleLogo.bind(this);
  }

  toggleLogo(event) {
    this.setState((prevState) => ({
      toggleLogo: !prevState.toggleLogo
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} 
            className={this.state.toggleLogo ? 'static-logo' : 'animated-logo'} 
            alt="logo"
            onClick={this.toggleLogo}
          />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
