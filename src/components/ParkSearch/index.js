import React, { Component } from 'react';
// import ParkTestCard from '../Cards/ParkTestCard';
import AdventureCard from '../Cards/AdventureCard';
import Search from '../Search';

export default class ParkSearch extends Component {
  state = {
    searchResult: [],
    searchInput: '',
  }

  handleSearchInput = (e) => {
    this.setState({ searchResult: e.target.value });
    // const { value } = e.target;
    // const searchResult = this.props.parks.filter((park) => park.name.toLowerCase().includes(value.toLowerCase()));
    // this.setState({ searchResult });
    // console.warn('search', searchResult);
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      e.preventDefault();
      console.warn('pressed');
      const { value } = e.target;
      // const searchResult = this.props.parks.filter((park) => park.name.toLowerCase().includes(value.toLowerCase()));
      // this.setState({ searchResult });
      console.warn('input', value);
    }
  };

  render() {
    const { searchResult, searchInput } = this.state;
    return (
      <div className="park-search-page">
        <h1>ParkSearch</h1>
        <Search handleSearchInput={(e) => this.handleSearchInput(e)} handleSearchSubmit={(e) => this.handleSearchSubmit(e)} searchInput={searchInput}/>
        {searchResult.length ? searchResult.map((park) => <AdventureCard key={park.id} park={park} />) : <h1>No Parks Found</h1>}
      </div>
    );
  }
}

// talk to jacob about code below, DELETE
// export default function ParkSearch({ parks }) {
//   // const filteredArray = [];

//   const handleSearchInput = (e) => {
//     // if (e.key === 'Enter') {
//     //   e.preventDefault();
//     //   console.warn('key was pressed');
//     // console.warn(this.state.searchInput);
//     const { value } = e.target;
//     const searchResult = parks.filter((park) => park.name.toLowerCase().includes(value.toLowerCase()));
//     // filteredArray.push(searchResult);
//     // console.warn('filter', filteredArray);
//     console.warn('search', searchResult);
//     // console.warn(e.target.value);
//     // }
//     return searchResult;
//   };

// const handleSearchSubmit = (e) => {
//   e.preventDefault();
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     const input = e.target.value;
//     console.warn('input', input);
//   }
// };

//   return (
//     <div className="park-search-page">
//       <h1>ParkSearch</h1>
//       <Search handleSearchInput={(e) => handleSearchInput(e)} />
//       {.map((park) => <ParkTestCard key={park.id} park={park} />)}
//     </div>
//   );
// }
