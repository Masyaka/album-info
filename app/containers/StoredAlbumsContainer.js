import { connect } from 'react-redux';
import { compose } from 'redux';

import AlbumsList from '../components/AlbumsList';
import lss from '../services/localStorageService';
import { StoredAlbumsPage } from '../pages/StoredAlbumsPage';
import doOnComponentDidMount from '../mixins/doOnComponentDidMount';
import { loadStoredAlbums } from '../actions';

const mapStateToProps = (state) => {
  return {
    albums: state.storedAlbums
  };
};

export default compose(
  connect(
    mapStateToProps,
    {
      loadStoredAlbums
    }
  ),
  doOnComponentDidMount(({ props }) => {
    const storedAlbumsMap = lss.get(StoredAlbumsPage.STORED_ALBUMS_KEY);
    props.loadStoredAlbums(
      storedAlbumsMap ? Object.keys(storedAlbumsMap).map( k => storedAlbumsMap[k]) : []
    );
  })
)(AlbumsList);
