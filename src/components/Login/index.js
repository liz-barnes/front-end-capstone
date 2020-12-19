import React from 'react';
import Auth from '../Auth';
import Loader from '../Loader';
// import ParkSearch from '../ParkSearch';
import Home from '../Home';

export default function Login({ user }) {
  const loadComponent = () => {
    let component = '';
    if (user === null) {
      component = <Loader />;
    } else if (user) {
      component = <Home />;
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
