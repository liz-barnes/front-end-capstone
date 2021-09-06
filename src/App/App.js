/* eslint-disable import/no-duplicates */
import firebase from 'firebase/app';
import 'firebase/auth';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import fbConnection from '../helpers/data/connection';
import './App.scss';
import hikeData from '../helpers/data/parkData';
import Routes from '../helpers/routes';
import MyNavbar from '../Components/MyNavbar';
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
    console.warn('app running');
    this.getHikes();
    // this.getCampgrounds();
  }

  componentWillUnmount() {
    this.removeListener();
  }

  getHikes = () => {
    hikeData.getHikeData().then((resp) => {
      this.setState({
        hikes: resp,
      });
    });
  }

  // getCampgrounds = () => {
  //   campgroundData.getCampgroundData().then((resp) => {
  //     this.setState({
  //       campgrounds: resp,
  //     });
  //   });
  // }

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
    const suggested = [parks[241], parks[467], parks[34]];
    this.setState({ suggestedParks: suggested });
  }

  render() {
    const {
      user, parks, userTrips, suggestedParks,
    } = this.state;
    return (
      <div className="App">
        <Router>
          <MyNavbar user={user} />
          { user !== null && <Routes user={user} parks={parks} userTrips={userTrips} suggestedParks={suggestedParks}/> }
        </Router>
     </div>
    );
  }
}

export default App;
