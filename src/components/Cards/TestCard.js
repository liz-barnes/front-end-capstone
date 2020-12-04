import React from 'react';

export default function TestCard({ park }) {
  return (
    <div>
      <h1>{park.name}</h1>
      <h3>{park.states}</h3>
      <p>{park.description}</p>
      <img src={park.images[1].url} />
    </div>
  );
}
