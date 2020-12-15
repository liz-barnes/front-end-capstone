import React, { Component } from 'react';
// import getParkHike from '../../helpers/data/hikeData';
import Hikes from '../../views/Hikes';
import HikeCard from '../Cards/HikeCard';

export default class ParkHikes extends Component {
  render() {
    const { parkHikes } = this.props.location.state;
    return (
      <>
        <h1>Park Hikes</h1>
        {/* <Hikes parkHikes={parkHikes} /> */}
        {parkHikes.map((hike) => <HikeCard key={hike.id} hike={hike} />)}
      </>
    );
  }
}

// export default function ParkHikes({ parkHikes }) {
//   const showHikes = () => parkHikes.map((hike) => <HikeCard key={hike.id} hike={hike} />);

//   return (
//     <>
//       <h1>Park Hikes</h1>
//       <Hikes parkHikes={parkHikes} />
//       {showHikes}
//     </>
//   );
// }
