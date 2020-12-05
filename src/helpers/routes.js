import React from 'react';
import {
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';

import Home from '../components/Home';
import ParkSearch from '../components/ParkSearch';
import ParkPage from '../components/SingleViewPage/ParkPage';

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        exact
        path="/search-for-parks"
        component={ParkSearch}
      />
      <Route
        exact
        path="/park-name-page"
        component={ParkPage}
      />
    </Switch>
  );
}
