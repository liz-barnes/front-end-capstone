import React, { Component } from 'react';
import 'firebase/storage';
import { addTripActivity } from '../../helpers/data/mergedData';
import { getUserTrips } from '../../helpers/data/tripData';

export default class AddToTripForm extends Component {
  state = {
    activityId: '',
    tripId: '',
    userId: '',
    type: this.props.type,
    userTrips: [],
  };

  componentDidMount() {
    this.getTrips();
  }

  getTrips = () => {
    const user = this.props.user.uid;
    getUserTrips(user).then((response) => {
      this.setState({
        userTrips: response,
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      activityId: this.props.id,
      userId: this.props.user.uid,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.btn.setAttribute('disabled', 'disabled');
    this.setState({
      activityId: this.props.id, tripId: this.state.firebaseKey, userId: this.props.user.uid, type: this.props.type,
    });
    addTripActivity(this.state).then((resp) => {
      this.setState({ success: true, firebaseKey: resp.data.firebaseKey });
    });
  };

  render() {
    const { success, userTrips } = this.state;
    // const { userTrips } = this.props;
    const showTripOptions = () => userTrips.map((trip) => (<option key={trip.firebaseKey} value={trip.firebaseKey}>{trip.name}</option>));
    return (
      <>
        {success && (
          <div className="alert alert-success" role="alert">
            Your Adventure was Added
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-dropdown d-flex justify-content-center justify-content-around">
            <div>
            <select
              name="tripId"
              value={this.state.tripId}
              onChange={this.handleChange}
              placeholder="Select A Trip"
              required
            >
              <option value="">Select a Trip</option>
              {showTripOptions()}
            </select>
            </div>
          </div>
          <button
            ref={(btn) => {
              this.btn = btn;
            }}
            className="submit-btn m-2"
            // onClick={(e) => this.handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}
