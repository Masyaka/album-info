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
      <div style={{width: '400px', margin: '0 auto'}}>
        <GridList
          cols={1}
          cellHeight={150}
          padding={1}
        >
          {albums.map( (album) => {
            return(
              <GridTile
                key={album.id}
                title={album.title}
                actionIcon={<IconButton/>}
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
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
