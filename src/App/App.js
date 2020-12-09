import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import {
  getParkData,
  getCampgroundData,
  getHikeData,
} from '../helpers/data/parkData';
import Routes from '../helpers/routes';
import AdventureCard from '../components/Cards/AdventureCard';
// import ParkTestCard from '../components/Cards/ParkTestCard';
// import CampTestCard from '../components/Cards/CampTestCard';
// import HikeTestCard from '../components/Cards/HikeTestCard';

class App extends React.Component {
  state = {
    parks: [],
    hikes: [],
    campgrounds: [],
  }

  componentDidMount() {
    this.getParks();
    this.getHikes();
    this.getCampgrounds();
  }

  getParks = () => {
    getParkData().then((resp) => {
      this.setState({
        parks: resp,
      });
    });
  }

  getHikes = () => {
    getHikeData().then((resp) => {
      this.setState({
        hikes: resp,
      });
    });
  }

  getCampgrounds = () => {
    getCampgroundData().then((resp) => {
      this.setState({
        campgrounds: resp,
      });
    });
  }

  render() {
    const { parks } = this.state;
    // const { parks, campgrounds, hikes } = this.state;
    return (
      <div className="App">
        {(e) => this.enterKeyEvent(e)}
        {/* {this.enterKeyEvent(e)}; */}
        <Router>
          <Routes parks={parks} />
        </Router>
        {/* <h1>Parks</h1>
        {parks.map((park) => <ParkTestCard key={park.id} park={park} />)}
        <h1>Camps</h1>
        {campgrounds.map((camp) => <CampTestCard key={camp.id} camp={camp} />)}
        <h1>Hikes</h1> */}
        {/* {hikes.map((hike) => <HikeTestCard key={hike.id} hike={hike} />)} */}
        {/* {parks.map((park) => <AdventureCard key={park.id} park={park} />)} */}
     </div>
    );
  }
}

export default App;
