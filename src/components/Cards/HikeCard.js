import React from 'react';
import { Link } from 'react-router-dom';

export default function HikeCard({ hike }) {
  const { title } = hike;
  const newTitle = title.replace(/Hike /g, '');
  const browserTitle = newTitle.replace(/ /g, '-');
  return (
    <div className='hike-card-container'>
        <Link to={{
          pathname: `/park/hike/${browserTitle}`,
          state: {
            singleHike: hike,
          },
        }}>
          <img className='hike-image' id={hike.id} src={hike.images[0].url} alt={hike.images[0].altText}/>
        </Link>
        <h3 className='hike-title'>{newTitle}</h3>
      <p className='hike-short-description'>{hike.shortDescription}</p>
      <div className='hike-info'>
        <p><b>Duration:</b> {hike.duration}</p>
        <p><b>Distance:</b></p>
        <p><b>Pets:</b> {hike.arePetsPermitted ? 'Yes' : 'No'}</p>
        <p><b>Reservation:</b> {hike.isReservationRequired === true ? 'Required' : 'Not Required'}</p>
        {/* {hike.isReservationRequired ? <p><b>Reservation:</b> Required</p> : <p>Not Required</p>}
        <p><b>Location:</b> {hike.isReservationRequired ? }{hike.location}</p> */}
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
