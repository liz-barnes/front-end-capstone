import React, { Component } from 'react';
import Modal from '../components/Modal';
import CreateNewTrip from '../components/Forms/CreateNewTrip';
import { getUserTrips } from '../helpers/data/tripData';
import TripCard from '../components/Cards/TripCard';

export default class Trips extends Component {
  state = {
    trips: [],
  };

  componentDidMount() {
    this.getTrips();
  }

  getTrips = () => {
    const user = this.props.user.uid;
    getUserTrips(user).then((response) => {
      this.setState({
        trips: response,
      }, this.setLoading);
    });
  }

  render() {
    const { trips } = this.state;
    const showTrips = () => (
      trips.map((trip) => <TripCard key={trip.firebaseKey} trip={trip} />)
    );
    return (
      <div className="trip-page">
        <h1 className="page-banner">Your Trips</h1>
        <Modal title={'Create New Trip'} buttonLabel={'Create a New Trip'}>
          <CreateNewTrip />
        </Modal>
        <div className="trip-container">{showTrips()}</div>
      </div>
    );
  }
}
