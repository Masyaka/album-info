import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AlbumSearchPage from './pages/AlbumSearchPage';
import StoredAlbumsPage from './pages/StoredAlbumsPage';

export default (
  <Switch>
    <Route exact path="/" component={AlbumSearchPage}/>
    <Route exact path="/search" component={AlbumSearchPage}/>
    <Route exact path="/stored-albums" component={StoredAlbumsPage}/>
  </Switch>
);
