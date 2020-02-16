import React, { Component } from "react";
import PropTypes from "prop-types";
import Star from "./Star";

const wrapperStyle = {
  height: '25px'
}

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: 0
    };
    this.change = this.change.bind(this);
  }

  static propTypes = {
    totalStars: PropTypes.number,
    starsSelected: PropTypes.number
  };

  static defaultProps = {
    totalStars: 5,
    starsSelected: 0
  };

  change(starsSelected) {
    this.setState({ starsSelected });
  }

  componentWillMount() {
    const starsSelected = this.props.initialStarsSelected;
    if (starsSelected) {
      this.setState({ starsSelected });
    }
  }

  render() {
    const { totalStars } = this.props;
    const { starsSelected } = this.state;

    return (
      <div className="star-rating" style={wrapperStyle}>
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => this.change(i + 1)}
          />
        ))}
      </div>
    );
  }
}
