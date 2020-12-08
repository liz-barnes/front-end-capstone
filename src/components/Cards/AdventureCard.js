import React from 'react';

export default function AdventureCard({ park }) {
  return (
    <div className="adventure-card-container">
        <div className="advenutre-card-image" style={{ backgroundImage: `url(${park.images[1].url})` }}></div>
        <div>
            <img className="advenutre-card-image" src={park.images[1].url} alt={park.name}/>
            <h1>{park.name}</h1>
        </div>
    </div>
  );
}
