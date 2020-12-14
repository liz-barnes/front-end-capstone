import React, { Component } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/storage';
import getUser from '../../helpers/data/authData';
import { createTrip, updateTrip } from '../../helpers/data/tripData';

export default class CreateNewTrip extends Component {
  state = {
    firebaseKey: this.props.trip?.firebaseKey || '',
    name: this.props.trip?.name || '',
    imageUrl: this.props.trip?.imageUrl || '',
    userId: this.props.trip?.userId || '',
    dates: this.props.trip?.dates || '',
  }

  componentDidMount() {
    const userId = getUser();
    this.setState({ userId });
  }

  handleChange = (e) => {
    // if (e.target.name === 'filename') {
    //   this.setState({ imageUrl: '' });
    //   const storageRef = firebase.storage().ref();
    //   const imagesRef = storageRef.child(`pinterest/${this.state.userId}/${Date.now()}${e.target.files[0].name}`);

    //   imagesRef.put(e.target.files[0]).then((snapshot) => {
    //     snapshot.ref.getDownloadURL().then((imageUrl) => {
    //       this.setState({ imageUrl });
    //     });
    //   });
    // } else {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.btn.setAttribute('disabled', 'disabled');
    if (this.state.firebaseKey === '') {
      createTrip(this.state)
        .then(() => {
          this.props.onUpdate?.();
          this.setState({ success: true });
        });
    } else {
      updateTrip(this.state)
        .then(() => {
          this.props.onUpdate?.(this.props.trip.firebaseKey);
          this.setState({ success: true });
        });
    }
    setTimeout(() => {
      this.setState({ success: false });
    }, 3000);
  }

  render() {
    const { success } = this.state;
    return (
      <>
      { success && (<div className="alert alert-success" role="alert">Your Trip was Updated/Created</div>)
      }
      <form onSubmit={this.handleSubmit}>
        <div>
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          placeholder='Title of Trip'
          className="form-control form-control-lg m-1"
          required
        />
        </div>
        <div>
        <input
          type='text'
          name='dates'
          value={this.state.dates}
          onChange={this.handleChange}
          placeholder='Dates (Ex. 10/04/20 - 10/10/20)'
          className="form-control form-control-lg m-1"
          required
        />
        </div>
        <div>
        <input
          type='url'
          name='imageUrl'
          value={this.state.imageUrl}
          onChange={this.handleChange}
          placeholder='Enter an Image URL or Upload a File'
          className="form-control form-control-lg m-1"
          required
        />
        </div>
        {/* <div>
         <input className="m-2" type="file" id="myFile" name="filename" accept="image/*" onChange={this.handleChange} />
         </div> */}
         <button ref={(btn) => { this.btn = btn; }} className="submit-btn m-2">Submit</button>
      </form>
      </>
    );
  }
}