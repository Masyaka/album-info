import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';

import { albumSearchSuccess } from '../actions/index';

const albumsSearchResult = createReducer({
  [albumSearchSuccess]: (state, payload) => payload
}, {
  releases: [],
  count: 0,
  offset: 0,
});

export default combineReducers({
  albumsSearchResult
});
