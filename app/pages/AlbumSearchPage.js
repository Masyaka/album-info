import React, { Component, PropTypes } from 'react';

import namedSection from '../mixins/namedSection';
import AlbumSearchContainer from '../containers/AlbumSearchContainer';
import AlbumSearchResultContainer from '../containers/AlbumSearchResultContainer';

export class AlbumSearchPage extends Component {

  static propTypes = {
    albums: PropTypes.array,
  };

  render() {
    return (
      <div style={{width: '400px', margin: '0 auto'}}>
        <AlbumSearchContainer/>
        <AlbumSearchResultContainer/>
      </div>
    );
  }
}

export default namedSection(AlbumSearchPage, 'Album Search');
