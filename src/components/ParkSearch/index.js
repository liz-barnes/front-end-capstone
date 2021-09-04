import React, { Component } from 'react';
import AdventureCard from '../Cards/AdventureCard';
import Search from '../Search';

export default class ParkSearch extends Component {
  state = {
    searchResult: [],
    searchInput: '',
    searchSubmit: null,
    suggestParks: true,
  }

  handleSearchInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const { searchInput } = this.state;
    const searchResult = this.props.parks.filter((park) => park.name.toLowerCase().includes(searchInput.toLowerCase()));
    this.setState({ searchSubmit: true });
    this.setState({ searchResult });
    this.setState({ suggestParks: false });
    this.showParkResults();
  };

  showParkResults = () => {
    const { searchSubmit, searchResult } = this.state;
    if (searchSubmit === true && searchResult.length) {
      searchResult.map((park) => <AdventureCard key={park.id} park={park} />);
    } else {
      <h1>No Parks Found</h1>;
    }
  }

  render() {
    const {
      searchResult, searchSubmit, suggestParks,
    } = this.state;
    const { suggestedParks } = this.props;
    return (
      <div className="park-search-page">
        <div className="page-banner">
          <h1 className="banner-heading" >National Parks</h1>
        </div>
        <Search handleSearchInput={(e) => this.handleSearchInput(e)} handleSearchSubmit={(e) => this.handleSearchSubmit(e)} value={this.state.searchInput}/>
        <div className="park-search-results-container">
          {console.warn(suggestedParks, 'sug parks')}
          {/* {suggestParks && suggestedParks !== null ? suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />) : ''} */}
          {searchSubmit && searchResult.length ? searchResult.map((park) => <AdventureCard key={park.id} park={park} />) : '' }
          {searchSubmit && searchResult.length === 0 ? <h1>No Parks Found</h1> : ''}
        </div>
      </div>
    );
  }
}
