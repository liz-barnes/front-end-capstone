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
        // console.warn('new hikes', hike);
        setHikes(hike);
        // console.warn('hike sstate', hikes);
      });
      setLoading(false);

      setTotalPages(Math.ceil(hikes.length / HIKES_PER_PAGE));
    };
    fetchHikes();
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
    <h1 className='park-hikes-header'>{singlePark.parckCode} Hikes</h1>
    <div className="hike-result-container">
        { loading ? (
        <Loader />
        ) : (
          <>
            <Hikes hikes={hikes} page={page} />
            <Pagination totalPages={totalPages} handleClick={handleClick} />
          </>
        )}
        {!loading && hikes.length === 0 ? <h3>No Hikes Found</h3> : ''}
    </div>
    </>
  );
}
