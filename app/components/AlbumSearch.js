import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';


export default class AlbumSearch extends Component {
  static propTypes = {
    searchAlbums: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }

  onSearch = () => {
    const {
      searchAlbums
    } = this.props;

    searchAlbums(this.state.searchString);
  };

  render() {
    return (
      <div>
        <TextField
          fullWidth
          value={this.state.searchString}
          onChange={ e => this.setState({searchString: e.target.value})}
        />
        <IconButton
          onTouchTap={this.onSearch}
        >
          <FontIcon className="material-icons">
            search
          </FontIcon>
        </IconButton>
      </div>
    );
  }
}
