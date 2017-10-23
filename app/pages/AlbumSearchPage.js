import React, { Component } from 'react';

import namedSection from '../mixins/namedSection';
import lss from '../services/localStorageService';
import AlbumSearchContainer from '../containers/AlbumSearchContainer';
import AlbumSearchResultContainer from '../containers/AlbumSearchResultContainer';
import { StoredAlbumsPage } from './StoredAlbumsPage';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export class AlbumSearchPage extends Component {

  constructor(props) {
    super(props);
    if(!lss.get(StoredAlbumsPage.STORED_ALBUMS_KEY)) {
      lss.set(StoredAlbumsPage.STORED_ALBUMS_KEY, {});
    }
  }

  render() {
    return (
      <div className="ph+">
        <AlbumSearchContainer/>
        <div className="pt+">
          <AlbumSearchResultContainer
            getActionIcon={ (album, onActionExecute) => {
              const storedAlbumsMap = lss.get(StoredAlbumsPage.STORED_ALBUMS_KEY);
              if(storedAlbumsMap[album.id]) {
                return (
                  <IconButton
                    onTouchTap={ () => {
                      const newStoredAlbums = lss.get(StoredAlbumsPage.STORED_ALBUMS_KEY);
                      delete newStoredAlbums[album.id];
                      lss.set(
                        StoredAlbumsPage.STORED_ALBUMS_KEY,
                        newStoredAlbums
                      );
                      onActionExecute();
                    }}
                  >
                    <FontIcon
                      className="material-icons"
                      color="white"
                    >
                      delete
                    </FontIcon>
                  </IconButton>
                );
              }
              return (
                <IconButton
                  onTouchTap={ () => {
                    lss.set(
                      StoredAlbumsPage.STORED_ALBUMS_KEY,
                      {...lss.get(StoredAlbumsPage.STORED_ALBUMS_KEY), [album.id]: album}
                    );
                    onActionExecute();
                  }}
                >
                  <FontIcon
                    className="material-icons"
                    color="white"
                  >
                    file_download
                  </FontIcon>
                </IconButton>
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default namedSection(AlbumSearchPage, 'Album Search');
