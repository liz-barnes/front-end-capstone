import React from 'react';
import { Link } from 'react-router-dom';

export default function HikeCard({ hike }) {
  return (
    <div>
      <Link to={{
        pathname: `/parks/hikes/${hike.id}`,
        hike,
      }}>
        <img className="hike-image" src={hike.images[0].url} alt={hike.images[0].altText}/>
      </Link>
      <h3>{hike.title}</h3>
    </div>
  );
}
