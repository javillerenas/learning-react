import React from "react";
import Search from "./Search";
import data from "../data.js";
import TableSection from "./TableSection";

class CoolApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      showOnlyStocked: false,
      sportingGoods: this.separateData(data, "Sporting Goods"),
      electronics: this.separateData(data, 'Electronics')
    };

    this.handleOnlyStockedChange = this.handleOnlyStockedChange.bind(this);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleOnlyStockedChange(showOnlyStocked) {
    this.setState({ showOnlyStocked: showOnlyStocked });
  }

  handleSearchTextChange(text) {
    this.setState({ searchText: text });
  }

  separateData(data, name) {
    return data.filter(x => (x.category === name));
  }

  render() {
    return (
      <>
        <Search
          searchText={this.searchText}
          showOnlyStocked={this.showOnlyStocked}
          onSearchTextChange={this.handleSearchTextChange}
          onShowOnlyStockedChange={this.handleOnlyStockedChange}
        />
        <table className="table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <TableSection
              name="Sporting Goods"
              items={this.state.sportingGoods}
            />
            <TableSection
              name="Electronics"
              items={this.state.electronics}
            />
          </tbody>
        </table>
      </>
    );
  }
}

export default CoolApp;
