import React from 'react';
import {
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';

import Home from '../components/Home';
import ParkSearch from '../components/ParkSearch';
import ParkPage from '../components/SingleViewPage/ParkPage';

export default function Routes({ parks, searchInput }) {
  return (
    <Switch>
      <Route
        exact
        path="/"
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
