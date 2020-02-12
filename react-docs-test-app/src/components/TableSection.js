import React, { Component } from "react";

export default class TableSection extends Component {
  constructor(props) {
    super(props);
  }

  filterItems(items, onlyStocked, filterText) {
    let filteredItems = this.getOnlyStocked(items, onlyStocked);
    return this.filterBySearch(filteredItems, filterText);
  }

  getOnlyStocked(items, onlyStocked) {
    if (onlyStocked) {
      return items.filter(item => item.stocked);
    }
    return items;
  }

  filterBySearch(items, filterText) {
    return items.filter(item =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  render() {
    let items = this.filterItems(
      this.props.items,
      this.props.showOnlyStocked,
      this.props.searchText
    );

    return (
      <>
        <tr>
          <th>{this.props.name}</th>
        </tr>
        {items.map((item, index) => (
          <tr key={index}>
            <th>{item.name}</th>
            <th>{item.price}</th>
          </tr>
        ))}
      </>
    );
  }
}
