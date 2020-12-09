import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {};

  render() {
    return (
      <div className="home-page">
        <h1>Home</h1>
        <Link className="parks-btn" to="/parks">
          PARKS
        </Link>
      </div>
    );
  }
}
