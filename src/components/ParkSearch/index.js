import React from 'react';
import ParkTestCard from '../Cards/ParkTestCard';
import Search from '../Search';

export default function ParkSearch({ parks }) {
  const searchInput = 'aBra';
  const searchResult = parks.filter((park) => park.name.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <div className="park-search-page">
      <h1>ParkSearch</h1>
      <Search />
      {/* {searchResult.map((park) => <ParkTestCard key={park.id} park={park} />)} */}
    </div>
  );
}
