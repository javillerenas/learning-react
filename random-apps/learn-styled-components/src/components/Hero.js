import React, { Component } from "react";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
    };
  }
  render() {
    return (
      <div>
        <Title>Hello Styled Components</Title>
      </div>
    );
  }
}

export default Hero;
