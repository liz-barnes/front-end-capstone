import React from 'react';
import { Link } from 'react-router-dom';

export default function HikeCard({ hike }) {
  return (
    <div className='hike-card-container'>
      <Link to={{
        pathname: '/parks/hikess/',
        state: {
          singleHike: hike,
        },
      }}>
        <img className='hike-image' id={hike.id} src={hike.images[0].url} alt={hike.images[0].altText}/>
      </Link>
      <h3>{hike.title}</h3>
    </div>
  );
}
