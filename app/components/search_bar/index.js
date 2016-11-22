'use strict';

import React from 'react';

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
      <div>
        <input
          value={this.state.term}
          onChange={this._onInputChange.bind(this)} />
      </div>
    );
  }

}

export default SearchBar;
