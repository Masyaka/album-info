import React, { Component } from 'react';

import namedSection from '../mixins/namedSection';
import lss from '../services/localStorageService';
import StoredAlbumsContainer from '../containers/StoredAlbumsContainer';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export class StoredAlbumsPage extends Component {

  static STORED_ALBUMS_KEY = 'storedAlbums';

  constructor(props) {
    super(props);
    if(!lss.get(StoredAlbumsPage.STORED_ALBUMS_KEY)) {
      lss.set(StoredAlbumsPage.STORED_ALBUMS_KEY, {});
    }
  }

  render() {
    return (
      <div className="ph+ pt+">
        <StoredAlbumsContainer
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
    );
  }
}

export default namedSection(StoredAlbumsPage, 'Stored Albums');
