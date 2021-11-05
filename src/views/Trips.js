import React, { Component } from 'react';
import Modal from '../Components/Modals';
import CreateNewTrip from '../Components/Forms/CreateNewTrip';
import { getUserTrips, deleteTrip } from '../helpers/data/tripData';
import TripCard from '../Components/Cards/TripCard';
import { getTripActivity, removeTripActivities } from '../helpers/data/mergedData';

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

  removeTrip = (tripId) => {
    deleteTrip(tripId).then(() => {
      this.getTrips();
    }).then(() => {
      getTripActivity(tripId).then((resp) => {
        if (resp.length) {
          resp.forEach((item) => {
            removeTripActivities(item.firebaseKey);
          });
        }
      });
    });
  };

  render() {
    const { trips } = this.state;
    const showTrips = () => (
      trips.map((trip) => <TripCard key={trip.firebaseKey} trip={trip} onUpdate={this.getTrips} removeTrip={this.removeTrip}/>)
    );
    return (
      <div className="trip-page">
        <div className="page-banner">
        <h1 className="banner-heading">Your Trips</h1>
        </div>
        <Modal title={'Create New Trip'} label={'add'} className='page-icon'>
          <CreateNewTrip onUpdate={this.getTrips}/>
        </Modal>
        <div className="trip-container">{showTrips()}</div>
      </div>
    );
  }
}
