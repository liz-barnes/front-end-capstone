import React, { Component } from 'react';
import { getParkHike } from '../../helpers/data/hikeData';
import Hikes from '../../views/Hikes';
import HikeCard from '../Cards/HikeCard';
import Loader from '../Loader';

export default class ParkHikes extends Component {
  state = {
    loading: true,
    hike: [],
  };

  componentDidMount() {
    this.getParkHikes();
  }

  // think about mapping over each hike to find activity with name "Hiking"
  getParkHikes = () => {
    const { singlePark } = this.props.location.state;
    getParkHike(singlePark.parkCode).then((hike) => {
      this.setState({ parkHikes: hike });
    }).then(() => {
      this.setLoading();
    });
  }

  // set loading to false after 100 to stop loader and print data to DOM
  setLoading = () => {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  showHikes = () => {
    const { parkHikes } = this.state;
    if (parkHikes) {
      parkHikes.map((hike) => <HikeCard key={hike.id} hike={hike} />);
    } else {
      <h3>No Hikes Found</h3>;
    }
  }

  render() {
    const { singlePark } = this.props.location.state;
    const { loading, parkHikes } = this.state;
    // const showHikes = parkHikes.length ? parkHikes.map((hike) => <HikeCard key={hike.id} hike={hike} />) : <h3>No Hikes Found</h3>;

    return (
      <>
        <h1>{singlePark.name} Hikes</h1>
        { loading ? (
          <Loader />
        ) : (
          parkHikes.map((hike) => <HikeCard key={hike.id} hike={hike} />)
        )}
        {/* {this.showHikes()} */}
        {/* {parkHikes.length === [] } */}
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
