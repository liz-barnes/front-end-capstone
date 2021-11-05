import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import Modal from '../Modals';
import CreateNewTrip from '../Forms/CreateNewTrip';
// import ParkPage from '../SingleViewPage/ParkPage';

export default function TripCard({ trip, onUpdate, removeTrip }) {
  return (
    <div className="trip-card-container">
        <div>
          <Link className='link-to-single-page' to={`/my-trips/${trip.firebaseKey}`} trip={trip}>
            <img id={trip.firebaseKey} className="trip-card-image" src={trip.imageUrl} alt={trip.name} />
          </Link>
          <div className="trip-btn-container">
            <Modal title={'Update Trip'} label={'edit'} className={'card-icon'}>
              <CreateNewTrip trip={trip} onUpdate={onUpdate}/>
            </Modal>
            <AiOutlineDelete className='card-icon delete-button' onClick={() => removeTrip(trip.firebaseKey)}/>
            {/* <button className="delete-btn" onClick={() => removeTrip(trip.firebaseKey)}>Delete Trip</button> */}
          </div>
          <h3>{trip.name}</h3>
          <h6>{trip.dates}</h6>
        </div>
    </div>
  );
}
