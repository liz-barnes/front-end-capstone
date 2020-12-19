import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../Modal';
import AddToTripForm from '../../Forms/AddToTripForm';
import ParkHikes from '../../ParkHikes';

export default function SingleView({
  park, userTrips, user, getUserTrips, parkHikes,
}) {
  // state = {
  //     park: [],
  // }
  // const { park } = this.state;
  return (
    <div className="park-page">
      {/* <div className="header-bar"> */}
        <div className="header-details">
          <h4>{park.name}</h4>
          {/* <p>{park.states}</p> */}
        </div>
        <div className="header-hikes-btn">
          <Link to={{
            pathname: '/parks/hikes/',
            state: {
              singlePark: park,
            },
          }}>
            <p>Hikes</p>
            {/* {parkHikes ? <button>Hikes</button> : <h3>No Hikes</h3>} */}
          </Link>
        </div>
        <div className="header-form">
          <Modal title={'Add to a Trip'} buttonLabel={'Add to Trip'}>
            <AddToTripForm id={park.id} userTrips={userTrips} user={user} park={park} getUserTrips={getUserTrips} type='park' />
          </Modal>
        </div>
      {/* </div> */}
      {/* <button>Add to trip</button> */}
      <div className="single-page-park-header-image">
        <img className="single-page-header-image"src={park.images[0].url} alt={park.name}/>
      </div>
      <p className="park-description">{park.description}</p>
      <div className="img1" style={{ backgroundImage: `url(${park.images[1].url})` }}>
        {/* <img className="img1" src={park.images[1].url}/> */}
      </div>
      <div className="img2" style={{ backgroundImage: `url(${park.images[2].url})` }}>
        {/* <img className="img1" src={park.images[1].url}/> */}
      </div>
      <div className="img3" style={{ backgroundImage: `url(${park.images[3].url})` }}>
        {/* <img className="img1" src={park.images[1].url}/> */}
      </div>
      <div className="img4" style={{ backgroundImage: `url(${park.images[4].url})` }}>
        {/* <img className="img1" src={park.images[1].url}/> */}
      </div>
      <div className="sidebar">
        <div className="park-address">
          <h6>Address</h6>
          <p>{park.addresses[0].line1}</p>
          <p>{park.addresses[0].city}, {park.addresses[0].stateCode}, {park.addresses[0].postalCode}</p>
        </div>
        <div className="park-fees">
          <h6>Fees</h6>
          {/* filter a 'fee free park' */}
          <p>${park.entranceFees[0].cost}</p>
          <p>{park.entranceFees[0].description}</p>
        </div>
        <div className="park-hours">
          <h6>Hours</h6>
          <p>{park.operatingHours[0].description}</p>
          <p>Park Closed</p>
          {/* filter through length of exceptions array to get all dates the park is closed */}
          {park.operatingHours[0].length ? <li>{park.operatingHours[0].exceptions[0].startDate}</li> : ''}
        </div>
        <div className="park-contact">
          <h6>Contact</h6>
          <p>{park.contacts.phoneNumbers[0].phoneNumber}</p>
        </div>
      </div>
    </div>
  );
}
