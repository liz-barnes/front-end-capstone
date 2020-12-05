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
        path="/search-for-parks"
        component={() => <ParkSearch parks={parks} searchInput={searchInput}/>}
      />
      <Route
        exact
        path="/park-name-page"
        component={ParkPage}
      />
    </Switch>
  );
}
