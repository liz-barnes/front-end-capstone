/* eslint-disable import/named */
import React, { useEffect, useState } from 'react';
import { getParkHike } from '../helpers/data/hikeData';
import Loader from '../Components/Loader';
import { HIKES_PER_PAGE } from '../helpers/constants';
import Pagination from '../Components/Pagination';
import Hikes from '../Components/Hikes/Hikes';

export default function ParkHikeView({ ...props }) {
  const [hikes, setHikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { singlePark } = props.location.state;

  useEffect(() => {
    const fetchHikes = async () => {
      setLoading(true);
      getParkHike(singlePark.parkCode).then((hike) => {
        setHikes(hike);
      });
      setLoading(false);
    };

    if (!hikes.length) {
      fetchHikes();
    }

    setTotalPages(Math.ceil(hikes.length / HIKES_PER_PAGE));
  }, [hikes, singlePark.parkCode]);

  // think about mapping over each hike to find activity with name "Hiking"

  // set loading to false after 100 to stop loader and print data to DOM

  //   showHikes = () => {
  //     // const { parkHikes } = this.state;
  //     if (!loading & hikes) {
  //       hikes.map((hike) => <HikeCard key={hike.id} hike={hike} />);
  //     } else {
  //       <h3>No Hikes Found</h3>;
  //     }
  //   }

  const handleClick = (num) => {
    setPage(num);
  };

  return (
    <>
    <h1 className='park-hikes-header'>{singlePark.name} Hikes</h1>
    <div className="hike-result-container">
        { loading ? (
        <Loader />
        ) : (
          <div className='park-hike-container'>
            <Hikes hikes={hikes} page={page} />
            <div className='pagination-container'>
              <Pagination totalPages={totalPages} handleClick={handleClick} />
            </div>
          </div>
        )}
        {!loading && hikes.length === 0 ? <h3>No Hikes Found</h3> : ''}
    </div>
    </>
  );
}