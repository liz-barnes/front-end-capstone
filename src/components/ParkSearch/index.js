import React, { useEffect, useState } from 'react';
// import AdventureCard from '../Cards/AdventureCard';
// import Search from '../Search';
import parkData from '../../helpers/data/parkData';
// import park from '../../helpers/data/parkObject';

export default function ParkSearch() {
  const [allParks, setAllParks] = useState([]);
  const [showSuggestedParks, setShowSuggestedParks] = useState(true);
  const [suggestedParks, setSuggestedParks] = useState([]);
  const [searchResults, setSearchResults] = useState([], []);
  const [searchInput, setSearchInput] = useState('');
  const [searchSubmit, setSearchSubmit] = useState(null);
  const test = [
    {
      name: 'bubbles',
      age: 3,
    },
    {
      name: 'cartoon',
    },
    {
      name: 'nip',
    },
    {
      name: 'tip',
    },
  ];

  // const getAllParks = () => {
  //   parkData.getParkData().then((response) => {
  //     console.warn('parkz', response);
  //     setAllParks(response);
  //     console.warn(allParks, 'you did it');
  //   });
  // };

  useEffect(() => {
    if (!allParks.length) {
      parkData.getParkData().then((response) => {
        console.warn('parkz', response);
        setAllParks(response);
        console.warn(allParks, 'you did it');
      });
    }
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchResults(allParks?.filter((park) => park.name.toLowerCase().includes(searchInput.toLowerCase())));
    setSearchSubmit(true);
    setShowSuggestedParks(false);
    // this.showParkResults();
  };

  return (
    <div className="park-search-page">
      <div className="page-banner">
        <h1 className="banner-heading" >National Parks</h1>
      </div>
      <div className="search-bar">
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSearchSubmit} >
          <input className="search-input form-control" name="searchInput" value={searchInput.name} type="text" placeholder="Search park by name"
          aria-label="Search" onChange={(e) => setSearchInput(e.target.value)}/>
        </form>
        {searchResults.map((r) => <h1>{r.name}</h1>)}
      </div>
    </div>
  );
}

//   showParkResults = () => {
//     const { searchSubmit, searchResult } = this.state;
//     if (searchSubmit === true && searchResult.length) {
//       searchResult.map((park) => <AdventureCard key={park.id} park={park} />);
//     } else {
//       <h1>No Parks Found</h1>;
//     }
//   }

//   render() {
//     const {
//       searchResult, searchSubmit, suggestParks,
//     } = this.state;
//     const { suggestedParks } = this.props;
//     return (
//       <div className="park-search-page">
//         <div className="page-banner">
//           <h1 className="banner-heading" >National Parks</h1>
//         </div>
//         <Search handleSearchInput={(e) => this.handleSearchInput(e)} handleSearchSubmit={(e) => this.handleSearchSubmit(e)} value={this.state.searchInput}/>
//         <div className="park-search-results-container">
//           {suggestParks && suggestedParks !== null ? suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />) : ''}
//           {searchSubmit && searchResult.length ? searchResult.map((park) => <AdventureCard key={park.id} park={park} />) : '' }
//           {searchSubmit && searchResult.length === 0 ? <h1>No Parks Found</h1> : ''}
//         </div>
//       </div>
//     );
//   }
// }
