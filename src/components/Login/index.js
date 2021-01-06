import React from 'react';
import Auth from '../Auth';
import Loader from '../Loader';
// import Home from '../Home';
import ParkSearch from '../ParkSearch';

export default function Login({ user, parks, suggestedParks }) {
  const loadComponent = () => {
    let component = '';
    if (user === null) {
      component = <Loader />;
    } else if (user) {
      component = <ParkSearch parks={parks} user={user} suggestedParks={suggestedParks}/>;
    } else {
      component = <Auth />;
    }
    return component;
  };

  return (
    <div className='login-page'>
      {loadComponent()}
    </div>
  );
}
