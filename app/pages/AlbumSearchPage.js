import React, { Component } from 'react';

import namedSection from '../mixins/namedSection';
import AlbumSearchContainer from '../containers/AlbumSearchContainer';
import AlbumSearchResultContainer from '../containers/AlbumSearchResultContainer';

export class AlbumSearchPage extends Component {
  render() {
    return (
      <div className="ph+">
        <AlbumSearchContainer/>
        <AlbumSearchResultContainer/>
      </div>
    );
  }
}

export default namedSection(AlbumSearchPage, 'Album Search');
