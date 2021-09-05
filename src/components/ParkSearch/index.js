import React, { useEffect, useState } from 'react';
// import AdventureCard from '../Cards/AdventureCard';
// import Search from '../Search';
import parkData from '../../helpers/data/parkData';

export default function ParkSearch() {
  const [allParks, setAllParks] = useState([]);
  const [showSuggestedParks, setShowSuggestedParks] = useState(true);
  const [suggestedParks, setSuggestedParks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchSubmit, setSearchSubmit] = useState(null);

  useEffect(() => {
    parkData.getParkData().then((response) => {
      setAllParks(response);
    });
  });

  const handleSearchInput = (e) => {
    console.warn('search input name', e.target.name);
    console.warn('search input value', e.target.value);
    setSearchInput({ [e.target.name]: e.target.value });
    console.warn(searchInput, 'input state');
    // this.setState({ [e.target.name]: e.target.value });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // const { searchInput } = this.state;
    setSearchResults(allParks.filter((park) => park.name.toLowerCase().includes(searchInput.toLowerCase())));
    console.warn(searchResults, 'search results state');
    setSearchSubmit(true);
    setShowSuggestedParks(false);
    // this.showParkResults();
  };

  return (
    <div className="park-search-page">
      <div className="page-banner">
        <h1 className="banner-heading" >National Parks</h1>
      </div>
      <div>New Park Search</div>
      <div className="search-bar">
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSearchSubmit} >
          <input className="search-input form-control" name="searchInput" value={searchInput.value} type="text" placeholder="Search park by name"
          aria-label="Search" onChange={(e) => handleSearchInput(e)}/>
        </form>
      </div>
    </div>
  );
}

// export default class ParkSearch extends Component {
//   state = {
//     searchResult: [],
//     searchInput: '',
//     searchSubmit: null,
//     suggestParks: true,
//   }

//   handleSearchInput = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSearchSubmit = (e) => {
//     e.preventDefault();
//     const { searchInput } = this.state;
//     const searchResult = this.props.parks.filter((park) => park.name.toLowerCase().includes(searchInput.toLowerCase()));
//     this.setState({ searchSubmit: true });
//     this.setState({ searchResult });
//     this.setState({ suggestParks: false });
//     this.showParkResults();
//   };

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
