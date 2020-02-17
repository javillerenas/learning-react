import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 30%;
  max-width: 400px;
  margin: 10px;
  background-color: white;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-right: 5px;
`;

const CardPrice = styled.p`
  font-size: 1rem;
  color: red;
`;
const CardDescription = styled.p`
  font-size: 0.8rem;
  padding: 0 10px 10px;
`;

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.cards.map(card => (
          <Card key={card.id}>
            <CardImage src="/juice.jpg"></CardImage>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardPrice>$24.99</CardPrice>
            </CardHeader>
            <CardDescription>
              Quis magna pariatur consectetur aute deserunt ex magna nulla. Est
              Lorem cillum reprehenderit labore nostrud velit dolore nisi
            </CardDescription>
          </Card>
        ))}
      </>
    );
  }
}

export default Cards;
