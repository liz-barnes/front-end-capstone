import firebase from 'firebase/app';
import 'firebase/auth';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import fbConnection from '../helpers/data/connection';
import './App.scss';
import {
  getParkData,
  getCampgroundData,
  getHikeData,
} from '../helpers/data/parkData';
import Routes from '../helpers/routes';
import MyNavbar from '../components/MyNavbar';
import { getUserTrips } from '../helpers/data/tripData';
import AdventureCard from '../components/Cards/AdventureCard';
// import ParkTestCard from '../components/Cards/ParkTestCard';
// import CampTestCard from '../components/Cards/CampTestCard';
// import HikeTestCard from '../components/Cards/HikeTestCard';

fbConnection();
class App extends React.Component {
  state = {
    user: null,
    userTrips: [],
    parks: [],
    hikes: [],
    campgrounds: [],
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        console.warn('user', this.state.user);
      } else {
        this.setState({ user: false });
      }
    });
    this.getParks();
    this.getHikes();
    this.getCampgrounds();
    setTimeout(() => {
      this.getUserTrips();
    }, 1000);
  }

  componentWillUnmount() {
    this.removeListener();
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

  getUserTrips = () => {
    const { user } = this.state;
    if (user) {
      console.warn('userrrr', user);
      getUserTrips(user.uid).then((resp) => {
        console.warn('trips', resp);
        this.setState({
          userTrips: resp,
        });
      });
    }
  }

  render() {
    const { user, parks, userTrips } = this.state;
    // const { parks, campgrounds, hikes } = this.state;
    return (
      <div className="App">
        {/* {(e) => this.enterKeyEvent(e)} */}
        {/* {this.enterKeyEvent(e)}; */}
        <Router>
          <MyNavbar user={user} />
        { user !== null && <Routes user={user} parks={parks} userTrips={userTrips}/> }
          {/* <Routes parks={parks} /> */}
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
