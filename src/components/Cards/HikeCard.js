import React from 'react';

export default function HikeCard({ hike }) {
  return (
    <div>
      <h1>{hike.title}</h1>
      <h3>{hike.location}</h3>
      <p>{hike.shortDescription}</p>
      <img className="hike-image" src={hike.images[0].url} alt={hike.images[0].altText}/>
    </div>
  );
}
