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
    // this.getActivities();
    this.getSingleTrip(tripId);
    // this.getActivities(tripId).then((resp) => this.setState({ activities: resp }));
  }

  getJoinedTripObject = (tripId) => {
    getTripActivities(tripId).then((object) => {
      this.setState({ joinedTripObject: object });
    }).then(() => {
      this.getActivities(tripId);
    });
    // .then(() => {
    //   this.getActivities(tripId);
    // });
  }

  // getActivities = () => {
  //   const { joinedTripObject } = this.state;
  //   console.warn('stattttte', joinedTripObject);
  //   joinedTripObject.forEach((activity) => {
  //     console.warn('activiiiityy', activity);
  //     if (activity.type === 'park') {
  //       getSinglePark(activity.activityId).then((park) => {
  //         // tripParks.push(resp);
  //         this.setState({ tripParks: [] });
  //         this.setState({ tripParks: this.state.tripParks.concat(park) });
  //       });
  //     } else if (activity.type === 'hike') {
  //       getSingleHike(activity.activityId).then((hike) => {
  //         this.setState({ tripHikes: this.state.tripParks.concat(hike) });
  //       });
  //     }
  //   });
  // }

  getActivities = (tripId) => getTripActivities(tripId).then((response) => {
    // const activitiesArray = [];
    // const tripParks = [];
    // const tripHikes = [];
    this.setState({ tripHikes: [], tripParks: [] });
    response.forEach((item) => {
      if (item.type === 'park') {
        getSinglePark(item.activityId).then((resp) => {
          // tripParks.push(resp);
          this.setState({ tripParks: this.state.tripParks.concat(resp) });
        });
        // tripParks.push(getSinglePark(item.activityId));
      } else if (item.type === 'hike') {
        getSingleHike(item.activityId).then((resp) => {
          // console.warn('HIKE DATA', resp);
          // console.warn('state of hikes 1', this.state.tripHikes);
          // tripHikes.push(resp);
          // console.warn('trip hike', tripHikes);
          this.setState({ tripHikes: this.state.tripHikes.concat(resp) });
        });
        // this.setState({ tripHikes: item.activityId });
        // tripHikes.push(getSingleHike(item.activityId));
      }
      // activitiesArray.push(getSinglePark(item.parkId));
    });
    // return Promise.all([...tripParks], [...tripHikes]);
  });

  getSingleTrip = (tripId) => {
    getSingleTrip(tripId).then((resp) => {
      this.setState({ trip: resp });
      console.warn('trippppp', this.state.trip);
    });
  }

  // loop through joined object. if joinedObject.parkId === parkId, delete it
  // removeActivity = (parkId) => {
  //   const { joinedTripObject } = this.state;
  //   joinedTripObject.forEach((object) => {
  //     if (object.parkId === parkId) {
  //       removeTripActivities(object.firebaseKey);
  //     }
  //     this.componentDidMount();
  //   });
  //   // getActivityTrip(parkId).then((resp) => {
  //   //   if (resp.length) {
  //   //     resp.forEach((item) => {
  //   //       removeTripActivities(item.firebaseKey);
  //   //     });
  //   //   }
  //   // });
  // }

  // loop through joined object. if joinedObject.parkId === parkId, delete it
  // removeActivity = (activityId) => {
  //   console.warn('clicked', activityId);
  //   const { joinedTripObject } = this.state;
  //   joinedTripObject.forEach((object) => {
  //     if (object.activityId === activityId) {
  //       removeTripActivities(object.firebaseKey);
  //     }
  //     this.componentDidMount();
  //   });
  // }

  removeActivity = (activityId) => {
    const { joinedTripObject, tripId } = this.state;
    joinedTripObject.forEach((object) => {
      if (object.activityId === activityId) {
        removeTripActivities(object.firebaseKey);
      }
    });
    this.getJoinedTripObject(tripId);
    // this.getActivities(this.state.tripId).then((resp) => {
    //   console.warn('trip delete resp', resp);
    // });
  };

  onUpdate = () => {
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    // const randomInt = this.getRandomInt(1000000);

    const {
      joinedTripObject, tripParks, tripHikes, trip,
    } = this.state;

    const showParks = tripParks.map((park) => <ActivityCard
      key={park.id} activity={park} joinedTripObject={joinedTripObject} removeActivity={this.removeActivity}
    />);

    const showHikes = tripHikes.map((hike) => <HikeActivityCard
      key={hike.id} hike={hike} removeActivity={this.removeActivity}
      />);

    // const showActivities = activities.map((activity) => <ActivityCard
    //     key={activity.firebaseKey} activity={activity} joinedTripObject={joinedTripObject} removeActivity={this.removeActivity}
    //   />);

    return (
      <div className="single-trip-page">
        <div className="page-banner">
          <h1 className="banner-heading">{trip.name}</h1>
          <h5 className="banner-subheading">{trip.dates}</h5>
        </div>
        <div className="trip-activities-container">
          {/* {showActivities} */}
          {showHikes}
          {showParks}
        </div>
      </div>
    );
  }
}
