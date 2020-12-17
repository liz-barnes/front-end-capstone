import React, { Component } from 'react';
import ActivityCard from '../components/Cards/ActivityCard';
import { getTripActivities } from '../helpers/data/tripData';
import { getSinglePark } from '../helpers/data/parkData';
import { getActivityTrip, removeTripActivities } from '../helpers/data/mergedData';
import { getSingleHike } from '../helpers/data/hikeData';
import HikeCard from '../components/Cards/HikeCard';
import HikeTestCard from '../components/Cards/HikeTestCard';

export default class SingleTrip extends Component {
  state = {
    joinedTripObject: [],
    activities: [],
    tripParks: [],
    tripHikes: [],
  };

  componentDidMount() {
    // const parkName = this.props.match.params.name;
    const { tripId } = this.props.match.params;
    this.getJoinedTripObject(tripId);
    this.getActivities(tripId).then((resp) => this.setState({ activities: resp }));
    // this.setState({ parkId });
    // getSinglePark(parkId).then((park) => {
    //   this.setState({ park }, this.setLoading);
    // });
  }

  getJoinedTripObject = (tripId) => {
    getTripActivities(tripId).then((object) => {
      this.setState({ joinedTripObject: object });
    });
  }

  getActivities = (tripId) => getTripActivities(tripId).then((response) => {
    // const activitiesArray = [];
    const tripParks = [];
    const tripHikes = [];
    response.forEach((item) => {
      if (item.type === 'park') {
        getSinglePark(item.activityId).then((resp) => {
          tripParks.push(resp);
          console.warn('trip park', tripParks);
          this.setState({ tripParks: this.state.tripParks.concat(resp) });
        });
        tripParks.push(getSinglePark(item.activityId));
      } else if (item.type === 'hike') {
        getSingleHike(item.activityId).then((resp) => {
          // console.warn('HIKE DATA', resp);
          // console.warn('state of hikes 1', this.state.tripHikes);
          tripHikes.push(resp);
          // console.warn('trip hike', tripHikes);
          this.setState({ tripHikes: this.state.tripHikes.concat(resp) });
          console.warn('ACTUAL STATE OF HIKE', this.state.tripHikes);
        });
        // this.setState({ tripHikes: item.activityId });
        tripHikes.push(getSingleHike(item.activityId));
      }
      // activitiesArray.push(getSinglePark(item.parkId));
    });
    return Promise.all([...tripParks], [...tripHikes]);
  });

  // loop through joined object. if joinedObject.parkId === parkId, delete it
  removeActivity = (parkId) => {
    const { joinedTripObject } = this.state;
    joinedTripObject.forEach((object) => {
      if (object.parkId === parkId) {
        removeTripActivities(object.firebaseKey);
      }
      this.componentDidMount();
    });
    // getActivityTrip(parkId).then((resp) => {
    //   if (resp.length) {
    //     resp.forEach((item) => {
    //       removeTripActivities(item.firebaseKey);
    //     });
    //   }
    // });
  }

  render() {
    const {
      joinedTripObject, tripParks, tripHikes,
    } = this.state;

    const showParks = tripParks.map((park) => <ActivityCard
      key={park.id} activity={park} joinedTripObject={joinedTripObject} removeActivity={this.removeActivity}
    />);

    const showHikes = tripHikes.map((hike) => <HikeCard
      key={hike} hike={hike}
      />);

    // const showActivities = activities.map((activity) => <ActivityCard
    //     key={activity.firebaseKey} activity={activity} joinedTripObject={joinedTripObject} removeActivity={this.removeActivity}
    //   />);

    return (
      <div className="single-trip-page">
        <h1 className="page-banner">Single Trip</h1>
        <div className="trip-activities-container">
          {/* {showActivities} */}
          {showHikes}
          {showParks}
        </div>
      </div>
    );
  }
}
