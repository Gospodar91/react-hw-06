import React, { Component } from "react";
import css from "./filter.module.css";
class Filter extends Component {
  state = { queryFilter: "" };
  nameFilter = async event => {
    await this.setState({
      queryFilter: event.target.value
    });
    await this.props.filterContact(this.state.queryFilter);
  };
  render() {
    console.log("this.props", this.props);

    return (
      <div className="filterDiv">
        <h2 className={css.filterTitle}>Find contact by name</h2>
        <input type="text" onChange={this.nameFilter} />
      </div>
    );
  }
}
export default Filter;
