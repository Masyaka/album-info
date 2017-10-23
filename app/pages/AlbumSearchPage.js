import React, { Component } from 'react';

import namedSection from '../mixins/namedSection';
import lss from '../services/localStorageService';
import AlbumSearchContainer from '../containers/AlbumSearchContainer';
import AlbumSearchResultContainer from '../containers/AlbumSearchResultContainer';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export class AlbumSearchPage extends Component {

  static STORED_ALBUMS_KEY = 'storedAlbums';

  constructor(props) {
    super(props);
    if(!lss.get(AlbumSearchPage.STORED_ALBUMS_KEY)) {
      lss.set(AlbumSearchPage.STORED_ALBUMS_KEY, {});
    }
  }

  render() {
    return (
      <div className="ph+">
        <AlbumSearchContainer/>
        <AlbumSearchResultContainer
          getActionIcon={ (album, onActionExecute) => {
            const storedAlbumsMap = lss.get(AlbumSearchPage.STORED_ALBUMS_KEY);
            if(storedAlbumsMap[album.id]) {
              return (
                <IconButton
                  onTouchTap={ () => {
                    const newStoredAlbums = lss.get(AlbumSearchPage.STORED_ALBUMS_KEY);
                    delete newStoredAlbums[album.id];
                    lss.set(
                      AlbumSearchPage.STORED_ALBUMS_KEY,
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
                    AlbumSearchPage.STORED_ALBUMS_KEY,
                    {...lss.get(AlbumSearchPage.STORED_ALBUMS_KEY), [album.id]: album}
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
    );
  }
}

export default namedSection(AlbumSearchPage, 'Album Search');
