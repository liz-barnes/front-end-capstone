import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class Auth extends Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
    <div className="Auth">
      <div className='page-banner'>
        <h1 className="banner-heading">Welcome to Adventure Planner</h1>
        <h5 className="banner-subheading">Sign in to start planning your adventure!</h5>
      </div>
        <button className='login-btn mt-4' onClick={this.loginClickEvent}>
          {/* <img src={googleImage} alt='Google Sign In Button' /> */}
          Sign in with Google
        </button>
      </div>
    );
  }
}
