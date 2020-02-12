import React, { Component } from "react";

export default class TableSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <tr>
          <th>{this.props.name}</th>
        </tr>
        {this.props.items.map((item, index) => (
          <tr key={index}>
            <th>{item.name}</th>
            <th>{item.price}</th>
          </tr>
        ))}
      </>
    );
  }
}
