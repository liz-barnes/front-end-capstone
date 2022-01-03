/* eslint-disable import/no-unresolved */
// /* eslint-disable import/no-duplicates */
import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import fbConnection from '../helpers/data/connection';
import './App.scss';
import Routes from '../helpers/routes';
import MyNavbar from '../Components/MyNavbar/index';
import parkData from '../helpers/data/parkData';
// import { getUserTrips } from '../helpers/data/tripData';

fbConnection();

export default function App() {
  const [userData, setUserData] = useState(null);
  const [allParks, setAllParks] = useState([]);
  // class App extends React.Component {
  //   state = {
  //     user: null,
  //     parks: [],
  //     // userTrips: [],
  //     // parks: [],
  //     // hikes: [],
  //     // campgrounds: [],
  //     // suggestedParks: null,
  //   };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          console.warn('user resp', user);
          setUserData(user);
          // this.setState({ user });
        } else {
          setUserData(false);
          // this.setState({ user: false });
          console.warn('user false', user);
        }
      },
    );
    console.warn(allParks, 'parks');
    if (allParks.length === 0) {
      parkData.getParkData().then((response) => {
        console.warn('app parks');
        console.warn(allParks, 'parks in app call');
        setAllParks(response);
      });
    }
  }, [allParks]);

  return (
    <div className="App">
      <Router>
        <MyNavbar user={userData} />
        {userData !== null && <Routes user={userData} />}
      </Router>
    </div>
  );
}

// componentDidMount() {
//   });
//   // console.warn('app running');
// }

// componentWillUnmount() {
//   // this.removeListener();
// }

// getParks = () => {
//   getParkData().then((resp) => {
//     this.setState({
//       parks: resp,
//     });
//   }).then((response) => {
//     this.setSuggestedParks();
//   });
// }

// getHikes = () => {
//   getHikeData().then((resp) => {
//     this.setState({
//       hikes: resp,
//     });
//   });
// }

// getCampgrounds = () => {
//   getCampgroundData().then((resp) => {
//     this.setState({
//       campgrounds: resp,
//     });
//   });
// }

// getUserTrips = () => {
//   const { user } = this.state;
//   if (user) {
//     getUserTrips(user.uid).then((resp) => {
//       this.setState({
//         userTrips: resp,
//       });
//     });
//   }
// }

// setSuggestedParks = () => {
//   const { parks } = this.state;
//   const suggested = [parks[241], parks[467], parks[34]];
//   this.setState({ suggestedParks: suggested });
// }
//     return (
//       <div className="App">
//         <Router>
//           <MyNavbar user={user} />
//           { user !== null && <Routes user={user}/> }
//         </Router>
//      </div>
//     );
//   }
// }

// export default App;

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import fbConnection from '../helpers/data/connection';
// import './App.scss';
// import Routes from '../helpers/routes';
// import MyNavbar from '../Components/MyNavbar';

// fbConnection();
// export default function App() {
//   const [user, setUser] = useState(null);
//   // const [userExist, setUserExist] = useState(false);

//   useEffect(() => {
//     if (!user) {
//       firebase.auth().onAuthStateChanged((userResponse) => {
//         if (userResponse) {
//           console.warn('user resp', userResponse);
//           setUser(userResponse);
//           // setUserExist(true);
//           console.warn('user on mount', user);
//         } else {
//           setUser(false);
//           // setUserExist(false);
//           console.warn('user false', user);
//         }
//       });
//       console.warn('app running');
//       console.warn('user end on function', user);
//     } else {
//       console.warn('user is set', user);
//     }
//     console.warn('app running');
//   }, [user]);
//   // if (!user) {
//   //   firebase.auth().onAuthStateChanged((userResponse) => {
//   //     if (userResponse) {
//   //       console.warn('user resp', userResponse);
//   //       setUser(userResponse);
//   //       console.warn('user on mount', user);
//   //     } else {
//   //       setUser(false);
//   //       console.warn('user false', user);
//   //     }
//   //   });

//   // getHikes = () => {
//   //   hikeData.getHikeData().then((resp) => {
//   //     this.setState({
//   //       hikes: resp,
//   //     });
//   //   });
//   // }

//   // getCampgrounds = () => {
//   //   campgroundData.getCampgroundData().then((resp) => {
//   //     this.setState({
//   //       campgrounds: resp,
//   //     });
//   //   });
//   // }

//   return (
//     <div className="App">
//       <Router>
//         <MyNavbar user={user} />
//         { user !== null && <Routes user={user}/> }
//         {console.warn('user in render', user)}
//       </Router>
//     </div>
//   );
// }
