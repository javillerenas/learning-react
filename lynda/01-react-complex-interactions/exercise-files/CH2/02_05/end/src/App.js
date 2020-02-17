import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Card from './components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
      cards: [ 
        { id: 0,
          animation: 'card'
        }, 
        { id: 1,
          animation: 'card'
        }, 
        { id: 2,
          animation: 'card'
        },
        { id: 3,
          animation: 'card'
        }, 
        { id: 4,
          animation: 'card'
        }, 
        { id: 5,
          animation: 'card'
        }],
    }
    this.toggleLogo = this.toggleLogo.bind(this);
    this.clickCard = this.clickCard.bind(this);
  }

  toggleLogo(event) {
    this.setState((prevState) => ({
      toggleLogo: !prevState.toggleLogo
    }));
  }

  clickCard(card) {
    let cards = this.state.cards;
    cards[card.id].animation = 'card animated zoomOut';
    console.log(cards);

    this.setState({
      cards,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} 
            className={this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'} 
            alt="logo"
            onMouseEnter={this.toggleLogo}
            onMouseLeave={this.toggleLogo}
          />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Grid">
          {
            this.state.cards.map((card) => (
              <Card duration={150} key={card.id} card={card} clickCard={this.clickCard}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
