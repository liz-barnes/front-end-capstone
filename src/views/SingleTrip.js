import React, { Component } from 'react';
import ActivityCard from '../components/Cards/ActivityCard';
import { getTripActivities, getSingleTrip } from '../helpers/data/tripData';
import { getSinglePark } from '../helpers/data/parkData';
import { removeTripActivities } from '../helpers/data/mergedData';
import { getSingleHike } from '../helpers/data/hikeData';
import HikeActivityCard from '../components/Cards/HikeActivityCard';

export default class SingleTrip extends Component {
  state = {
    joinedTripObject: [],
    activities: [],
    tripParks: [],
    tripHikes: [],
    tripId: '',
    trip: [],
  };

  componentDidMount() {
    const { tripId } = this.props.match.params;
    this.setState({ tripId });
    this.getJoinedTripObject(tripId);
    this.getSingleTrip(tripId);
  }

  getJoinedTripObject = (tripId) => {
    getTripActivities(tripId).then((object) => {
      this.setState({ joinedTripObject: object });
    }).then(() => {
      this.getActivities(tripId);
    });
  }

  getActivities = (tripId) => getTripActivities(tripId).then((response) => {
    this.setState({ tripHikes: [], tripParks: [] });
    response.forEach((item) => {
      if (item.type === 'park') {
        getSinglePark(item.activityId).then((resp) => {
          this.setState({ tripParks: this.state.tripParks.concat(resp) });
        });
      } else if (item.type === 'hike') {
        getSingleHike(item.activityId).then((resp) => {
          this.setState({ tripHikes: this.state.tripHikes.concat(resp) });
        });
      }
    });
  });

  getSingleTrip = (tripId) => {
    getSingleTrip(tripId).then((resp) => {
      this.setState({ trip: resp });
    });
  }

  removeActivity = (activityId) => {
    const { joinedTripObject, tripId } = this.state;
    joinedTripObject.forEach((object) => {
      if (object.activityId === activityId) {
        removeTripActivities(object.firebaseKey);
      }
    });
    this.getJoinedTripObject(tripId);
  };

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    const {
      joinedTripObject, tripParks, tripHikes, trip,
    } = this.state;

    const showParks = tripParks.map((park) => <ActivityCard
      key={park.id} activity={park} joinedTripObject={joinedTripObject} removeActivity={this.removeActivity}
    />);

    const showHikes = tripHikes.map((hike) => <HikeActivityCard
      key={hike.id} hike={hike} removeActivity={this.removeActivity}
      />);

    return (
      <div className="single-trip-page">
        <div className="page-banner">
          <h1 className="banner-heading">{trip.name}</h1>
          <h5 className="banner-subheading">{trip.dates}</h5>
        </div>
        <div className="trip-activities-container">
          {showHikes}
          {showParks}
        </div>
      </div>
    );
  }
}
