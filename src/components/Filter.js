import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{this.props.count} products found</div>
        <div className="col-md-4">
          <label>
            Order by
            <select
              className="form-control"
              value={this.props.sort}
              onChange={this.props.handleChangeSort}
            >
              <option value="">Select</option>
              <option value="lowest">lowest to highest</option>
              <option value="highest">highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label>
            Filter size
            <select
              className="form-control"
              value={this.props.size}
              onChange={this.props.handleChangeSize}
            >
              <option value="">ALL</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
