import React, { Component } from 'react';
import Modal from '../components/Modal';
import CreateNewTrip from '../components/Forms/CreateNewTrip';
import { getUserTrips, deleteTrip } from '../helpers/data/tripData';
import TripCard from '../components/Cards/TripCard';
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
    // });
    // }).then(() => {
    //   getBoardPins(firebaseKey).then((response) => {
    //     response.forEach((item) => {
    //       deletePin(item.pinId);
    //     });
    //   });
    // });
    });
  };

  render() {
    const { trips } = this.state;
    const showTrips = () => (
      trips.map((trip) => <TripCard key={trip.firebaseKey} trip={trip} onUpdate={this.getTrips} removeTrip={this.removeTrip}/>)
    );
    return (
      <div className="trip-page">
        <h1 className="page-banner">Your Trips</h1>
        <Modal title={'Create New Trip'} buttonLabel={'Create a New Trip'}>
          <CreateNewTrip onUpdate={this.getTrips}/>
        </Modal>
        <div className="trip-container">{showTrips()}</div>
      </div>
    );
  }
}
