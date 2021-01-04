import React, { Component } from 'react';
// import ParkTestCard from '../Cards/ParkTestCard';
import AdventureCard from '../Cards/AdventureCard';
import Search from '../Search';
import Loader from '../Loader';

export default class ParkSearch extends Component {
  state = {
    searchResult: [],
    searchInput: '',
    searchSubmit: null,
    // suggestedParks: null,
    loading: true,
    suggestParks: true,
  }

  componentDidMount() {
    this.setLoading();
    // this.setSuggestedParks();
    this.hideSuggestedParks();
    // this.suggestedFeedLogic();
  }

  handleSearchInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // const { value } = e.target;
    // const searchResult = this.props.parks.filter((park) => park.name.toLowerCase().includes(value.toLowerCase()));
    // this.setState({ searchResult });
    // console.warn('search', searchResult);
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const { searchInput } = this.state;
    // e.preventDefault();
    // if (e.key === 'Enter') {
    //   e.preventDefault();
    //   console.warn('pressed');
    const searchResult = this.props.parks.filter((park) => park.name.toLowerCase().includes(searchInput.toLowerCase()));
    this.setState({ searchSubmit: true });
    this.setState({ searchResult });
    this.setState({ suggestParks: false });
    this.showParkResults();
    console.warn('submit');
    // }
  };

  setSuggestedParks = () => {
    const { parks } = this.props;
    const suggested = [parks[27], parks[467], parks[289]];
    this.setState({ suggestedParks: suggested });
    this.setLoading();
  }

  showParkResults = () => {
    const { searchSubmit, searchResult } = this.state;
    if (searchSubmit === true && searchResult.length) {
      searchResult.map((park) => <AdventureCard key={park.id} park={park} />);
    } else {
      <h1>No Parks Found</h1>;
    }
  }

  hideSuggestedParks = () => {
    const { suggestParks, loading } = this.state;
    if (suggestParks === false) {
      <h1>Help</h1>;
      console.warn('helpppp');
    }
  }

  suggestedFeedLogic = () => {
    const { suggestParks, suggestedParks, loading } = this.state;
    if (loading) {
      <Loader />;
    } else if (suggestParks && !loading) {
      suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />);
    } else if (suggestParks === false) {
      <div></div>;
    }
  }

  setLoading = () => {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 100);
    this.showSuggestedParks();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // searchKey = () => {
  //   const nullSearch = this.state.search;
  //   if (nullSearch === null) {
  //   }
  // }

  logic = () => {
    const {
      suggestedParks, loading, searchSubmit, suggestParks,
    } = this.state;
    // loading ? (
    //   <Loader />
    // ) : suggestParks ? (
    //   suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />)
    // ) : suggestParks === false ? (
    //   <div></div>
    // ) : ''
  }

  showSuggestedParks = () => {
    const { loading, suggestParks } = this.state;
    const { suggestedParks } = this.props;
    if (loading) {
      <Loader />;
    } else if (suggestParks) {
      suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />);
    }
  }

  // showSuggested = () => {
  //   const { suggestedParks } = this.props;
  //   setTimeout(() => {
  //     suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />);
  //   }, 5000);
  // }

  render() {
    const {
      searchResult, loading, searchSubmit, suggestParks,
    } = this.state;
    const { suggestedParks } = this.props;
    return (
      <div className="park-search-page">
        <div className="page-banner">
          <h1 className="banner-heading" >National Parks</h1>
        </div>
        <Search handleSearchInput={(e) => this.handleSearchInput(e)} handleSearchSubmit={(e) => this.handleSearchSubmit(e)} value={this.state.searchInput}/>
        <div className="park-search-results-container">
          {/* {this.suggestedFeedLogic()} */}
        {/* {
          loading ? (
            <Loader />
          ) : suggestParks ? (
            suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />)
          ) : (
            <span>Default</span>
        )} */}
          {/* { loading ? (
            <Loader />
          ) : (
            suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />)
          )} */}
          {/* {suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />)} */}
          {/* {suggestedParks.length ? suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />) : ''} */}
          {suggestParks ? suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />) : ''}
          {/* {this.showSuggestedParks()} */}
          {/* {setTimeout(() => {
            this.showSuggestedParks();
          }, 1000)} */}
          {searchSubmit && searchResult.length ? searchResult.map((park) => <AdventureCard key={park.id} park={park} />) : '' }
          {searchSubmit && searchResult.length === 0 ? <h1>No Parks Found</h1> : ''}
        </div>
      </div>
    );
  }
}

// talk to jacob about code below, DELETE
// export default function ParkSearch({ parks }) {
//   // const filteredArray = [];

//   const handleSearchInput = (e) => {
//     // if (e.key === 'Enter') {
//     //   e.preventDefault();
//     //   console.warn('key was pressed');
//     // console.warn(this.state.searchInput);
//     const { value } = e.target;
//     const searchResult = parks.filter((park) => park.name.toLowerCase().includes(value.toLowerCase()));
//     // filteredArray.push(searchResult);
//     // console.warn('filter', filteredArray);
//     console.warn('search', searchResult);
//     // console.warn(e.target.value);
//     // }
//     return searchResult;
//   };

// const handleSearchSubmit = (e) => {
//   e.preventDefault();
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     const input = e.target.value;
//     console.warn('input', input);
//   }
// };

//   return (
//     <div className="park-search-page">
//       <h1>ParkSearch</h1>
//       <Search handleSearchInput={(e) => handleSearchInput(e)} />
//       {.map((park) => <ParkTestCard key={park.id} park={park} />)}
//     </div>
//   );
// }
