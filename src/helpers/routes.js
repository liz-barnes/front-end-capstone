import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Login from '../components/Login';
import Home from '../components/Home';
import ParkSearch from '../components/ParkSearch';
import ParkPage from '../components/SingleViewPage/ParkPage';
import Trips from '../views/Trips';
import SingleTrip from '../views/SingleTrip';
import ParkHikes from '../components/ParkHikes';
import Hikes from '../views/Hikes';

export default function Routes({ parks, user, userTrips }) {
  return (
    <Switch>
      <Route exact path='/' component={() => <Login user={user} />} />
      {/* <PrivateRoute
        exact
        path="/adventure-planner"
        component={Home}
      /> */}
      <PrivateRoute
        exact
        path="/parks"
        component={ParkSearch}
        user={user}
        parks={parks}
      />
      <PrivateRoute
        exact
        path="/parks/:name/:id"
        component={ParkPage}
        parks={parks}
        userTrips={userTrips}
        user={user}
      />
      <PrivateRoute
        exact
        path="/my-trips"
        component={Trips}
        user={user}
      />
      <PrivateRoute
        exact
        path="/my-trips/:tripId"
        component={SingleTrip}
        user={user}
      />
      <PrivateRoute
        exact
        path="/parks/hikes/"
        component={ParkHikes}
        user={user}
      />
      {/* <PrivateRoute
        path="/parks/hikes/page"
        component={Hikes}
        parks={parks}
        userTrips={userTrips}
        user={user}
      /> */}
      <PrivateRoute
        exact
        path="/parks/hikess/"
        component={Hikes}
        parks={parks}
        userTrips={userTrips}
        user={user}
        />

      {/* <Route
        exact
        path="/parks/:name/:id"
        component={() => <ParkPage parks={parks}/>}
      /> */}
    </Switch>
  );
}

// export default function Routes({ parks, user, userTrips }) {
//   return (
//     <Switch>
//       <Route exact path='/' component={() => <Login user={user} />} />
//       <Route
//         exact
//         path="/adventure-planner"
//         component={Home}
//       />
//       <Route
//         exact
//         path="/parks"
//         component={() => <ParkSearch parks={parks} />}
//       />
//       <PropsRoute
//         exact
//         path="/parks/:name/:id"
//         component={ParkPage}
//         parks={parks}
//         userTrips={userTrips}
//         user={user}
//       />
//       <PropsRoute
//         exact
//         path="/my-trips"
//         component={Trips}
//         user={user}
//       />
//       <PropsRoute
//         exact
//         path="/my-trips/:tripId"
//         component={SingleTrip}
//         user={user}
//       />
//       {/* <Route
//         exact
//         path="/parks/:name/:id"
//         component={() => <ParkPage parks={parks}/>}
//       /> */}
//     </Switch>
//   );
// }

// const PropsRoute = ({
//   component: Component, parks, user, userTrips, ...rest
// }) => {
//   const RouteChecker = (props) => (
//     (<Component {...props} parks={parks} user={user} userTrips={userTrips} />));
//   return <Route {...rest} render={(props) => RouteChecker(props)} />;
// };

const PrivateRoute = ({
  component: Component, user, parks, userTrips, ...rest
}) => {
  const RouteChecker = (props) => (user
    ? (<Component {...props} user={user} parks={parks} userTrips={userTrips}/>)
    : (<Redirect to={{ pathname: '/', state: { from: props.locations } }} />));

  return <Route {...rest} render={(props) => RouteChecker(props)} />;
};
