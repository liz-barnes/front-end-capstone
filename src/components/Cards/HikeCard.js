import React from 'react';
import { Link } from 'react-router-dom';

export default function HikeCard({ hike }) {
  return (
    <div className='hike-card-container'>
      <div className='hike-card-header'>
        <Link to={{
          pathname: '/parks/hikess/',
          state: {
            singleHike: hike,
          },
        }}>
          <img className='hike-image' id={hike.id} src={hike.images[0].url} alt={hike.images[0].altText}/>
        </Link>
        <h3 className='hike-title'>{hike.title}</h3>
      </div>
      <p className='hike-short-description'>{hike.shortDescription}</p>
      <div className='hike-info'>
        <p>Duration:</p>
        <p>Distance:</p>
        <p>Pets:</p>
        <p>Location:</p>
      </div>
      {/* <p>{hike.accessibilityInformation}</p>
      <p>{hike.durationDescription}</p>
      <p>{hike.feeDescription}</p>
      <p>{hike.longDescription}</p>
      <p>{hike.petsDescription}</p>
      <p>{hike.reservationDescription}</p>
      <p>{hike.shortDescription}</p>
      <p>{hike.timeOfDayDescription}</p> */}
    </div>
  );
}
