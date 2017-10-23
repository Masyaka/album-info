import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AlbumSearchPage from './pages/AlbumSearchPage';

export default (
  <Switch>
    <Route exact path="/" component={AlbumSearchPage}/>
  </Switch>
);
