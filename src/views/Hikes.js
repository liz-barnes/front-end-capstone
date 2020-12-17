import React, { Component } from 'react';
import Modal from '../components/Modal';
import AddToTripForm from '../components/Forms/AddToTripForm';

export default class Hikes extends Component {
  state = {};

  render() {
    const { singleHike } = this.props.location.state;
    const { user, userTrips } = this.props;
    return (
      <>
        {/* {console.warn('HIKEs props', hike)} */}
        <h1>HIKES</h1>
        <div className="hike-page">
      <Modal title={'Add Hike to Trip'} buttonLabel={'Add to Trip'}>
        <AddToTripForm id={singleHike.id} userTrips={userTrips} user={user} type='hike' />
      </Modal>
      <h4>{singleHike.title}</h4>
      <p>{singleHike.relatedParks.states}</p>
      <img className="single-hike-header-image" src={singleHike.images[0].url} alt={singleHike.images[0].altText}/>
      <p>{singleHike.shortDescription}</p>
      <div className="sidebar">
        <div className="hike-info">
          <h6>Difficulty: {singleHike.difficulty}</h6>
          <h6>Duration: {singleHike.duration}</h6>
          {/* <img src={singleHike.images[0].crops.url} alt={singleHike.title}/> */}
        </div>
        <div className="hike-location">
          <h6>Location</h6>
          <p>{singleHike.locationDescription}</p>
        </div>
        <div className="hike-fees">
          <h6>Fees</h6>
          {/* filter a 'fee free park' */}
          <p>{singleHike.feeDescription}</p>
        </div>
        <div className="hike-pets">
          <h6>Pets</h6>
          <p>{singleHike.arePetsPermitted}</p>
        </div>
      </div>
    </div>

      </>
    );
  }
}
