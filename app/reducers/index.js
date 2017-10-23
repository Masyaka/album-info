import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';

import { albumSearchSuccess, loadStoredAlbums, setApplicationHeader } from '../actions/index';

const albumsSearchResult = createReducer({
  [albumSearchSuccess]: (state, payload) => payload
}, {
  releases: [],
  count: 0,
  offset: 0,
});

const storedAlbums = createReducer({
  [loadStoredAlbums]: (state, payload) => payload
}, []);

const applicationHeader = createReducer({
  [setApplicationHeader]: (state, payload) => payload
}, '');

export default combineReducers({
  albumsSearchResult,
  storedAlbums,
  applicationHeader,
});
