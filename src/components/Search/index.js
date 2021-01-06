import React from 'react';

export default function Search({ handleSearchInput, handleSearchSubmit, value }) {
  return (
    <div className="search-bar">
      <form className="form-inline my-2 my-lg-0" onSubmit={handleSearchSubmit} >
        <input className="search-input form-control" name="searchInput" value={value} type="text" placeholder="Search park by name" aria-label="Search" onChange={(e) => handleSearchInput(e)}/>
      </form>
    </div>
  );
}
