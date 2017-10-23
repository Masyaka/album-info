import { connect } from 'react-redux';

import AlbumsList from '../components/AlbumsList';

const mapStateToProps = (state) => {
  return {
    albums: state.albumsSearchResult.releases
  };
};

export default connect(
  mapStateToProps,
  {}
)(AlbumsList);
