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

fbConnection();
class App extends React.Component {
  state = {
    user: null,
    userTrips: [],
    parks: [],
    hikes: [],
    campgrounds: [],
    suggestedParks: null,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
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
    }).then(() => {
      this.setSuggestedParks();
      console.warn('sug parks', this.state.suggestedParks);
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
      getUserTrips(user.uid).then((resp) => {
        this.setState({
          userTrips: resp,
        });
      });
    }
  }

  setSuggestedParks = () => {
    const { parks } = this.state;
    console.warn('PARKXZ', parks);
    const suggested = [parks[27], parks[467], parks[289]];
    this.setState({ suggestedParks: suggested });
    // this.setLoading();
  }

  render() {
    const {
      user, parks, userTrips, suggestedParks,
    } = this.state;
    // const { parks, campgrounds, hikes } = this.state;
    return (
      <div className="App">
        {/* {(e) => this.enterKeyEvent(e)} */}
        {/* {this.enterKeyEvent(e)}; */}
        <Router>
          <MyNavbar user={user} />
        { user !== null && <Routes user={user} parks={parks} userTrips={userTrips} suggestedParks={suggestedParks}/> }
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
