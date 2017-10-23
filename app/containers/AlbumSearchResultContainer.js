import { connect } from 'react-redux';

import AlbumsList from '../components/AlbumsList';

const mapStateToProps = (state) => {
  return {
    albums: state.albumsSearchResult
  };
};

export default connect(
  mapStateToProps,
  {}
)(AlbumsList);
