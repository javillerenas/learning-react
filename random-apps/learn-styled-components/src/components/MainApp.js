import React, { Component } from "react";
import styled from "styled-components";
import Cards from "./Cards";

const Header = styled.div`
  height: 150px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
`;

const Logo = styled.img`
  height: 30%;
`;

const AppTitle = styled.h1`
  font-size: 2rem;
`;

const Body = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5%;
`;

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
    };
  }
  render() {
    return (
      <div>
        <Header>
          <Logo src="/logo192.png" />
          <AppTitle>Hello</AppTitle>
        </Header>
        <Body>
          <Cards cards={this.state.cards} />
        </Body>
      </div>
    );
  }
}

export default MainApp;
