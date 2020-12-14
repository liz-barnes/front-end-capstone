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
      <div className='Auth'>
          <h1>Welcome to Adevnture Planner</h1>
        <button className='login-btn mt-4' onClick={this.loginClickEvent}>
          {/* <img src={googleImage} alt='Google Sign In Button' /> */}
          Sign in with Google
        </button>
      </div>
    );
  }
}
