import React from 'react';
import Auth from '../Auth';
import Loader from '../Loader';
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
    <div className='home-page'>
      <h1>Welcome to Adevnture Planner</h1>
      {loadComponent()}
    </div>
  );
}
