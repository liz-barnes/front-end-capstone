import React from 'react';
import { Link } from 'react-router-dom';
import ParkPage from '../SingleViewPage/ParkPage';

export default function AdventureCard({ park, log }) {
  return (
    <div className="adventure-card-container">
        <div className="advenutre-card-image" style={{ backgroundImage: `url(${park.images[1].url})` }}></div>
        <div>
          <Link className='link-to-single-page' to={`/parks/${park.name}/${park.id}`} park={park}>
            <img id={park.id} className="advenutre-card-image" src={park.images[1].url} alt={park.name} onClick={log}/>
          </Link>
          <h1>{park.name}</h1>
        </div>
    </div>
  );
}
