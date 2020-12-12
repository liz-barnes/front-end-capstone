import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import CreateNewTrip from '../Forms/CreateNewTrip';
// import ParkPage from '../SingleViewPage/ParkPage';

export default function TripCard({ trip, log, onUpdate }) {
  return (
    <div className="trip-card-container">
        {/* <div className="advenutre-card-image" style={{ backgroundImage: `url(${park.images[1].url})` }}></div> */}
        <div>
          <Link className='link-to-single-page' to={`/my-trips/${trip.firebaseKey}`} trip={trip}>
            <img id={trip.firebaseKey} className="trip-card-image" src={trip.imageUrl} alt={trip.name} onClick={log}/>
          </Link>
          <Modal title={'Update Trip'} buttonLabel={'Update Trip'}>
            <CreateNewTrip trip={trip} onUpdate={onUpdate}/>
          </Modal>
          <button>Delete Trip</button>
          <h1>{trip.name}</h1>
          <p>{trip.dates}</p>
        </div>
    </div>
  );
}
