import React from 'react';

export default function CampTestCard({ camp }) {
  return (
    <div>
      <h1>{camp.name}</h1>
      <h3>{camp.addresses[0].stateCode}</h3>
      <p>{camp.description}</p>
    </div>
  );
}
