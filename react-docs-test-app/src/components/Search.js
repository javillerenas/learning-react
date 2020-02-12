import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    if (target.name === 'searchText') {
      this.props.onSearchTextChange(value)
    } else {
      this.props.onShowOnlyStockedChange(value)
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="searchText"
          value={this.props.searchText}
          onChange={this.handleChange}
          placeholder="Search"
        ></input>
        <br></br>
        <label>
          <input
            type="checkbox"
            name="onlyStockedProducts"
            checked={this.props.onlyStockedProducts}
            onChange={this.handleChange}
          ></input>
          Only show products in stock
        </label>
      </form>
    );
  }
}

export default Search;
