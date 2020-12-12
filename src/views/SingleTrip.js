import React, { Component } from 'react';
import ActivityCard from '../components/Cards/ActivityCard';
import { getTripActivities } from '../helpers/data/tripData';
import { getSinglePark } from '../helpers/data/parkData';
import { getActivityTrip, removeTripActivities } from '../helpers/data/mergedData';

export default class SingleTrip extends Component {
  state = {
    joinedTripObject: [],
    activities: [],
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
    const activitiesArray = [];
    response.forEach((item) => {
      activitiesArray.push(getSinglePark(item.parkId));
    });
    return Promise.all([...activitiesArray]);
  });

  // loop through joined object. if joinedObject.parkId === parkId, delete it
  removeActivity = (parkId) => {
    const { joinedTripObject } = this.state;
    joinedTripObject.forEach((object) => {
      if (object.parkId === parkId) {
        removeTripActivities(object.firebaseKey);
      }
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
    const { activities, joinedTripObject } = this.state;
    const showActivities = activities.map((activity) => <ActivityCard
        key={activity.firebaseKey} activity={activity} joinedTripObject={joinedTripObject} removeActivity={this.removeActivity} onUpdate={this.getActivities}
      />);
    return (
      <div className="single-trip-page">
        <h1 className="page-banner">Single Trip</h1>
        <div className="trip-activities-container">
          {showActivities}
        </div>
      </div>
    );
  }
}
