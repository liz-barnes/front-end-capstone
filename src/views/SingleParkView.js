/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Components/Modals';
import AddToTripForm from '../Components/Forms/AddToTripForm';

export default function SingleView({
  park, userTrips, user, getUserTrips, parkHikes,
}) {
  const [parkImages, setParkImages] = useState([]);

  useEffect(() => {
    if (!parkImages.length) {
      // getParkImages();
      const result = [];
      park.images.map((img) => result.push(img));
      setParkImages(result);
    }
  }, [park.images, parkImages]);

  const showImages = () => {
    // const result = [];

    // park.images.map((img) => result.push(img));
    // setParkImages(result);
    for (let i = 1; i < parkImages.length; i++) {
      <div className={`img${i}`} style={{ backgroundImage: `url(${parkImages[i].url})` }}></div>;
      // parkImages.map((img) => console.warn('immm', img));
    }
  };

  return (
    <div className="park-page">
        <div className="header-details">
          <h4>{park.name}</h4>
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
          <Modal title={'Add to a Trip'} buttonLabel={'Add to Trip'}>
            <AddToTripForm id={park.id} userTrips={userTrips} user={user} park={park} getUserTrips={getUserTrips} type='park' />
          </Modal>
        </div>
      <div className="single-page-park-header-image">
        <img className="single-page-header-image"src={park.images[0].url} alt={park.name}/>
      </div>
      <p className="park-description">{park.description}</p>
      {parkImages.length ? parkImages.map((img) => <div className='img' style={{ backgroundImage: `url(${img.url})` }}></div>) : <h1>No park images</h1>}
      {showImages()}
      {/* {console.warn(park.images, 'park img')} */}
      {/* <div className="img1" style={{ backgroundImage: `url(${park.images[1].url})` }}>
      </div>
      <div className="img2" style={{ backgroundImage: `url(${park.images[2].url})` }}>
      </div>
      <div className="img3" style={{ backgroundImage: `url(${park.images[3].url})` }}>
      </div>
      <div className="img4" style={{ backgroundImage: `url(${park.images[4].url})` }}>
      </div> */}
      <div className="sidebar">
        <div className="park-address sidebar-section">
          <h6>Address</h6>
          <p>{park.addresses[0].line1}</p>
          <p>{park.addresses[0].city}, {park.addresses[0].stateCode}, {park.addresses[0].postalCode}</p>
        </div>
        <div className="park-fees sidebar-section">
          <h6>Fees</h6>
          {/* filter a 'fee free park' */}
          <p>${park.entranceFees[0].cost}</p>
          <p>{park.entranceFees[0].description}</p>
        </div>
        <div className="park-hours sidebar-section">
          <h6>Hours</h6>
          <p>{park.operatingHours[0].description}</p>
          {/* filter through length of exceptions array to get all dates the park is closed */}
          {park.operatingHours[0].length ? <li>{park.operatingHours[0].exceptions[0].startDate}</li> : ''}
        </div>
        <div className="park-contact sidebar-section">
          <h6>Contact</h6>
          <p>{park.contacts.phoneNumbers[0].phoneNumber}</p>
        </div>
      </div>
    </div>
  );
}
