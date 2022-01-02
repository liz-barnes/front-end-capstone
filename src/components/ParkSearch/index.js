import React, { useEffect, useState } from 'react';
import AdventureCard from '../Cards/AdventureCard';
import parkData from '../../helpers/data/parkData';

export default function ParkSearch() {
  const [allParks, setAllParks] = useState([]);
  const [showSuggestedParks, setShowSuggestedParks] = useState(true);
  const [suggestedParks, setSuggestedParks] = useState([]);
  const [searchResultsByName, setSearchResultsByName] = useState([], []);
  const [searchResultsByState, setSearchResultsByState] = useState([], []);

  const [searchInput, setSearchInput] = useState('');
  const [searchSubmit, setSearchSubmit] = useState(null);

  useEffect(() => {
    if (!allParks.length) {
      parkData.getParkData().then((response) => {
        setAllParks(response);
      });
    }
    const shuffledParks = allParks.sort(() => 0.5 - Math.random());
    setSuggestedParks(shuffledParks.slice(0, 3));
  }, [allParks]);

  const stateAbbreviation = (state) => {
    switch (state) {
      case 'ALABAMA':
        return 'AL';

      case 'ALASKA':
        return 'AK';

      case 'ARIZONA':
        return 'AZ';

      case 'ARKANSAS':
        return 'AR';

      case 'CALIFORNIA':
        return 'CA';

      case 'COLORADO':
        return 'CO';

      case 'CONNECTICUT':
        return 'CT';

      case 'DELAWARE':
        return 'DE';

      case 'DISTRICT OF COLUMBIA':
        return 'DC';

      case 'FLORIDA':
        return 'FL';

      case 'GEORGIA':
        return 'GA';

      case 'HAWAII':
        return 'HI';

      case 'IDAHO':
        return 'ID';

      case 'ILLINOIS':
        return 'IL';

      case 'INDIANA':
        return 'IN';

      case 'IOWA':
        return 'IA';

      case 'KANSAS':
        return 'KS';

      case 'KENTUCKY':
        return 'KY';

      case 'LOUISIANA':
        return 'LA';

      case 'MAINE':
        return 'ME';

      case 'MARYLAND':
        return 'MD';

      case 'MASSACHUSETTS':
        return 'MA';

      case 'MICHIGAN':
        return 'MI';

      case 'MINNESOTA':
        return 'MN';

      case 'MISSISSIPPI':
        return 'MS';

      case 'MISSOURI':
        return 'MO';

      case 'MONTANA':
        return 'MT';

      case 'NEBRASKA':
        return 'NE';

      case 'NEVADA':
        return 'NV';

      case 'NEW HAMPSHIRE':
        return 'NH';

      case 'NEW JERSEY':
        return 'NJ';

      case 'NEW MEXICO':
        return 'NM';

      case 'NEW YORK':
        return 'NY';

      case 'NORTH CAROLINA':
        return 'NC';

      case 'NORTH DAKOTA':
        return 'ND';

      case 'OHIO':
        return 'OH';

      case 'OKLAHOMA':
        return 'OK';

      case 'OREGON':
        return 'OR';

      case 'PENNSYLVANIA':
        return 'PA';

      case 'RHODE ISLAND':
        return 'RI';

      case 'SOUTH CAROLINA':
        return 'SC';

      case 'SOUTH DAKOTA':
        return 'SD';

      case 'TENNESSEE':
        return 'TN';

      case 'TEXAS':
        return 'TX';

      case 'UTAH':
        return 'UT';

      case 'VERMONT':
        return 'VT';

      case 'VIRGINIA':
        return 'VA';

      case 'WASHINGTON':
        return 'WA';

      case 'WEST VIRGINIA':
        return 'WV';

      case 'WISCONSIN':
        return 'WI';

      case 'WYOMING':
        return 'WY';
      default:
        return 'State Not Found';
    }
  };

  const showParkByState = () => searchResultsByState.map((park) => <AdventureCard key={park.id} park={park} />);

  const showParkByName = () => searchResultsByName.map((park) => <AdventureCard key={park.id} park={park} />);

  const renderSuggestedParks = () => suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const parksByName = allParks?.filter((park) => park.name.toLowerCase().includes(searchInput.toLowerCase()));
    setSearchResultsByName(parksByName);
    const parksByState = allParks?.filter((park) => park.states.includes(stateAbbreviation(searchInput.toUpperCase())));
    setSearchResultsByState(parksByState);
    // setSearchResults(allParks?.filter((park) => park.name.toLowerCase().includes(searchInput.toLowerCase())));
    setSearchSubmit(true);
    setShowSuggestedParks(false);
  };

  return (
    <div className="park-search-page">
      <div className="page-banner">
        <h1 className="banner-heading">National Parks</h1>
      </div>
      <div className="search-bar">
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={handleSearchSubmit}
        >
          <input
            className="search-input form-control"
            name="searchInput"
            value={searchInput.name}
            type="text"
            placeholder="Search park by name or state"
            aria-label="Search"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
        <div className="park-search-results-container">
          {showSuggestedParks && suggestedParks && renderSuggestedParks()}
          {/* {suggestParks && suggestedParks !== null ? suggestedParks.map((park) => <AdventureCard key={park.id} park={park} />) : ''} */}
          {searchSubmit && searchResultsByName.length ? showParkByName() : ''}
          {searchSubmit && searchResultsByState.length ? showParkByState() : ''}
          {searchSubmit && !searchResultsByName.length && !searchResultsByState.length ? <h1>No Parks Found</h1> : ''}
        </div>
      </div>
    </div>
  );
}
