import React from 'react';

export default function Search({ handleSearchInput, handleSearchSubmit, value }) {
  // state = {
  //   searchInput: '',
  // };

  // const keyEvent = (e) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     // const input = e.target.value;
  //     // return e.target.value;
  //   }
  // };

  return (
    <div className="search-bar">
      <form className="form-inline my-2 my-lg-0" onSubmit={handleSearchSubmit} >
        {/* <input type="text" onKeyPress={(e) => handleSearchSubmit(e)} /> */}
        <input className="search-input form-control" name="searchInput" value={value} type="text" placeholder="search" aria-label="Search" onChange={(e) => handleSearchInput(e)}/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  );
}
