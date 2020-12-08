import React, { Component } from 'react';

export default class ParkPage extends Component {
  componentDidMount() {
    const parkName = this.props.match.params.name;
    console.warn(parkName);
  }

  render() {
    return (
      <div>
        <h1>Help</h1>
      </div>
    );
    // <div className="park-page">
    //   <h1>Park Page</h1>
    //   <h4>{park.name}</h4>
    //   <p>{park.states}</p>

    //   <p>{park.description}</p>

    //   <div className="sidebar">
    //     <div className="park-address">
    //       <h6>Address</h6>
    //       <p>{park.addresses[0].line1}</p>
    //       <p>{park.addresses[0].city}, {park.addresses[0].stateCode}, {park.addresses[0].postalCode}</p>
    //     </div>
    //     <div className="park-fees">
    //       <h6>Fees</h6>
    //       {/* filter a 'fee free park' */}
    //       <p>{park.entranceFees[0].cost}</p>
    //       <p>{park.entranceFees[0].description}</p>
    //     </div>
    //     <div className="park-hours">
    //       <h6>Hours</h6>
    //       <p>{park.operationalHours[0].description}</p>
    //       <p>Park Closed</p>
    //       {/* filter through length of exceptions array to get all dates the park is closed */}
    //       <li>{park.operationalHours[0].exceptions[0].startDate}</li>
    //     </div>
    //     <div className="park-contact">
    //       <h6>Contact</h6>
    //       <p>{park.phoneNumbers[0].phoneNumber}</p>
    //     </div>
    //   </div>
    // </div>
  }
}
