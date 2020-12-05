import React, { Component } from 'react';

export default class ParkSearch extends Component {
  state = {};

  render() {
    return (
      <div className="park-search-page">
        <h1>ParkSearch</h1>
        <div className="search-bar">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
}
