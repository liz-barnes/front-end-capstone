import React from 'react';
import {
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';

import Login from '../components/Login';
import Home from '../components/Home';
import ParkSearch from '../components/ParkSearch';
import ParkPage from '../components/SingleViewPage/ParkPage';
import Trips from '../views/Trips';

export default function Routes({ parks, user }) {
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
      />
      <Route
        exact
        path="/my-trips"
        component={() => <Trips user={user} />}
      />
      {/* <Route
        exact
        path="/parks/:name/:id"
        component={() => <ParkPage parks={parks}/>}
      /> */}
    </Switch>
  );
}

const PropsRoute = ({ component: Component, parks, ...rest }) => {
  const RouteChecker = (props) => (
    (<Component {...props} parks={parks} />));
  return <Route {...rest} render={(props) => RouteChecker(props)} />;
};
