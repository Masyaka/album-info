import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';

import { albumSearchSuccess } from '../actions/index';

const albumsSearchResult = createReducer({
  [albumSearchSuccess]: (state, payload) => payload
}, []);

export default combineReducers({
  albumsSearchResult
});
