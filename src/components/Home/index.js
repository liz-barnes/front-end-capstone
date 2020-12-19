import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {};

  render() {
    return (
      <div className="home-page">
        <div className="page-banner">
          <h1 className="banner-heading">Welcome to Adventure Planner</h1>
          <h5 className="banner-subheading">Let's start planning your next adventure!</h5>
        </div>
        <h1>Home</h1>
        <Link className="parks-btn" to="/parks">
          PARKS
        </Link>
      </div>
    );
  }
}
