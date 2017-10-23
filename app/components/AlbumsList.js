import React, { PureComponent, PropTypes } from 'react';

import { GridList, GridTile } from 'material-ui/GridList';

class AlbumTile extends PureComponent {
  static propTypes = {
    album: PropTypes.object.isRequired,
    getActionIcon: PropTypes.func,
  };

  render() {
    const {
      album,
      getActionIcon,
    } = this.props;

    return (
      <GridTile
        key={album.id}
        title={album.title}
        actionIcon={getActionIcon ? getActionIcon(album, () => this.forceUpdate()) : undefined}
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
  }
}

export default class AlbumsList extends PureComponent {

  static propTypes = {
    albums: PropTypes.array,
    getActionIcon: PropTypes.func,
  };

  render() {
    const {
      albums = [],
      getActionIcon,
    } = this.props;

    return (
      <div>
        <GridList
          cols={4}
          cellHeight={150}
          padding={16}
        >
          {albums.map( (album) => <AlbumTile key={album.id} album={album} getActionIcon={getActionIcon}/>)}
        </GridList>
      </div>
    );
  }
}
