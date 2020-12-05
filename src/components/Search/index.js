import React from 'react';

export default function Search({ handleSearchInput }) {
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
      <form className="form-inline my-2 my-lg-0">
        <input className="search-input form-control" type="text" placeholder="search" aria-label="Search" onChange={handleSearchInput}/>
      </form>
    </div>
  );
}
