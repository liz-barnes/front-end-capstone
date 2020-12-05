import React from 'react';

export default function HikeTestCard({ hike }) {
  return (
    <div>
      <h1>{hike.title}</h1>
      <h3>{hike.location}</h3>
      <p>{hike.shortDescription}</p>
      {/* <img src={hike.images[0].url} /> */}
    </div>
  );
}
