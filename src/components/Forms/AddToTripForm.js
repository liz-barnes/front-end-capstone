import React, { Component } from 'react';
// import firebase from 'firebase/app';
import 'firebase/storage';
import { addTripActivity } from '../../helpers/data/mergedData';
// import getUid from '../../helpers/data/authData';
// import { createPin, updatePin } from '../../helpers/data/pinData';
// import { getUserBoards } from '../../helpers/data/boardData';
// import { createPinOfBoard, getJoinedObject, updateJoinedObject } from '../../helpers/data/pinBoardData';

export default class AddToTripForm extends Component {
  state = {
    activityId: '',
    tripId: '',
    userId: '',
    // firebaseKey: this.props.pin?.firebaseKey || '',
    // name: this.props.pin?.name || '',
    // imageUrl: this.props.pin?.imageUrl || '',
    // userId: this.props.pin?.userId || '',
    // description: this.props.pin?.description || '',
    // private: this.props.pin?.private || 'true',
    // boards: [],
    // boardId: this.props.pin?.boardId || '',
  };

  // componentDidMount() {
  //   this.getBoards();
  //   // const userId = getUid();
  //   // this.setState({ userId });
  // }

  // getBoards = () => {
  //   const currentUserId = getUid();
  //   getUserBoards(currentUserId).then((response) => {
  //     this.setState(
  //       {
  //         userId: currentUserId,
  //         boards: response,
  //       },
  //       this.setLoading,
  //     );
  //   });
  // };

  handleChange = (e) => {
    // if (e.target.name === 'filename') {
    //   this.setState({ imageUrl: '' });
    //   const storageRef = firebase.storage().ref();
    //   const imagesRef = storageRef.child(
    //     `pinterest/${this.state.userId}/${Date.now()}${e.target.files[0].name}`,
    //   );

    //   imagesRef.put(e.target.files[0]).then((snapshot) => {
    //     snapshot.ref.getDownloadURL().then((imageUrl) => {
    //       this.setState({ imageUrl });
    //     });
    //   });
    // } else {
    this.setState({
      [e.target.name]: e.target.value,
      activityId: this.props.id,
      userId: this.props.user.uid,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.btn.setAttribute('disabled', 'disabled');
    const userTripObject = {
      parkId: this.props.parkId,
      tripId: this.state.firebaseKey,
      userId: this.props.user.uid,
    };
    this.setState({ activityId: this.props.id, tripId: this.state.firebaseKey, userId: this.props.user.uid });
    addTripActivity(this.state).then((resp) => {
      // this.props.onUpdate?.();
      this.setState({ success: true, firebaseKey: resp.data.firebaseKey });
    });
    // .then(() => {
    //   setTimeout(() => {
    //     const pinOfBoardsObject = {
    //       boardId: this.state.boardId,
    //       pinId: this.state.firebaseKey,
    //       userId: this.state.userId,
    //     };
    //     createPinOfBoard(pinOfBoardsObject);
    //   }, 3000);
    // });
  };

  render() {
    // const trips = this.props.getUserTrips();
    const { success } = this.state;
    const { userTrips } = this.props;
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
