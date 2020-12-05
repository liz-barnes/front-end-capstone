import React from 'react';
import ParkTestCard from '../Cards/ParkTestCard';
import Search from '../Search';

export default function ParkSearch({ parks }) {
  const filteredArray = [];

  const handleSearchInput = (e) => {
    // if (e.key === 'Enter') {
    //   e.preventDefault();
    //   console.warn('key was pressed');
    // console.warn(this.state.searchInput);
    const { value } = e.target;
    const searchResult = parks.filter((park) => park.name.toLowerCase().includes(value.toLowerCase()));
    filteredArray.push(searchResult.pop());
    console.warn('filtered', filteredArray);
    console.warn(e.target.value);
    // }
  };

  return (
    <div className="park-search-page">
      <h1>ParkSearch</h1>
      <Search handleSearchInput={(e) => handleSearchInput(e)}/>
      {filteredArray.map((park) => <ParkTestCard key={park.id} park={park} />)}
    </div>
  );
}
