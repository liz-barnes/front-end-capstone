import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Loader from '../Loader';
import ParkSearch from '../ParkSearch';
import parkData from '../../helpers/data/parkData';

export default function Auth({ user }) {
  const [allParks, setAllParks] = useState([]);

  const loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  const getParks = () => {
    if (allParks.length === 0) {
      parkData.getParkData().then((response) => {
        setAllParks(response);
      });
    }
  };

  const loadComponent = () => {
    let component = '';
    if (user === null) {
      component = <Loader />;
    } else if (user) {
      getParks();
      component = <ParkSearch user={user} parks={allParks}/>;
    } else {
      component = <div className="Auth">
                    <div className='page-banner'>
                      <h1 className="banner-heading">Welcome to Adventure Planner</h1>
                      <h5 className="banner-subheading">Sign in to start planning your next adventure!</h5>
                    </div>
                    <button className='login-btn mt-4' onClick={loginClickEvent}>
                      Sign in with Google
                    </button>
                  </div>;
    }
    return component;
  };

  return (
    <div className='login-page'>
      {loadComponent()}
    </div>
  );
}
