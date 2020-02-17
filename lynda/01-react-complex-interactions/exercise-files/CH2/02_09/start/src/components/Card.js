import React from 'react';
import './Card.css';

const Card = (props) => (
  <div 
    className={props.card.animation}
    onClick={() => props.clickCard(props.card)}
    >
    <img src="juice.jpg" alt="Vitamin Juice" className="card-image" />
    <div className="container">
      <h3>Vitamin Juice <span className="price">$24.99</span></h3>
      <p>Need a jum on your vitamins while drinking? Tired of popping pills? 
      Drink our vitamin enhanced juice, available in several flavours.</p>
    </div>
  </div>
);

export default Card;
