'use strict';

import React from 'react';
import './search_bar.sass';

class SearchBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = { term: '' };
  }

  _onInputChange (event) {
    let term = event.target.value;
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render () {
    return (
      <div className='video__search-bar'>
        <input
          className='video__input-field'
          value={this.state.term}
          onChange={this._onInputChange.bind(this)}
          placeholder='search video' />
      </div>
    );
  }

}

export default SearchBar;
