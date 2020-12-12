import React, { Component } from 'react';
import ActivityCard from '../components/Cards/ActivityCard';
import { getTripActivities } from '../helpers/data/tripData';

export default class SingleTrip extends Component {
  state = {
    activities: [],
  };

  componentDidMount() {
    // const parkName = this.props.match.params.name;
    const { tripId } = this.props.match.params;
    getTripActivities(tripId).then((activities) => {
      this.setState({ activities });
    });
    // this.setState({ parkId });
    // getSinglePark(parkId).then((park) => {
    //   this.setState({ park }, this.setLoading);
    // });
  }

  render() {
    const { activities } = this.state;
    const showActivities = activities.map((activity) => <ActivityCard key={activity} activity={activity} />);
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
