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

export default function Routes({ parks, user, userTrips }) {
  return (
    <Switch>
      <Route exact path='/' component={() => <Login user={user} />} />
      <Route
        exact
        path="/adventure-planner"
        component={Home}
      />
      <Route
        exact
        path="/parks"
        component={() => <ParkSearch parks={parks} />}
      />
      <PropsRoute
        exact
        path="/parks/:name/:id"
        component={ParkPage}
        parks={parks}
        userTrips={userTrips}
        user={user}
      />
      <PropsRoute
        exact
        path="/my-trips"
        component={Trips}
        user={user}
      />
      <PropsRoute
        exact
        path="/my-trips/:tripId"
        component={SingleTrip}
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

const PropsRoute = ({
  component: Component, parks, user, userTrips, ...rest
}) => {
  const RouteChecker = (props) => (
    (<Component {...props} parks={parks} user={user} userTrips={userTrips} />));
  return <Route {...rest} render={(props) => RouteChecker(props)} />;
};

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const RouteChecker = (props) => (user
    ? (<Component {...props} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: props.locations } }} />));

  return <Route {...rest} render={(props) => RouteChecker(props)} />;
};
