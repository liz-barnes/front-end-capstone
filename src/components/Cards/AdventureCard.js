import React from 'react';
import { Link } from 'react-router-dom';

export default function AdventureCard({ park, log }) {
  return (
    <div className='adventure-card-container'>
        <div className='adventure-card-image-container'>
          <Link className='link-to-single-page' to={`/parks/${park.name}/${park.id}`} park={park}>
            <img id={park.id} className="advenutre-card-image" src={park.images[0].url} alt={park.name} onClick={log}/>
          </Link>
          <h5 className='card-heading' >{park.name}</h5>
        </div>
    </div>
  );
}
