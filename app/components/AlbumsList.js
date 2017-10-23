import React, { Component, PropTypes } from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

export default class AlbumsList extends Component {

  static propTypes = {
    albums: PropTypes.array,
  };

  render() {
    const {
      albums = [],
    } = this.props;

    return (
      <div>
        <GridList
          cols={4}
          cellHeight={150}
          padding={16}
        >
          {albums.map( (album) => {
            return(
              <GridTile
                key={album.id}
                title={album.title}
                actionIcon={<IconButton/>}
                actionPosition="left"
                titlePosition="top"
                titleBackground="black"
                cols={1}
                rows={2}
                subtitle={album.description}
                onClick={() => {
                }}
              />
            );
          })}
        </GridList>
      </div>
    );
  }
}
