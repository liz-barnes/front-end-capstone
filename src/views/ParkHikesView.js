/* eslint-disable import/named */
import React, { Component } from 'react';
import { getParkHike } from '../helpers/data/hikeData';
import HikeCard from '../Components/Cards/HikeCard';
import Loader from '../Components/Loader';

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
      console.warn('parkcode', singlePark.parkCode);
      console.warn('hikeeee', hike);
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

    return (
      <>
        <h1 className='park-hikes-header'>{singlePark.name} Hikes</h1>
        <div className="hike-result-container">
          { loading ? (
            <Loader />
          ) : (
            parkHikes.map((hike) => <HikeCard key={hike.id} hike={hike} />)
          )}
          {!loading && parkHikes.length === 0 ? <h3>No Hikes Found</h3> : ''}
        </div>
      </>
    );
  }
}
