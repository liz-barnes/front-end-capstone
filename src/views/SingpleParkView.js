import React, { Component } from 'react';
import { getSinglePark } from '../helpers/data/parkData';
import SingleView from './SingleParkView';
import Loader from '../Components/Loader';

export default class ParkPage extends Component {
  state = {
    park: [],
    loading: true,
    parkHikes: [],
  }

  componentDidMount() {
    const parkId = this.props.match.params.id;
    getSinglePark(parkId).then((park) => {
      this.setState({ park }, this.setLoading);
    });
  }

  setLoading = () => {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { park, loading, parkHikes } = this.state;
    const { userTrips, user } = this.props;

    return (
      <>
      { loading ? (
          <Loader />
      ) : (
        <SingleView park={park} userTrips={userTrips} user={user} getUserTrips={this.getUserTrips} parkHikes={parkHikes}/>
      )}
      </>
    );
  }
}
