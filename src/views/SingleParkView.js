/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
// import { FaPhoneSquare } from 'react-icons/fa';
// import { GrMailOption } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Modal from '../Components/Modals';
import AddToTripForm from '../Components/Forms/AddToTripForm';

export default function SingleView({
  park, userTrips, user, getUserTrips, parkHikes,
}) {
  const [parkImages, setParkImages] = useState([]);

  useEffect(() => {
    if (!parkImages.length) {
      const result = [];
      park.images.map((img) => result.push(img));
      result.shift();
      setParkImages(result);
    }
  }, [park.images, parkImages]);

  return (
    <div className="park-page">
        <div className="header-details">
          {park.url ? (
            <a
              href={park.url}
              target="_blank"
              rel="noreferrer"
              className="view-code-link"
              >
              <h4>{park.name}</h4>
            </a>
          ) : <h4>{park.name}</h4> }
          {/* <h6>{park.states}</h6> */}
        </div>
        <div className="header-hikes-btn">
          <Link to={{
            pathname: '/parks/hikes/',
            state: {
              singlePark: park,
            },
          }}>
            <p>Hikes</p>
          </Link>
        </div>
        <div className="header-form">
          <Modal title={'Add to a Trip'} header={'Add to Trip'} className={'add-to-trip-btn'}>
            <AddToTripForm id={park.id} userTrips={userTrips} user={user} park={park} getUserTrips={getUserTrips} type='park' />
          </Modal>
        </div>
      <div className="single-page-park-header-image">
        <img className="single-page-header-image"src={park.images[0].url} alt={park.name}/>
      </div>
      <p className="park-description">{park.description}</p>
      <div className='park-images-container'>
        {parkImages.length ? parkImages.map((img) => <div className='img' style={{ backgroundImage: `url(${img.url})` }}></div>) : <h1>No park images</h1>}
      </div>
      <div className="sidebar">
        <div className="park-address sidebar-section">
          <h6>Address</h6>
          <p>{park.addresses[0].line1}</p>
          <p>{park.addresses[0].city}, {park.addresses[0].stateCode}, {park.addresses[0].postalCode}</p>
          {park.directionsUrl ? (
            <a
              href={park.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="view-code-link"
              >
              <p className='direction-url'>Directions</p>
            </a>
          ) : ''}
        </div>
        <div className="park-fees sidebar-section">
          <h6>Fees</h6>
          {park.entranceFees ? park.entranceFees.map((fee) => (
            <div className='fee-description'>
              <p><em>{fee.title}</em>: <b>${fee.cost}</b></p>
              <p>{fee.description}</p>
            </div>

          )) : ''}
          {park.entrancePasses ? park.entrancePasses.map((fee) => (
            <div className='fee-description'>
              <p><em>{fee.title}</em>: <b>${fee.cost}</b></p>
              <p>{fee.description}</p>
            </div>

          )) : ''}
          {/* TO DO: filter a 'fee free park' */}
          {/* <p>${park.entranceFees[0].cost}</p>
          <p>{park.entranceFees[0].description}</p> */}
        </div>
        <div className="park-hours sidebar-section">
          <h6>Hours</h6>
          <p>{park.operatingHours[0].description}</p>
          {/* TO DO: filter through length of exceptions array to get all dates the park is closed */}
          {park.operatingHours[0].length ? <li>{park.operatingHours[0].exceptions[0].startDate}</li> : ''}
        </div>
        <div className="park-contact sidebar-section">
          <h6>Contact</h6>
          {park.contacts.phoneNumbers ? (
            <div className='contact-container'>
              {/* <FaPhoneSquare size='1.5rem' className='contact-icon'/> */}
              <p>{park.contacts.phoneNumbers[0].phoneNumber}</p>
            </div>
          ) : ''}
          {park.contacts.emailAddresses ? (
            <div className='contact-container'>
              {/* <GrMailOption size='1.5rem' className='contact-icon'/> */}
              <p>{park.contacts.emailAddresses[0].emailAddress}</p>
            </div>
          ) : ''}
        </div>
      </div>
    </div>
  );
}
