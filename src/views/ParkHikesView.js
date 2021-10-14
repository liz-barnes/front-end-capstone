import React, { Component, useEffect, useState } from 'react';
import hikeData from '../helpers/data/hikeData';
// import { getParkHike } from '../helpers/data/hikeData';
import HikeCard from '../Components/Cards/HikeCard';
import Loader from '../Components/Loader';
import { HIKES_PER_PAGE } from '../helpers/constants';

export default function ParkHikes({ parkCode }) {
  const [loading, setLoading] = useState(true);
  const [hikes, setHikes] = useState([]);
  // state = {
  //   loading: true,
  //   hike: [],
  // };

  // const [page, setPage] = useState(1);
  // const startIndex = (page - 1) * HIKES_PER_PAGE;
  // const selectedData = data.slice(startIndex, startIndex + HIKES_PER_PAGE);

  useEffect(() => {
    if (loading && !hikes.length) {
      hikeData.getParkHike({ parkCode }).then((response) => {
        console.warn('hike resp', response);
        setHikes(response);
        setLoading(false);
      });
    }
  }, [hikes, loading, parkCode, setLoading]);

  // componentDidMount() {
  //   this.getParkHikes();
  // }

  // think about mapping over each hike to find activity with name "Hiking"
  // getParkHikes = () => {
  //   const { singlePark } = this.props.location.state;
  //   getParkHike(singlePark.parkCode).then((hike) => {
  //     this.setState({ parkHikes: hike });
  //   }).then(() => {
  //     this.setLoading();
  //   });
  // }

  // set loading to false after 100 to stop loader and print data to DOM
  // setLoading = () => {
  //   this.timer = setInterval(() => {
  //     this.setState({ loading: false });
  //   }, 100);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  // showHikes = () => {
  //   const { parkHikes } = this.state;
  //   if (parkHikes) {
  //     parkHikes.map((hike) => <HikeCard key={hike.id} hike={hike} />);
  //   } else {
  //     <h3>No Hikes Found</h3>;
  //   }
  // }
  // const { singlePark } = this.props.location.state;
  // const { loading, parkHikes } = this.state;

  return (
    <>
      <h1 className='park-hikes-header'>Hikes</h1>
      <div className="hike-result-container">
        { loading ? (
          <Loader />
        ) : (
          hikes.map((hike) => console.warn('hikeypoo', hike))
        )}
        {/* {!loading && parkHikes.length === 0 ? <h3>No Hikes Found</h3> : ''} */}
      </div>
    </>
  );
}
