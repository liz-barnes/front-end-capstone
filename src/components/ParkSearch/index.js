import React, { useEffect, useState } from 'react';
import AdventureCard from '../Cards/AdventureCard';
import parkData from '../../helpers/data/parkData';

export default function ParkSearch() {
  const [allParks, setAllParks] = useState([]);
  const [showSuggestedParks, setShowSuggestedParks] = useState(true);
  const [suggestedParks, setSuggestedParks] = useState([]);
  const [searchResults, setSearchResults] = useState([], []);
  const [searchInput, setSearchInput] = useState('');
  const [searchSubmit, setSearchSubmit] = useState(null);

  useEffect(() => {
    if (!allParks.length) {
      parkData.getParkData().then((response) => {
        setAllParks(response);
      });
    }
  }, [allParks]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchResults(allParks?.filter((park) => park.name.toLowerCase().includes(searchInput.toLowerCase())));
    setSearchSubmit(true);
    setShowSuggestedParks(false);
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
        <div className="park-search-results-container">
        {/* {suggestParks && suggestedParks !== null ? suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />) : ''} */}
          {searchSubmit && searchResults.length ? searchResults.map((park) => <AdventureCard key={park.id} park={park} />) : '' }
          {searchSubmit && !searchResults.length ? <h1>No Parks Found</h1> : '' }
        </div>
      </div>
    </div>
  );
}
