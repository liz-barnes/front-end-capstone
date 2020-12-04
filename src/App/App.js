import React from 'react';
import './App.scss';
import { getParkData, getCampgroundData, getHikeData } from '../helpers/data/parkData';
import ParkTestCard from '../components/Cards/ParkTestCard';
import CampTestCard from '../components/Cards/CampTestCard';
import HikeTestCard from '../components/Cards/HikeTestCard';

class App extends React.Component {
  state = {
    parks: [],
    campgrounds: [],
    hikes: [],
  }

  componentDidMount() {
    getParkData().then((resp) => {
      this.setState({
        parks: resp,
      });
    });
    getCampgroundData().then((resp) => {
      this.setState({
        campgrounds: resp,
      });
    });
    getHikeData().then((resp) => {
      this.setState({
        hikes: resp,
      });
    });
  }

  render() {
    const { parks, campgrounds, hikes } = this.state;
    return (
      <div className="App">
        <h1>Parks</h1>
        {parks.map((park) => <ParkTestCard key={park.id} park={park} />)}
        <h1>Camps</h1>
        {campgrounds.map((camp) => <CampTestCard key={camp.id} camp={camp} />)}
        <h1>Hikes</h1>
        {hikes.map((hike) => <HikeTestCard key={hike.id} hike={hike} />)}
     </div>
    );
  }
}

export default App;
