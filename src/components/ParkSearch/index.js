import React from 'react';
import ParkTestCard from '../Cards/ParkTestCard';

export default function ParkSearch({ parks }) {
  return (
    <div className="park-search-page">
      <h1>ParkSearch</h1>
      <div className="search-bar">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      {parks.map((park) => <ParkTestCard key={park.id} park={park} />)}
    </div>
  );
}
