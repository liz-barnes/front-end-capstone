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
    // setAllParks(park);
    // console.warn(park);
    // console.warn('parkkkk', allParks);
    if (!allParks.length) {
      parkData.getParkData().then((response) => {
        console.warn('parkz', response);
        setAllParks(response);
        console.warn(allParks, 'you did it');
      });
    }
  }, [allParks, setAllParks]);

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const showParks = () => {
  //   const testing = (test?.filter((t) => t.name.includes(searchInput)));
  //   console.warn(testing, 'testinggg');
  //   setSearchResults(testing);
  // };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // const { searchInput } = this.state;
    // const parks = allParks.filter((park) => park.name.toLowerCase().includes(searchInput.toLowerCase()));
    // setSearchResults(allParks?.filter((parkz) => parkz.name.toLowerCase().includes(searchInput.toLowerCase())));
    // setSearchResults(test?.filter((t) => t.name.toLowerCase().includes(searchInput.toLowerCase())));
    // const testing = (test?.filter((t) => t.name.includes(searchInput)));
    // console.warn(testing, 'testinggg');
    // setSearchResults(testing);
    const testing = (test?.filter((t) => t.name.includes(searchInput)));
    console.warn(testing, 'testinggg');
    setSearchResults(testing);
    // setSearchResults(testing);
    // if (!searchResults) {
    //   setSearchResults(testing);
    // }

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
