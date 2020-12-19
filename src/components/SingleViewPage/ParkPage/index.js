import React, { Component } from 'react';
import { getSinglePark } from '../../../helpers/data/parkData';
import SingleView from '../SingleView';
import Loader from '../../Loader';

export default class ParkPage extends Component {
  state = {
    park: [],
    // parkId: '',
    loading: true,
    parkHikes: [],
  }

  componentDidMount() {
    // const parkName = this.props.match.params.name;
    const parkId = this.props.match.params.id;
    // this.setState({ parkId });
    getSinglePark(parkId).then((park) => {
      this.setState({ park }, this.setLoading);
    });
    // .then(() => {
    //   this.getParkHikes();
    // });
    // setTimeout(() => {
    //   this.getParkInfo(parkId);
    //   console.warn('parks props', this.props.parks);
    // }, 2000);
    // this.getParkInfo(parkId);
    // console.warn(parkId);
    // console.warn(parkName);
    // console.warn('id', parkId);
  }

  // getParkHikes = () => {
  //   const { parkCode } = this.state.park;
  //   getParkHike(parkCode).then((hike) => {
  //     this.setState({ parkHikes: hike });
  //   });
  // }

  setLoading = () => {
    this.timer = setInterval(() => {
      this.setState({ loading: false });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // getParkInfo = (parkId) => {
  //   // getSinglePark(parkId).then((park) => {
  //   //   this.setState({ park });
  //   //   <SingleView park={park} />;
  //   //   // console.warn('get it', park.addresses[0].city);
  //   //   // console.warn('post', park);
  //   // });
  //   const parkInfo = this.props.parks.filter((park) => park.id === parkId);
  //   // this.setState({
  //   //   park: parkInfo,
  //   //   success: true,
  //   // });
  //   // console.warn('dis park', parkInfo);
  //   // getSingleBoard(boardId).then((response) => {
  //   //   this.setState({
  //   //     board: response,
  //   //   });
  //   // });
  // };

  //   if (response === 200) {
  //     setTimeout(() => {
  //       staffView.staffView(user);
  //     }, 3000);
  //   } else {
  //     console.warn('failed, come back later');
  //   }
  // })

  render() {
    const { park, loading, parkHikes } = this.state;
    const { userTrips, user } = this.props;

    return (
      <>
      { loading ? (
          <Loader />
      ) : (
        <SingleView park={park} userTrips={userTrips} user={user} getUserTrips={this.getUserTrips} parkHikes={parkHikes}/>
      // {park ? <SingleView park={park} /> : <h1>Park not found</h1>}
        // <SingleView park={park} userTrips={userTrips} user={user} getUserTrips={this.getUserTrips} parkHikes={parkHikes}/>
        // <SingleView park={park} userTrips={userTrips} user={user} getUserTrips={this.getUserTrips}/>
        // <h1>Helpo</h1>
      )}
      </>
    );
  }
}
