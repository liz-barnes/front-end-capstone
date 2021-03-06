import React, { Component } from 'react';
import Modal from '../components/Modal';
import AddToTripForm from '../components/Forms/AddToTripForm';

export default class Hikes extends Component {
  state = {};

  render() {
    const { singleHike } = this.props.location.state;
    const { user, userTrips } = this.props;
    return (
        <div className="hike-page">
          <div className="hike-header-details">
            <h4 className='hike-name-header'>{singleHike.title}</h4>
            <p>{singleHike.relatedParks.states}</p>
          </div>
          <div className="hike-header-form">
            <Modal title={'Add Hike to Trip'} buttonLabel={'Add to Trip'}>
              <AddToTripForm id={singleHike.id} userTrips={userTrips} user={user} type='hike' />
            </Modal>
          </div>
          <div className="single-hike-page-header-image">
            <img className="single-hike-header-image" src={singleHike.images[0].url} alt={singleHike.images[0].altText}/>
          </div>
      <p className="hike-description">{singleHike.shortDescription}</p>
      <div className="hike-sidebar">
        <div className="hike-info sidebar-section">
          <h6>Difficulty</h6>
          <p>{singleHike.activityDescription}</p>
        </div>
        <div className="hike-info sidebar-section">
          <h6>Duration</h6>
          <p>{singleHike.duration}</p>
          <p>{singleHike.durationDescription}</p>
        </div>
        <div className="hike-location sidebar-section">
          <h6>Location</h6>
          <p>{singleHike.location}</p>
          <p>{singleHike.locationDescription}</p>
        </div>
        <div className="hike-fees sidebar-section">
          <h6>Fees</h6>
          {/* filter a 'fee free park' */}
          <p>${singleHike.feeDescription}</p>
        </div>
        <div className="hike-pets sidebar-section">
          <h6>Pets</h6>
          {
            singleHike.arePetsPermitted === true ? (
              <p>Allowed</p>
            ) : <p>Not Allowed</p>
          }
        </div>
      </div>
    </div>
    );
  }
}
