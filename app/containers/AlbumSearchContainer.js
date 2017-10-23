import { connect } from 'react-redux';

import { searchAlbums } from '../actions/index';
import AlbumSearch from '../components/AlbumSearch';

export default connect(
  null,
  {
    searchAlbums
  }
)(AlbumSearch);
