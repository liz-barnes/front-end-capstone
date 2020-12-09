import React from 'react';
import { Link } from 'react-router-dom';
// import ParkPage from '../SingleViewPage/ParkPage';

export default function TripCard({ trip, log }) {
  return (
    <div className="trip-card-container">
        {/* <div className="advenutre-card-image" style={{ backgroundImage: `url(${park.images[1].url})` }}></div> */}
        <div>
          <Link className='link-to-single-page' to={`/trips/${trip.firebaseKey}`} trip={trip}>
            <img id={trip.firebaseKey} className="trip-card-image" src={trip.imageUrl} alt={trip.name} onClick={log}/>
          </Link>
          <h1>{trip.name}</h1>
          <p>{trip.dates}</p>
        </div>
    </div>
  );
}
