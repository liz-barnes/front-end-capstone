import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    searchInput: '',
  };

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  }

  keyEvent = (e) => {
    // $('.').on('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.warn('key was pressed');
      console.warn(this.state.searchInput);
    }
    // });
  };

  render() {
    return (
      <div className="search-bar">
        <form className="form-inline my-2 my-lg-0">
          <input className="search-input form-control" type="text" placeholder="search" aria-label="Search" onKeyPress={this.keyEvent} value={this.state.searchInput} onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}
