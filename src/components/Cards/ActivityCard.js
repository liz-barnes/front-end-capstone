import React from 'react';
import { Link } from 'react-router-dom';

export default function ActivityCard({ activity, removeActivity, onUpdate }) {
  return (
    <div className="activity-card-container">
        <div>
          <Link className='link-to-single-page' to={`/parks/${activity.name}/${activity.id}`} park={activity}>
            <img id={activity.id} className="advenutre-card-image" src={activity.images[1].url} alt={activity.name} />
          </Link>
        </div>
        <button onClick={() => removeActivity(activity.id)} >Delete from Trip</button>
        <h3>{activity.name}</h3>
        {/* <p>{activity.addresses[0].city}, {activity.addresses[0].stateCode}</p> */}
    </div>
  );
}
