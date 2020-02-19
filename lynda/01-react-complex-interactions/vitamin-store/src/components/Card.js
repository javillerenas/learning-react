import React from "react";
import "./Card.css";

const Card = () => (
  <div className="card">
    <img className="card-image" src="juice.jpg" alt="juice image"></img>
    <div className="container">
      <h3>
        Vitamin Juice <span className="price">$24.99</span>
      </h3>
      <p>
        Beed a jum on your vitamins while drinking? Tired of popping pills?
        drink our vitaming enhanced juice. Available in several flavors.
      </p>
    </div>
  </div>
);

export default Card;
