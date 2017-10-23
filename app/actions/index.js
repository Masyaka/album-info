import { createAction } from 'redux-act';

import { get } from './fetch';

export const albumSearchSuccess = createAction('albumSearchSuccess');
export const setApplicationHeader = createAction('setApplicationHeader');
export const loadStoredAlbums = createAction('loadStoredAlbums');

export function searchAlbums(searchString) {
  return async dispatch => {
    get(`release?query=${searchString}&type=album&fmt=json`)
      .then(json =>
        dispatch(albumSearchSuccess(json))
      );
  };
}
